
describe("Test that the button is clickable ince the Ajax loader comletes loading", () => {

    it("Attempt to click the button asap", (done) => {
        browser.url('/Ajax-Loader/index.html');
        browser.pause(1000);
        browser.click('#button1');
    });

    it('Attempt to click the button after 7 seconds', (done) =>
    {
        browser.url('/Ajax-Loader/index.html');
        browser.pause(7000);
        browser.click('#button1');
        browser.pause(7000);
    });

});