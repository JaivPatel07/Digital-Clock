const c = document.querySelector('.clock');
    setInterval(() => {
        const date = new Date();
        c.innerHTML = date.toLocaleTimeString();
    }, 1000);