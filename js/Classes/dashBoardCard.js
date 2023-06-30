export default class DashBoardCard {
  constructor(doctor, fullName, id, userObject, editBtnFunction, changeContainerFunction) {
    this.doctor = doctor;
    this.fullName = fullName;
    this.id = id;
    this.visitList = document.querySelector(".visit-list");
    this.card = document.createElement('div');
    this.cardContent = document.createElement('div');
    this.buttons = document.createElement('div');
    this.editButton = document.createElement('button');
    this.deleteButton = document.createElement('button');
    this.showMoreButton = document.createElement('button');
    this.hideButton = document.createElement('button');
    this.userObject = userObject;
    this.additionalInformSection = document.createElement('div');
    this.editBtnFunction = editBtnFunction;
    this.changeContainerFunction = changeContainerFunction;

    this.therapist = `
    <p class="content-puprpose content-card"><span class="key-card">Мета візиту:</span>${this.userObject["visit_purpose"]}</p>
    <p class="content-description content-card"><span class="key-card">Короткий опис візиту:</span>${this.userObject["visit_description"]}</p>
    <p class="content-priority content-card"><span class="key-card">Пріоритет:</span>${this.userObject["priority"] === 'high' ? 'Високий' : this.userObject["priority"] === 'normal' ? 'Середній' : this.userObject["priority"] === 'low' ? 'Низький' : null}</p>
    <p class="content-age content-card"><span class="key-card">Вік:</span>${this.userObject["age"]}</p>
    `
    this.cardiologist = `
    <p class="content-puprpose content-card"><span class="key-card">Мета візиту:</span>${this.userObject["visit_purpose"]}</p>
    <p class="content-description content-card"><span class="key-card">Короткий опис візиту:</span>${this.userObject["visit_description"]}</p>
    <p class="content-priority content-card"><span class="key-card">Пріоритет:</span>${this.userObject["priority"] === 'high' ? 'Високий' : this.userObject["priority"] === 'normal' ? 'Середній' : this.userObject["priority"] === 'low' ? 'Низький' : null}</p>
    <p class="content-higher-pressure-number content-card"><span class="key-card">Тиск:</span>${this.userObject["higher_pressure_number"]}/${this.userObject["lower_pressure_number"]}</p>
    <p class="content-heart-diseases content-card"><span class="key-card">Перенесені хвороби серця:</span>${this.userObject["heart_diseases"]}</p>
    <p class="content-mass content-card"><span class="key-card">Індекс маси тіла:</span>${this.userObject["body_mass_index"]}</p>
    `;

    this.dentist = `
    <p class="content-puprpose content-card"><span class="key-card">Мета візиту:</span>${this.userObject["visit_purpose"]}</p>
    <p class="content-description content-card"><span class="key-card">Короткий опис візиту:</span>${this.userObject["visit_description"]}</p>
    <p class="content-priority content-card"><span class="key-card">Пріоритет:</span>${this.userObject["priority"] === 'high' ? 'Високий' : this.userObject["priority"] === 'normal' ? 'Середній' : this.userObject["priority"] === 'low' ? 'Низький' : null}</p>
    <p class="content-data content-card"><span class="key-card">Дата останнього візиту:</span>${this.userObject["date"]}</p>
    `;
  }

  createElement() {
    this.card.className = 'card';
    this.card.id = this.id;

    this.cardContent.className = "card-content";

    this.cardContent.insertAdjacentHTML("beforeend", `    
        <p class="content-doctor content-card"><span class="key-card">Лікар:</span>${this.doctor === 'cardiologist' ? "Кардіолог" : this.doctor === 'dentist' ? "Стоматолог" : this.doctor === 'therapist' ? "Терапевт" : null}</p>
        <p class="content-full-name content-card"><span class="key-card">Повне ім'я:</span>${this.fullName}</p>`);
    this.cardContent.append(this.additionalInformSection)


    this.buttons.className = "buttons";
    this.editButton.className = 'edit-button';
    this.editButton.innerText = 'Редагувати';
    this.deleteButton.className = 'delete-button';
    this.deleteButton.innerText = 'Видалити';
    this.showMoreButton.className = 'show-more-button';
    this.showMoreButton.innerText = 'Показати більше';
    this.hideButton.className = 'hide-button';
    this.hideButton.innerText = 'Сховати';
    this.hideButton.style.display = 'none';

    this.buttons.append(this.showMoreButton, this.hideButton, this.editButton, this.deleteButton),
    this.card.append(this.cardContent, this.buttons)

  }


  renderOptionalElements(elem) {
    this.additionalInformSection.insertAdjacentHTML('beforeend', elem)
  }

  showHideElem(showElem, hideElem) {
    hideElem.style.display = 'none';
    showElem.style.display = 'block';
  }

  addEventListerners() {
    this.deleteButton.addEventListener('click', () => {
      axios.delete(`https://ajax.test-danit.com/api/v2/cards/${this.id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('TOKEN')}`
        },
      })
        .then(response => {
          if (response.status === 200) {
            this.card.remove();
            this.changeContainerFunction()
          }
        })
        .catch(err => console.log(err))
    })

    this.showMoreButton.addEventListener('click', () => {
      console.log(this.userObject);
      if (this.doctor === 'cardiologist') {
        this.renderOptionalElements(this.cardiologist)
        this.showHideElem(this.hideButton, this.showMoreButton)
      }

      if (this.doctor === 'dentist') {
        this.renderOptionalElements(this.dentist)
        this.showHideElem(this.hideButton, this.showMoreButton)
      }

      if (this.doctor === 'therapist') {
        this.renderOptionalElements(this.therapist)
        this.showHideElem(this.hideButton, this.showMoreButton)
      }

    })

    this.hideButton.addEventListener('click', () => {
      this.additionalInformSection.innerHTML = "";
      this.showHideElem(this.showMoreButton, this.hideButton)
    })

    this.editButton.addEventListener('click', async () => {
      this.editBtnFunction(this.userObject);
    })
  }

  changeVisitCard() {
    this.addEventListerners()
    this.createElement()
    document.querySelector('#' + CSS.escape(this.id)).after(this.card)
    document.querySelector('#' + CSS.escape(this.id)).remove()
  }

  render() {
    this.addEventListerners()
    this.createElement()
    this.visitList.prepend(this.card)
  }
}
