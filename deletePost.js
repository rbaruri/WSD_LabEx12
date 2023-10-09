const fs = require('fs');

function deleteBlogPost(title) {
  const filename = `posts/${title}.txt`;

  fs.unlink(filename, (err) => {
    if (err) {
      console.error('Error deleting blog post:', err);
    } else {
      console.log('Blog post deleted successfully');
    }
  });
}

// Example usage
deleteBlogPost('blog-post');
