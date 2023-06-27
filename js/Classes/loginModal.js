export default class LoginModal {
    constructor(elem, confirmFunction, buttonValue) {
        this.confirmFunction = confirmFunction;
        this.elem = elem;
        this.buttonValue = buttonValue;
        this.modal = document.querySelector('.modal')
        this.modalBackground = document.createElement('div');
        this.modalContent = document.createElement('div');
        this.close = document.createElement('span');
        this.modalButton = document.createElement('button');
    }

    createElement() {
        this.modal.style.width = '100%'
        this.modalContent.classList.add('modal-content');
        this.modalBackground.classList.add('modal__background');
        this.close.classList.add('close');
        this.close.innerHTML = '&times;'
        this.modalButton.classList.add('modal-button');
        this.modalButton.innerHTML = this.buttonValue;

        this.modalContent.append(this.close, this.elem, this.modalButton)
    }

    addEventListerners() {
        this.close.addEventListener('click', () => {
            this.closer()
        })

        this.modalBackground.addEventListener('click', () => {
            this.closer()
        })

        this.modalButton.addEventListener('click', (e) => {
            this.confirmFunction(this.closer.bind(this), e);
        })
    }

    closer() {
        this.modal.style.width = '0'
        this.modalContent.remove()
        this.modalBackground.remove()
    }

    render() {
        this.createElement()
        this.addEventListerners()
        this.modal.append(this.modalContent, this.modalBackground)
    }
}

