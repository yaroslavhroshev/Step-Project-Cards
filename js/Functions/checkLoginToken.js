const checkLoginToken = () => {
    const token = localStorage.getItem('TOKEN')
    console.log(token)

    if (token) {
        const loginButton = document.getElementById('loginButton');
        const addVisitButton = document.getElementById('addVisitButton');
        const logOutButton = document.getElementById('logOutButton');

        loginButton.style.display = 'none';
        logOutButton.style.display = 'block';
        addVisitButton.style.display = 'block';
    }
}

export default checkLoginToken;