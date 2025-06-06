/**
 * Membership Terms Tests
 * Tests all functionality on the membership terms page including terms display and membership features
 */

describe('Membership Terms Page', () => {
  beforeEach(() => {
    cy.visit('/membership-terms');
    cy.waitForPageLoad();
  });

  describe('Page Layout and Structure', () => {
    it('should display the membership terms page header', () => {
      cy.get('h1').should('contain.text', 'Membership Terms');
    });

    it('should load page content successfully', () => {
      cy.get('main').should('be.visible');
      cy.get('body').should('not.contain', 'Loading...');
    });

    it('should have proper page title', () => {
      cy.title().should('contain', 'Membership Terms');
    });

    it('should display membership hero section', () => {
      cy.get('[data-testid="membership-hero"]').should('be.visible');
    });
  });

  describe('Terms and Conditions Section', () => {
    it('should display terms and conditions', () => {
      cy.get('[data-testid="terms-conditions"]').should('be.visible');
    });

    it('should show terms sections with headings', () => {
      cy.get('[data-testid="terms-section"]').should('have.length.greaterThan', 0);
      cy.get('[data-testid="terms-section"]').first().within(() => {
        cy.get('h2, h3').should('be.visible');
      });
    });

    it('should display membership eligibility criteria', () => {
      cy.get('[data-testid="eligibility-criteria"]').should('be.visible');
      cy.get('[data-testid="eligibility-item"]').should('have.length.greaterThan', 0);
    });

    it('should show membership benefits', () => {
      cy.get('[data-testid="membership-benefits"]').should('be.visible');
      cy.get('[data-testid="benefit-item"]').should('have.length.greaterThan', 0);
    });

    it('should display membership obligations', () => {
      cy.get('[data-testid="membership-obligations"]').should('be.visible');
      cy.get('[data-testid="obligation-item"]').should('have.length.greaterThan', 0);
    });

    it('should show termination conditions', () => {
      cy.get('[data-testid="termination-conditions"]').should('be.visible');
    });
  });

  describe('Membership Types Section', () => {
    it('should display different membership types', () => {
      cy.get('[data-testid="membership-types"]').should('be.visible');
      cy.get('[data-testid="membership-type"]').should('have.length.greaterThan', 0);
    });

    it('should show full membership details', () => {
      cy.get('[data-testid="full-membership"]').should('be.visible');
      cy.get('[data-testid="full-membership"]').within(() => {
        cy.get('[data-testid="membership-title"]').should('contain.text', 'Full Member');
        cy.get('[data-testid="membership-description"]').should('be.visible');
        cy.get('[data-testid="membership-requirements"]').should('be.visible');
      });
    });

    it('should display associate membership details', () => {
      cy.get('[data-testid="associate-membership"]').should('be.visible');
      cy.get('[data-testid="associate-membership"]').within(() => {
        cy.get('[data-testid="membership-title"]').should('contain.text', 'Associate Member');
        cy.get('[data-testid="membership-description"]').should('be.visible');
        cy.get('[data-testid="membership-requirements"]').should('be.visible');
      });
    });

    it('should show honorary membership details', () => {
      cy.get('[data-testid="honorary-membership"]').should('be.visible');
      cy.get('[data-testid="honorary-membership"]').within(() => {
        cy.get('[data-testid="membership-title"]').should('contain.text', 'Honorary Member');
        cy.get('[data-testid="membership-description"]').should('be.visible');
        cy.get('[data-testid="membership-requirements"]').should('be.visible');
      });
    });

    it('should display membership comparison table', () => {
      cy.get('[data-testid="membership-comparison"]').should('be.visible');
      cy.get('[data-testid="comparison-table"]').should('be.visible');
      cy.get('[data-testid="comparison-row"]').should('have.length.greaterThan', 0);
    });
  });

  describe('Membership Fees Section', () => {
    it('should display membership fees information', () => {
      cy.get('[data-testid="membership-fees"]').should('be.visible');
    });

    it('should show annual dues', () => {
      cy.get('[data-testid="annual-dues"]').should('be.visible');
      cy.get('[data-testid="dues-amount"]').should('be.visible');
    });

    it('should display registration fees', () => {
      cy.get('[data-testid="registration-fees"]').should('be.visible');
      cy.get('[data-testid="registration-amount"]').should('be.visible');
    });

    it('should show payment methods', () => {
      cy.get('[data-testid="payment-methods"]').should('be.visible');
      cy.get('[data-testid="payment-method"]').should('have.length.greaterThan', 0);
    });

    it('should display payment schedule', () => {
      cy.get('[data-testid="payment-schedule"]').should('be.visible');
    });

    it('should show late payment penalties', () => {
      cy.get('[data-testid="late-penalties"]').should('be.visible');
    });
  });

  describe('Application Process Section', () => {
    it('should display application process steps', () => {
      cy.get('[data-testid="application-process"]').should('be.visible');
      cy.get('[data-testid="process-step"]').should('have.length.greaterThan', 0);
    });

    it('should show required documents', () => {
      cy.get('[data-testid="required-documents"]').should('be.visible');
      cy.get('[data-testid="document-item"]').should('have.length.greaterThan', 0);
    });

    it('should display application timeline', () => {
      cy.get('[data-testid="application-timeline"]').should('be.visible');
    });

    it('should show approval process', () => {
      cy.get('[data-testid="approval-process"]').should('be.visible');
    });

    it('should have application form link', () => {
      cy.get('[data-testid="application-link"]').should('be.visible');
      cy.get('[data-testid="application-link"]').should('have.attr', 'href');
    });
  });

  describe('Rights and Privileges Section', () => {
    it('should display member rights', () => {
      cy.get('[data-testid="member-rights"]').should('be.visible');
      cy.get('[data-testid="right-item"]').should('have.length.greaterThan', 0);
    });

    it('should show voting rights', () => {
      cy.get('[data-testid="voting-rights"]').should('be.visible');
    });

    it('should display event access privileges', () => {
      cy.get('[data-testid="event-access"]').should('be.visible');
    });

    it('should show networking opportunities', () => {
      cy.get('[data-testid="networking-opportunities"]').should('be.visible');
    });

    it('should display alumni directory access', () => {
      cy.get('[data-testid="directory-access"]').should('be.visible');
    });
  });

  describe('Code of Conduct Section', () => {
    it('should display code of conduct', () => {
      cy.get('[data-testid="code-of-conduct"]').should('be.visible');
    });

    it('should show behavioral expectations', () => {
      cy.get('[data-testid="behavioral-expectations"]').should('be.visible');
      cy.get('[data-testid="expectation-item"]').should('have.length.greaterThan', 0);
    });

    it('should display disciplinary procedures', () => {
      cy.get('[data-testid="disciplinary-procedures"]').should('be.visible');
    });

    it('should show grievance process', () => {
      cy.get('[data-testid="grievance-process"]').should('be.visible');
    });
  });

  describe('Interactive Elements', () => {
    it('should have expandable sections', () => {
      cy.get('[data-testid="expandable-section"]').first().click();
      cy.get('[data-testid="expanded-content"]').should('be.visible');
    });

    it('should collapse expanded sections', () => {
      cy.get('[data-testid="expandable-section"]').first().click();
      cy.get('[data-testid="expanded-content"]').should('be.visible');
      cy.get('[data-testid="expandable-section"]').first().click();
      cy.get('[data-testid="expanded-content"]').should('not.be.visible');
    });

    it('should have working accordion functionality', () => {
      cy.get('[data-testid="accordion-trigger"]').first().click();
      cy.get('[data-testid="accordion-content"]').first().should('be.visible');
    });

    it('should support table of contents navigation', () => {
      cy.get('[data-testid="table-of-contents"]').should('be.visible');
      cy.get('[data-testid="toc-link"]').first().click();
      cy.url().should('include', '#');
    });
  });

  describe('Download and Print Features', () => {
    it('should have download PDF option', () => {
      cy.get('[data-testid="download-pdf"]').should('be.visible');
      cy.get('[data-testid="download-pdf"]').should('have.attr', 'href').and('include', '.pdf');
    });

    it('should have print functionality', () => {
      cy.get('[data-testid="print-terms"]').should('be.visible');
    });

    it('should display last updated date', () => {
      cy.get('[data-testid="last-updated"]').should('be.visible');
      cy.get('[data-testid="last-updated"]').should('not.be.empty');
    });

    it('should show version information', () => {
      cy.get('[data-testid="version-info"]').should('be.visible');
    });
  });

  describe('Contact Information', () => {
    it('should display membership contact details', () => {
      cy.get('[data-testid="membership-contact"]').should('be.visible');
    });

    it('should show membership coordinator information', () => {
      cy.get('[data-testid="coordinator-info"]').should('be.visible');
      cy.get('[data-testid="coordinator-name"]').should('be.visible');
      cy.get('[data-testid="coordinator-email"]').should('be.visible');
      cy.get('[data-testid="coordinator-phone"]').should('be.visible');
    });

    it('should have working contact links', () => {
      cy.get('[data-testid="coordinator-email"] a').should('have.attr', 'href').and('include', 'mailto:');
      cy.get('[data-testid="coordinator-phone"] a').should('have.attr', 'href').and('include', 'tel:');
    });

    it('should display office hours', () => {
      cy.get('[data-testid="membership-office-hours"]').should('be.visible');
    });
  });

  describe('FAQ Section', () => {
    it('should display frequently asked questions', () => {
      cy.get('[data-testid="membership-faq"]').should('be.visible');
    });

    it('should show FAQ items', () => {
      cy.get('[data-testid="faq-item"]').should('have.length.greaterThan', 0);
    });

    it('should expand FAQ answers', () => {
      cy.get('[data-testid="faq-question"]').first().click();
      cy.get('[data-testid="faq-answer"]').first().should('be.visible');
    });

    it('should collapse FAQ answers', () => {
      cy.get('[data-testid="faq-question"]').first().click();
      cy.get('[data-testid="faq-answer"]').first().should('be.visible');
      cy.get('[data-testid="faq-question"]').first().click();
      cy.get('[data-testid="faq-answer"]').first().should('not.be.visible');
    });

    it('should have search functionality for FAQs', () => {
      cy.get('[data-testid="faq-search"]').should('be.visible');
      cy.get('[data-testid="faq-search"]').type('dues');
      cy.get('[data-testid="faq-item"]').should('contain.text', 'dues');
    });
  });

  describe('Legal Information', () => {
    it('should display legal disclaimers', () => {
      cy.get('[data-testid="legal-disclaimers"]').should('be.visible');
    });

    it('should show privacy policy link', () => {
      cy.get('[data-testid="privacy-policy-link"]').should('be.visible');
      cy.get('[data-testid="privacy-policy-link"]').should('have.attr', 'href');
    });

    it('should display terms of use', () => {
      cy.get('[data-testid="terms-of-use"]').should('be.visible');
    });

    it('should show governing law information', () => {
      cy.get('[data-testid="governing-law"]').should('be.visible');
    });
  });

  describe('Responsive Design', () => {
    it('should be responsive on mobile devices', () => {
      cy.viewport('iphone-6');
      cy.get('[data-testid="terms-conditions"]').should('be.visible');
      cy.get('[data-testid="membership-types"]').should('be.visible');
    });

    it('should adapt layout for tablet screens', () => {
      cy.viewport('ipad-2');
      cy.get('[data-testid="membership-comparison"]').should('be.visible');
      cy.get('[data-testid="application-process"]').should('be.visible');
    });

    it('should stack content appropriately on small screens', () => {
      cy.viewport(375, 667);
      cy.get('[data-testid="membership-type"]').should('be.visible');
      cy.get('[data-testid="process-step"]').should('be.visible');
    });

    it('should make tables scrollable on mobile', () => {
      cy.viewport('iphone-6');
      cy.get('[data-testid="comparison-table"]').should('have.css', 'overflow-x', 'auto');
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

    it('should have proper ARIA labels', () => {
      cy.get('[data-testid="accordion-trigger"]').should('have.attr', 'aria-expanded');
      cy.get('[data-testid="expandable-section"]').should('have.attr', 'aria-controls');
    });

    it('should manage focus properly', () => {
      cy.get('[data-testid="toc-link"]').first().click();
      cy.focused().should('exist');
    });

    it('should have skip links for navigation', () => {
      cy.get('[data-testid="skip-to-content"]').should('exist');
    });
  });

  describe('Content Validation', () => {
    it('should display current membership fees', () => {
      cy.get('[data-testid="dues-amount"]').should('not.contain', 'TBD');
      cy.get('[data-testid="registration-amount"]').should('not.contain', 'TBD');
    });

    it('should show updated contact information', () => {
      cy.get('[data-testid="coordinator-email"]').should('contain', '@');
      cy.get('[data-testid="coordinator-phone"]').should('not.be.empty');
    });

    it('should have recent last updated date', () => {
      const currentYear = new Date().getFullYear();
      cy.get('[data-testid="last-updated"]').should('contain', currentYear.toString());
    });

    it('should display complete terms sections', () => {
      cy.get('[data-testid="terms-section"]').each(($section) => {
        cy.wrap($section).should('not.be.empty');
      });
    });
  });

  describe('Search and Navigation', () => {
    it('should have search functionality for terms', () => {
      cy.get('[data-testid="terms-search"]').should('be.visible');
    });

    it('should highlight search results', () => {
      cy.get('[data-testid="terms-search"]').type('membership');
      cy.get('[data-testid="search-highlight"]').should('be.visible');
    });

    it('should clear search results', () => {
      cy.get('[data-testid="terms-search"]').type('test search');
      cy.get('[data-testid="search-clear"]').click();
      cy.get('[data-testid="terms-search"]').should('have.value', '');
    });

    it('should have smooth scrolling to sections', () => {
      cy.get('[data-testid="toc-link"]').first().click();
      cy.get('html').should('have.css', 'scroll-behavior', 'smooth');
    });
  });
});