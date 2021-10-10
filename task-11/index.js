import { createPostsNav } from './posts-nav.js';
import { createPostsList } from './posts-list.js';
import { createPostPage } from './post-page.js';
import { createPostComment } from './post-comment.js';

(async function() {
    const postNav = document.querySelector('.nav__list');
    const postPage = document.querySelector('.comments-container');

    if (postNav) {
        createPostsNav();
        createPostsList();
    }

    if (postPage) {
        createPostPage();
        createPostComment();
    }
}());