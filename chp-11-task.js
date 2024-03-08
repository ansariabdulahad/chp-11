let errorIcon = 'fa-solid fa-circle-exclamation';
let successIcon = 'fa-solid fa-circle-check';
let animation = 'animate__animated animate__rubberBand';
let nameTag = document.querySelector('.name-el');
let mobileTag = document.querySelector('.mobile-el');
let emailTag = document.querySelector('.email-el');
let passwordTag = document.querySelector('.password-el');
let addressTag = document.querySelector('.address-el');
let button = document.querySelector('button');
let allInputs = document.querySelectorAll('input');
let pTag = document.querySelector('p');

let nameEl = allInputs[0];
let mobileEl = allInputs[1];
let emailEl = allInputs[2];
let passwordEl = allInputs[3];
let addressEl = allInputs[4];

let iTag = document.createElement('i');

// Name validation
const nameValidation = () => {
    nameEl.value === ""
        ? nameEl.style.border = '3px solid red'
        : nameEl.style.border = '3px solid green';

    nameEl.value === ""
        ? nameEl.className = animation
        : nameEl.className = "";

    nameEl.value === ""
        ? iTag.className = errorIcon + " error"
        : iTag.className = successIcon + " success";

    nameEl.value === ""
        ? nameTag.append(iTag)
        : nameTag.append(iTag)
}

nameEl.onblur = () => {
    nameValidation();
}

// Mobile validation
const mobileValidation = () => {
    mobileEl.value === ""
        ? mobileEl.style.border = '3px solid red'
        : mobileEl.style.border = '3px solid green';

    mobileEl.value === ""
        ? mobileEl.className = animation
        : mobileEl.className = "";

    mobileEl.value === ""
        ? iTag.className = errorIcon + " error"
        : iTag.className = successIcon + " success";

    mobileEl.value === ""
        ? mobileTag.append(iTag)
        : mobileTag.append(iTag)
}

mobileEl.onblur = () => {
    mobileValidation();
}

// Email validation
const emailValidation = () => {
    emailEl.value === ""
        ? emailEl.style.border = '3px solid red'
        : emailEl.style.border = '3px solid green';

    emailEl.value === ""
        ? emailEl.className = animation
        : emailEl.className = "";

    emailEl.value === ""
        ? iTag.className = errorIcon + " error"
        : iTag.className = successIcon + " success";

    emailEl.value === ""
        ? emailTag.append(iTag)
        : emailTag.append(iTag);
}

emailEl.onblur = () => {
    emailValidation();
}

// Password validation
const passwordValidation = () => {
    passwordEl.value === ""
        ? passwordEl.style.border = '3px solid red'
        : passwordEl.style.border = '3px solid green';

    passwordEl.value === ""
        ? passwordEl.className = animation
        : passwordEl.className = "";

    passwordEl.value === ""
        ? iTag.className = errorIcon + " error"
        : iTag.className = successIcon + " success";

    passwordEl.value === ""
        ? passwordTag.append(iTag)
        : passwordTag.append(iTag);
}

passwordEl.onblur = () => {
    passwordValidation();
}

// Address validation
const addressValidation = () => {
    addressEl.value === ""
        ? addressEl.style.border = '3px solid red'
        : addressEl.style.border = '3px solid green';

    addressEl.value === ""
        ? addressEl.className = animation
        : addressEl.className = "";

    addressEl.value === ""
        ? iTag.className = errorIcon + " error"
        : iTag.className = successIcon + " success";

    addressEl.value === ""
        ? addressTag.append(iTag)
        : addressTag.append(iTag);
}

addressEl.onblur = () => {
    addressValidation();
}

const formValidation = () => {
    nameValidation();
    mobileValidation();
    emailValidation();
    passwordValidation();
    addressValidation();
}

button.onclick = (e) => {
    e.preventDefault();
    formValidation();

    nameEl.value === "" ? pTag.innerText = "VALIDATION FAILED !" : pTag.innerText = "VALIDATION SUCCESS !";
    mobileEl.value === "" ? pTag.innerText = "VALIDATION FAILED !" : pTag.innerText = "VALIDATION SUCCESS !";
    emailEl.value === "" ? pTag.innerText = "VALIDATION FAILED !" : pTag.innerText = "VALIDATION SUCCESS !";
    passwordEl.value === "" ? pTag.innerText = "VALIDATION FAILED !" : pTag.innerText = "VALIDATION SUCCESS !";
    addressEl.value === "" ? pTag.innerText = "VALIDATION FAILED !" : pTag.innerText = "VALIDATION SUCCESS !";

    nameEl.value === "" ? pTag.className = "failed-msg" : pTag.className = "success-msg";
    mobileEl.value === "" ? pTag.className = "failed-msg" : pTag.className = "success-msg";
    emailEl.value === "" ? pTag.className = "failed-msg" : pTag.className = "success-msg";
    passwordEl.value === "" ? pTag.className = "failed-msg" : pTag.className = "success-msg";
    addressEl.value === "" ? pTag.className = "failed-msg" : pTag.className = "success-msg";

    // nameEl.value === "" &&
    //     mobileEl.value === "" &&
    //     emailEl.value === "" &&
    //     passwordEl.value === "" &&
    //     addressEl.value === ""
    //     ? pTag.innerText = "VALIDATION FAILED !"
    //     : pTag.innerText = "VALIDATION SUCCESS !"

    // nameEl.value === "" &&
    //     mobileEl.value === "" &&
    //     emailEl.value === "" &&
    //     passwordEl.value === "" &&
    //     addressEl.value === ""
    //     ? pTag.className = "failed-msg"
    //     : pTag.className = "success-msg"
}