const toggler = document.getElementById('toggler')

toggler.addEventListener('click', (e)=>{
    console.log(e.target.classList.contains('toggler-title'));{
        console.log(e.target.parentElement)
    }
})