# QA Automation Framework

A comprehensive test automation framework for web application testing using Playwright and TypeScript.

## Features

- Page Object Model (POM) design pattern
- TypeScript for type safety
- Built-in HTML reports
- Cross-browser testing (Chromium, Firefox, WebKit)
- Parallel test execution
- Screenshot and video recording on failure
- Configurable test environments

## Tech Stack

- **TypeScript** - Type-safe JavaScript
- **Playwright** - Modern browser automation
- **Playwright Test** - Built-in test runner
- **Allure** - Advanced reporting

## Project Structure

```
qa-automation-framework/
├── tests/                  # Test cases
├── pages/                  # Page Object Models
├── utils/                  # Utility functions
├── config/                 # Configuration files
├── test-data/             # Test data files
├── playwright-report/     # Test reports
└── package.json           # Dependencies
```

## Setup Instructions

1. Clone the repository:
```bash
git clone <your-repo-url>
cd qa-automation-framework
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

4. Run tests:
```bash
npm test
```

## Running Tests

Run all tests:
```bash
npm test
```

Run specific test file:
```bash
npx playwright test tests/login.spec.ts
```

Run tests in headed mode:
```bash
npm run test:headed
```

Run tests in specific browser:
```bash
npx playwright test --project=chromium
```

View HTML report:
```bash
npm run report
```

## Configuration

Update `playwright.config.ts` for test configuration and environment settings.

## CI/CD Integration

This project includes GitHub Actions workflow for automated testing on every push and pull request.

## Test Coverage

- Login functionality (valid/invalid credentials, locked users)
- Product listing and display
- Shopping cart operations
- Cross-browser compatibility

## Contributing

Feel free to submit issues and enhancement requests!
