/**
 * Accessibility Tests
 * Tests WCAG 2.1 compliance and accessibility features across the website
 */

describe('Accessibility Tests', () => {
  const pages = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Events', url: '/events' },
    { name: 'News', url: '/news' },
    { name: 'Contact', url: '/contact' },
    { name: 'Video Gallery', url: '/video-gallery' },
    { name: 'College History', url: '/college-history' },
    { name: 'EXCO', url: '/exco' },
    { name: 'Membership Terms', url: '/membership-terms' }
  ];

  beforeEach(() => {
    cy.injectAxe();
  });

  describe('WCAG 2.1 Compliance', () => {
    pages.forEach(page => {
      it(`should pass accessibility audit on ${page.name} page`, () => {
        cy.visit(page.url);
        cy.waitForPageLoad();
        cy.checkA11y(null, {
          rules: {
            'color-contrast': { enabled: true },
            'keyboard-navigation': { enabled: true },
            'focus-management': { enabled: true },
            'aria-labels': { enabled: true },
            'heading-hierarchy': { enabled: true }
          }
        });
      });
    });

    it('should have no critical accessibility violations', () => {
      cy.visit('/');
      cy.checkA11y(null, {
        includedImpacts: ['critical', 'serious']
      });
    });

    it('should pass Level AA compliance', () => {
      cy.visit('/');
      cy.checkA11y(null, {
        tags: ['wcag2a', 'wcag2aa']
      });
    });
  });

  describe('Keyboard Navigation', () => {
    it('should support tab navigation through all interactive elements', () => {
      cy.visit('/');
      cy.get('body').tab();
      cy.focused().should('be.visible');

      // Test tab order
      cy.get('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])')
        .each($el => {
          cy.wrap($el).tab();
          cy.focused().should('be.visible');
        });
    });

    it('should support shift+tab for reverse navigation', () => {
      cy.visit('/');
      cy.get('body').tab().tab().tab();
      cy.focused().tab({ shift: true });
      cy.focused().should('be.visible');
    });

    it('should have logical tab order', () => {
      cy.visit('/');
      const tabOrder = [];
      cy.get('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])')
        .each($el => {
          const rect = $el[0].getBoundingClientRect();
          tabOrder.push({ element: $el[0], top: rect.top, left: rect.left });
        })
        .then(() => {
          // Verify tab order follows visual layout (top to bottom, left to right)
          for (let i = 1; i < tabOrder.length; i++) {
            const current = tabOrder[i];
            const previous = tabOrder[i - 1];
            expect(current.top >= previous.top ||
              (current.top === previous.top && current.left >= previous.left))
              .to.be.true;
          }
        });
    });

    it('should support Enter and Space key activation', () => {
      cy.visit('/');
      cy.get('[data-testid="nav-link"]').first().focus().type('{enter}');
      cy.url().should('not.equal', Cypress.config().baseUrl + '/');
    });

    it('should support arrow key navigation in menus', () => {
      cy.visit('/');
      cy.get('[data-testid="dropdown-menu"]').first().focus().type('{downarrow}');
      cy.focused().should('have.attr', 'role', 'menuitem');
    });

    it('should support Escape key to close modals', () => {
      cy.visit('/events');
      cy.get('[data-testid="event-card"]').first().click();
      cy.get('[data-testid="event-modal"]').should('be.visible');
      cy.get('body').type('{esc}');
      cy.get('[data-testid="event-modal"]').should('not.be.visible');
    });
  });

  describe('Focus Management', () => {
    it('should have visible focus indicators', () => {
      cy.visit('/');
      cy.get('a, button, input, select, textarea').each($el => {
        cy.wrap($el).focus();
        cy.focused().should('have.css', 'outline').and('not.equal', 'none');
      });
    });

    it('should trap focus in modals', () => {
      cy.visit('/events');
      cy.get('[data-testid="event-card"]').first().click();
      cy.get('[data-testid="event-modal"]').should('be.visible');

      // Focus should be trapped within modal
      cy.get('[data-testid="event-modal"] [data-testid="modal-close"]').focus();
      cy.focused().tab();
      cy.focused().should('be.within', '[data-testid="event-modal"]');
    });

    it('should restore focus after modal closes', () => {
      cy.visit('/events');
      cy.get('[data-testid="event-card"]').first().focus().click();
      cy.get('[data-testid="event-modal"]').should('be.visible');
      cy.get('[data-testid="modal-close"]').click();
      cy.focused().should('have.attr', 'data-testid', 'event-card');
    });

    it('should manage focus in dropdown menus', () => {
      cy.visit('/');
      cy.get('[data-testid="dropdown-toggle"]').first().focus().click();
      cy.get('[data-testid="dropdown-menu"]').should('be.visible');
      cy.focused().should('be.within', '[data-testid="dropdown-menu"]');
    });

    it('should skip to main content', () => {
      cy.visit('/');
      cy.get('[data-testid="skip-to-main"]').focus().click();
      cy.focused().should('have.attr', 'id', 'main-content');
    });
  });

  describe('ARIA Labels and Roles', () => {
    it('should have proper ARIA labels for interactive elements', () => {
      cy.visit('/');
      cy.get('button').each($button => {
        cy.wrap($button).should('satisfy', $el => {
          return $el.attr('aria-label') ||
            $el.attr('aria-labelledby') ||
            $el.text().trim().length > 0;
        });
      });
    });

    it('should have proper roles for navigation', () => {
      cy.visit('/');
      cy.get('[data-testid="main-nav"]').should('have.attr', 'role', 'navigation');
      cy.get('[data-testid="breadcrumb"]').should('have.attr', 'role', 'navigation');
    });

    it('should have proper ARIA states for interactive elements', () => {
      cy.visit('/');
      cy.get('[data-testid="dropdown-toggle"]').first().click();
      cy.get('[data-testid="dropdown-toggle"]').first().should('have.attr', 'aria-expanded', 'true');
    });

    it('should have proper landmark roles', () => {
      cy.visit('/');
      cy.get('header').should('have.attr', 'role', 'banner');
      cy.get('main').should('have.attr', 'role', 'main');
      cy.get('footer').should('have.attr', 'role', 'contentinfo');
      cy.get('nav').should('have.attr', 'role', 'navigation');
    });

    it('should have proper ARIA descriptions for complex elements', () => {
      cy.visit('/events');
      cy.get('[data-testid="event-card"]').each($card => {
        cy.wrap($card).should('have.attr', 'aria-describedby');
      });
    });

    it('should use ARIA live regions for dynamic content', () => {
      cy.visit('/');
      cy.get('[data-testid="search-input"]').type('test');
      cy.get('[data-testid="search-results"]').should('have.attr', 'aria-live', 'polite');
    });
  });

  describe('Heading Hierarchy', () => {
    pages.forEach(page => {
      it(`should have proper heading hierarchy on ${page.name} page`, () => {
        cy.visit(page.url);

        // Should have exactly one h1
        cy.get('h1').should('have.length', 1);

        // Check heading order
        cy.get('h1, h2, h3, h4, h5, h6').then($headings => {
          const headingLevels = Array.from($headings).map(h => parseInt(h.tagName.charAt(1)));

          for (let i = 1; i < headingLevels.length; i++) {
            const current = headingLevels[i];
            const previous = headingLevels[i - 1];

            // Heading levels should not skip (e.g., h2 should not be followed by h4)
            if (current > previous) {
              expect(current - previous).to.be.at.most(1);
            }
          }
        });
      });
    });

    it('should have descriptive heading text', () => {
      cy.visit('/');
      cy.get('h1, h2, h3, h4, h5, h6').each($heading => {
        cy.wrap($heading).should('not.be.empty');
        cy.wrap($heading).should('not.contain.text', 'Heading');
      });
    });
  });

  describe('Color Contrast', () => {
    it('should meet WCAG AA contrast requirements', () => {
      cy.visit('/');
      cy.checkA11y(null, {
        rules: {
          'color-contrast': { enabled: true }
        }
      });
    });

    it('should maintain contrast in different states', () => {
      cy.visit('/');
      cy.get('a').first().trigger('mouseover');
      cy.checkA11y('a:hover', {
        rules: {
          'color-contrast': { enabled: true }
        }
      });
    });

    it('should not rely solely on color for information', () => {
      cy.visit('/events');
      cy.get('[data-testid="event-status"]').each($status => {
        // Should have text or icon in addition to color
        cy.wrap($status).should('satisfy', $el => {
          return $el.text().trim().length > 0 || $el.find('svg, img, i').length > 0;
        });
      });
    });
  });

  describe('Images and Media', () => {
    it('should have alt text for all images', () => {
      pages.forEach(page => {
        cy.visit(page.url);
        cy.get('img').each($img => {
          cy.wrap($img).should('have.attr', 'alt');
        });
      });
    });

    it('should have descriptive alt text', () => {
      cy.visit('/');
      cy.get('img').each($img => {
        cy.wrap($img).should('have.attr', 'alt').and('not.be.empty');
        cy.wrap($img).should('not.have.attr', 'alt', 'image');
        cy.wrap($img).should('not.have.attr', 'alt', 'photo');
      });
    });

    it('should mark decorative images appropriately', () => {
      cy.visit('/');
      cy.get('[data-testid="decorative-image"] img').should('have.attr', 'alt', '');
      cy.get('[data-testid="decorative-image"] img').should('have.attr', 'role', 'presentation');
    });

    it('should provide captions for videos', () => {
      cy.visit('/video-gallery');
      cy.get('video').each($video => {
        cy.wrap($video).should('have.attr', 'aria-describedby');
      });
    });

    it('should have accessible controls for media', () => {
      cy.visit('/video-gallery');
      cy.get('[data-testid="video-player"]').within(() => {
        cy.get('[data-testid="play-button"]').should('have.attr', 'aria-label');
        cy.get('[data-testid="volume-control"]').should('have.attr', 'aria-label');
      });
    });
  });

  describe('Forms Accessibility', () => {
    it('should have proper labels for form inputs', () => {
      cy.visit('/contact');
      cy.get('input, textarea, select').each($input => {
        const id = $input.attr('id');
        if (id) {
          cy.get(`label[for="${id}"]`).should('exist');
        } else {
          cy.wrap($input).should('have.attr', 'aria-label');
        }
      });
    });

    it('should have proper error messages', () => {
      cy.visit('/contact');
      cy.get('[data-testid="contact-submit"]').click();
      cy.get('[data-testid="error-message"]').should('have.attr', 'role', 'alert');
      cy.get('[data-testid="error-message"]').should('have.attr', 'aria-live', 'assertive');
    });

    it('should associate error messages with inputs', () => {
      cy.visit('/contact');
      cy.get('[data-testid="contact-submit"]').click();
      cy.get('input:invalid').each($input => {
        cy.wrap($input).should('have.attr', 'aria-describedby');
      });
    });

    it('should have proper fieldset and legend for grouped inputs', () => {
      cy.visit('/contact');
      cy.get('fieldset').each($fieldset => {
        cy.wrap($fieldset).find('legend').should('exist');
      });
    });

    it('should indicate required fields', () => {
      cy.visit('/contact');
      cy.get('input[required], textarea[required], select[required]').each($input => {
        cy.wrap($input).should('have.attr', 'aria-required', 'true');
      });
    });
  });

  describe('Tables Accessibility', () => {
    it('should have proper table headers', () => {
      cy.visit('/membership-terms');
      cy.get('table').each($table => {
        cy.wrap($table).find('th').should('exist');
        cy.wrap($table).find('th').should('have.attr', 'scope');
      });
    });

    it('should have table captions', () => {
      cy.visit('/membership-terms');
      cy.get('table').each($table => {
        cy.wrap($table).should('satisfy', $el => {
          return $el.find('caption').length > 0 || $el.attr('aria-label');
        });
      });
    });

    it('should associate data cells with headers', () => {
      cy.visit('/membership-terms');
      cy.get('table td').each($cell => {
        cy.wrap($cell).should('satisfy', $el => {
          return $el.attr('headers') || $el.closest('table').find('th[scope]').length > 0;
        });
      });
    });
  });

  describe('Screen Reader Support', () => {
    it('should have proper page titles', () => {
      pages.forEach(page => {
        cy.visit(page.url);
        cy.title().should('not.be.empty');
        cy.title().should('contain', page.name);
      });
    });

    it('should have skip navigation links', () => {
      cy.visit('/');
      cy.get('[data-testid="skip-to-main"]').should('exist');
      cy.get('[data-testid="skip-to-nav"]').should('exist');
    });

    it('should announce page changes', () => {
      cy.visit('/');
      cy.get('[data-testid="nav-link"]').first().click();
      cy.get('[data-testid="page-announcement"]').should('have.attr', 'aria-live', 'assertive');
    });

    it('should have proper language attributes', () => {
      cy.visit('/');
      cy.get('html').should('have.attr', 'lang');
      cy.get('[lang]').each($el => {
        const lang = $el.attr('lang');
        expect(lang).to.match(/^[a-z]{2}(-[A-Z]{2})?$/);
      });
    });

    it('should provide context for links', () => {
      cy.visit('/');
      cy.get('a').each($link => {
        const linkText = $link.text().trim();
        const ariaLabel = $link.attr('aria-label');
        const title = $link.attr('title');

        expect(linkText || ariaLabel || title).to.not.be.empty;
        expect(linkText).to.not.equal('click here');
        expect(linkText).to.not.equal('read more');
      });
    });
  });

  describe('Motion and Animation', () => {
    it('should respect prefers-reduced-motion', () => {
      cy.visit('/', {
        onBeforeLoad: (win) => {
          Object.defineProperty(win.navigator, 'userAgent', {
            value: 'prefers-reduced-motion: reduce'
          });
        }
      });

      cy.get('[data-testid="animated-element"]').should('have.css', 'animation-duration', '0s');
    });

    it('should not have auto-playing content', () => {
      cy.visit('/video-gallery');
      cy.get('video[autoplay]').should('not.exist');
      cy.get('audio[autoplay]').should('not.exist');
    });

    it('should provide controls for moving content', () => {
      cy.visit('/');
      cy.get('[data-testid="carousel"]').within(() => {
        cy.get('[data-testid="pause-button"]').should('exist');
        cy.get('[data-testid="play-button"]').should('exist');
      });
    });
  });

  describe('Mobile Accessibility', () => {
    beforeEach(() => {
      cy.viewport('iphone-6');
    });

    it('should have touch-friendly targets', () => {
      cy.visit('/');
      cy.get('button, a, input, [role="button"]').each($el => {
        cy.wrap($el).should('have.css', 'min-height', '44px');
        cy.wrap($el).should('have.css', 'min-width', '44px');
      });
    });

    it('should support zoom up to 200%', () => {
      cy.visit('/');
      cy.get('meta[name="viewport"]').should('have.attr', 'content').and('not.contain', 'user-scalable=no');
    });

    it('should maintain functionality when zoomed', () => {
      cy.visit('/');
      cy.get('body').invoke('css', 'zoom', '2');
      cy.get('[data-testid="mobile-menu-toggle"]').should('be.visible').click();
      cy.get('[data-testid="mobile-menu"]').should('be.visible');
    });
  });

  describe('Error Handling and Feedback', () => {
    it('should provide accessible error pages', () => {
      cy.visit('/non-existent-page', { failOnStatusCode: false });
      cy.get('h1').should('contain.text', '404');
      cy.get('[data-testid="error-description"]').should('be.visible');
      cy.get('[data-testid="home-link"]').should('be.visible');
    });

    it('should announce form validation errors', () => {
      cy.visit('/contact');
      cy.get('[data-testid="contact-submit"]').click();
      cy.get('[role="alert"]').should('be.visible');
    });

    it('should provide success feedback', () => {
      cy.visit('/contact');
      cy.get('[data-testid="contact-name"]').type('John Doe');
      cy.get('[data-testid="contact-email"]').type('john@example.com');
      cy.get('[data-testid="contact-message"]').type('Test message');
      cy.get('[data-testid="contact-submit"]').click();
      cy.get('[role="status"]').should('contain.text', 'success');
    });
  });
});