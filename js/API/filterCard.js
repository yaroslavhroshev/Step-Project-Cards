import renderElements from "./renderElements.js";
import renderPosts from "../Functions/renderPosts.js";

const filterCard = async event => {
  const filterData = await renderElements();
  const filter = filterData.filter(({ doctor, visit_purpose }) => {
    return (
      doctor.includes(event.target.value) ||
      visit_purpose.includes(event.target.value)
    );
  });

  document.querySelector(".visit-list").innerHTML = "";
  renderPosts(filter);
};

export default filterCard;
