import {List} from "./createList"
import {Todo} from "./createToDo.js"
import {Display} from "./display"
import {Conductor} from './todoDataConductor';
//Holds created arrays
import {listArray} from "./listArrayTracker.js";
import { setWeek } from "date-fns";


let display = new Display();
let dataCond = new Conductor();
let capture = new List('Capture');
let nextActions = new List('Next actions');
let waitingOn = new List('Hector');
listArray.push(capture);
listArray.push(nextActions);
listArray.push(waitingOn);
console.log(listArray);
console.log(listArray[0]);
//Loads form
display.todoForm();
//Grabs data from form

//Grabs form data and inserts it into the selected List
let formBtn = document.getElementById('todo-form-btn');
dataCond.grabFormData();
formBtn.addEventListener('click',function(){
    
    //TODO: Create code that grabs selected list and inserts into that list.
    let lists = document.getElementById('list');
    let collection = lists.selectedOptions; 
    
    let selectedList = collection[0].label;
    console.log(selectedList);
    
    
    //Inserts data to selected list when submitted.
    for (let index = 0; index < listArray.length; index++) {
        const list = listArray[index];
        if (list.title == selectedList) {
            dataCond.pushToList(listArray[index]);
        } else {
            console.log("something went wrong Ln44");
        }
        
    }

    
    //i want to be bale to insert a variable above depending on the selected list so it goes to its correct list.
    // console.log(capture);
    display.formReset();
    console.log(listArray);

})


