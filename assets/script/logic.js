//LIGHT SWITCH
const lightSwitch = document.querySelector('.button')
const container = document.querySelector('.container')
//set default to light
let mode = 'light';
//listen for a click event on toggle switch
lightSwitch.addEventListener('click', function () {
    //if mode is light, apply dark background
    if (mode === 'light') {
        mode = 'dark';
        container.setAttribute('class', 'dark')
    } else {
        mode = 'light';
        container.setAttribute('class', 'light')
    }
    console.log(container)
})
