# Installation and Setup

## Links

- [Sauce Labs](https://saucelabs.com/)
- [Cloud 9 IDE](https://c9.io)
- [wdio-workshop repo](https://github.com/klamping/wdio-workshop)
- [Storing cloud Selenium credentials in WebdriverIO (video)](https://www.youtube.com/watch?v=DiaFdOtUoo8)
- [Sauce Labs Integration (video)](https://www.youtube.com/watch?v=suJGTIuPtlI&t=10m9s)


## Exercise (click item for solution)

<details>
  <summary><b>Create sauce labs account (and Cloud 9 if preferred)</b></summary>

- [Sauce Labs Free Trial](https://saucelabs.com/signup/trial)
- [Cloud 9](https://c9.io)

</details>

<details>
  <summary><b>Clone wdio-workshop repo</b></summary>

    https://github.com/klamping/wdio-workshop.git

</details>

<details>
  <summary><b>Install webdriverio</b></summary>

    npm install --save-dev webdriverio

</details>

<details>
  <summary><b>Set up webdriverio config</b></summary>

    ./node_modules/.bin/wdio

**Config Responses:**

- Where do you want to execute your tests? **In the cloud using Sauce Labs, Browserstack or Testingbot**
- Environment variable for username **SAUCE_USERNAME**
- Environment variable for access key **SAUCE_ACCESS_KEY**
- Which framework do you want to use? **mocha**
- Shall I install the framework adapter for you? **Yes**
- Where are your test specs located? **./test/\*\*/*.js**
- Which reporter do you want to use?  **spec - https://github.com/webdriverio/wdio-spec-reporter**
- Shall I install the reporter library for you? **Yes**
- Do you want to add a service to your test setup?  **sauce - https://github.com/webdriverio/wdio-sauce-service**
- Shall I install the services for you? **Yes**
- Level of logging verbosity **silent**
- In which directory should screenshots gets saved if a command fails? **./errorShots/**
- What is the base url? **http://kevinlamping.com/webdriverio-course-content/** 

</details>

<details>
  <summary><b>Add Sauce Labs credentials to environment variables</b></summary>

- [Sauce Labs access key](https://saucelabs.com/beta/user-settings)

In `.bashrc` file:

```sh
export SAUCE_USERNAME="username"
export SAUCE_ACCESS_KEY="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
```

</details>

<details>
  <summary><b>Run pre-written tests via sauce labs and review results</b></summary>

    ./node_modules/.bin/wdio

</details>

---

## Timeout of 10000ms exceeded

If you're running in to issues with an error message of 'Timeout of 10000ms exceeded.', increase the test timeout setting by opening your `wdio.conf.js` file, navigating to the `mochaOpts` object, and adding `timeout: 30000` to it. 

For example:

```js
// wdio.conf.js
exports.config = {
    // ...
    mochaOpts: {
        ui: 'bdd',
        timeout: 30000
    },
    // ...
}
```

---

**[Next Exercise](./2-assertions.md)** :fast_forward: