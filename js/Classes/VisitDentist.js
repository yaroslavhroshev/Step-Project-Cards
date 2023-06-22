import CreateVisitForm from "./CreateVisitForm.js";

export default class VisitDentist extends CreateVisitForm {
    constructor(title, changeFormFunction) {
        super(title, changeFormFunction)

        this.data = document.createElement('div');
        this.fragment = new DocumentFragment();
    }

    createElement() {
        super.createElement();

        const dataLegend = document.createElement('legend');
        const dataInput = document.createElement('input');

        dataLegend.textContent = 'Дата останнього візиту';
        dataInput.type = 'date';
        dataInput.name = 'date';

        this.data.append(dataLegend)
        this.data.append(dataInput)
        this.fragment.append(this.data)
    }

    getAdditionalInformation() {

        this.createElement()
        return this.fragment
    }
}