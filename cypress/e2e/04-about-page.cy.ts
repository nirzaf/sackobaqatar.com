/**
 * About Page Tests
 * Tests all functionality on the about page including college history and information
 */

describe('About Page', () => {
  beforeEach(() => {
    cy.visit('/about');
    cy.waitForPageLoad();
  });

  describe('Page Layout and Structure', () => {
    it('should display the about page header', () => {
      cy.get('h1').should('contain.text', 'About');
    });

    it('should load page content successfully', () => {
      cy.get('main').should('be.visible');
      cy.get('body').should('not.contain', 'Loading...');
    });

    it('should have proper page title', () => {
      cy.title().should('contain', 'About');
    });
  });

  describe('College Information Section', () => {
    it('should display college overview', () => {
      cy.get('[data-testid="college-overview"]').should('be.visible');
      cy.get('[data-testid="college-overview"]').should('contain.text', 'St. Augustine');
    });

    it('should show college mission and vision', () => {
      cy.get('[data-testid="mission-section"]').should('be.visible');
      cy.get('[data-testid="vision-section"]').should('be.visible');
    });

    it('should display college values', () => {
      cy.get('[data-testid="values-section"]').should('be.visible');
      cy.get('[data-testid="value-item"]').should('have.length.greaterThan', 0);
    });

    it('should show college achievements', () => {
      cy.get('[data-testid="achievements-section"]').should('be.visible');
      cy.get('[data-testid="achievement-item"]').should('have.length.greaterThan', 0);
    });
  });

  describe('College History Section', () => {
    it('should display historical timeline', () => {
      cy.get('[data-testid="history-timeline"]').should('be.visible');
    });

    it('should show founding information', () => {
      cy.get('[data-testid="founding-info"]').should('be.visible');
      cy.get('[data-testid="founding-info"]').should('contain.text', '1930');
    });

    it('should display key milestones', () => {
      cy.get('[data-testid="milestone-item"]').should('have.length.greaterThan', 0);
      cy.get('[data-testid="milestone-item"]').first().within(() => {
        cy.get('[data-testid="milestone-year"]').should('be.visible');
        cy.get('[data-testid="milestone-description"]').should('be.visible');
      });
    });

    it('should show historical images', () => {
      cy.get('[data-testid="historical-image"]').should('have.length.greaterThan', 0);
      cy.get('[data-testid="historical-image"]').each(($img) => {
        cy.wrap($img).should('have.attr', 'src');
        cy.wrap($img).should('have.attr', 'alt');
      });
    });

    it('should have interactive timeline elements', () => {
      cy.get('[data-testid="timeline-item"]').first().click();
      cy.get('[data-testid="timeline-details"]').should('be.visible');
    });
  });

  describe('Leadership Section', () => {
    it('should display current leadership', () => {
      cy.get('[data-testid="leadership-section"]').should('be.visible');
    });

    it('should show principal information', () => {
      cy.get('[data-testid="principal-info"]').should('be.visible');
      cy.get('[data-testid="principal-name"]').should('be.visible');
      cy.get('[data-testid="principal-message"]').should('be.visible');
    });

    it('should display staff members', () => {
      cy.get('[data-testid="staff-member"]').should('have.length.greaterThan', 0);
      cy.get('[data-testid="staff-member"]').first().within(() => {
        cy.get('[data-testid="staff-name"]').should('be.visible');
        cy.get('[data-testid="staff-position"]').should('be.visible');
      });
    });

    it('should show board of governors', () => {
      cy.get('[data-testid="board-section"]').should('be.visible');
      cy.get('[data-testid="board-member"]').should('have.length.greaterThan', 0);
    });
  });

  describe('Facilities Section', () => {
    it('should display school facilities', () => {
      cy.get('[data-testid="facilities-section"]').should('be.visible');
    });

    it('should show facility categories', () => {
      cy.get('[data-testid="facility-category"]').should('have.length.greaterThan', 0);
      cy.get('[data-testid="facility-category"]').should('contain.text', 'Academic');
      cy.get('[data-testid="facility-category"]').should('contain.text', 'Sports');
    });

    it('should display facility images', () => {
      cy.get('[data-testid="facility-image"]').should('have.length.greaterThan', 0);
      cy.get('[data-testid="facility-image"]').each(($img) => {
        cy.wrap($img).should('be.visible');
        cy.wrap($img).should('have.attr', 'alt');
      });
    });

    it('should have facility descriptions', () => {
      cy.get('[data-testid="facility-description"]').should('have.length.greaterThan', 0);
      cy.get('[data-testid="facility-description"]').first().should('not.be.empty');
    });
  });

  describe('Academic Programs Section', () => {
    it('should display academic programs', () => {
      cy.get('[data-testid="programs-section"]').should('be.visible');
    });

    it('should show different academic levels', () => {
      cy.get('[data-testid="academic-level"]').should('have.length.greaterThan', 0);
      cy.get('[data-testid="academic-level"]').should('contain.text', 'Primary');
      cy.get('[data-testid="academic-level"]').should('contain.text', 'Secondary');
    });

    it('should display curriculum information', () => {
      cy.get('[data-testid="curriculum-info"]').should('be.visible');
      cy.get('[data-testid="subject-list"]').should('be.visible');
    });

    it('should show extracurricular activities', () => {
      cy.get('[data-testid="extracurricular-section"]').should('be.visible');
      cy.get('[data-testid="activity-item"]').should('have.length.greaterThan', 0);
    });
  });

  describe('Alumni Information', () => {
    it('should display alumni section', () => {
      cy.get('[data-testid="alumni-section"]').should('be.visible');
    });

    it('should show notable alumni', () => {
      cy.get('[data-testid="notable-alumni"]').should('be.visible');
      cy.get('[data-testid="alumni-profile"]').should('have.length.greaterThan', 0);
    });

    it('should display alumni achievements', () => {
      cy.get('[data-testid="alumni-achievement"]').should('have.length.greaterThan', 0);
      cy.get('[data-testid="alumni-achievement"]').first().within(() => {
        cy.get('[data-testid="achievement-title"]').should('be.visible');
        cy.get('[data-testid="achievement-description"]').should('be.visible');
      });
    });

    it('should have alumni association information', () => {
      cy.get('[data-testid="alumni-association"]').should('be.visible');
      cy.get('[data-testid="association-description"]').should('be.visible');
    });
  });

  describe('Interactive Elements', () => {
    it('should have working accordion sections', () => {
      cy.get('[data-testid="accordion-trigger"]').first().click();
      cy.get('[data-testid="accordion-content"]').first().should('be.visible');

      cy.get('[data-testid="accordion-trigger"]').first().click();
      cy.get('[data-testid="accordion-content"]').first().should('not.be.visible');
    });

    it('should have expandable content sections', () => {
      cy.get('[data-testid="read-more-button"]').first().click();
      cy.get('[data-testid="expanded-content"]').should('be.visible');
      cy.get('[data-testid="read-less-button"]').should('be.visible');
    });

    it('should support image gallery modal', () => {
      cy.get('[data-testid="gallery-image"]').first().click();
      cy.get('[data-testid="image-modal"]').should('be.visible');
      cy.get('[data-testid="modal-close"]').click();
      cy.get('[data-testid="image-modal"]').should('not.be.visible');
    });
  });

  describe('Contact Information', () => {
    it('should display contact details', () => {
      cy.get('[data-testid="contact-info"]').should('be.visible');
    });

    it('should show school address', () => {
      cy.get('[data-testid="school-address"]').should('be.visible');
      cy.get('[data-testid="school-address"]').should('contain.text', 'Cape Coast');
    });

    it('should display phone and email', () => {
      cy.get('[data-testid="contact-phone"]').should('be.visible');
      cy.get('[data-testid="contact-email"]').should('be.visible');
    });

    it('should have working contact links', () => {
      cy.get('[data-testid="contact-email"] a').should('have.attr', 'href').and('include', 'mailto:');
      cy.get('[data-testid="contact-phone"] a').should('have.attr', 'href').and('include', 'tel:');
    });
  });

  describe('Responsive Design', () => {
    it('should be responsive on mobile devices', () => {
      cy.viewport('iphone-6');
      cy.get('[data-testid="college-overview"]').should('be.visible');
      cy.get('[data-testid="history-timeline"]').should('be.visible');
    });

    it('should adapt layout for tablet screens', () => {
      cy.viewport('ipad-2');
      cy.get('[data-testid="leadership-section"]').should('be.visible');
      cy.get('[data-testid="facilities-section"]').should('be.visible');
    });

    it('should stack content appropriately on small screens', () => {
      cy.viewport(375, 667);
      cy.get('[data-testid="staff-member"]').should('be.visible');
      cy.get('[data-testid="facility-image"]').should('be.visible');
    });
  });

  describe('Performance and Loading', () => {
    it('should load images efficiently', () => {
      cy.get('[data-testid="historical-image"]').should('have.attr', 'loading', 'lazy');
      cy.get('[data-testid="facility-image"]').should('have.attr', 'loading', 'lazy');
    });

    it('should handle image loading errors', () => {
      cy.get('img').each(($img) => {
        cy.wrap($img).should('be.visible');
      });
    });

    it('should load content progressively', () => {
      cy.get('[data-testid="college-overview"]').should('be.visible');
      cy.scrollTo('bottom');
      cy.get('[data-testid="alumni-section"]').should('be.visible');
    });
  });

  describe('Accessibility', () => {
    it('should support keyboard navigation', () => {
      cy.get('[data-testid="accordion-trigger"]').first().focus().type('{enter}');
      cy.get('[data-testid="accordion-content"]').first().should('be.visible');
    });

    it('should have proper heading hierarchy', () => {
      cy.get('h1').should('have.length', 1);
      cy.get('h2').should('have.length.greaterThan', 0);
      cy.get('h3').should('have.length.greaterThan', 0);
    });

    it('should have alt text for all images', () => {
      cy.get('img').each(($img) => {
        cy.wrap($img).should('have.attr', 'alt');
      });
    });

    it('should have proper ARIA labels', () => {
      cy.get('[data-testid="accordion-trigger"]').should('have.attr', 'aria-expanded');
      cy.get('[data-testid="timeline-item"]').should('have.attr', 'role');
    });

    it('should manage focus properly', () => {
      cy.get('[data-testid="read-more-button"]').first().click();
      cy.focused().should('exist');
    });
  });

  describe('Content Validation', () => {
    it('should display accurate founding year', () => {
      cy.get('[data-testid="founding-year"]').should('contain.text', '1930');
    });

    it('should show correct school motto', () => {
      cy.get('[data-testid="school-motto"]').should('be.visible');
      cy.get('[data-testid="school-motto"]').should('not.be.empty');
    });

    it('should display current academic year', () => {
      const currentYear = new Date().getFullYear();
      cy.get('[data-testid="academic-year"]').should('contain.text', currentYear.toString());
    });

    it('should show updated contact information', () => {
      cy.get('[data-testid="contact-info"]').should('not.contain', 'TBD');
      cy.get('[data-testid="contact-info"]').should('not.contain', 'Coming Soon');
    });
  });
});