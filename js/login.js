//step-1: add click evenListener with the submit button:

document.getElementById('btn-submit').addEventListener('click',function(){

// step-2: get the email address inside the email-input-field:
// always remember to use .value to get text from an input-field.

const emailField = document.getElementById('user-email');
const email = emailField.value;

/*  step-3: get password 
a. set id on the html element
b. get value from the html element
*/
const passField = document.getElementById('user-pass');
const password = passField.value;

// Danger: Do not verify email,password on the client site.
// step-4: Verify email & password:

if((email === 'mou@gmail.com') && (password === "12345")){
    window.location.href = "bank.html";
}
else{
  alert('Invalid User')
}

})