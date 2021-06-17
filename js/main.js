// NAVBAR
let navbar = document.querySelector('.navbar')
let toggleMenu = document.querySelector('.toggle-menu')
let menu = document.querySelector('.menu')
let hamburger = document.querySelector('.hamburger')
let cross = document.querySelector('.cross')

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
let email = document.getElementById('email')
let username = document.getElementById('username')
let password = document.getElementById('password')
let dob = document.getElementById('dob')
let nationality = document.getElementById('nationality')
let termCondition = document.getElementById('termCondition')

let emailFeedback = document.getElementById('email-feedback')
let usernameFeedback = document.getElementById('username-feedback')
let passwordFeedback = document.getElementById('password-feedback')
let dobFeedback = document.getElementById('dob-feedback')
let nationalityFeedback = document.getElementById('nationality-feedback')
let termConditionFeedback = document.getElementById('termCondition-feedback')

function validateEmail(){
    let emailVal = email.value;
    let at = emailVal.indexOf("@");
    let dot = emailVal.lastIndexOf(".");

    if(email.value == ''){
        emailFeedback.innerText = 'email is required'
        return false
    }else if (at < 1 || ( dot - at < 2 )) {
        emailFeedback.innerText = 'please enter correct email'
        return false;
    }else if(email.value.length < 5){
        emailFeedback.innerText = 'email min 5 character'
        return false
    }else if(email.value.length > 20){
        emailFeedback.innerText = 'email max 20 character'
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
}

function validatePassword(){
    if(password.value == ''){
        passwordFeedback.innerText = 'password is required'
        return false
    }else if(password.value.length < 5){
        passwordFeedback.innerText = 'password min 5 character'
        return false
    }else if(password.value.length > 20){
        passwordFeedback.innerText = 'password max 20 character'
        return false
    }
}

function validateDOB(){
    if(!dob.value){
        dobFeedback.innerText = 'date of birth is invalid'
        return false
    }
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
    }
}

function validateTermCondition(){
    if(!termCondition.checked){
        termConditionFeedback.innerText = '*required'
        return false
    }
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
}