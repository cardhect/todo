/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createList.js":
/*!***************************!*\
  !*** ./src/createList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "List": () => (/* binding */ List)
/* harmony export */ });
class List {

    constructor(title) {
        this.title = title;
        this.todos = [];
    }
    //adds given obj to list array
    add(todo){
        this.todos.push(todo);
    }


}



/***/ }),

/***/ "./src/createToDo.js":
/*!***************************!*\
  !*** ./src/createToDo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });

class Todo {
    constructor(title,description,dueDate,priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

 
}



/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Display": () => (/* binding */ Display)
/* harmony export */ });
/* harmony import */ var _todoDataConductor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoDataConductor */ "./src/todoDataConductor.js");
/* harmony import */ var _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listArrayTracker */ "./src/listArrayTracker.js");


class Display {
	constructor() {
		this.selectedList = 'Capture';
	}

	//creates a the form needed from todo
	todoForm() {
		let dataCond = new _todoDataConductor__WEBPACK_IMPORTED_MODULE_0__.Conductor();
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
				for (let i = 0; i < _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.length; i++) {
					//grabs created Lists and inputs them into the list selection options drop down.
					const element = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].title;
					console.log("display.todoForm");
					console.log(_listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray);
					const option = document.createElement("option");
					option.setAttribute("value", _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].title);
					option.setAttribute("class", "list-value");
					const capitalizedList =
						_listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].title.charAt(0).toUpperCase() +
						_listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].title.slice(1);
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
			// grabs the selected list in the options in the form
			let lists = document.getElementById("list");
			let collection = lists.selectedOptions;
			

			const currentList = document.querySelector(
				".header__list-title"
			).textContent;
			if (self.selectedList == currentList) {
				self.clearTodoView();
				self.displayTodo();
				self.formReset();
			} else {
				console.log("not currently in correct list view");
				self.formReset();
			}

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

	displayListButtons() {
		//Displays default Capture list in list view.
		const listView = document.querySelector(".list-view");
		const captureList = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[0].title;
		const defaultList = document.createElement("button");
		defaultList.setAttribute("class", "list-option");
		defaultList.textContent = captureList;
		listView.append(defaultList);

		const listSubmit = document.getElementById("list-form-btn");
		listSubmit.addEventListener("click", (event) => {
			console.log(event);
			let listArrayLen = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.length;
			let newList = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[listArrayLen - 1].title;
			const inputList = document.createElement("button");
			inputList.setAttribute("class", "list-option");
			inputList.textContent = newList;
			listView.append(inputList);

			//Adding event listener to each list button that will run to display todos when clicked.
			const listOptions = document.querySelectorAll(".list-option");

			for (let index = 0; index < listOptions.length; index++) {
				const element = listOptions[index];
				console.log(element);

				element.addEventListener("click", (e) => {
					console.log("You clicked... me");
					this.clearTodoView();
					this.displaySelectedList(e);
				});
			}
		});
	}

	displaySelectedList(e) {
		console.log("displaySelectedList Ran");
		console.log(this);
		//the list that was clicked.

		this.selectedList = e.target.innerText;
		console.log('Selected List: ' + this.selectedList);
	
		const listTitle = document.querySelector(".header__list-title");
		listTitle.textContent = this.selectedList;
	
		this.displayTodoAmount();
		this.displayTodo();
	}

	displayTodo(listView) {
		//curently will display todo title. figure out a way to only display todo once to avoid duplicates.
		const currentList = document.querySelector(
			".header__list-title"
		).textContent;
		const todoView = document.querySelector(".todo-view");
		//!BUG var (i) resets to 0 each time function is called thus causing it to display the same array element when you insert another one
		
		for (let i = 0; i < _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.length; i++) {
			console.log("list array len: " + _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.length);
			//listTitle is being used to hold value of the list title to check if it matches the selected list.
			//! when new list is created and selected and new todo is inputed the todo is not being displayed because listTitle is refrencing 'capture' list due to i being 0. Find a way to grab what list was selected.
			let listTitle = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].title;
			//! NOTE maybe create another for loop that cycles through the todos
			let listTodoLen = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].todos.length;
			const currentList = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i];
			
			
			if (this.selectedList == listTitle && listTodoLen > 0) {

				for (let j = 0; j < listTodoLen; j++) {
					// const element = listArray.todos[index];
					
					const todoContainer = document.createElement("div");
	
					const title = document.createElement("h1");
					const description = document.createElement("p");
					const dueDate = document.createElement("p");
					const priority = document.createElement("p");
	
					//Adding todo details to elements
					
					// console.log(listArray[j].todos[listTodoLen].title);
					console.log("this is the length");
					console.log(currentList.todos.length);
					//displays the last todo that was given.
					console.log(currentList.todos[j]);
	
					title.textContent = currentList.todos[j].title;
					description.textContent = currentList.todos[j].description;
					dueDate.textContent = currentList.todos[j].dueDate;
					priority.textContent = currentList.todos[j].priority;
	
					//Settings Attributes
					todoContainer.setAttribute("class", "todo-obj");
					title.setAttribute("class", "todo-title");
					description.setAttribute("class", "todo-desc");
					dueDate.setAttribute("class", "todo-duedate");
					priority.setAttribute("class", "todo-priority");
	
					title.setAttribute("class", "todo-items");
					description.setAttribute("class", "todo-items");
					dueDate.setAttribute("class", "todo-items");
					priority.setAttribute("class", "todo-items");
	
					// let displayedTodos = document.querySelectorAll('.todo-obj');
	
					// //if grabbed title is the same as todo title do not display this todo. else display
					// if (displayedTodos.length > 0) {
					// 	if (d) {
	
					// 	}
					// 4}
	
					todoContainer.append(title);
					todoContainer.append(description);
					todoContainer.append(dueDate);
					todoContainer.append(priority);
	
					todoView.append(todoContainer);
				}
			} else {
				console.log("there are no todos to display");
			}
		}
	}

	displayTodoAmount() {
		console.log(_listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[0].title);
		for (let i = 0; i < _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.length; i++) {
			const listTitle = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].title;
			const listTodoLen = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].todos.length;
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
				console.log(_listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray);
				const counter = document.getElementById("header__todo-amount");
				counter.textContent = listTodoLen;
			}
		}
	}
	clearTodoView() {
		const todoView = document.querySelector('.todo-view');
		todoView.innerHTML = "";
	}
}



