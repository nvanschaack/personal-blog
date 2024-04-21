//global variables for blog post content and submit button
const userName = document.getElementById('username');
const title = document.getElementById('title');
const blogMessage = document.getElementById('text-area');
const submit = document.getElementById('blogForm');

//submit button event listener; when user clicks submit, this function prevents the page from refreshing and retrieves the blog post from local storage
submit.addEventListener('submit', function (event) {
    event.preventDefault();

    const localStorageData = JSON.parse(localStorage.getItem('storedBlogPost')) || []

    const blogPost = {
        username: userName.value,
        title: title.value,
        content: blogMessage.value,
    };
//if user fills out their username, title, and blog content, then inputs are stringified and stored in local storage as "storedBlogPost"
   if (blogPost.username && blogPost.title && blogPost.content){
    localStorageData.push(blogPost)
    const blogPostString = JSON.stringify(localStorageData);
    localStorage.setItem('storedBlogPost', blogPostString);
//bring user to blog page or else alert them to fill out the form correctly
    window.location.href = './blog.html'
   } else {
    alert('Please fill out username, title, and content!')
   }
    
})
