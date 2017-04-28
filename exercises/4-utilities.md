# Utility Commands

## Links

- [Elements as First Citizen](http://webdriver.io/api.html#Element-as-first-citizen)
- [Page Object Pattern](http://webdriver.io/guide/testrunner/pageobjects.html)  (optional)

## Exercise (click item for solution)


<details>
  <summary><b>Replace existing `browser.click` commands (and similar commands) with the `$` utility</b></summary>

```js
var shopCTA = $('button=See our Vast Robot Selection');
shopCTA.click();
```

```js
var cartQty = $('#qty');

cartQty.setValue(5);

cartQty.submitForm();
```
</details>

<details>
  <summary><b>Create a test that asserts you can only order after setting a quantity</b></summary>

```js
  it('should only let you buy after setting a quantity', function () {
    var cartBtn = $('#buyNowButton');
    var cartQty = $('#qty');

    expect(cartBtn.isEnabled()).to.be.false;

    // Add qty
    cartQty.setValue(5);

    expect(cartBtn.isEnabled()).to.be.true;
  });
```
</details>

<details>
  <summary><b>Create a test validating that the success message appears with the proper order type and amount</b></summary>

```js 
it('should show a success message with correct order', function () {
    var cartQty = $('#qty');

    cartQty.setValue(5);

    cartQty.submitForm();

    var confirmationMsg = $('.callout*=Thank you human');

    confirmationMsg.waitForExist();

    // verify is has proper qty and type
    var confirmationText = confirmationMsg.getText();
    expect(confirmationText).to.contain("5 T-800 Model 101");
})
```
</details>

<details>
  <summary><b>Create a test confirming that the success message disappears after clicking the `x` button</b></summary>


```js 
it('should hide thank you message after clicking close button', function () {
    var cartQty = $('#qty');

    cartQty.setValue(5);

    cartQty.submitForm();

    var confirmationMsg = $('.callout*=Thank you human');

    confirmationMsg.waitForExist();

    // Click close button
    $(".close-button").click();

    // use "reverse" flag to wait for it to disappear
    confirmationMsg.waitForVisible(null, true);

    expect(confirmationMsg.isVisible()).to.be.false;
})
```
</details>


---

**[Next Exercise](./5-debug.md)** :fast_forward: