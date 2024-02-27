const fs = require('fs');

function countStudents (path) {
  try {
    console.log('After!');
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.trim().split('\n');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const students = {};
    for (const line of lines.slice(1)) {
      const [firstName, , , field] = line.split(',').map((field) => field.trim());

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

    console.log(`Number of students: ${lines.length - 1}`);
    for (const field in students) {
      console.log(`Number of students in ${field}: ${students[field].count}. List: ${students[field].list.join(', ')}`);
    }
    console.log('Done!');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
