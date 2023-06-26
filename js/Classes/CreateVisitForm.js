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
        this.additionalInformSection = document.createElement('div');

        this.visitPurpose = '<input type="text" name="visit_purpose" placeholder="Мета візиту">';
        this.visitDesc = '<textarea name="visit_description" id="desc" cols="20" rows="5"  placeholder="Короткий опис візиту"></textarea>';
        this.urgency = `
        <select name="priority" id="prioritySelect">
        <option value="">Пріоритет</option>
        <option value="high">Високий</option>
        <option value="normal">Звичайний</option>
        <option value="low">Низький</option>
        </select>`;
        this.fullName = '<input type="text" name="fullName" placeholder="Прізвище Ім\'я По-батькові ">';

        this.changeFormFunction = changeFormFunction;
    }

    createElement() {
        super.createElement()

        this.select.classList.add('select')
        this.optionsWrapper.classList.add('options-wrapper')
        this.additionalInformSection.classList.add('additional-inform-section')

        this.select.append(this.emptyOption);
        this.select.append(this.cardiologist);
        this.select.append(this.dentist);
        this.select.append(this.therapist);
        this.optionsWrapper.append(this.select);

        this.optionsWrapper.insertAdjacentHTML('beforeend', this.visitPurpose)
        this.optionsWrapper.insertAdjacentHTML('beforeend', this.visitDesc)
        this.optionsWrapper.insertAdjacentHTML('beforeend', this.urgency)
        this.optionsWrapper.insertAdjacentHTML('beforeend', this.fullName)

        this.optionsWrapper.append(this.additionalInformSection);

        this.form.append(this.optionsWrapper)

        this.cardiologist.textContent = "Кардіолог";
        this.therapist.textContent = "Терапевт";
        this.dentist.textContent = "Стоматолог";
        this.emptyOption.textContent = "Оберіть лікаря";

        this.cardiologist.value = "cardiologist";
        this.therapist.value = "therapist";
        this.dentist.value = "dentist";

        this.select.name = 'doctor';


    }

    changeFormByOption(optionValue) {
        this.additionalInformSection.innerHTML = "";
        const additionalElement = this.changeFormFunction(optionValue);

        if (additionalElement !== null) {
            this.additionalInformSection.append(additionalElement);
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
            if (select.value === 'Оберіть лікаря') {
                return
            }
            // if (select.value === "") {        // Цей код в розробці 
            //     throw new Error('Гайки тобі') // Намагаюсь зробити поля обов'язковими для вводу
            // }
            body[select.name] = select.value
        })
        return body
    }

    getTextareaValues(body) {
        const textareas = this.form.querySelectorAll('textarea');
        textareas.forEach(textarea => {
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