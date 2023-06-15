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

    render() {
        this.createElement();
    }
}

