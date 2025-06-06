/**
 * College History Tests
 * Tests all functionality on the college history page including timeline and historical content
 */

describe('College History Page', () => {
  beforeEach(() => {
    cy.visit('/college-history');
    cy.waitForPageLoad();
  });

  describe('Page Layout and Structure', () => {
    it('should display the college history page header', () => {
      cy.get('h1').should('contain.text', 'College History');
    });

    it('should load page content successfully', () => {
      cy.get('main').should('be.visible');
      cy.get('body').should('not.contain', 'Loading...');
    });

    it('should have proper page title', () => {
      cy.title().should('contain', 'College History');
    });

    it('should display history hero section', () => {
      cy.get('[data-testid="history-hero"]').should('be.visible');
    });
  });

  describe('Historical Timeline', () => {
    it('should display the main timeline', () => {
      cy.get('[data-testid="history-timeline"]').should('be.visible');
    });

    it('should show timeline events in chronological order', () => {
      cy.get('[data-testid="timeline-event"]').should('have.length.greaterThan', 0);
      cy.get('[data-testid="timeline-event"]').first().within(() => {
        cy.get('[data-testid="event-year"]').should('be.visible');
        cy.get('[data-testid="event-title"]').should('be.visible');
        cy.get('[data-testid="event-description"]').should('be.visible');
      });
    });

    it('should display founding year prominently', () => {
      cy.get('[data-testid="founding-year"]').should('be.visible');
      cy.get('[data-testid="founding-year"]').should('contain.text', '1930');
    });

    it('should show key milestones', () => {
      cy.get('[data-testid="milestone-event"]').should('have.length.greaterThan', 0);
      cy.get('[data-testid="milestone-event"]').each(($milestone) => {
        cy.wrap($milestone).within(() => {
          cy.get('[data-testid="milestone-year"]').should('be.visible');
          cy.get('[data-testid="milestone-title"]').should('be.visible');
        });
      });
    });

    it('should have interactive timeline elements', () => {
      cy.get('[data-testid="timeline-event"]').first().click();
      cy.get('[data-testid="event-details"]').should('be.visible');
    });

    it('should support timeline navigation', () => {
      cy.get('[data-testid="timeline-navigation"]').should('be.visible');
      cy.get('[data-testid="timeline-prev"]').should('be.visible');
      cy.get('[data-testid="timeline-next"]').should('be.visible');
    });
  });

  describe('Founding History Section', () => {
    it('should display founding story', () => {
      cy.get('[data-testid="founding-story"]').should('be.visible');
    });

    it('should show founding fathers information', () => {
      cy.get('[data-testid="founding-fathers"]').should('be.visible');
      cy.get('[data-testid="founder-profile"]').should('have.length.greaterThan', 0);
    });

    it('should display original mission and vision', () => {
      cy.get('[data-testid="original-mission"]').should('be.visible');
      cy.get('[data-testid="original-vision"]').should('be.visible');
    });

    it('should show early challenges and achievements', () => {
      cy.get('[data-testid="early-challenges"]').should('be.visible');
      cy.get('[data-testid="early-achievements"]').should('be.visible');
    });

    it('should display founding location and context', () => {
      cy.get('[data-testid="founding-location"]').should('be.visible');
      cy.get('[data-testid="historical-context"]').should('be.visible');
    });
  });

  describe('Decades Overview', () => {
    it('should display decades navigation', () => {
      cy.get('[data-testid="decades-navigation"]').should('be.visible');
      cy.get('[data-testid="decade-tab"]').should('have.length.greaterThan', 0);
    });

    it('should show 1930s section', () => {
      cy.get('[data-testid="decade-1930s"]').click();
      cy.get('[data-testid="decade-content"]').should('contain.text', '1930');
    });

    it('should display 1940s-1950s developments', () => {
      cy.get('[data-testid="decade-1940s"]').click();
      cy.get('[data-testid="decade-content"]').should('be.visible');
    });

    it('should show modern era developments', () => {
      cy.get('[data-testid="decade-2000s"]').click();
      cy.get('[data-testid="decade-content"]').should('be.visible');
    });

    it('should highlight selected decade', () => {
      cy.get('[data-testid="decade-1960s"]').click();
      cy.get('[data-testid="decade-1960s"]').should('have.class', 'active');
    });
  });

  describe('Historical Images Gallery', () => {
    it('should display historical images', () => {
      cy.get('[data-testid="historical-gallery"]').should('be.visible');
      cy.get('[data-testid="historical-image"]').should('have.length.greaterThan', 0);
    });

    it('should show image captions and dates', () => {
      cy.get('[data-testid="historical-image"]').first().within(() => {
        cy.get('[data-testid="image-caption"]').should('be.visible');
        cy.get('[data-testid="image-date"]').should('be.visible');
      });
    });

    it('should open image modal on click', () => {
      cy.get('[data-testid="historical-image"]').first().click();
      cy.get('[data-testid="image-modal"]').should('be.visible');
    });

    it('should navigate between images in modal', () => {
      cy.get('[data-testid="historical-image"]').first().click();
      cy.get('[data-testid="image-modal"]').within(() => {
        cy.get('[data-testid="modal-next"]').should('be.visible');
        cy.get('[data-testid="modal-previous"]').should('be.visible');
      });
    });

    it('should close image modal', () => {
      cy.get('[data-testid="historical-image"]').first().click();
      cy.get('[data-testid="image-modal"]').should('be.visible');
      cy.get('[data-testid="modal-close"]').click();
      cy.get('[data-testid="image-modal"]').should('not.be.visible');
    });

    it('should filter images by decade', () => {
      cy.get('[data-testid="image-filter"]').select('1950s');
      cy.get('[data-testid="historical-image"]').should('contain.text', '1950');
    });
  });

  describe('Notable Alumni Section', () => {
    it('should display notable alumni', () => {
      cy.get('[data-testid="notable-alumni"]').should('be.visible');
    });

    it('should show alumni profiles', () => {
      cy.get('[data-testid="alumni-profile"]').should('have.length.greaterThan', 0);
      cy.get('[data-testid="alumni-profile"]').first().within(() => {
        cy.get('[data-testid="alumni-name"]').should('be.visible');
        cy.get('[data-testid="alumni-year"]').should('be.visible');
        cy.get('[data-testid="alumni-achievement"]').should('be.visible');
      });
    });

    it('should display alumni by categories', () => {
      cy.get('[data-testid="alumni-categories"]').should('be.visible');
      cy.get('[data-testid="category-politics"]').should('be.visible');
      cy.get('[data-testid="category-business"]').should('be.visible');
      cy.get('[data-testid="category-academia"]').should('be.visible');
    });

    it('should filter alumni by category', () => {
      cy.get('[data-testid="category-politics"]').click();
      cy.get('[data-testid="alumni-profile"]').should('contain.text', 'Politics');
    });

    it('should show alumni achievements timeline', () => {
      cy.get('[data-testid="achievements-timeline"]').should('be.visible');
      cy.get('[data-testid="achievement-item"]').should('have.length.greaterThan', 0);
    });
  });

  describe('School Traditions Section', () => {
    it('should display school traditions', () => {
      cy.get('[data-testid="school-traditions"]').should('be.visible');
    });

    it('should show traditional events', () => {
      cy.get('[data-testid="traditional-event"]').should('have.length.greaterThan', 0);
      cy.get('[data-testid="traditional-event"]').first().within(() => {
        cy.get('[data-testid="tradition-name"]').should('be.visible');
        cy.get('[data-testid="tradition-description"]').should('be.visible');
      });
    });

    it('should display school motto and symbols', () => {
      cy.get('[data-testid="school-motto"]').should('be.visible');
      cy.get('[data-testid="school-symbols"]').should('be.visible');
    });

    it('should show house system information', () => {
      cy.get('[data-testid="house-system"]').should('be.visible');
      cy.get('[data-testid="house-info"]').should('have.length.greaterThan', 0);
    });

    it('should display sports traditions', () => {
      cy.get('[data-testid="sports-traditions"]').should('be.visible');
      cy.get('[data-testid="sports-achievement"]').should('have.length.greaterThan', 0);
    });
  });

  describe('Infrastructure Development', () => {
    it('should display infrastructure timeline', () => {
      cy.get('[data-testid="infrastructure-timeline"]').should('be.visible');
    });

    it('should show building construction history', () => {
      cy.get('[data-testid="building-history"]').should('be.visible');
      cy.get('[data-testid="building-item"]').should('have.length.greaterThan', 0);
    });

    it('should display facility expansions', () => {
      cy.get('[data-testid="facility-expansion"]').should('have.length.greaterThan', 0);
      cy.get('[data-testid="facility-expansion"]').first().within(() => {
        cy.get('[data-testid="expansion-year"]').should('be.visible');
        cy.get('[data-testid="expansion-description"]').should('be.visible');
      });
    });

    it('should show modern developments', () => {
      cy.get('[data-testid="modern-developments"]').should('be.visible');
    });

    it('should display before and after images', () => {
      cy.get('[data-testid="before-after"]').should('be.visible');
      cy.get('[data-testid="before-image"]').should('be.visible');
      cy.get('[data-testid="after-image"]').should('be.visible');
    });
  });

  describe('Academic Evolution', () => {
    it('should display academic history', () => {
      cy.get('[data-testid="academic-evolution"]').should('be.visible');
    });

    it('should show curriculum changes over time', () => {
      cy.get('[data-testid="curriculum-timeline"]').should('be.visible');
      cy.get('[data-testid="curriculum-change"]').should('have.length.greaterThan', 0);
    });

    it('should display examination results history', () => {
      cy.get('[data-testid="exam-results-history"]').should('be.visible');
    });

    it('should show academic achievements', () => {
      cy.get('[data-testid="academic-achievements"]').should('be.visible');
      cy.get('[data-testid="achievement-item"]').should('have.length.greaterThan', 0);
    });

    it('should display teacher evolution', () => {
      cy.get('[data-testid="teacher-evolution"]').should('be.visible');
    });
  });

  describe('Interactive Features', () => {
    it('should have year selector for timeline', () => {
      cy.get('[data-testid="year-selector"]').should('be.visible');
      cy.get('[data-testid="year-option"]').should('have.length.greaterThan', 0);
    });

    it('should jump to specific years', () => {
      cy.get('[data-testid="year-1950"]').click();
      cy.get('[data-testid="timeline-1950"]').should('be.visible');
    });

    it('should have search functionality for historical events', () => {
      cy.get('[data-testid="history-search"]').should('be.visible');
      cy.get('[data-testid="history-search"]').type('founding');
      cy.get('[data-testid="search-results"]').should('contain.text', 'founding');
    });

    it('should support timeline zoom functionality', () => {
      cy.get('[data-testid="timeline-zoom-in"]').click();
      cy.get('[data-testid="timeline-zoom-out"]').click();
    });

    it('should have print-friendly version', () => {
      cy.get('[data-testid="print-history"]').should('be.visible');
    });
  });

  describe('Responsive Design', () => {
    it('should be responsive on mobile devices', () => {
      cy.viewport('iphone-6');
      cy.get('[data-testid="history-timeline"]').should('be.visible');
      cy.get('[data-testid="decades-navigation"]').should('be.visible');
    });

    it('should adapt timeline for mobile screens', () => {
      cy.viewport(375, 667);
      cy.get('[data-testid="timeline-event"]').should('be.visible');
    });

    it('should stack content appropriately on tablet', () => {
      cy.viewport('ipad-2');
      cy.get('[data-testid="historical-gallery"]').should('be.visible');
      cy.get('[data-testid="notable-alumni"]').should('be.visible');
    });

    it('should make timeline scrollable on small screens', () => {
      cy.viewport('iphone-6');
      cy.get('[data-testid="history-timeline"]').should('have.css', 'overflow-x', 'auto');
    });
  });

  describe('Performance and Loading', () => {
    it('should load images with lazy loading', () => {
      cy.get('[data-testid="historical-image"] img').should('have.attr', 'loading', 'lazy');
    });

    it('should handle image loading errors', () => {
      cy.get('[data-testid="historical-image"] img').each(($img) => {
        cy.wrap($img).should('be.visible');
      });
    });

    it('should load timeline content progressively', () => {
      cy.get('[data-testid="timeline-event"]').should('be.visible');
      cy.scrollTo('bottom');
      cy.get('[data-testid="modern-developments"]').should('be.visible');
    });
  });

  describe('Accessibility', () => {
    it('should support keyboard navigation', () => {
      cy.get('[data-testid="timeline-event"]').first().focus().type('{enter}');
      cy.get('[data-testid="event-details"]').should('be.visible');
    });

    it('should have proper heading hierarchy', () => {
      cy.get('h1').should('have.length', 1);
      cy.get('h2').should('have.length.greaterThan', 0);
      cy.get('h3').should('have.length.greaterThan', 0);
    });

    it('should have alt text for all historical images', () => {
      cy.get('[data-testid="historical-image"] img').each(($img) => {
        cy.wrap($img).should('have.attr', 'alt');
      });
    });

    it('should have proper ARIA labels for timeline', () => {
      cy.get('[data-testid="history-timeline"]').should('have.attr', 'role', 'region');
      cy.get('[data-testid="timeline-event"]').should('have.attr', 'role', 'button');
    });

    it('should manage focus in image modal', () => {
      cy.get('[data-testid="historical-image"]').first().click();
      cy.get('[data-testid="image-modal"]').should('be.visible');
      cy.focused().should('exist');
    });
  });

  describe('Content Validation', () => {
    it('should display accurate founding year', () => {
      cy.get('[data-testid="founding-year"]').should('contain.text', '1930');
    });

    it('should show chronological order in timeline', () => {
      cy.get('[data-testid="event-year"]').then(($years) => {
        const years = Array.from($years).map(el => parseInt(el.textContent));
        const sortedYears = [...years].sort((a, b) => a - b);
        expect(years).to.deep.equal(sortedYears);
      });
    });

    it('should have non-empty historical descriptions', () => {
      cy.get('[data-testid="event-description"]').each(($desc) => {
        cy.wrap($desc).should('not.be.empty');
      });
    });

    it('should display valid dates for all events', () => {
      cy.get('[data-testid="event-year"]').each(($year) => {
        cy.wrap($year).should('match', /\d{4}/);
      });
    });
  });
});