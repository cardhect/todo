import {List} from "./createList"
import {Todo} from "./createToDo.js"
import {Display} from "./display"
import {Conductor} from './todoDataConductor';

let pageLoad = new Display();
let dataCond = new Conductor();
pageLoad.form();
dataCond.grabFormData();
let formBtn = document.getElementById('todo-form-btn');
formBtn.addEventListener('click',function(){
    console.log('array returned on click');
    dataCond.returnArray();

})