/***/ }),

/***/ "./src/listArrayTracker.js":
/*!*********************************!*\
  !*** ./src/listArrayTracker.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listArray": () => (/* binding */ listArray)
/* harmony export */ });
//Helps track the created lists.
const listArray = [];

/***/ }),

/***/ "./src/todoDataConductor.js":
/*!**********************************!*\
  !*** ./src/todoDataConductor.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Conductor": () => (/* binding */ Conductor)
/* harmony export */ });
/* harmony import */ var _createToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToDo */ "./src/createToDo.js");
/* harmony import */ var _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listArrayTracker */ "./src/listArrayTracker.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _createList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createList */ "./src/createList.js");




class Conductor {
	constructor() {
		this.todoData = []; //I want to access this array in method.
		this.list;
	}

	grabFormData() {
		const todoFormBtn = document.querySelector("#todo-form-btn");

		let arrayData = this;

		// todoFormBtn.addEventListener("click", () => {
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
			const todoObj = new _createToDo__WEBPACK_IMPORTED_MODULE_0__.Todo(title, description, dueDate, priority);

			//Pushes todo to array
			arrayData.todoData.push(todoObj);
			arrayData.list = list;
		// });
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
		let display = new _display__WEBPACK_IMPORTED_MODULE_2__.Display();
		//Grabs data from
		//Grabs form data and inserts it into the selected List
		let formBtn = document.getElementById("todo-form-btn");
		
		conductor.grabFormData();
		
		// formBtn.addEventListener("click", function () {
			//TODO: Create code that grabs selected list and inserts into that list.
			let lists = document.getElementById("list");
			let collection = lists.selectedOptions;

			let selectedList = collection[0].label;
			console.log('todo was inserted in: ' + selectedList);

			//Inserts data to selected list when submitted.
			for (let index = 0; index < _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.length; index++) {
				const list = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[index];
				if (list.title == selectedList) {
					conductor.pushToList(_listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[index]);
					console.log(_listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray);
				} else {
					console.log("Code exit 1");
				}
			}

		
			console.log(_listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray);
		// });
	}

	createNewList() {
		let display = new _display__WEBPACK_IMPORTED_MODULE_2__.Display();
		let listBtn = document.getElementById("list-form-btn");
		
		listBtn.addEventListener('click',()=>{
			let listInput = document.getElementById('new-list').value;
			const capitalizedList = listInput.charAt(0).toUpperCase() + listInput.slice(1);
			const newList = new _createList__WEBPACK_IMPORTED_MODULE_3__.List(capitalizedList);
			_listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.push(newList);
			display.formReset();
			console.log(_listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray);

			const listOptions = document.getElementById('list');
			const option = document.createElement('option');
			option.setAttribute('value',listInput);
			option.setAttribute('class','list-value')
			option.textContent = capitalizedList;
			listOptions.append(option);
		})

	}
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createList */ "./src/createList.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _todoDataConductor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoDataConductor */ "./src/todoDataConductor.js");
/* harmony import */ var _listArrayTracker_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listArrayTracker.js */ "./src/listArrayTracker.js");



//Holds created arrays



//Dom controller
let display = new _display__WEBPACK_IMPORTED_MODULE_1__.Display();
//Data Manipulator
let dataCond = new _todoDataConductor__WEBPACK_IMPORTED_MODULE_2__.Conductor();
//Lists 
//TODO make this automatic.....
//DEFAULT CREATED LIST
let capture = new _createList__WEBPACK_IMPORTED_MODULE_0__.List('Capture');
_listArrayTracker_js__WEBPACK_IMPORTED_MODULE_3__.listArray.push(capture);
// let nextActions = new List('Next Actions');
// listArray.push(nextActions);
// let tickler = new List('Tickler');
// listArray.push(tickler);




//TODO^^^^^^^^^^^^^^^^^^^^
//Loads form
display.todoForm();
display.listForm();

//grabs todo data and inserts into list
// dataCond.insertTodoIntoList();
dataCond.createNewList();
display.formReset();

