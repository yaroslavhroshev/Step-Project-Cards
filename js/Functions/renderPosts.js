import DashBoardCard from "../Classes/dashBoardCard.js";
import dragNdropFunction from "./dragNdropFunction.js";

const renderPosts = data => {
  data.forEach(({ doctor, fullName, id }) => {
    new DashBoardCard(doctor, fullName, id).render();
  });

  dragNdropFunction()
};

export default renderPosts;
