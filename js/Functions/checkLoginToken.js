const checkLoginToken = () => {
    const token = localStorage.getItem('TOKEN')
    console.log(token)

    if (token) {
        const loginButton = document.getElementById('loginButton');
        const addVisitButton = document.getElementById('addVisitButton');

        loginButton.style.display = 'none';
        addVisitButton.style.display = 'block';
    }
}

export default checkLoginToken;