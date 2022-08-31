import {List} from "./createList"
import {Display} from "./display"
import {Conductor} from './todoDataConductor';
//Holds created arrays
import {listArray} from "./listArrayTracker.js";
import {format} from 'date-fns';

//Dom controller
let display = new Display();
//Data Manipulator
let dataCond = new Conductor();

//DEFAULT CREATED LIST
let defaultList = new List('Todo');
listArray.push(defaultList);

//Loads form
display.todoForm();
display.listForm();

//grabs todo data and inserts into list
dataCond.createNewList();
display.formReset();
display.displayListButtons();


//TODO Create modal to grab user information. Instead of taking up space in view. Use same type of modal to edit todo details. 

//TODO Set todo Complete button.

//TODO Change todo Priority buttons

//TODO View All button

//TODO Expand todo button
//TODO Edit details button w/ modal
//TODO use date-fns to format the dates
//TODO


let dates = format(new Date('1998-4-9'), 'MMM d, Y');
console.log(dates);
