export default class BigCard {
  constructor(
    data,
    doctor,
    fullName,
    heartDiseases,
    higherPressure,
    lowerPressure,
    priority,
    description,
    puprpose
  ) {
    (this.data = data),
      (this.doctor = doctor),
      (this.fullName = fullName),
      (this.heartDiseases = heartDiseases),
      (this.higherPressure = higherPressure),
      (this.lowerPressure = lowerPressure),
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
        <p class="content-heart-diseases content-card"><span class="key-card">Heart Diseases:</span>${this.heartDiseases}</p>
        <p class="content-higher-pressure-number content-card"><span class="key-card">Higher Pressure Number:</span>${this.higherPressure}</p>
        <p class="content-heart-diseases content-card"><span class="key-card">Lower Pressure Number:</span>${this.lowerPressure}</p>
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
