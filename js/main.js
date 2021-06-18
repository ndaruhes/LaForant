// NAVBAR
let navbar = document.querySelector('.navbar'),
    toggleMenu = document.querySelector('.toggle-menu'),
    menu = document.querySelector('.menu'),
    hamburger = document.querySelector('.hamburger'),
    cross = document.querySelector('.cross');

window.onscroll = function(){
    const yScroll = window.scrollY
    if(yScroll > 100){
        navbar.classList.add('fly-navbar')
    }else{
        navbar.classList.remove('fly-navbar')
    }
}

toggleMenu.onclick = function(){
    menu.classList.toggle('display-block')
    navbar.classList.toggle('navbar-active')
    hamburger.classList.toggle('display-none')
    cross.classList.toggle('display-block')
}


// FORM VALIDATION
let email = document.getElementById('email'),
    username = document.getElementById('username'),
    password = document.getElementById('password'),
    dob = document.getElementById('dob'),
    nationality = document.getElementById('nationality'),
    termCondition = document.getElementById('termCondition');

let emailFeedback = document.getElementById('email-feedback'),
    usernameFeedback = document.getElementById('username-feedback'),
    passwordFeedback = document.getElementById('password-feedback'),
    dobFeedback = document.getElementById('dob-feedback'),
    nationalityFeedback = document.getElementById('nationality-feedback'),
    termConditionFeedback = document.getElementById('termCondition-feedback');

let alertNotification = document.getElementById('alert-notification');

function showAlertError(){
    alertNotification.style.background = '#e74c3c'
    alertNotification.style.opacity = 1
    alertNotification.innerHTML = `<i class="uil uil-confused mright-1"></i> Please fill in the form correctly`
    setTimeout(() => {
        alertNotification.style.opacity = 0
    }, 1500);
}

function showAlertSuccess(){
    alertNotification.style.background = '#2ecc71'
    alertNotification.style.opacity = 1
    alertNotification.innerHTML = `<i class="uil uil-grin mright-1"></i> Succesfully register`
    setTimeout(() => {
        alertNotification.style.opacity = 0
    }, 1500);
}

function validateEmail(){
    let emailVal = email.value,
        at = emailVal.indexOf("@"),
        dot = emailVal.lastIndexOf(".");

    if(email.value == ''){
        emailFeedback.innerText = 'email is required'
        return false
    }else if (at < 1 || ( dot - at < 2 )) {
        emailFeedback.innerText = 'please enter correct email'
        return false;
    }else if(email.value.length < 5){
        emailFeedback.innerText = 'email min 5 character'
        return false
    }
    return true    
}

function validateUsername(){
    if(username.value == ''){
        usernameFeedback.innerText = 'username is required'
        return false
    }else if(username.value.length < 5){
        usernameFeedback.innerText = 'username min 5 character'
        return false
    }else if(username.value.length > 20){
        usernameFeedback.innerText = 'username max 20 character'
        return false
    }

    return true
}

function validatePassword(){
    if(password.value == ''){
        passwordFeedback.innerText = 'password is required'
        return false
    }else if(password.value.length < 5){
        passwordFeedback.innerText = 'password min 5 character'
        return false
    }else if(password.value.length > 25){
        passwordFeedback.innerText = 'password max 20 character'
        return false
    }

    return true
}

function validateDOB(){
    if(!dob.value){
        dobFeedback.innerText = 'date of birth is invalid'
        return false
    }

    return true
}

function validateNationality(){
    if(nationality.value == ''){
        nationalityFeedback.innerText = 'nationality is required'
        return false
    }else if(nationality.value.length < 5){
        nationalityFeedback.innerText = 'nationality min 5 character'
        return false
    }else if(nationality.value.length > 20){
        nationalityFeedback.innerText = 'nationality max 20 character'
        return false
    }else if(nationality.value[0] != nationality.value[0].toUpperCase()){
        nationalityFeedback.innerText = 'first letter word must a capital letter'
        return false
    }

    return true
}

function validateTermCondition(){
    if(!termCondition.checked){
        termConditionFeedback.innerText = '*required'
        return false
    }

    return true
}

function validate(){
    emailFeedback.innerText = ''
    usernameFeedback.innerText = ''
    passwordFeedback.innerText = ''
    dobFeedback.innerText = ''
    nationalityFeedback.innerText = ''
    termConditionFeedback.innerText = ''

    validateEmail()
    validateUsername()
    validatePassword()
    validateDOB()
    validateNationality()
    validateTermCondition()

    if(!validateEmail() || !validateUsername() || !validatePassword() || !validateDOB() || !validateNationality() || !validateTermCondition()){
        showAlertError()
    }else{
        showAlertSuccess()
    }
}

let preRegisterForm = document.getElementById('preRegisterForm')
preRegisterForm.onsubmit = (e) => {
    e.preventDefault();
    validate()
}