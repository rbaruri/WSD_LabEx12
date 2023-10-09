const fs = require('fs');

// Create a "posts" directory if it doesn't exist
if (!fs.existsSync('posts')) {
  fs.mkdirSync('posts');
}
