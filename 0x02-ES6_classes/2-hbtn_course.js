class HolbertonCourse {
  constructor(name, length, students) {
    // Validate types during object creation
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students) || !students.every((s) => typeof s === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    // Initialize private attributes
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter and setter methods for each attribute
  get name() {
    return this._name;
  }

  set name(name) {
    // Validate type during attribute modification
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    // Validate type during attribute modification
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }

    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    // Validate type during attribute modification
    if (!Array.isArray(students) || !students.every((s) => typeof s === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    this._students = students;
  }
}
