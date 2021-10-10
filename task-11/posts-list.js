import { getPostsData } from "./post-get.js";

export const createPostsList = async () => {
    const posts = await getPostsData();
    const postsList = document.querySelector('.posts-list');
    let postItem = '';

    for (let i = 0; i < posts.posts.length; i++) {
        postItem += `
        <li>
        <a class="posts-list__link" href="post.html?id=${posts.posts[i].id}">
            Статья ${i + 1}
        </a>
        </li>
        `;

        postsList.innerHTML = postItem;
    }

}