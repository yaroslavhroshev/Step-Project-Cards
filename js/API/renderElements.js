import getElement from "./getElement.js";
import DashBoardCard from "../Classes/dashBoardCard.js";
import dragNdropFunction from "../Functions/dragNdropFunction.js";

const renderElements = async () => {
  const { data: mewData } = await getElement();

  mewData.forEach(({ doctor, fullName, id }) => {
    new DashBoardCard(doctor, fullName, id).render();
  });

  dragNdropFunction()
  return mewData;
};
export default renderElements;
