import CreateVisitForm from "./CreateVisitForm.js";

export default class EditCardForm extends CreateVisitForm {
    constructor(title, changeFormFunction, userInfoObj) {
        super(title, changeFormFunction)
        this.userInfoObj = userInfoObj;
    }

    showUserInfo() {

        const { doctor, full_name, visit_purpose, visit_description, priority } = this.userInfoObj;
        this.changeFormByOption(doctor)

        this.visitPurpose.value = visit_purpose;
        this.visitDesc.value = visit_description;
        priority === 'high' ? this.priorityOptionHigh.selected = true : priority === 'normal' ? this.priorityOptionNormal.selected = true : priority === 'low' ? this.priorityOptionLow.selected = true : null;
        this.fullName.value = full_name;


        if (doctor === 'кардіолог') {
            this.cardiologist.selected = true;

            this.additionalOptions.querySelector('.js-pressure').querySelector('input').value = this.userInfoObj["higher_pressure_number"];
            this.additionalOptions.querySelector('.js-pressure').querySelector('input:last-of-type').value = this.userInfoObj["lower_pressure_number"];
            this.additionalOptions.querySelector('.js-body-mass-index').querySelector('input').value = this.userInfoObj["body_mass_index"];
            this.additionalOptions.querySelector('.js-body-mass-index').querySelector('input').value = this.userInfoObj["body_mass_index"];
            this.additionalOptions.querySelector('.js-heart-diseases').querySelector('textarea').value = this.userInfoObj["heart_diseases"];
            this.additionalOptions.querySelector('.js-age-cardiologist').querySelector('input').value = this.userInfoObj["age"];

        }

        if (doctor === 'терапевт') {
            this.therapist.selected = true;
            this.additionalOptions.querySelector('.js-age-therapist').querySelector('input').value = this.userInfoObj["age"];
        }

        if (doctor === 'стоматолог') {
            this.dentist.selected = true;
            this.additionalOptions.querySelector('.js-date').querySelector('input').value = this.userInfoObj["date"];
        }
    }

    getFormElement() {
        this.showUserInfo()
        return super.getFormElement()
    }


}