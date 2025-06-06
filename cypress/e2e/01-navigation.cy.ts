/**
 * Navigation and Routing Tests
 * Tests all navigation functionality, routing, and page accessibility
 */

describe('Navigation and Routing', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.waitForPageLoad();
  });

  describe('Header Navigation', () => {
    it('should display the main navigation menu', () => {
      cy.get('nav').should('be.visible');
      cy.get('nav').within(() => {
        cy.contains('Home').should('be.visible');
        cy.contains('About').should('be.visible');
        cy.contains('Events').should('be.visible');
        cy.contains('News').should('be.visible');
        cy.contains('Gallery').should('be.visible');
        cy.contains('History').should('be.visible');
        cy.contains('Exco').should('be.visible');
        cy.contains('Contact').should('be.visible');
      });
    });

    it('should display the SACKOBA logo and Qatar flag', () => {
      cy.get('nav').within(() => {
        cy.contains('SACKOBA').should('be.visible');
        cy.get('img[title="Qatar"]').should('be.visible');
      });
    });

    it('should highlight the active navigation item', () => {
      cy.visit('/about');
      cy.get('nav a[href="/about"]').should('have.class', 'text-white');
    });

    it('should navigate to all main pages', () => {
      const pages = [
        { name: 'Home', path: '/', title: 'SACKOBA' },
        { name: 'About', path: '/about', title: 'About' },
        { name: 'Events', path: '/events', title: 'Events' },
        { name: 'News', path: '/news', title: 'News' },
        { name: 'Gallery', path: '/gallery', title: 'Gallery' },
        { name: 'History', path: '/history', title: 'History' },
        { name: 'Exco', path: '/exco', title: 'Executive Committee' },
        { name: 'Contact', path: '/contact', title: 'Contact' }
      ];

      pages.forEach(page => {
        cy.get('nav').contains(page.name).click();
        cy.url().should('include', page.path);
        cy.waitForPageLoad();
        cy.get('body').should('contain.text', page.title);
      });
    });
  });

  describe('Mobile Navigation', () => {
    beforeEach(() => {
      cy.viewport('iphone-6');
    });

    it('should show mobile menu button on small screens', () => {
      cy.get('[data-testid="mobile-menu-button"]').should('be.visible');
    });

    it('should open and close mobile menu', () => {
      cy.get('[data-testid="mobile-menu-button"]').click();
      cy.get('[data-testid="mobile-menu"]').should('be.visible');

      cy.get('[data-testid="mobile-menu-close"]').click();
      cy.get('[data-testid="mobile-menu"]').should('not.be.visible');
    });

    it('should navigate using mobile menu', () => {
      cy.get('[data-testid="mobile-menu-button"]').click();
      cy.get('[data-testid="mobile-menu"]').within(() => {
        cy.contains('About').click();
      });
      cy.url().should('include', '/about');
    });
  });

  describe('Footer Navigation', () => {
    it('should display footer with copyright information', () => {
      cy.get('footer').should('be.visible');
      cy.get('footer').should('contain.text', 'SACKOBA Qatar');
      cy.get('footer').should('contain.text', '2009 to 2025');
    });

    it('should contain footer navigation links', () => {
      cy.get('footer').within(() => {
        cy.get('a').should('have.length.greaterThan', 0);
      });
    });
  });

  describe('URL Routing', () => {
    it('should handle direct URL navigation', () => {
      const routes = [
        '/about',
        '/events',
        '/news',
        '/gallery',
        '/history',
        '/exco',
        '/contact',
        '/membership-terms'
      ];

      routes.forEach(route => {
        cy.visit(route);
        cy.url().should('include', route);
        cy.get('body').should('be.visible');
        cy.waitForPageLoad();
      });
    });

    it('should handle 404 page for invalid routes', () => {
      cy.visit('/invalid-page', { failOnStatusCode: false });
      cy.get('body').should('contain.text', '404');
    });

    it('should maintain scroll position on navigation', () => {
      cy.visit('/events');
      cy.scrollTo(0, 500);
      cy.get('nav').contains('Home').click();
      cy.get('nav').contains('Events').click();
      cy.window().its('scrollY').should('equal', 0);
    });
  });

  describe('Browser Navigation', () => {
    it('should handle browser back and forward buttons', () => {
      cy.visit('/about');
      cy.visit('/events');

      cy.go('back');
      cy.url().should('include', '/about');

      cy.go('forward');
      cy.url().should('include', '/events');
    });

    it('should update page title on navigation', () => {
      cy.visit('/about');
      cy.title().should('contain', 'SACKOBA');
    });
  });

  describe('Accessibility', () => {
    it('should support keyboard navigation', () => {
      cy.get('body').tab();
      cy.focused().should('be.visible');

      // Navigate through menu items using keyboard
      cy.get('nav a').first().focus();
      cy.focused().type('{enter}');
      cy.url().should('not.equal', 'about:blank');
    });

    it('should have proper ARIA labels', () => {
      cy.get('nav').should('have.attr', 'aria-label');
      cy.get('[data-testid="mobile-menu-button"]').should('have.attr', 'aria-label');
    });

    it('should maintain focus management', () => {
      cy.viewport('iphone-6');
      cy.get('[data-testid="mobile-menu-button"]').click();
      cy.get('[data-testid="mobile-menu"]').should('be.visible');
      cy.focused().should('exist');
    });
  });
});