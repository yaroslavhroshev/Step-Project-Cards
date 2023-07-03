import CreateVisitForm from "./CreateVisitForm.js";

export default class VisitDentist extends CreateVisitForm {
    constructor(title, changeFormFunction) {
        super(title, changeFormFunction)

        this.date = document.createElement('div');
        this.fragment = new DocumentFragment();
    }

    createElement() {
        super.createElement();

        const dateLegend = document.createElement('legend');
        const dateInput = document.createElement('input');

        this.date.classList.add('js-date');
        dateLegend.textContent = 'Дата останнього візиту';
        dateInput.type = 'date';
        dateInput.name = 'date';

        this.date.append(dateLegend, dateInput)
        this.fragment.append(this.date)
    }

    getAdditionalInformation() {

        this.createElement()
        return this.fragment
    }
}