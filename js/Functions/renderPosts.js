import DashBoardCard from "../Classes/dashBoardCard.js";

const renderPosts = data => {
  data.forEach(({ doctor, fullName, id }) => {
    new DashBoardCard(doctor, fullName, id).render();
  });
};

export default renderPosts;
