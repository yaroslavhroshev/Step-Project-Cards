
const textHiddenFunction = () => {
    if (document.querySelector('#visitList').querySelector('.card') !== null) {
        document.querySelector('.no-items').style.display = 'none';
    } else {
        document.querySelector('.no-items').style.display = 'block';
    }
}

export default textHiddenFunction