let ContactUs_Page = require('WebdriverIO_Page/pages/ContactUs_Page.js');
let request = require('sync-request');
let except = require('chai').expect;

beforeEach(() => {
    browser.url('/Contact-Us/contactus.html')
});

describe('Test Contact Ua from WebdriverUni', () => {

    let res = request('GET', 'http://jsonplaceholder.typicode.com/posts/1/comments');
    let contactUsDetails = JSON.parse(res.getBody().toString('utf8'));


    function setFirstName(firstName) {
        return browser.setValue(firstNameSelector, firstName);
    }

    function setLastName(lastName) {
        return browser.setValue(lastNameSelector, lastName);
    }

    function setEmailAddress(emailAddress) {
        return browser.setValue(emailAddressSelector, emailAddress);
    }

    function setComments(comments) {
        return browser.setValue(commentsSelector, comments);
    }

    function clickSubmitButton() {
        return browser.click(submitButtonSelector);
    }

    function confirmSuccessfulSubmission() {
        console.log(browser.getText(successfulSubmissionSelector));
        let validateSubmissionHeader = browser.waitUntil(() => {
            return browser.getText(successfulSubmissionSelector) === 'Thank You for your Message!';
        }, 5000);
        // expect(validateSubmissionHeader, 'Successful Submission Message not Exist').to.be.true;
    }

    function confirmUnsuccessfulSubmission() {
        let validateSubmissionHeader = browser.waitUntil(() => {
            return browser.getText(unsuccessfulSubmissionSelector) === 'Error: all fields are required'
        }, 5000);
        // expect(browser.getText(validateSubmissionHeader)).to.include('Error: all fields are required');
    }



// contactUsDetails.forEach((contactDetail) => {
   it('should be able to submit a successful submission via contact us form', (done) => {
       setFirstName('joe');
       setLastName('Blogs');
       // setEmailAddress(contactDetail.email);
       // setComments(contactDetail.body);
       setEmailAddress('joe_blogs@mail.com');
       setComments("Hello my dear autotest, I wont to show you how I work");
       clickSubmitButton();
       confirmSuccessfulSubmission();
    });
// });

    it('Should not be able to submit a successful submission via contact us form as all fields are required', (done) => {
        setFirstName('Mike');
        setLastName('Woods');
        setEmailAddress('mike_wood@mail.com');
        clickSubmitButton();
        confirmUnsuccessfulSubmission();
    });

    it('Should not be able to submit a successful submission via cintact us form as all fields are required', (done) => {
        setFirstName('Sarah');
        setEmailAddress("sarah_woods@mail.com");
        clickSubmitButton();
        confirmUnsuccessfulSubmission();

    });

    it('Should not be able to submit a successful submission via contact us form as all fields are required',  (done) => {
        setLastName('Jomes');
        setEmailAddress('sarah_Jomes@mail.com');
        clickSubmitButton();
        confirmUnsuccessfulSubmission();
    });
});
