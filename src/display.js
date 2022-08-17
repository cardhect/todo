import {Conductor} from "./todoDataConductor";
import {listArray} from "./listArrayTracker";
class Display {
	constructor() {}


	//creates a the form needed from todo
	todoForm() {
		let inputArray = ["title", "description", "dueDate", "priority", "list"];

		const form = document.createElement("form");
		form.setAttribute("onsubmit", "return false");
		form.setAttribute("id", "todo-form");
		const todoView = document.querySelector(".box__container");
		todoView.appendChild(form);
		//each element displays different inputs based on their needed data.
		for (let i = 0; i < inputArray.length; i++) {
			const element = inputArray[i];
			if (element == "title") {
				let label = document.createElement("label");
				label.setAttribute("for", "title");
				label.textContent = "Title:";
				let input = document.createElement("input");
				input.setAttribute("type", "text");
				input.setAttribute("id", "title");
				input.setAttribute("name", "title");
				form.appendChild(label);
				form.appendChild(input);
			   }
			if (element == "description") {
				let label = document.createElement("label");
				label.setAttribute("for", "description");
				label.textContent = "Description:";
				let input = document.createElement("input");
				input.setAttribute("type", "text");
				input.setAttribute("id", "description");
				input.setAttribute("name", "description");
				form.appendChild(label);
				form.appendChild(input);
			}
			if (element == "dueDate") {
				let label = document.createElement("label");
				label.setAttribute("for", "due-date");
				label.textContent = "Due Date:";
				let input = document.createElement("input");
				input.setAttribute("type", "datetime-local");
				input.setAttribute("id", "due-date");
				input.setAttribute("name", "due-date");
				form.appendChild(label);
				form.appendChild(input);
			}
			//change this to radio with 3 priority options low med high
			if (element == "priority") {
				let array = ["low", "med", "high"];
				
                let label = document.createElement("label");
				label.setAttribute("for", "priority");
				label.textContent = "Priority: ";
				form.appendChild(label);
                for (let index = 0; index < array.length; index++) {
					const element = array[index];

					let label = document.createElement("label");
					label.setAttribute("for", element)
					label.textContent = element;

					let input = document.createElement("input");
					input.setAttribute("type", "radio");
					input.setAttribute("id", element);
					input.setAttribute("name", "priority");
                    input.setAttribute("value",element);

					form.appendChild(input);
					form.appendChild(label);
				}
			}
			if (element == "list") {
				let label = document.createElement("label");
				label.setAttribute("for", "List");
				label.textContent = "List:";
				let select = document.createElement("select");
				select.setAttribute("id", "list");
				select.setAttribute("name", "list");
				form.appendChild(label);
				form.appendChild(select);
			//TODO find out how to update these options when a new list gets created.
				for (let i = 0; i < listArray.length; i++) {
					//grabs created Lists and inputs them into the list selection options drop down.
					const element = listArray[i].title;
					console.log('display.todoForm');
					console.log(listArray);
					const option = document.createElement('option');
					option.setAttribute('value',listArray[i].title);
					option.setAttribute('class','list-value')
					const capitalizedList = listArray[i].title.charAt(0).toUpperCase() + listArray[i].title.slice(1);
					option.textContent = capitalizedList;
					select.append(option);
					
				}

			}
		}

		const submit = document.createElement("input");
		submit.setAttribute("type", "submit");
		submit.setAttribute("value", "Submit");
        submit.setAttribute('id','todo-form-btn')
		form.appendChild(submit);
	}

	listForm() {
		const form = document.createElement("form");
		form.setAttribute("onsubmit", "return false");
		form.setAttribute("id", "list-form");
		const listView = document.querySelector(".add-list");
		listView.appendChild(form);

			let label = document.createElement("label");
				label.setAttribute("for", "new-list");
				label.setAttribute("name", "new-list");
				label.textContent = "List:";
				let input = document.createElement("input");
				input.setAttribute("type", "text");
				input.setAttribute("id", "new-list");
				input.setAttribute("name", "new-list");
				form.appendChild(label);
				form.appendChild(input);


		const submit = document.createElement("input");
		submit.setAttribute("type", "submit");
		submit.setAttribute("value", "Submit");
        submit.setAttribute('id','list-form-btn')
		form.appendChild(submit);

	}

	formReset() {
		document.getElementById("todo-form").reset();
	}

	displayLists(){
		//Displays default Capture list in list view.
		const listView = document.querySelector('.list-view');
		const captureList = listArray[0].title;
		const defaultList = document.createElement('button');
		defaultList.setAttribute('class','list-option');
		defaultList.textContent = captureList;
		listView.append(defaultList);

		const listSubmit = document.getElementById('list-form-btn');
		listSubmit.addEventListener('click',()=>{
			let listArrayLen = listArray.length;
			let newList = listArray[listArrayLen-1].title
			const inputList = document.createElement('button');
			inputList.setAttribute('class','list-option');
			inputList.textContent = newList;
			listView.append(inputList);
			this.displaySelectedList();

		})
		
	}

	displaySelectedList() {

			let listNodes = document.querySelectorAll('.list-option');
			listNodes.forEach(function (listNodeEle,i) {
				listNodes[i].addEventListener('click',()=>{
					const selectedList = listNodes[i].textContent;
					const listTitle = document.querySelector('.header__list-title');
					listTitle.textContent = selectedList;
					console.log('title updated');
	
					
				})
			})
			
		}
	

	displayTodo(){

	}

	displayTodoAmount() {
		//TODO Needs to be reworked to display todo amount in currently selected List.
		// console.log(listArray[0].todos.length);
		const submit = document.getElementById('todo-form-btn');
		let todoCounter = listArray[0].todos.length;
		let counter = document.getElementById('header__todo-amount');
		counter.textContent = todoCounter;

		let listNodes = document.querySelectorAll('.list-option');
		
		for (let i = 0; i < listArray.length; i++) {
			// const element = listArray[i];
			listNodes[i].addEventListener('click',()=>{
				
				// if (todoCount > 0) {
				// 	let counter = document.getElementById('header__todo-amount');
				// 	counter.textContent = todoCount;
				// }
				const selectedList = document.querySelector('.header__list-title').textContent;
			
				// for (let i = 0; i < listArray.length; i++) {
					const list = listArray[i];
					const todoCount = list.todos.length;
					if (selectedList == list.title ) {
						console.log(todoCount)
					} else {
						console.log('List title does not match');
					}
				// }
			})
			
		}
	}
}
export { Display };
