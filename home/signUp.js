

function createAccount(e) {
    const firstName = sanitizeHTML(document.getElementById('firstName').value);
    const lastName = sanitizeHTML(document.getElementById('lastName').value);
    const email = sanitizeHTML(document.getElementById('email').value);
    const phoneNumber = sanitizeHTML(document.getElementById('phoneNumber').value);
    const password = sanitizeHTML(document.getElementById('password').value);
    const confirmPassword = sanitizeHTML(document.getElementById('confirmPassword').value);

/*  console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(phoneNumber);
    console.log(password);
    console.log(confirmPassword); */

    passwordMatch(password, confirmPassword)

}

function passwordMatch(pW,cPW){
    const pwCheck = pW.trim();
    const cpwCheck = cPW.trim();
    console.log(pwCheck);
    console.log(cpwCheck);

    if (pwCheck != cpwCheck) {
        alert("Password doesn't match")
    } else {
        return;
    }
}

function sanitizeHTML(a) {
    var temp = document.createElement('div');
    temp.textContent = a;
    return temp.innerHTML;
}

const signUp = document.querySelector('button.createAccount');
signUp.addEventListener('click', createAccount);
