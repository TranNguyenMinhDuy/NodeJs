// test-blog.js
let blog = require("./blog");

async function test() {
  console.log("=== BLOG SYSTEM TEST ===\n");
  
  try {
    // Create posts
    // await blog.createPost(
    //   "Getting Started with Node.js",
    //   "Node.js is a JavaScript runtime...",
    //   "An"
    // );
    
    // await blog.createPost(
    //   "Understanding Async/Await",
    //   "Async/await makes asynchronous code...",
    //   "Bình"
    // );
    
    // Get all posts
    let posts = await blog.getAllPosts();
    console.log("\n All Posts:");
    posts.forEach(post => {
      console.log(`- [${post.id}] ${post.title} by ${post.author}`);
    });
    
    // Update post
    if (posts.length > 0) {
      await blog.updatePost(posts[0].id, {
        title: "Getting Started with Node.js - Updated"
      });
    }
    
    // Search
    let results = await blog.searchPosts("async");
    console.log("\n Search results for 'async':");
    results.forEach(post => {
      console.log(`- ${post.title}`);
    });
    
    // Delete
    if (posts.length > 1) {
      await blog.deletePosts(posts[1].id);
    }
    
    // Final state
    posts = await blog.getAllPosts();
    console.log("\n Final Posts:");
    posts.forEach(post => {
      console.log(`- ${post.title}`);
    });
    
  } catch (error) {
    console.error(" Error:", error.message);
  }
}

test();