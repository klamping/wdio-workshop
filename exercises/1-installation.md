# Installation and Setup

## Links

- [Sauce Labs](https://saucelabs.com/)
- [Cloud 9 IDE](https://c9.io)
- [wdio-workshop repo](https://github.com/klamping/wdio-workshop)
- [Storing cloud Selenium credentials in WebdriverIO (video)](https://www.youtube.com/watch?v=DiaFdOtUoo8)
- [Sauce Labs Integration (video)](https://www.youtube.com/watch?v=suJGTIuPtlI&t=10m9s)

## Exercise

[] Create sauce labs account (and c9 if preferred)

[] Clone wdio-workshop repo

[] Install webdriverio

[] Set up webdriverio config

[] Run pre-written tests via sauce labs and review results

## Hints

**Clone wdio-workshop repo:**

`git clone https://github.com/klamping/wdio-workshop.git`

**Install WebdriverIO:**

`npm install --save-dev webdriverio`

**WebdriverIO Command:**

`./node_modules/.bin/wdio`

**Config Responses:**

- Where do you want to execute your tests? **In the cloud using Sauce Labs, Browserstack or Testingbot**
- Environment variable for username **SAUCE_USERNAME**
- Environment variable for access key **SAUCE_ACCESS_KEY**
- Which framework do you want to use? **mocha**
- Shall I install the framework adapter for you? **Yes**
- Where are your test specs located? **./test/**/*.js**
- Which reporter do you want to use?  **spec - https://github.com/webdriverio/wdio-spec-reporter**
- Shall I install the reporter library for you? **Yes**
- Do you want to add a service to your test setup?  **sauce - https://github.com/webdriverio/wdio-sauce-service**
- Shall I install the services for you? **Yes**
- Level of logging verbosity **silent**
- In which directory should screenshots gets saved if a command fails? **./errorShots/**
- What is the base url? **http://kevinlamping.com/webdriverio-course-content**

**Environment Variables**

```
export SAUCE_USERNAME="username"
export SAUCE_ACCESS_KEY="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
```
