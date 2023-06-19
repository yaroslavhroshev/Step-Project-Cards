import Form from "./form.js";


export default class LoginForm extends Form {
    constructor(title) {
        super(title);
    }

    createElement() {
        super.createElement()
        const inputs = `
            <input class="modal-input" type="email" name="email" placeholder="Електронна пошта" />
            <input class="modal-input" type="password" name="password" placeholder="Пароль" />
        `
        this.form.insertAdjacentHTML('beforeend', inputs);
    }
}

