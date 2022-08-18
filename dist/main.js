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
				for (let i = 0; i < _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.length; i++) {
					//grabs created Lists and inputs them into the list selection options drop down.
					const element = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].title;
					console.log('display.todoForm');
					console.log(_listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray);
					const option = document.createElement('option');
					option.setAttribute('value',_listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].title);
					option.setAttribute('class','list-value')
					const capitalizedList = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].title.charAt(0).toUpperCase() + _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].title.slice(1);
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
		let submitBtn = document.getElementById('todo-form-btn');
		let self = this;
		submitBtn.addEventListener('click',()=>{
			self.displayTodoAmount();
			console.log('Hi:)')
		})
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
		const captureList = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[0].title;
		const defaultList = document.createElement('button');
		defaultList.setAttribute('class','list-option');
		defaultList.textContent = captureList;
		listView.append(defaultList);

		const listSubmit = document.getElementById('list-form-btn');
		listSubmit.addEventListener('click',()=>{
			let listArrayLen = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.length;
			let newList = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[listArrayLen-1].title
			const inputList = document.createElement('button');
			inputList.setAttribute('class','list-option');
			inputList.textContent = newList;
			listView.append(inputList);
			this.displaySelectedList();

		})
		
	}

	displaySelectedList() {
			let self = this;
			let listNodes = document.querySelectorAll('.list-option');
			listNodes.forEach(function (listNodeEle,i) {
				listNodes[i].addEventListener('click',()=>{
					const selectedList = listNodes[i].textContent;
					const listTitle = document.querySelector('.header__list-title');
					listTitle.textContent = selectedList;
					console.log('title updated');
					self.selectedList = selectedList;
					self.displayTodoAmount();
	
					
				})
			})
			
		}
	

	displayTodo(){

	}

	displayTodoAmount() {
		console.log(_listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[0].title);
		for (let i = 0; i < _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.length; i++) {
			const listTitle = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].title;
			const listTodoLen = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].todos.length;
			if (listTitle == this.selectedList) {
				console.log(listTitle+ ' ' +this.selectedList + 'matches');
				console.log(listTodoLen);
				const counter = document.getElementById('header__todo-amount');
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
			const todoObj = new _createToDo__WEBPACK_IMPORTED_MODULE_0__.Todo(title, description, dueDate, priority);

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
		let display = new _display__WEBPACK_IMPORTED_MODULE_2__.Display();
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
		});
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
dataCond.insertTodoIntoList();
dataCond.createNewList();
display.formReset();

