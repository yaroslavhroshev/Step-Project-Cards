export default class DashBoardCard {
    constructor(doctor, fullName) {
        this.doctor = doctor;
        this.fullName = fullName;
    }
  
    createElement() {
      const visitList = document.querySelector(".visit-list");
  
      visitList.insertAdjacentHTML("beforeend",`    
        <div class="card">
            <div class="card-content">
                <p class="content-doctor content-card"><span class="key-card">Doctor:</span>${this.doctor}</p>
                <p class="content-full-name content-card"><span class="key-card">Full Name:</span>${this.fullName}</p>
            </div>
            <div class="buttons">
                <button class="edit-button">Редагувати</button>
                <button class="delete-button">Видалити</button>
            </div>
        </div>`
      );
    }

    render() {
        this.createElement() 
    }
  }
  