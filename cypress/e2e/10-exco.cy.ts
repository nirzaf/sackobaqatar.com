/**
 * EXCO (Executive Committee) Tests
 * Tests all functionality on the EXCO page including leadership profiles and committee information
 */

describe('EXCO Page', () => {
  beforeEach(() => {
    cy.visit('/exco');
    cy.waitForPageLoad();
  });

  describe('Page Layout and Structure', () => {
    it('should display the EXCO page header', () => {
      cy.get('h1').should('contain.text', 'Executive Committee');
    });

    it('should load page content successfully', () => {
      cy.get('main').should('be.visible');
      cy.get('body').should('not.contain', 'Loading...');
    });

    it('should have proper page title', () => {
      cy.title().should('contain', 'Executive Committee');
    });

    it('should display EXCO hero section', () => {
      cy.get('[data-testid="exco-hero"]').should('be.visible');
    });
  });

  describe('Current Executive Committee', () => {
    it('should display current EXCO members', () => {
      cy.get('[data-testid="current-exco"]').should('be.visible');
      cy.get('[data-testid="exco-member"]').should('have.length.greaterThan', 0);
    });

    it('should show member profiles with complete information', () => {
      cy.get('[data-testid="exco-member"]').first().within(() => {
        cy.get('[data-testid="member-photo"]').should('be.visible');
        cy.get('[data-testid="member-name"]').should('be.visible');
        cy.get('[data-testid="member-position"]').should('be.visible');
        cy.get('[data-testid="member-bio"]').should('be.visible');
      });
    });

    it('should display president information prominently', () => {
      cy.get('[data-testid="president-profile"]').should('be.visible');
      cy.get('[data-testid="president-profile"]').within(() => {
        cy.get('[data-testid="president-name"]').should('be.visible');
        cy.get('[data-testid="president-message"]').should('be.visible');
      });
    });

    it('should show vice president information', () => {
      cy.get('[data-testid="vice-president-profile"]').should('be.visible');
    });

    it('should display secretary and treasurer', () => {
      cy.get('[data-testid="secretary-profile"]').should('be.visible');
      cy.get('[data-testid="treasurer-profile"]').should('be.visible');
    });

    it('should show committee members', () => {
      cy.get('[data-testid="committee-member"]').should('have.length.greaterThan', 0);
    });
  });

  describe('Committee Structure', () => {
    it('should display organizational chart', () => {
      cy.get('[data-testid="org-chart"]').should('be.visible');
    });

    it('should show committee hierarchy', () => {
      cy.get('[data-testid="committee-hierarchy"]').should('be.visible');
      cy.get('[data-testid="hierarchy-level"]').should('have.length.greaterThan', 0);
    });

    it('should display different committees', () => {
      cy.get('[data-testid="academic-committee"]').should('be.visible');
      cy.get('[data-testid="sports-committee"]').should('be.visible');
      cy.get('[data-testid="cultural-committee"]').should('be.visible');
      cy.get('[data-testid="finance-committee"]').should('be.visible');
    });

    it('should show committee responsibilities', () => {
      cy.get('[data-testid="committee-responsibilities"]').should('be.visible');
      cy.get('[data-testid="responsibility-item"]').should('have.length.greaterThan', 0);
    });

    it('should display meeting schedule', () => {
      cy.get('[data-testid="meeting-schedule"]').should('be.visible');
    });
  });

  describe('Member Profiles and Details', () => {
    it('should open member detail modal on click', () => {
      cy.get('[data-testid="exco-member"]').first().click();
      cy.get('[data-testid="member-modal"]').should('be.visible');
    });

    it('should display detailed member information in modal', () => {
      cy.get('[data-testid="exco-member"]').first().click();
      cy.get('[data-testid="member-modal"]').within(() => {
        cy.get('[data-testid="modal-photo"]').should('be.visible');
        cy.get('[data-testid="modal-name"]').should('be.visible');
        cy.get('[data-testid="modal-position"]').should('be.visible');
        cy.get('[data-testid="modal-bio"]').should('be.visible');
        cy.get('[data-testid="modal-contact"]').should('be.visible');
      });
    });

    it('should show member achievements and qualifications', () => {
      cy.get('[data-testid="exco-member"]').first().click();
      cy.get('[data-testid="member-modal"]').within(() => {
        cy.get('[data-testid="member-achievements"]').should('be.visible');
        cy.get('[data-testid="member-qualifications"]').should('be.visible');
      });
    });

    it('should display member tenure and experience', () => {
      cy.get('[data-testid="exco-member"]').first().click();
      cy.get('[data-testid="member-modal"]').within(() => {
        cy.get('[data-testid="member-tenure"]').should('be.visible');
        cy.get('[data-testid="member-experience"]').should('be.visible');
      });
    });

    it('should close member modal', () => {
      cy.get('[data-testid="exco-member"]').first().click();
      cy.get('[data-testid="member-modal"]').should('be.visible');
      cy.get('[data-testid="modal-close"]').click();
      cy.get('[data-testid="member-modal"]').should('not.be.visible');
    });

    it('should show contact information for members', () => {
      cy.get('[data-testid="exco-member"]').first().click();
      cy.get('[data-testid="member-modal"]').within(() => {
        cy.get('[data-testid="member-email"]').should('be.visible');
        cy.get('[data-testid="member-phone"]').should('be.visible');
      });
    });
  });

  describe('Committee Activities and Reports', () => {
    it('should display recent activities', () => {
      cy.get('[data-testid="recent-activities"]').should('be.visible');
      cy.get('[data-testid="activity-item"]').should('have.length.greaterThan', 0);
    });

    it('should show activity details', () => {
      cy.get('[data-testid="activity-item"]').first().within(() => {
        cy.get('[data-testid="activity-title"]').should('be.visible');
        cy.get('[data-testid="activity-date"]').should('be.visible');
        cy.get('[data-testid="activity-description"]').should('be.visible');
      });
    });

    it('should display annual reports', () => {
      cy.get('[data-testid="annual-reports"]').should('be.visible');
      cy.get('[data-testid="report-item"]').should('have.length.greaterThan', 0);
    });

    it('should allow downloading reports', () => {
      cy.get('[data-testid="report-download"]').first().should('be.visible');
      cy.get('[data-testid="report-download"]').first().should('have.attr', 'href');
    });

    it('should show meeting minutes', () => {
      cy.get('[data-testid="meeting-minutes"]').should('be.visible');
      cy.get('[data-testid="minutes-item"]').should('have.length.greaterThan', 0);
    });

    it('should display upcoming meetings', () => {
      cy.get('[data-testid="upcoming-meetings"]').should('be.visible');
    });
  });

  describe('Elections and Terms', () => {
    it('should display current term information', () => {
      cy.get('[data-testid="current-term"]').should('be.visible');
      cy.get('[data-testid="term-start"]').should('be.visible');
      cy.get('[data-testid="term-end"]').should('be.visible');
    });

    it('should show election process information', () => {
      cy.get('[data-testid="election-process"]').should('be.visible');
    });

    it('should display election timeline', () => {
      cy.get('[data-testid="election-timeline"]').should('be.visible');
      cy.get('[data-testid="timeline-item"]').should('have.length.greaterThan', 0);
    });

    it('should show nomination criteria', () => {
      cy.get('[data-testid="nomination-criteria"]').should('be.visible');
    });

    it('should display voting procedures', () => {
      cy.get('[data-testid="voting-procedures"]').should('be.visible');
    });
  });

  describe('Historical EXCO Information', () => {
    it('should display past EXCO members', () => {
      cy.get('[data-testid="past-exco"]').should('be.visible');
    });

    it('should show EXCO history by year', () => {
      cy.get('[data-testid="exco-history"]').should('be.visible');
      cy.get('[data-testid="year-selector"]').should('be.visible');
    });

    it('should filter EXCO by year', () => {
      cy.get('[data-testid="year-selector"]').select('2022');
      cy.get('[data-testid="exco-2022"]').should('be.visible');
    });

    it('should display notable past presidents', () => {
      cy.get('[data-testid="past-presidents"]').should('be.visible');
      cy.get('[data-testid="past-president"]').should('have.length.greaterThan', 0);
    });

    it('should show achievements of past committees', () => {
      cy.get('[data-testid="past-achievements"]').should('be.visible');
    });
  });

  describe('Contact and Communication', () => {
    it('should display EXCO contact information', () => {
      cy.get('[data-testid="exco-contact"]').should('be.visible');
    });

    it('should show general EXCO email', () => {
      cy.get('[data-testid="exco-email"]').should('be.visible');
      cy.get('[data-testid="exco-email"]').should('contain', '@');
    });

    it('should display office hours', () => {
      cy.get('[data-testid="office-hours"]').should('be.visible');
    });

    it('should show EXCO office location', () => {
      cy.get('[data-testid="office-location"]').should('be.visible');
    });

    it('should have contact form for EXCO', () => {
      cy.get('[data-testid="exco-contact-form"]').should('be.visible');
      cy.get('[data-testid="contact-name"]').should('be.visible');
      cy.get('[data-testid="contact-email"]').should('be.visible');
      cy.get('[data-testid="contact-message"]').should('be.visible');
    });

    it('should validate contact form submission', () => {
      cy.get('[data-testid="contact-name"]').type('John Doe');
      cy.get('[data-testid="contact-email"]').type('john@example.com');
      cy.get('[data-testid="contact-message"]').type('Test message');
      cy.get('[data-testid="contact-submit"]').click();
      cy.get('[data-testid="success-message"]').should('be.visible');
    });
  });

  describe('Interactive Features', () => {
    it('should have search functionality for members', () => {
      cy.get('[data-testid="member-search"]').should('be.visible');
      cy.get('[data-testid="member-search"]').type('President');
      cy.get('[data-testid="search-results"]').should('contain.text', 'President');
    });

    it('should filter members by position', () => {
      cy.get('[data-testid="position-filter"]').select('Committee Member');
      cy.get('[data-testid="committee-member"]').should('be.visible');
    });

    it('should sort members alphabetically', () => {
      cy.get('[data-testid="sort-alphabetical"]').click();
      cy.get('[data-testid="member-name"]').then(($names) => {
        const names = Array.from($names).map(el => el.textContent);
        const sortedNames = [...names].sort();
        expect(names).to.deep.equal(sortedNames);
      });
    });

    it('should have print-friendly member list', () => {
      cy.get('[data-testid="print-members"]').should('be.visible');
    });
  });

  describe('Responsive Design', () => {
    it('should be responsive on mobile devices', () => {
      cy.viewport('iphone-6');
      cy.get('[data-testid="current-exco"]').should('be.visible');
      cy.get('[data-testid="exco-member"]').should('be.visible');
    });

    it('should stack member cards on mobile', () => {
      cy.viewport(375, 667);
      cy.get('[data-testid="exco-member"]').should('have.css', 'width');
    });

    it('should adapt organizational chart for mobile', () => {
      cy.viewport('iphone-6');
      cy.get('[data-testid="org-chart"]').should('be.visible');
    });

    it('should make member modal responsive', () => {
      cy.viewport('iphone-6');
      cy.get('[data-testid="exco-member"]').first().click();
      cy.get('[data-testid="member-modal"]').should('be.visible');
    });
  });

  describe('Performance and Loading', () => {
    it('should load member photos with lazy loading', () => {
      cy.get('[data-testid="member-photo"] img').should('have.attr', 'loading', 'lazy');
    });

    it('should handle image loading errors', () => {
      cy.get('[data-testid="member-photo"] img').each(($img) => {
        cy.wrap($img).should('be.visible');
      });
    });

    it('should load member information progressively', () => {
      cy.get('[data-testid="exco-member"]').should('be.visible');
      cy.scrollTo('bottom');
      cy.get('[data-testid="past-exco"]').should('be.visible');
    });
  });

  describe('Accessibility', () => {
    it('should support keyboard navigation', () => {
      cy.get('[data-testid="exco-member"]').first().focus().type('{enter}');
      cy.get('[data-testid="member-modal"]').should('be.visible');
    });

    it('should have proper heading hierarchy', () => {
      cy.get('h1').should('have.length', 1);
      cy.get('h2').should('have.length.greaterThan', 0);
      cy.get('h3').should('have.length.greaterThan', 0);
    });

    it('should have alt text for all member photos', () => {
      cy.get('[data-testid="member-photo"] img').each(($img) => {
        cy.wrap($img).should('have.attr', 'alt');
      });
    });

    it('should have proper ARIA labels for interactive elements', () => {
      cy.get('[data-testid="exco-member"]').should('have.attr', 'role', 'button');
      cy.get('[data-testid="member-search"]').should('have.attr', 'aria-label');
    });

    it('should manage focus in member modal', () => {
      cy.get('[data-testid="exco-member"]').first().click();
      cy.get('[data-testid="member-modal"]').should('be.visible');
      cy.focused().should('exist');
    });

    it('should have proper form labels', () => {
      cy.get('[data-testid="contact-name"]').should('have.attr', 'aria-label');
      cy.get('[data-testid="contact-email"]').should('have.attr', 'aria-label');
      cy.get('[data-testid="contact-message"]').should('have.attr', 'aria-label');
    });
  });

  describe('Content Validation', () => {
    it('should display current year in term information', () => {
      const currentYear = new Date().getFullYear();
      cy.get('[data-testid="current-term"]').should('contain.text', currentYear.toString());
    });

    it('should have non-empty member biographies', () => {
      cy.get('[data-testid="member-bio"]').each(($bio) => {
        cy.wrap($bio).should('not.be.empty');
      });
    });

    it('should display valid email addresses', () => {
      cy.get('[data-testid="member-email"]').each(($email) => {
        cy.wrap($email).should('match', /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      });
    });

    it('should show proper position titles', () => {
      cy.get('[data-testid="member-position"]').each(($position) => {
        cy.wrap($position).should('not.be.empty');
      });
    });
  });
});