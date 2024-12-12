function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

loadPost();

function displayPost(posts){
    const postContainer = document.getElementById('post-container');
    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h4>Users -${post.id}</h4>
        <h4>Post: Title, ${post.title}</h5>
        <p>Post Description, </br> ${post.body}</p>
        `;
        postContainer.appendChild(div)
    }
    console.log(posts);
}