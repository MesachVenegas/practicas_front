// Loader website icon
function loading(){
    const loader = document.getElementById('loader_container');
    setTimeout( () => {
        loader.classList.add("hidden")
    }, 3000);
}

// Change lightmode to darkmode
const darkMode = () =>{
    const btnMode = document.getElementById('mode')
    const body =  document.getElementById('body')
    btnMode.addEventListener( 'click', e =>{
        body.classList.toggle('dark')
    });
}

// menu navigation mobile.
const menu = () =>{
    const btnMenu = document.getElementById('btn_menu')
    const stripe1 = document.getElementById('1')
    const stripe2 = document.getElementById('2')
    const stripe3 = document.getElementById('3')
    const menu = document.getElementById('menu')
    const option = document.querySelectorAll('.nav__menu__link');
    btnMenu.addEventListener('click', e =>{
        menu.classList.toggle('nav__menu--open')
        stripe1.classList.toggle('stripe__open--1')
        stripe2.classList.toggle('hidden')
        stripe3.classList.toggle('stripe__open--2')
    })
    option.forEach(selection => {
        selection.addEventListener('click', e => {
            option.forEach(selection => {
                selection.classList.remove('active');
                menu.classList.toggle('nav__menu--open')
                stripe1.classList.toggle('stripe__open--1')
                stripe2.classList.toggle('hidden')
                stripe3.classList.toggle('stripe__open--2')
            });
            e.target.classList.add('active');
        })
    });
}

document.addEventListener( "DOMContentLoaded", () => {
    loading()
    darkMode()
    menu()
});