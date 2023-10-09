const fs = require('fs');

function readBlogPost(title) {
  const filename = `posts/${title}.txt`;

  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading blog post:', err);
    } else {
      console.log(data); // Display the content of the blog post
    }
  });
}

// Example usage
readBlogPost('blog-post');
