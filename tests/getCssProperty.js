describe("CRY", () => {
    it('Output css propertyes', (done) => {

        browser.url('./');
        browser.pause(2000);
        let divCaro = browser.getCssProperty('#udemy-promo-thumbnail', 'height');
        console.log(divCaro);
    });
});