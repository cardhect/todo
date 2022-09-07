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
display.todoFormModal();
display.editForm();


//TODO Set todo Complete button.

//TODO View All button

//TODO Edit details button w/ modal
