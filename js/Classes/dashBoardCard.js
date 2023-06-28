export default class DashBoardCard {
  constructor(doctor, fullName, id) {
    this.doctor = doctor;
    this.fullName = fullName;
    this.id = id;
    this.visitList = document.querySelector(".visit-list");
    this.card = document.createElement("div");
    this.cardContent = document.createElement("div");
    this.buttons = document.createElement("div");
    this.editButton = document.createElement("button");
    this.deleteButton = document.createElement("button");
  }

  createElement() {
    this.card.className = "card";

    this.cardContent.className = "card-content";

    this.cardContent.insertAdjacentHTML(
      "beforeend",
      `    
        <p class="content-doctor content-card"><span class="key-card">Doctor:</span>${this.doctor}</p>
        <p class="content-full-name content-card"><span class="key-card">Full Name:</span>${this.fullName}</p>`
    );

    this.buttons.className = "buttons";
    this.editButton.className = "edit-button";
    this.editButton.innerText = "Редагувати";
    this.deleteButton.className = "delete-button";
    this.deleteButton.innerText = "Видалити";

    this.buttons.append(this.editButton, this.deleteButton),
      this.card.append(this.cardContent, this.buttons);
    this.visitList.prepend(this.card);
  }

  addEventListerners() {
    this.deleteButton.addEventListener("click", () => {
      axios
        .delete(`https://ajax.test-danit.com/api/v2/cards/${this.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
          },
        })
        .then(response => {
          if (response.status === 200) {
            this.card.remove();
          }
        })
        .catch(err => console.log(err));
    });
  }

  render() {
    this.card.remove();
    this.addEventListerners();
    this.createElement();
  }
}
