/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from 'crud.js';

// Create an object called row with type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Insert a row and capture the returned RowID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`CRUD.insertRow(obj)`);
console.log(`// Insert row ${JSON.stringify(row)}`);

// Create updatedRow with type RowElement and update age field
const updatedRow: RowElement = { ...row, age: 23 };

// Update the row with the new RowID
CRUD.updateRow(newRowID, updatedRow);
console.log(`CRUD.updateRow(newRowID, updatedRow);`);
console.log(`// Update row ${newRowID} ${JSON.stringify(updatedRow)}`);

// Delete the row with the newRowID
CRUD.deleteRow(newRowID);
console.log(`CRUD.deleteRow(${newRowID});`);
console.log(`// Delete row id ${newRowID}`);
