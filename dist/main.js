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

	loadBody() {}
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
                    input.setAttribute("value",element)

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
				
				for (let i = 0; i < _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.length; i++) {
					console.log('list title');
					console.log(_listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].title);
					console.log('Hey!')
					//grabs created Lists and inputs them into the list selection options drop down.
					const element = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].title;
					const option = document.createElement('option');
					option.setAttribute('value','test');
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
			const todoObj = new _createToDo__WEBPACK_IMPORTED_MODULE_0__.Todo(title,description,dueDate,priority);

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
/* harmony import */ var _createToDo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createToDo.js */ "./src/createToDo.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _todoDataConductor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoDataConductor */ "./src/todoDataConductor.js");
/* harmony import */ var _listArrayTracker_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listArrayTracker.js */ "./src/listArrayTracker.js");




//Holds created arrays



let display = new _display__WEBPACK_IMPORTED_MODULE_2__.Display();
let dataCond = new _todoDataConductor__WEBPACK_IMPORTED_MODULE_3__.Conductor();
let capture = new _createList__WEBPACK_IMPORTED_MODULE_0__.List('capture');
let nextActions = new _createList__WEBPACK_IMPORTED_MODULE_0__.List('next actions');
let waitingOn = new _createList__WEBPACK_IMPORTED_MODULE_0__.List('hector');
_listArrayTracker_js__WEBPACK_IMPORTED_MODULE_4__.listArray.push(capture);
_listArrayTracker_js__WEBPACK_IMPORTED_MODULE_4__.listArray.push(nextActions);
_listArrayTracker_js__WEBPACK_IMPORTED_MODULE_4__.listArray.push(waitingOn);
console.log(_listArrayTracker_js__WEBPACK_IMPORTED_MODULE_4__.listArray);
//Loads form
display.todoForm();
//Grabs data from form

