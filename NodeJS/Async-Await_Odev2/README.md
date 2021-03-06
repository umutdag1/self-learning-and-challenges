# Async-Await 

<p align="center">
  <img src="https://user-images.githubusercontent.com/57832605/155864502-5ca93465-8a9a-4b2d-b422-0b732a2c10e7.png" alt="animated" />
</p>

## Installation (Yükleme)

Use the git clone command to clone the project to local.

(Projeyi bilgisayara klonlamak için git clone komutunu kullanın.)

```bash
git clone https://github.com/umutdag1/patika/
```

## Usage (Kullanım)

```bash
cd patika/NodeJS/Async-Await_Odev2
node main.js
```

## Example Code (Örnek Kod)
```js
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
```
