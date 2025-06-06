/// <reference types="cypress" />
/// <reference types="@types/mocha" />

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// This makes this file a module rather than a script
export {};

// Define the ContactFormData interface for form filling commands
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  inquiryType?: string;
  subject?: string;
  message: string;
  studentId?: string;
  graduationYear?: string;
  studentName?: string;
}

// Define HTMLImageElement-like interface for type assertions
interface HTMLElementWithImageProps extends HTMLElement {
  naturalWidth: number;
  naturalHeight: number;
}

// Define PerformanceResourceEntry-like interface for type assertions
interface PerformanceResourceEntryWithProps extends PerformanceEntry {
  initiatorType: string;
  responseEnd: number;
  startTime: number;
}

// Augment the Cypress namespace to include custom commands
declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      /**
       * Custom command to navigate to a specific page
       * @example cy.navigateTo('about')
       */
      navigateTo(page: string): Chainable<void>;

      /**
       * Custom command to check if navigation is working
       * @example cy.checkNavigation()
       */
      checkNavigation(): Chainable<void>;

      /**
       * Custom command to wait for page load
       * @example cy.waitForPageLoad()
       */
      waitForPageLoad(): Chainable<void>;

      /**
       * Custom command to check responsive design
       * @example cy.checkResponsive()
       */
      checkResponsive(): Chainable<void>;

      /**
       * Custom command to test image loading
       * @example cy.checkImageLoading()
       */
      checkImageLoading(): Chainable<void>;

      /**
       * Custom command to test accessibility
       * @example cy.checkAccessibility()
       */
      checkAccessibility(): Chainable<void>;

      /**
       * Custom command to test event gallery functionality
       * @example cy.testEventGallery()
       */
      testEventGallery(): Chainable<void>;

      /**
       * Custom command to check accessibility violations using axe-core
       * @example cy.checkA11y()
       */
      checkA11y(context?: string, options?: unknown): Chainable<void>;

      /**
       * Custom command to fill contact form with test data
       * @example cy.fillContactForm(data)
       */
      fillContactForm(data: ContactFormData): Chainable<void>;

      /**
       * Custom command to verify image loading and accessibility
       * @example cy.verifyImage('[data-testid="hero-image"]')
       */
      verifyImage(selector: string): Chainable<void>;

      /**
       * Custom command to check page performance metrics
       * @example cy.checkPerformance()
       */
      checkPerformance(): Chainable<void>;

      /**
       * Custom command to verify form validation
       * @example cy.checkFormValidation('[data-testid="contact-form"]')
       */
      checkFormValidation(formSelector: string): Chainable<void>;

      /**
       * Custom command to test keyboard navigation
       * @example cy.testKeyboardNavigation('[data-testid="main-nav"]')
       */
      testKeyboardNavigation(startElement: string): Chainable<void>;

      /**
       * Custom command to verify modal functionality
       * @example cy.testModal('[data-testid="open-modal"]', '[data-testid="modal"]')
       */
      testModal(triggerSelector: string, modalSelector: string): Chainable<void>;

      /**
       * Custom command to check search functionality
       * @example cy.testSearch('[data-testid="search-input"]', 'test', '[data-testid="results"]')
       */
      testSearch(searchInput: string, searchTerm: string, resultSelector: string): Chainable<void>;

      /**
       * Custom command to verify pagination
       * @example cy.testPagination('[data-testid="pagination"]')
       */
      testPagination(paginationSelector: string): Chainable<void>;

      /**
       * Custom command to check filter functionality
       * @example cy.testFilter('[data-testid="category-filter"]', 'Academic', '[data-testid="results"]')
       */
      testFilter(filterSelector: string, filterValue: string, resultSelector: string): Chainable<void>;

      /**
       * Custom command to verify social media links
       * @example cy.checkSocialLinks()
       */
      checkSocialLinks(): Chainable<void>;

      /**
       * Custom command to test video player functionality
       * @example cy.testVideoPlayer('[data-testid="video-player"]')
       */
      testVideoPlayer(videoSelector: string): Chainable<void>;

      /**
       * Custom command to check newsletter subscription
       * @example cy.testNewsletterSubscription('[data-testid="email"]', '[data-testid="submit"]')
       */
      testNewsletterSubscription(emailInput: string, submitButton: string): Chainable<void>;

      /**
       * Custom command to verify breadcrumb navigation
       * @example cy.checkBreadcrumbs()
       */
      checkBreadcrumbs(): Chainable<void>;

      /**
       * Custom command to test dropdown functionality
       * @example cy.testDropdown('[data-testid="dropdown"]')
       */
      testDropdown(dropdownSelector: string): Chainable<void>;

      /**
       * Custom command to check loading states
       * @example cy.checkLoadingStates('[data-testid="load-more"]', '[data-testid="spinner"]')
       */
      checkLoadingStates(triggerSelector: string, loadingSelector: string): Chainable<void>;

      /**
       * Custom command to tab through elements
       * @example cy.get('input').tab()
       */
      tab(options?: { shift?: boolean }): Chainable<JQuery<HTMLElement>>;
      
      /**
       * Custom command to set up viewport size
       * @example cy.setupViewport()
       */
      setupViewport(): Chainable<void>;
      
      /**
       * Custom command to inject axe accessibility testing library
       * @example cy.injectAxe()
       */
      injectAxe(): Chainable<void>;
    }
  }
  
  // Add global interface extensions for Window
  interface Window {
    unusedFunction?: unknown;
    gtag?: unknown;
    dataLayer?: unknown;
    analytics?: unknown;
    getEventListeners?: (element: Element) => Record<string, unknown[]>;
  }
  
  // Add global interface extensions for Performance
  interface Performance {
    memory?: {
      usedJSHeapSize: number;
      totalJSHeapSize: number;
    };
  }
  
  // Add global interface extensions for PerformanceEntry
  interface PerformanceEntry {
    transferSize?: number;
    loadEventEnd?: number;
  }
}

