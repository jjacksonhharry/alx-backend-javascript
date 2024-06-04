// 2-read_file.js

const fs = require('fs');

function countStudents (path) {
  try {
    // Read the file content synchronously
    const data = fs.readFileSync(path, 'utf-8');

    // Split the data into lines
    const lines = data.split('\n');

    // Filter out empty lines and header
    const validLines = lines.filter(line => line.trim() !== '').slice(1);

    // Initialize counters
    const studentCount = validLines.length;
    const fields = {};

    // Process each line
    validLines.forEach(line => {
      const [firstname, , , field] = line.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(firstname);
    });

    // Log the total number of students
    console.log(`Number of students: ${studentCount}`);

    // Log the number of students in each field and their names
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
