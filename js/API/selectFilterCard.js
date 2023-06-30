import renderElements from "./renderElements.js";
import renderPosts from "../Functions/renderPosts.js";
import textHiddenFunction from "../Functions/textHiddenFunction.js";

const selectFilterCard = async () => {
  const selectFilter = await renderElements();
  const selectElement = document.getElementById("prioritySelect");
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const selectedValue = selectedOption.value;
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();

  document.querySelector(".visit-list").innerHTML = "";

  let filterCard;

  if (selectedValue === "prior") {
    filterCard = selectFilter.filter(({ priority, doctor, visit_purpose }) => {
      return (
        priority === selectedValue ||
        doctor.toLowerCase().includes(searchTerm) ||
        visit_purpose.toLowerCase().includes(searchTerm)
      );
    });
  } else if (selectedValue !== "all") {
    filterCard = selectFilter.filter(({ priority }) => {
      return selectedValue === priority;
    });
  } else {
    filterCard = selectFilter.filter(({ doctor, visit_purpose }) => {
      return (
        doctor.toLowerCase().includes(searchTerm) ||
        visit_purpose.toLowerCase().includes(searchTerm)
      );
    });
  }

  renderPosts(filterCard);
  textHiddenFunction()


  localStorage.setItem("selectedFilter", selectedValue);
};

export default selectFilterCard;