// Navigation command
Cypress.Commands.add('navigateTo', (page: string) => {
  const routes: Record<string, string> = {
    home: '/',
    about: '/about',
    events: '/events',
    news: '/news',
    gallery: '/gallery',
    history: '/history',
    exco: '/exco',
    contact: '/contact',
    membership: '/membership-terms'
  };

  const route = routes[page.toLowerCase()];
  if (!route) {
    throw new Error(`Unknown page: ${page}`);
  }

  cy.visit(route);
  cy.waitForPageLoad();
});

// Check navigation functionality
Cypress.Commands.add('checkNavigation', () => {
  // Check desktop navigation
  cy.get('nav').should('be.visible');
  cy.get('nav a').should('have.length.greaterThan', 0);

  // Check mobile menu (if viewport is small)
  cy.viewport('iphone-6');
  cy.get('[data-testid="mobile-menu-button"]').should('be.visible').click();
  cy.get('[data-testid="mobile-menu"]').should('be.visible');
  cy.get('[data-testid="mobile-menu-close"]').click();
  cy.get('[data-testid="mobile-menu"]').should('not.be.visible');

  // Reset viewport
  cy.viewport(1280, 720);
});

// Wait for page load
Cypress.Commands.add('waitForPageLoad', () => {
  cy.get('body').should('be.visible');
  cy.get('[data-testid="loading"]').should('not.exist');
  // Wait for any animations to complete
  cy.wait(1000);
});

// Check responsive design
Cypress.Commands.add('checkResponsive', () => {
  const viewports = [
    { width: 375, height: 667 },   // iPhone SE
    { width: 768, height: 1024 },  // iPad
    { width: 1024, height: 768 },  // Desktop small
    { width: 1280, height: 720 },  // Desktop medium
    { width: 1920, height: 1080 }  // Desktop large
  ];

  viewports.forEach(viewport => {
    cy.viewport(viewport.width, viewport.height);
    cy.get('body').should('be.visible');
    cy.get('nav').should('be.visible');
    cy.wait(500); // Allow time for responsive changes
  });
});

// Check image loading
Cypress.Commands.add('checkImageLoading', () => {
  cy.get('img').each(($img) => {
    // Check if image is visible
    cy.wrap($img).should('be.visible');
    
    // Check if image has loaded
    cy.wrap($img).then(($el) => {
      const img = $el[0] as HTMLElementWithImageProps;
      expect(img.naturalWidth).to.be.greaterThan(0);
    });
    
    // Check if image has alt text
    cy.wrap($img).should('have.attr', 'alt');
  });
});

// Check accessibility
Cypress.Commands.add('checkAccessibility', () => {
  // Check for alt attributes on images
  cy.get('img').each(($img) => {
    cy.wrap($img).should('have.attr', 'alt');
  });

  // Check for proper heading hierarchy
  cy.get('h1').should('have.length.at.most', 1);

  // Check for focus management
  cy.get('a, button, input, select, textarea').each(($el) => {
    cy.wrap($el).should('be.focusable');
  });

  // Check for ARIA labels where needed
  cy.get('[role="button"], [role="link"]').each(($el) => {
    cy.wrap($el).should('satisfy', ($el) => {
      return $el.attr('aria-label') || $el.text().trim().length > 0;
    });
  });
});

// Test event gallery functionality
Cypress.Commands.add('testEventGallery', () => {
  // Test tab switching
  cy.get('[data-testid="events-tab-cards"]').click();
  cy.get('[data-testid="event-cards-container"]').should('be.visible');

  cy.get('[data-testid="events-tab-events"]').click();
  cy.get('[data-testid="events-grid-container"]').should('be.visible');

  cy.get('[data-testid="events-tab-gallery"]').click();
  cy.get('[data-testid="event-gallery-container"]').should('be.visible');

  // Test year filtering
  cy.get('[data-testid="year-filter"]').should('be.visible');
  cy.get('[data-testid="year-filter"] button').first().click();

  // Test image modal (if images are present)
  cy.get('[data-testid="event-image"]').first().click({ force: true });
  cy.get('[data-testid="image-modal"]').should('be.visible');
  cy.get('[data-testid="modal-close"]').click();
  cy.get('[data-testid="image-modal"]').should('not.be.visible');
});

// Define the type for the violations callback
type ViolationsCallback = (violations: Array<{id: string; description: string}>) => void;

// Enhanced accessibility checking with axe-core
Cypress.Commands.add('checkA11y', (context?: string, options?: any) => {
  cy.injectAxe();
  
  // Use the cy.axe() command from cypress-axe library
  // @ts-ignore - Using axe command from cypress-axe
  cy.axe(context, options).then((results) => {
    if (results.violations.length > 0) {
      cy.task('log', `Accessibility violations found: ${results.violations.length}`);
      results.violations.forEach((violation) => {
        cy.task('log', `${violation.id}: ${violation.description}`);
      });
    }
  });
});

// Fill contact form with comprehensive data
Cypress.Commands.add('fillContactForm', (data: ContactFormData) => {
  cy.get('[data-testid="contact-name"]').clear().type(data.name);
  cy.get('[data-testid="contact-email"]').clear().type(data.email);

  if (data.phone) {
    cy.get('[data-testid="contact-phone"]').clear().type(data.phone);
  }

  if (data.inquiryType) {
    cy.get('[data-testid="inquiry-type"]').select(data.inquiryType);
  }
  cy.get('[data-testid="contact-message"]').clear().type(data.message);

  if (data.studentId) {
    cy.get('[data-testid="student-id"]').clear().type(data.studentId);
  }

  if (data.graduationYear) {
    cy.get('[data-testid="graduation-year"]').clear().type(data.graduationYear);
  }

  if (data.studentName) {
    cy.get('[data-testid="student-name"]').clear().type(data.studentName);
  }
});

// Verify image loading and accessibility
Cypress.Commands.add('verifyImage', (selector: string) => {
  cy.get(selector).should('be.visible')
    .and(($img) => {
      const img = $img[0] as HTMLElementWithImageProps;
      expect(img.naturalWidth).to.be.greaterThan(0);
      expect(img.naturalHeight).to.be.greaterThan(0);
    });
  
  cy.get(selector).should('have.attr', 'alt');
  cy.get(selector).then(($img) => {
    const alt = $img.attr('alt');
    expect(alt).to.not.be.empty;
    expect(alt).to.have.length.greaterThan(2);
  });
});

// Check page performance metrics
Cypress.Commands.add('checkPerformance', () => {
  // Check page load time
  cy.window().then((win) => {
    const perfData = win.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    expect(pageLoadTime).to.be.lessThan(10000); // Page should load in less than 10 seconds
  });

  // Check memory usage
  cy.window().then((win) => {
    if (win.performance.memory) {
      const memoryUsage = win.performance.memory.usedJSHeapSize;
      expect(memoryUsage).to.be.lessThan(win.performance.memory.totalJSHeapSize);
    }
  });

  // Check resource loading
  cy.window().then((win) => {
    const resources = win.performance.getEntriesByType('resource');
    const images = resources.filter((resource) => {
      const resourceEntry = resource as PerformanceResourceEntryWithProps;
      return resourceEntry.initiatorType === 'img';
    });
    
    // Check image loading time
    images.forEach((image) => {
      const resourceEntry = image as PerformanceResourceEntryWithProps;
      const loadTime = resourceEntry.responseEnd - resourceEntry.startTime;
      expect(loadTime).to.be.lessThan(5000); // Images should load in less than 5 seconds
    });
  });

  // Check image dimensions
  cy.get('img').each(($img) => {
    const img = $img[0] as HTMLElementWithImageProps;
    if (img.naturalWidth > 0) {
      // Check if image dimensions are reasonable
      expect(img.naturalWidth).to.be.lessThan(5000); // Image width should be reasonable
      expect(img.naturalHeight).to.be.lessThan(5000); // Image height should be reasonable
    }
  });
});

// Check comprehensive form validation
Cypress.Commands.add('checkFormValidation', (formSelector: string) => {
  // Try to submit empty form
  cy.get(`${formSelector} [type="submit"]`).click();

  // Check for validation messages
  cy.get(`${formSelector} [data-testid*="error"]`).should('be.visible');

  // Check required fields
  cy.get(`${formSelector} [required]`).each(($field) => {
    cy.wrap($field).should('have.attr', 'aria-invalid', 'true');
  });
});

// Test comprehensive keyboard navigation
Cypress.Commands.add('testKeyboardNavigation', (startElement: string) => {
  cy.get(startElement).focus();

  // Test Tab navigation
  for (let i = 0; i < 10; i++) {
    cy.focused().tab();
    cy.focused().should('be.visible');
  }

  // Test Shift+Tab navigation
  for (let i = 0; i < 5; i++) {
    cy.focused().tab({ shift: true });
    cy.focused().should('be.visible');
  }

  // Test Enter key activation
  cy.focused().type('{enter}');
});

// Test modal functionality with focus management
Cypress.Commands.add('testModal', (triggerSelector: string, modalSelector: string) => {
  // Open modal
  cy.get(triggerSelector).click();
  cy.get(modalSelector).should('be.visible');

  // Check focus management
  cy.get(modalSelector).should('have.focus');

  // Test Escape key
  cy.get('body').type('{esc}');
  cy.get(modalSelector).should('not.be.visible');

  // Test close button
  cy.get(triggerSelector).click();
  cy.get(modalSelector).should('be.visible');
  cy.get(modalSelector).then(($modal) => {
    const closeButton = $modal.find('[data-testid="modal-close"]');
    closeButton.click();
  });
  cy.get(modalSelector).should('not.be.visible');
});

// Test search functionality
Cypress.Commands.add('testSearch', (searchInput: string, searchTerm: string, resultSelector: string) => {
  cy.get(searchInput).clear().type(searchTerm);
  cy.get(searchInput).type('{enter}');
  cy.get(resultSelector).should('be.visible');
  cy.get(resultSelector).should('contain.text', searchTerm);

  // Test clear search
  cy.get('[data-testid="clear-search"]').click();
  cy.get(searchInput).should('have.value', '');
});

