import {List} from "./createList"
import {Display} from "./display"
import {Conductor} from './todoDataConductor';
//Holds created arrays
import {listArray} from "./listArrayTracker.js";


//Dom controller
let display = new Display();
//Data Manipulator
let dataCond = new Conductor();
//Lists 
//TODO make this automatic.....
//DEFAULT CREATED LIST
let capture = new List('Capture');
listArray.push(capture);
let nextActions = new List('Next actions');
listArray.push(nextActions);
let waitingOn = new List('Hector');
listArray.push(waitingOn);



//TODO^^^^^^^^^^^^^^^^^^^^
//Loads form
display.todoForm();
display.listForm();

//grabs todo data and inserts into list
dataCond.insertTodoIntoList();
dataCond.createNewList();
