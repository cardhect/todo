import { Todo } from "./createToDo";
import { listArray } from "./listArrayTracker";
import { Display } from "./display";
import { List } from "./createList";
import {format} from 'date-fns';
import {saveToLocalStorage} from './saveToLocalStorage';

class Conductor {
	constructor() {
		this.todoData = []; //I want to access this array in method.
		this.list;
		this.todoObj = {
			title: '',
			desc: '',
			dueDate: '',
			prio: '',
		}
		
	}
	
	grabFormData() {


		let self = this;

		//Grabs data from form to create todoObj.
		const title = document.getElementById("title").value;
		const description = document.getElementById("description").value;
		
		//Grabs duedate and formats it.
		const dueDate = document.getElementById("due-date").value;
		let formatedDate = '';
		if (dueDate.length > 0) {
			formatedDate = format(new Date(dueDate.replace(/-/g, '/')), 'M/d/yy');
		} else {
			formatedDate = '';
			
		}
		// 



		let priority;
		var ele = document.getElementsByName("priority");

		for (let i = 0; i < ele.length; i++) {
			if (ele[i].checked) {
				priority = ele[i].value;
			}
		}



		//grab selected list and create todoObj
		const list = document.getElementById("list").value;
		const todoObj = new Todo(title, description, formatedDate, priority);

		//Pushes todo to array
		self.todoData.push(todoObj);
		self.list = list;
	}

	grabEditFromData(){




		//Grabs data from form to create todoObj.
		const title = document.getElementById("edit-title").value;
		const description = document.getElementById("edit-description").value;
		
		//Grabs duedate and formats it.
		const dueDate = document.getElementById("edit-due-date").value;
		// let formatedDate = '';
		// // if (dueDate.length > 0) {
		// // 	formatedDate = format(new Date(dueDate), 'M/d/yy');
		// // }




		let priority;
		var ele = document.getElementsByName("edit-priority");

		for (let i = 0; i < ele.length; i++) {
			if (ele[i].checked) {
				priority = ele[i].value;
			}
		}

		return {title,description,dueDate,priority};
		
		
	}

		
		
	updateTodo(todoTitle){
			
			
			//Edited data from edit form.
			let newTitle = this.grabEditFromData().title;
			let newDesc = this.grabEditFromData().description;
			let newDueDate = this.grabEditFromData().dueDate;
			let formatedDate = format(new Date(newDueDate), 'M/d/yy');
			let newPrio = this.grabEditFromData().priority;
			
			//atodoObj Node list
			const todoObjs = document.querySelectorAll('.todo-obj');
			
			const currentList = document.querySelector('.header__list-title').textContent;

			for (let i = 0; i < listArray.length; i++) {
				const list = listArray[i].title;

				if (currentList == list) {
					
					for (let j = 0; j < todoObjs.length; j++) {
						const todoObjTitle = todoObjs[j].children[0].children[0].innerText;
						
						if (todoTitle == todoObjTitle) {
							const selectedTodo = listArray[i].todos[j];
							//Update todo obj.
							selectedTodo.title = newTitle;
							selectedTodo.description = newDesc;
							selectedTodo.dueDate = formatedDate;
							selectedTodo.priority = newPrio;
							
							//Update todo in todo view.
								todoObjs[j].children[0].firstChild.innerText = newTitle;
								
								todoObjs[j].children[1].children[1].innerText = newDesc;
								
								todoObjs[j].children[1].children[0].innerText = formatedDate;
								
								todoObjs[j].children[0].lastChild.innerText = newPrio;

						}
						
						
					}
				}
				
			}
			
	}

	pushToList(givenlist) {
		let todoDataLen = this.todoData.length;
		givenlist.add(this.todoData[todoDataLen - 1]);
		// list.remove();
	}

	_returnList() {
		return this.list;
	}

	insertTodoIntoList() {
		let conductor = this;
		//Grabs data from
		//Grabs form data and inserts it into the selected List


		conductor.grabFormData();
		let lists = document.getElementById("list");
		let collection = lists.selectedOptions;

		let selectedList = collection[0].label;
		

		//Inserts data to selected list when submitted.
		for (let index = 0; index < listArray.length; index++) {
			const list = listArray[index];
			if (list.title == selectedList) {
				conductor.pushToList(listArray[index]);
				saveToLocalStorage();
			}
		}
	}

	createNewList() {
		let display = new Display();
		let listBtn = document.getElementById("list-form-btn");

		listBtn.addEventListener("click", () => {
			let listInput = document.getElementById("new-list").value;
			const capitalizedList =
				listInput.charAt(0).toUpperCase() + listInput.slice(1);
			const newList = new List(capitalizedList);
			listArray.push(newList);
			display.formReset();

			const listOptions = document.getElementById("list");
			const option = document.createElement("option");
			option.setAttribute("value", listInput);
			option.setAttribute("class", "list-value");
			option.textContent = capitalizedList;
			listOptions.append(option);
		});
	}

	removeTodo() {
		const display = new Display();
		let deleteButtons = document.querySelectorAll(".todo-delete");


		const todoView = document.querySelector(".todo-view");
		for (let index = 0; index < deleteButtons.length; index++) {
			deleteButtons[index].addEventListener("click", (event) => {
				const todoElement = event.path[2];
				
				
				todoView.removeChild(todoElement);

				//removes the todo from its list.
				const deletedTodo =event.path[2].firstChild.childNodes[0].innerText;
				const listTitle = document.querySelector(
					".header__list-title"
				).textContent;
				for (let i = 0; i < listArray.length; i++) {
					const listToRemoveFrom = listArray[i];
					if (listTitle == listArray[i].title) {
						listToRemoveFrom.remove(deletedTodo);
						display.displayTodoAmount();
						
						
					}
				}
			});
		}
	}
	todoEditButtonListener(){
		const self = this;
		const display = new Display();
		const todoEditBtns = document.querySelectorAll('.todo-edit');

		for (let i = 0; i < todoEditBtns.length; i++) {
			const element = todoEditBtns[i];

			element.addEventListener('click',(e)=>{
				
				const formEle = document.getElementById('edit-modal');
				formEle.style.display = 'block';
				//Title works
					const title = e.target.parentElement.parentElement.childNodes[0].childNodes[0].innerText;
					//Desc Works
					const desc = e.target.parentNode.parentNode.childNodes[1].childNodes[1].innerText;
					//due date works
					const dueDate = e.target.parentNode.parentNode.childNodes[1].childNodes[0].innerText;
					
					let formatedDate = '';
					if (dueDate.length > 0) {
						formatedDate = format(new Date(dueDate), 'yyyy-MM-dd');
					}

					//Prio works
					const prio = e.target.parentNode.parentNode.childNodes[0].childNodes[1].innerText;

					//Shows todo data on edit form
					display.selectedTodoEdit(title,desc,formatedDate, prio);

					//updates list options in edit form 
					const editListOptions = document.querySelector('#edit-list');
					editListOptions.innerHTML = "";
					for (let i = 0; i < listArray.length; i++) {
						const option = document.createElement("option");
						option.setAttribute("value", listArray[i].title);
						option.setAttribute("class", "list-value");
						const capitalizedList =
							listArray[i].title.charAt(0).toUpperCase() +
							listArray[i].title.slice(1);
							option.textContent = capitalizedList;
						
						const select = document.querySelector('#edit-list');

							select.append(option);
					}



					const makeChangesBtn = document.getElementById('edit-form-btn');

					makeChangesBtn.addEventListener('click',()=>{
						self.updateTodo(title);
						
						})
						
						
					})
					
				}
			}
			
	
}
export { Conductor };
