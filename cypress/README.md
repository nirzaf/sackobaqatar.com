# Cypress Testing Suite for SACKOBA Qatar Website

This comprehensive Cypress testing suite ensures the quality, accessibility, performance, and functionality of the SACKOBA Qatar website.

## 🧪 Test Structure

### Core Functionality Tests
- **01-navigation.cy.ts** - Navigation menu and routing
- **02-home-page.cy.ts** - Home page components and interactions
- **03-events-page.cy.ts** - Events page with image gallery
- **04-about-page.cy.ts** - About page content and layout
- **05-news-page.cy.ts** - News page functionality
- **06-contact-page.cy.ts** - Contact form and validation
- **07-video-gallery.cy.ts** - Video gallery and YouTube integration
- **08-membership-terms.cy.ts** - Membership terms page
- **09-college-history.cy.ts** - College history page
- **10-exco.cy.ts** - Executive committee page

### Quality Assurance Tests
- **11-responsive-design.cy.ts** - Responsive design across devices
- **12-accessibility.cy.ts** - WCAG 2.1 accessibility compliance
- **13-performance.cy.ts** - Performance metrics and optimization
- **14-integration.cy.ts** - End-to-end user workflows

## 🚀 Getting Started

### Prerequisites
```bash
# Install dependencies
npm install
# or
pnpm install
```

### Running Tests

#### Interactive Mode (Cypress Test Runner)
```bash
npm run cypress:open
```

#### Headless Mode (CI/CD)
```bash
npm run cypress:run
```

#### Browser-Specific Tests
```bash
npm run cypress:run:chrome
npm run cypress:run:firefox
npm run cypress:run:edge
```

#### Development Testing
```bash
# Start dev server and run tests
npm run test:e2e:dev
```

#### Specific Test Categories
```bash
npm run test:accessibility    # Accessibility tests only
npm run test:performance      # Performance tests only
npm run test:integration      # Integration tests only
npm run test:responsive       # Responsive design tests only
```

## 🛠️ Custom Commands

The test suite includes comprehensive custom commands in `cypress/support/commands.ts`:

### Navigation & Page Management
- `cy.navigateTo(page)` - Navigate to specific pages
- `cy.checkNavigation()` - Verify navigation functionality
- `cy.waitForPageLoad()` - Wait for page to fully load

### Accessibility Testing
- `cy.checkA11y()` - Run axe-core accessibility checks
- `cy.testKeyboardNavigation()` - Test keyboard navigation
- `cy.checkAccessibility()` - Comprehensive accessibility validation

### Form Testing
- `cy.fillContactForm(data)` - Fill contact form with test data
- `cy.checkFormValidation()` - Test form validation
- `cy.testNewsletterSubscription()` - Test newsletter signup

### UI Component Testing
- `cy.testModal()` - Test modal functionality
- `cy.testDropdown()` - Test dropdown interactions
- `cy.testPagination()` - Test pagination controls
- `cy.testFilter()` - Test filtering functionality

### Media & Content Testing
- `cy.verifyImage()` - Verify image loading and properties
- `cy.testVideoPlayer()` - Test video player functionality
- `cy.testEventGallery()` - Test event gallery interactions

### Performance Testing
- `cy.checkPerformance()` - Monitor performance metrics
- `cy.checkLoadingStates()` - Verify loading states

### Responsive Design
- `cy.checkResponsive()` - Test across multiple viewports

## 📊 Test Configuration

The `cypress.config.ts` file includes:

### Environment Variables
- Test data (email, phone, student ID)
- Feature flags for different test types
- API endpoints for testing
- Timeout configurations

### Browser Configuration
- Chrome with performance flags
- Electron with accessibility features
- Custom launch arguments

### Reporting
- Performance metrics logging
- Accessibility violation reporting
- Test result tracking

## 🎯 Test Coverage

### Accessibility (WCAG 2.1)
- ✅ Color contrast compliance
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ ARIA labels and roles
- ✅ Focus management
- ✅ Semantic HTML structure

### Performance
- ✅ Page load times (TTFB, FCP, LCP)
- ✅ Resource optimization
- ✅ Image optimization
- ✅ JavaScript performance
- ✅ Core Web Vitals
- ✅ Mobile performance

### Functionality
- ✅ Navigation and routing
- ✅ Form submissions
- ✅ Image galleries
- ✅ Video playback
- ✅ Search and filtering
- ✅ Responsive design

### User Workflows
- ✅ Prospective student journey
- ✅ Alumni engagement
- ✅ Event discovery and viewing
- ✅ Contact and communication
- ✅ Multi-device consistency

## 🔧 Debugging

### Debug Mode
```bash
npm run test:e2e:headed  # Run with browser visible
```

### Screenshots and Videos
- Screenshots saved to `cypress/screenshots/`
- Videos saved to `cypress/videos/`
- Automatic capture on test failures

### Console Logging
- Performance metrics logged to console
- Accessibility violations reported
- Custom debug information available

## 📝 Writing New Tests

### Test Structure
```typescript
describe('Feature Name', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.waitForPageLoad();
  });

  it('should test specific functionality', () => {
    // Test implementation
  });
});
```

### Best Practices
1. Use custom commands for reusable functionality
2. Include accessibility checks in all tests
3. Test across multiple viewports
4. Verify loading states and error handling
5. Use descriptive test names and comments

### Adding Custom Commands
1. Add command declaration to `cypress/support/commands.ts`
2. Implement command logic
3. Update this README with usage examples

## 🚨 Troubleshooting

### Common Issues

#### Test Timeouts
- Increase timeout values in `cypress.config.ts`
- Use `cy.waitForPageLoad()` before interactions

#### Accessibility Violations
- Check console output for specific violations
- Use browser dev tools to inspect elements
- Refer to WCAG 2.1 guidelines

#### Performance Issues
- Monitor network tab during test runs
- Check Core Web Vitals in test output
- Optimize images and resources

#### Responsive Design Failures
- Test manually across different devices
- Check CSS media queries
- Verify touch target sizes

## 📚 Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Core Web Vitals](https://web.dev/vitals/)
- [axe-core Accessibility Testing](https://github.com/dequelabs/axe-core)

## 🤝 Contributing

1. Follow the existing test patterns
2. Include accessibility and performance checks
3. Add comprehensive test coverage
4. Update documentation for new features
5. Ensure tests pass in CI/CD pipeline