# tinypulse-auto-framework
This repository is used for executing automation test

## Version
1.0.0

## Enviroment
* NodeJS: v12.17.0
* NPM: v6.14.5

## Setup
```
$ mkdir auto-test
$ cd auto-test
$ git clone https://github.com/luckhiem/tinypulse-auto-framework.git
$ cd tinypulse-auto-framework
$ npm install
```

## Run Test
1. At ./src/environment.json
```
Config domain, admin username, admin password
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
# Framework structure
The framework base on WebdriverIO & Mocha
```
├── resource                         // folder contains data for framework (json, excel, csv, png ...)        
├── src
│   ├── common                       // folder includes common funcions/ultilities that can used in all project
│   ├── enity                        // folder includes file define entity model project
│   ├── pages
│   │   ├── admin_settings           // folder contains page object for using automate admin setting page
│   │   ├── login                    // folder contains page object for using automate admin setting page
│   │   └── PageFactory.js           // file contains all page object for using automate
│   |── test_scripts                 // folder includes test script for web automation
│   |── utils                        // folder includes common funcions/ultilities that can used in all project
│   |── config.js                    // file includes all config that can used in the project
│   |── environment.json             // file includes the information to using for this project (domain, admin...)
│── package.json                     // file to manage all dependencies to using in this project
│── wdio.conf.js                     // config file to execute test in web
```
