import {List} from "./createList"
import {Display} from "./display"
import {Conductor} from './todoDataConductor';
//Holds created arrays
import {listArray} from "./listArrayTracker.js";
import {grabFromLocalStorage} from './grabFromLocalStorage';
//Dom controller
let display = new Display();
//Data Manipulator
let dataCond = new Conductor();

//DEFAULT CREATED LIST
let defaultList = new List('Todo');
listArray.push(defaultList);

//Loads form
display.listForm();

//grabs todo data and inserts into list
dataCond.createNewList();
display.displayListButtons();
//adds event listener to list-form-button
display.AddEventListenerToListSubmit();
grabFromLocalStorage();
//adds event listener to delete buttons
display.addDeleteListListener();

display.todoForm();
display.formReset();
display.todoFormModal();
display.editForm();
// dataCond.changeList();

//Display different tasks
display.displayAllTasks();
display.displayUpcomingTasks();
display.displayTodayTasks();
display.displayPrioTasks();




