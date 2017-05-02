# Debug & Pause

## Links

- [Setting Timeouts in Mocha Tests](https://mochajs.org/#timeouts)
- [Setting Timeouts in WebdriverIO](http://webdriver.io/guide/testrunner/timeouts.html)
- [Pause Command](http://webdriver.io/api/utility/pause.html)
- [The WebdriverIO Debug Command (video)](https://www.youtube.com/watch?v=xWwP-3B_YyE)
- [Debugging](http://webdriver.io/guide/testrunner/debugging.html)
- [REPL](http://webdriver.io/guide/usage/repl.html)

## Exercise (click item for solution)

<details>
  <summary><b>Use `pause` to confirm that carousel rotates on homepage after four seconds</b> (hint: use `getAttribute('class')` command)</summary>

```js
// test/basic.js
it('should rotate the banner image after four seconds', function () {
    this.timeout(15000);

    browser.url('');

    var firstActiveImage = $('.orbit-container .is-active');

    browser.pause(4000);

    expect(firstActiveImage.getAttribute('class')).to.not.contain('.is-active');
})
```
</details>

<details>
  <summary><b>use 'debug' to run commands from inside the test run</b></summary>

In test file:

```js
    browser.debug();
```

When running `wdio` test command:

```sh
./node_modules/.bin/wdio --mochaOpts.timeout=999999
```
</details>

---

**[Next Exercise](./6-next-steps.md)** :fast_forward: