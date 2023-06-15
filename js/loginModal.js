export default class LoginModal {
    constructor(elem, confirmFunction) {
        this.confirmFunction = confirmFunction;
        this.elem = elem;
        this.modal = document.querySelector('.modal')
        this.modalBackground = document.createElement('div');
        this.modalContent = document.createElement('div');
        this.close = document.createElement('span');
        this.modalButton = document.createElement('button');
    }

    createElement() {
        this.modalContent.classList.add('modal-content');
        this.modalBackground.classList.add('modal__background');
        this.modalContent.style.display = 'block'; 
        this.close.classList.add('close');
        this.close.innerHTML = '&times;'
        this.modalButton.classList.add('modal-button');
        this.modalButton.innerText = 'Увійти';

        this.modalContent.append(this.close, this.elem, this.modalButton)
    }

    addEventListerners() {
        this.close.addEventListener('click', () => {
            this.closer()
        })

        this.modalBackground.addEventListener('click', () => {
            this.closer()
        })

        this.modalButton.addEventListener('click', () => {
            this.confirmFunction();
        })
    }

    closer() {
        this.modalContent.remove()
        this.modalBackground.remove()
    }

    render() {
        this.createElement()
        this.addEventListerners() 
        this.modal.append(this.modalContent, this.modalBackground)
    }
}

