describe('the test', function () {
  it('should run', function () {
    browser.url('/');

    console.log(browser.getUrl());
  })
})