/**
 * Responsive Design and Cross-Browser Tests
 * Tests responsive behavior across different devices and screen sizes
 */

describe('Responsive Design Tests', () => {
  const viewports = [
    { name: 'Mobile Portrait', width: 375, height: 667 },
    { name: 'Mobile Landscape', width: 667, height: 375 },
    { name: 'Tablet Portrait', width: 768, height: 1024 },
    { name: 'Tablet Landscape', width: 1024, height: 768 },
    { name: 'Desktop Small', width: 1280, height: 720 },
    { name: 'Desktop Large', width: 1920, height: 1080 }
  ];

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

  describe('Mobile Responsive Design', () => {
    beforeEach(() => {
      cy.viewport('iphone-6');
    });

    pages.forEach(page => {
      it(`should display ${page.name} page correctly on mobile`, () => {
        cy.visit(page.url);
        cy.waitForPageLoad();

        // Check basic layout elements
        cy.get('[data-testid="navbar"]').should('be.visible');
        cy.get('main').should('be.visible');
        cy.get('[data-testid="footer"]').should('be.visible');

        // Check mobile menu functionality
        cy.get('[data-testid="mobile-menu-toggle"]').should('be.visible');
        cy.get('[data-testid="mobile-menu-toggle"]').click();
        cy.get('[data-testid="mobile-menu"]').should('be.visible');

        // Check content doesn't overflow
        cy.get('body').should('have.css', 'overflow-x', 'hidden');
      });
    });

    it('should have touch-friendly navigation elements', () => {
      cy.visit('/');
      cy.get('[data-testid="mobile-menu-toggle"]').should('have.css', 'min-height', '44px');
      cy.get('[data-testid="nav-link"]').should('have.css', 'min-height', '44px');
    });

    it('should stack content vertically on mobile', () => {
      cy.visit('/');
      cy.get('[data-testid="hero-content"]').should('have.css', 'flex-direction', 'column');
    });

    it('should hide desktop-only elements', () => {
      cy.visit('/');
      cy.get('[data-testid="desktop-nav"]').should('not.be.visible');
      cy.get('[data-testid="desktop-sidebar"]').should('not.be.visible');
    });

    it('should show mobile-specific elements', () => {
      cy.visit('/');
      cy.get('[data-testid="mobile-menu-toggle"]').should('be.visible');
      cy.get('[data-testid="mobile-search"]').should('be.visible');
    });
  });

  describe('Tablet Responsive Design', () => {
    beforeEach(() => {
      cy.viewport('ipad-2');
    });

    pages.forEach(page => {
      it(`should display ${page.name} page correctly on tablet`, () => {
        cy.visit(page.url);
        cy.waitForPageLoad();

        // Check layout adapts to tablet size
        cy.get('[data-testid="navbar"]').should('be.visible');
        cy.get('main').should('be.visible');

        // Check grid layouts adapt
        cy.get('[data-testid="content-grid"]').should('have.css', 'grid-template-columns');
      });
    });

    it('should show appropriate number of columns in grids', () => {
      cy.visit('/events');
      cy.get('[data-testid="events-grid"]').within(() => {
        cy.get('[data-testid="event-card"]').should('be.visible');
      });
    });

    it('should adapt navigation for tablet', () => {
      cy.visit('/');
      cy.get('[data-testid="tablet-nav"]').should('be.visible');
    });
  });

  describe('Desktop Responsive Design', () => {
    beforeEach(() => {
      cy.viewport(1280, 720);
    });

    pages.forEach(page => {
      it(`should display ${page.name} page correctly on desktop`, () => {
        cy.visit(page.url);
        cy.waitForPageLoad();

        // Check full desktop layout
        cy.get('[data-testid="desktop-nav"]').should('be.visible');
        cy.get('[data-testid="sidebar"]').should('be.visible');
        cy.get('main').should('be.visible');

        // Check content uses full width appropriately
        cy.get('[data-testid="main-content"]').should('have.css', 'max-width');
      });
    });

    it('should show desktop navigation menu', () => {
      cy.visit('/');
      cy.get('[data-testid="desktop-nav"]').should('be.visible');
      cy.get('[data-testid="mobile-menu-toggle"]').should('not.be.visible');
    });

    it('should display multi-column layouts', () => {
      cy.visit('/events');
      cy.get('[data-testid="events-grid"]').should('have.css', 'grid-template-columns');
    });
  });

  describe('Viewport-Specific Tests', () => {
    viewports.forEach(viewport => {
      it(`should be functional at ${viewport.name} (${viewport.width}x${viewport.height})`, () => {
        cy.viewport(viewport.width, viewport.height);
        cy.visit('/');
        cy.waitForPageLoad();

        // Basic functionality should work
        cy.get('[data-testid="navbar"]').should('be.visible');
        cy.get('main').should('be.visible');

        // Navigation should be accessible
        if (viewport.width < 768) {
          cy.get('[data-testid="mobile-menu-toggle"]').should('be.visible');
        } else {
          cy.get('[data-testid="desktop-nav"]').should('be.visible');
        }

        // Content should not overflow
        cy.get('body').should('not.have.css', 'overflow-x', 'scroll');
      });
    });
  });

  describe('Image Responsiveness', () => {
    it('should load appropriate image sizes for different viewports', () => {
      cy.viewport('iphone-6');
      cy.visit('/');
      cy.get('[data-testid="hero-image"] img').should('have.attr', 'src').and('include', 'mobile');

      cy.viewport(1280, 720);
      cy.visit('/');
      cy.get('[data-testid="hero-image"] img').should('have.attr', 'src').and('include', 'desktop');
    });

    it('should use responsive image attributes', () => {
      cy.visit('/');
      cy.get('[data-testid="responsive-image"] img').should('have.attr', 'srcset');
      cy.get('[data-testid="responsive-image"] img').should('have.attr', 'sizes');
    });

    it('should maintain aspect ratios across devices', () => {
      viewports.forEach(viewport => {
        cy.viewport(viewport.width, viewport.height);
        cy.visit('/events');
        cy.get('[data-testid="event-image"]').should('have.css', 'aspect-ratio');
      });
    });
  });

  describe('Typography Responsiveness', () => {
    it('should scale font sizes appropriately', () => {
      cy.viewport('iphone-6');
      cy.visit('/');
      cy.get('h1').should('have.css', 'font-size').then(mobileFontSize => {
        cy.viewport(1280, 720);
        cy.visit('/');
        cy.get('h1').should('have.css', 'font-size').then(desktopFontSize => {
          expect(parseFloat(desktopFontSize)).to.be.greaterThan(parseFloat(mobileFontSize));
        });
      });
    });

    it('should maintain readable line heights', () => {
      viewports.forEach(viewport => {
        cy.viewport(viewport.width, viewport.height);
        cy.visit('/');
        cy.get('p').should('have.css', 'line-height');
      });
    });

    it('should adjust text alignment for mobile', () => {
      cy.viewport('iphone-6');
      cy.visit('/');
      cy.get('[data-testid="hero-title"]').should('have.css', 'text-align', 'center');
    });
  });

  describe('Form Responsiveness', () => {
    it('should stack form elements on mobile', () => {
      cy.viewport('iphone-6');
      cy.visit('/contact');
      cy.get('[data-testid="contact-form"]').should('have.css', 'flex-direction', 'column');
    });

    it('should have touch-friendly form inputs', () => {
      cy.viewport('iphone-6');
      cy.visit('/contact');
      cy.get('input, textarea, select').should('have.css', 'min-height', '44px');
    });

    it('should adapt form layout for desktop', () => {
      cy.viewport(1280, 720);
      cy.visit('/contact');
      cy.get('[data-testid="form-row"]').should('have.css', 'display', 'flex');
    });
  });

  describe('Navigation Responsiveness', () => {
    it('should show hamburger menu on mobile', () => {
      cy.viewport('iphone-6');
      cy.visit('/');
      cy.get('[data-testid="mobile-menu-toggle"]').should('be.visible');
      cy.get('[data-testid="desktop-nav"]').should('not.be.visible');
    });

    it('should show full navigation on desktop', () => {
      cy.viewport(1280, 720);
      cy.visit('/');
      cy.get('[data-testid="desktop-nav"]').should('be.visible');
      cy.get('[data-testid="mobile-menu-toggle"]').should('not.be.visible');
    });

    it('should handle navigation overflow on tablet', () => {
      cy.viewport('ipad-2');
      cy.visit('/');
      cy.get('[data-testid="nav-overflow"]').should('be.visible');
    });
  });

  describe('Grid and Layout Responsiveness', () => {
    it('should adjust grid columns based on screen size', () => {
      // Mobile: 1 column
      cy.viewport('iphone-6');
      cy.visit('/events');
      cy.get('[data-testid="events-grid"]').should('have.css', 'grid-template-columns', '1fr');

      // Tablet: 2 columns
      cy.viewport('ipad-2');
      cy.visit('/events');
      cy.get('[data-testid="events-grid"]').should('have.css', 'grid-template-columns').and('include', '1fr 1fr');

      // Desktop: 3+ columns
      cy.viewport(1280, 720);
      cy.visit('/events');
      cy.get('[data-testid="events-grid"]').should('have.css', 'grid-template-columns').and('include', '1fr 1fr 1fr');
    });

    it('should stack sidebar content on mobile', () => {
      cy.viewport('iphone-6');
      cy.visit('/news');
      cy.get('[data-testid="sidebar"]').should('have.css', 'order', '2');
    });

    it('should show sidebar alongside content on desktop', () => {
      cy.viewport(1280, 720);
      cy.visit('/news');
      cy.get('[data-testid="main-content"]').should('have.css', 'display', 'flex');
      cy.get('[data-testid="sidebar"]').should('be.visible');
    });
  });

  describe('Touch and Interaction Responsiveness', () => {
    it('should have appropriate touch targets on mobile', () => {
      cy.viewport('iphone-6');
      cy.visit('/');
      cy.get('button, a, [role="button"]').each($el => {
        cy.wrap($el).should('have.css', 'min-height', '44px');
        cy.wrap($el).should('have.css', 'min-width', '44px');
      });
    });

    it('should support swipe gestures on mobile', () => {
      cy.viewport('iphone-6');
      cy.visit('/events');
      cy.get('[data-testid="image-gallery"]').should('have.attr', 'data-swipeable', 'true');
    });

    it('should show hover effects only on desktop', () => {
      cy.viewport(1280, 720);
      cy.visit('/');
      cy.get('[data-testid="hover-card"]').trigger('mouseover');
      cy.get('[data-testid="hover-effect"]').should('be.visible');
    });
  });

  describe('Performance on Different Devices', () => {
    it('should load quickly on mobile', () => {
      cy.viewport('iphone-6');
      const start = Date.now();
      cy.visit('/');
      cy.waitForPageLoad();
      cy.then(() => {
        const loadTime = Date.now() - start;
        expect(loadTime).to.be.lessThan(3000); // 3 seconds
      });
    });

    it('should lazy load images appropriately', () => {
      cy.viewport('iphone-6');
      cy.visit('/events');
      cy.get('[data-testid="lazy-image"]').should('have.attr', 'loading', 'lazy');
    });

    it('should prioritize above-the-fold content', () => {
      cy.viewport('iphone-6');
      cy.visit('/');
      cy.get('[data-testid="hero-section"]').should('be.visible');
      cy.get('[data-testid="below-fold"]').should('not.be.visible');
    });
  });

  describe('Accessibility Across Devices', () => {
    it('should maintain focus management on mobile', () => {
      cy.viewport('iphone-6');
      cy.visit('/');
      cy.get('[data-testid="mobile-menu-toggle"]').click();
      cy.focused().should('exist');
    });

    it('should support keyboard navigation on all devices', () => {
      viewports.forEach(viewport => {
        cy.viewport(viewport.width, viewport.height);
        cy.visit('/');
        cy.get('body').tab();
        cy.focused().should('be.visible');
      });
    });

    it('should have appropriate contrast ratios', () => {
      viewports.forEach(viewport => {
        cy.viewport(viewport.width, viewport.height);
        cy.visit('/');
        cy.checkA11y();
      });
    });
  });

  describe('Content Adaptation', () => {
    it('should show condensed content on mobile', () => {
      cy.viewport('iphone-6');
      cy.visit('/about');
      cy.get('[data-testid="mobile-summary"]').should('be.visible');
      cy.get('[data-testid="full-content"]').should('not.be.visible');
    });

    it('should show full content on desktop', () => {
      cy.viewport(1280, 720);
      cy.visit('/about');
      cy.get('[data-testid="full-content"]').should('be.visible');
    });

    it('should adapt table layouts for mobile', () => {
      cy.viewport('iphone-6');
      cy.visit('/membership-terms');
      cy.get('[data-testid="responsive-table"]').should('have.css', 'display', 'block');
    });
  });

  describe('Cross-Device Consistency', () => {
    it('should maintain brand colors across devices', () => {
      const checkBrandColors = () => {
        cy.get('[data-testid="brand-primary"]').should('have.css', 'color', 'rgb(0, 123, 255)');
        cy.get('[data-testid="brand-secondary"]').should('have.css', 'color', 'rgb(108, 117, 125)');
      };

      cy.viewport('iphone-6');
      cy.visit('/');
      checkBrandColors();

      cy.viewport(1280, 720);
      cy.visit('/');
      checkBrandColors();
    });

    it('should maintain functionality across devices', () => {
      const testFunctionality = () => {
        cy.get('[data-testid="search-input"]').type('test');
        cy.get('[data-testid="search-button"]').click();
        cy.get('[data-testid="search-results"]').should('be.visible');
      };

      cy.viewport('iphone-6');
      cy.visit('/');
      testFunctionality();

      cy.viewport(1280, 720);
      cy.visit('/');
      testFunctionality();
    });
  });
});