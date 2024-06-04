// 5-http.js

const http = require('http');
const fs = require('fs').promises;
const { URL } = require('url');

// Function to count students as defined in 3-read_file_async.js
async function countStudents (path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.split('\n');
    const validLines = lines.filter(line => line.trim() !== '').slice(1);

    const studentCount = validLines.length;
    const fields = {};

    validLines.forEach(line => {
      const [firstname, , , field] = line.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(firstname);
    });

    let output = `Number of students: ${studentCount}\n`;
    for (const [field, names] of Object.entries(fields)) {
      output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }

    return output.trim();
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

// Create HTTP server
const app = http.createServer(async (req, res) => {
  const reqUrl = new URL(req.url, `http://${req.headers.host}`);
  if (reqUrl.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (reqUrl.pathname === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    try {
      const studentsInfo = await countStudents(process.argv[2]);
      res.end(studentsInfo);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
