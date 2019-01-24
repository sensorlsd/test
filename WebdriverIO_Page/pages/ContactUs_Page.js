class ContactUs_Page {

   get firstName() {
       return $( "[name='first_name']");
   }
   get lastName() {
       return $("[name='last_name']");
   }
   get emailAddress() {
       return $("[name='email']");
   }
   get comments() {
       return $("textarea");
   }
   get successfulSubmission() {
       return $("#contact_reply h1");
   }
   get unsuccessfulSubmission() {
       return $("body");
   }
   get submitButton() {
       return $("[type='submit']");
   }
}

module.exports = new ContactUs_Page();