var {defineSupportCode} = require('cucumber');

defineSupportCode(function ({And, But, Given, Then, When}) {
    Given(/^a variable set to (.*)$/, function (callback) {
        callback.pending();
    });
});