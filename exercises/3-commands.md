# Common Commands 

## Links

- [Selectors in WebdriverIO](http://webdriver.io/guide/usage/selectors.html)
Click command
- [Building and testing selectors](http://yizeng.me/2014/03/23/evaluate-and-validate-xpath-css-selectors-in-chrome-developer-tools/)
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
it('should link to the product page', function () {
    browser.url('/');

    browser.click('button=See our Vast Robot Selection');
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
  <summary><b>Create a new file to validate the product page</b></summary>

```js
describe('Product Page', function () {

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
  <summary><b>Use `url`, `setValue` and `submitForm` to buy a robot</b></summary>

```js
it('should allow you to purchase a robot', function () {
    browser.url('/product-page.html');

    browser.setValue('#qty', '5');

    browser.submitForm('#qty');
})
```
</details>
 
<details>
  <summary><b>Confirm the button text changes</b></summary>

```js
expect(browser.getText('#buyNowButton')).to.equal('Purchasing...');
```
</details>

---

**[Next Exercise](./4-utilities.md)** :fast_forward: