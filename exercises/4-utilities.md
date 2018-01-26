# Utility Commands

## Links

- [Elements as First Class Citizen](http://webdriver.io/api.html#Element-as-first-class-citizen)
- [$ & $$ Commands (video)](https://www.youtube.com/watch?v=k6FFwurWhf0&t=2m25s)
- [Element State Commands (video)](https://www.youtube.com/watch?v=wKfBWz0QyHI)
- [Page Object Pattern](http://webdriver.io/guide/testrunner/pageobjects.html)  (optional)
- [Page Objects (video)](https://www.youtube.com/watch?v=dxXBykTF5HY) (optional)
- [Yet another Page Objects video](https://www.youtube.com/watch?v=4_ZIaWhQ6Uk) (optional)

## Exercise (click item for solution)


<details>
  <summary><b>Replace existing `browser.click` commands (and similar commands) with the `$` utility</b></summary>

```js
var shopCTA = $('a=See our Vast Robot Selection');
shopCTA.click();
```

```js
it('should allow you to purchase a robot', function () {\
    $('#qty').setValue(5);

    var cartBtn = $('#buyNowButton');

    cartBtn.click();

    var buttonText = cartBtn.getText();
    expect(buttonText).to.equal('Purchasing...');
})
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
    var cartBtn = $('#buyNowButton');

    cartQty.setValue(5);

    cartBtn.click();

    var confirmationMsg = $('.callout*=Thank you human');

    confirmationMsg.waitForExist();

    // verify it has proper qty and type
    var confirmationText = browser.getText('.callout*=Thank you human');
    expect(confirmationText).to.contain("5 T-800 Model 101");
})
```
</details>

<details>
  <summary><b>Create a test confirming that the success message disappears after clicking the `x` button</b></summary>


```js 
it('should hide thank you message after clicking close button', function () {
    var cartQty = $('#qty');
    var cartBtn = $('#buyNowButton');

    cartQty.setValue(5);

    cartBtn.click();

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