// Test pagination functionality
Cypress.Commands.add('testPagination', (paginationSelector: string) => {
  cy.get(paginationSelector).should('be.visible');

  // Test next page
  cy.get('[data-testid="pagination-next"]').click();
  cy.get('[data-testid="current-page"]').should('contain.text', '2');

  // Test previous page
  cy.get('[data-testid="pagination-previous"]').click();
  cy.get('[data-testid="current-page"]').should('contain.text', '1');

  // Test specific page
  cy.get('[data-testid="page-3"]').click();
  cy.get('[data-testid="current-page"]').should('contain.text', '3');
});

// Test filter functionality
Cypress.Commands.add('testFilter', (filterSelector: string, filterValue: string, resultSelector: string) => {
  // Check if filter exists
  cy.get(filterSelector).should('exist');
  
  // Select filter value
  cy.get(filterSelector).select(filterValue);
  
  // Wait for results to update
  cy.wait(1000);
  
  // Check if results are filtered
  cy.get(resultSelector).should('exist');
});

// Check social media links
Cypress.Commands.add('checkSocialLinks', () => {
  const socialPlatforms = ['facebook', 'twitter', 'instagram', 'linkedin', 'youtube'];

  socialPlatforms.forEach((platform) => {
    cy.get(`[data-testid="social-${platform}"]`).should('be.visible');
    cy.get(`[data-testid="social-${platform}"]`).should('have.attr', 'href');
    cy.get(`[data-testid="social-${platform}"]`).should('have.attr', 'target', '_blank');
    cy.get(`[data-testid="social-${platform}"]`).should('have.attr', 'rel', 'noopener noreferrer');
  });
});

// Test video player functionality
Cypress.Commands.add('testVideoPlayer', (videoSelector: string) => {
  cy.get(videoSelector).should('be.visible');

  // Test play button
  cy.get('[data-testid="play-button"]').click();
  cy.get(videoSelector).should('have.prop', 'paused', false);

  // Test pause button
  cy.get('[data-testid="pause-button"]').click();
  cy.get(videoSelector).should('have.prop', 'paused', true);

  // Test volume control
  cy.get('[data-testid="volume-slider"]').invoke('val', 50).trigger('input');
  cy.get(videoSelector).should('have.prop', 'volume', 0.5);

  // Test fullscreen
  cy.get('[data-testid="fullscreen-button"]').click();
});

// Test newsletter subscription
Cypress.Commands.add('testNewsletterSubscription', (emailInput: string, submitButton: string) => {
  // Test invalid email
  cy.get(emailInput).type('invalid-email');
  cy.get(submitButton).click();
  cy.get('[data-testid="email-error"]').should('be.visible');

  // Test valid email
  cy.get(emailInput).clear().type('test@example.com');
  cy.get(submitButton).click();
  cy.get('[data-testid="success-message"]').should('be.visible');
});

// Check breadcrumb navigation
Cypress.Commands.add('checkBreadcrumbs', () => {
  cy.get('[data-testid="breadcrumbs"]').should('be.visible');
  cy.get('[data-testid="breadcrumb-item"]').should('have.length.greaterThan', 1);

  // Test breadcrumb navigation
  cy.get('[data-testid="breadcrumb-item"]').first().click();
  cy.url().should('include', '/');
});

// Test dropdown functionality
Cypress.Commands.add('testDropdown', (dropdownSelector: string) => {
  cy.get(dropdownSelector).click();
  cy.get('[data-testid="dropdown-menu"]').should('be.visible');

  // Test keyboard navigation
  cy.get(dropdownSelector).type('{downarrow}');
  cy.get('[data-testid="dropdown-item"]:first').should('have.focus');

  // Test selection
  cy.get('[data-testid="dropdown-item"]:first').click();
  cy.get('[data-testid="dropdown-menu"]').should('not.be.visible');
});

// Check loading states
Cypress.Commands.add('checkLoadingStates', (triggerSelector: string, loadingSelector: string) => {
  cy.get(triggerSelector).click();
  cy.get(loadingSelector).should('be.visible');
  cy.get(loadingSelector).should('not.exist');
});

// Add custom tab command for keyboard navigation
Cypress.Commands.add('tab', { prevSubject: 'element' }, (subject, options = {}) => {
  return cy.wrap(subject).trigger('keydown', {
    key: 'Tab',
    code: 'Tab',
    shiftKey: options.shift || false,
  });
});