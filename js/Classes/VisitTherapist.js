import CreateVisitForm from "./CreateVisitForm.js";

export default class VisitTherapist extends CreateVisitForm {
    constructor(title, changeFormFunction) {
        super(title, changeFormFunction)

        this.age = document.createElement('input');
        this.fragment = new DocumentFragment();
    }

    createElement() {
        super.createElement();

        this.age.type = 'number';
        this.age.name = 'age';

        this.fragment.append(this.age)
    }

    getAdditionalInformation() {

        this.createElement()
        return this.fragment
    }
}