import { Conductor } from "./todoDataConductor";
import { listArray } from "./listArrayTracker";
import { isPast, isToday, parseISO } from "date-fns";
import { bubbleSort } from "./bubbleSort";
import { sortByPrio } from "./sortByPrio";
import { saveToLocalStorage } from "./saveToLocalStorage";

let dataCond = new Conductor();
class Display {
	constructor() {}  
	//creates a the form needed from todo
	todoForm() {
		let inputArray = ["title", "description", "dueDate", "priority", "list"];

		const form = document.createElement("form");
		form.setAttribute("onsubmit", "return false");
		form.setAttribute("id", "todo-form");
		const todoContainer = document.querySelector(".modal-content");
		const closeButton = document.querySelector(".close");
		todoContainer.insertBefore(form, closeButton);
		//each element displays different inputs based on their needed data.
		for (let i = 0; i < inputArray.length; i++) {
			const element = inputArray[i];
			if (element === "title") {
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
			if (element === "description") {
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
			if (element === "dueDate") {
				let label = document.createElement("label");
				label.setAttribute("for", "due-date");
				label.textContent = "Due Date:";
				let input = document.createElement("input");
				input.setAttribute("type", "date");
				input.setAttribute("id", "due-date");
				input.setAttribute("name", "due-date");
				form.appendChild(label);
				form.appendChild(input);
			}
			//change this to radio with 3 priority options low med high
			if (element === "priority") {
				let array = ["low", "med", "high"];
				let fieldSet = document.createElement("fieldset");
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
					form.appendChild(fieldSet);
					fieldSet.appendChild(input);
					fieldSet.appendChild(label);
				}
			}
			if (element === "list") {
				let label = document.createElement("label");
				label.setAttribute("for", "List");
				label.textContent = "List:";
				let select = document.createElement("select");
				select.setAttribute("id", "list");
				select.setAttribute("name", "list");
				form.appendChild(label);
				form.appendChild(select);

				const listOptions = document.querySelector("#list");
				listOptions.innerHTML = "";

				//Updates options on form when new list is created.
				for (let i = 0; i < listArray.length; i++) {
					// const element = listArray[i].title;
					const option = document.createElement("option");
					option.setAttribute("value", listArray[i].title);
					option.setAttribute("class", "list-value");
					option.textContent =
						listArray[i].title.charAt(0).toUpperCase() +
						listArray[i].title.slice(1);
					select.append(option);
				}
			}
		}
		//ON SUBMIT EVENT FUNC
		const submit = document.createElement("input");
		submit.setAttribute("type", "submit");
		submit.setAttribute("value", "Submit");
		submit.setAttribute("id", "todo-form-btn");
		form.appendChild(submit);
		let submitBtn = document.getElementById("todo-form-btn");
		let self = this;
		submitBtn.addEventListener("click", () => {
			dataCond.insertTodoIntoList();
			// self.displayTodoAmount();
			dataCond.todoEditButtonListener();
			// grabs the selected list in the options in the form

			// let collection = lists.selectedOptions;

			const currentList = document.querySelector(
				".header__list-title"
			).textContent;

			const selectedList = document.getElementById("list").value;

			if (selectedList === currentList) {
				self.clearTodoView();
				self.displayTodo();
				self.editFormModal();
				dataCond.todoEditButtonListener();
				// dataCond.removeTodo();
				self.formReset();
			} else {
				self.formReset();
			}
		});
	}
	editForm() {
		let inputArray = ["title", "description", "dueDate", "priority", "list"];

		const form = document.createElement("form");
		form.setAttribute("onsubmit", "return false");
		form.setAttribute("id", "edit-form");
		const todoContainer = document.querySelector(".edit-modal-content");
		const closeButton = document.querySelector(".edit-close");
		todoContainer.insertBefore(form, closeButton);
		//each element displays different inputs based on their needed data.
		for (let i = 0; i < inputArray.length; i++) {
			const element = inputArray[i];
			if (element === "title") {
				let label = document.createElement("label");
				label.setAttribute("for", "edit-title");
				label.textContent = "Title:";
				let input = document.createElement("input");
				input.setAttribute("type", "text");
				input.setAttribute("id", "edit-title");
				input.setAttribute("name", "edit-title");

				form.appendChild(label);
				form.appendChild(input);
			}
			if (element === "description") {
				let label = document.createElement("label");
				label.setAttribute("for", "edit-description");
				label.textContent = "Description:";
				let input = document.createElement("input");
				input.setAttribute("type", "text");
				input.setAttribute("id", "edit-description");
				input.setAttribute("name", "edit-description");
				form.appendChild(label);
				form.appendChild(input);
			}
			if (element === "dueDate") {
				let label = document.createElement("label");
				label.setAttribute("for", "edit-due-date");
				label.textContent = "Due Date:";
				let input = document.createElement("input");
				input.setAttribute("type", "date");
				input.setAttribute("id", "edit-due-date");
				input.setAttribute("name", "edit-due-date");
				form.appendChild(label);
				form.appendChild(input);
			}
			//change this to radio with 3 priority options low med high
			if (element === "priority") {
				let array = ["low", "med", "high"];
				let fieldSet = document.createElement("fieldset");
				let label = document.createElement("label");

				label.setAttribute("for", "edit-priority");
				label.textContent = "Priority: ";
				form.appendChild(label);
				for (let index = 0; index < array.length; index++) {
					const element = array[index];

					let label = document.createElement("label");
					label.setAttribute("for", element);
					label.textContent = element;

					let input = document.createElement("input");
					input.setAttribute("type", "radio");
					input.setAttribute("id", `edit-${element}`);
					input.setAttribute("value", element);
					input.setAttribute("name", "edit-priority");
					form.appendChild(fieldSet);
					fieldSet.appendChild(input);
					fieldSet.appendChild(label);
				}
			}
			if (element === "list") {
				let label = document.createElement("label");
				label.setAttribute("for", "List");
				label.textContent = "List:";
				let select = document.createElement("select");
				select.setAttribute("id", "edit-list");
				select.setAttribute("name", "list");
				form.appendChild(label);
				form.appendChild(select);

				const editListOptions = document.querySelector("#edit-list");
				editListOptions.innerHTML = "";

				//Updates options on form when new list is created.
				for (let i = 0; i < listArray.length; i++) {
					// const element = listArray[i].title;
					const option = document.createElement("option");
					option.setAttribute("value", listArray[i].title);
					option.setAttribute("class", "list-value");
					option.textContent =
						listArray[i].title.charAt(0).toUpperCase() +
						listArray[i].title.slice(1);
					select.append(option);
				}
			}
		}
		const edit = document.createElement("input");
		edit.setAttribute("type", "submit");
		edit.setAttribute("value", "Make Changes");
		edit.setAttribute("id", "edit-form-btn");
		form.appendChild(edit);
		//Make Changes EVENT FUNC
		const makeChangesBtn = document.getElementById("edit-form-btn");
		let self = this;
		makeChangesBtn.addEventListener("click", () => {
			self.editFormModal();
		});
	}
	//Shows todo data on edit form
	selectedTodoEdit(title, desc, dueDate, prio) {
		const titleInput = document.querySelector("#edit-title");
		const descInput = document.querySelector("#edit-description");
		const dueDateInput = document.querySelector("#edit-due-date");
		const prioLow = document.querySelector("#edit-low");
		const prioMed = document.querySelector("#edit-med");
		const prioHigh = document.querySelector("#edit-high");

		titleInput.value = title;
		descInput.value = desc;
		dueDateInput.value = dueDate;

		if (prio === "low") {
			prioLow.checked = true;
		} else if (prio === "med") {
			prioMed.checked = true;
		} else if (prio === "high") {
			prioHigh.checked = true;
		}
		// dueDateInput
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
		label.textContent = "Add List:";
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
	// editFormReset() {
	// 	document.getElementById("edit-form").reset();
	// }

	displayListButtons() {
		// dataCond.removeTodo();
		//Displays default Capture list in list view.
		const listContainer = document.querySelector(".list__container");
		
		const initialList = document.querySelector(".list-option");
		//creates default list if it is not there.
		if (initialList == null) {
			const captureList = listArray[0].title;
			const listBtnContainer = document.createElement("div");
			listBtnContainer.setAttribute("class", "list-buttons");
			
			const defaultList = document.createElement("button");
			//create container for list and its delete button.
			
			const listDeleteButton = document.createElement("button");
			listDeleteButton.textContent = "Delete List";
			listDeleteButton.setAttribute("class", "list-delete-btn");
			
			defaultList.setAttribute("class", "list-option");
			defaultList.textContent = captureList;
			
			listBtnContainer.append(defaultList);
			listBtnContainer.append(listDeleteButton);
			listContainer.append(listBtnContainer);
			
			defaultList.addEventListener("click", (e) => {
				this.clearTodoView();
				this.displaySelectedList(e);
			});
		}
		//creates lists buttons if there are list on local storage.
		for (let i = 1; i < listArray.length; i++) {
			const listName = listArray[i].title;
			
			const inputList = document.createElement("button");
			inputList.setAttribute("class", "list-option");
			inputList.textContent = listName;
			
			const listBtnContainer = document.createElement("div");
			listBtnContainer.setAttribute("class", "list-buttons");
			
			listContainer.append(listBtnContainer);
			listBtnContainer.append(inputList);
			
			//adds delete button to newly created list
			const listDeleteButton = document.createElement("button");
			listDeleteButton.textContent = "Delete List";
			listDeleteButton.setAttribute("class", "list-delete-btn");
			
			listBtnContainer.append(listDeleteButton);
		}
		
		//Adds event listeners to list buttons pulled for local storage
		const localListOptions = document.querySelectorAll(".list-option");
		
		for (let index = 0; index < localListOptions.length; index++) {
			const element = localListOptions[index];
			
			element.addEventListener("click", (e) => {
				this.clearTodoView();
				this.displaySelectedList(e);
			});
		}
	}
	AddEventListenerToListSubmit() {
		const listContainer = document.querySelector(".list__container");
		//Adds event listeners to newly created list.
		const listSubmit = document.getElementById("list-form-btn");
		listSubmit.addEventListener("click", () => {
			let listArrayLen = listArray.length;
			let newList = listArray[listArrayLen - 1].title;
			const inputList = document.createElement("button");
			inputList.setAttribute("class", "list-option");
			inputList.textContent = newList;
			const listBtnContainer = document.createElement("div");
			listBtnContainer.setAttribute("class", "list-buttons");
			
			listContainer.append(listBtnContainer);
			listBtnContainer.append(inputList);
			
			//adds delete button to newly created list
			const listDeleteButton = document.createElement("button");
			listDeleteButton.textContent = "Delete List";
			listDeleteButton.setAttribute("class", "list-delete-btn");
			
			listBtnContainer.append(listDeleteButton);
			this.removeDeleteListListener();
			this.addDeleteListListener();
			
			saveToLocalStorage();
			console.log(listArray);
			
			//Adding event listener to each list button that will run to display todos when clicked.
			const listOptions = document.querySelectorAll(".list-option");
			
			for (let index = 0; index < listOptions.length; index++) {
				const element = listOptions[index];
				element.addEventListener("click", (e) => {
					this.clearTodoView();
					this.displaySelectedList(e);
				});
			}
		});
	}
	
	displaySelectedList(e) {
		let dataCond = new Conductor();
		//the list that was clicked.
		
		this.selectedList = e.target.innerText;
		
		const listTitle = document.querySelector(".header__list-title");
		listTitle.textContent = this.selectedList;
		
		// this.displayTodoAmount();
		this.displayTodo();
		dataCond.todoEditButtonListener();
		// dataCond.removeTodo();
	}
	
	removeFromArray = (e) => {
		console.log("Delete button was clicked");
		const targetList = e.target.parentNode.firstChild.innerText;
		console.log(targetList);
		for (let i = 0; i < listArray.length; i++) {
			const list = listArray[i].title;
			console.log(i);
			console.log(listArray);
			if (list === targetList) {
				listArray.splice(i, 1);
				console.log("you removed: " + targetList);
				console.table(listArray);
				this.clearListView();
				this.displayListButtons();
				this.addDeleteListListener();
				
				saveToLocalStorage();
				break;
			}
		}
	};
	
	addDeleteListListener() {
		const listDeleteBtn = document.querySelectorAll(".list-delete-btn");
		
		for (let i = 0; i < listDeleteBtn.length; i++) {
			//on click delete the list from the view
			//delete the list from the listArray object
			//update the view
			//update the localStorage with removed data.
			let deleteBtnElement = listDeleteBtn[i];
			
			deleteBtnElement.addEventListener("click", this.removeFromArray);
		}
	}
	
	removeDeleteListListener() {
		const listDeleteBtn = document.querySelectorAll(".list-delete-btn");

		for (let i = 0; i < listDeleteBtn.length; i++) {
			//on click delete the list from the view
			//delete the list from the listArray object
			//update the view
			//update the localStorage with removed data.
			let deleteBtnElement = listDeleteBtn[i];
			deleteBtnElement.removeEventListener("click", this.removeFromArray);
		}
	}
	
	displayTodo() {
		const currentList = document.querySelector(
			".header__list-title"
			).textContent;
			const todoView = document.querySelector(".todo-view");
			
			for (let i = 0; i < listArray.length; i++) {
				//listTitle is being used to hold value of the list title to check if it matches the selected list.
				let listTitle = listArray[i].title;
				let thisList = listArray[i];
				let listTodoLen = listArray[i].todos.length;
				
				// const selectedList = document.getElementById("list").value;
				if (currentList === listTitle && listTodoLen > 0) {
				for (let j = 0; j < listTodoLen; j++) {
					// const element = listArray.todos[index];
					
					const todoContainer = document.createElement("div");
					const todoTopDiv = document.createElement("div");
					const todoBotDiv = document.createElement("div");
					
					const title = document.createElement("h1");
					const description = document.createElement("p");
					const dueDate = document.createElement("p");
					const priority = document.createElement("p");
					const edit = document.createElement("button");
					const deleteTodo = document.createElement("button");
					
					title.textContent = thisList.todos[j].title;
					description.textContent = thisList.todos[j].description;
					dueDate.textContent = thisList.todos[j].dueDate;
					priority.textContent = thisList.todos[j].priority;
					edit.textContent = "Edit";
					deleteTodo.textContent = "Delete";
					// Container Attributes
					todoContainer.setAttribute("class", "todo-obj");
					todoTopDiv.setAttribute("class", "todo-top-div");
					todoBotDiv.setAttribute("class", "todo-bot-div");
					//Element Attributes
					title.setAttribute("class", "todo-items todo-title");
					description.setAttribute("class", "todo-items todo-desc");
					dueDate.setAttribute("class", "todo-items todo-duedate");
					priority.setAttribute("class", "todo-items todo-priority");
					edit.setAttribute("class", "todo-items todo-edit");
					deleteTodo.setAttribute("class", "todo-items todo-delete");
					
					todoTopDiv.append(title);
					todoTopDiv.append(priority);
					todoBotDiv.append(dueDate);
					todoBotDiv.append(description);
					todoBotDiv.append(edit);
					todoBotDiv.append(deleteTodo);
					
					todoContainer.append(todoTopDiv);
					todoContainer.append(todoBotDiv);
					
					todoView.append(todoContainer);
				}
			}
		}
	    dataCond.removeTodo();
		this.displayTodoAmount();
	}
	
	//Changes number amount of todos.
	displayTodoAmount() {
		for (let i = 0; i < listArray.length; i++) {
			const listTitle = listArray[i].title;
			const listTodoLen = listArray[i].todos.length;
			
			if (listTitle === this.selectedList) {
				const counter = document.getElementById("header__todo-amount");
				counter.textContent = listTodoLen;
			}
			//Will update counter even if listnode is not selected.
			let defaultList = document.querySelector(
				".header__list-title"
				).textContent;
				if (listTitle === defaultList) {
				const counter = document.getElementById("header__todo-amount");
				counter.textContent = listTodoLen;
			}
		}
	}
	
	clearTodoView() {
		const todoView = document.querySelector(".todo-view");
		todoView.innerHTML = "";
	}

	clearListView() {
		const listView = document.querySelector(".list__container");
		listView.innerHTML = "";
	}
	
	todoFormModal() {
		let modal = document.getElementById("myModal");

		// Get the button that opens the modal
		let btn = document.querySelector(".todo-form-modal");
		
		// Get the <span> element that closes the modal
		let span = document.getElementsByClassName("close")[0];

		// When the user clicks the button, open the modal
		btn.onclick = function () {
			modal.style.display = "block";
		};
		
		// When the user clicks on <span> (x), close the modal
		span.onclick = function () {
			modal.style.display = "none";
		};
		
		// When the user clicks outside the modal, close it
		window.onclick = function (event) {
			if (event.target === modal) {
				modal.style.display = "none";
			}
		};
	}
	editFormModal() {
		let modal = document.getElementById("edit-modal");
		
		// Get the button that opens the modal
		let btn = document.querySelector(".todo-edit");
		
		// Get the <span> element that closes the modal
		let span = document.getElementsByClassName("edit-close")[0];
		
		// When the user clicks the button, open the modal
		btn.onclick = function () {
			modal.style.display = "block";
		};
		
		// When the user clicks on <span> (x), close the modal
		span.onclick = function () {
			modal.style.display = "none";
		};
		
		// When the user clicks anywhere outside of the modal, close it
		//!todo Bug unable to exit edit since this func is not listening when in another list
		window.onclick = function (event) {
			if (event.target === modal) {
				modal.style.display = "none";
			}
		};
	}
	
	displayAllTasks() {
		const allTasks = document.getElementById("all-tasks");
		allTasks.addEventListener("click", () => {
			// clear todo view title and achange to All Tasks
			const todoViewHeader = document.querySelector(".header__list-title");
			
			todoViewHeader.textContent = "All Tasks";
			
			const headerCounter = document.querySelector("#header__todo-amount");
			
			let countHolder = 0;
			
			//Updates the header counter with amount of all todos in all lists.
			for (let i = 0; i < listArray.length; i++) {
				const listTodosLen = listArray[i].todos.length;
				countHolder += listTodosLen;
				headerCounter.textContent = countHolder;
			}
			// clear and update todo view with all tasks
			const todoView = document.querySelector(".todo-view");
			todoView.innerHTML = "";
			
			//Update todo view with all todos
			for (let i = 0; i < listArray.length; i++) {
				//listTitle is being used to hold value of the list title to check if it matches the selected list.
				
				let thisList = listArray[i];
				let listTodoLen = listArray[i].todos.length;
				
				//Cycles through each todo and appends them into the todo-view
				for (let j = 0; j < listTodoLen; j++) {
					const todoContainer = document.createElement("div");
					const todoTopDiv = document.createElement("div");
					const todoBotDiv = document.createElement("div");

					const title = document.createElement("h1");
					const description = document.createElement("p");
					const dueDate = document.createElement("p");
					const priority = document.createElement("p");
					// const edit = document.createElement("button");
					// const deleteTodo = document.createElement("button");
					
					title.textContent = thisList.todos[j].title;
					description.textContent = thisList.todos[j].description;
					dueDate.textContent = thisList.todos[j].dueDate;
					priority.textContent = thisList.todos[j].priority;
					// // edit.textContent = "Edit";
					// deleteTodo.textContent = "Delete";
					// Container Attributes
					todoContainer.setAttribute("class", "todo-obj");
					todoTopDiv.setAttribute("class", "todo-top-div");
					todoBotDiv.setAttribute("class", "todo-bot-div");
					//Element Attributes
					title.setAttribute("class", "todo-items todo-title");
					description.setAttribute("class", "todo-items todo-desc");
					dueDate.setAttribute("class", "todo-items todo-duedate");
					priority.setAttribute("class", "todo-items todo-priority");
					// // edit.setAttribute("class", "todo-items todo-edit");
					// deleteTodo.setAttribute("class", "todo-items todo-delete");
					
					todoTopDiv.append(title);
					todoTopDiv.append(priority);
					todoBotDiv.append(dueDate);
					todoBotDiv.append(description);
					// todoBotDiv.append(edit);
				    //todoBotDiv.append(deleteTodo);
					
					todoContainer.append(todoTopDiv);
					todoContainer.append(todoBotDiv);
					
					todoView.append(todoContainer);
				}
				dataCond.removeTodo();
			}
		});
	}
	
	displayTodoTasks(todoArray) {
		this.clearTodoView();
		
		const todoView = document.querySelector(".todo-view");
		
		for (let j = 0; j < todoArray.length; j++) {
			const todoContainer = document.createElement("div");
			const todoTopDiv = document.createElement("div");
			const todoBotDiv = document.createElement("div");
			
			const title = document.createElement("h1");
			const description = document.createElement("p");
			const dueDate = document.createElement("p");
			const priority = document.createElement("p");
			// const edit = document.createElement("button");
			// const deleteTodo = document.createElement("button");
			
			title.textContent = todoArray[j].title;
			description.textContent = todoArray[j].description;
			dueDate.textContent = todoArray[j].dueDate;
			priority.textContent = todoArray[j].priority;
			// // edit.textContent = "Edit";
			// deleteTodo.textContent = "Delete";
			// Container Attributes
			todoContainer.setAttribute("class", "todo-obj");
			todoTopDiv.setAttribute("class", "todo-top-div");
			todoBotDiv.setAttribute("class", "todo-bot-div");
			//Element Attributes
			title.setAttribute("class", "todo-items todo-title");
			description.setAttribute("class", "todo-items todo-desc");
			dueDate.setAttribute("class", "todo-items todo-duedate");
			priority.setAttribute("class", "todo-items todo-priority");
			// // edit.setAttribute("class", "todo-items todo-edit");
			// deleteTodo.setAttribute("class", "todo-items todo-delete");
			
			todoTopDiv.append(title);
			todoTopDiv.append(priority);
			todoBotDiv.append(dueDate);
			todoBotDiv.append(description);
			// todoBotDiv.append(edit);
			// todoBotDiv.append(deleteTodo);
			
			todoContainer.append(todoTopDiv);
			todoContainer.append(todoBotDiv);
			
			todoView.append(todoContainer);
			this.updateTodoCounter();
		}
		// dataCond.removeTodo();
	}
	
	displayUpcomingTasks() {
		
		const upcomingTasksBtn = document.getElementById("upcoming-tasks");
		
		upcomingTasksBtn.addEventListener("click", () => {
			let newTodoArray = [];
			//Put tasks into this array ordered by most recent date to furthest.
			
			//updates title to Upcoming
			const viewTitle = document.querySelector(".header__list-title");
			viewTitle.textContent = "Upcoming";
			
			//Cycle through lists
			for (let i = 0; i < listArray.length; i++) {
				//listTitle is being used to hold value of the list title to check if it matches the selected list.
				
				let thisList = listArray[i];
				let listTodoLen = listArray[i].todos.length;
				
				//Cycles through each todo and appends them into the todo-view and adds them into a array
				for (let j = 0; j < listTodoLen; j++) {
					let thisTodoObj = thisList.todos[j];
					
					const parsedDate = parseISO(
						new Date(thisTodoObj.dueDate).toISOString()
						);
						
						//Checks if date is in the past. will exclude it if it is.
						if (isPast(parsedDate)) {
							
						} else {
							newTodoArray.push(thisTodoObj);
						}
						//checks if date is today since isPast() function will return false.
						if (isToday(parsedDate)) {
							newTodoArray.push(thisTodoObj);
						}
					}
				}

				//Sorting function.
				bubbleSort(newTodoArray);
				
				this.clearTodoView();
				
				const todoView = document.querySelector(".todo-view");
				
				for (let j = 0; j < newTodoArray.length; j++) {
					const todoContainer = document.createElement("div");
					const todoTopDiv = document.createElement("div");
					const todoBotDiv = document.createElement("div");
					
					const title = document.createElement("h1");
					const description = document.createElement("p");
					const dueDate = document.createElement("p");
				const priority = document.createElement("p");
				// const edit = document.createElement("button");
				// const deleteTodo = document.createElement("button");
				
				title.textContent = newTodoArray[j].title;
				description.textContent = newTodoArray[j].description;
				dueDate.textContent = newTodoArray[j].dueDate;
				priority.textContent = newTodoArray[j].priority;
				// // edit.textContent = "Edit";
				// deleteTodo.textContent = "Delete";
				// Container Attributes
				todoContainer.setAttribute("class", "todo-obj");
				todoTopDiv.setAttribute("class", "todo-top-div");
				todoBotDiv.setAttribute("class", "todo-bot-div");
				//Element Attributes
				title.setAttribute("class", "todo-items todo-title");
				description.setAttribute("class", "todo-items todo-desc");
				dueDate.setAttribute("class", "todo-items todo-duedate");
				priority.setAttribute("class", "todo-items todo-priority");
				// // edit.setAttribute("class", "todo-items todo-edit");
				// deleteTodo.setAttribute("class", "todo-items todo-delete");
				
				todoTopDiv.append(title);
				todoTopDiv.append(priority);
				todoBotDiv.append(dueDate);
				todoBotDiv.append(description);
				// todoBotDiv.append(edit);
				// todoBotDiv.append(deleteTodo);
				
				todoContainer.append(todoTopDiv);
				todoContainer.append(todoBotDiv);
				
				todoView.append(todoContainer);
			}
			
			this.updateTodoCounter();
			
		});
		// dataCond.removeTodo();
	}
	
	displayTodayTasks() {
		const todayTasksBtn = document.getElementById("today-tasks");
		
		todayTasksBtn.addEventListener("click", () => {
			//updates title to Today
			const viewTitle = document.querySelector(".header__list-title");
			viewTitle.textContent = "Today";
			
			let todayTodoTasks = [];
			
			for (let i = 0; i < listArray.length; i++) {
				let thisList = listArray[i];
				let listTodoLen = listArray[i].todos.length;
				
				for (let j = 0; j < listTodoLen; j++) {
					let thisTodoObj = thisList.todos[j];
					let todoDate = thisTodoObj.dueDate;
					
					const parsedTodoDate = parseISO(new Date(todoDate).toISOString());
					
					//checks if date of todo is today and returns true or false
					let dateResult = isToday(parsedTodoDate);
					
					if (dateResult) {
						todayTodoTasks.push(thisTodoObj);
					}
				}
			}
			this.displayTodoTasks(todayTodoTasks);
			
			
			this.updateTodoCounter();
		});
		// dataCond.removeTodo();
	}

	displayPrioTasks() {
		const importantTaskBtn = document.getElementById("prio-tasks");
		
		importantTaskBtn.addEventListener("click", () => {
			let importantTasks = [];
			
			//updates title to Important
			const viewTitle = document.querySelector(".header__list-title");
			viewTitle.textContent = "Important";
			
			for (let i = 0; i < listArray.length; i++) {
				let thisList = listArray[i];
				let listTodoLen = listArray[i].todos.length;
				
				for (let j = 0; j < listTodoLen; j++) {
					let thisTodoObj = thisList.todos[j];
					importantTasks.push(thisTodoObj);
					//write function that sorts tasks by prio. from highest to smallest.
				}
			}
			importantTasks = sortByPrio(importantTasks);
			this.displayTodoTasks(importantTasks);

			this.updateTodoCounter();
		});

	}

	//This counter will grab all the currently displayed todos in the todo view element and change the counter to the corresponding todos.
	updateTodoCounter() {
		const headerCounter = document.querySelector("#header__todo-amount");
			const currentTasks = document.querySelectorAll('.todo-obj')
			let count = 0;
			//Updates the header counter with amount of all todos in all lists.
			for (let i = 0; i < currentTasks.length; i++) {
				count++;
			}

			headerCounter.innerText = count;
	}

	mobileSideMenuBtn() {
		const menuBtn = document.querySelector('.mobile-btn');
		const leftSideContainer = document.querySelector('.left-box-container');
		const toggleSideMenuClass = 'side-menu-transition';

		menuBtn.addEventListener('click', () => {
			console.log('I was clicked.');
			leftSideContainer.classList.toggle(toggleSideMenuClass);
		})
	}
}
// dataCond.removeTodo();
export { Display };





