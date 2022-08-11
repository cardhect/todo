import {Todo} from "./createToDo";

class Conductor {
	
	constructor() {
		this.todoData = [];//I want to access this array in method.
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
			var ele = document.getElementsByName('priority');
				  
				for(let i = 0; i < ele.length; i++) {
					if(ele[i].checked){
					priority = ele[i].value;	
				}
			}
			const list = document.getElementById("list").value;

			//create todoObj
			const todoObj = new Todo(title,description,dueDate,priority);

			//Pushes todo to array
			arrayData.todoData.push(todoObj);
			arrayData.list = list;
		});
	}

	returnArray() {
		console.log(this.todoData);
	}

	pushToList(list) {
		let todoDataLen = this.todoData.length
		list.add(this.todoData[todoDataLen-1]);
	}

	returnList() {
		return this.list;
	} 

}
export { Conductor };
