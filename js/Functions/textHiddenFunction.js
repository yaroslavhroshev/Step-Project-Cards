const textHiddenFunction = () => {
    if (document.querySelector('#visitList').querySelector('.card') !== null) {
        document.querySelector('.no-items').classList.remove('hidden');
    } else {
        document.querySelector('.no-items').classList.add('hidden');
    }
}

export default textHiddenFunction