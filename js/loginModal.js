export default class LoginModal {
    constructor(elem, confirmFunction) {
        this.confirmFunction = confirmFunction;
        this.elem = elem;
        this.modal = document.querySelector('.modal')
        this.modalContent = document.createElement('div');
        this.close = document.createElement('span');
        this.modalButton = document.createElement('button');
    }

    createElement() {
        this.modalContent.classList.add('modal-content');
        this.modalContent.style.display = 'block'; 
        this.close.classList.add('close');
        this.close.innerHTML = '&times;'
        this.modalButton.classList.add('modal-button');
        this.modalButton.innerText = 'Увійти';

        this.modalContent.append(this.close, this.elem, this.modalButton)
    }

    render() {
        this.createElement()
        this.modal.append(this.modalContent)
    }
}
// new LoginModal().render()





// <div id="loginModal" class="modal">
// <div class="modal-content">
//   <span class="close">&times;</span>
//   <h2 class="modal-title">Вхід</h2>
//   <input
//     class="modal-input"
//     type="email"
//     placeholder="Електронна пошта" />
//   <input class="modal-input" type="password" placeholder="Пароль" />
//   <button class="modal-button">Увійти</button>
// </div>
// </div>