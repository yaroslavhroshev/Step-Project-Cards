import CreateVisitForm from "./CreateVisitForm.js";

export default class VisitCardiologist extends CreateVisitForm {
    constructor(title, changeFormFunction) {
        super(title, changeFormFunction)

        this.pressure = document.createElement('div');
        this.bodyMassIndex = document.createElement('div');
        this.heartDiseases = document.createElement('div');
        this.age = document.createElement('div');
        this.fragment = new DocumentFragment();
    }

    createElement() {
        super.createElement();
        this.pressure.classList.add('js-pressure')
        const pressureLegend = document.createElement('legend');
        pressureLegend.textContent = 'Тиск';
        const upperInput = document.createElement('input');
        upperInput.type = 'number';
        upperInput.placeholder = 'Верхній показник';
        upperInput.name = 'higher_pressure_number';
        const lowerInput = document.createElement('input');
        lowerInput.type = 'number';
        lowerInput.placeholder = 'Нижній показник';
        lowerInput.name = 'lower_pressure_number';
        this.pressure.append(pressureLegend, upperInput, lowerInput);

        this.bodyMassIndex.classList.add('js-body-mass-index')
        const bodyMassLegend = document.createElement('legend');
        bodyMassLegend.textContent = 'Індекс маси тіла';
        const bodyMassInput = document.createElement('input');
        bodyMassInput.type = 'number';
        bodyMassInput.name = 'body_mass_index';
        this.bodyMassIndex.append(bodyMassLegend, bodyMassInput)

        this.heartDiseases.classList.add('js-heart-diseases')
        const heartDiseasesLegend = document.createElement('legend');
        heartDiseasesLegend.textContent = 'Перенесені захворювання сердцево-судинної системи';
        const heartDiseasesTextarea = document.createElement('textarea');
        heartDiseasesTextarea.name = 'heart_diseases';
        this.heartDiseases.append(heartDiseasesLegend, heartDiseasesTextarea);

        this.age.classList.add('js-age-cardiologist')
        const ageLegend = document.createElement('legend');
        ageLegend.textContent = 'Вік';
        const ageInput = document.createElement('input');
        ageInput.type = 'number';
        ageInput.name = 'age';
        this.age.append(ageLegend, ageInput);


        this.fragment.append(this.pressure, this.bodyMassIndex, this.heartDiseases, this.age)
    }

    getAdditionalInformation() {
        this.createElement()
        return this.fragment
    }

}