//Grabs form data and inserts it into the selected List
let formBtn = document.getElementById('todo-form-btn');
dataCond.grabFormData();
formBtn.addEventListener('click',function(){
    display.formReset();
    //Inserts data to default list when submitted.
    dataCond.pushToList(capture);
//i want to be bale to insert a variable above depending on the selected list so it goes to its correct list.
    console.log(capture);

})



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVjhDO0FBQ0Q7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxzQkFBc0I7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixJQUFJLCtEQUFnQixFQUFFO0FBQzFDO0FBQ0EsaUJBQWlCLHdEQUFTO0FBQzFCO0FBQ0E7QUFDQSxxQkFBcUIsd0RBQVM7QUFDOUI7QUFDQTtBQUNBLDZCQUE2Qix3REFBUyxvQ0FBb0Msd0RBQVM7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNtQjs7Ozs7Ozs7Ozs7Ozs7O0FDckhuQjtBQUNPOzs7Ozs7Ozs7Ozs7Ozs7QUNEMkI7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0JBQWdCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsNkNBQUk7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ3FCOzs7Ozs7O1VDbkRyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05pQztBQUNHO0FBQ0g7QUFDYTtBQUM5QztBQUNnRDs7O0FBR2hELGtCQUFrQiw2Q0FBTztBQUN6QixtQkFBbUIseURBQVM7QUFDNUIsa0JBQWtCLDZDQUFJO0FBQ3RCLHNCQUFzQiw2Q0FBSTtBQUMxQixvQkFBb0IsNkNBQUk7QUFDeEIsZ0VBQWM7QUFDZCxnRUFBYztBQUNkLGdFQUFjO0FBQ2QsWUFBWSwyREFBUztBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NyZWF0ZUxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jcmVhdGVUb0RvLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xpc3RBcnJheVRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b2RvRGF0YUNvbmR1Y3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBMaXN0IHtcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIH1cbiAgICAvL2FkZHMgZ2l2ZW4gb2JqIHRvIGxpc3QgYXJyYXlcbiAgICBhZGQodG9kbyl7XG4gICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcbiAgICB9XG5cbiAgICBhZGRMaXN0KCl7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IHtMaXN0fTsiLCJcbmNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG5cbiBcbn1cblxuZXhwb3J0IHsgVG9kbyB9OyIsImltcG9ydCB7Q29uZHVjdG9yfSBmcm9tIFwiLi90b2RvRGF0YUNvbmR1Y3RvclwiO1xuaW1wb3J0IHtsaXN0QXJyYXl9IGZyb20gXCIuL2xpc3RBcnJheVRyYWNrZXJcIjtcbmNsYXNzIERpc3BsYXkge1xuXHRjb25zdHJ1Y3RvcigpIHt9XG5cblx0bG9hZEJvZHkoKSB7fVxuXHQvL2NyZWF0ZXMgYSB0aGUgZm9ybSBuZWVkZWQgZnJvbSB0b2RvXG5cdHRvZG9Gb3JtKCkge1xuXHRcdGxldCBpbnB1dEFycmF5ID0gW1widGl0bGVcIiwgXCJkZXNjcmlwdGlvblwiLCBcImR1ZURhdGVcIiwgXCJwcmlvcml0eVwiLCBcImxpc3RcIl07XG5cblx0XHRjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cdFx0Zm9ybS5zZXRBdHRyaWJ1dGUoXCJvbnN1Ym1pdFwiLCBcInJldHVybiBmYWxzZVwiKTtcblx0XHRmb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1mb3JtXCIpO1xuXHRcdGNvbnN0IHRvZG9WaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib3hfX2NvbnRhaW5lclwiKTtcblx0XHR0b2RvVmlldy5hcHBlbmRDaGlsZChmb3JtKTtcblx0XHQvL2VhY2ggZWxlbWVudCBkaXNwbGF5cyBkaWZmZXJlbnQgaW5wdXRzIGJhc2VkIG9uIHRoZWlyIG5lZWRlZCBkYXRhLlxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRBcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgZWxlbWVudCA9IGlucHV0QXJyYXlbaV07XG5cdFx0XHRpZiAoZWxlbWVudCA9PSBcInRpdGxlXCIpIHtcblx0XHRcdFx0bGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0aXRsZVwiKTtcblx0XHRcdFx0bGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlOlwiO1xuXHRcdFx0XHRsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpdGxlXCIpO1xuXHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGl0bGVcIik7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuXHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblx0XHRcdH1cblx0XHRcdGlmIChlbGVtZW50ID09IFwiZGVzY3JpcHRpb25cIikge1xuXHRcdFx0XHRsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NyaXB0aW9uXCIpO1xuXHRcdFx0XHRsYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCI7XG5cdFx0XHRcdGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVzY3JpcHRpb25cIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiKTtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGVsZW1lbnQgPT0gXCJkdWVEYXRlXCIpIHtcblx0XHRcdFx0bGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkdWUtZGF0ZVwiKTtcblx0XHRcdFx0bGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOlwiO1xuXHRcdFx0XHRsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRldGltZS1sb2NhbFwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWUtZGF0ZVwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImR1ZS1kYXRlXCIpO1xuXHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cdFx0XHR9XG5cdFx0XHQvL2NoYW5nZSB0aGlzIHRvIHJhZGlvIHdpdGggMyBwcmlvcml0eSBvcHRpb25zIGxvdyBtZWQgaGlnaFxuXHRcdFx0aWYgKGVsZW1lbnQgPT0gXCJwcmlvcml0eVwiKSB7XG5cdFx0XHRcdGxldCBhcnJheSA9IFtcImxvd1wiLCBcIm1lZFwiLCBcImhpZ2hcIl07XG5cdFx0XHRcdFxuICAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJpb3JpdHlcIik7XG5cdFx0XHRcdGxhYmVsLnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogXCI7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdFx0XHRjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG5cdFx0XHRcdFx0bGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRcdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBlbGVtZW50KVxuXHRcdFx0XHRcdGxhYmVsLnRleHRDb250ZW50ID0gZWxlbWVudDtcblxuXHRcdFx0XHRcdGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG5cdFx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgZWxlbWVudCk7XG5cdFx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLGVsZW1lbnQpXG5cblx0XHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblx0XHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGVsZW1lbnQgPT0gXCJsaXN0XCIpIHtcblx0XHRcdFx0bGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJMaXN0XCIpO1xuXHRcdFx0XHRsYWJlbC50ZXh0Q29udGVudCA9IFwiTGlzdDpcIjtcblx0XHRcdFx0bGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5cdFx0XHRcdHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxpc3RcIik7XG5cdFx0XHRcdHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibGlzdFwiKTtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0KTtcblx0XHRcdFx0XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2xpc3QgdGl0bGUnKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhsaXN0QXJyYXlbaV0udGl0bGUpO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdIZXkhJylcblx0XHRcdFx0XHQvL2dyYWJzIGNyZWF0ZWQgTGlzdHMgYW5kIGlucHV0cyB0aGVtIGludG8gdGhlIGxpc3Qgc2VsZWN0aW9uIG9wdGlvbnMgZHJvcCBkb3duLlxuXHRcdFx0XHRcdGNvbnN0IGVsZW1lbnQgPSBsaXN0QXJyYXlbaV0udGl0bGU7XG5cdFx0XHRcdFx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdFx0XHRcdFx0b3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCd0ZXN0Jyk7XG5cdFx0XHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRMaXN0ID0gbGlzdEFycmF5W2ldLnRpdGxlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbGlzdEFycmF5W2ldLnRpdGxlLnNsaWNlKDEpO1xuXHRcdFx0XHRcdG9wdGlvbi50ZXh0Q29udGVudCA9IGNhcGl0YWxpemVkTGlzdDtcblx0XHRcdFx0XHRzZWxlY3QuYXBwZW5kKG9wdGlvbik7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdFx0c3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG5cdFx0c3VibWl0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiU3VibWl0XCIpO1xuICAgICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZm9ybS1idG4nKVxuXHRcdGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblx0fVxuXG5cdGZvcm1SZXNldCgpIHtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZm9ybVwiKS5yZXNldCgpO1xuXHR9XG5cblx0ZGlzcGxheVRvZG8oKXtcblxuXHR9XG59XG5leHBvcnQgeyBEaXNwbGF5IH07XG4iLCIvL0hlbHBzIHRyYWNrIHRoZSBjcmVhdGVkIGxpc3RzLlxuZXhwb3J0IGNvbnN0IGxpc3RBcnJheSA9IFtdOyIsImltcG9ydCB7VG9kb30gZnJvbSBcIi4vY3JlYXRlVG9Eb1wiO1xuXG5jbGFzcyBDb25kdWN0b3Ige1xuXHRcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy50b2RvRGF0YSA9IFtdOy8vSSB3YW50IHRvIGFjY2VzcyB0aGlzIGFycmF5IGluIG1ldGhvZC5cblx0XHR0aGlzLmxpc3Q7XG5cdH1cblxuXHRncmFiRm9ybURhdGEoKSB7XG5cdFx0Y29uc3QgdG9kb0Zvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZm9ybS1idG5cIik7XG5cbiAgICAgICAgbGV0IGFycmF5RGF0YSA9IHRoaXM7XG5cblx0XHR0b2RvRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlO1xuXHRcdFx0Y29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuXHRcdFx0Y29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLWRhdGVcIikudmFsdWU7XG5cdFx0XHRsZXQgcHJpb3JpdHk7XHRcdFx0XHRcblx0XHRcdHZhciBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgncHJpb3JpdHknKTtcblx0XHRcdFx0ICBcblx0XHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IGVsZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmKGVsZVtpXS5jaGVja2VkKXtcblx0XHRcdFx0XHRwcmlvcml0eSA9IGVsZVtpXS52YWx1ZTtcdFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0XCIpLnZhbHVlO1xuXG5cdFx0XHQvL2NyZWF0ZSB0b2RvT2JqXG5cdFx0XHRjb25zdCB0b2RvT2JqID0gbmV3IFRvZG8odGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSk7XG5cblx0XHRcdC8vUHVzaGVzIHRvZG8gdG8gYXJyYXlcblx0XHRcdGFycmF5RGF0YS50b2RvRGF0YS5wdXNoKHRvZG9PYmopO1xuXHRcdFx0YXJyYXlEYXRhLmxpc3QgPSBsaXN0O1xuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuQXJyYXkoKSB7XG5cdFx0Y29uc29sZS5sb2codGhpcy50b2RvRGF0YSk7XG5cdH1cblxuXHRwdXNoVG9MaXN0KGxpc3QpIHtcblx0XHRsZXQgdG9kb0RhdGFMZW4gPSB0aGlzLnRvZG9EYXRhLmxlbmd0aFxuXHRcdGxpc3QuYWRkKHRoaXMudG9kb0RhdGFbdG9kb0RhdGFMZW4tMV0pO1xuXHR9XG5cblx0cmV0dXJuTGlzdCgpIHtcblx0XHRyZXR1cm4gdGhpcy5saXN0O1xuXHR9IFxuXG59XG5leHBvcnQgeyBDb25kdWN0b3IgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtMaXN0fSBmcm9tIFwiLi9jcmVhdGVMaXN0XCJcbmltcG9ydCB7VG9kb30gZnJvbSBcIi4vY3JlYXRlVG9Eby5qc1wiXG5pbXBvcnQge0Rpc3BsYXl9IGZyb20gXCIuL2Rpc3BsYXlcIlxuaW1wb3J0IHtDb25kdWN0b3J9IGZyb20gJy4vdG9kb0RhdGFDb25kdWN0b3InO1xuLy9Ib2xkcyBjcmVhdGVkIGFycmF5c1xuaW1wb3J0IHtsaXN0QXJyYXl9IGZyb20gXCIuL2xpc3RBcnJheVRyYWNrZXIuanNcIjtcblxuXG5sZXQgZGlzcGxheSA9IG5ldyBEaXNwbGF5KCk7XG5sZXQgZGF0YUNvbmQgPSBuZXcgQ29uZHVjdG9yKCk7XG5sZXQgY2FwdHVyZSA9IG5ldyBMaXN0KCdjYXB0dXJlJyk7XG5sZXQgbmV4dEFjdGlvbnMgPSBuZXcgTGlzdCgnbmV4dCBhY3Rpb25zJyk7XG5sZXQgd2FpdGluZ09uID0gbmV3IExpc3QoJ2hlY3RvcicpO1xubGlzdEFycmF5LnB1c2goY2FwdHVyZSk7XG5saXN0QXJyYXkucHVzaChuZXh0QWN0aW9ucyk7XG5saXN0QXJyYXkucHVzaCh3YWl0aW5nT24pO1xuY29uc29sZS5sb2cobGlzdEFycmF5KTtcbi8vTG9hZHMgZm9ybVxuZGlzcGxheS50b2RvRm9ybSgpO1xuLy9HcmFicyBkYXRhIGZyb20gZm9ybVxuXG4vL0dyYWJzIGZvcm0gZGF0YSBhbmQgaW5zZXJ0cyBpdCBpbnRvIHRoZSBzZWxlY3RlZCBMaXN0XG5sZXQgZm9ybUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWZvcm0tYnRuJyk7XG5kYXRhQ29uZC5ncmFiRm9ybURhdGEoKTtcbmZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgZGlzcGxheS5mb3JtUmVzZXQoKTtcbiAgICAvL0luc2VydHMgZGF0YSB0byBkZWZhdWx0IGxpc3Qgd2hlbiBzdWJtaXR0ZWQuXG4gICAgZGF0YUNvbmQucHVzaFRvTGlzdChjYXB0dXJlKTtcbi8vaSB3YW50IHRvIGJlIGJhbGUgdG8gaW5zZXJ0IGEgdmFyaWFibGUgYWJvdmUgZGVwZW5kaW5nIG9uIHRoZSBzZWxlY3RlZCBsaXN0IHNvIGl0IGdvZXMgdG8gaXRzIGNvcnJlY3QgbGlzdC5cbiAgICBjb25zb2xlLmxvZyhjYXB0dXJlKTtcblxufSlcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=