import LoginModal from "./loginModal.js";
import LoginForm from "./loginForm.js";
import loginFunction from "./API/loginfunction.js";

const loginBtn = document.querySelector('#loginButton');
console.log(loginBtn)


loginBtn.addEventListener('click', (e) => {
    console.log(e.target)

    const form = new LoginForm('Вхід');

    const confirmRegestration = async () => {
        const body = form.getValues();
        const token = await loginFunction(body)
        console.log(token)
    };

    new LoginModal(form.getFormElement(), confirmRegestration).render()
})





