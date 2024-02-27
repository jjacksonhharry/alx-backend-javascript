const http = require('http');
const { readFile } = require('fs');

const host = '127.0.0.1';
const port = 1245;

function countStudents (path) {
  try {
    console.log('After!');
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.trim().split('\n');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const students = {};
    for (const line of lines.slice(1)) { // Skip the header line
      const [firstName, lastName, age, field] = line.split(',').map((field) => field.trim());

      if (field in students) {
        students[field].count++;
        students[field].list.push(firstName);
      } else {
        students[field] = {
          count: 1,
          list: [firstName]
        };
      }
    }

    console.log(`Number of students: ${lines.length - 1}`); // Exclude the header line
    for (const field in students) {
      console.log(`Number of students in ${field}: ${students[field].count}. List: ${students[field].list.join(', ')}`);
    }
    console.log('Done!');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }

  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((output) => {
      const outString = output.slice(0, -1);
      res.end(outString);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});

app.listen(port, host, () => {});

module.exports = app;
