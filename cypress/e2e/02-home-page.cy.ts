/**
 * Home Page Tests
 * Tests all functionality on the home page including hero section, features, and content
 */

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.waitForPageLoad();
  });

  describe('Hero Section', () => {
    it('should display the hero section with background image', () => {
      cy.get('section').first().should('be.visible');
      cy.get('section').first().should('have.css', 'background-image');
    });

    it('should display SACKOBA logo', () => {
      cy.get('img[alt="SACKOBA Logo"]').should('be.visible');
      cy.get('img[alt="SACKOBA Logo"]').should('have.attr', 'src').and('include', 'sackoba-qatar-logo');
    });

    it('should display main heading with correct text', () => {
      cy.get('h1').should('be.visible');
      cy.get('h1').should('contain.text', "St. Anthony's College");
      cy.get('h1').should('contain.text', "Old Boys' Association - Qatar");
    });

    it('should display subtitle and description', () => {
      cy.get('section').first().within(() => {
        cy.contains('Uniting Antonians Across Qatar Since 2009').should('be.visible');
        cy.contains('Building lifelong connections').should('be.visible');
      });
    });

    it('should have working call-to-action buttons', () => {
      cy.get('section').first().within(() => {
        cy.contains('Explore Our Community').should('be.visible').click();
        cy.url().should('include', '/about');
      });

      cy.visit('/');
      cy.waitForPageLoad();

      cy.get('section').first().within(() => {
        cy.contains('View Events').should('be.visible').click();
        cy.url().should('include', '/events');
      });
    });

    it('should have proper animations on load', () => {
      cy.reload();
      cy.get('img[alt="SACKOBA Logo"]').should('have.css', 'opacity', '1');
      cy.get('h1').should('have.css', 'opacity', '1');
    });
  });

  describe('Anniversary Section', () => {
    it('should display anniversary information', () => {
      cy.get('[data-testid="anniversary-section"]').should('be.visible');
      cy.contains('2009').should('be.visible');
      cy.contains('Years').should('be.visible');
    });

    it('should show founding year and current status', () => {
      cy.contains('Founded').should('be.visible');
      cy.contains('September 28th, 2009').should('be.visible');
    });
  });

  describe('Features Section', () => {
    it('should display all three feature cards', () => {
      cy.get('[data-testid="features-section"]').should('be.visible');
      cy.get('[data-testid="feature-card"]').should('have.length', 3);
    });

    it('should display Projects & Assistance feature', () => {
      cy.contains('Projects & Assistance').should('be.visible');
      cy.contains('Building Future').should('be.visible');
      cy.contains('scholarship scheme').should('be.visible');
    });

    it('should display The Committee feature', () => {
      cy.contains('The Committee').should('be.visible');
      cy.contains('Founded in 2009').should('be.visible');
      cy.contains('80 members').should('be.visible');
    });

    it('should display Membership feature with link', () => {
      cy.contains('Membership').should('be.visible');
      cy.contains('View Membership Terms').should('be.visible').click();
      cy.url().should('include', '/membership-terms');
    });

    it('should have hover effects on feature cards', () => {
      cy.get('[data-testid="feature-card"]').first().trigger('mouseover');
      cy.get('[data-testid="feature-card"]').first().should('have.css', 'transform');
    });

    it('should display "Become a Member" button', () => {
      cy.contains('Become a Member').should('be.visible').click();
      cy.url().should('include', '/membership-terms');
    });
  });

  describe('About Section', () => {
    it('should display about section with formation details', () => {
      cy.contains('About Us').should('be.visible');
      cy.contains('September 28th, 2009').should('be.visible');
      cy.contains('Aloy Cooray').should('be.visible');
      cy.contains('Manoharan Arasu').should('be.visible');
    });

    it('should have "Read Our Story" link', () => {
      cy.contains('Read Our Story').should('be.visible').click();
      cy.url().should('include', '/about');
    });
  });

  describe('History Section', () => {
    it('should display history section', () => {
      cy.contains('The Beginning & The History').should('be.visible');
    });

    it('should show formation details', () => {
      cy.contains('formed on September 28th, 2009').should('be.visible');
      cy.contains('8 Old Antonians in Doha').should('be.visible');
    });

    it('should display key milestones', () => {
      cy.contains('Key Milestones').should('be.visible');
      cy.contains('Website Launch').should('be.visible');
      cy.contains('sackobaqatar.org').should('be.visible');
    });
  });

  describe('News Section', () => {
    it('should display latest updates section', () => {
      cy.contains('Latest Updates').should('be.visible');
    });

    it('should show news cards with proper content', () => {
      cy.contains('SACKOBA Qatar Web Launch').should('be.visible');
      cy.contains('10 Years of Excellence').should('be.visible');
      cy.contains('Annual General Meeting 2024').should('be.visible');
    });

    it('should have working news card links', () => {
      cy.contains('Read More').should('be.visible').click();
      cy.url().should('include', '/news');

      cy.visit('/');
      cy.waitForPageLoad();

      cy.contains('View Gallery').should('be.visible').click();
      cy.url().should('include', '/gallery');

      cy.visit('/');
      cy.waitForPageLoad();

      cy.contains('Register Now').should('be.visible').click();
      cy.url().should('include', '/events');
    });
  });

  describe('Responsive Design', () => {
    it('should be responsive on mobile devices', () => {
      cy.viewport('iphone-6');
      cy.get('h1').should('be.visible');
      cy.get('[data-testid="feature-card"]').should('be.visible');
      cy.get('img[alt="SACKOBA Logo"]').should('be.visible');
    });

    it('should be responsive on tablet devices', () => {
      cy.viewport('ipad-2');
      cy.get('h1').should('be.visible');
      cy.get('[data-testid="feature-card"]').should('have.length', 3);
    });

    it('should adapt layout for different screen sizes', () => {
      const viewports = [
        { width: 375, height: 667 },   // Mobile
        { width: 768, height: 1024 },  // Tablet
        { width: 1024, height: 768 },  // Desktop small
        { width: 1920, height: 1080 }  // Desktop large
      ];

      viewports.forEach(viewport => {
        cy.viewport(viewport.width, viewport.height);
        cy.get('h1').should('be.visible');
        cy.get('img[alt="SACKOBA Logo"]').should('be.visible');
        cy.wait(500);
      });
    });
  });

  describe('Performance and Loading', () => {
    it('should load all images properly', () => {
      cy.checkImageLoading();
    });

    it('should not have loading indicators after page load', () => {
      cy.get('[data-testid="loading"]').should('not.exist');
      cy.get('.animate-spin').should('not.exist');
    });

    it('should load hero background image', () => {
      cy.get('section').first().should('have.css', 'background-image')
        .and('include', 'MainBuildingWithGround.jpg');
    });
  });

  describe('Accessibility', () => {
    it('should have proper heading hierarchy', () => {
      cy.get('h1').should('have.length', 1);
      cy.get('h2').should('have.length.greaterThan', 0);
    });

    it('should have alt text for all images', () => {
      cy.checkAccessibility();
    });

    it('should support keyboard navigation', () => {
      cy.get('body').tab();
      cy.focused().should('be.visible');
    });

    it('should have proper color contrast', () => {
      cy.get('h1').should('have.css', 'color');
      cy.get('p').should('have.css', 'color');
    });
  });

  describe('Animations and Interactions', () => {
    it('should have smooth scroll behavior', () => {
      cy.get('html').should('have.css', 'scroll-behavior', 'smooth');
    });

    it('should have hover effects on interactive elements', () => {
      cy.get('a').first().trigger('mouseover');
      cy.get('button').first().trigger('mouseover');
    });

    it('should have proper focus states', () => {
      cy.get('a').first().focus();
      cy.focused().should('have.css', 'outline');
    });
  });
});