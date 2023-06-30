import CreateVisitForm from "./CreateVisitForm.js";

export default class VisitTherapist extends CreateVisitForm {
    constructor(title, changeFormFunction) {
        super(title, changeFormFunction)

        this.age = document.createElement('div');
        this.fragment = new DocumentFragment();
    }

    createElement() {
        super.createElement();

        const ageLegend = document.createElement('legend');
        const ageInput = document.createElement('input');

        this.age.classList.add('js-age-therapist')
        ageLegend.textContent = 'Вік';
        ageInput.type = 'number';
        ageInput.name = 'age';

        this.age.append(ageLegend, ageInput)
        this.fragment.append(this.age)
    }

    getAdditionalInformation() {

        this.createElement()
        return this.fragment
    }
}