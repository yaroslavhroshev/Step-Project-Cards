import checkOptions from "../Functions/checkOptions.js";
import DashBoardCard from "../Classes/dashBoardCard.js";
import LoginModal from "../Classes/loginModal.js";
import EditCardForm from "../Classes/EditCardForm.js";
import putCardInfo from "../API/putCardInfo.js";
import textHiddenFunction from "./textHiddenFunction.js";
import selectFilterCard from "../API/selectFilterCard.js";

const editModalFunction = async (userInfoObj) => {


    const form = new EditCardForm("Редагувати картку", checkOptions, userInfoObj);

    const confirmCreateVisitCard = async (closerCallbackFromModal) => {

        const body = form.getAllUserInfo();
        const { data } = await putCardInfo(userInfoObj.id, body);

        closerCallbackFromModal()

        new DashBoardCard(data.doctor, data["full_name"], data.id, data, editModalFunction, textHiddenFunction).changeVisitCard()
        selectFilterCard()
    }

    new LoginModal(form.getFormElement(), confirmCreateVisitCard, "Редагувати").render()

}

export default editModalFunction