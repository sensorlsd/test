// let assert = require('assert');
// let assert = require('chai').assert;


describe("Verify WebDriver University link", () => {
   it("Verify correct home page -> CONTACT US", (done) => {
       browser.setViewportSize({width: 1200, height: 800});
       browser.url('/');
       let title = browser.getTitle();
       console.log(title);
       expect(title).to.equal('WebDriverUniversity.com');
       browser.click('#contact-us');
       browser.pause(1000);
   });

   it("check that login button open the login portal page", (done) => {
       browser.url('/');
       let title = browser.getTitle();
       console.log(title);
       title.should.equal('WebDriverUniversity.com');
       browser.click('#login-portal');
       browser.pause(1000)
   });

    it('should have the right title', (done) => {
        browser.url('https://webdriver.io');
        const title = browser.getTitle();
        console.log(title)
    });
});
