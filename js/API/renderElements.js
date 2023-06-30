import getElement from "./getElement.js";
import DashBoardCard from "../Classes/dashBoardCard.js";
import editModalFunction from "../Functions/editModalFunctioin.js";
import textHiddenFunction from "../Functions/textHiddenFunction.js";

const renderElements = async () => {

  const { data: mewData } = await getElement()

  mewData.forEach((userObj) => {
    new DashBoardCard(userObj.doctor, userObj["full_name"], userObj.id, userObj, editModalFunction, textHiddenFunction).render()
  });
  textHiddenFunction()
}

export default renderElements;