export const createPostPage = async () => {
    const postPage = document.querySelector('.post-block');
    let postContent = '';

    const pageParams = new URLSearchParams(location.search);
    const postId = pageParams.get('id');

    const response = await fetch(`http://gorest.co.in/public-api/posts/${postId}`);
    const result = await response.json();
    const post = result.data;

    postContent = `
        <div class="card">
            <div class="card-body">
                <h1 class="card-title">${post.title}</h1>
                <p class="card-text">${post.body}</p>
            </div>
        </div>
    `;

    postPage.innerHTML = postContent;
}