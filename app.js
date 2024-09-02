
let eyes = document.getElementById('eye');
let passwordInput = document.getElementById('pass');

// LOGIN CONTAINER AND SIGN UP CONTAINER SHOW / HIDDEM
let registerBtn = document.getElementById('register-btn-a');
let loginBtn = document.getElementById('login-btn-a');
let loginContainer = document.getElementById('login-container');
let signUpContainer = document.getElementById('sign-up-container');

loginBtn.addEventListener('click',() => {
   loginContainer.style.display = 'block'
   signUpContainer.style.display = 'none'
})

registerBtn.addEventListener('click',() => {
     loginContainer.style.display = 'none'
   signUpContainer.style.display = 'block'
})

eyes.addEventListener('click',() => {
    if(passwordInput.type === 'password'){
        passwordInput.type = 'text'
        eyes.setAttribute('name','eye')
    }
    else{
        passwordInput.type = 'password'
        eyes.setAttribute('name','eye-off')
    }
})


//! ANIMATION AOS
AOS.init({
    startEvent: 'DOMContentLoaded',
    duration: 1500,
    easing: 'ease',
});