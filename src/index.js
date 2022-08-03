import {List} from "./createList"
import {Todo} from "./createToDo.js"
import {Display} from "./display"
import {Conductor} from './todoDataConductor';

let pageLoad = new Display();
let dataCond = new Conductor();
pageLoad.form();
dataCond.grabFormData();


