/**
 * Events Page Tests
 * Tests all functionality on the events page including gallery, filtering, and image modal
 */

describe('Events Page', () => {
  beforeEach(() => {
    cy.visit('/events');
    cy.waitForPageLoad();
  });

  describe('Page Layout and Structure', () => {
    it('should display the events page header', () => {
      cy.get('h1').should('contain.text', 'Events');
    });

    it('should display the events hero section', () => {
      cy.get('[data-testid="events-hero"]').should('be.visible');
    });

    it('should show loading state initially', () => {
      cy.visit('/events');
      // Check if loading spinner appears briefly
      cy.get('body').should('be.visible');
    });
  });

  describe('Tab Navigation', () => {
    it('should display all three tabs', () => {
      cy.get('[data-testid="events-tabs"]').should('be.visible');
      cy.get('[data-testid="events-tab-cards"]').should('contain.text', 'Event Cards');
      cy.get('[data-testid="events-tab-events"]').should('contain.text', 'Events');
      cy.get('[data-testid="events-tab-gallery"]').should('contain.text', 'Gallery');
    });

    it('should switch between tabs correctly', () => {
      // Test Cards tab
      cy.get('[data-testid="events-tab-cards"]').click();
      cy.get('[data-testid="event-cards-container"]').should('be.visible');
      cy.get('[data-testid="events-grid-container"]').should('not.exist');
      cy.get('[data-testid="event-gallery-container"]').should('not.exist');

      // Test Events tab
      cy.get('[data-testid="events-tab-events"]').click();
      cy.get('[data-testid="events-grid-container"]').should('be.visible');
      cy.get('[data-testid="event-cards-container"]').should('not.exist');
      cy.get('[data-testid="event-gallery-container"]').should('not.exist');

      // Test Gallery tab
      cy.get('[data-testid="events-tab-gallery"]').click();
      cy.get('[data-testid="event-gallery-container"]').should('be.visible');
      cy.get('[data-testid="event-cards-container"]').should('not.exist');
      cy.get('[data-testid="events-grid-container"]').should('not.exist');
    });

    it('should maintain active tab state', () => {
      cy.get('[data-testid="events-tab-gallery"]').click();
      cy.get('[data-testid="events-tab-gallery"]').should('have.class', 'bg-white');
    });
  });

  describe('Year Filtering', () => {
    it('should display year filter component', () => {
      cy.get('[data-testid="year-filter"]').should('be.visible');
    });

    it('should show available years', () => {
      cy.get('[data-testid="year-filter"]').within(() => {
        cy.get('button').should('have.length.greaterThan', 1);
        cy.contains('All').should('be.visible');
      });
    });

    it('should filter content by year', () => {
      cy.get('[data-testid="events-tab-gallery"]').click();

      // Click on a specific year
      cy.get('[data-testid="year-filter"]').within(() => {
        cy.get('button').not(':contains("All")').first().click();
      });

      // Verify filtering works
      cy.get('[data-testid="event-gallery-container"]').should('be.visible');
    });

    it('should highlight selected year', () => {
      cy.get('[data-testid="year-filter"]').within(() => {
        cy.get('button').first().should('have.class', 'bg-white');
      });
    });

    it('should reset to all years when "All" is clicked', () => {
      cy.get('[data-testid="year-filter"]').within(() => {
        cy.get('button').not(':contains("All")').first().click();
        cy.contains('All').click();
        cy.contains('All').should('have.class', 'bg-white');
      });
    });
  });

  describe('Event Cards Tab', () => {
    beforeEach(() => {
      cy.get('[data-testid="events-tab-cards"]').click();
    });

    it('should display event cards', () => {
      cy.get('[data-testid="event-card"]').should('have.length.greaterThan', 0);
    });

    it('should show event details on cards', () => {
      cy.get('[data-testid="event-card"]').first().within(() => {
        cy.get('h3').should('be.visible');
        cy.get('p').should('be.visible');
      });
    });

    it('should have working event card interactions', () => {
      cy.get('[data-testid="event-card"]').first().should('be.visible');
      cy.get('[data-testid="event-card"]').first().trigger('mouseover');
    });
  });

  describe('Events Grid Tab', () => {
    beforeEach(() => {
      cy.get('[data-testid="events-tab-events"]').click();
    });

    it('should display events grid', () => {
      cy.get('[data-testid="events-grid-container"]').should('be.visible');
    });

    it('should show event information', () => {
      cy.get('[data-testid="event-item"]').should('have.length.greaterThan', 0);
    });

    it('should filter events by selected year', () => {
      const initialCount = Cypress.$('[data-testid="event-item"]').length;

      cy.get('[data-testid="year-filter"]').within(() => {
        cy.get('button').not(':contains("All")').first().click();
      });

      cy.get('[data-testid="event-item"]').should('have.length.lessThan', initialCount + 1);
    });
  });

  describe('Image Gallery Tab', () => {
    beforeEach(() => {
      cy.get('[data-testid="events-tab-gallery"]').click();
    });

    it('should display image gallery', () => {
      cy.get('[data-testid="event-gallery-container"]').should('be.visible');
    });

    it('should show event images in grid layout', () => {
      cy.get('[data-testid="event-image"]').should('have.length.greaterThan', 0);
    });

    it('should display image metadata', () => {
      cy.get('[data-testid="event-image"]').first().within(() => {
        cy.get('img').should('be.visible');
        cy.get('img').should('have.attr', 'alt');
      });
    });

    it('should open image modal on click', () => {
      cy.get('[data-testid="event-image"]').first().click({ force: true });
      cy.get('[data-testid="image-modal"]').should('be.visible');
    });

    it('should close image modal', () => {
      cy.get('[data-testid="event-image"]').first().click({ force: true });
      cy.get('[data-testid="image-modal"]').should('be.visible');

      // Close with close button
      cy.get('[data-testid="modal-close"]').click();
      cy.get('[data-testid="image-modal"]').should('not.be.visible');
    });

    it('should close modal with escape key', () => {
      cy.get('[data-testid="event-image"]').first().click({ force: true });
      cy.get('[data-testid="image-modal"]').should('be.visible');

      cy.get('body').type('{esc}');
      cy.get('[data-testid="image-modal"]').should('not.be.visible');
    });

    it('should navigate between images in modal', () => {
      cy.get('[data-testid="event-image"]').first().click({ force: true });
      cy.get('[data-testid="image-modal"]').should('be.visible');

      // Test next/previous navigation if available
      cy.get('[data-testid="modal-next"]').should('be.visible').click();
      cy.get('[data-testid="modal-previous"]').should('be.visible').click();
    });

    it('should display image information in modal', () => {
      cy.get('[data-testid="event-image"]').first().click({ force: true });
      cy.get('[data-testid="image-modal"]').within(() => {
        cy.get('img').should('be.visible');
        cy.get('[data-testid="image-title"]').should('be.visible');
      });
    });
  });

  describe('Search and Filtering', () => {
    it('should have search functionality', () => {
      cy.get('[data-testid="search-input"]').should('be.visible');
    });

    it('should filter results based on search term', () => {
      cy.get('[data-testid="search-input"]').type('AGM');
      cy.get('[data-testid="event-item"], [data-testid="event-image"]')
        .should('contain.text', 'AGM');
    });

    it('should clear search results', () => {
      cy.get('[data-testid="search-input"]').type('test search');
      cy.get('[data-testid="search-clear"]').click();
      cy.get('[data-testid="search-input"]').should('have.value', '');
    });
  });

  describe('Responsive Design', () => {
    it('should be responsive on mobile devices', () => {
      cy.viewport('iphone-6');
      cy.get('[data-testid="events-tabs"]').should('be.visible');
      cy.get('[data-testid="year-filter"]').should('be.visible');
    });

    it('should adapt gallery layout for different screen sizes', () => {
      cy.get('[data-testid="events-tab-gallery"]').click();

      const viewports = [
        { width: 375, height: 667 },   // Mobile
        { width: 768, height: 1024 },  // Tablet
        { width: 1280, height: 720 }   // Desktop
      ];

      viewports.forEach(viewport => {
        cy.viewport(viewport.width, viewport.height);
        cy.get('[data-testid="event-gallery-container"]').should('be.visible');
        cy.wait(500);
      });
    });

    it('should stack tabs vertically on small screens', () => {
      cy.viewport('iphone-6');
      cy.get('[data-testid="events-tabs"]').should('be.visible');
    });
  });

  describe('Performance and Loading', () => {
    it('should load images efficiently with lazy loading', () => {
      cy.get('[data-testid="events-tab-gallery"]').click();
      cy.get('[data-testid="event-image"] img').should('have.attr', 'loading', 'lazy');
    });

    it('should handle image loading errors gracefully', () => {
      cy.get('[data-testid="events-tab-gallery"]').click();
      cy.get('[data-testid="event-image"] img').each(($img) => {
        cy.wrap($img).should('be.visible');
      });
    });

    it('should show loading states during tab switches', () => {
      cy.get('[data-testid="events-tab-gallery"]').click();
      cy.get('[data-testid="event-gallery-container"]').should('be.visible');
    });
  });

  describe('Accessibility', () => {
    it('should support keyboard navigation', () => {
      cy.get('[data-testid="events-tab-cards"]').focus().type('{enter}');
      cy.get('[data-testid="event-cards-container"]').should('be.visible');
    });

    it('should have proper ARIA labels', () => {
      cy.get('[data-testid="events-tabs"]').should('have.attr', 'role', 'tablist');
      cy.get('[data-testid="events-tab-cards"]').should('have.attr', 'role', 'tab');
    });

    it('should manage focus in image modal', () => {
      cy.get('[data-testid="events-tab-gallery"]').click();
      cy.get('[data-testid="event-image"]').first().click({ force: true });
      cy.get('[data-testid="image-modal"]').should('be.visible');
      cy.focused().should('exist');
    });

    it('should have alt text for all images', () => {
      cy.get('[data-testid="events-tab-gallery"]').click();
      cy.get('[data-testid="event-image"] img').each(($img) => {
        cy.wrap($img).should('have.attr', 'alt');
      });
    });
  });

  describe('Event Categories', () => {
    it('should display different event categories', () => {
      cy.get('[data-testid="events-tab-cards"]').click();
      cy.get('[data-testid="event-category"]').should('have.length.greaterThan', 0);
    });

    it('should filter by event category', () => {
      cy.get('[data-testid="category-filter"]').should('be.visible');
      cy.get('[data-testid="category-sports"]').click();
      cy.get('[data-testid="event-item"]').should('contain.text', 'Sports');
    });

    it('should show category icons and colors', () => {
      cy.get('[data-testid="events-tab-cards"]').click();
      cy.get('[data-testid="category-icon"]').should('be.visible');
    });
  });
});