describe('the test', function () {
  it('should run', function () {
    browser.url('');

    var title = browser.getTitle();

    console.log(title);
  })
})