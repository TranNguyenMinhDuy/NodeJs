let fs = require("fs").promises
let path = require("path")

let DATA_DIR = path.join(__dirname, "blog_data")
let POSTS_FILE = path.join(DATA_DIR, "posts.json")

//khoi tao
async function init() {
    try{
        await fs.mkdir(DATA_DIR)
        console.log("Data directory created!")
    }catch(error){
        if(error.code !== "EEXIST"){
            console.error("Error creating directory: ", error)
        }
    }
}

//load posts 
async function loadPosts() {
    try{
        let data = await fs.readFile(POSTS_FILE, 'utf8')
        let posts = JSON.parse(data)

        if(!Array.isArray(posts)){
            posts = [posts]
        }
        return posts;
    }catch(error){
        return [];
    }
}

//save post
async function savePosts(posts) {
    await fs.writeFile(POSTS_FILE, JSON.stringify(posts, null,2));
}

//create post 
async function createPosts(title, content, author) {
    await init();

    let posts = await loadPosts();
    let newPosts = {
        id: Date.now(),
        title,
        content,
        author,
        createdAt: new Date().toISOString,
        updatedAt: new Date().toISOString
    }

    posts.push(newPosts)
    await savePosts(posts);

    console.log("Post created: ", newPosts.title)
    return newPosts;
}

//update post 
async function updatePost(id, updates) {
    let posts = await loadPosts();
    let index = posts.findIndex(t => t.id === id)

    if(index === - 1){
        console.log("Posts not found!!!")
    }

    posts[index]={
        ...posts[index],
        ...updates,
        updatedAt: new Date().toISOString
    }

    await savePosts(posts)
    console.log("Post updated!!")
    return posts[index]
}

//delete post 
async function deletePosts(id) {
    let posts = await loadPosts()
    let index = posts.findIndex(t => t.id === id)

    if(index === -1){
        throw new Error("Post not found")
    }

    let deleted = posts.splice(index, 1)[0];
    await savePosts(posts)

    console.log("Post deleted: ", deleted)
    return deleted
}

//search post
async function searchPosts(keyword) {
    let posts = await loadPosts();
    keyword = keyword.toLowerCase();

    return posts.filter(post => {
        post.title.toLowerCase().includes(keyword) || 
        post.content.toLowerCase().includes(keyword)
    })
}

//lay tat ca
async function getAllPosts(){
    let posts = await loadPosts()
    return posts
}

//lay bang id
async function getPostById(id) {
    let posts = await loadPosts();
    return posts.find(t => t.id === id)
}

module.exports ={
    createPosts,
    deletePosts,
    loadPosts,
    searchPosts,
    updatePost,
    getAllPosts,
    getPostById
}