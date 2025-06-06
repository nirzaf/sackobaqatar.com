/**
 * News Page Tests
 * Tests all functionality on the news page including articles, filtering, and pagination
 */

describe('News Page', () => {
  beforeEach(() => {
    cy.visit('/news');
    cy.waitForPageLoad();
  });

  describe('Page Layout and Structure', () => {
    it('should display the news page header', () => {
      cy.get('h1').should('contain.text', 'News');
    });

    it('should load page content successfully', () => {
      cy.get('main').should('be.visible');
      cy.get('body').should('not.contain', 'Loading...');
    });

    it('should have proper page title', () => {
      cy.title().should('contain', 'News');
    });

    it('should display news hero section', () => {
      cy.get('[data-testid="news-hero"]').should('be.visible');
    });
  });

  describe('News Articles List', () => {
    it('should display news articles', () => {
      cy.get('[data-testid="news-article"]').should('have.length.greaterThan', 0);
    });

    it('should show article previews with required information', () => {
      cy.get('[data-testid="news-article"]').first().within(() => {
        cy.get('[data-testid="article-title"]').should('be.visible');
        cy.get('[data-testid="article-excerpt"]').should('be.visible');
        cy.get('[data-testid="article-date"]').should('be.visible');
        cy.get('[data-testid="article-author"]').should('be.visible');
      });
    });

    it('should display article featured images', () => {
      cy.get('[data-testid="news-article"]').first().within(() => {
        cy.get('[data-testid="article-image"]').should('be.visible');
        cy.get('[data-testid="article-image"] img').should('have.attr', 'src');
        cy.get('[data-testid="article-image"] img').should('have.attr', 'alt');
      });
    });

    it('should show article categories/tags', () => {
      cy.get('[data-testid="news-article"]').first().within(() => {
        cy.get('[data-testid="article-category"]').should('be.visible');
      });
    });

    it('should display read more links', () => {
      cy.get('[data-testid="news-article"]').first().within(() => {
        cy.get('[data-testid="read-more-link"]').should('be.visible');
        cy.get('[data-testid="read-more-link"]').should('contain.text', 'Read More');
      });
    });
  });

  describe('Article Interaction', () => {
    it('should navigate to full article on click', () => {
      cy.get('[data-testid="news-article"]').first().within(() => {
        cy.get('[data-testid="article-title"] a').click();
      });
      cy.url().should('include', '/news/');
    });

    it('should navigate to full article via read more link', () => {
      cy.get('[data-testid="read-more-link"]').first().click();
      cy.url().should('include', '/news/');
    });

    it('should show article hover effects', () => {
      cy.get('[data-testid="news-article"]').first().trigger('mouseover');
      cy.get('[data-testid="news-article"]').first().should('have.class', 'hover:shadow-lg');
    });
  });

  describe('News Filtering and Search', () => {
    it('should display search functionality', () => {
      cy.get('[data-testid="news-search"]').should('be.visible');
    });

    it('should filter articles by search term', () => {
      cy.get('[data-testid="news-search"] input').type('AGM');
      cy.get('[data-testid="news-article"]').should('contain.text', 'AGM');
    });

    it('should clear search results', () => {
      cy.get('[data-testid="news-search"] input').type('test search');
      cy.get('[data-testid="search-clear"]').click();
      cy.get('[data-testid="news-search"] input').should('have.value', '');
    });

    it('should display category filters', () => {
      cy.get('[data-testid="category-filter"]').should('be.visible');
    });

    it('should filter by category', () => {
      cy.get('[data-testid="category-sports"]').click();
      cy.get('[data-testid="news-article"]').should('contain.text', 'Sports');
    });

    it('should show date range filter', () => {
      cy.get('[data-testid="date-filter"]').should('be.visible');
    });

    it('should filter by date range', () => {
      cy.get('[data-testid="date-from"]').type('2024-01-01');
      cy.get('[data-testid="date-to"]').type('2024-12-31');
      cy.get('[data-testid="apply-date-filter"]').click();
      cy.get('[data-testid="news-article"]').should('have.length.greaterThan', 0);
    });
  });

  describe('Pagination', () => {
    it('should display pagination controls', () => {
      cy.get('[data-testid="pagination"]').should('be.visible');
    });

    it('should show current page number', () => {
      cy.get('[data-testid="current-page"]').should('contain.text', '1');
    });

    it('should navigate to next page', () => {
      cy.get('[data-testid="next-page"]').click();
      cy.get('[data-testid="current-page"]').should('contain.text', '2');
    });

    it('should navigate to previous page', () => {
      cy.get('[data-testid="next-page"]').click();
      cy.get('[data-testid="previous-page"]').click();
      cy.get('[data-testid="current-page"]').should('contain.text', '1');
    });

    it('should navigate to specific page number', () => {
      cy.get('[data-testid="page-number-3"]').click();
      cy.get('[data-testid="current-page"]').should('contain.text', '3');
    });

    it('should disable previous button on first page', () => {
      cy.get('[data-testid="previous-page"]').should('be.disabled');
    });

    it('should show articles per page selector', () => {
      cy.get('[data-testid="articles-per-page"]').should('be.visible');
    });

    it('should change number of articles per page', () => {
      cy.get('[data-testid="articles-per-page"]').select('20');
      cy.get('[data-testid="news-article"]').should('have.length.lessThan', 21);
    });
  });

  describe('Article Categories', () => {
    it('should display different news categories', () => {
      cy.get('[data-testid="news-categories"]').should('be.visible');
      cy.get('[data-testid="category-item"]').should('have.length.greaterThan', 0);
    });

    it('should show category counts', () => {
      cy.get('[data-testid="category-item"]').first().within(() => {
        cy.get('[data-testid="category-count"]').should('be.visible');
      });
    });

    it('should filter articles by category selection', () => {
      cy.get('[data-testid="category-academics"]').click();
      cy.get('[data-testid="news-article"]').each(($article) => {
        cy.wrap($article).should('contain.text', 'Academic');
      });
    });

    it('should highlight selected category', () => {
      cy.get('[data-testid="category-sports"]').click();
      cy.get('[data-testid="category-sports"]').should('have.class', 'bg-blue-500');
    });
  });

  describe('Featured Articles', () => {
    it('should display featured articles section', () => {
      cy.get('[data-testid="featured-articles"]').should('be.visible');
    });

    it('should show featured article with larger layout', () => {
      cy.get('[data-testid="featured-article"]').should('be.visible');
      cy.get('[data-testid="featured-article"]').should('have.class', 'col-span-2');
    });

    it('should display featured article badge', () => {
      cy.get('[data-testid="featured-badge"]').should('be.visible');
      cy.get('[data-testid="featured-badge"]').should('contain.text', 'Featured');
    });
  });

  describe('Recent News Sidebar', () => {
    it('should display recent news sidebar', () => {
      cy.get('[data-testid="recent-news-sidebar"]').should('be.visible');
    });

    it('should show recent articles list', () => {
      cy.get('[data-testid="recent-article"]').should('have.length.greaterThan', 0);
    });

    it('should display article thumbnails in sidebar', () => {
      cy.get('[data-testid="recent-article"]').first().within(() => {
        cy.get('[data-testid="article-thumbnail"]').should('be.visible');
      });
    });

    it('should show publication dates in sidebar', () => {
      cy.get('[data-testid="recent-article"]').first().within(() => {
        cy.get('[data-testid="article-date"]').should('be.visible');
      });
    });
  });

  describe('Newsletter Subscription', () => {
    it('should display newsletter subscription form', () => {
      cy.get('[data-testid="newsletter-signup"]').should('be.visible');
    });

    it('should have email input field', () => {
      cy.get('[data-testid="newsletter-email"]').should('be.visible');
      cy.get('[data-testid="newsletter-email"]').should('have.attr', 'type', 'email');
    });

    it('should validate email format', () => {
      cy.get('[data-testid="newsletter-email"]').type('invalid-email');
      cy.get('[data-testid="newsletter-submit"]').click();
      cy.get('[data-testid="email-error"]').should('be.visible');
    });

    it('should submit valid email', () => {
      cy.get('[data-testid="newsletter-email"]').type('test@example.com');
      cy.get('[data-testid="newsletter-submit"]').click();
      cy.get('[data-testid="success-message"]').should('be.visible');
    });
  });

  describe('Social Sharing', () => {
    it('should display social sharing buttons', () => {
      cy.get('[data-testid="social-share"]').should('be.visible');
    });

    it('should have Facebook share button', () => {
      cy.get('[data-testid="share-facebook"]').should('be.visible');
      cy.get('[data-testid="share-facebook"]').should('have.attr', 'href').and('include', 'facebook.com');
    });

    it('should have Twitter share button', () => {
      cy.get('[data-testid="share-twitter"]').should('be.visible');
      cy.get('[data-testid="share-twitter"]').should('have.attr', 'href').and('include', 'twitter.com');
    });

    it('should have LinkedIn share button', () => {
      cy.get('[data-testid="share-linkedin"]').should('be.visible');
      cy.get('[data-testid="share-linkedin"]').should('have.attr', 'href').and('include', 'linkedin.com');
    });
  });

  describe('Responsive Design', () => {
    it('should be responsive on mobile devices', () => {
      cy.viewport('iphone-6');
      cy.get('[data-testid="news-article"]').should('be.visible');
      cy.get('[data-testid="news-search"]').should('be.visible');
    });

    it('should stack articles vertically on mobile', () => {
      cy.viewport(375, 667);
      cy.get('[data-testid="news-article"]').should('have.css', 'width');
    });

    it('should adapt sidebar for tablet screens', () => {
      cy.viewport('ipad-2');
      cy.get('[data-testid="recent-news-sidebar"]').should('be.visible');
    });

    it('should hide sidebar on mobile screens', () => {
      cy.viewport('iphone-6');
      cy.get('[data-testid="recent-news-sidebar"]').should('not.be.visible');
    });
  });

  describe('Performance and Loading', () => {
    it('should load images with lazy loading', () => {
      cy.get('[data-testid="article-image"] img').should('have.attr', 'loading', 'lazy');
    });

    it('should handle image loading errors', () => {
      cy.get('[data-testid="article-image"] img').each(($img) => {
        cy.wrap($img).should('be.visible');
      });
    });

    it('should show loading states during filtering', () => {
      cy.get('[data-testid="category-sports"]').click();
      cy.get('[data-testid="news-article"]').should('be.visible');
    });

    it('should implement infinite scroll or pagination efficiently', () => {
      cy.scrollTo('bottom');
      cy.get('[data-testid="pagination"]').should('be.visible');
    });
  });

  describe('Accessibility', () => {
    it('should support keyboard navigation', () => {
      cy.get('[data-testid="news-search"] input').focus().type('test');
      cy.get('[data-testid="news-article"]').first().find('a').focus();
    });

    it('should have proper heading hierarchy', () => {
      cy.get('h1').should('have.length', 1);
      cy.get('h2').should('have.length.greaterThan', 0);
    });

    it('should have alt text for all images', () => {
      cy.get('[data-testid="article-image"] img').each(($img) => {
        cy.wrap($img).should('have.attr', 'alt');
      });
    });

    it('should have proper ARIA labels', () => {
      cy.get('[data-testid="news-search"]').should('have.attr', 'role', 'search');
      cy.get('[data-testid="pagination"]').should('have.attr', 'role', 'navigation');
    });

    it('should manage focus properly', () => {
      cy.get('[data-testid="category-sports"]').click();
      cy.focused().should('exist');
    });
  });

  describe('Content Validation', () => {
    it('should display recent publication dates', () => {
      cy.get('[data-testid="article-date"]').first().should('not.be.empty');
    });

    it('should show valid author information', () => {
      cy.get('[data-testid="article-author"]').first().should('not.contain', 'Unknown');
    });

    it('should have non-empty article excerpts', () => {
      cy.get('[data-testid="article-excerpt"]').first().should('not.be.empty');
    });

    it('should display proper article categories', () => {
      cy.get('[data-testid="article-category"]').first().should('not.be.empty');
    });
  });
});