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

        this.visitPurpose = document.createElement('input');;
        this.visitDesc = document.createElement('textarea');
        this.urgency = document.createElement('select');
        this.fullName = document.createElement('input');

        this.priorityOptionEmptyValue = document.createElement('option');
        this.priorityOptionHigh = document.createElement('option');
        this.priorityOptionNormal = document.createElement('option');
        this.priorityOptionLow = document.createElement('option');

        this.errorMessage = document.createElement('span');
        this.changeFormFunction = changeFormFunction;
    }

    createElement() {
        super.createElement()

        const visitPurposeLegend = document.createElement('legend');
        visitPurposeLegend.textContent = 'Мета візиту';

        this.visitPurpose.type = 'text';
        this.visitPurpose.name = 'visit_purpose';

        this.visitDesc.name = 'visit_description';
        this.visitDesc.id = 'desc';
        this.visitDesc.cols = 20;
        this.visitDesc.rows = 2;

        const visitDescLegend = document.createElement('legend');
        visitDescLegend.textContent = 'Короткий опис візиту';

        const selectLegendElem = document.createElement('legend');
        selectLegendElem.textContent = 'Пріорітет';

        this.urgency.name = 'priority';
        this.urgency.id = 'prioritySelect';

        this.priorityOptionEmptyValue.value = '...';
        this.priorityOptionEmptyValue.textContent = '...';

        this.priorityOptionHigh.value = 'high';
        this.priorityOptionHigh.textContent = 'Високий';

        this.priorityOptionNormal.value = 'normal';
        this.priorityOptionNormal.textContent = 'Звичайний';

        this.priorityOptionLow.value = 'low';
        this.priorityOptionLow.textContent = 'Низький';

        this.urgency.append(this.priorityOptionEmptyValue, this.priorityOptionHigh, this.priorityOptionNormal, this.priorityOptionLow);

        const fullNameLegend = document.createElement('legend');
        fullNameLegend.textContent = 'Прізвище Ім\'я По-батькові';

        this.fullName.type = 'text';
        this.fullName.name = 'full_name';

        const selectLegend = document.createElement('legend');
        selectLegend.textContent = "Оберіть лікаря";
        this.errorMessage.textContent = '*Всі  поля мають бути обов\'язково заповнені';
        this.errorMessage.classList.add('create-visit-form__error-message')

        this.select.classList.add('create-visit-form__select-doctor')
        this.optionsWrapper.classList.add('create-visit-form')
        this.additionalOptions.classList.add('create-visit-form__additional-options')

        this.select.append(this.emptyOption, this.cardiologist, this.dentist, this.therapist)
        this.optionsWrapper.append(selectLegend, this.select);

        this.optionsWrapper.append(visitPurposeLegend, this.visitPurpose, visitDescLegend, this.visitDesc, selectLegendElem, this.urgency, fullNameLegend, this.fullName)

        this.optionsWrapper.append(this.additionalOptions);

        this.form.append(this.optionsWrapper, this.errorMessage)

        this.cardiologist.textContent = "Кардіолог";
        this.therapist.textContent = "Терапевт";
        this.dentist.textContent = "Стоматолог";
        this.emptyOption.textContent = "...";

        this.cardiologist.value = "кардіолог";
        this.therapist.value = "терапевт";
        this.dentist.value = "стоматолог";

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