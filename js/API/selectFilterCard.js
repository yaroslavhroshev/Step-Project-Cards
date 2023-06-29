import renderElements from "./renderElements.js";
import renderPosts from "../Functions/renderPosts.js";

const selectFilterCard = async () => {
  const selectFilter = await renderElements();
  const selectElement = document.getElementById("prioritySelect");
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const selectedValue = selectedOption.value;

  const searchTerm = document.getElementById("searchInput").value.toLowerCase();

  document.querySelector(".visit-list").innerHTML = "";

  if (selectedValue === "prior") {
    const filterCard = selectFilter.filter(
      ({ priority, doctor, visit_purpose }) => {
        return (
          priority === selectedValue ||
          doctor.toLowerCase().includes(searchTerm) ||
          visit_purpose.toLowerCase().includes(searchTerm)
        );
      }
    );
    renderPosts(filterCard);
  } else if (selectedValue !== "all") {
    const filterCard = selectFilter.filter(({ priority }) => {
      return selectedValue === priority;
    });
    renderPosts(filterCard);
  } else {
    const filterCard = selectFilter.filter(({ doctor, visit_purpose }) => {
      return (
        doctor.toLowerCase().includes(searchTerm) ||
        visit_purpose.toLowerCase().includes(searchTerm)
      );
    });
    renderPosts(filterCard);
  }

  localStorage.setItem("selectedFilter", selectedValue);
};

export default selectFilterCard;