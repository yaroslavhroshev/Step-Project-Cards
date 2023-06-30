import renderElements from "./renderElements.js";
import renderPosts from "../Functions/renderPosts.js";
import dragNdropFunction from "../Functions/dragNdropFunction.js";
import textHiddenFunction from "../Functions/textHiddenFunction.js";

const filterCard = async event => {
  const filterData = await renderElements();
  const selectElement = document.getElementById("prioritySelect");
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const selectedValue = selectedOption.value;

  if (selectedValue !== "all") {
    const filter = filterData.filter(
      ({ priority }) => priority === selectedValue
    );
    document.querySelector(".visit-list").innerHTML = "";
    renderPosts(filter);
  }

  if (selectedValue === "prior") {
    const filter = filterData.filter(({ doctor, visit_purpose }) => {
      return (
        doctor.includes(event.target.value) ||
        visit_purpose.includes(event.target.value)
      );
    });
    document.querySelector(".visit-list").innerHTML = "";
    renderPosts(filter);
    dragNdropFunction()
    textHiddenFunction()
  }
};

export default filterCard;