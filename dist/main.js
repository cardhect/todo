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
		this.selectedList;
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
		const captureList = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[0].title;
		const defaultList = document.createElement("button");
		defaultList.setAttribute("class", "list-option");
		defaultList.textContent = captureList;
		listView.append(defaultList);

		const listSubmit = document.getElementById("list-form-btn");
		listSubmit.addEventListener("click", () => {
			let listArrayLen = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.length;
			let newList = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[listArrayLen - 1].title;
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
		//!BUG var (i) resets to 0 each time function is called thus causing it to display the same array element when you insert another one
		for (let i = 0; i < _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.length; i++) {
			// const element = listArray[i];
			let listTitle = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].title;
			if (currentList == listTitle && _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].todos.length > 0) {
				const todoContainer = document.createElement("div");

				const title = document.createElement("h1");
				const description = document.createElement("p");
				const dueDate = document.createElement("p");
				const priority = document.createElement("p");

				//Adding todo details to elements
				console.log(_listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].todos[i].title);
				title.textContent = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].todos[i].title;
				description.textContent = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].todos[i].description;
				dueDate.textContent = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].todos[i].dueDate;
				priority.textContent = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].todos[i].priority;

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
			console.log(selectedList);

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

			display.formReset();
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

display.displayLists();
display.displaySelectedList();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05pQztBQUNBO0FBQ2E7QUFDOUM7QUFDZ0Q7OztBQUdoRDtBQUNBLGtCQUFrQiw2Q0FBTztBQUN6QjtBQUNBLG1CQUFtQix5REFBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkNBQUk7QUFDdEIsZ0VBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jcmVhdGVMaXN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY3JlYXRlVG9Eby5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9saXN0QXJyYXlUcmFja2VyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9kb0RhdGFDb25kdWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTGlzdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMudG9kb3MgPSBbXTtcbiAgICB9XG4gICAgLy9hZGRzIGdpdmVuIG9iaiB0byBsaXN0IGFycmF5XG4gICAgYWRkKHRvZG8pe1xuICAgICAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IHtMaXN0fTsiLCJcbmNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG5cbiBcbn1cblxuZXhwb3J0IHsgVG9kbyB9OyIsImltcG9ydCB7IENvbmR1Y3RvciB9IGZyb20gXCIuL3RvZG9EYXRhQ29uZHVjdG9yXCI7XG5pbXBvcnQgeyBsaXN0QXJyYXkgfSBmcm9tIFwiLi9saXN0QXJyYXlUcmFja2VyXCI7XG5jbGFzcyBEaXNwbGF5IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5zZWxlY3RlZExpc3Q7XG5cdH1cblxuXHQvL2NyZWF0ZXMgYSB0aGUgZm9ybSBuZWVkZWQgZnJvbSB0b2RvXG5cdHRvZG9Gb3JtKCkge1xuXHRcdGxldCBkYXRhQ29uZCA9IG5ldyBDb25kdWN0b3IoKTtcblx0XHRsZXQgaW5wdXRBcnJheSA9IFtcInRpdGxlXCIsIFwiZGVzY3JpcHRpb25cIiwgXCJkdWVEYXRlXCIsIFwicHJpb3JpdHlcIiwgXCJsaXN0XCJdO1xuXG5cdFx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXHRcdGZvcm0uc2V0QXR0cmlidXRlKFwib25zdWJtaXRcIiwgXCJyZXR1cm4gZmFsc2VcIik7XG5cdFx0Zm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tZm9ybVwiKTtcblx0XHRjb25zdCB0b2RvVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm94X19jb250YWluZXJcIik7XG5cdFx0dG9kb1ZpZXcuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cdFx0Ly9lYWNoIGVsZW1lbnQgZGlzcGxheXMgZGlmZmVyZW50IGlucHV0cyBiYXNlZCBvbiB0aGVpciBuZWVkZWQgZGF0YS5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0QXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGVsZW1lbnQgPSBpbnB1dEFycmF5W2ldO1xuXHRcdFx0aWYgKGVsZW1lbnQgPT0gXCJ0aXRsZVwiKSB7XG5cdFx0XHRcdGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGl0bGVcIik7XG5cdFx0XHRcdGxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZTpcIjtcblx0XHRcdFx0bGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aXRsZVwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpdGxlXCIpO1xuXHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZWxlbWVudCA9PSBcImRlc2NyaXB0aW9uXCIpIHtcblx0XHRcdFx0bGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkZXNjcmlwdGlvblwiKTtcblx0XHRcdFx0bGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOlwiO1xuXHRcdFx0XHRsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uXCIpO1xuXHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGVzY3JpcHRpb25cIik7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuXHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblx0XHRcdH1cblx0XHRcdGlmIChlbGVtZW50ID09IFwiZHVlRGF0ZVwiKSB7XG5cdFx0XHRcdGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZHVlLWRhdGVcIik7XG5cdFx0XHRcdGxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTpcIjtcblx0XHRcdFx0bGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZXRpbWUtbG9jYWxcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHVlLWRhdGVcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkdWUtZGF0ZVwiKTtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXHRcdFx0fVxuXHRcdFx0Ly9jaGFuZ2UgdGhpcyB0byByYWRpbyB3aXRoIDMgcHJpb3JpdHkgb3B0aW9ucyBsb3cgbWVkIGhpZ2hcblx0XHRcdGlmIChlbGVtZW50ID09IFwicHJpb3JpdHlcIikge1xuXHRcdFx0XHRsZXQgYXJyYXkgPSBbXCJsb3dcIiwgXCJtZWRcIiwgXCJoaWdoXCJdO1xuXG5cdFx0XHRcdGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJpb3JpdHlcIik7XG5cdFx0XHRcdGxhYmVsLnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogXCI7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuXHRcdFx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRcdFx0Y29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuXHRcdFx0XHRcdGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0XHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgZWxlbWVudCk7XG5cdFx0XHRcdFx0bGFiZWwudGV4dENvbnRlbnQgPSBlbGVtZW50O1xuXG5cdFx0XHRcdFx0bGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcblx0XHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBlbGVtZW50KTtcblx0XHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG5cdFx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgZWxlbWVudCk7XG5cblx0XHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblx0XHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGVsZW1lbnQgPT0gXCJsaXN0XCIpIHtcblx0XHRcdFx0bGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJMaXN0XCIpO1xuXHRcdFx0XHRsYWJlbC50ZXh0Q29udGVudCA9IFwiTGlzdDpcIjtcblx0XHRcdFx0bGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5cdFx0XHRcdHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxpc3RcIik7XG5cdFx0XHRcdHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibGlzdFwiKTtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0KTtcblx0XHRcdFx0Ly9UT0RPIGZpbmQgb3V0IGhvdyB0byB1cGRhdGUgdGhlc2Ugb3B0aW9ucyB3aGVuIGEgbmV3IGxpc3QgZ2V0cyBjcmVhdGVkLlxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RBcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdC8vZ3JhYnMgY3JlYXRlZCBMaXN0cyBhbmQgaW5wdXRzIHRoZW0gaW50byB0aGUgbGlzdCBzZWxlY3Rpb24gb3B0aW9ucyBkcm9wIGRvd24uXG5cdFx0XHRcdFx0Y29uc3QgZWxlbWVudCA9IGxpc3RBcnJheVtpXS50aXRsZTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImRpc3BsYXkudG9kb0Zvcm1cIik7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cobGlzdEFycmF5KTtcblx0XHRcdFx0XHRjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXHRcdFx0XHRcdG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBsaXN0QXJyYXlbaV0udGl0bGUpO1xuXHRcdFx0XHRcdG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpc3QtdmFsdWVcIik7XG5cdFx0XHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRMaXN0ID1cblx0XHRcdFx0XHRcdGxpc3RBcnJheVtpXS50aXRsZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG5cdFx0XHRcdFx0XHRsaXN0QXJyYXlbaV0udGl0bGUuc2xpY2UoMSk7XG5cdFx0XHRcdFx0b3B0aW9uLnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZWRMaXN0O1xuXHRcdFx0XHRcdHNlbGVjdC5hcHBlbmQob3B0aW9uKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRzdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcblx0XHRzdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJTdWJtaXRcIik7XG5cdFx0c3VibWl0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1mb3JtLWJ0blwiKTtcblx0XHRmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cdFx0bGV0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1mb3JtLWJ0blwiKTtcblx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0c3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRkYXRhQ29uZC5pbnNlcnRUb2RvSW50b0xpc3QoKTtcblx0XHRcdHNlbGYuZGlzcGxheVRvZG9BbW91bnQoKTtcblx0XHRcdGNvbnNvbGUubG9nKFwiSGk6KVwiKTtcblx0XHR9KTtcblx0fVxuXG5cdGxpc3RGb3JtKCkge1xuXHRcdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblx0XHRmb3JtLnNldEF0dHJpYnV0ZShcIm9uc3VibWl0XCIsIFwicmV0dXJuIGZhbHNlXCIpO1xuXHRcdGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaXN0LWZvcm1cIik7XG5cdFx0Y29uc3QgbGlzdFZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1saXN0XCIpO1xuXHRcdGxpc3RWaWV3LmFwcGVuZENoaWxkKGZvcm0pO1xuXG5cdFx0bGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRcdGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5ldy1saXN0XCIpO1xuXHRcdGxhYmVsLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJuZXctbGlzdFwiKTtcblx0XHRsYWJlbC50ZXh0Q29udGVudCA9IFwiTGlzdDpcIjtcblx0XHRsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXctbGlzdFwiKTtcblx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibmV3LWxpc3RcIik7XG5cdFx0Zm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cdFx0Zm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cblx0XHRjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdFx0c3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG5cdFx0c3VibWl0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiU3VibWl0XCIpO1xuXHRcdHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxpc3QtZm9ybS1idG5cIik7XG5cdFx0Zm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXHR9XG5cblx0Zm9ybVJlc2V0KCkge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1mb3JtXCIpLnJlc2V0KCk7XG5cdH1cblxuXHRkaXNwbGF5TGlzdHMoKSB7XG5cdFx0Ly9EaXNwbGF5cyBkZWZhdWx0IENhcHR1cmUgbGlzdCBpbiBsaXN0IHZpZXcuXG5cdFx0Y29uc3QgbGlzdFZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3Qtdmlld1wiKTtcblx0XHRjb25zdCBjYXB0dXJlTGlzdCA9IGxpc3RBcnJheVswXS50aXRsZTtcblx0XHRjb25zdCBkZWZhdWx0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFx0ZGVmYXVsdExpc3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaXN0LW9wdGlvblwiKTtcblx0XHRkZWZhdWx0TGlzdC50ZXh0Q29udGVudCA9IGNhcHR1cmVMaXN0O1xuXHRcdGxpc3RWaWV3LmFwcGVuZChkZWZhdWx0TGlzdCk7XG5cblx0XHRjb25zdCBsaXN0U3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0LWZvcm0tYnRuXCIpO1xuXHRcdGxpc3RTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdGxldCBsaXN0QXJyYXlMZW4gPSBsaXN0QXJyYXkubGVuZ3RoO1xuXHRcdFx0bGV0IG5ld0xpc3QgPSBsaXN0QXJyYXlbbGlzdEFycmF5TGVuIC0gMV0udGl0bGU7XG5cdFx0XHRjb25zdCBpbnB1dExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdFx0aW5wdXRMaXN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlzdC1vcHRpb25cIik7XG5cdFx0XHRpbnB1dExpc3QudGV4dENvbnRlbnQgPSBuZXdMaXN0O1xuXHRcdFx0bGlzdFZpZXcuYXBwZW5kKGlucHV0TGlzdCk7XG5cdFx0XHR0aGlzLmRpc3BsYXlTZWxlY3RlZExpc3QoKTtcblx0XHR9KTtcblx0fVxuXG5cdGRpc3BsYXlTZWxlY3RlZExpc3QoKSB7XG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdGxldCBsaXN0Tm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3Qtb3B0aW9uXCIpO1xuXHRcdGxpc3ROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0Tm9kZUVsZSwgaSkge1xuXHRcdFx0bGlzdE5vZGVzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHNlbGVjdGVkTGlzdCA9IGxpc3ROb2Rlc1tpXS50ZXh0Q29udGVudDtcblx0XHRcdFx0Y29uc3QgbGlzdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2xpc3QtdGl0bGVcIik7XG5cdFx0XHRcdGxpc3RUaXRsZS50ZXh0Q29udGVudCA9IHNlbGVjdGVkTGlzdDtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJ0aXRsZSB1cGRhdGVkXCIpO1xuXHRcdFx0XHRzZWxmLnNlbGVjdGVkTGlzdCA9IHNlbGVjdGVkTGlzdDtcblx0XHRcdFx0c2VsZi5kaXNwbGF5VG9kb0Ftb3VudCgpO1xuXHRcdFx0XHRzZWxmLmRpc3BsYXlUb2RvKCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdGRpc3BsYXlUb2RvKCkge1xuXHRcdC8vY3VyZW50bHkgd2lsbCBkaXNwbGF5IHRvZG8gdGl0bGUuIGZpZ3VyZSBvdXQgYSB3YXkgdG8gb25seSBkaXNwbGF5IHRvZG8gb25jZSB0byBhdm9pZCBkdXBsaWNhdGVzLlxuXHRcdGNvbnN0IGN1cnJlbnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdFwiLmhlYWRlcl9fbGlzdC10aXRsZVwiXG5cdFx0KS50ZXh0Q29udGVudDtcblx0XHRjb25zdCB0b2RvVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby12aWV3XCIpO1xuXHRcdC8vIUJVRyB2YXIgKGkpIHJlc2V0cyB0byAwIGVhY2ggdGltZSBmdW5jdGlvbiBpcyBjYWxsZWQgdGh1cyBjYXVzaW5nIGl0IHRvIGRpc3BsYXkgdGhlIHNhbWUgYXJyYXkgZWxlbWVudCB3aGVuIHlvdSBpbnNlcnQgYW5vdGhlciBvbmVcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RBcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0Ly8gY29uc3QgZWxlbWVudCA9IGxpc3RBcnJheVtpXTtcblx0XHRcdGxldCBsaXN0VGl0bGUgPSBsaXN0QXJyYXlbaV0udGl0bGU7XG5cdFx0XHRpZiAoY3VycmVudExpc3QgPT0gbGlzdFRpdGxlICYmIGxpc3RBcnJheVtpXS50b2Rvcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5cdFx0XHRcdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRcdFx0XHRjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRcdFx0XHRjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdFx0XHRcdGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cblx0XHRcdFx0Ly9BZGRpbmcgdG9kbyBkZXRhaWxzIHRvIGVsZW1lbnRzXG5cdFx0XHRcdGNvbnNvbGUubG9nKGxpc3RBcnJheVtpXS50b2Rvc1tpXS50aXRsZSk7XG5cdFx0XHRcdHRpdGxlLnRleHRDb250ZW50ID0gbGlzdEFycmF5W2ldLnRvZG9zW2ldLnRpdGxlO1xuXHRcdFx0XHRkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGxpc3RBcnJheVtpXS50b2Rvc1tpXS5kZXNjcmlwdGlvbjtcblx0XHRcdFx0ZHVlRGF0ZS50ZXh0Q29udGVudCA9IGxpc3RBcnJheVtpXS50b2Rvc1tpXS5kdWVEYXRlO1xuXHRcdFx0XHRwcmlvcml0eS50ZXh0Q29udGVudCA9IGxpc3RBcnJheVtpXS50b2Rvc1tpXS5wcmlvcml0eTtcblxuXHRcdFx0XHQvL1NldHRpbmdzIEF0dHJpYnV0ZXNcblx0XHRcdFx0dG9kb0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywndG9kby1vYmonKTtcblx0XHRcdFx0dGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3RvZG8tdGl0bGUnKTtcblx0XHRcdFx0ZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsJ3RvZG8tZGVzYycpO1xuXHRcdFx0XHRkdWVEYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCd0b2RvLWR1ZWRhdGUnKTtcblx0XHRcdFx0cHJpb3JpdHkuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3RvZG8tcHJpb3JpdHknKTtcblxuXHRcdFx0XHR0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywndG9kby1pdGVtcycpXG5cdFx0XHRcdGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCd0b2RvLWl0ZW1zJyk7XG5cdFx0XHRcdGR1ZURhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3RvZG8taXRlbXMnKTtcblx0XHRcdFx0cHJpb3JpdHkuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3RvZG8taXRlbXMnKTtcblxuXG5cdFx0XHRcdC8vIGxldCBkaXNwbGF5ZWRUb2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLW9iaicpO1xuXHRcdFx0XHRcblx0XHRcdFx0Ly8gLy9pZiBncmFiYmVkIHRpdGxlIGlzIHRoZSBzYW1lIGFzIHRvZG8gdGl0bGUgZG8gbm90IGRpc3BsYXkgdGhpcyB0b2RvLiBlbHNlIGRpc3BsYXkgXG5cdFx0XHRcdC8vIGlmIChkaXNwbGF5ZWRUb2Rvcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdC8vIFx0aWYgKGQpIHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHQvLyBcdH1cblx0XHRcdFx0Ly8gNH1cblxuXHRcdFx0XHR0b2RvQ29udGFpbmVyLmFwcGVuZCh0aXRsZSk7XG5cdFx0XHRcdHRvZG9Db250YWluZXIuYXBwZW5kKGRlc2NyaXB0aW9uKTtcblx0XHRcdFx0dG9kb0NvbnRhaW5lci5hcHBlbmQoZHVlRGF0ZSk7XG5cdFx0XHRcdHRvZG9Db250YWluZXIuYXBwZW5kKHByaW9yaXR5KTtcblxuXHRcdFx0XHR0b2RvVmlldy5hcHBlbmQodG9kb0NvbnRhaW5lcik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcInRoZXJlIGFyZSBubyB0b2RvcyB0byBkaXNwbGF5XCIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGRpc3BsYXlUb2RvQW1vdW50KCkge1xuXHRcdGNvbnNvbGUubG9nKGxpc3RBcnJheVswXS50aXRsZSk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGxpc3RUaXRsZSA9IGxpc3RBcnJheVtpXS50aXRsZTtcblx0XHRcdGNvbnN0IGxpc3RUb2RvTGVuID0gbGlzdEFycmF5W2ldLnRvZG9zLmxlbmd0aDtcblx0XHRcdC8vY3VycmVudGx5IGNoZWNrcyBpZiBzZWxlY3RlZCBsaXN0IGZyb20gbGlzdCBub2RlcyBtYXRjaGVzLlxuXHRcdFx0Ly9UT0RPIG5lZWQgdG8gdXBkYXRlIHRoZSBudW1iZXIgd2hlbiB0b2RvIGlzIHN1Ym1pdHRlZCB3aXRob3V0IGNoYW5naW5nIGRlZmF1bHQgbGlzdFxuXHRcdFx0aWYgKGxpc3RUaXRsZSA9PSB0aGlzLnNlbGVjdGVkTGlzdCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhsaXN0VGl0bGUgKyBcIiBcIiArIHRoaXMuc2VsZWN0ZWRMaXN0ICsgXCJtYXRjaGVzXCIpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhsaXN0VG9kb0xlbik7XG5cdFx0XHRcdGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlcl9fdG9kby1hbW91bnRcIik7XG5cdFx0XHRcdGNvdW50ZXIudGV4dENvbnRlbnQgPSBsaXN0VG9kb0xlbjtcblx0XHRcdH1cblx0XHRcdC8vV2lsbCB1cGRhdGUgY291bnRlciBldmVuIGlzIGxpc3Rub2RlIGlzIG5vdCBzZWxlY3RlZC5cblx0XHRcdGxldCBkZWZhdWx0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcdFwiLmhlYWRlcl9fbGlzdC10aXRsZVwiXG5cdFx0XHQpLnRleHRDb250ZW50O1xuXHRcdFx0aWYgKGxpc3RUaXRsZSA9PSBkZWZhdWx0TGlzdCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcImxpc3Qgd2FzbnQgY2hhbmdlZC5cIik7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGxpc3RBcnJheSk7XG5cdFx0XHRcdGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlcl9fdG9kby1hbW91bnRcIik7XG5cdFx0XHRcdGNvdW50ZXIudGV4dENvbnRlbnQgPSBsaXN0VG9kb0xlbjtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbmV4cG9ydCB7IERpc3BsYXkgfTtcbiIsIi8vSGVscHMgdHJhY2sgdGhlIGNyZWF0ZWQgbGlzdHMuXG5leHBvcnQgY29uc3QgbGlzdEFycmF5ID0gW107IiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL2NyZWF0ZVRvRG9cIjtcbmltcG9ydCB7IGxpc3RBcnJheSB9IGZyb20gXCIuL2xpc3RBcnJheVRyYWNrZXJcIjtcbmltcG9ydCB7IERpc3BsYXkgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSBcIi4vY3JlYXRlTGlzdFwiO1xuY2xhc3MgQ29uZHVjdG9yIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy50b2RvRGF0YSA9IFtdOyAvL0kgd2FudCB0byBhY2Nlc3MgdGhpcyBhcnJheSBpbiBtZXRob2QuXG5cdFx0dGhpcy5saXN0O1xuXHR9XG5cblx0Z3JhYkZvcm1EYXRhKCkge1xuXHRcdGNvbnN0IHRvZG9Gb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWZvcm0tYnRuXCIpO1xuXG5cdFx0bGV0IGFycmF5RGF0YSA9IHRoaXM7XG5cblx0XHQvLyB0b2RvRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlO1xuXHRcdFx0Y29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuXHRcdFx0Y29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLWRhdGVcIikudmFsdWU7XG5cdFx0XHRsZXQgcHJpb3JpdHk7XG5cdFx0XHR2YXIgZWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJwcmlvcml0eVwiKTtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlbGUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKGVsZVtpXS5jaGVja2VkKSB7XG5cdFx0XHRcdFx0cHJpb3JpdHkgPSBlbGVbaV0udmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RcIikudmFsdWU7XG5cblx0XHRcdC8vY3JlYXRlIHRvZG9PYmpcblx0XHRcdGNvbnN0IHRvZG9PYmogPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcblxuXHRcdFx0Ly9QdXNoZXMgdG9kbyB0byBhcnJheVxuXHRcdFx0YXJyYXlEYXRhLnRvZG9EYXRhLnB1c2godG9kb09iaik7XG5cdFx0XHRhcnJheURhdGEubGlzdCA9IGxpc3Q7XG5cdFx0Ly8gfSk7XG5cdH1cblxuXHRwdXNoVG9MaXN0KGxpc3QpIHtcblx0XHRsZXQgdG9kb0RhdGFMZW4gPSB0aGlzLnRvZG9EYXRhLmxlbmd0aDtcblx0XHRsaXN0LmFkZCh0aGlzLnRvZG9EYXRhW3RvZG9EYXRhTGVuIC0gMV0pO1xuXHR9XG5cblx0cmV0dXJuTGlzdCgpIHtcblx0XHRyZXR1cm4gdGhpcy5saXN0O1xuXHR9XG5cblx0aW5zZXJ0VG9kb0ludG9MaXN0KCkge1xuXHRcdGxldCBjb25kdWN0b3IgPSB0aGlzO1xuXHRcdGxldCBkaXNwbGF5ID0gbmV3IERpc3BsYXkoKTtcblx0XHQvL0dyYWJzIGRhdGEgZnJvbVxuXHRcdC8vR3JhYnMgZm9ybSBkYXRhIGFuZCBpbnNlcnRzIGl0IGludG8gdGhlIHNlbGVjdGVkIExpc3Rcblx0XHRsZXQgZm9ybUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1mb3JtLWJ0blwiKTtcblx0XHRcblx0XHRjb25kdWN0b3IuZ3JhYkZvcm1EYXRhKCk7XG5cdFx0XG5cdFx0Ly8gZm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly9UT0RPOiBDcmVhdGUgY29kZSB0aGF0IGdyYWJzIHNlbGVjdGVkIGxpc3QgYW5kIGluc2VydHMgaW50byB0aGF0IGxpc3QuXG5cdFx0XHRsZXQgbGlzdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RcIik7XG5cdFx0XHRsZXQgY29sbGVjdGlvbiA9IGxpc3RzLnNlbGVjdGVkT3B0aW9ucztcblxuXHRcdFx0bGV0IHNlbGVjdGVkTGlzdCA9IGNvbGxlY3Rpb25bMF0ubGFiZWw7XG5cdFx0XHRjb25zb2xlLmxvZyhzZWxlY3RlZExpc3QpO1xuXG5cdFx0XHQvL0luc2VydHMgZGF0YSB0byBzZWxlY3RlZCBsaXN0IHdoZW4gc3VibWl0dGVkLlxuXHRcdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpc3RBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdFx0Y29uc3QgbGlzdCA9IGxpc3RBcnJheVtpbmRleF07XG5cdFx0XHRcdGlmIChsaXN0LnRpdGxlID09IHNlbGVjdGVkTGlzdCkge1xuXHRcdFx0XHRcdGNvbmR1Y3Rvci5wdXNoVG9MaXN0KGxpc3RBcnJheVtpbmRleF0pO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGxpc3RBcnJheSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJDb2RlIGV4aXQgMVwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRkaXNwbGF5LmZvcm1SZXNldCgpO1xuXHRcdFx0Y29uc29sZS5sb2cobGlzdEFycmF5KTtcblx0XHQvLyB9KTtcblx0fVxuXG5cdGNyZWF0ZU5ld0xpc3QoKSB7XG5cdFx0bGV0IGRpc3BsYXkgPSBuZXcgRGlzcGxheSgpO1xuXHRcdGxldCBsaXN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0LWZvcm0tYnRuXCIpO1xuXHRcdFxuXHRcdGxpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG5cdFx0XHRsZXQgbGlzdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1saXN0JykudmFsdWU7XG5cdFx0XHRjb25zdCBjYXBpdGFsaXplZExpc3QgPSBsaXN0SW5wdXQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBsaXN0SW5wdXQuc2xpY2UoMSk7XG5cdFx0XHRjb25zdCBuZXdMaXN0ID0gbmV3IExpc3QoY2FwaXRhbGl6ZWRMaXN0KTtcblx0XHRcdGxpc3RBcnJheS5wdXNoKG5ld0xpc3QpO1xuXHRcdFx0ZGlzcGxheS5mb3JtUmVzZXQoKTtcblx0XHRcdGNvbnNvbGUubG9nKGxpc3RBcnJheSk7XG5cblx0XHRcdGNvbnN0IGxpc3RPcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QnKTtcblx0XHRcdGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRcdFx0b3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLGxpc3RJbnB1dCk7XG5cdFx0XHRvcHRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsJ2xpc3QtdmFsdWUnKVxuXHRcdFx0b3B0aW9uLnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZWRMaXN0O1xuXHRcdFx0bGlzdE9wdGlvbnMuYXBwZW5kKG9wdGlvbik7XG5cdFx0fSlcblxuXHR9XG59XG5leHBvcnQgeyBDb25kdWN0b3IgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtMaXN0fSBmcm9tIFwiLi9jcmVhdGVMaXN0XCJcbmltcG9ydCB7RGlzcGxheX0gZnJvbSBcIi4vZGlzcGxheVwiXG5pbXBvcnQge0NvbmR1Y3Rvcn0gZnJvbSAnLi90b2RvRGF0YUNvbmR1Y3Rvcic7XG4vL0hvbGRzIGNyZWF0ZWQgYXJyYXlzXG5pbXBvcnQge2xpc3RBcnJheX0gZnJvbSBcIi4vbGlzdEFycmF5VHJhY2tlci5qc1wiO1xuXG5cbi8vRG9tIGNvbnRyb2xsZXJcbmxldCBkaXNwbGF5ID0gbmV3IERpc3BsYXkoKTtcbi8vRGF0YSBNYW5pcHVsYXRvclxubGV0IGRhdGFDb25kID0gbmV3IENvbmR1Y3RvcigpO1xuLy9MaXN0cyBcbi8vVE9ETyBtYWtlIHRoaXMgYXV0b21hdGljLi4uLi5cbi8vREVGQVVMVCBDUkVBVEVEIExJU1RcbmxldCBjYXB0dXJlID0gbmV3IExpc3QoJ0NhcHR1cmUnKTtcbmxpc3RBcnJheS5wdXNoKGNhcHR1cmUpO1xuLy8gbGV0IG5leHRBY3Rpb25zID0gbmV3IExpc3QoJ05leHQgQWN0aW9ucycpO1xuLy8gbGlzdEFycmF5LnB1c2gobmV4dEFjdGlvbnMpO1xuLy8gbGV0IHRpY2tsZXIgPSBuZXcgTGlzdCgnVGlja2xlcicpO1xuLy8gbGlzdEFycmF5LnB1c2godGlja2xlcik7XG5cblxuXG5cbi8vVE9ET15eXl5eXl5eXl5eXl5eXl5eXl5eXG4vL0xvYWRzIGZvcm1cbmRpc3BsYXkudG9kb0Zvcm0oKTtcbmRpc3BsYXkubGlzdEZvcm0oKTtcblxuLy9ncmFicyB0b2RvIGRhdGEgYW5kIGluc2VydHMgaW50byBsaXN0XG4vLyBkYXRhQ29uZC5pbnNlcnRUb2RvSW50b0xpc3QoKTtcbmRhdGFDb25kLmNyZWF0ZU5ld0xpc3QoKTtcbmRpc3BsYXkuZm9ybVJlc2V0KCk7XG5cbmRpc3BsYXkuZGlzcGxheUxpc3RzKCk7XG5kaXNwbGF5LmRpc3BsYXlTZWxlY3RlZExpc3QoKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9