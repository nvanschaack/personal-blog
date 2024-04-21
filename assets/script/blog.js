const localStorageData = JSON.parse(localStorage.getItem('storedBlogPost')) || []

const blogContainer = document.getElementById('blogContainer')

for (let i = 0; i < localStorageData.length; i++) {
    //create the HTML elements that will create each blog post
    const divTag = document.createElement('div');
    const headingTag = document.createElement('h3');
    const p1Tag = document.createElement('p');
    const p2Tag = document.createElement('p');
    
    // add content into the newly created elements
    headingTag.textContent = localStorageData[i].title
    p1Tag.textContent = localStorageData[i].content
    p2Tag.textContent = localStorageData[i].username

    // append elements to divTag then to blogContainer
    divTag.append(headingTag, p1Tag, p2Tag)
    blogContainer.append(divTag)
}