display.displayListButtons();
//display.displaySelectedList();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUJBQXVCLDZDQUFJO0FBQzNCLEdBQUcsNkRBQWM7QUFDakI7QUFDQSxlQUFlLHdEQUFTOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDcUI7Ozs7Ozs7VUN0R3JCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOaUM7QUFDQTtBQUNhO0FBQzlDO0FBQ2dEOzs7QUFHaEQ7QUFDQSxrQkFBa0IsNkNBQU87QUFDekI7QUFDQSxtQkFBbUIseURBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDZDQUFJO0FBQ3RCLGdFQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvY3JlYXRlTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NyZWF0ZVRvRG8uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbGlzdEFycmF5VHJhY2tlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG9EYXRhQ29uZHVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIExpc3Qge1xuXG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnRvZG9zID0gW107XG4gICAgfVxuICAgIC8vYWRkcyBnaXZlbiBvYmogdG8gbGlzdCBhcnJheVxuICAgIGFkZCh0b2RvKXtcbiAgICAgICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xuICAgIH1cblxuXG59XG5cbmV4cG9ydCB7TGlzdH07IiwiXG5jbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxuXG4gXG59XG5cbmV4cG9ydCB7IFRvZG8gfTsiLCJpbXBvcnQgeyBDb25kdWN0b3IgfSBmcm9tIFwiLi90b2RvRGF0YUNvbmR1Y3RvclwiO1xuaW1wb3J0IHsgbGlzdEFycmF5IH0gZnJvbSBcIi4vbGlzdEFycmF5VHJhY2tlclwiO1xuY2xhc3MgRGlzcGxheSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuc2VsZWN0ZWRMaXN0ID0gJ0NhcHR1cmUnO1xuXHR9XG5cblx0Ly9jcmVhdGVzIGEgdGhlIGZvcm0gbmVlZGVkIGZyb20gdG9kb1xuXHR0b2RvRm9ybSgpIHtcblx0XHRsZXQgZGF0YUNvbmQgPSBuZXcgQ29uZHVjdG9yKCk7XG5cdFx0bGV0IGlucHV0QXJyYXkgPSBbXCJ0aXRsZVwiLCBcImRlc2NyaXB0aW9uXCIsIFwiZHVlRGF0ZVwiLCBcInByaW9yaXR5XCIsIFwibGlzdFwiXTtcblxuXHRcdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblx0XHRmb3JtLnNldEF0dHJpYnV0ZShcIm9uc3VibWl0XCIsIFwicmV0dXJuIGZhbHNlXCIpO1xuXHRcdGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWZvcm1cIik7XG5cdFx0Y29uc3QgdG9kb1ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJveF9fY29udGFpbmVyXCIpO1xuXHRcdHRvZG9WaWV3LmFwcGVuZENoaWxkKGZvcm0pO1xuXHRcdC8vZWFjaCBlbGVtZW50IGRpc3BsYXlzIGRpZmZlcmVudCBpbnB1dHMgYmFzZWQgb24gdGhlaXIgbmVlZGVkIGRhdGEuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dEFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBlbGVtZW50ID0gaW5wdXRBcnJheVtpXTtcblx0XHRcdGlmIChlbGVtZW50ID09IFwidGl0bGVcIikge1xuXHRcdFx0XHRsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRpdGxlXCIpO1xuXHRcdFx0XHRsYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGU6XCI7XG5cdFx0XHRcdGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGl0bGVcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGVsZW1lbnQgPT0gXCJkZXNjcmlwdGlvblwiKSB7XG5cdFx0XHRcdGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGVzY3JpcHRpb25cIik7XG5cdFx0XHRcdGxhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjpcIjtcblx0XHRcdFx0bGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvblwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRlc2NyaXB0aW9uXCIpO1xuXHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZWxlbWVudCA9PSBcImR1ZURhdGVcIikge1xuXHRcdFx0XHRsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImR1ZS1kYXRlXCIpO1xuXHRcdFx0XHRsYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6XCI7XG5cdFx0XHRcdGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGV0aW1lLWxvY2FsXCIpO1xuXHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImR1ZS1kYXRlXCIpO1xuXHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZHVlLWRhdGVcIik7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuXHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblx0XHRcdH1cblx0XHRcdC8vY2hhbmdlIHRoaXMgdG8gcmFkaW8gd2l0aCAzIHByaW9yaXR5IG9wdGlvbnMgbG93IG1lZCBoaWdoXG5cdFx0XHRpZiAoZWxlbWVudCA9PSBcInByaW9yaXR5XCIpIHtcblx0XHRcdFx0bGV0IGFycmF5ID0gW1wibG93XCIsIFwibWVkXCIsIFwiaGlnaFwiXTtcblxuXHRcdFx0XHRsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5XCIpO1xuXHRcdFx0XHRsYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiO1xuXHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcblx0XHRcdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdFx0XHRcdGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cblx0XHRcdFx0XHRsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGVsZW1lbnQpO1xuXHRcdFx0XHRcdGxhYmVsLnRleHRDb250ZW50ID0gZWxlbWVudDtcblxuXHRcdFx0XHRcdGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG5cdFx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgZWxlbWVudCk7XG5cdFx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuXHRcdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGVsZW1lbnQpO1xuXG5cdFx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cdFx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChlbGVtZW50ID09IFwibGlzdFwiKSB7XG5cdFx0XHRcdGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiTGlzdFwiKTtcblx0XHRcdFx0bGFiZWwudGV4dENvbnRlbnQgPSBcIkxpc3Q6XCI7XG5cdFx0XHRcdGxldCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuXHRcdFx0XHRzZWxlY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaXN0XCIpO1xuXHRcdFx0XHRzZWxlY3Quc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImxpc3RcIik7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuXHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKHNlbGVjdCk7XG5cdFx0XHRcdC8vVE9ETyBmaW5kIG91dCBob3cgdG8gdXBkYXRlIHRoZXNlIG9wdGlvbnMgd2hlbiBhIG5ldyBsaXN0IGdldHMgY3JlYXRlZC5cblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHQvL2dyYWJzIGNyZWF0ZWQgTGlzdHMgYW5kIGlucHV0cyB0aGVtIGludG8gdGhlIGxpc3Qgc2VsZWN0aW9uIG9wdGlvbnMgZHJvcCBkb3duLlxuXHRcdFx0XHRcdGNvbnN0IGVsZW1lbnQgPSBsaXN0QXJyYXlbaV0udGl0bGU7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJkaXNwbGF5LnRvZG9Gb3JtXCIpO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGxpc3RBcnJheSk7XG5cdFx0XHRcdFx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblx0XHRcdFx0XHRvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgbGlzdEFycmF5W2ldLnRpdGxlKTtcblx0XHRcdFx0XHRvcHRpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaXN0LXZhbHVlXCIpO1xuXHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkTGlzdCA9XG5cdFx0XHRcdFx0XHRsaXN0QXJyYXlbaV0udGl0bGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgK1xuXHRcdFx0XHRcdFx0bGlzdEFycmF5W2ldLnRpdGxlLnNsaWNlKDEpO1xuXHRcdFx0XHRcdG9wdGlvbi50ZXh0Q29udGVudCA9IGNhcGl0YWxpemVkTGlzdDtcblx0XHRcdFx0XHRzZWxlY3QuYXBwZW5kKG9wdGlvbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdFx0c3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG5cdFx0c3VibWl0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiU3VibWl0XCIpO1xuXHRcdHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tZm9ybS1idG5cIik7XG5cdFx0Zm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXHRcdGxldCBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZm9ybS1idG5cIik7XG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0ZGF0YUNvbmQuaW5zZXJ0VG9kb0ludG9MaXN0KCk7XG5cdFx0XHRzZWxmLmRpc3BsYXlUb2RvQW1vdW50KCk7XG5cdFx0XHQvLyBncmFicyB0aGUgc2VsZWN0ZWQgbGlzdCBpbiB0aGUgb3B0aW9ucyBpbiB0aGUgZm9ybVxuXHRcdFx0bGV0IGxpc3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0XCIpO1xuXHRcdFx0bGV0IGNvbGxlY3Rpb24gPSBsaXN0cy5zZWxlY3RlZE9wdGlvbnM7XG5cdFx0XHRcblxuXHRcdFx0Y29uc3QgY3VycmVudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XHRcIi5oZWFkZXJfX2xpc3QtdGl0bGVcIlxuXHRcdFx0KS50ZXh0Q29udGVudDtcblx0XHRcdGlmIChzZWxmLnNlbGVjdGVkTGlzdCA9PSBjdXJyZW50TGlzdCkge1xuXHRcdFx0XHRzZWxmLmNsZWFyVG9kb1ZpZXcoKTtcblx0XHRcdFx0c2VsZi5kaXNwbGF5VG9kbygpO1xuXHRcdFx0XHRzZWxmLmZvcm1SZXNldCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJub3QgY3VycmVudGx5IGluIGNvcnJlY3QgbGlzdCB2aWV3XCIpO1xuXHRcdFx0XHRzZWxmLmZvcm1SZXNldCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zb2xlLmxvZyhcIkhpOilcIik7XG5cdFx0fSk7XG5cdH1cblxuXHRsaXN0Rm9ybSgpIHtcblx0XHRjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cdFx0Zm9ybS5zZXRBdHRyaWJ1dGUoXCJvbnN1Ym1pdFwiLCBcInJldHVybiBmYWxzZVwiKTtcblx0XHRmb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlzdC1mb3JtXCIpO1xuXHRcdGNvbnN0IGxpc3RWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtbGlzdFwiKTtcblx0XHRsaXN0Vmlldy5hcHBlbmRDaGlsZChmb3JtKTtcblxuXHRcdGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJuZXctbGlzdFwiKTtcblx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibmV3LWxpc3RcIik7XG5cdFx0bGFiZWwudGV4dENvbnRlbnQgPSBcIkxpc3Q6XCI7XG5cdFx0bGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXHRcdGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3LWxpc3RcIik7XG5cdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5ldy1saXN0XCIpO1xuXHRcdGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuXHRcdGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG5cdFx0Y29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuXHRcdHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlN1Ym1pdFwiKTtcblx0XHRzdWJtaXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaXN0LWZvcm0tYnRuXCIpO1xuXHRcdGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblx0fVxuXG5cdGZvcm1SZXNldCgpIHtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZm9ybVwiKS5yZXNldCgpO1xuXHR9XG5cblx0ZGlzcGxheUxpc3RCdXR0b25zKCkge1xuXHRcdC8vRGlzcGxheXMgZGVmYXVsdCBDYXB0dXJlIGxpc3QgaW4gbGlzdCB2aWV3LlxuXHRcdGNvbnN0IGxpc3RWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LXZpZXdcIik7XG5cdFx0Y29uc3QgY2FwdHVyZUxpc3QgPSBsaXN0QXJyYXlbMF0udGl0bGU7XG5cdFx0Y29uc3QgZGVmYXVsdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdGRlZmF1bHRMaXN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlzdC1vcHRpb25cIik7XG5cdFx0ZGVmYXVsdExpc3QudGV4dENvbnRlbnQgPSBjYXB0dXJlTGlzdDtcblx0XHRsaXN0Vmlldy5hcHBlbmQoZGVmYXVsdExpc3QpO1xuXG5cdFx0Y29uc3QgbGlzdFN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdC1mb3JtLWJ0blwiKTtcblx0XHRsaXN0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKGV2ZW50KTtcblx0XHRcdGxldCBsaXN0QXJyYXlMZW4gPSBsaXN0QXJyYXkubGVuZ3RoO1xuXHRcdFx0bGV0IG5ld0xpc3QgPSBsaXN0QXJyYXlbbGlzdEFycmF5TGVuIC0gMV0udGl0bGU7XG5cdFx0XHRjb25zdCBpbnB1dExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdFx0aW5wdXRMaXN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlzdC1vcHRpb25cIik7XG5cdFx0XHRpbnB1dExpc3QudGV4dENvbnRlbnQgPSBuZXdMaXN0O1xuXHRcdFx0bGlzdFZpZXcuYXBwZW5kKGlucHV0TGlzdCk7XG5cblx0XHRcdC8vQWRkaW5nIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggbGlzdCBidXR0b24gdGhhdCB3aWxsIHJ1biB0byBkaXNwbGF5IHRvZG9zIHdoZW4gY2xpY2tlZC5cblx0XHRcdGNvbnN0IGxpc3RPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0LW9wdGlvblwiKTtcblxuXHRcdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpc3RPcHRpb25zLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdFx0XHRjb25zdCBlbGVtZW50ID0gbGlzdE9wdGlvbnNbaW5kZXhdO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlbGVtZW50KTtcblxuXHRcdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiWW91IGNsaWNrZWQuLi4gbWVcIik7XG5cdFx0XHRcdFx0dGhpcy5jbGVhclRvZG9WaWV3KCk7XG5cdFx0XHRcdFx0dGhpcy5kaXNwbGF5U2VsZWN0ZWRMaXN0KGUpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGRpc3BsYXlTZWxlY3RlZExpc3QoZSkge1xuXHRcdGNvbnNvbGUubG9nKFwiZGlzcGxheVNlbGVjdGVkTGlzdCBSYW5cIik7XG5cdFx0Y29uc29sZS5sb2codGhpcyk7XG5cdFx0Ly90aGUgbGlzdCB0aGF0IHdhcyBjbGlja2VkLlxuXG5cdFx0dGhpcy5zZWxlY3RlZExpc3QgPSBlLnRhcmdldC5pbm5lclRleHQ7XG5cdFx0Y29uc29sZS5sb2coJ1NlbGVjdGVkIExpc3Q6ICcgKyB0aGlzLnNlbGVjdGVkTGlzdCk7XG5cdFxuXHRcdGNvbnN0IGxpc3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19saXN0LXRpdGxlXCIpO1xuXHRcdGxpc3RUaXRsZS50ZXh0Q29udGVudCA9IHRoaXMuc2VsZWN0ZWRMaXN0O1xuXHRcblx0XHR0aGlzLmRpc3BsYXlUb2RvQW1vdW50KCk7XG5cdFx0dGhpcy5kaXNwbGF5VG9kbygpO1xuXHR9XG5cblx0ZGlzcGxheVRvZG8obGlzdFZpZXcpIHtcblx0XHQvL2N1cmVudGx5IHdpbGwgZGlzcGxheSB0b2RvIHRpdGxlLiBmaWd1cmUgb3V0IGEgd2F5IHRvIG9ubHkgZGlzcGxheSB0b2RvIG9uY2UgdG8gYXZvaWQgZHVwbGljYXRlcy5cblx0XHRjb25zdCBjdXJyZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcIi5oZWFkZXJfX2xpc3QtdGl0bGVcIlxuXHRcdCkudGV4dENvbnRlbnQ7XG5cdFx0Y29uc3QgdG9kb1ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tdmlld1wiKTtcblx0XHQvLyFCVUcgdmFyIChpKSByZXNldHMgdG8gMCBlYWNoIHRpbWUgZnVuY3Rpb24gaXMgY2FsbGVkIHRodXMgY2F1c2luZyBpdCB0byBkaXNwbGF5IHRoZSBzYW1lIGFycmF5IGVsZW1lbnQgd2hlbiB5b3UgaW5zZXJ0IGFub3RoZXIgb25lXG5cdFx0XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnNvbGUubG9nKFwibGlzdCBhcnJheSBsZW46IFwiICsgbGlzdEFycmF5Lmxlbmd0aCk7XG5cdFx0XHQvL2xpc3RUaXRsZSBpcyBiZWluZyB1c2VkIHRvIGhvbGQgdmFsdWUgb2YgdGhlIGxpc3QgdGl0bGUgdG8gY2hlY2sgaWYgaXQgbWF0Y2hlcyB0aGUgc2VsZWN0ZWQgbGlzdC5cblx0XHRcdC8vISB3aGVuIG5ldyBsaXN0IGlzIGNyZWF0ZWQgYW5kIHNlbGVjdGVkIGFuZCBuZXcgdG9kbyBpcyBpbnB1dGVkIHRoZSB0b2RvIGlzIG5vdCBiZWluZyBkaXNwbGF5ZWQgYmVjYXVzZSBsaXN0VGl0bGUgaXMgcmVmcmVuY2luZyAnY2FwdHVyZScgbGlzdCBkdWUgdG8gaSBiZWluZyAwLiBGaW5kIGEgd2F5IHRvIGdyYWIgd2hhdCBsaXN0IHdhcyBzZWxlY3RlZC5cblx0XHRcdGxldCBsaXN0VGl0bGUgPSBsaXN0QXJyYXlbaV0udGl0bGU7XG5cdFx0XHQvLyEgTk9URSBtYXliZSBjcmVhdGUgYW5vdGhlciBmb3IgbG9vcCB0aGF0IGN5Y2xlcyB0aHJvdWdoIHRoZSB0b2Rvc1xuXHRcdFx0bGV0IGxpc3RUb2RvTGVuID0gbGlzdEFycmF5W2ldLnRvZG9zLmxlbmd0aDtcblx0XHRcdGNvbnN0IGN1cnJlbnRMaXN0ID0gbGlzdEFycmF5W2ldO1xuXHRcdFx0XG5cdFx0XHRcblx0XHRcdGlmICh0aGlzLnNlbGVjdGVkTGlzdCA9PSBsaXN0VGl0bGUgJiYgbGlzdFRvZG9MZW4gPiAwKSB7XG5cblx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBsaXN0VG9kb0xlbjsgaisrKSB7XG5cdFx0XHRcdFx0Ly8gY29uc3QgZWxlbWVudCA9IGxpc3RBcnJheS50b2Rvc1tpbmRleF07XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Y29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFxuXHRcdFx0XHRcdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRcdFx0XHRcdGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdFx0XHRcdFx0Y29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRcdFx0XHRcdGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdFxuXHRcdFx0XHRcdC8vQWRkaW5nIHRvZG8gZGV0YWlscyB0byBlbGVtZW50c1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGxpc3RBcnJheVtqXS50b2Rvc1tsaXN0VG9kb0xlbl0udGl0bGUpO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgbGVuZ3RoXCIpO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGN1cnJlbnRMaXN0LnRvZG9zLmxlbmd0aCk7XG5cdFx0XHRcdFx0Ly9kaXNwbGF5cyB0aGUgbGFzdCB0b2RvIHRoYXQgd2FzIGdpdmVuLlxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGN1cnJlbnRMaXN0LnRvZG9zW2pdKTtcblx0XG5cdFx0XHRcdFx0dGl0bGUudGV4dENvbnRlbnQgPSBjdXJyZW50TGlzdC50b2Rvc1tqXS50aXRsZTtcblx0XHRcdFx0XHRkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGN1cnJlbnRMaXN0LnRvZG9zW2pdLmRlc2NyaXB0aW9uO1xuXHRcdFx0XHRcdGR1ZURhdGUudGV4dENvbnRlbnQgPSBjdXJyZW50TGlzdC50b2Rvc1tqXS5kdWVEYXRlO1xuXHRcdFx0XHRcdHByaW9yaXR5LnRleHRDb250ZW50ID0gY3VycmVudExpc3QudG9kb3Nbal0ucHJpb3JpdHk7XG5cdFxuXHRcdFx0XHRcdC8vU2V0dGluZ3MgQXR0cmlidXRlc1xuXHRcdFx0XHRcdHRvZG9Db250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLW9ialwiKTtcblx0XHRcdFx0XHR0aXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8tdGl0bGVcIik7XG5cdFx0XHRcdFx0ZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLWRlc2NcIik7XG5cdFx0XHRcdFx0ZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8tZHVlZGF0ZVwiKTtcblx0XHRcdFx0XHRwcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8tcHJpb3JpdHlcIik7XG5cdFxuXHRcdFx0XHRcdHRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1pdGVtc1wiKTtcblx0XHRcdFx0XHRkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8taXRlbXNcIik7XG5cdFx0XHRcdFx0ZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8taXRlbXNcIik7XG5cdFx0XHRcdFx0cHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLWl0ZW1zXCIpO1xuXHRcblx0XHRcdFx0XHQvLyBsZXQgZGlzcGxheWVkVG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1vYmonKTtcblx0XG5cdFx0XHRcdFx0Ly8gLy9pZiBncmFiYmVkIHRpdGxlIGlzIHRoZSBzYW1lIGFzIHRvZG8gdGl0bGUgZG8gbm90IGRpc3BsYXkgdGhpcyB0b2RvLiBlbHNlIGRpc3BsYXlcblx0XHRcdFx0XHQvLyBpZiAoZGlzcGxheWVkVG9kb3MubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdC8vIFx0aWYgKGQpIHtcblx0XG5cdFx0XHRcdFx0Ly8gXHR9XG5cdFx0XHRcdFx0Ly8gNH1cblx0XG5cdFx0XHRcdFx0dG9kb0NvbnRhaW5lci5hcHBlbmQodGl0bGUpO1xuXHRcdFx0XHRcdHRvZG9Db250YWluZXIuYXBwZW5kKGRlc2NyaXB0aW9uKTtcblx0XHRcdFx0XHR0b2RvQ29udGFpbmVyLmFwcGVuZChkdWVEYXRlKTtcblx0XHRcdFx0XHR0b2RvQ29udGFpbmVyLmFwcGVuZChwcmlvcml0eSk7XG5cdFxuXHRcdFx0XHRcdHRvZG9WaWV3LmFwcGVuZCh0b2RvQ29udGFpbmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJ0aGVyZSBhcmUgbm8gdG9kb3MgdG8gZGlzcGxheVwiKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRkaXNwbGF5VG9kb0Ftb3VudCgpIHtcblx0XHRjb25zb2xlLmxvZyhsaXN0QXJyYXlbMF0udGl0bGUpO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBsaXN0VGl0bGUgPSBsaXN0QXJyYXlbaV0udGl0bGU7XG5cdFx0XHRjb25zdCBsaXN0VG9kb0xlbiA9IGxpc3RBcnJheVtpXS50b2Rvcy5sZW5ndGg7XG5cdFx0XHQvL2N1cnJlbnRseSBjaGVja3MgaWYgc2VsZWN0ZWQgbGlzdCBmcm9tIGxpc3Qgbm9kZXMgbWF0Y2hlcy5cblx0XHRcdC8vVE9ETyBuZWVkIHRvIHVwZGF0ZSB0aGUgbnVtYmVyIHdoZW4gdG9kbyBpcyBzdWJtaXR0ZWQgd2l0aG91dCBjaGFuZ2luZyBkZWZhdWx0IGxpc3Rcblx0XHRcdGlmIChsaXN0VGl0bGUgPT0gdGhpcy5zZWxlY3RlZExpc3QpIHtcblx0XHRcdFx0Y29uc29sZS5sb2cobGlzdFRpdGxlICsgXCIgXCIgKyB0aGlzLnNlbGVjdGVkTGlzdCArIFwibWF0Y2hlc1wiKTtcblx0XHRcdFx0Y29uc29sZS5sb2cobGlzdFRvZG9MZW4pO1xuXHRcdFx0XHRjb25zdCBjb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJfX3RvZG8tYW1vdW50XCIpO1xuXHRcdFx0XHRjb3VudGVyLnRleHRDb250ZW50ID0gbGlzdFRvZG9MZW47XG5cdFx0XHR9XG5cdFx0XHQvL1dpbGwgdXBkYXRlIGNvdW50ZXIgZXZlbiBpcyBsaXN0bm9kZSBpcyBub3Qgc2VsZWN0ZWQuXG5cdFx0XHRsZXQgZGVmYXVsdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XHRcIi5oZWFkZXJfX2xpc3QtdGl0bGVcIlxuXHRcdFx0KS50ZXh0Q29udGVudDtcblx0XHRcdGlmIChsaXN0VGl0bGUgPT0gZGVmYXVsdExpc3QpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJsaXN0IHdhc250IGNoYW5nZWQuXCIpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhsaXN0QXJyYXkpO1xuXHRcdFx0XHRjb25zdCBjb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJfX3RvZG8tYW1vdW50XCIpO1xuXHRcdFx0XHRjb3VudGVyLnRleHRDb250ZW50ID0gbGlzdFRvZG9MZW47XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGNsZWFyVG9kb1ZpZXcoKSB7XG5cdFx0Y29uc3QgdG9kb1ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby12aWV3Jyk7XG5cdFx0dG9kb1ZpZXcuaW5uZXJIVE1MID0gXCJcIjtcblx0fVxufVxuZXhwb3J0IHsgRGlzcGxheSB9O1xuIiwiLy9IZWxwcyB0cmFjayB0aGUgY3JlYXRlZCBsaXN0cy5cbmV4cG9ydCBjb25zdCBsaXN0QXJyYXkgPSBbXTsiLCJpbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vY3JlYXRlVG9Eb1wiO1xuaW1wb3J0IHsgbGlzdEFycmF5IH0gZnJvbSBcIi4vbGlzdEFycmF5VHJhY2tlclwiO1xuaW1wb3J0IHsgRGlzcGxheSB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCB7IExpc3QgfSBmcm9tIFwiLi9jcmVhdGVMaXN0XCI7XG5jbGFzcyBDb25kdWN0b3Ige1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnRvZG9EYXRhID0gW107IC8vSSB3YW50IHRvIGFjY2VzcyB0aGlzIGFycmF5IGluIG1ldGhvZC5cblx0XHR0aGlzLmxpc3Q7XG5cdH1cblxuXHRncmFiRm9ybURhdGEoKSB7XG5cdFx0Y29uc3QgdG9kb0Zvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZm9ybS1idG5cIik7XG5cblx0XHRsZXQgYXJyYXlEYXRhID0gdGhpcztcblxuXHRcdC8vIHRvZG9Gb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWU7XG5cdFx0XHRjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XG5cdFx0XHRjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtZGF0ZVwiKS52YWx1ZTtcblx0XHRcdGxldCBwcmlvcml0eTtcblx0XHRcdHZhciBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcInByaW9yaXR5XCIpO1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGVsZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoZWxlW2ldLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRwcmlvcml0eSA9IGVsZVtpXS52YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdFwiKS52YWx1ZTtcblxuXHRcdFx0Ly9jcmVhdGUgdG9kb09ialxuXHRcdFx0Y29uc3QgdG9kb09iaiA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuXG5cdFx0XHQvL1B1c2hlcyB0b2RvIHRvIGFycmF5XG5cdFx0XHRhcnJheURhdGEudG9kb0RhdGEucHVzaCh0b2RvT2JqKTtcblx0XHRcdGFycmF5RGF0YS5saXN0ID0gbGlzdDtcblx0XHQvLyB9KTtcblx0fVxuXG5cdHB1c2hUb0xpc3QobGlzdCkge1xuXHRcdGxldCB0b2RvRGF0YUxlbiA9IHRoaXMudG9kb0RhdGEubGVuZ3RoO1xuXHRcdGxpc3QuYWRkKHRoaXMudG9kb0RhdGFbdG9kb0RhdGFMZW4gLSAxXSk7XG5cdH1cblxuXHRyZXR1cm5MaXN0KCkge1xuXHRcdHJldHVybiB0aGlzLmxpc3Q7XG5cdH1cblxuXHRpbnNlcnRUb2RvSW50b0xpc3QoKSB7XG5cdFx0bGV0IGNvbmR1Y3RvciA9IHRoaXM7XG5cdFx0bGV0IGRpc3BsYXkgPSBuZXcgRGlzcGxheSgpO1xuXHRcdC8vR3JhYnMgZGF0YSBmcm9tXG5cdFx0Ly9HcmFicyBmb3JtIGRhdGEgYW5kIGluc2VydHMgaXQgaW50byB0aGUgc2VsZWN0ZWQgTGlzdFxuXHRcdGxldCBmb3JtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWZvcm0tYnRuXCIpO1xuXHRcdFxuXHRcdGNvbmR1Y3Rvci5ncmFiRm9ybURhdGEoKTtcblx0XHRcblx0XHQvLyBmb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHQvL1RPRE86IENyZWF0ZSBjb2RlIHRoYXQgZ3JhYnMgc2VsZWN0ZWQgbGlzdCBhbmQgaW5zZXJ0cyBpbnRvIHRoYXQgbGlzdC5cblx0XHRcdGxldCBsaXN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdFwiKTtcblx0XHRcdGxldCBjb2xsZWN0aW9uID0gbGlzdHMuc2VsZWN0ZWRPcHRpb25zO1xuXG5cdFx0XHRsZXQgc2VsZWN0ZWRMaXN0ID0gY29sbGVjdGlvblswXS5sYWJlbDtcblx0XHRcdGNvbnNvbGUubG9nKCd0b2RvIHdhcyBpbnNlcnRlZCBpbjogJyArIHNlbGVjdGVkTGlzdCk7XG5cblx0XHRcdC8vSW5zZXJ0cyBkYXRhIHRvIHNlbGVjdGVkIGxpc3Qgd2hlbiBzdWJtaXR0ZWQuXG5cdFx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGlzdEFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdFx0XHRjb25zdCBsaXN0ID0gbGlzdEFycmF5W2luZGV4XTtcblx0XHRcdFx0aWYgKGxpc3QudGl0bGUgPT0gc2VsZWN0ZWRMaXN0KSB7XG5cdFx0XHRcdFx0Y29uZHVjdG9yLnB1c2hUb0xpc3QobGlzdEFycmF5W2luZGV4XSk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cobGlzdEFycmF5KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkNvZGUgZXhpdCAxXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcblx0XHRcdGNvbnNvbGUubG9nKGxpc3RBcnJheSk7XG5cdFx0Ly8gfSk7XG5cdH1cblxuXHRjcmVhdGVOZXdMaXN0KCkge1xuXHRcdGxldCBkaXNwbGF5ID0gbmV3IERpc3BsYXkoKTtcblx0XHRsZXQgbGlzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdC1mb3JtLWJ0blwiKTtcblx0XHRcblx0XHRsaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuXHRcdFx0bGV0IGxpc3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctbGlzdCcpLnZhbHVlO1xuXHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRMaXN0ID0gbGlzdElucHV0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbGlzdElucHV0LnNsaWNlKDEpO1xuXHRcdFx0Y29uc3QgbmV3TGlzdCA9IG5ldyBMaXN0KGNhcGl0YWxpemVkTGlzdCk7XG5cdFx0XHRsaXN0QXJyYXkucHVzaChuZXdMaXN0KTtcblx0XHRcdGRpc3BsYXkuZm9ybVJlc2V0KCk7XG5cdFx0XHRjb25zb2xlLmxvZyhsaXN0QXJyYXkpO1xuXG5cdFx0XHRjb25zdCBsaXN0T3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0Jyk7XG5cdFx0XHRjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0XHRcdG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxsaXN0SW5wdXQpO1xuXHRcdFx0b3B0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdsaXN0LXZhbHVlJylcblx0XHRcdG9wdGlvbi50ZXh0Q29udGVudCA9IGNhcGl0YWxpemVkTGlzdDtcblx0XHRcdGxpc3RPcHRpb25zLmFwcGVuZChvcHRpb24pO1xuXHRcdH0pXG5cblx0fVxufVxuZXhwb3J0IHsgQ29uZHVjdG9yIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7TGlzdH0gZnJvbSBcIi4vY3JlYXRlTGlzdFwiXG5pbXBvcnQge0Rpc3BsYXl9IGZyb20gXCIuL2Rpc3BsYXlcIlxuaW1wb3J0IHtDb25kdWN0b3J9IGZyb20gJy4vdG9kb0RhdGFDb25kdWN0b3InO1xuLy9Ib2xkcyBjcmVhdGVkIGFycmF5c1xuaW1wb3J0IHtsaXN0QXJyYXl9IGZyb20gXCIuL2xpc3RBcnJheVRyYWNrZXIuanNcIjtcblxuXG4vL0RvbSBjb250cm9sbGVyXG5sZXQgZGlzcGxheSA9IG5ldyBEaXNwbGF5KCk7XG4vL0RhdGEgTWFuaXB1bGF0b3JcbmxldCBkYXRhQ29uZCA9IG5ldyBDb25kdWN0b3IoKTtcbi8vTGlzdHMgXG4vL1RPRE8gbWFrZSB0aGlzIGF1dG9tYXRpYy4uLi4uXG4vL0RFRkFVTFQgQ1JFQVRFRCBMSVNUXG5sZXQgY2FwdHVyZSA9IG5ldyBMaXN0KCdDYXB0dXJlJyk7XG5saXN0QXJyYXkucHVzaChjYXB0dXJlKTtcbi8vIGxldCBuZXh0QWN0aW9ucyA9IG5ldyBMaXN0KCdOZXh0IEFjdGlvbnMnKTtcbi8vIGxpc3RBcnJheS5wdXNoKG5leHRBY3Rpb25zKTtcbi8vIGxldCB0aWNrbGVyID0gbmV3IExpc3QoJ1RpY2tsZXInKTtcbi8vIGxpc3RBcnJheS5wdXNoKHRpY2tsZXIpO1xuXG5cblxuXG4vL1RPRE9eXl5eXl5eXl5eXl5eXl5eXl5eXlxuLy9Mb2FkcyBmb3JtXG5kaXNwbGF5LnRvZG9Gb3JtKCk7XG5kaXNwbGF5Lmxpc3RGb3JtKCk7XG5cbi8vZ3JhYnMgdG9kbyBkYXRhIGFuZCBpbnNlcnRzIGludG8gbGlzdFxuLy8gZGF0YUNvbmQuaW5zZXJ0VG9kb0ludG9MaXN0KCk7XG5kYXRhQ29uZC5jcmVhdGVOZXdMaXN0KCk7XG5kaXNwbGF5LmZvcm1SZXNldCgpO1xuXG5kaXNwbGF5LmRpc3BsYXlMaXN0QnV0dG9ucygpO1xuLy9kaXNwbGF5LmRpc3BsYXlTZWxlY3RlZExpc3QoKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9