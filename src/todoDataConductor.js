import { Todo } from "./createToDo";
import { listArray } from "./listArrayTracker";
import { Display } from "./display";
import { List } from "./createList";
class Conductor {
	constructor() {
		this.todoData = []; //I want to access this array in method.
		this.list;
	}

	grabFormData() {
		const todoFormBtn = document.querySelector("#todo-form-btn");

		let arrayData = this;

		todoFormBtn.addEventListener("click", () => {
			const title = document.getElementById("title").value;
			const description = document.getElementById("description").value;
			const dueDate = document.getElementById("due-date").value;
			let priority;
			var ele = document.getElementsByName("priority");

			for (let i = 0; i < ele.length; i++) {
				if (ele[i].checked) {
					priority = ele[i].value;
				}
			}
			const list = document.getElementById("list").value;

			//create todoObj
			const todoObj = new Todo(title, description, dueDate, priority);

			//Pushes todo to array
			arrayData.todoData.push(todoObj);
			arrayData.list = list;
		});
	}

	pushToList(list) {
		let todoDataLen = this.todoData.length;
		list.add(this.todoData[todoDataLen - 1]);
	}

	returnList() {
		return this.list;
	}

	insertTodoIntoList() {
		let conductor = this;
		let display = new Display();
		//Grabs data from
		//Grabs form data and inserts it into the selected List
		let formBtn = document.getElementById("todo-form-btn");
		
		conductor.grabFormData();
		
		formBtn.addEventListener("click", function () {
			//TODO: Create code that grabs selected list and inserts into that list.
			let lists = document.getElementById("list");
			let collection = lists.selectedOptions;

			let selectedList = collection[0].label;
			console.log(selectedList);

			//Inserts data to selected list when submitted.
			for (let index = 0; index < listArray.length; index++) {
				const list = listArray[index];
				if (list.title == selectedList) {
					conductor.pushToList(listArray[index]);
					console.log(listArray);
				} else {
					console.log("Code exit 1");
				}
			}

			display.formReset();
			console.log(listArray);
		});
	}

	createNewList() {
		let display = new Display();
		let listBtn = document.getElementById("list-form-btn");
		
		listBtn.addEventListener('click',()=>{
			let listInput = document.getElementById('new-list').value;
			const capitalizedList = listInput.charAt(0).toUpperCase() + listInput.slice(1);
			const newList = new List(capitalizedList);
			listArray.push(newList);
			display.formReset();
			console.log(listArray);

			const listOptions = document.getElementById('list');
			const option = document.createElement('option');
			option.setAttribute('value',listInput);
			option.setAttribute('class','list-value')
			option.textContent = capitalizedList;
			listOptions.append(option);
		})

	}
}
export { Conductor };
