import LoginModal from "./Classes/loginModal.js";
import LoginForm from "./Classes/loginForm.js";
import loginFunction from "./API/loginfunction.js";
import checkLoginToken from "./Functions/checkLoginToken.js";
import CreateVisitForm from "./Classes/CreateVisitForm.js";
import VisitDentist from "./Classes/VisitDentist.js";
import VisitTherapist from "./Classes/VisitTherapist.js";
import VisitCardiologist from "./Classes/VisitCardiologist.js";
import postElement from "./API/postElement.js";
import SmallCard from "./Classes/SmallCards.js";
import BigCard from "./Classes/BigCards.js";
import DashBoardCard from "./Classes/dashBoardCard.js";

const loginBtn = document.querySelector("#loginButton");

checkLoginToken();

loginBtn.addEventListener("click", e => {
  const form = new LoginForm("Вхід");

  const confirmRegestration = async closerCallbackFromModal => {
    const body = form.getValues();
    const { data } = await loginFunction(body);
    localStorage.setItem("TOKEN", data);
    closerCallbackFromModal();
    checkLoginToken();
  };

  new LoginModal(form.getFormElement(), confirmRegestration, "Увійти").render();
});

const addVisit = document.querySelector("#addVisitButton");

console.log(addVisit);

addVisit.addEventListener("click", () => {
  const checkOptions = optionValue => {
    if (optionValue === "cardiologist") {
      const cardiologist = new VisitCardiologist("Створити візит").getAdditionalInformation();
      return cardiologist;
    }

    if (optionValue === "therapist") {
      const therapist = new VisitTherapist(
        "Створити візит"
      ).getAdditionalInformation();
      return therapist;
    }

    if (optionValue === "dentist") {
      const dentist = new VisitDentist("Створити візит").getAdditionalInformation();
      return dentist;
    }

    return null;
  };

  const form = new CreateVisitForm("Створити візит", checkOptions);

  const confirmRegestration = async closerCallbackFromModal => {
    const body = form.getAllUserInfo();
    const { data } = await postElement(body);
    closerCallbackFromModal();
    console.log(data);
  };

  const renderCard = () => {
    new DashBoardCard('fdfd','dff').render()
  };

  new LoginModal(form.getFormElement(), confirmRegestration, "Створити", renderCard).render();
});

// new SmallCard().createElement();
// new BigCard().createElement();

