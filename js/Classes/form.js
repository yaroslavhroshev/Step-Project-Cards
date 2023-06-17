export default class Form {
    constructor(title) {
        this.title = title;
        this.form = document.createElement('form');
        this.formTitle = document.createElement('h2');
    }

    createElement() {
        this.formTitle.classList.add('modal-title');
        this.formTitle.innerText = this.title;
        this.form.append(this.formTitle)
    }

    getValues() {
        const inputs = this.form.querySelectorAll('input');
        const body = {};

        inputs.forEach(input => {
            body[input.name] = input.value;
        })

        return body
    }

    getFormElement() {
        this.createElement();
        return this.form
    }

    render() {
        this.createElement();
    }
}

