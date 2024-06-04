// 7-http_express.js

const express = require('express');
const fs = require('fs').promises;
const app = express();

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

// Define the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define the /students endpoint
app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');
  try {
    const studentsInfo = await countStudents(process.argv[2]);
    res.end(studentsInfo);
  } catch (error) {
    res.end(error.message);
  }
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
