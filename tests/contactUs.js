beforeEach(() => {
    browser.url('/Contact-Us/contactus.html');
});

describe('Test Contact Us form WebdriverUni', () =>
{
    beforeEach(() => {
        console.log('Inside the describe block!');
    });


    it('Should be able to submit a successful submission via contact us form', (done) => {
        browser.setValue("//form[@id='contact_form']/input[@name='first_name']", 'Joe');
    });

    it('', () => {
    });
})