import { Conductor } from "./todoDataConductor";
import { listArray } from "./listArrayTracker";
class Display {
	constructor() {
		this.selectedList;
	}

	//creates a the form needed from todo
	todoForm() {
		let dataCond = new Conductor();
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
					label.setAttribute("for", element);
					label.textContent = element;

					let input = document.createElement("input");
					input.setAttribute("type", "radio");
					input.setAttribute("id", element);
					input.setAttribute("name", "priority");
					input.setAttribute("value", element);

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
					console.log("display.todoForm");
					console.log(listArray);
					const option = document.createElement("option");
					option.setAttribute("value", listArray[i].title);
					option.setAttribute("class", "list-value");
					const capitalizedList =
						listArray[i].title.charAt(0).toUpperCase() +
						listArray[i].title.slice(1);
					option.textContent = capitalizedList;
					select.append(option);
				}
			}
		}

		const submit = document.createElement("input");
		submit.setAttribute("type", "submit");
		submit.setAttribute("value", "Submit");
		submit.setAttribute("id", "todo-form-btn");
		form.appendChild(submit);
		let submitBtn = document.getElementById("todo-form-btn");
		let self = this;
		submitBtn.addEventListener("click", () => {
			dataCond.insertTodoIntoList();
			self.displayTodoAmount();
			console.log("Hi:)");
		});
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
		submit.setAttribute("id", "list-form-btn");
		form.appendChild(submit);
	}

	formReset() {
		document.getElementById("todo-form").reset();
	}

	displayLists() {
		//Displays default Capture list in list view.
		const listView = document.querySelector(".list-view");
		const captureList = listArray[0].title;
		const defaultList = document.createElement("button");
		defaultList.setAttribute("class", "list-option");
		defaultList.textContent = captureList;
		listView.append(defaultList);

		const listSubmit = document.getElementById("list-form-btn");
		listSubmit.addEventListener("click", () => {
			let listArrayLen = listArray.length;
			let newList = listArray[listArrayLen - 1].title;
			const inputList = document.createElement("button");
			inputList.setAttribute("class", "list-option");
			inputList.textContent = newList;
			listView.append(inputList);
			this.displaySelectedList();
		});
	}

	displaySelectedList() {
		let self = this;
		let listNodes = document.querySelectorAll(".list-option");
		listNodes.forEach(function (listNodeEle, i) {
			listNodes[i].addEventListener("click", () => {
				const selectedList = listNodes[i].textContent;
				const listTitle = document.querySelector(".header__list-title");
				listTitle.textContent = selectedList;
				console.log("title updated");
				self.selectedList = selectedList;
				self.displayTodoAmount();
				self.displayTodo();
			});
		});
	}

	displayTodo() {
		//curently will display todo title. figure out a way to only display todo once to avoid duplicates.
		const currentList = document.querySelector(
			".header__list-title"
		).textContent;
		const todoView = document.querySelector(".todo-view");
		for (let i = 0; i < listArray.length; i++) {
			// const element = listArray[i];
			let listTitle = listArray[i].title;
			if (currentList == listTitle && listArray[i].todos.length > 0) {
				const todoContainer = document.createElement("div");

				const title = document.createElement("h1");
				const description = document.createElement("p");
				const dueDate = document.createElement("p");
				const priority = document.createElement("p");

				//Adding todo details to elements
				console.log(listArray[i].todos[i].title);
				title.textContent = listArray[i].todos[i].title;
				description.textContent = listArray[i].todos[i].description;
				dueDate.textContent = listArray[i].todos[i].dueDate;
				priority.textContent = listArray[i].todos[i].priority;

				//Settings Attributes
				todoContainer.setAttribute('class','todo-obj');
				title.setAttribute('class','todo-title');
				description.setAttribute('class','todo-desc');
				dueDate.setAttribute('class','todo-duedate');
				priority.setAttribute('class','todo-priority');

				title.setAttribute('class','todo-items')
				description.setAttribute('class','todo-items');
				dueDate.setAttribute('class','todo-items');
				priority.setAttribute('class','todo-items');

				todoContainer.append(title);
				todoContainer.append(description);
				todoContainer.append(dueDate);
				todoContainer.append(priority);

				todoView.append(todoContainer);
			} else {
				console.log("there are no todos to display");
			}
		}
	}

	displayTodoAmount() {
		console.log(listArray[0].title);
		for (let i = 0; i < listArray.length; i++) {
			const listTitle = listArray[i].title;
			const listTodoLen = listArray[i].todos.length;
			//currently checks if selected list from list nodes matches.
			//TODO need to update the number when todo is submitted without changing default list
			if (listTitle == this.selectedList) {
				console.log(listTitle + " " + this.selectedList + "matches");
				console.log(listTodoLen);
				const counter = document.getElementById("header__todo-amount");
				counter.textContent = listTodoLen;
			}
			//Will update counter even is listnode is not selected.
			let defaultList = document.querySelector(
				".header__list-title"
			).textContent;
			if (listTitle == defaultList) {
				console.log("list wasnt changed.");
				console.log(listArray);
				const counter = document.getElementById("header__todo-amount");
				counter.textContent = listTodoLen;
			}
		}
	}
}
export { Display };
