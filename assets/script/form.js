//when i type a username etc. in the form label, it will console log that username
const userName = document.getElementById('username');
const title = document.getElementById('title');
const blogMessage = document.getElementById('msg');
const submit = document.getElementById('submit');

submit.addEventListener('click', function(){
    const blogPost ={
        username: userName.value,
        titleOfPost: title.value,
        contentOfPost: blogMessage.value,

    };
    console.log(blogPost)
})
