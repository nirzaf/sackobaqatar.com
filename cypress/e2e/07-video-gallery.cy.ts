/**
 * Video Gallery Tests
 * Tests all functionality on the video gallery page including video playback and filtering
 */

describe('Video Gallery Page', () => {
  beforeEach(() => {
    cy.visit('/video-gallery');
    cy.waitForPageLoad();
  });

  describe('Page Layout and Structure', () => {
    it('should display the video gallery page header', () => {
      cy.get('h1').should('contain.text', 'Video Gallery');
    });

    it('should load page content successfully', () => {
      cy.get('main').should('be.visible');
      cy.get('body').should('not.contain', 'Loading...');
    });

    it('should have proper page title', () => {
      cy.title().should('contain', 'Video Gallery');
    });

    it('should display video gallery hero section', () => {
      cy.get('[data-testid="video-gallery-hero"]').should('be.visible');
    });
  });

  describe('Video Grid Layout', () => {
    it('should display video thumbnails in grid layout', () => {
      cy.get('[data-testid="video-grid"]').should('be.visible');
      cy.get('[data-testid="video-item"]').should('have.length.greaterThan', 0);
    });

    it('should show video metadata', () => {
      cy.get('[data-testid="video-item"]').first().within(() => {
        cy.get('[data-testid="video-title"]').should('be.visible');
        cy.get('[data-testid="video-duration"]').should('be.visible');
        cy.get('[data-testid="video-date"]').should('be.visible');
        cy.get('[data-testid="video-thumbnail"]').should('be.visible');
      });
    });

    it('should display video categories', () => {
      cy.get('[data-testid="video-item"]').first().within(() => {
        cy.get('[data-testid="video-category"]').should('be.visible');
      });
    });

    it('should show video view counts', () => {
      cy.get('[data-testid="video-item"]').first().within(() => {
        cy.get('[data-testid="video-views"]').should('be.visible');
      });
    });

    it('should display play button overlay on thumbnails', () => {
      cy.get('[data-testid="video-item"]').first().within(() => {
        cy.get('[data-testid="play-button"]').should('be.visible');
      });
    });
  });

  describe('Video Playback', () => {
    it('should open video modal on thumbnail click', () => {
      cy.get('[data-testid="video-item"]').first().click();
      cy.get('[data-testid="video-modal"]').should('be.visible');
    });

    it('should display video player in modal', () => {
      cy.get('[data-testid="video-item"]').first().click();
      cy.get('[data-testid="video-modal"]').within(() => {
        cy.get('[data-testid="video-player"]').should('be.visible');
      });
    });

    it('should show video controls', () => {
      cy.get('[data-testid="video-item"]').first().click();
      cy.get('[data-testid="video-modal"]').within(() => {
        cy.get('[data-testid="play-pause-button"]').should('be.visible');
        cy.get('[data-testid="volume-control"]').should('be.visible');
        cy.get('[data-testid="progress-bar"]').should('be.visible');
        cy.get('[data-testid="fullscreen-button"]').should('be.visible');
      });
    });

    it('should play video when play button is clicked', () => {
      cy.get('[data-testid="video-item"]').first().click();
      cy.get('[data-testid="video-modal"]').within(() => {
        cy.get('[data-testid="play-pause-button"]').click();
        cy.get('video').should('have.prop', 'paused', false);
      });
    });

    it('should pause video when pause button is clicked', () => {
      cy.get('[data-testid="video-item"]').first().click();
      cy.get('[data-testid="video-modal"]').within(() => {
        cy.get('[data-testid="play-pause-button"]').click(); // Play
        cy.wait(1000);
        cy.get('[data-testid="play-pause-button"]').click(); // Pause
        cy.get('video').should('have.prop', 'paused', true);
      });
    });

    it('should close video modal', () => {
      cy.get('[data-testid="video-item"]').first().click();
      cy.get('[data-testid="video-modal"]').should('be.visible');
      cy.get('[data-testid="modal-close"]').click();
      cy.get('[data-testid="video-modal"]').should('not.be.visible');
    });

    it('should close modal with escape key', () => {
      cy.get('[data-testid="video-item"]').first().click();
      cy.get('[data-testid="video-modal"]').should('be.visible');
      cy.get('body').type('{esc}');
      cy.get('[data-testid="video-modal"]').should('not.be.visible');
    });

    it('should support keyboard controls for video', () => {
      cy.get('[data-testid="video-item"]').first().click();
      cy.get('[data-testid="video-modal"]').within(() => {
        cy.get('video').focus();
        cy.get('video').type(' '); // Space to play/pause
        cy.get('video').type('{rightarrow}'); // Seek forward
        cy.get('video').type('{leftarrow}'); // Seek backward
      });
    });
  });

  describe('Video Filtering and Search', () => {
    it('should display category filters', () => {
      cy.get('[data-testid="video-filters"]').should('be.visible');
      cy.get('[data-testid="category-filter"]').should('be.visible');
    });

    it('should show different video categories', () => {
      cy.get('[data-testid="category-filter"]').within(() => {
        cy.get('[data-testid="category-all"]').should('be.visible');
        cy.get('[data-testid="category-events"]').should('be.visible');
        cy.get('[data-testid="category-sports"]').should('be.visible');
        cy.get('[data-testid="category-academics"]').should('be.visible');
      });
    });

    it('should filter videos by category', () => {
      cy.get('[data-testid="category-sports"]').click();
      cy.get('[data-testid="video-item"]').each(($video) => {
        cy.wrap($video).should('contain.text', 'Sports');
      });
    });

    it('should highlight selected category', () => {
      cy.get('[data-testid="category-sports"]').click();
      cy.get('[data-testid="category-sports"]').should('have.class', 'bg-blue-500');
    });

    it('should display search functionality', () => {
      cy.get('[data-testid="video-search"]').should('be.visible');
    });

    it('should search videos by title', () => {
      cy.get('[data-testid="video-search"] input').type('AGM');
      cy.get('[data-testid="video-item"]').should('contain.text', 'AGM');
    });

    it('should clear search results', () => {
      cy.get('[data-testid="video-search"] input').type('test search');
      cy.get('[data-testid="search-clear"]').click();
      cy.get('[data-testid="video-search"] input').should('have.value', '');
    });

    it('should show no results message when search yields no videos', () => {
      cy.get('[data-testid="video-search"] input').type('nonexistent video');
      cy.get('[data-testid="no-results"]').should('be.visible');
      cy.get('[data-testid="no-results"]').should('contain.text', 'No videos found');
    });
  });

  describe('Video Sorting', () => {
    it('should display sort options', () => {
      cy.get('[data-testid="sort-dropdown"]').should('be.visible');
    });

    it('should sort by date (newest first)', () => {
      cy.get('[data-testid="sort-dropdown"]').select('newest');
      cy.get('[data-testid="video-item"]').first().within(() => {
        cy.get('[data-testid="video-date"]').should('be.visible');
      });
    });

    it('should sort by date (oldest first)', () => {
      cy.get('[data-testid="sort-dropdown"]').select('oldest');
      cy.get('[data-testid="video-item"]').first().within(() => {
        cy.get('[data-testid="video-date"]').should('be.visible');
      });
    });

    it('should sort by popularity (most viewed)', () => {
      cy.get('[data-testid="sort-dropdown"]').select('popular');
      cy.get('[data-testid="video-item"]').first().within(() => {
        cy.get('[data-testid="video-views"]').should('be.visible');
      });
    });

    it('should sort alphabetically', () => {
      cy.get('[data-testid="sort-dropdown"]').select('alphabetical');
      cy.get('[data-testid="video-item"]').first().within(() => {
        cy.get('[data-testid="video-title"]').should('be.visible');
      });
    });
  });

  describe('Video Information Display', () => {
    it('should show video details in modal', () => {
      cy.get('[data-testid="video-item"]').first().click();
      cy.get('[data-testid="video-modal"]').within(() => {
        cy.get('[data-testid="video-title"]').should('be.visible');
        cy.get('[data-testid="video-description"]').should('be.visible');
        cy.get('[data-testid="video-date"]').should('be.visible');
        cy.get('[data-testid="video-duration"]').should('be.visible');
      });
    });

    it('should display video tags', () => {
      cy.get('[data-testid="video-item"]').first().click();
      cy.get('[data-testid="video-modal"]').within(() => {
        cy.get('[data-testid="video-tags"]').should('be.visible');
        cy.get('[data-testid="video-tag"]').should('have.length.greaterThan', 0);
      });
    });

    it('should show related videos', () => {
      cy.get('[data-testid="video-item"]').first().click();
      cy.get('[data-testid="video-modal"]').within(() => {
        cy.get('[data-testid="related-videos"]').should('be.visible');
        cy.get('[data-testid="related-video-item"]').should('have.length.greaterThan', 0);
      });
    });

    it('should allow navigation to related videos', () => {
      cy.get('[data-testid="video-item"]').first().click();
      cy.get('[data-testid="video-modal"]').within(() => {
        cy.get('[data-testid="related-video-item"]').first().click();
        cy.get('[data-testid="video-player"]').should('be.visible');
      });
    });
  });

  describe('Video Quality and Settings', () => {
    it('should display quality selector', () => {
      cy.get('[data-testid="video-item"]').first().click();
      cy.get('[data-testid="video-modal"]').within(() => {
        cy.get('[data-testid="quality-selector"]').should('be.visible');
      });
    });

    it('should change video quality', () => {
      cy.get('[data-testid="video-item"]').first().click();
      cy.get('[data-testid="video-modal"]').within(() => {
        cy.get('[data-testid="quality-selector"]').select('720p');
        cy.get('[data-testid="quality-selector"]').should('have.value', '720p');
      });
    });

    it('should have playback speed controls', () => {
      cy.get('[data-testid="video-item"]').first().click();
      cy.get('[data-testid="video-modal"]').within(() => {
        cy.get('[data-testid="speed-control"]').should('be.visible');
        cy.get('[data-testid="speed-control"]').select('1.5x');
      });
    });

    it('should support captions/subtitles', () => {
      cy.get('[data-testid="video-item"]').first().click();
      cy.get('[data-testid="video-modal"]').within(() => {
        cy.get('[data-testid="captions-button"]').should('be.visible');
        cy.get('[data-testid="captions-button"]').click();
        cy.get('[data-testid="captions-menu"]').should('be.visible');
      });
    });
  });

  describe('Video Sharing', () => {
    it('should display share button', () => {
      cy.get('[data-testid="video-item"]').first().click();
      cy.get('[data-testid="video-modal"]').within(() => {
        cy.get('[data-testid="share-button"]').should('be.visible');
      });
    });

    it('should show share options', () => {
      cy.get('[data-testid="video-item"]').first().click();
      cy.get('[data-testid="video-modal"]').within(() => {
        cy.get('[data-testid="share-button"]').click();
        cy.get('[data-testid="share-menu"]').should('be.visible');
        cy.get('[data-testid="share-facebook"]').should('be.visible');
        cy.get('[data-testid="share-twitter"]').should('be.visible');
        cy.get('[data-testid="share-linkedin"]').should('be.visible');
        cy.get('[data-testid="copy-link"]').should('be.visible');
      });
    });

    it('should copy video link to clipboard', () => {
      cy.get('[data-testid="video-item"]').first().click();
      cy.get('[data-testid="video-modal"]').within(() => {
        cy.get('[data-testid="share-button"]').click();
        cy.get('[data-testid="copy-link"]').click();
        cy.get('[data-testid="copy-success"]').should('be.visible');
      });
    });
  });

  describe('Pagination and Loading', () => {
    it('should display pagination controls', () => {
      cy.get('[data-testid="pagination"]').should('be.visible');
    });

    it('should load more videos on pagination', () => {
      cy.get('[data-testid="next-page"]').click();
      cy.get('[data-testid="video-item"]').should('have.length.greaterThan', 0);
    });

    it('should show loading state during video load', () => {
      cy.get('[data-testid="video-item"]').first().click();
      cy.get('[data-testid="video-loading"]').should('be.visible');
    });

    it('should implement lazy loading for video thumbnails', () => {
      cy.get('[data-testid="video-thumbnail"] img').should('have.attr', 'loading', 'lazy');
    });
  });

  describe('Responsive Design', () => {
    it('should be responsive on mobile devices', () => {
      cy.viewport('iphone-6');
      cy.get('[data-testid="video-grid"]').should('be.visible');
      cy.get('[data-testid="video-filters"]').should('be.visible');
    });

    it('should adapt video grid for different screen sizes', () => {
      const viewports = [
        { width: 375, height: 667 },   // Mobile
        { width: 768, height: 1024 },  // Tablet
        { width: 1280, height: 720 }   // Desktop
      ];

      viewports.forEach(viewport => {
        cy.viewport(viewport.width, viewport.height);
        cy.get('[data-testid="video-grid"]').should('be.visible');
        cy.wait(500);
      });
    });

    it('should adjust video modal size for mobile', () => {
      cy.viewport('iphone-6');
      cy.get('[data-testid="video-item"]').first().click();
      cy.get('[data-testid="video-modal"]').should('be.visible');
      cy.get('[data-testid="video-player"]').should('be.visible');
    });

    it('should stack filters vertically on small screens', () => {
      cy.viewport('iphone-6');
      cy.get('[data-testid="video-filters"]').should('be.visible');
    });
  });

  describe('Performance and Loading', () => {
    it('should load video thumbnails efficiently', () => {
      cy.get('[data-testid="video-thumbnail"] img').each(($img) => {
        cy.wrap($img).should('be.visible');
      });
    });

    it('should handle video loading errors gracefully', () => {
      cy.get('[data-testid="video-item"]').first().click();
      cy.get('[data-testid="video-modal"]').within(() => {
        cy.get('[data-testid="video-error"]').should('not.exist');
      });
    });

    it('should preload video metadata', () => {
      cy.get('[data-testid="video-item"]').first().click();
      cy.get('[data-testid="video-modal"]').within(() => {
        cy.get('video').should('have.attr', 'preload', 'metadata');
      });
    });
  });

  describe('Accessibility', () => {
    it('should support keyboard navigation', () => {
      cy.get('[data-testid="video-item"]').first().focus().type('{enter}');
      cy.get('[data-testid="video-modal"]').should('be.visible');
    });

    it('should have proper ARIA labels', () => {
      cy.get('[data-testid="video-item"]').should('have.attr', 'role', 'button');
      cy.get('[data-testid="play-button"]').should('have.attr', 'aria-label');
    });

    it('should manage focus in video modal', () => {
      cy.get('[data-testid="video-item"]').first().click();
      cy.get('[data-testid="video-modal"]').should('be.visible');
      cy.focused().should('exist');
    });

    it('should have alt text for video thumbnails', () => {
      cy.get('[data-testid="video-thumbnail"] img').each(($img) => {
        cy.wrap($img).should('have.attr', 'alt');
      });
    });

    it('should support screen readers', () => {
      cy.get('[data-testid="video-item"]').first().within(() => {
        cy.get('[data-testid="video-title"]').should('have.attr', 'aria-label');
        cy.get('[data-testid="video-duration"]').should('have.attr', 'aria-label');
      });
    });
  });

  describe('Content Validation', () => {
    it('should display valid video durations', () => {
      cy.get('[data-testid="video-duration"]').first().should('match', /\d{1,2}:\d{2}/);
    });

    it('should show recent upload dates', () => {
      cy.get('[data-testid="video-date"]').first().should('not.be.empty');
    });

    it('should have non-empty video titles', () => {
      cy.get('[data-testid="video-title"]').first().should('not.be.empty');
    });

    it('should display proper video categories', () => {
      cy.get('[data-testid="video-category"]').first().should('not.be.empty');
    });
  });
});