const fs = require('fs').promises;

async function countStudents (path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.trim().split('\n');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const students = {};
    for (const line of lines.slice(1)) { // Skip the header line
      const [firstName, lastName, age, field] = line.split(',').map(field => field.trim());

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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
