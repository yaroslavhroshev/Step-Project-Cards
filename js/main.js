import LoginModal from "./Classes/loginModal.js";
import LoginForm from "./Classes/loginForm.js";
import loginFunction from "./API/loginfunction.js";
import checkLoginToken from "./Functions/checkLoginToken.js";
import CreateVisitForm from "./Classes/CreateVisitForm.js";

const loginBtn = document.querySelector('#loginButton');

checkLoginToken()

loginBtn.addEventListener('click', (e) => {

    const form = new LoginForm('Вхід');

    const confirmRegestration = async (closerCallbackFromModal) => {
        const body = form.getValues();
        const { data } = await loginFunction(body)
        localStorage.setItem('TOKEN', data)
        closerCallbackFromModal()
        checkLoginToken()
    };

    new LoginModal(form.getFormElement(), confirmRegestration).render()
})

const addVisit = document.querySelector('#addVisitButton');

console.log(addVisit);

addVisit.addEventListener('click', () => {

    const form = new CreateVisitForm("Створити візит");

    const confirmRegestration = async (closerCallbackFromModal) => {

        const checkOptions = (optionValue, f) => {



        }

        // const body = form.getValues();
        // const { data } = await loginFunction(body)
        // localStorage.setItem('TOKEN', data)
        closerCallbackFromModal()
        // checkLoginToken()
    };

    new LoginModal(form.getFormElement(), confirmRegestration).render()

})




