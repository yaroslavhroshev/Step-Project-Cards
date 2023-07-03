import instance from "./instance.js";

const loginFunction = async body => {
  try {
    return await instance.post("/login", body);
  } catch (err) {
    console.log(err);
    alert("Incorrect username or password, Try Again!");

    const inputs = document.querySelectorAll(".modal-input");
    const arrayFromCollection = Array.from(inputs);

    arrayFromCollection.forEach(input => {
      input.value = "";
    });
  }
};

export default loginFunction;
