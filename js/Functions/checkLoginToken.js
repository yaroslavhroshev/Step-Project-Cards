const checkLoginToken = () => {
    const token = localStorage.getItem('TOKEN')

    if (token) {
        const loginButton = document.getElementById('loginButton');
        const addVisitButton = document.getElementById('addVisitButton');
        const logOutButton = document.getElementById('logOutButton');
        const filterForm = document.querySelector('.filter-form');

        loginButton.style.display = 'none';
        logOutButton.style.display = 'block';
        addVisitButton.style.display = 'block';
        filterForm.classList.add('flex');
    }
}

export default checkLoginToken;