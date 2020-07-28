# aspire-auto-framework
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/luckhiem/aspire-automation-framework/blob/master/LICENSE) [![Actions Status](https://github.com/luckhiem/aspire-automation-framework/workflows/Automation%20Test/badge.svg)](https://github.com/luckhiem/aspire-automation-framework/actions)
## Introduction
This repository is used for executing automation test by using WebdriverIO, it's next-gen browser and mobile automation test framework for Node.j, WebDriverIO also is a custom implementation of Selenium's WebDriver API, provides and easy to manage API and a lot of syntactical sugar on top of the WebDriver specification. You can use WebdriverIO as a standalone package or via a testrunner using @wdio/cli. WebdriverIO allows to run tests locally using the WebDriver or Chrome DevTools protocol. WebDriverIO framework is being widely used by the testing community to perform automation testing on both web applications and native mobile applications. The tests performed on WebdriverIO are simple and concise. Also, you can control browsers with just a few lines of code. All these reasons have made testers adopt WebDriverIO to fulfill their browser testing needs

## Version
1.0.0

## Frameworks
- WebdriverIO
- Mocha & Chai

## Features
- Page Object Model
- Allure Report
- GitHub Actions

## Requirements
- Node version 10 or higher

## Setup
```
$ mkdir auto-test
$ cd auto-test
$ git clone https://github.com/luckhiem/aspire-automation-framework.git
$ cd aspire-auto-framework
$ npm install
```

## Run Test
1. At ./src/environment.json
```
Config domain
```
2. Run web automation test
```
$ npm run test
```
## Report
After executing test, run comand to generate html report
```
$ npm run generate-reports
``` 
## About CI
The framework using Github Actions for running CI. Github Actions enables to create custom software development lifecycle workflows directly in Github repository. These workflows are made out of different tasks so-called actions that can be run automatically on certain events. In this project, the workflow trigger run by event push in master branch
- [Workflow](https://github.com/luckhiem/aspire-automation-framework/actions)


# Framework structure
The framework base on WebdriverIO & Mocha
```
├── .github/workflows                // folder contains workflow to run CI by Github Actions     
├── resource                         // folder contains data for framework (json, excel, csv, png ...)        
├── src
│   ├── common                       // folder includes common funcions/ultilities that can used in all project
│   ├── enity                        // folder includes file define entity model project
│   ├── pages
│   │   ├── auth                     // folder contains page object for using automate authentication page
│   │   ├── business_details         // folder contains page object for using automate business detail page
│   │   ├── identify_details         // folder contains page object for using automate identify details page
│   │   ├── incorporate_selector     // folder contains page object for using automate incorporate selector page
│   │   ├── otp                      // folder contains page object for using automate otp page
│   │   ├── personal_details         // folder contains page object for using automate personal detail page
│   │   └── PageFactory.js           // file contains all page object for using automate
│   |── test_scripts                 // folder includes test script for web automation
│   |── utils                        // folder includes common funcions/ultilities that can used in all project
│   |── config.js                    // file includes all config that can used in the project
│   |── environment.json             // file includes the information to using for this project (domain, admin...)
│── package.json                     // file to manage all dependencies to using in this project
│── test-web.conf.js                 // config file to execute test in web
│── test-ci.conf.js                  // config file to execute test in CI
```
