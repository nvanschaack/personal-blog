//when i type a username etc. in the form label, it will console log that username
const userName = document.getElementById('username');
const title = document.getElementById('title');
const blogMessage = document.getElementById('text-area');
const submit = document.getElementById('submit');

submit.addEventListener('click', function (event) {
    event.preventDefault();

    const blogPost = {
        username: userName.value,
        title: title.value,
        content: blogMessage.value,
    };

    const saveToLocalStorage = function () {
        const blogPostString = JSON.stringify(blogPost);
        localStorage.setItem('storedBlogPost', blogPostString);
    };
    saveToLocalStorage();
    console.log(JSON.parse(localStorage.getItem('storedBlogPost')));
//have the form revert back to blank inputs when i click submit -ADD TO LINE 14? EX ON 04.15
    submit.addEventListener('click', function(){
        userName.value= '';
        title.value= '';
        blogMessage.value= '';

    })
})
//LIGHT SWITCH
const lightSwitch = document.querySelector('.button')
const container = document.querySelector('.container')
//set default to light
 let mode = 'light';
//listen for a click event on toggle switch
lightSwitch.addEventListener('click',function(){
    //if mode is light, apply dark background
    if (mode === 'light'){
        mode = 'dark';
        container.setAttribute('class', 'dark')
    } else {
        mode = 'light';
        container.setAttribute('class', 'light')
    }
    console.log(container)
})
