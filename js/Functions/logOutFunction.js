const logOutFunction = () => {
    const logOutButton = document.getElementById('logOutButton'); 

    logOutButton.addEventListener('click', (e) => {
        if (localStorage.getItem('TOKEN')) {
            localStorage.removeItem('TOKEN');
            location.reload()
            logOutButton.style.display = 'none';
        }
    })
    
}

export default logOutFunction;