display.displayLists();
display.displaySelectedList();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLHVCQUF1QixRQUFRLCtEQUFnQixFQUFFO0FBQ2pELGlCQUFpQix3REFBUztBQUMxQjtBQUNBLDBCQUEwQix3REFBUztBQUNuQyxpQkFBaUIsd0RBQVM7QUFDMUIsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsd0RBQVM7QUFDeEIsR0FBRztBQUNIOztBQUVBO0FBQ0Esb0JBQW9CLDZDQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNkNBQUk7QUFDM0IsR0FBRyw2REFBYztBQUNqQjtBQUNBLGVBQWUsd0RBQVM7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNxQjs7Ozs7OztVQ3RHckI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05pQztBQUNBO0FBQ2E7QUFDOUM7QUFDZ0Q7OztBQUdoRDtBQUNBLGtCQUFrQiw2Q0FBTztBQUN6QjtBQUNBLG1CQUFtQix5REFBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkNBQUk7QUFDdEIsZ0VBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jcmVhdGVMaXN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY3JlYXRlVG9Eby5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9saXN0QXJyYXlUcmFja2VyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9kb0RhdGFDb25kdWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTGlzdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMudG9kb3MgPSBbXTtcbiAgICB9XG4gICAgLy9hZGRzIGdpdmVuIG9iaiB0byBsaXN0IGFycmF5XG4gICAgYWRkKHRvZG8pe1xuICAgICAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IHtMaXN0fTsiLCJcbmNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG5cbiBcbn1cblxuZXhwb3J0IHsgVG9kbyB9OyIsImltcG9ydCB7Q29uZHVjdG9yfSBmcm9tIFwiLi90b2RvRGF0YUNvbmR1Y3RvclwiO1xuaW1wb3J0IHtsaXN0QXJyYXl9IGZyb20gXCIuL2xpc3RBcnJheVRyYWNrZXJcIjtcbmNsYXNzIERpc3BsYXkge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnNlbGVjdGVkTGlzdDtcblx0fVxuXG5cblx0Ly9jcmVhdGVzIGEgdGhlIGZvcm0gbmVlZGVkIGZyb20gdG9kb1xuXHR0b2RvRm9ybSgpIHtcblx0XHRsZXQgaW5wdXRBcnJheSA9IFtcInRpdGxlXCIsIFwiZGVzY3JpcHRpb25cIiwgXCJkdWVEYXRlXCIsIFwicHJpb3JpdHlcIiwgXCJsaXN0XCJdO1xuXG5cdFx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXHRcdGZvcm0uc2V0QXR0cmlidXRlKFwib25zdWJtaXRcIiwgXCJyZXR1cm4gZmFsc2VcIik7XG5cdFx0Zm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tZm9ybVwiKTtcblx0XHRjb25zdCB0b2RvVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm94X19jb250YWluZXJcIik7XG5cdFx0dG9kb1ZpZXcuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cdFx0Ly9lYWNoIGVsZW1lbnQgZGlzcGxheXMgZGlmZmVyZW50IGlucHV0cyBiYXNlZCBvbiB0aGVpciBuZWVkZWQgZGF0YS5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0QXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGVsZW1lbnQgPSBpbnB1dEFycmF5W2ldO1xuXHRcdFx0aWYgKGVsZW1lbnQgPT0gXCJ0aXRsZVwiKSB7XG5cdFx0XHRcdGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGl0bGVcIik7XG5cdFx0XHRcdGxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZTpcIjtcblx0XHRcdFx0bGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aXRsZVwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpdGxlXCIpO1xuXHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cdFx0XHQgICB9XG5cdFx0XHRpZiAoZWxlbWVudCA9PSBcImRlc2NyaXB0aW9uXCIpIHtcblx0XHRcdFx0bGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkZXNjcmlwdGlvblwiKTtcblx0XHRcdFx0bGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOlwiO1xuXHRcdFx0XHRsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uXCIpO1xuXHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGVzY3JpcHRpb25cIik7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuXHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblx0XHRcdH1cblx0XHRcdGlmIChlbGVtZW50ID09IFwiZHVlRGF0ZVwiKSB7XG5cdFx0XHRcdGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZHVlLWRhdGVcIik7XG5cdFx0XHRcdGxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTpcIjtcblx0XHRcdFx0bGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZXRpbWUtbG9jYWxcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHVlLWRhdGVcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkdWUtZGF0ZVwiKTtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXHRcdFx0fVxuXHRcdFx0Ly9jaGFuZ2UgdGhpcyB0byByYWRpbyB3aXRoIDMgcHJpb3JpdHkgb3B0aW9ucyBsb3cgbWVkIGhpZ2hcblx0XHRcdGlmIChlbGVtZW50ID09IFwicHJpb3JpdHlcIikge1xuXHRcdFx0XHRsZXQgYXJyYXkgPSBbXCJsb3dcIiwgXCJtZWRcIiwgXCJoaWdoXCJdO1xuXHRcdFx0XHRcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5XCIpO1xuXHRcdFx0XHRsYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiO1xuXHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRcdFx0Y29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuXHRcdFx0XHRcdGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0XHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgZWxlbWVudClcblx0XHRcdFx0XHRsYWJlbC50ZXh0Q29udGVudCA9IGVsZW1lbnQ7XG5cblx0XHRcdFx0XHRsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdFx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuXHRcdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGVsZW1lbnQpO1xuXHRcdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIixlbGVtZW50KTtcblxuXHRcdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXHRcdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZWxlbWVudCA9PSBcImxpc3RcIikge1xuXHRcdFx0XHRsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIkxpc3RcIik7XG5cdFx0XHRcdGxhYmVsLnRleHRDb250ZW50ID0gXCJMaXN0OlwiO1xuXHRcdFx0XHRsZXQgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcblx0XHRcdFx0c2VsZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlzdFwiKTtcblx0XHRcdFx0c2VsZWN0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJsaXN0XCIpO1xuXHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChzZWxlY3QpO1xuXHRcdFx0Ly9UT0RPIGZpbmQgb3V0IGhvdyB0byB1cGRhdGUgdGhlc2Ugb3B0aW9ucyB3aGVuIGEgbmV3IGxpc3QgZ2V0cyBjcmVhdGVkLlxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RBcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdC8vZ3JhYnMgY3JlYXRlZCBMaXN0cyBhbmQgaW5wdXRzIHRoZW0gaW50byB0aGUgbGlzdCBzZWxlY3Rpb24gb3B0aW9ucyBkcm9wIGRvd24uXG5cdFx0XHRcdFx0Y29uc3QgZWxlbWVudCA9IGxpc3RBcnJheVtpXS50aXRsZTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnZGlzcGxheS50b2RvRm9ybScpO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGxpc3RBcnJheSk7XG5cdFx0XHRcdFx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdFx0XHRcdFx0b3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLGxpc3RBcnJheVtpXS50aXRsZSk7XG5cdFx0XHRcdFx0b3B0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdsaXN0LXZhbHVlJylcblx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZExpc3QgPSBsaXN0QXJyYXlbaV0udGl0bGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBsaXN0QXJyYXlbaV0udGl0bGUuc2xpY2UoMSk7XG5cdFx0XHRcdFx0b3B0aW9uLnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZWRMaXN0O1xuXHRcdFx0XHRcdHNlbGVjdC5hcHBlbmQob3B0aW9uKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuXHRcdHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlN1Ym1pdFwiKTtcbiAgICAgICAgc3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWZvcm0tYnRuJylcblx0XHRmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cdFx0bGV0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWZvcm0tYnRuJyk7XG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9Pntcblx0XHRcdHNlbGYuZGlzcGxheVRvZG9BbW91bnQoKTtcblx0XHRcdGNvbnNvbGUubG9nKCdIaTopJylcblx0XHR9KVxuXHR9XG5cblx0bGlzdEZvcm0oKSB7XG5cdFx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXHRcdGZvcm0uc2V0QXR0cmlidXRlKFwib25zdWJtaXRcIiwgXCJyZXR1cm4gZmFsc2VcIik7XG5cdFx0Zm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxpc3QtZm9ybVwiKTtcblx0XHRjb25zdCBsaXN0VmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWxpc3RcIik7XG5cdFx0bGlzdFZpZXcuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cblx0XHRcdGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibmV3LWxpc3RcIik7XG5cdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJuZXctbGlzdFwiKTtcblx0XHRcdFx0bGFiZWwudGV4dENvbnRlbnQgPSBcIkxpc3Q6XCI7XG5cdFx0XHRcdGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3LWxpc3RcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJuZXctbGlzdFwiKTtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG5cblx0XHRjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdFx0c3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG5cdFx0c3VibWl0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiU3VibWl0XCIpO1xuICAgICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsJ2xpc3QtZm9ybS1idG4nKVxuXHRcdGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuXHR9XG5cblx0Zm9ybVJlc2V0KCkge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1mb3JtXCIpLnJlc2V0KCk7XG5cdH1cblxuXHRkaXNwbGF5TGlzdHMoKXtcblx0XHQvL0Rpc3BsYXlzIGRlZmF1bHQgQ2FwdHVyZSBsaXN0IGluIGxpc3Qgdmlldy5cblx0XHRjb25zdCBsaXN0VmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LXZpZXcnKTtcblx0XHRjb25zdCBjYXB0dXJlTGlzdCA9IGxpc3RBcnJheVswXS50aXRsZTtcblx0XHRjb25zdCBkZWZhdWx0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdGRlZmF1bHRMaXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdsaXN0LW9wdGlvbicpO1xuXHRcdGRlZmF1bHRMaXN0LnRleHRDb250ZW50ID0gY2FwdHVyZUxpc3Q7XG5cdFx0bGlzdFZpZXcuYXBwZW5kKGRlZmF1bHRMaXN0KTtcblxuXHRcdGNvbnN0IGxpc3RTdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdC1mb3JtLWJ0bicpO1xuXHRcdGxpc3RTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG5cdFx0XHRsZXQgbGlzdEFycmF5TGVuID0gbGlzdEFycmF5Lmxlbmd0aDtcblx0XHRcdGxldCBuZXdMaXN0ID0gbGlzdEFycmF5W2xpc3RBcnJheUxlbi0xXS50aXRsZVxuXHRcdFx0Y29uc3QgaW5wdXRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0XHRpbnB1dExpc3Quc2V0QXR0cmlidXRlKCdjbGFzcycsJ2xpc3Qtb3B0aW9uJyk7XG5cdFx0XHRpbnB1dExpc3QudGV4dENvbnRlbnQgPSBuZXdMaXN0O1xuXHRcdFx0bGlzdFZpZXcuYXBwZW5kKGlucHV0TGlzdCk7XG5cdFx0XHR0aGlzLmRpc3BsYXlTZWxlY3RlZExpc3QoKTtcblxuXHRcdH0pXG5cdFx0XG5cdH1cblxuXHRkaXNwbGF5U2VsZWN0ZWRMaXN0KCkge1xuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0bGV0IGxpc3ROb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0LW9wdGlvbicpO1xuXHRcdFx0bGlzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGxpc3ROb2RlRWxlLGkpIHtcblx0XHRcdFx0bGlzdE5vZGVzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuXHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkTGlzdCA9IGxpc3ROb2Rlc1tpXS50ZXh0Q29udGVudDtcblx0XHRcdFx0XHRjb25zdCBsaXN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19saXN0LXRpdGxlJyk7XG5cdFx0XHRcdFx0bGlzdFRpdGxlLnRleHRDb250ZW50ID0gc2VsZWN0ZWRMaXN0O1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCd0aXRsZSB1cGRhdGVkJyk7XG5cdFx0XHRcdFx0c2VsZi5zZWxlY3RlZExpc3QgPSBzZWxlY3RlZExpc3Q7XG5cdFx0XHRcdFx0c2VsZi5kaXNwbGF5VG9kb0Ftb3VudCgpO1xuXHRcblx0XHRcdFx0XHRcblx0XHRcdFx0fSlcblx0XHRcdH0pXG5cdFx0XHRcblx0XHR9XG5cdFxuXG5cdGRpc3BsYXlUb2RvKCl7XG5cblx0fVxuXG5cdGRpc3BsYXlUb2RvQW1vdW50KCkge1xuXHRcdGNvbnNvbGUubG9nKGxpc3RBcnJheVswXS50aXRsZSk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGxpc3RUaXRsZSA9IGxpc3RBcnJheVtpXS50aXRsZTtcblx0XHRcdGNvbnN0IGxpc3RUb2RvTGVuID0gbGlzdEFycmF5W2ldLnRvZG9zLmxlbmd0aDtcblx0XHRcdGlmIChsaXN0VGl0bGUgPT0gdGhpcy5zZWxlY3RlZExpc3QpIHtcblx0XHRcdFx0Y29uc29sZS5sb2cobGlzdFRpdGxlKyAnICcgK3RoaXMuc2VsZWN0ZWRMaXN0ICsgJ21hdGNoZXMnKTtcblx0XHRcdFx0Y29uc29sZS5sb2cobGlzdFRvZG9MZW4pO1xuXHRcdFx0XHRjb25zdCBjb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcl9fdG9kby1hbW91bnQnKTtcblx0XHRcdFx0Y291bnRlci50ZXh0Q29udGVudCA9IGxpc3RUb2RvTGVuO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fVxuXG5cdH1cbn1cbmV4cG9ydCB7IERpc3BsYXkgfTtcbiIsIi8vSGVscHMgdHJhY2sgdGhlIGNyZWF0ZWQgbGlzdHMuXG5leHBvcnQgY29uc3QgbGlzdEFycmF5ID0gW107IiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL2NyZWF0ZVRvRG9cIjtcbmltcG9ydCB7IGxpc3RBcnJheSB9IGZyb20gXCIuL2xpc3RBcnJheVRyYWNrZXJcIjtcbmltcG9ydCB7IERpc3BsYXkgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSBcIi4vY3JlYXRlTGlzdFwiO1xuY2xhc3MgQ29uZHVjdG9yIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy50b2RvRGF0YSA9IFtdOyAvL0kgd2FudCB0byBhY2Nlc3MgdGhpcyBhcnJheSBpbiBtZXRob2QuXG5cdFx0dGhpcy5saXN0O1xuXHR9XG5cblx0Z3JhYkZvcm1EYXRhKCkge1xuXHRcdGNvbnN0IHRvZG9Gb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWZvcm0tYnRuXCIpO1xuXG5cdFx0bGV0IGFycmF5RGF0YSA9IHRoaXM7XG5cblx0XHR0b2RvRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlO1xuXHRcdFx0Y29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuXHRcdFx0Y29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLWRhdGVcIikudmFsdWU7XG5cdFx0XHRsZXQgcHJpb3JpdHk7XG5cdFx0XHR2YXIgZWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJwcmlvcml0eVwiKTtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlbGUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKGVsZVtpXS5jaGVja2VkKSB7XG5cdFx0XHRcdFx0cHJpb3JpdHkgPSBlbGVbaV0udmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RcIikudmFsdWU7XG5cblx0XHRcdC8vY3JlYXRlIHRvZG9PYmpcblx0XHRcdGNvbnN0IHRvZG9PYmogPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcblxuXHRcdFx0Ly9QdXNoZXMgdG9kbyB0byBhcnJheVxuXHRcdFx0YXJyYXlEYXRhLnRvZG9EYXRhLnB1c2godG9kb09iaik7XG5cdFx0XHRhcnJheURhdGEubGlzdCA9IGxpc3Q7XG5cdFx0fSk7XG5cdH1cblxuXHRwdXNoVG9MaXN0KGxpc3QpIHtcblx0XHRsZXQgdG9kb0RhdGFMZW4gPSB0aGlzLnRvZG9EYXRhLmxlbmd0aDtcblx0XHRsaXN0LmFkZCh0aGlzLnRvZG9EYXRhW3RvZG9EYXRhTGVuIC0gMV0pO1xuXHR9XG5cblx0cmV0dXJuTGlzdCgpIHtcblx0XHRyZXR1cm4gdGhpcy5saXN0O1xuXHR9XG5cblx0aW5zZXJ0VG9kb0ludG9MaXN0KCkge1xuXHRcdGxldCBjb25kdWN0b3IgPSB0aGlzO1xuXHRcdGxldCBkaXNwbGF5ID0gbmV3IERpc3BsYXkoKTtcblx0XHQvL0dyYWJzIGRhdGEgZnJvbVxuXHRcdC8vR3JhYnMgZm9ybSBkYXRhIGFuZCBpbnNlcnRzIGl0IGludG8gdGhlIHNlbGVjdGVkIExpc3Rcblx0XHRsZXQgZm9ybUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1mb3JtLWJ0blwiKTtcblx0XHRcblx0XHRjb25kdWN0b3IuZ3JhYkZvcm1EYXRhKCk7XG5cdFx0XG5cdFx0Zm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly9UT0RPOiBDcmVhdGUgY29kZSB0aGF0IGdyYWJzIHNlbGVjdGVkIGxpc3QgYW5kIGluc2VydHMgaW50byB0aGF0IGxpc3QuXG5cdFx0XHRsZXQgbGlzdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RcIik7XG5cdFx0XHRsZXQgY29sbGVjdGlvbiA9IGxpc3RzLnNlbGVjdGVkT3B0aW9ucztcblxuXHRcdFx0bGV0IHNlbGVjdGVkTGlzdCA9IGNvbGxlY3Rpb25bMF0ubGFiZWw7XG5cdFx0XHRjb25zb2xlLmxvZyhzZWxlY3RlZExpc3QpO1xuXG5cdFx0XHQvL0luc2VydHMgZGF0YSB0byBzZWxlY3RlZCBsaXN0IHdoZW4gc3VibWl0dGVkLlxuXHRcdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpc3RBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdFx0Y29uc3QgbGlzdCA9IGxpc3RBcnJheVtpbmRleF07XG5cdFx0XHRcdGlmIChsaXN0LnRpdGxlID09IHNlbGVjdGVkTGlzdCkge1xuXHRcdFx0XHRcdGNvbmR1Y3Rvci5wdXNoVG9MaXN0KGxpc3RBcnJheVtpbmRleF0pO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGxpc3RBcnJheSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJDb2RlIGV4aXQgMVwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRkaXNwbGF5LmZvcm1SZXNldCgpO1xuXHRcdFx0Y29uc29sZS5sb2cobGlzdEFycmF5KTtcblx0XHR9KTtcblx0fVxuXG5cdGNyZWF0ZU5ld0xpc3QoKSB7XG5cdFx0bGV0IGRpc3BsYXkgPSBuZXcgRGlzcGxheSgpO1xuXHRcdGxldCBsaXN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0LWZvcm0tYnRuXCIpO1xuXHRcdFxuXHRcdGxpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG5cdFx0XHRsZXQgbGlzdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1saXN0JykudmFsdWU7XG5cdFx0XHRjb25zdCBjYXBpdGFsaXplZExpc3QgPSBsaXN0SW5wdXQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBsaXN0SW5wdXQuc2xpY2UoMSk7XG5cdFx0XHRjb25zdCBuZXdMaXN0ID0gbmV3IExpc3QoY2FwaXRhbGl6ZWRMaXN0KTtcblx0XHRcdGxpc3RBcnJheS5wdXNoKG5ld0xpc3QpO1xuXHRcdFx0ZGlzcGxheS5mb3JtUmVzZXQoKTtcblx0XHRcdGNvbnNvbGUubG9nKGxpc3RBcnJheSk7XG5cblx0XHRcdGNvbnN0IGxpc3RPcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QnKTtcblx0XHRcdGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRcdFx0b3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLGxpc3RJbnB1dCk7XG5cdFx0XHRvcHRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsJ2xpc3QtdmFsdWUnKVxuXHRcdFx0b3B0aW9uLnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZWRMaXN0O1xuXHRcdFx0bGlzdE9wdGlvbnMuYXBwZW5kKG9wdGlvbik7XG5cdFx0fSlcblxuXHR9XG59XG5leHBvcnQgeyBDb25kdWN0b3IgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtMaXN0fSBmcm9tIFwiLi9jcmVhdGVMaXN0XCJcbmltcG9ydCB7RGlzcGxheX0gZnJvbSBcIi4vZGlzcGxheVwiXG5pbXBvcnQge0NvbmR1Y3Rvcn0gZnJvbSAnLi90b2RvRGF0YUNvbmR1Y3Rvcic7XG4vL0hvbGRzIGNyZWF0ZWQgYXJyYXlzXG5pbXBvcnQge2xpc3RBcnJheX0gZnJvbSBcIi4vbGlzdEFycmF5VHJhY2tlci5qc1wiO1xuXG5cbi8vRG9tIGNvbnRyb2xsZXJcbmxldCBkaXNwbGF5ID0gbmV3IERpc3BsYXkoKTtcbi8vRGF0YSBNYW5pcHVsYXRvclxubGV0IGRhdGFDb25kID0gbmV3IENvbmR1Y3RvcigpO1xuLy9MaXN0cyBcbi8vVE9ETyBtYWtlIHRoaXMgYXV0b21hdGljLi4uLi5cbi8vREVGQVVMVCBDUkVBVEVEIExJU1RcbmxldCBjYXB0dXJlID0gbmV3IExpc3QoJ0NhcHR1cmUnKTtcbmxpc3RBcnJheS5wdXNoKGNhcHR1cmUpO1xuLy8gbGV0IG5leHRBY3Rpb25zID0gbmV3IExpc3QoJ05leHQgQWN0aW9ucycpO1xuLy8gbGlzdEFycmF5LnB1c2gobmV4dEFjdGlvbnMpO1xuLy8gbGV0IHRpY2tsZXIgPSBuZXcgTGlzdCgnVGlja2xlcicpO1xuLy8gbGlzdEFycmF5LnB1c2godGlja2xlcik7XG5cblxuXG5cbi8vVE9ET15eXl5eXl5eXl5eXl5eXl5eXl5eXG4vL0xvYWRzIGZvcm1cbmRpc3BsYXkudG9kb0Zvcm0oKTtcbmRpc3BsYXkubGlzdEZvcm0oKTtcblxuLy9ncmFicyB0b2RvIGRhdGEgYW5kIGluc2VydHMgaW50byBsaXN0XG5kYXRhQ29uZC5pbnNlcnRUb2RvSW50b0xpc3QoKTtcbmRhdGFDb25kLmNyZWF0ZU5ld0xpc3QoKTtcbmRpc3BsYXkuZm9ybVJlc2V0KCk7XG5cbmRpc3BsYXkuZGlzcGxheUxpc3RzKCk7XG5kaXNwbGF5LmRpc3BsYXlTZWxlY3RlZExpc3QoKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9