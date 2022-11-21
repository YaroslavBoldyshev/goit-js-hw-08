import throttle from "lodash.throttle";
const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]')
const message = document.querySelector('[name="message"]')

if (localStorage.length != 0) {
    if (JSON.parse(localStorage.getItem("feedback-form-state")).emailValue !== "") {
        email.value = JSON.parse(localStorage.getItem("feedback-form-state")).emailValue;
    }
    if (JSON.parse(localStorage.getItem("feedback-form-state")).messageValue !== "") {
        message.value = JSON.parse(localStorage.getItem("feedback-form-state")).messageValue;
    }
}
form.addEventListener('input', throttle(() => {
    const emailValue = email.value;
    const messageValue = message.value;
    const obj = {emailValue, messageValue}
    localStorage.setItem("feedback-form-state", JSON.stringify(obj));
}, 500))
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    localStorage.clear();
    email.value = '';
    message.value = '';
})