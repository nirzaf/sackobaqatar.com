# SACKOBA Qatar Website - Testing & CI/CD Documentation

## Overview

This document outlines the testing framework and CI/CD pipeline for the SACKOBA Qatar website. The project includes comprehensive end-to-end testing with Cypress and automated deployment workflows.

## Testing Framework

### Cypress E2E Testing

The project uses Cypress for end-to-end testing with the following test suites:

#### Core Functionality Tests
- **Navigation Tests** (`01-navigation.cy.ts`) - Menu navigation, routing, and page accessibility
- **Home Page Tests** (`02-home-page.cy.ts`) - Landing page functionality and content
- **Events Page Tests** (`03-events-page.cy.ts`) - Event listings, filtering, and details
- **About Page Tests** (`04-about-page.ts`) - About section content and links
- **News Page Tests** (`05-news-page.cy.ts`) - News articles and pagination
- **Contact Page Tests** (`06-contact-page.cy.ts`) - Contact forms and information
- **Video Gallery Tests** (`07-video-gallery.cy.ts`) - Media gallery functionality
- **Membership Terms Tests** (`08-membership-terms.cy.ts`) - Terms and conditions
- **College History Tests** (`09-college-history.cy.ts`) - Historical content
- **Executive Committee Tests** (`10-exco.cy.ts`) - Committee information

#### Quality Assurance Tests
- **Responsive Design Tests** (`11-responsive-design.cy.ts`) - Mobile and tablet compatibility
- **Accessibility Tests** (`12-accessibility.cy.ts`) - WCAG compliance and screen reader support
- **Performance Tests** (`13-performance.cy.ts`) - Page load times and optimization
- **Integration Tests** (`14-integration.cy.ts`) - Cross-component functionality

### Test Configuration

#### Current Status
⚠️ **Note**: The Cypress tests are currently experiencing configuration issues related to module loading. The tests have been created but require debugging to resolve TypeScript/ES module compatibility issues.

#### Configuration Files
- `cypress.config.js` - Main Cypress configuration
- `cypress/support/commands.ts` - Custom commands and utilities
- `cypress/support/e2e.ts` - Global test setup
- `cypress/fixtures/testData.json` - Test data and mock responses

### Running Tests

```bash
# Install dependencies
pnpm install

# Run all tests (headless)
pnpm run cypress:run

# Open Cypress Test Runner
pnpm run cypress:open

# Run specific test suite
npx cypress run --spec "cypress/e2e/01-navigation.cy.ts"
```

## CI/CD Pipeline

### GitHub Actions Workflow

The project includes a comprehensive CI/CD pipeline (`.github/workflows/ci-cd.yml`) that:

#### Build and Test Job
1. **Environment Setup**
   - Runs on Ubuntu latest
   - Uses Node.js 18.x
   - Installs pnpm package manager

2. **Code Quality Checks**
   - Installs dependencies with `pnpm install`
   - Runs ESLint with `pnpm run lint`
   - Builds the project with `pnpm run build`

3. **Testing**
   - Starts development server
   - Runs Cypress tests with Chrome browser
   - Uploads test artifacts (screenshots/videos) on failure

#### Backup Creation Job
**Triggers**: Only on successful build and test completion for `main` branch

1. **Automatic Backup Branch**
   - Creates timestamped backup branch: `backup/main-YYYYMMDD-HHMMSS`
   - Pushes backup branch to repository

2. **Release Tagging**
   - Creates timestamped release tag: `release-YYYYMMDD-HHMMSS`
   - Tags the successful commit

3. **Notifications**
   - Comments on commit with success status
   - Includes backup branch and release tag information

#### Failure Handling
- Comments on failed commits with error status
- Uploads test artifacts for debugging
- Prevents backup creation on failures

### Workflow Features

#### Security
- Uses official GitHub Actions
- Minimal permissions with `GITHUB_TOKEN`
- No hardcoded secrets or credentials

#### Efficiency
- Caches Node.js dependencies
- Parallel job execution where possible
- Conditional job execution based on success/failure

#### Monitoring
- Comprehensive logging
- Artifact collection for debugging
- Automated status reporting

## Usage Instructions

### For Developers

1. **Local Testing**
   ```bash
   # Start development server
   pnpm run dev
   
   # In another terminal, run tests
   pnpm run cypress:open
   ```

2. **Before Committing**
   ```bash
   # Run linting
   pnpm run lint
   
   # Build project
   pnpm run build
   
   # Run tests (when working)
   pnpm run cypress:run
   ```

### For CI/CD

1. **Automatic Triggers**
   - Push to `main` or `develop` branches
   - Pull requests to `main` branch

2. **Manual Triggers**
   - Workflow can be triggered manually from GitHub Actions tab

3. **Monitoring**
   - Check GitHub Actions tab for workflow status
   - Review commit comments for automated feedback
   - Check backup branches in repository

## Troubleshooting

### Common Issues

1. **Cypress Configuration Errors**
   - Current module loading issues require investigation
   - May need to convert TypeScript tests to JavaScript
   - Consider updating Cypress version or configuration

2. **Build Failures**
   - Check ESLint errors
   - Verify all dependencies are installed
   - Ensure TypeScript compilation succeeds

3. **Test Failures**
   - Review Cypress screenshots and videos
   - Check if development server is running
   - Verify test data and fixtures

### Getting Help

1. **Logs and Artifacts**
   - GitHub Actions provides detailed logs
   - Failed tests upload screenshots and videos
   - Check commit comments for automated feedback

2. **Local Debugging**
   - Use `cypress open` for interactive debugging
   - Check browser developer tools
   - Review network requests and responses

## Future Improvements

1. **Testing**
   - Resolve Cypress configuration issues
   - Add visual regression testing
   - Implement API testing
   - Add performance benchmarking

2. **CI/CD**
   - Add deployment to staging/production
   - Implement blue-green deployments
   - Add security scanning
   - Include dependency vulnerability checks

3. **Monitoring**
   - Add test result reporting
   - Implement test coverage tracking
   - Set up performance monitoring
   - Add automated notifications

## Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [PNPM Documentation](https://pnpm.io/)
- [Vite Documentation](https://vitejs.dev/)