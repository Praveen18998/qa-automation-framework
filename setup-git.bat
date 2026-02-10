@echo off
echo Setting up Git repository...

git init
git add README.md .gitignore
git commit -m "Initial commit: Add project documentation and gitignore"

git add package.json tsconfig.json playwright.config.ts
git commit -m "Add project configuration and dependencies"

git add pages/
git commit -m "Implement Page Object Model pattern with BasePage, LoginPage, and ProductsPage"

git add utils/
git commit -m "Add utility helpers and test data"

git add tests/
git commit -m "Add comprehensive test suites for login and products functionality"

git remote add origin https://github.com/Praveen18998/qa-automation-framework.git
git branch -M main
git push -u origin main

echo.
echo Done! Your code is now on GitHub.
pause
