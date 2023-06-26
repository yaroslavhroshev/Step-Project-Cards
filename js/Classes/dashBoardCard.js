import deleteElement from "../API/deleteElement.js";

export default class DashBoardCard {
    constructor(doctor, fullName, id) {
        this.doctor = doctor;
        this.fullName = fullName;
        this.id = id;
        this.visitList = document.querySelector(".visit-list");
        this.card = document.createElement('div');
        this.cardContent = document.createElement('div');
        this.buttons = document.createElement('div');
        this.editButton = document.createElement('button');
        this.deleteButton = document.createElement('button');
    }
  
    createElement() {
      this.card.className = 'card';

      this.cardContent.className = "card-content";

      this.cardContent.insertAdjacentHTML("beforeend", `    
        <p class="content-doctor content-card"><span class="key-card">Doctor:</span>${this.doctor}</p>
        <p class="content-full-name content-card"><span class="key-card">Full Name:</span>${this.fullName}</p>`);

      this.buttons.className = "buttons";
      this.editButton.className = 'edit-button';
      this.editButton.innerText = 'Редагувати';
      this.deleteButton.className = 'delete-button';
      this.deleteButton.innerText = 'Видалити';

      this.buttons.append(this.editButton, this.deleteButton),
      this.card.append(this.cardContent, this.buttons)
      this.visitList.append(this.card)
    }

    addEventListerners() { 
        this.deleteButton.addEventListener('click', () => {

            // deleteElement()

            // this.card.remove();


            fetch(`https://ajax.test-danit.com/api/v2/cards/${this.id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer 8e36bc4f-439b-46ad-bb21-b018bd82fcf6`
                  },
              }) 
              .then(response  => {
                if(response.status === 200) {
                  this.card.remove();
                }
              })
              .catch(err => console.log(err)) 
        })
    }

    render() {
        this.addEventListerners()
        this.createElement() 
    }
  }
  