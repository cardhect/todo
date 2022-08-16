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

    addList(){

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
	}

	listForm() {
		const form = document.createElement("form");
		form.setAttribute("onsubmit", "return false");
		form.setAttribute("id", "list-form");
		const listView = document.querySelector(".list__container");
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

	displayTodo(){

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
		let listBtn = document.getElementById("list-form-btn");
		
		listBtn.addEventListener('click',()=>{
			let listInput = document.getElementById('new-list').value;
			const newList = new _createList__WEBPACK_IMPORTED_MODULE_3__.List(listInput);
			_listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.push(newList);
			console.log(_listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray);
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
let nextActions = new _createList__WEBPACK_IMPORTED_MODULE_0__.List('Next actions');
_listArrayTracker_js__WEBPACK_IMPORTED_MODULE_3__.listArray.push(nextActions);
let waitingOn = new _createList__WEBPACK_IMPORTED_MODULE_0__.List('Hector');
_listArrayTracker_js__WEBPACK_IMPORTED_MODULE_3__.listArray.push(waitingOn);



//TODO^^^^^^^^^^^^^^^^^^^^
//Loads form
display.todoForm();
display.listForm();

//grabs todo data and inserts into list
dataCond.insertTodoIntoList();
dataCond.createNewList();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05pQztBQUNBO0FBQ2E7QUFDOUM7QUFDZ0Q7OztBQUdoRDtBQUNBLGtCQUFrQiw2Q0FBTztBQUN6QjtBQUNBLG1CQUFtQix5REFBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkNBQUk7QUFDdEIsZ0VBQWM7QUFDZCxzQkFBc0IsNkNBQUk7QUFDMUIsZ0VBQWM7QUFDZCxvQkFBb0IsNkNBQUk7QUFDeEIsZ0VBQWM7Ozs7QUFJZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NyZWF0ZUxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jcmVhdGVUb0RvLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xpc3RBcnJheVRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b2RvRGF0YUNvbmR1Y3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBMaXN0IHtcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIH1cbiAgICAvL2FkZHMgZ2l2ZW4gb2JqIHRvIGxpc3QgYXJyYXlcbiAgICBhZGQodG9kbyl7XG4gICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcbiAgICB9XG5cbiAgICBhZGRMaXN0KCl7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IHtMaXN0fTsiLCJcbmNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG5cbiBcbn1cblxuZXhwb3J0IHsgVG9kbyB9OyIsImltcG9ydCB7Q29uZHVjdG9yfSBmcm9tIFwiLi90b2RvRGF0YUNvbmR1Y3RvclwiO1xuaW1wb3J0IHtsaXN0QXJyYXl9IGZyb20gXCIuL2xpc3RBcnJheVRyYWNrZXJcIjtcbmNsYXNzIERpc3BsYXkge1xuXHRjb25zdHJ1Y3RvcigpIHt9XG5cblxuXHQvL2NyZWF0ZXMgYSB0aGUgZm9ybSBuZWVkZWQgZnJvbSB0b2RvXG5cdHRvZG9Gb3JtKCkge1xuXHRcdGxldCBpbnB1dEFycmF5ID0gW1widGl0bGVcIiwgXCJkZXNjcmlwdGlvblwiLCBcImR1ZURhdGVcIiwgXCJwcmlvcml0eVwiLCBcImxpc3RcIl07XG5cblx0XHRjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cdFx0Zm9ybS5zZXRBdHRyaWJ1dGUoXCJvbnN1Ym1pdFwiLCBcInJldHVybiBmYWxzZVwiKTtcblx0XHRmb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1mb3JtXCIpO1xuXHRcdGNvbnN0IHRvZG9WaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib3hfX2NvbnRhaW5lclwiKTtcblx0XHR0b2RvVmlldy5hcHBlbmRDaGlsZChmb3JtKTtcblx0XHQvL2VhY2ggZWxlbWVudCBkaXNwbGF5cyBkaWZmZXJlbnQgaW5wdXRzIGJhc2VkIG9uIHRoZWlyIG5lZWRlZCBkYXRhLlxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRBcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgZWxlbWVudCA9IGlucHV0QXJyYXlbaV07XG5cdFx0XHRpZiAoZWxlbWVudCA9PSBcInRpdGxlXCIpIHtcblx0XHRcdFx0bGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0aXRsZVwiKTtcblx0XHRcdFx0bGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlOlwiO1xuXHRcdFx0XHRsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpdGxlXCIpO1xuXHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGl0bGVcIik7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuXHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblx0XHRcdH1cblx0XHRcdGlmIChlbGVtZW50ID09IFwiZGVzY3JpcHRpb25cIikge1xuXHRcdFx0XHRsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NyaXB0aW9uXCIpO1xuXHRcdFx0XHRsYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCI7XG5cdFx0XHRcdGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVzY3JpcHRpb25cIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiKTtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGVsZW1lbnQgPT0gXCJkdWVEYXRlXCIpIHtcblx0XHRcdFx0bGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkdWUtZGF0ZVwiKTtcblx0XHRcdFx0bGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOlwiO1xuXHRcdFx0XHRsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRldGltZS1sb2NhbFwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWUtZGF0ZVwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImR1ZS1kYXRlXCIpO1xuXHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cdFx0XHR9XG5cdFx0XHQvL2NoYW5nZSB0aGlzIHRvIHJhZGlvIHdpdGggMyBwcmlvcml0eSBvcHRpb25zIGxvdyBtZWQgaGlnaFxuXHRcdFx0aWYgKGVsZW1lbnQgPT0gXCJwcmlvcml0eVwiKSB7XG5cdFx0XHRcdGxldCBhcnJheSA9IFtcImxvd1wiLCBcIm1lZFwiLCBcImhpZ2hcIl07XG5cdFx0XHRcdFxuICAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJpb3JpdHlcIik7XG5cdFx0XHRcdGxhYmVsLnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogXCI7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdFx0XHRjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG5cdFx0XHRcdFx0bGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRcdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBlbGVtZW50KVxuXHRcdFx0XHRcdGxhYmVsLnRleHRDb250ZW50ID0gZWxlbWVudDtcblxuXHRcdFx0XHRcdGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG5cdFx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgZWxlbWVudCk7XG5cdFx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLGVsZW1lbnQpO1xuXG5cdFx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cdFx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChlbGVtZW50ID09IFwibGlzdFwiKSB7XG5cdFx0XHRcdGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiTGlzdFwiKTtcblx0XHRcdFx0bGFiZWwudGV4dENvbnRlbnQgPSBcIkxpc3Q6XCI7XG5cdFx0XHRcdGxldCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuXHRcdFx0XHRzZWxlY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaXN0XCIpO1xuXHRcdFx0XHRzZWxlY3Quc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImxpc3RcIik7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuXHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKHNlbGVjdCk7XG5cdFx0XHQvL1RPRE8gZmluZCBvdXQgaG93IHRvIHVwZGF0ZSB0aGVzZSBvcHRpb25zIHdoZW4gYSBuZXcgbGlzdCBnZXRzIGNyZWF0ZWQuXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Ly9ncmFicyBjcmVhdGVkIExpc3RzIGFuZCBpbnB1dHMgdGhlbSBpbnRvIHRoZSBsaXN0IHNlbGVjdGlvbiBvcHRpb25zIGRyb3AgZG93bi5cblx0XHRcdFx0XHRjb25zdCBlbGVtZW50ID0gbGlzdEFycmF5W2ldLnRpdGxlO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdkaXNwbGF5LnRvZG9Gb3JtJyk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cobGlzdEFycmF5KTtcblx0XHRcdFx0XHRjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0XHRcdFx0XHRvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsbGlzdEFycmF5W2ldLnRpdGxlKTtcblx0XHRcdFx0XHRvcHRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsJ2xpc3QtdmFsdWUnKVxuXHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkTGlzdCA9IGxpc3RBcnJheVtpXS50aXRsZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGxpc3RBcnJheVtpXS50aXRsZS5zbGljZSgxKTtcblx0XHRcdFx0XHRvcHRpb24udGV4dENvbnRlbnQgPSBjYXBpdGFsaXplZExpc3Q7XG5cdFx0XHRcdFx0c2VsZWN0LmFwcGVuZChvcHRpb24pO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuXHRcdHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlN1Ym1pdFwiKTtcbiAgICAgICAgc3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWZvcm0tYnRuJylcblx0XHRmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cdH1cblxuXHRsaXN0Rm9ybSgpIHtcblx0XHRjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cdFx0Zm9ybS5zZXRBdHRyaWJ1dGUoXCJvbnN1Ym1pdFwiLCBcInJldHVybiBmYWxzZVwiKTtcblx0XHRmb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlzdC1mb3JtXCIpO1xuXHRcdGNvbnN0IGxpc3RWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0X19jb250YWluZXJcIik7XG5cdFx0bGlzdFZpZXcuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cblx0XHRcdGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibmV3LWxpc3RcIik7XG5cdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJuZXctbGlzdFwiKTtcblx0XHRcdFx0bGFiZWwudGV4dENvbnRlbnQgPSBcIkxpc3Q6XCI7XG5cdFx0XHRcdGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3LWxpc3RcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJuZXctbGlzdFwiKTtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG5cblx0XHRjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdFx0c3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG5cdFx0c3VibWl0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiU3VibWl0XCIpO1xuICAgICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsJ2xpc3QtZm9ybS1idG4nKVxuXHRcdGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuXHR9XG5cblx0Zm9ybVJlc2V0KCkge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1mb3JtXCIpLnJlc2V0KCk7XG5cdH1cblxuXHRkaXNwbGF5VG9kbygpe1xuXG5cdH1cbn1cbmV4cG9ydCB7IERpc3BsYXkgfTtcbiIsIi8vSGVscHMgdHJhY2sgdGhlIGNyZWF0ZWQgbGlzdHMuXG5leHBvcnQgY29uc3QgbGlzdEFycmF5ID0gW107IiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL2NyZWF0ZVRvRG9cIjtcbmltcG9ydCB7IGxpc3RBcnJheSB9IGZyb20gXCIuL2xpc3RBcnJheVRyYWNrZXJcIjtcbmltcG9ydCB7IERpc3BsYXkgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSBcIi4vY3JlYXRlTGlzdFwiO1xuY2xhc3MgQ29uZHVjdG9yIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy50b2RvRGF0YSA9IFtdOyAvL0kgd2FudCB0byBhY2Nlc3MgdGhpcyBhcnJheSBpbiBtZXRob2QuXG5cdFx0dGhpcy5saXN0O1xuXHR9XG5cblx0Z3JhYkZvcm1EYXRhKCkge1xuXHRcdGNvbnN0IHRvZG9Gb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWZvcm0tYnRuXCIpO1xuXG5cdFx0bGV0IGFycmF5RGF0YSA9IHRoaXM7XG5cblx0XHR0b2RvRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlO1xuXHRcdFx0Y29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuXHRcdFx0Y29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLWRhdGVcIikudmFsdWU7XG5cdFx0XHRsZXQgcHJpb3JpdHk7XG5cdFx0XHR2YXIgZWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJwcmlvcml0eVwiKTtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlbGUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKGVsZVtpXS5jaGVja2VkKSB7XG5cdFx0XHRcdFx0cHJpb3JpdHkgPSBlbGVbaV0udmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RcIikudmFsdWU7XG5cblx0XHRcdC8vY3JlYXRlIHRvZG9PYmpcblx0XHRcdGNvbnN0IHRvZG9PYmogPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcblxuXHRcdFx0Ly9QdXNoZXMgdG9kbyB0byBhcnJheVxuXHRcdFx0YXJyYXlEYXRhLnRvZG9EYXRhLnB1c2godG9kb09iaik7XG5cdFx0XHRhcnJheURhdGEubGlzdCA9IGxpc3Q7XG5cdFx0fSk7XG5cdH1cblxuXHRwdXNoVG9MaXN0KGxpc3QpIHtcblx0XHRsZXQgdG9kb0RhdGFMZW4gPSB0aGlzLnRvZG9EYXRhLmxlbmd0aDtcblx0XHRsaXN0LmFkZCh0aGlzLnRvZG9EYXRhW3RvZG9EYXRhTGVuIC0gMV0pO1xuXHR9XG5cblx0cmV0dXJuTGlzdCgpIHtcblx0XHRyZXR1cm4gdGhpcy5saXN0O1xuXHR9XG5cblx0aW5zZXJ0VG9kb0ludG9MaXN0KCkge1xuXHRcdGxldCBjb25kdWN0b3IgPSB0aGlzO1xuXHRcdGxldCBkaXNwbGF5ID0gbmV3IERpc3BsYXkoKTtcblx0XHQvL0dyYWJzIGRhdGEgZnJvbVxuXHRcdC8vR3JhYnMgZm9ybSBkYXRhIGFuZCBpbnNlcnRzIGl0IGludG8gdGhlIHNlbGVjdGVkIExpc3Rcblx0XHRsZXQgZm9ybUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1mb3JtLWJ0blwiKTtcblx0XHRcblx0XHRjb25kdWN0b3IuZ3JhYkZvcm1EYXRhKCk7XG5cdFx0XG5cdFx0Zm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly9UT0RPOiBDcmVhdGUgY29kZSB0aGF0IGdyYWJzIHNlbGVjdGVkIGxpc3QgYW5kIGluc2VydHMgaW50byB0aGF0IGxpc3QuXG5cdFx0XHRsZXQgbGlzdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RcIik7XG5cdFx0XHRsZXQgY29sbGVjdGlvbiA9IGxpc3RzLnNlbGVjdGVkT3B0aW9ucztcblxuXHRcdFx0bGV0IHNlbGVjdGVkTGlzdCA9IGNvbGxlY3Rpb25bMF0ubGFiZWw7XG5cdFx0XHRjb25zb2xlLmxvZyhzZWxlY3RlZExpc3QpO1xuXG5cdFx0XHQvL0luc2VydHMgZGF0YSB0byBzZWxlY3RlZCBsaXN0IHdoZW4gc3VibWl0dGVkLlxuXHRcdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpc3RBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdFx0Y29uc3QgbGlzdCA9IGxpc3RBcnJheVtpbmRleF07XG5cdFx0XHRcdGlmIChsaXN0LnRpdGxlID09IHNlbGVjdGVkTGlzdCkge1xuXHRcdFx0XHRcdGNvbmR1Y3Rvci5wdXNoVG9MaXN0KGxpc3RBcnJheVtpbmRleF0pO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGxpc3RBcnJheSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJDb2RlIGV4aXQgMVwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRkaXNwbGF5LmZvcm1SZXNldCgpO1xuXHRcdFx0Y29uc29sZS5sb2cobGlzdEFycmF5KTtcblx0XHR9KTtcblx0fVxuXG5cdGNyZWF0ZU5ld0xpc3QoKSB7XG5cdFx0bGV0IGxpc3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3QtZm9ybS1idG5cIik7XG5cdFx0XG5cdFx0bGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9Pntcblx0XHRcdGxldCBsaXN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWxpc3QnKS52YWx1ZTtcblx0XHRcdGNvbnN0IG5ld0xpc3QgPSBuZXcgTGlzdChsaXN0SW5wdXQpO1xuXHRcdFx0bGlzdEFycmF5LnB1c2gobmV3TGlzdCk7XG5cdFx0XHRjb25zb2xlLmxvZyhsaXN0QXJyYXkpO1xuXHRcdH0pXG5cblx0fVxufVxuZXhwb3J0IHsgQ29uZHVjdG9yIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7TGlzdH0gZnJvbSBcIi4vY3JlYXRlTGlzdFwiXG5pbXBvcnQge0Rpc3BsYXl9IGZyb20gXCIuL2Rpc3BsYXlcIlxuaW1wb3J0IHtDb25kdWN0b3J9IGZyb20gJy4vdG9kb0RhdGFDb25kdWN0b3InO1xuLy9Ib2xkcyBjcmVhdGVkIGFycmF5c1xuaW1wb3J0IHtsaXN0QXJyYXl9IGZyb20gXCIuL2xpc3RBcnJheVRyYWNrZXIuanNcIjtcblxuXG4vL0RvbSBjb250cm9sbGVyXG5sZXQgZGlzcGxheSA9IG5ldyBEaXNwbGF5KCk7XG4vL0RhdGEgTWFuaXB1bGF0b3JcbmxldCBkYXRhQ29uZCA9IG5ldyBDb25kdWN0b3IoKTtcbi8vTGlzdHMgXG4vL1RPRE8gbWFrZSB0aGlzIGF1dG9tYXRpYy4uLi4uXG4vL0RFRkFVTFQgQ1JFQVRFRCBMSVNUXG5sZXQgY2FwdHVyZSA9IG5ldyBMaXN0KCdDYXB0dXJlJyk7XG5saXN0QXJyYXkucHVzaChjYXB0dXJlKTtcbmxldCBuZXh0QWN0aW9ucyA9IG5ldyBMaXN0KCdOZXh0IGFjdGlvbnMnKTtcbmxpc3RBcnJheS5wdXNoKG5leHRBY3Rpb25zKTtcbmxldCB3YWl0aW5nT24gPSBuZXcgTGlzdCgnSGVjdG9yJyk7XG5saXN0QXJyYXkucHVzaCh3YWl0aW5nT24pO1xuXG5cblxuLy9UT0RPXl5eXl5eXl5eXl5eXl5eXl5eXl5cbi8vTG9hZHMgZm9ybVxuZGlzcGxheS50b2RvRm9ybSgpO1xuZGlzcGxheS5saXN0Rm9ybSgpO1xuXG4vL2dyYWJzIHRvZG8gZGF0YSBhbmQgaW5zZXJ0cyBpbnRvIGxpc3RcbmRhdGFDb25kLmluc2VydFRvZG9JbnRvTGlzdCgpO1xuZGF0YUNvbmQuY3JlYXRlTmV3TGlzdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9