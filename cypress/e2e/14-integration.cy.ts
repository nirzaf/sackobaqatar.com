/**
 * Integration Tests
 * Tests complete user workflows and end-to-end functionality
 */

describe('Integration Tests', () => {
  describe('Complete User Journey - Prospective Student', () => {
    it('should complete the prospective student journey', () => {
      // Start at home page
      cy.visit('/');
      cy.waitForPageLoad();

      // Explore college information
      cy.get('[data-testid="learn-more-btn"]').click();
      cy.url().should('include', '/about');

      // Read about college history
      cy.get('[data-testid="history-link"]').click();
      cy.url().should('include', '/college-history');
      cy.get('[data-testid="founding-story"]').should('be.visible');

      // Check current events
      cy.get('[data-testid="nav-events"]').click();
      cy.url().should('include', '/events');
      cy.get('[data-testid="events-grid"]').should('be.visible');

      // View event details
      cy.get('[data-testid="event-card"]').first().click();
      cy.get('[data-testid="event-modal"]').should('be.visible');
      cy.get('[data-testid="modal-close"]').click();

      // Check news and updates
      cy.get('[data-testid="nav-news"]').click();
      cy.url().should('include', '/news');
      cy.get('[data-testid="news-articles"]').should('be.visible');

      // Read a news article
      cy.get('[data-testid="news-article"]').first().click();
      cy.get('[data-testid="article-content"]').should('be.visible');

      // Contact the college
      cy.get('[data-testid="nav-contact"]').click();
      cy.url().should('include', '/contact');

      // Fill out inquiry form
      cy.get('[data-testid="inquiry-type"]').select('Admission Inquiry');
      cy.get('[data-testid="contact-name"]').type('John Doe');
      cy.get('[data-testid="contact-email"]').type('john.doe@example.com');
      cy.get('[data-testid="contact-phone"]').type('+974 1234 5678');
      cy.get('[data-testid="contact-message"]').type('I am interested in learning more about admission requirements and the application process.');

      // Submit form
      cy.get('[data-testid="contact-submit"]').click();
      cy.get('[data-testid="success-message"]').should('be.visible');
      cy.get('[data-testid="success-message"]').should('contain.text', 'Thank you');
    });
  });

  describe('Complete User Journey - Alumni', () => {
    it('should complete the alumni journey', () => {
      // Start at home page
      cy.visit('/');
      cy.waitForPageLoad();

      // Navigate to college history
      cy.get('[data-testid="nav-history"]').click();
      cy.url().should('include', '/college-history');

      // View notable alumni section
      cy.get('[data-testid="notable-alumni"]').should('be.visible');
      cy.get('[data-testid="alumni-profile"]').first().click();
      cy.get('[data-testid="alumni-details"]').should('be.visible');

      // Check current EXCO
      cy.get('[data-testid="nav-exco"]').click();
      cy.url().should('include', '/exco');
      cy.get('[data-testid="current-exco"]').should('be.visible');

      // View member details
      cy.get('[data-testid="exco-member"]').first().click();
      cy.get('[data-testid="member-modal"]').should('be.visible');
      cy.get('[data-testid="modal-close"]').click();

      // Check recent events
      cy.get('[data-testid="nav-events"]').click();
      cy.url().should('include', '/events');

      // View image gallery
      cy.get('[data-testid="tab-gallery"]').click();
      cy.get('[data-testid="image-gallery"]').should('be.visible');
      cy.get('[data-testid="gallery-image"]').first().click();
      cy.get('[data-testid="image-modal"]').should('be.visible');
      cy.get('[data-testid="modal-close"]').click();

      // Contact for alumni activities
      cy.get('[data-testid="nav-contact"]').click();
      cy.url().should('include', '/contact');

      cy.get('[data-testid="inquiry-type"]').select('Alumni Affairs');
      cy.get('[data-testid="contact-name"]').type('Ahmed Al-Mahmoud');
      cy.get('[data-testid="contact-email"]').type('ahmed.mahmoud@example.com');
      cy.get('[data-testid="graduation-year"]').type('1995');
      cy.get('[data-testid="contact-message"]').type('I would like to get involved in alumni activities and contribute to the college.');

      cy.get('[data-testid="contact-submit"]').click();
      cy.get('[data-testid="success-message"]').should('be.visible');
    });
  });

  describe('Complete User Journey - Current Student', () => {
    it('should complete the current student journey', () => {
      // Start at home page
      cy.visit('/');
      cy.waitForPageLoad();

      // Check latest news
      cy.get('[data-testid="nav-news"]').click();
      cy.url().should('include', '/news');

      // Filter by academic news
      cy.get('[data-testid="category-filter"]').select('Academic');
      cy.get('[data-testid="news-article"]').should('contain.text', 'Academic');

      // Read academic announcement
      cy.get('[data-testid="news-article"]').first().click();
      cy.get('[data-testid="article-content"]').should('be.visible');
      cy.go('back');

      // Check upcoming events
      cy.get('[data-testid="nav-events"]').click();
      cy.url().should('include', '/events');

      // Filter by current year
      const currentYear = new Date().getFullYear();
      cy.get('[data-testid="year-filter"]').select(currentYear.toString());

      // View event details
      cy.get('[data-testid="event-card"]').first().click();
      cy.get('[data-testid="event-modal"]').should('be.visible');
      cy.get('[data-testid="event-date"]').should('be.visible');
      cy.get('[data-testid="modal-close"]').click();

      // Check video gallery for educational content
      cy.get('[data-testid="nav-video-gallery"]').click();
      cy.url().should('include', '/video-gallery');

      // Filter by educational videos
      cy.get('[data-testid="category-filter"]').select('Educational');
      cy.get('[data-testid="video-item"]').should('be.visible');

      // Play a video
      cy.get('[data-testid="video-item"]').first().click();
      cy.get('[data-testid="video-modal"]').should('be.visible');
      cy.get('[data-testid="video-player"]').should('be.visible');
      cy.get('[data-testid="modal-close"]').click();

      // Contact for student services
      cy.get('[data-testid="nav-contact"]').click();
      cy.url().should('include', '/contact');

      cy.get('[data-testid="inquiry-type"]').select('Student Services');
      cy.get('[data-testid="contact-name"]').type('Fatima Al-Zahra');
      cy.get('[data-testid="contact-email"]').type('fatima.zahra@student.sackoba.edu.qa');
      cy.get('[data-testid="student-id"]').type('STU2024001');
      cy.get('[data-testid="contact-message"]').type('I need assistance with my academic records and transcript request.');

      cy.get('[data-testid="contact-submit"]').click();
      cy.get('[data-testid="success-message"]').should('be.visible');
    });
  });

  describe('Complete User Journey - Parent/Guardian', () => {
    it('should complete the parent/guardian journey', () => {
      // Start at home page
      cy.visit('/');
      cy.waitForPageLoad();

      // Learn about the college
      cy.get('[data-testid="nav-about"]').click();
      cy.url().should('include', '/about');

      // Read mission and vision
      cy.get('[data-testid="mission-section"]').should('be.visible');
      cy.get('[data-testid="vision-section"]').should('be.visible');

      // Check academic programs
      cy.get('[data-testid="academic-programs"]').should('be.visible');
      cy.get('[data-testid="program-item"]').should('have.length.greaterThan', 0);

      // View facilities
      cy.get('[data-testid="facilities-section"]').should('be.visible');
      cy.get('[data-testid="facility-item"]').first().click();
      cy.get('[data-testid="facility-details"]').should('be.visible');

      // Check college history and reputation
      cy.get('[data-testid="nav-history"]').click();
      cy.url().should('include', '/college-history');

      // View achievements and milestones
      cy.get('[data-testid="achievements-timeline"]').should('be.visible');
      cy.get('[data-testid="achievement-item"]').should('have.length.greaterThan', 0);

      // Check current leadership
      cy.get('[data-testid="nav-exco"]').click();
      cy.url().should('include', '/exco');

      // View principal information
      cy.get('[data-testid="president-profile"]').should('be.visible');
      cy.get('[data-testid="president-profile"]').click();
      cy.get('[data-testid="member-modal"]').should('be.visible');
      cy.get('[data-testid="modal-close"]').click();

      // Check recent activities and events
      cy.get('[data-testid="nav-events"]').click();
      cy.url().should('include', '/events');

      // View academic events
      cy.get('[data-testid="category-filter"]').select('Academic');
      cy.get('[data-testid="event-card"]').should('be.visible');

      // Contact for admission inquiry
      cy.get('[data-testid="nav-contact"]').click();
      cy.url().should('include', '/contact');

      cy.get('[data-testid="inquiry-type"]').select('Admission Inquiry');
      cy.get('[data-testid="contact-name"]').type('Mohammed Al-Rashid');
      cy.get('[data-testid="contact-email"]').type('mohammed.rashid@example.com');
      cy.get('[data-testid="contact-phone"]').type('+974 9876 5432');
      cy.get('[data-testid="student-name"]').type('Omar Al-Rashid');
      cy.get('[data-testid="contact-message"]').type('I would like to inquire about the admission process for my son Omar. Please provide information about requirements and deadlines.');

      cy.get('[data-testid="contact-submit"]').click();
      cy.get('[data-testid="success-message"]').should('be.visible');
    });
  });

  describe('Search and Discovery Workflow', () => {
    it('should support comprehensive search across the site', () => {
      cy.visit('/');
      cy.waitForPageLoad();

      // Search for events
      cy.get('[data-testid="global-search"]').type('sports day');
      cy.get('[data-testid="search-submit"]').click();

      cy.get('[data-testid="search-results"]').should('be.visible');
      cy.get('[data-testid="result-item"]').should('contain.text', 'sports');

      // Filter results by type
      cy.get('[data-testid="result-filter"]').select('Events');
      cy.get('[data-testid="result-item"]').should('contain.text', 'event');

      // Navigate to specific result
      cy.get('[data-testid="result-item"]').first().click();
      cy.url().should('include', '/events');

      // Search within events page
      cy.get('[data-testid="events-search"]').type('annual');
      cy.get('[data-testid="event-card"]').should('contain.text', 'annual');

      // Clear search
      cy.get('[data-testid="clear-search"]').click();
      cy.get('[data-testid="events-search"]').should('have.value', '');
    });
  });

  describe('Multi-Page Navigation Workflow', () => {
    it('should maintain state across page navigation', () => {
      cy.visit('/');
      cy.waitForPageLoad();

      // Set preferences
      cy.get('[data-testid="language-selector"]').select('English');
      cy.get('[data-testid="theme-toggle"]').click(); // Switch to dark mode

      // Navigate to different pages
      cy.get('[data-testid="nav-about"]').click();
      cy.get('[data-testid="theme-toggle"]').should('have.attr', 'aria-pressed', 'true');

      cy.get('[data-testid="nav-events"]').click();
      cy.get('[data-testid="language-selector"]').should('have.value', 'English');

      cy.get('[data-testid="nav-news"]').click();
      cy.get('body').should('have.class', 'dark-theme');

      // Preferences should persist
      cy.reload();
      cy.get('body').should('have.class', 'dark-theme');
      cy.get('[data-testid="language-selector"]').should('have.value', 'English');
    });
  });

  describe('Form Submission and Feedback Workflow', () => {
    it('should handle form submission with validation and feedback', () => {
      cy.visit('/contact');
      cy.waitForPageLoad();

      // Try to submit empty form
      cy.get('[data-testid="contact-submit"]').click();
      cy.get('[data-testid="error-message"]').should('be.visible');
      cy.get('[data-testid="error-message"]').should('contain.text', 'required');

      // Fill form with invalid data
      cy.get('[data-testid="contact-name"]').type('J');
      cy.get('[data-testid="contact-email"]').type('invalid-email');
      cy.get('[data-testid="contact-submit"]').click();

      cy.get('[data-testid="email-error"]').should('be.visible');
      cy.get('[data-testid="name-error"]').should('be.visible');

      // Correct the errors
      cy.get('[data-testid="contact-name"]').clear().type('John Doe');
      cy.get('[data-testid="contact-email"]').clear().type('john.doe@example.com');
      cy.get('[data-testid="contact-phone"]').type('+974 1234 5678');
      cy.get('[data-testid="inquiry-type"]').select('General Inquiry');
      cy.get('[data-testid="contact-message"]').type('This is a test message for the contact form.');

      // Submit valid form
      cy.get('[data-testid="contact-submit"]').click();
      cy.get('[data-testid="success-message"]').should('be.visible');
      cy.get('[data-testid="success-message"]').should('contain.text', 'Thank you');

      // Form should be reset
      cy.get('[data-testid="contact-name"]').should('have.value', '');
      cy.get('[data-testid="contact-email"]').should('have.value', '');
    });
  });

  describe('Media Gallery Integration Workflow', () => {
    it('should provide seamless media browsing experience', () => {
      cy.visit('/events');
      cy.waitForPageLoad();

      // Switch to gallery view
      cy.get('[data-testid="tab-gallery"]').click();
      cy.get('[data-testid="image-gallery"]').should('be.visible');

      // Filter by year
      cy.get('[data-testid="year-filter"]').select('2023');
      cy.get('[data-testid="gallery-image"]').should('be.visible');

      // Open image modal
      cy.get('[data-testid="gallery-image"]').first().click();
      cy.get('[data-testid="image-modal"]').should('be.visible');

      // Navigate through images
      cy.get('[data-testid="modal-next"]').click();
      cy.get('[data-testid="image-counter"]').should('contain.text', '2');

      cy.get('[data-testid="modal-previous"]').click();
      cy.get('[data-testid="image-counter"]').should('contain.text', '1');

      // Close modal and switch to video gallery
      cy.get('[data-testid="modal-close"]').click();
      cy.get('[data-testid="nav-video-gallery"]').click();

      // Browse videos
      cy.get('[data-testid="video-item"]').should('be.visible');
      cy.get('[data-testid="video-item"]').first().click();
      cy.get('[data-testid="video-modal"]').should('be.visible');

      // Control video playback
      cy.get('[data-testid="play-button"]').click();
      cy.get('[data-testid="video-player"]').should('have.attr', 'playing', 'true');

      cy.get('[data-testid="pause-button"]').click();
      cy.get('[data-testid="video-player"]').should('have.attr', 'paused', 'true');

      cy.get('[data-testid="modal-close"]').click();
    });
  });

  describe('Responsive Workflow Integration', () => {
    it('should provide consistent experience across devices', () => {
      // Desktop workflow
      cy.viewport(1280, 720);
      cy.visit('/');
      cy.waitForPageLoad();

      cy.get('[data-testid="desktop-nav"]').should('be.visible');
      cy.get('[data-testid="nav-events"]').click();
      cy.get('[data-testid="events-grid"]').should('have.css', 'grid-template-columns');

      // Tablet workflow
      cy.viewport('ipad-2');
      cy.reload();
      cy.get('[data-testid="tablet-nav"]').should('be.visible');
      cy.get('[data-testid="events-grid"]').should('be.visible');

      // Mobile workflow
      cy.viewport('iphone-6');
      cy.reload();
      cy.get('[data-testid="mobile-menu-toggle"]').should('be.visible');
      cy.get('[data-testid="mobile-menu-toggle"]').click();
      cy.get('[data-testid="mobile-menu"]').should('be.visible');

      cy.get('[data-testid="mobile-nav-events"]').click();
      cy.get('[data-testid="events-grid"]').should('be.visible');

      // Touch interactions
      cy.get('[data-testid="event-card"]').first().click();
      cy.get('[data-testid="event-modal"]').should('be.visible');

      // Swipe gesture simulation
      cy.get('[data-testid="event-modal"]')
        .trigger('touchstart', { touches: [{ clientX: 100, clientY: 100 }] })
        .trigger('touchmove', { touches: [{ clientX: 200, clientY: 100 }] })
        .trigger('touchend');

      cy.get('[data-testid="event-modal"]').should('not.be.visible');
    });
  });

  describe('Error Handling and Recovery Workflow', () => {
    it('should handle errors gracefully and provide recovery options', () => {
      // Test 404 error handling
      cy.visit('/non-existent-page', { failOnStatusCode: false });
      cy.get('[data-testid="error-404"]').should('be.visible');
      cy.get('[data-testid="home-link"]').click();
      cy.url().should('equal', Cypress.config().baseUrl + '/');

      // Test network error simulation
      cy.intercept('GET', '/api/events', { forceNetworkError: true }).as('networkError');
      cy.visit('/events');
      cy.wait('@networkError');

      cy.get('[data-testid="error-message"]').should('be.visible');
      cy.get('[data-testid="retry-button"]').should('be.visible');

      // Test retry functionality
      cy.intercept('GET', '/api/events', { fixture: 'events.json' }).as('eventsRetry');
      cy.get('[data-testid="retry-button"]').click();
      cy.wait('@eventsRetry');

      cy.get('[data-testid="events-grid"]').should('be.visible');
      cy.get('[data-testid="error-message"]').should('not.exist');
    });
  });

  describe('Performance Integration Workflow', () => {
    it('should maintain performance during complex interactions', () => {
      cy.visit('/');
      cy.waitForPageLoad();

      const start = Date.now();

      // Perform multiple navigation actions
      cy.get('[data-testid="nav-events"]').click();
      cy.get('[data-testid="year-filter"]').select('2023');
      cy.get('[data-testid="tab-gallery"]').click();
      cy.get('[data-testid="gallery-image"]').first().click();
      cy.get('[data-testid="modal-close"]').click();

      cy.get('[data-testid="nav-news"]').click();
      cy.get('[data-testid="category-filter"]').select('Academic');
      cy.get('[data-testid="news-article"]').first().click();
      cy.go('back');

      cy.get('[data-testid="nav-contact"]').click();

      cy.then(() => {
        const totalTime = Date.now() - start;
        expect(totalTime).to.be.lessThan(10000); // 10 seconds for complex workflow
      });

      // Check memory usage
      cy.window().then((win) => {
        const memoryInfo = win.performance.memory;
        if (memoryInfo) {
          expect(memoryInfo.usedJSHeapSize).to.be.lessThan(50000000); // 50MB
        }
      });
    });
  });
});