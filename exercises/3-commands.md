# Common Commands 

## Links

- [Selectors in WebdriverIO](http://webdriver.io/guide/usage/selectors.html)
- [Building and testing selectors via Chrome Dev Tools](http://yizeng.me/2014/03/23/evaluate-and-validate-xpath-css-selectors-in-chrome-developer-tools/)
- [WebdriverIO Command API Page](http://webdriver.io/api.html)

## Exercise (click item for solution)

<details>
  <summary><b>Add a new test case for validating that the 'See our Vast Robot Selection' button works</b></summary>

```js
it('should have a product page call-to-action', function () {

})
```
</details>

<details>
  <summary><b>Use `click` to click the button and navigate to the product page</b></summary>

```js
it('should have a product page call-to-action', function () {
    browser.click('a=See our Vast Robot Selection');
})
```
</details>

<details>
  <summary><b>Assert that you're now on the product page</b></summary>

```js
var url = browser.getUrl();

expect(url).to.contain('product-page.html');
```
</details>

---

<details>
  <summary><b>Create a new file to validate the product page, including the proper `describe` and `beforeEach` functions.</b></summary>

```js
var expect = require('chai').expect;

describe('Product Page', function () {
    beforeEach(function () {
        browser.url('product-page.html');
    })
})
```
</details>

<details>
  <summary><b>Create a new test case for purchasing a robot</b></summary>

```js 
it('should allow you to purchase a robot', function () {

})
```
</details>

<details>
  <summary><b>Use `setValue` and `click` to buy a robot</b></summary>

```js
it('should allow you to purchase a robot', function () {
    browser.setValue('#qty', '5');

    browser.click('#buyNowButton');
})
```
</details>
 
<details>
  <summary><b>Confirm the button text changes using `getText`</b></summary>

```js
var buttonText = browser.getText('#buyNowButton');
expect(buttonText).to.equal('Purchasing...');
```
</details>

---

**[Next Exercise](./4-utilities.md)** :fast_forward: