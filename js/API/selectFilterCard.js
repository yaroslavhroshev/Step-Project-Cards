import renderElements from "./renderElements.js";
import renderPosts from "../Functions/renderPosts.js";

const selectFilterCard = async () => {
  const selectFilter = await renderElements();
  const selectElement = document.getElementById("prioritySelect");
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const selectedValue = selectedOption.value;

  document.querySelector(".visit-list").innerHTML = "";
  const filterCard = selectFilter.filter(({ priority }) => {
    return selectedValue === priority;
  });

  renderPosts(filterCard);

  if (selectedValue === "prior") {
    renderElements();
  }

  localStorage.setItem("selectedFilter", selectedValue);
};

export default selectFilterCard;
