# Mocha, Chai and Assertions

## Links

- [Mocha](https://mochajs.org/)
- [Chai](http://chaijs.com/)
- [Chai BDD API](http://chaijs.com/api/bdd/)

## Exercise (click item for solution)

<details>
  <summary><b>Rename existing describe/it blocks</b></summary><p>

  ```
    describe('Homepage', function () {
        it('should have the correct title', function () {

        })
    })
  ```

</details>


<details>
  <summary><b>Install & require chai/expect</b></summary>

    npm install --save-dev chai

```js
var expect = require('chai').expect;
```

</details>

<details>
  <summary><b>Assert title is 'Robot Parts Emporium'</b></summary>


```js
expect(title).to.equal('Robot Parts Emporium')
```


</details>

<details>
  <summary><b>Add new 'it' block</b></summary>

```js
it('should contain the correct url', function () {

})
```

</details>

<details>
  <summary><b>Use 'contains' to assert url contains value '/webdriverio-course-content/'</b></summary>

```js
it('should contain the correct url', function () {
    browser.url('/');

    var url = browser.getUrl();
    expect(url).to.contain('/webdriverio-course-content/');
})
```
</details>

---

**[Next Exercise](./3-commands.md)** :fast_forward: