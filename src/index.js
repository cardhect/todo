import {List} from "./createList"
import {Todo} from "./createToDo.js"
import {Display} from "./display"
import {Conductor} from './todoDataConductor';
//Holds created arrays
import {listArray} from "./listArrayTracker.js";


let display = new Display();
let dataCond = new Conductor();
let capture = new List('capture');
listArray.push(capture);
console.log(listArray);
//Loads form
display.todoForm();
//Grabs data from form

//Grabs form data and inserts it into the selected List
let formBtn = document.getElementById('todo-form-btn');
dataCond.grabFormData();
formBtn.addEventListener('click',function(){
    display.formReset();
    //Inserts data to default list when submitted.
    dataCond.pushToList(capture);
//i want to be bale to insert a variable above depending on the selected list so it goes to its correct list.
    console.log(capture);

})


