import { Todo } from "./createToDo";
import { listArray } from "./listArrayTracker";
import { Display } from "./display";
import { List } from "./createList";
import {format} from 'date-fns';
class Conductor {
	constructor() {
		this.todoData = []; //I want to access this array in method.
		this.list;
	}

	grabFormData() {
		const todoFormBtn = document.querySelector("#todo-form-btn");

		let self = this;

		//Grabs data from form to create todoObj.
		const title = document.getElementById("title").value;
		const description = document.getElementById("description").value;
		
		//Grabs duedate and formats it.
		const dueDate = document.getElementById("due-date").value;
	
		let formatedDate = format(new Date(dueDate), 'MMM d, Y');
		// console.log(dates);



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

	pushToList(list) {
		let todoDataLen = this.todoData.length;
		list.add(this.todoData[todoDataLen - 1]);
		// list.remove();
	}

	_returnList() {
		return this.list;
	}

	insertTodoIntoList() {
		let conductor = this;
		let display = new Display();
		//Grabs data from
		//Grabs form data and inserts it into the selected List
		let formBtn = document.getElementById("todo-form-btn");

		conductor.grabFormData();
		let lists = document.getElementById("list");
		let collection = lists.selectedOptions;

		let selectedList = collection[0].label;
		console.log("todo was inserted in: " + selectedList);

		//Inserts data to selected list when submitted.
		for (let index = 0; index < listArray.length; index++) {
			const list = listArray[index];
			if (list.title == selectedList) {
				conductor.pushToList(listArray[index]);
			} else {
				console.log("Code exit 1");
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

	removeTodo(list) {
		let deleteButtons = document.querySelectorAll(".todo-delete");
		let self = this;
		const todoView = document.querySelector(".todo-view");
		for (let index = 0; index < deleteButtons.length; index++) {
			deleteButtons[index].addEventListener("click", (event) => {
				const todoElement = event.path[1];
				todoView.removeChild(todoElement);

				//removes the todo from its list.
				const deletedTodo = event.path[1].children[0].innerText;
				const listTitle = document.querySelector(
					".header__list-title"
				).textContent;
				for (let i = 0; i < listArray.length; i++) {
					const listToRemoveFrom = listArray[i];
					if (listTitle == listArray[i].title) {
						listToRemoveFrom.remove(deletedTodo);
						console.log(listToRemoveFrom);
					} else {
						console.log("Title didnt match");
					}
				}
			});
		}
	}
}
export { Conductor };
