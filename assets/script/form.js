//when i type a username etc. in the form label, it will console log that username
const userName = document.getElementById('username');
const title = document.getElementById('title');
const blogMessage = document.getElementById('msg');
const submit = document.getElementById('submit');

submit.addEventListener('click', function(event){
    event.preventDefault();

    const blogPost ={
        username: userName.value,
        title: title.value,
        content: blogMessage.value,
    };
    // console.log(blogPost) -use activity 23
})

