const fs = require('fs');

function createBlogPost(title, content) {
  const filename = `posts/${title}.txt`;

  fs.writeFile(filename, content, (err) => {
    if (err) {
      console.error('Error creating blog post:', err);
    } else {
      console.log('Blog post created successfully');
    }
  });
}

// Example usage
createBlogPost('blog-post', 'Hello World !!!');
