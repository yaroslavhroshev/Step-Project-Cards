import Form from "./form.js";

export default class CreateVisitForm extends Form {
    constructor(title, changeFormFunction) {
        super(title)
        this.select = document.createElement('select');
        this.cardiologist = document.createElement('option');
        this.therapist = document.createElement('option');
        this.dentist = document.createElement('option');
        this.emptyOption = document.createElement('option');
        this.optionsWrapper = document.createElement('div');
        this.additionalOptions = document.createElement('div');

        this.visitPurpose = `<legend>Мета візиту</legend><input type="text" name="visit_purpose">`;
        this.visitDesc = `<legend>Короткий опис візиту</legend><textarea name="visit_description" id="desc" cols="20" rows="2"></textarea>`;
        this.urgency = `
        <legend>Пріорітет</legend>
        <select name="priority" id="prioritySelect">
        <option value="...">...</option>
        <option value="high">Високий</option>
        <option value="normal">Звичайний</option>
        <option value="low">Низький</option>
        </select>`;

        this.errorMessage = document.createElement('span');
        this.fullName = `<input type="text" name="fullName" placeholder="Прізвище Ім\'я По-батькові ">`;
        this.changeFormFunction = changeFormFunction;
    }

    createElement() {
        super.createElement()

        const selectLegend = document.createElement('legend');
        selectLegend.textContent = "Оберіть лікаря";
        this.errorMessage.textContent = '*Всі  поля мають бути обов\'язково заповнені';
        this.errorMessage.classList.add('create-visit-form__error-message')

        this.select.classList.add('create-visit-form__select-doctor')
        this.optionsWrapper.classList.add('create-visit-form')
        this.additionalOptions.classList.add('create-visit-form__additional-options')

        this.select.append(this.emptyOption, this.cardiologist, this.dentist, this.therapist)
        this.optionsWrapper.append(selectLegend, this.select);

        this.optionsWrapper.insertAdjacentHTML('beforeend', this.visitPurpose)
        this.optionsWrapper.insertAdjacentHTML('beforeend', this.visitDesc)
        this.optionsWrapper.insertAdjacentHTML('beforeend', this.urgency)
        this.optionsWrapper.insertAdjacentHTML('beforeend', this.fullName)

        this.optionsWrapper.append(this.additionalOptions);

        this.form.append(this.optionsWrapper, this.errorMessage)

        this.cardiologist.textContent = "Кардіолог";
        this.therapist.textContent = "Терапевт";
        this.dentist.textContent = "Стоматолог";
        this.emptyOption.textContent = "...";

        this.cardiologist.value = "cardiologist";
        this.therapist.value = "therapist";
        this.dentist.value = "dentist";

        this.select.name = 'doctor';
        this.addtListeners()

    }

    changeFormByOption(optionValue) {
        this.additionalOptions.innerHTML = "";
        const additionalElement = this.changeFormFunction(optionValue);

        if (additionalElement !== null) {
            this.additionalOptions.append(additionalElement);
            this.addtListeners()
        }
    }

    getOptionsValues() {
        this.select.addEventListener('change', e => {
            this.changeFormByOption(e.target.value)
        })
    }

    getSelectsValues(body) {
        const selects = this.form.querySelectorAll('select');
        selects.forEach(select => {
            if (select.value === "...") {
                this.errorMessage.style.display = "block";
                throw new Error('Не всі поля вводу були заповнені!')
            }
            body[select.name] = select.value
        })

        return body
    }

    addtListeners() {
        const textareas = this.form.querySelectorAll('textarea');
        textareas.forEach(textarea => {
            textarea.addEventListener('input', (event) => {

                if (event.target.value !== "") {
                    this.errorMessage.style.display = "none";
                }

            })
        })

        const selects = this.form.querySelectorAll('select');
        selects.forEach(select => {
            select.addEventListener('change', (event) => {
                if (event.target.value === "...") {
                    this.errorMessage.style.display = "block";
                    throw new Error('Не всі поля вводу були заповнені!')
                } else {
                    this.errorMessage.style.display = 'none';
                }

            })
        })

        const inputs = this.form.querySelectorAll('input');
        inputs.forEach(input => {

            input.addEventListener('input', (event) => {

                if (event.target.value !== "") {
                    this.errorMessage.style.display = "none";
                }

            })

        })
    }

    getValues() {

        this.form.querySelectorAll('input').forEach(input => {

            if (input.value === "") {
                this.errorMessage.style.display = 'block';
                throw new Error('Не всі поля вводу були заповнені!')
            }
        })

        return super.getValues()
    }

    getTextareaValues(body) {

        const textareas = this.form.querySelectorAll('textarea');
        textareas.forEach(textarea => {

            if (textarea.value === "") {
                this.errorMessage.style.display = 'block';
                throw new Error('Не всі поля вводу були заповнені!')
            }

            body[textarea.name] = textarea.value
        })

        return body
    }

    getAllUserInfo() {
        const inputs = this.getValues();
        const selects = this.getSelectsValues(inputs);
        const textareas = this.getTextareaValues(selects)
        return textareas
    }

    getFormElement() {
        this.getOptionsValues()

        return super.getFormElement()
    }


}