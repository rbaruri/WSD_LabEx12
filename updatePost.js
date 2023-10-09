const fs = require('fs');

function updateBlogPost(title, newContent) {
  const filename = `posts/${title}.txt`;

  fs.writeFile(filename, newContent, (err) => {
    if (err) {
      console.error('Error updating blog post:', err);
    } else {
      console.log('Blog post updated successfully');
    }
  });
}

// Example usage
updateBlogPost('blog-post', 'Hello World !!!! 1234');
