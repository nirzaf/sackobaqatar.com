/**
 * Contact Page Tests
 * Tests all functionality on the contact page including forms, maps, and contact information
 */

describe('Contact Page', () => {
  beforeEach(() => {
    cy.visit('/contact');
    cy.waitForPageLoad();
  });

  describe('Page Layout and Structure', () => {
    it('should display the contact page header', () => {
      cy.get('h1').should('contain.text', 'Contact');
    });

    it('should load page content successfully', () => {
      cy.get('main').should('be.visible');
      cy.get('body').should('not.contain', 'Loading...');
    });

    it('should have proper page title', () => {
      cy.title().should('contain', 'Contact');
    });

    it('should display contact hero section', () => {
      cy.get('[data-testid="contact-hero"]').should('be.visible');
    });
  });

  describe('Contact Information Section', () => {
    it('should display school contact details', () => {
      cy.get('[data-testid="contact-info"]').should('be.visible');
    });

    it('should show school address', () => {
      cy.get('[data-testid="school-address"]').should('be.visible');
      cy.get('[data-testid="school-address"]').should('contain.text', 'Cape Coast');
      cy.get('[data-testid="school-address"]').should('contain.text', 'Ghana');
    });

    it('should display phone numbers', () => {
      cy.get('[data-testid="contact-phone"]').should('be.visible');
      cy.get('[data-testid="contact-phone"]').should('not.be.empty');
    });

    it('should show email addresses', () => {
      cy.get('[data-testid="contact-email"]').should('be.visible');
      cy.get('[data-testid="contact-email"]').should('contain.text', '@');
    });

    it('should display office hours', () => {
      cy.get('[data-testid="office-hours"]').should('be.visible');
      cy.get('[data-testid="office-hours"]').should('contain.text', 'Monday');
    });

    it('should have clickable contact links', () => {
      cy.get('[data-testid="contact-email"] a').should('have.attr', 'href').and('include', 'mailto:');
      cy.get('[data-testid="contact-phone"] a').should('have.attr', 'href').and('include', 'tel:');
    });
  });

  describe('Contact Form', () => {
    it('should display contact form', () => {
      cy.get('[data-testid="contact-form"]').should('be.visible');
    });

    it('should have all required form fields', () => {
      cy.get('[data-testid="form-name"]').should('be.visible');
      cy.get('[data-testid="form-email"]').should('be.visible');
      cy.get('[data-testid="form-subject"]').should('be.visible');
      cy.get('[data-testid="form-message"]').should('be.visible');
    });

    it('should validate required fields', () => {
      cy.get('[data-testid="form-submit"]').click();
      cy.get('[data-testid="name-error"]').should('be.visible');
      cy.get('[data-testid="email-error"]').should('be.visible');
      cy.get('[data-testid="message-error"]').should('be.visible');
    });

    it('should validate email format', () => {
      cy.get('[data-testid="form-email"]').type('invalid-email');
      cy.get('[data-testid="form-submit"]').click();
      cy.get('[data-testid="email-format-error"]').should('be.visible');
    });

    it('should submit form with valid data', () => {
      cy.get('[data-testid="form-name"]').type('John Doe');
      cy.get('[data-testid="form-email"]').type('john.doe@example.com');
      cy.get('[data-testid="form-subject"]').type('Test Subject');
      cy.get('[data-testid="form-message"]').type('This is a test message.');
      cy.get('[data-testid="form-submit"]').click();
      cy.get('[data-testid="success-message"]').should('be.visible');
    });

    it('should clear form after successful submission', () => {
      cy.get('[data-testid="form-name"]').type('John Doe');
      cy.get('[data-testid="form-email"]').type('john.doe@example.com');
      cy.get('[data-testid="form-subject"]').type('Test Subject');
      cy.get('[data-testid="form-message"]').type('This is a test message.');
      cy.get('[data-testid="form-submit"]').click();

      cy.get('[data-testid="success-message"]').should('be.visible');
      cy.get('[data-testid="form-name"]').should('have.value', '');
      cy.get('[data-testid="form-email"]').should('have.value', '');
      cy.get('[data-testid="form-subject"]').should('have.value', '');
      cy.get('[data-testid="form-message"]').should('have.value', '');
    });

    it('should show loading state during submission', () => {
      cy.get('[data-testid="form-name"]').type('John Doe');
      cy.get('[data-testid="form-email"]').type('john.doe@example.com');
      cy.get('[data-testid="form-subject"]').type('Test Subject');
      cy.get('[data-testid="form-message"]').type('This is a test message.');
      cy.get('[data-testid="form-submit"]').click();
      cy.get('[data-testid="form-loading"]').should('be.visible');
    });

    it('should have character limit for message field', () => {
      const longMessage = 'a'.repeat(1001);
      cy.get('[data-testid="form-message"]').type(longMessage);
      cy.get('[data-testid="message-length-error"]').should('be.visible');
    });

    it('should display character count for message field', () => {
      cy.get('[data-testid="form-message"]').type('Test message');
      cy.get('[data-testid="character-count"]').should('contain.text', '12');
    });
  });

  describe('Contact Form Categories', () => {
    it('should display inquiry type selector', () => {
      cy.get('[data-testid="inquiry-type"]').should('be.visible');
    });

    it('should have different inquiry categories', () => {
      cy.get('[data-testid="inquiry-type"]').click();
      cy.get('[data-testid="inquiry-general"]').should('be.visible');
      cy.get('[data-testid="inquiry-admissions"]').should('be.visible');
      cy.get('[data-testid="inquiry-alumni"]').should('be.visible');
      cy.get('[data-testid="inquiry-events"]').should('be.visible');
    });

    it('should select inquiry type', () => {
      cy.get('[data-testid="inquiry-type"]').select('Admissions');
      cy.get('[data-testid="inquiry-type"]').should('have.value', 'admissions');
    });

    it('should show relevant fields based on inquiry type', () => {
      cy.get('[data-testid="inquiry-type"]').select('Admissions');
      cy.get('[data-testid="student-grade"]').should('be.visible');
      cy.get('[data-testid="enrollment-year"]').should('be.visible');
    });
  });

  describe('Location and Map', () => {
    it('should display school location map', () => {
      cy.get('[data-testid="location-map"]').should('be.visible');
    });

    it('should show map with school marker', () => {
      cy.get('[data-testid="map-marker"]').should('be.visible');
    });

    it('should have directions link', () => {
      cy.get('[data-testid="directions-link"]').should('be.visible');
      cy.get('[data-testid="directions-link"]').should('have.attr', 'href').and('include', 'maps');
    });

    it('should display location description', () => {
      cy.get('[data-testid="location-description"]').should('be.visible');
      cy.get('[data-testid="location-description"]').should('contain.text', 'Cape Coast');
    });

    it('should show nearby landmarks', () => {
      cy.get('[data-testid="nearby-landmarks"]').should('be.visible');
      cy.get('[data-testid="landmark-item"]').should('have.length.greaterThan', 0);
    });
  });

  describe('Department Contacts', () => {
    it('should display department contact section', () => {
      cy.get('[data-testid="department-contacts"]').should('be.visible');
    });

    it('should show different departments', () => {
      cy.get('[data-testid="department-item"]').should('have.length.greaterThan', 0);
      cy.get('[data-testid="department-admissions"]').should('be.visible');
      cy.get('[data-testid="department-alumni"]').should('be.visible');
      cy.get('[data-testid="department-administration"]').should('be.visible');
    });

    it('should display department contact information', () => {
      cy.get('[data-testid="department-item"]').first().within(() => {
        cy.get('[data-testid="department-name"]').should('be.visible');
        cy.get('[data-testid="department-email"]').should('be.visible');
        cy.get('[data-testid="department-phone"]').should('be.visible');
      });
    });

    it('should have working department contact links', () => {
      cy.get('[data-testid="department-email"] a').first().should('have.attr', 'href').and('include', 'mailto:');
      cy.get('[data-testid="department-phone"] a').first().should('have.attr', 'href').and('include', 'tel:');
    });
  });

  describe('Social Media Links', () => {
    it('should display social media section', () => {
      cy.get('[data-testid="social-media"]').should('be.visible');
    });

    it('should have Facebook link', () => {
      cy.get('[data-testid="social-facebook"]').should('be.visible');
      cy.get('[data-testid="social-facebook"]').should('have.attr', 'href').and('include', 'facebook.com');
    });

    it('should have Instagram link', () => {
      cy.get('[data-testid="social-instagram"]').should('be.visible');
      cy.get('[data-testid="social-instagram"]').should('have.attr', 'href').and('include', 'instagram.com');
    });

    it('should have Twitter link', () => {
      cy.get('[data-testid="social-twitter"]').should('be.visible');
      cy.get('[data-testid="social-twitter"]').should('have.attr', 'href').and('include', 'twitter.com');
    });

    it('should open social links in new tab', () => {
      cy.get('[data-testid="social-facebook"]').should('have.attr', 'target', '_blank');
      cy.get('[data-testid="social-instagram"]').should('have.attr', 'target', '_blank');
      cy.get('[data-testid="social-twitter"]').should('have.attr', 'target', '_blank');
    });
  });

  describe('FAQ Section', () => {
    it('should display frequently asked questions', () => {
      cy.get('[data-testid="faq-section"]').should('be.visible');
    });

    it('should show FAQ items', () => {
      cy.get('[data-testid="faq-item"]').should('have.length.greaterThan', 0);
    });

    it('should expand FAQ answers on click', () => {
      cy.get('[data-testid="faq-question"]').first().click();
      cy.get('[data-testid="faq-answer"]').first().should('be.visible');
    });

    it('should collapse FAQ answers on second click', () => {
      cy.get('[data-testid="faq-question"]').first().click();
      cy.get('[data-testid="faq-answer"]').first().should('be.visible');
      cy.get('[data-testid="faq-question"]').first().click();
      cy.get('[data-testid="faq-answer"]').first().should('not.be.visible');
    });

    it('should have search functionality for FAQs', () => {
      cy.get('[data-testid="faq-search"]').should('be.visible');
      cy.get('[data-testid="faq-search"]').type('admission');
      cy.get('[data-testid="faq-item"]').should('contain.text', 'admission');
    });
  });

  describe('Emergency Contact Information', () => {
    it('should display emergency contact section', () => {
      cy.get('[data-testid="emergency-contact"]').should('be.visible');
    });

    it('should show emergency phone numbers', () => {
      cy.get('[data-testid="emergency-phone"]').should('be.visible');
      cy.get('[data-testid="emergency-phone"]').should('not.be.empty');
    });

    it('should display after-hours contact information', () => {
      cy.get('[data-testid="after-hours-contact"]').should('be.visible');
    });

    it('should have security contact details', () => {
      cy.get('[data-testid="security-contact"]').should('be.visible');
    });
  });

  describe('Responsive Design', () => {
    it('should be responsive on mobile devices', () => {
      cy.viewport('iphone-6');
      cy.get('[data-testid="contact-form"]').should('be.visible');
      cy.get('[data-testid="contact-info"]').should('be.visible');
    });

    it('should stack form and info sections on mobile', () => {
      cy.viewport(375, 667);
      cy.get('[data-testid="contact-form"]').should('be.visible');
      cy.get('[data-testid="contact-info"]').should('be.visible');
    });

    it('should adapt map size for different screens', () => {
      const viewports = [
        { width: 375, height: 667 },   // Mobile
        { width: 768, height: 1024 },  // Tablet
        { width: 1280, height: 720 }   // Desktop
      ];

      viewports.forEach(viewport => {
        cy.viewport(viewport.width, viewport.height);
        cy.get('[data-testid="location-map"]').should('be.visible');
        cy.wait(500);
      });
    });

    it('should hide sidebar content on mobile', () => {
      cy.viewport('iphone-6');
      cy.get('[data-testid="contact-sidebar"]').should('not.be.visible');
    });
  });

  describe('Accessibility', () => {
    it('should support keyboard navigation', () => {
      cy.get('[data-testid="form-name"]').focus().type('John Doe');
      cy.get('[data-testid="form-email"]').focus().type('john@example.com');
      cy.get('[data-testid="form-subject"]').focus().type('Test Subject');
      cy.get('[data-testid="form-message"]').focus().type('Test message');
    });

    it('should have proper form labels', () => {
      cy.get('[data-testid="form-name"]').should('have.attr', 'aria-label');
      cy.get('[data-testid="form-email"]').should('have.attr', 'aria-label');
      cy.get('[data-testid="form-subject"]').should('have.attr', 'aria-label');
      cy.get('[data-testid="form-message"]').should('have.attr', 'aria-label');
    });

    it('should have proper heading hierarchy', () => {
      cy.get('h1').should('have.length', 1);
      cy.get('h2').should('have.length.greaterThan', 0);
    });

    it('should have ARIA labels for interactive elements', () => {
      cy.get('[data-testid="form-submit"]').should('have.attr', 'aria-label');
      cy.get('[data-testid="faq-question"]').should('have.attr', 'aria-expanded');
    });

    it('should manage focus properly', () => {
      cy.get('[data-testid="form-name"]').focus();
      cy.focused().should('have.attr', 'data-testid', 'form-name');
    });
  });

  describe('Form Security', () => {
    it('should have CSRF protection', () => {
      cy.get('[data-testid="contact-form"]').within(() => {
        cy.get('input[name="_token"]').should('exist');
      });
    });

    it('should prevent spam submissions', () => {
      // Rapid form submissions
      cy.get('[data-testid="form-name"]').type('John Doe');
      cy.get('[data-testid="form-email"]').type('john@example.com');
      cy.get('[data-testid="form-message"]').type('Test message');
      cy.get('[data-testid="form-submit"]').click();
      cy.get('[data-testid="form-submit"]').click();
      cy.get('[data-testid="rate-limit-error"]').should('be.visible');
    });

    it('should sanitize form inputs', () => {
      cy.get('[data-testid="form-name"]').type('<script>alert("xss")</script>');
      cy.get('[data-testid="form-submit"]').click();
      cy.get('script').should('not.exist');
    });
  });
});