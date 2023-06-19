import Form from "./form.js";

export default class CreateVisitForm extends Form {
    constructor(title) {
        super(title)
        this.select = document.createElement('select');
        this.cardiologist = document.createElement('option');
        this.therapist = document.createElement('option');
        this.dentist = document.createElement('option');
        this.emptyOption = document.createElement('option');
        this.optionsWrapper = document.createElement('div');

        this.visitPurpose = '<input type="text" placeholder="Мета візиту">';
        this.visitDesc = '<textarea name="descOfVisit" id="desc" cols="20" rows="5"  placeholder="Короткий опис візиту"></textarea>';
        this.urgency = `
        <select id="prioritySelect">
        <option value="">Пріоритет</option>
        <option value="high">Високий</option>
        <option value="normal">Звичайний</option>
        <option value="low">Низький</option>
        </select>`;
        this.fullName = '<input type="text" placeholder="Прізвище Ім\'я По-батькові ">';
    }

    createElement() {
        super.createElement()

        this.select.classList.add('select')
        this.optionsWrapper.classList.add('options-wrapper')

        this.select.append(this.emptyOption);
        this.select.append(this.cardiologist);
        this.select.append(this.dentist);
        this.select.append(this.therapist);
        this.optionsWrapper.append(this.select)

        this.optionsWrapper.insertAdjacentHTML('beforeend', this.visitPurpose)
        this.optionsWrapper.insertAdjacentHTML('beforeend', this.visitDesc)
        this.optionsWrapper.insertAdjacentHTML('beforeend', this.urgency)
        this.optionsWrapper.insertAdjacentHTML('beforeend', this.fullName)
        this.form.append(this.optionsWrapper)

        this.cardiologist.textContent = "Кардіолог";
        this.therapist.textContent = "Терапевт";
        this.dentist.textContent = "Стоматолог";
        this.emptyOption.textContent = "Оберіть лікаря";

        this.cardiologist.value = "cardiologist";
        this.therapist.value = "therapist";
        this.dentist.value = "dentist";


    }

    changeFormByOption(optionValue) {
        if (optionValue === 'cardiologist') {

        }

        if (optionValue === 'therapist') {

        }

        if (optionValue === 'dentist') {

        }
    }

    getOptionsValues() {
        this.select.addEventListener('change', e => {
            // console.log(e.target.value);
            // this.changeFormByOption(e.target.value)
            return e.target.value
        })
    }

    getFormElement() {
        this.getOptionsValues()
        return super.getFormElement()
    }


}