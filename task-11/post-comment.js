export const createPostComment = async () => {
    const commentBlock = document.querySelector('.comments-block');
    let postComment = '';

    const pageParams = new URLSearchParams(location.search);
    const postId = pageParams.get('id');

    const response = await fetch(`http://gorest.co.in/public-api/comments?post_id=${postId}`);
    const result = await response.json();
    const comment = result.data;

    comment.map(item => {
        postComment = `
        <div class="card">
            <div class="card-header">
                ${item.email}
            </div>
            <div class="card-body">
                <h1 class="card-title">${item.name}</h1>
                <p class="card-text">${item.body}</p>
            </div>
        </div>
    `;

    commentBlock.innerHTML = postComment;
    });
}