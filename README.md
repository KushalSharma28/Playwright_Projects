# 🎭 Playwright_Projects

A collection of projects built using the **Playwright** automation framework for end-to-end testing of web applications.

---

## 📦 Installation of Playwright

Follow the steps below to install and set up Playwright in your local environment:

### ✅ Step 1: Initialize Playwright
```bash
npm init playwright@latest
````

* This command will prompt you to select options like:

  * Scripting language: **JavaScript** or **TypeScript**
  * Testing environment setup (browsers, examples, etc.)

---

## 🚀 Running Tests

Playwright provides various ways to run your test suites. Here are some commonly used commands:

### ▶️ Run All Tests from Command Line

```bash
npx playwright test
```

### 🧪 Run Tests in UI Mode

```bash
npx playwright test --ui
```

* Provides a graphical interface to run, debug, and manage your tests.

### 🌐 Run Tests on Desktop Chrome (Chromium)

```bash
npx playwright test --project=chromium
```

### 🐞 Run Tests in Debug Mode

```bash
npx playwright test --debug
```

* Opens a debug mode to help troubleshoot failing tests.

### 📄 Run Tests in a Specific File

```bash
npx playwright test example
```

* Replace `example` with your test file name or path.

---

## 📁 Project Structure (Example)

```
Playwright_Projects/
│
├── tests/                # Contains all test cases
│   └── example.spec.ts
│
├── playwright.config.ts  # Playwright configuration file
├── package.json
└── README.md             # This file
```

---

## 📚 Resources

* [Official Playwright Docs](https://playwright.dev/docs/intro)
* [Playwright GitHub](https://github.com/microsoft/playwright)
* [Playwright Test Runner](https://playwright.dev/docs/test-intro)

---

## 🛠️ Requirements

* Node.js >= 14.x
* npm or yarn

---

## 📬 Feedback or Contributions

Feel free to fork the repo, raise issues, or submit pull requests for improvements and new test cases.

---

<!-- # Playwright_Projects
Projects made on Playwright Framework

Installation of Playwright

Step 1: npm init playwright@latest

Step 2: Select the Scripting Language Typescript or JavaScript

Step 3: Run end to end tests using command line = npx playwright test

Step 4: Run end to end tests using UI mode = npx playwright test --ui

Step 5: Runs the tests only on Desktop Chrome = npx playwright test --project=chromium 

Step 6: Runs the tests in debug mode = npx playwright test --debug

Step 7: Runs the tests in a specific file = npx playwright test example -->