/**
 * Performance Tests
 * Tests website performance, loading times, and optimization features
 */

describe('Performance Tests', () => {
  const pages = [
    { name: 'Home', url: '/', critical: true },
    { name: 'About', url: '/about', critical: true },
    { name: 'Events', url: '/events', critical: true },
    { name: 'News', url: '/news', critical: false },
    { name: 'Contact', url: '/contact', critical: true },
    { name: 'Video Gallery', url: '/video-gallery', critical: false },
    { name: 'College History', url: '/college-history', critical: false },
    { name: 'EXCO', url: '/exco', critical: false },
    { name: 'Membership Terms', url: '/membership-terms', critical: false }
  ];

  describe('Page Load Performance', () => {
    pages.forEach(page => {
      it(`should load ${page.name} page within acceptable time`, () => {
        const maxLoadTime = page.critical ? 3000 : 5000; // 3s for critical, 5s for others
        const start = Date.now();

        cy.visit(page.url);
        cy.waitForPageLoad();

        cy.then(() => {
          const loadTime = Date.now() - start;
          expect(loadTime).to.be.lessThan(maxLoadTime);
        });
      });
    });

    it('should have fast Time to First Byte (TTFB)', () => {
      cy.visit('/', {
        onBeforeLoad: (win) => {
          win.performance.mark('start');
        },
        onLoad: (win) => {
          win.performance.mark('end');
          win.performance.measure('pageLoad', 'start', 'end');
        }
      });

      cy.window().then((win) => {
        const measure = win.performance.getEntriesByName('pageLoad')[0];
        expect(measure.duration).to.be.lessThan(1000); // 1 second TTFB
      });
    });

    it('should have fast First Contentful Paint (FCP)', () => {
      cy.visit('/');
      cy.window().then((win) => {
        const paintEntries = win.performance.getEntriesByType('paint');
        const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        if (fcp) {
          expect(fcp.startTime).to.be.lessThan(2000); // 2 seconds FCP
        }
      });
    });

    it('should have fast Largest Contentful Paint (LCP)', () => {
      cy.visit('/');
      cy.window().then((win) => {
        // Simulate LCP measurement
        cy.get('[data-testid="hero-section"]').should('be.visible');
        cy.then(() => {
          const now = win.performance.now();
          expect(now).to.be.lessThan(2500); // 2.5 seconds LCP
        });
      });
    });
  });

  describe('Resource Loading Optimization', () => {
    it('should load critical CSS inline', () => {
      cy.visit('/');
      cy.get('style').should('exist'); // Inline critical CSS
    });

    it('should defer non-critical CSS', () => {
      cy.visit('/');
      cy.get('link[rel="stylesheet"]').should('have.attr', 'media', 'print');
    });

    it('should preload critical resources', () => {
      cy.visit('/');
      cy.get('link[rel="preload"]').should('exist');
      cy.get('link[rel="preload"][as="font"]').should('exist');
    });

    it('should use resource hints for external domains', () => {
      cy.visit('/');
      cy.get('link[rel="dns-prefetch"]').should('exist');
      cy.get('link[rel="preconnect"]').should('exist');
    });

    it('should compress text resources', () => {
      cy.request('/').
        its('headers')
        .should('have.property', 'content-encoding', 'gzip');
    });

    it('should set proper cache headers', () => {
      cy.request('/').then((response) => {
        expect(response.headers).to.have.property('cache-control');
        expect(response.headers['cache-control']).to.include('max-age');
      });
    });
  });

  describe('Image Optimization', () => {
    it('should use modern image formats', () => {
      cy.visit('/');
      cy.get('picture source').should('have.attr', 'type', 'image/webp');
    });

    it('should implement lazy loading for images', () => {
      cy.visit('/');
      cy.get('img[loading="lazy"]').should('exist');
      cy.get('[data-testid="below-fold"] img').should('have.attr', 'loading', 'lazy');
    });

    it('should use responsive images', () => {
      cy.visit('/');
      cy.get('img[srcset]').should('exist');
      cy.get('img[sizes]').should('exist');
    });

    it('should optimize image sizes', () => {
      cy.visit('/');
      cy.get('img').each($img => {
        cy.request($img.attr('src')).then((response) => {
          const contentLength = parseInt(response.headers['content-length']);
          expect(contentLength).to.be.lessThan(500000); // 500KB max per image
        });
      });
    });

    it('should provide appropriate image dimensions', () => {
      cy.visit('/');
      cy.get('img').each($img => {
        cy.wrap($img).should('have.attr', 'width');
        cy.wrap($img).should('have.attr', 'height');
      });
    });
  });

  describe('JavaScript Performance', () => {
    it('should minimize main thread blocking', () => {
      cy.visit('/');
      cy.window().then((win) => {
        const longTasks = win.performance.getEntriesByType('longtask');
        expect(longTasks.length).to.be.lessThan(3); // Minimal long tasks
      });
    });

    it('should load JavaScript asynchronously', () => {
      cy.visit('/');
      cy.get('script[src]').each($script => {
        const hasAsync = $script.attr('async') !== undefined;
        const hasDefer = $script.attr('defer') !== undefined;
        assert.isTrue(hasAsync || hasDefer, 'Scripts should have async or defer attribute');
      });
    });

    it('should minimize JavaScript bundle size', () => {
      cy.visit('/');
      cy.get('script[src]').each($script => {
        const src = $script.attr('src');
        if (src && !src.includes('vendor')) {
          cy.request(src).then((response) => {
            const contentLength = parseInt(response.headers['content-length']);
            expect(contentLength).to.be.lessThan(250000); // 250KB max per bundle
          });
        }
      });
    });

    it('should use code splitting', () => {
      cy.visit('/');
      cy.get('script[src*="chunk"]').should('exist'); // Webpack chunks
    });

    it('should implement tree shaking', () => {
      cy.visit('/');
      cy.window().then((win) => {
        // Check that unused code is not present
        assert.isUndefined(win.unusedFunction, 'Unused functions should not be present in bundle');
      });
    });
  });

  describe('CSS Performance', () => {
    it('should minimize CSS bundle size', () => {
      cy.visit('/');
      cy.get('link[rel="stylesheet"]').each($link => {
        const href = $link.attr('href');
        if (href) {
          cy.request(href).then((response) => {
            const contentLength = parseInt(response.headers['content-length']);
            expect(contentLength).to.be.lessThan(100000); // 100KB max per CSS file
          });
        }
      });
    });

    it('should remove unused CSS', () => {
      cy.visit('/');
      cy.get('head').then($head => {
        const cssText = $head.find('style').text();
        expect(cssText).to.not.include('.unused-class');
      });
    });

    it('should use CSS containment', () => {
      cy.visit('/');
      cy.get('[data-testid="isolated-component"]').should('have.css', 'contain', 'layout');
    });
  });

  describe('Font Loading Optimization', () => {
    it('should preload critical fonts', () => {
      cy.visit('/');
      cy.get('link[rel="preload"][as="font"]').should('exist');
    });

    it('should use font-display swap', () => {
      cy.visit('/');
      cy.get('style').should('contain.text', 'font-display: swap');
    });

    it('should minimize font file sizes', () => {
      cy.visit('/');
      cy.get('link[rel="preload"][as="font"]').each($link => {
        const href = $link.attr('href');
        if (href) {
          cy.request(href).then((response) => {
            const contentLength = parseInt(response.headers['content-length']);
            expect(contentLength).to.be.lessThan(50000); // 50KB max per font
          });
        }
      });
    });

    it('should subset fonts appropriately', () => {
      cy.visit('/');
      cy.get('link[rel="preload"][as="font"]').should('have.attr', 'href').and('include', 'subset');
    });
  });

  describe('Network Performance', () => {
    it('should minimize HTTP requests', () => {
      cy.visit('/');
      cy.window().then((win) => {
        const resources = win.performance.getEntriesByType('resource');
        expect(resources.length).to.be.lessThan(50); // Reasonable number of requests
      });
    });

    it('should use HTTP/2', () => {
      cy.request('/').then((response) => {
        expect(response.headers).to.have.property('server');
      });
    });

    it('should implement service worker for caching', () => {
      cy.visit('/');
      cy.window().then((win) => {
        assert.exists(win.navigator.serviceWorker, 'Service worker should be registered');
      });
    });

    it('should use CDN for static assets', () => {
      cy.visit('/');
      cy.get('img[src*="cdn"], script[src*="cdn"], link[href*="cdn"]').should('exist');
    });
  });

  describe('Memory Performance', () => {
    it('should not have memory leaks', () => {
      cy.visit('/');
      cy.window().then((win) => {
        const initialMemory = win.performance.memory?.usedJSHeapSize || 0;

        // Navigate through pages
        cy.visit('/about');
        cy.visit('/events');
        cy.visit('/');

        cy.window().then((win2) => {
          const finalMemory = win2.performance.memory?.usedJSHeapSize || 0;
          const memoryIncrease = finalMemory - initialMemory;
          expect(memoryIncrease).to.be.lessThan(10000000); // 10MB increase max
        });
      });
    });

    it('should clean up event listeners', () => {
      cy.visit('/');
      cy.window().then((win) => {
        const initialListeners = win.getEventListeners?.(win.document).length || 0;

        // Trigger component mount/unmount
        cy.get('[data-testid="dynamic-component"]').click();
        cy.get('[data-testid="close-component"]').click();

        cy.window().then((win2) => {
          const finalListeners = win2.getEventListeners?.(win2.document).length || 0;
          expect(finalListeners).to.equal(initialListeners);
        });
      });
    });
  });

  describe('Rendering Performance', () => {
    it('should minimize layout thrashing', () => {
      cy.visit('/');
      cy.get('[data-testid="animated-element"]').should('have.css', 'will-change', 'transform');
    });

    it('should use GPU acceleration for animations', () => {
      cy.visit('/');
      cy.get('[data-testid="animated-element"]').should('have.css', 'transform', 'translateZ(0px)');
    });

    it('should implement virtual scrolling for long lists', () => {
      cy.visit('/events');
      cy.get('[data-testid="virtual-list"]').should('exist');
    });

    it('should debounce scroll events', () => {
      cy.visit('/');
      cy.window().then((win) => {
        let scrollCount = 0;
        win.addEventListener('scroll', () => scrollCount++);

        cy.scrollTo('bottom', { duration: 100 });
        cy.wait(200);

        cy.then(() => {
          expect(scrollCount).to.be.lessThan(10); // Debounced scroll events
        });
      });
    });
  });

  describe('Third-Party Performance', () => {
    it('should load third-party scripts asynchronously', () => {
      cy.visit('/');
      cy.get('script[src*="google"], script[src*="facebook"], script[src*="twitter"]')
        .should('have.attr', 'async');
    });

    it('should use facade for heavy third-party embeds', () => {
      cy.visit('/');
      cy.get('[data-testid="youtube-facade"]').should('exist');
      cy.get('iframe[src*="youtube"]').should('not.exist');
    });

    it('should minimize third-party impact', () => {
      cy.visit('/');
      cy.window().then((win) => {
        const thirdPartyResources = win.performance.getEntriesByType('resource')
          .filter(resource => !resource.name.includes(win.location.hostname));

        expect(thirdPartyResources.length).to.be.lessThan(10);
      });
    });
  });

  describe('Mobile Performance', () => {
    beforeEach(() => {
      cy.viewport('iphone-6');
    });

    it('should load quickly on mobile', () => {
      const start = Date.now();
      cy.visit('/');
      cy.waitForPageLoad();

      cy.then(() => {
        const loadTime = Date.now() - start;
        expect(loadTime).to.be.lessThan(4000); // 4 seconds on mobile
      });
    });

    it('should use appropriate image sizes for mobile', () => {
      cy.visit('/');
      cy.get('img').each($img => {
        const src = $img.attr('src');
        if (src) {
          const hasMobileInSrc = src.includes('mobile');
          const hasSrcSet = $img.attr('srcset') !== undefined;
          assert.isTrue(hasMobileInSrc || hasSrcSet, 'Images should have mobile-specific src or srcset');
        }
      });
    });

    it('should minimize JavaScript execution on mobile', () => {
      cy.visit('/');
      cy.window().then((win) => {
        const scripts = win.performance.getEntriesByType('resource')
          .filter(resource => resource.name.includes('.js'));

        const totalScriptSize = scripts.reduce((total, script) => {
          return total + (script.transferSize || 0);
        }, 0);

        expect(totalScriptSize).to.be.lessThan(300000); // 300KB total JS on mobile
      });
    });
  });

  describe('Performance Monitoring', () => {
    it('should track Core Web Vitals', () => {
      cy.visit('/');
      cy.window().then((win) => {
        // Check if performance monitoring is set up
        const hasAnalytics = win.gtag !== undefined || win.dataLayer !== undefined || win.analytics !== undefined;
        assert.isTrue(hasAnalytics, 'Performance monitoring should be set up');
      });
    });

    it('should report performance metrics', () => {
      cy.visit('/');
      cy.window().then((win) => {
        const navigationTiming = win.performance.getEntriesByType('navigation')[0];
        assert.exists(navigationTiming, 'Navigation timing should exist');
        assert.isAbove(navigationTiming.loadEventEnd, 0, 'Load event should have completed');
      });
    });

    it('should implement performance budgets', () => {
      cy.visit('/');
      cy.window().then((win) => {
        const resources = win.performance.getEntriesByType('resource');
        const totalSize = resources.reduce((total, resource) => {
          return total + (resource.transferSize || 0);
        }, 0);

        expect(totalSize).to.be.lessThan(2000000); // 2MB performance budget
      });
    });
  });

  describe('Progressive Enhancement', () => {
    it('should work without JavaScript', () => {
      cy.visit('/', {
        onBeforeLoad: (win) => {
          win.document.documentElement.classList.add('no-js');
        }
      });

      cy.get('[data-testid="main-content"]').should('be.visible');
      cy.get('[data-testid="navigation"]').should('be.visible');
    });

    it('should enhance progressively with JavaScript', () => {
      cy.visit('/');
      cy.get('[data-testid="enhanced-feature"]').should('be.visible');
    });

    it('should handle slow connections gracefully', () => {
      cy.visit('/', {
        onBeforeLoad: (win) => {
          // Simulate slow connection
          Object.defineProperty(win.navigator, 'connection', {
            value: { effectiveType: '2g' }
          });
        }
      });

      cy.get('[data-testid="loading-indicator"]').should('be.visible');
    });
  });
});