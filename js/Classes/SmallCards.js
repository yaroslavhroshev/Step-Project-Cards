export default class SmallCard {
  constructor(data, doctor, fullName, priority, description, puprpose) {
    (this.data = data),
      (this.doctor = doctor),
      (this.fullName = fullName),
      (this.priority = priority),
      (this.description = description),
      (this.puprpose = puprpose);
  }

  createElement() {
    const visitList = document.querySelector(".visit-list");

    visitList.insertAdjacentHTML(
      "beforeend",
      `    <div class="card">
    <div class="card-content">
      <p class="content-data content-card"><span class="key-card">Date:</span>${this.data}</p>
      <p class="content-doctor content-card"><span class="key-card">Doctor:</span>${this.doctor}</p>
      <p class="content-full-name content-card"><span class="key-card">Full Name:</span>${this.fullName}</p>
      <p class="content-priority content-card"><span class="key-card">Priority:</span>${this.priority}</p>
      <p class="content-description content-card"><span class="key-card">Visit Description:</span>${this.description}</p>
      <p class="content-puprpose content-card"><span class="key-card">Visit Purpose:</span>${this.puprpose}</p>
    </div>
    <div class="buttons">
      <button class="edit-button">Редагувати</button>
      <button class="delete-button">Видалити</button>
    </div>
  </div>`
    );
  }
}
