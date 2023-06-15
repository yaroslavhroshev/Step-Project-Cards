import LoginModal from "./loginModal.js";
import LoginForm from "./loginForm.js";

const loginBtn = document.querySelector('#loginButton');
console.log(loginBtn)

console.log(new LoginForm('Вхід').render())



loginBtn.addEventListener('click', (e) => {
    console.log(e.target)

    const form = new LoginForm('Вхід');

    new LoginModal(form.render()).render()
})





