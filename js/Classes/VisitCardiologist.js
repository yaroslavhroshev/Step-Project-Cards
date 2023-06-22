import CreateVisitForm from "./CreateVisitForm.js";

export default class VisitCardiologist extends CreateVisitForm {
    constructor(title, changeFormFunction) {
        super(title, changeFormFunction)

        this.pressure = document.createElement('div');
        this.bodyMassIndex = document.createElement('input');
        this.heartDiseases = document.createElement('div');
        this.age = document.createElement('div');
        this.fragment = new DocumentFragment();
    }

    createElement() {
        super.createElement();
        const pressureLegend = document.createElement('legend');
        pressureLegend.textContent = 'Тиск';
        this.pressure.append(pressureLegend);
        const upperInput = document.createElement('input');
        upperInput.type = 'number';
        upperInput.placeholder = 'Верхній показник';
        upperInput.name = 'higher_pressure_number';
        this.pressure.append(upperInput);
        const lowerInput = document.createElement('input');
        lowerInput.type = 'number';
        lowerInput.placeholder = 'Нижній показник';
        lowerInput.name = 'lower_pressure_number';
        this.pressure.append(lowerInput);

        this.bodyMassIndex.type = 'number';
        this.bodyMassIndex.name = 'body_mass_index';
        this.bodyMassIndex.placeholder = 'Індекс маси тіла';

        const heartDiseasesLegend = document.createElement('legend');
        heartDiseasesLegend.textContent = 'Перенесені захворювання сердцево-судинної системи';
        this.heartDiseases.append(heartDiseasesLegend);
        const heartDiseasesTextarea = document.createElement('textarea');
        heartDiseasesTextarea.name = 'heart_diseases';
        this.heartDiseases.append(heartDiseasesTextarea);

        const ageLegend = document.createElement('legend');
        ageLegend.textContent = 'Вік';
        this.age.append(ageLegend);
        const ageInput = document.createElement('input');
        ageInput.type = 'number';
        ageInput.placeholder = 'Вік';
        ageInput.name = 'age';
        this.age.append(ageInput);


        this.fragment.append(this.pressure)
        this.fragment.append(this.bodyMassIndex)
        this.fragment.append(this.heartDiseases)
        this.fragment.append(this.age)
    }

    getAdditionalInformation() {
        this.createElement()
        return this.fragment
    }

}