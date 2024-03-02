// more complex HTTP server using Express

const express = require('express');
const { readFile } = require('fs');

const app = express();
const port = process.env.PORT || 1245;

function countStudents (fileName) {
  const students = {};
  const fields = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    readFile(fileName, (err, data) => {
      if (err) {
        reject(new Error(`Error reading file: ${err.message}`));
      } else {
        let output = '';
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const field = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }
        const totalStudents = length - 1;
        output += `Number of students: ${totalStudents}\n`;
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${students[key].join(', ')}\n`;
          }
        }
        resolve(output);
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString()).then((output) => {
    res.send(['This is the list of our students', output].join('\n'));
  }).catch((error) => {
    res.send(`This is the list of our students\n${error}`);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
