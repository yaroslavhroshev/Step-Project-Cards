import VisitCardiologist from "../Classes/VisitCardiologist.js";
import VisitTherapist from "../Classes/VisitTherapist.js";
import VisitDentist from "../Classes/VisitDentist.js";

const checkOptions = (optionValue) => {
    if (optionValue === 'cardiologist') {
        const cardiologist = new VisitCardiologist("Створити візит").getAdditionalInformation();
        return cardiologist
    }
    if (optionValue === 'therapist') {
        const therapist = new VisitTherapist("Створити візит").getAdditionalInformation();
        return therapist
    }
    if (optionValue === 'dentist') {
        const dentist = new VisitDentist("Створити візит").getAdditionalInformation();
        return dentist
    }
    return null
}

export default checkOptions