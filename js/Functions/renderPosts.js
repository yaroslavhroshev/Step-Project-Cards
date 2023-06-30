import DashBoardCard from "../Classes/dashBoardCard.js";
import dragNdropFunction from "./dragNdropFunction.js";
import editModalFunction from "./editModalFunctioin.js";
import textHiddenFunction from "./textHiddenFunction.js";

const renderPosts = data => {

  data.forEach((data) => {
    new DashBoardCard(data.doctor, data["full_name"], data.id, data, editModalFunction, textHiddenFunction).render()
  });

  dragNdropFunction()
};

export default renderPosts;
