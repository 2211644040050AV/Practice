const ham = document.querySelector('.hamburger');
const navL = document.querySelector('.nav-links');

ham.addEventListener('click', () => {

    navL.classList.toggle('active');
});



const theme = document.querySelector('.theme-toggle');
const body = document.body;

theme.addEventListener('click', () =>{

    body.classList.toggle('dark-mode');

})