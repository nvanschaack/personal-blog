//when i type a username etc. in the form label, it will console log that username
const userName = document.getElementById('username');
const title = document.getElementById('title');
const blogMessage = document.getElementById('text-area');
const submit = document.getElementById('blogForm');

submit.addEventListener('submit', function (event) {
    event.preventDefault();

    const localStorageData = JSON.parse(localStorage.getItem('storedBlogPost')) || []

    const blogPost = {
        username: userName.value,
        title: title.value,
        content: blogMessage.value,
    };

   if (blogPost.username && blogPost.title && blogPost.content){
    localStorageData.push(blogPost)
    const blogPostString = JSON.stringify(localStorageData);
    localStorage.setItem('storedBlogPost', blogPostString);

    window.location.href = './blog.html'
   } else {
    alert('Please fill out username, title, and content!')
   }
    

})
