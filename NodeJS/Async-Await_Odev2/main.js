const postsControl = require('./lib/postsControl');

const newPost = {
    name: "newPost",
    desc: "newPost is added"
};

const execute = async () => {
    console.log("/**********************************************************/");

    try {
        console.log("\nBefore Adding a Post");
        postsControl.showPosts();

        const addPostResult = await postsControl.addPost(newPost);
        //console.log(addPostResult);

        console.log("\nAfter Adding a Post");
        postsControl.showPosts();
        console.log("\nBefore Deleting a Post");
        postsControl.showPosts();

        const deletePostResult = await postsControl.deletePostByProp('post1', 'name');
        //console.log(deletePostResult);

        console.log("\nAfter Deleting a Post");
        postsControl.showPosts();
    } catch (error) {
        console.log(error);
    }

    console.log("\n/**********************************************************/");

    return "isDone";
}

execute()
    .then(str => console.log(str));



