const posts = require('../data/posts');

const addPost = ({ name, desc }) => {
    let promise = null;
    if (name && desc) {
        const post = { id: posts.length + 1, name, desc };
        promise = Promise.resolve(`Success : { 
            id : ${post?.id}, 
            name : ${post?.name}, 
            desc : ${post?.desc} 
        }`);
    } else {
        promise = Promise.reject(`Error : { 
            name : ${name}, 
            desc : ${desc} 
        }`);
    }
    return promise;
};
const deletePostByProp = (search, prop = 'id') => {
    let promise = null;
    const postIndex = posts.findIndex(post => post[prop] == search);
    if (postIndex !== -1) {
        const post = posts[postIndex];
        posts.splice(postIndex, 1);
        promise = Promise.resolve(`Success : { 
            id : ${post?.id}, 
            name : ${post?.name}, 
            desc : ${post?.desc} 
        }`);
    } else {
        promise = Promise.reject(`Error : { 
            id : ${postIndex}
        }`);
    }
    return promise;
};
const showPosts = () => {
    for (const post of posts) {
        console.log(post);
    }
};

module.exports = {
    addPost,
    deletePostByProp,
    showPosts
};