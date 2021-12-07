import 'normalize.css'
import './scss/style.scss'

const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');
const checkbox = document.querySelector('input[type="checkbox"]');
const button = document.querySelector('.authorization__button');

button.addEventListener('click', function(e) {
    for (let input of [email, password, checkbox]) {
        errReset(input);

        if (input.value === '' || (input.type === 'checkbox' && !input.checked)) {
            invalid(input);
            addErrorDescription(input, 'Поле обязательно для заполнения');
        } else if (input.type === 'email' && !validateEmail(input.value)) {
            invalid(input);
            addErrorDescription(input, 'Email невалидный');
        } else if (input.type === 'password' && input.value.length < 8) {
            invalid(input);
            addErrorDescription(input, 'Пароль должен содержать как минимум 8 символов');
        } else {
            if (input.type !== 'checkbox') obj[input.type] = input.value;
        }
    }
    e.preventDefault();
});

function invalid(input) {
    if (input.type === 'checkbox') {
        input.nextElementSibling.classList.add('checkbox__label--err');
    } else {
        input.style.borderColor = '#CB2424';
        input.previousElementSibling.style.color = '#CB2424';
    }
}

function errReset(input) {
    let errDesc = input.parentElement.querySelector('.error-description');
    if (errDesc !== null) errDesc.remove();

    if (input.type === 'checkbox') {
        input.nextElementSibling.classList.remove('checkbox__label--err');
    } else {
        input.style.borderColor = '#787878';
        input.previousElementSibling.style.color = '#787878';
    }
}

function addErrorDescription(input, desc) {
    let err = document.createElement('p');
    err.classList.add('error-description');
    err.innerText = desc;
    input.parentElement.appendChild(err);
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
