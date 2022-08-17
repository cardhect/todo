/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createList.js":
/*!***************************!*\
  !*** ./src/createList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (163:4)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n| \t\t})\n| \t\t\n> \t}ll,,,,,,,,,,,,c4ifnfy6\n| \n| \tdisplaySelectedList() {");

/***/ }),

/***/ "./src/listArrayTracker.js":
/*!*********************************!*\
  !*** ./src/listArrayTracker.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
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
let nextActions = new _createList__WEBPACK_IMPORTED_MODULE_0__.List('Next Actions');
_listArrayTracker_js__WEBPACK_IMPORTED_MODULE_3__.listArray.push(nextActions);
let tickler = new _createList__WEBPACK_IMPORTED_MODULE_0__.List('Tickler');
_listArrayTracker_js__WEBPACK_IMPORTED_MODULE_3__.listArray.push(tickler);




//TODO^^^^^^^^^^^^^^^^^^^^
//Loads form
display.todoForm();
display.listForm();

//grabs todo data and inserts into list
dataCond.insertTodoIntoList();
dataCond.createNewList();
display.formReset();

display.displayLists();
// display.displayTodoAmount();
display.displaySelectedList();

// console.log(listArray[0].title);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRDZCO0FBQ1c7QUFDWDtBQUNBO0FBQ3BDO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsZ0JBQWdCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsNkNBQUk7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQiw2Q0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLFFBQVEsK0RBQWdCLEVBQUU7QUFDakQsaUJBQWlCLHdEQUFTO0FBQzFCO0FBQ0EsMEJBQTBCLHdEQUFTO0FBQ25DLGlCQUFpQix3REFBUztBQUMxQixNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSx3REFBUztBQUN4QixHQUFHO0FBQ0g7O0FBRUE7QUFDQSxvQkFBb0IsNkNBQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw2Q0FBSTtBQUMzQixHQUFHLDZEQUFjO0FBQ2pCO0FBQ0EsZUFBZSx3REFBUzs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ3FCOzs7Ozs7O1VDdEdyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05pQztBQUNBO0FBQ2E7QUFDOUM7QUFDZ0Q7OztBQUdoRDtBQUNBLGtCQUFrQiw2Q0FBTztBQUN6QjtBQUNBLG1CQUFtQix5REFBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkNBQUk7QUFDdEIsZ0VBQWM7QUFDZCxzQkFBc0IsNkNBQUk7QUFDMUIsZ0VBQWM7QUFDZCxrQkFBa0IsNkNBQUk7QUFDdEIsZ0VBQWM7Ozs7O0FBS2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jcmVhdGVMaXN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY3JlYXRlVG9Eby5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xpc3RBcnJheVRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b2RvRGF0YUNvbmR1Y3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBMaXN0IHtcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIH1cbiAgICAvL2FkZHMgZ2l2ZW4gb2JqIHRvIGxpc3QgYXJyYXlcbiAgICBhZGQodG9kbyl7XG4gICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcbiAgICB9XG5cblxufVxuXG5leHBvcnQge0xpc3R9OyIsIlxuY2xhc3MgVG9kbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cblxuIFxufVxuXG5leHBvcnQgeyBUb2RvIH07IiwiLy9IZWxwcyB0cmFjayB0aGUgY3JlYXRlZCBsaXN0cy5cbmV4cG9ydCBjb25zdCBsaXN0QXJyYXkgPSBbXTsiLCJpbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vY3JlYXRlVG9Eb1wiO1xuaW1wb3J0IHsgbGlzdEFycmF5IH0gZnJvbSBcIi4vbGlzdEFycmF5VHJhY2tlclwiO1xuaW1wb3J0IHsgRGlzcGxheSB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCB7IExpc3QgfSBmcm9tIFwiLi9jcmVhdGVMaXN0XCI7XG5jbGFzcyBDb25kdWN0b3Ige1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnRvZG9EYXRhID0gW107IC8vSSB3YW50IHRvIGFjY2VzcyB0aGlzIGFycmF5IGluIG1ldGhvZC5cblx0XHR0aGlzLmxpc3Q7XG5cdH1cblxuXHRncmFiRm9ybURhdGEoKSB7XG5cdFx0Y29uc3QgdG9kb0Zvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZm9ybS1idG5cIik7XG5cblx0XHRsZXQgYXJyYXlEYXRhID0gdGhpcztcblxuXHRcdHRvZG9Gb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWU7XG5cdFx0XHRjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XG5cdFx0XHRjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtZGF0ZVwiKS52YWx1ZTtcblx0XHRcdGxldCBwcmlvcml0eTtcblx0XHRcdHZhciBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcInByaW9yaXR5XCIpO1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGVsZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoZWxlW2ldLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRwcmlvcml0eSA9IGVsZVtpXS52YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdFwiKS52YWx1ZTtcblxuXHRcdFx0Ly9jcmVhdGUgdG9kb09ialxuXHRcdFx0Y29uc3QgdG9kb09iaiA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuXG5cdFx0XHQvL1B1c2hlcyB0b2RvIHRvIGFycmF5XG5cdFx0XHRhcnJheURhdGEudG9kb0RhdGEucHVzaCh0b2RvT2JqKTtcblx0XHRcdGFycmF5RGF0YS5saXN0ID0gbGlzdDtcblx0XHR9KTtcblx0fVxuXG5cdHB1c2hUb0xpc3QobGlzdCkge1xuXHRcdGxldCB0b2RvRGF0YUxlbiA9IHRoaXMudG9kb0RhdGEubGVuZ3RoO1xuXHRcdGxpc3QuYWRkKHRoaXMudG9kb0RhdGFbdG9kb0RhdGFMZW4gLSAxXSk7XG5cdH1cblxuXHRyZXR1cm5MaXN0KCkge1xuXHRcdHJldHVybiB0aGlzLmxpc3Q7XG5cdH1cblxuXHRpbnNlcnRUb2RvSW50b0xpc3QoKSB7XG5cdFx0bGV0IGNvbmR1Y3RvciA9IHRoaXM7XG5cdFx0bGV0IGRpc3BsYXkgPSBuZXcgRGlzcGxheSgpO1xuXHRcdC8vR3JhYnMgZGF0YSBmcm9tXG5cdFx0Ly9HcmFicyBmb3JtIGRhdGEgYW5kIGluc2VydHMgaXQgaW50byB0aGUgc2VsZWN0ZWQgTGlzdFxuXHRcdGxldCBmb3JtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWZvcm0tYnRuXCIpO1xuXHRcdFxuXHRcdGNvbmR1Y3Rvci5ncmFiRm9ybURhdGEoKTtcblx0XHRcblx0XHRmb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHQvL1RPRE86IENyZWF0ZSBjb2RlIHRoYXQgZ3JhYnMgc2VsZWN0ZWQgbGlzdCBhbmQgaW5zZXJ0cyBpbnRvIHRoYXQgbGlzdC5cblx0XHRcdGxldCBsaXN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdFwiKTtcblx0XHRcdGxldCBjb2xsZWN0aW9uID0gbGlzdHMuc2VsZWN0ZWRPcHRpb25zO1xuXG5cdFx0XHRsZXQgc2VsZWN0ZWRMaXN0ID0gY29sbGVjdGlvblswXS5sYWJlbDtcblx0XHRcdGNvbnNvbGUubG9nKHNlbGVjdGVkTGlzdCk7XG5cblx0XHRcdC8vSW5zZXJ0cyBkYXRhIHRvIHNlbGVjdGVkIGxpc3Qgd2hlbiBzdWJtaXR0ZWQuXG5cdFx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGlzdEFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdFx0XHRjb25zdCBsaXN0ID0gbGlzdEFycmF5W2luZGV4XTtcblx0XHRcdFx0aWYgKGxpc3QudGl0bGUgPT0gc2VsZWN0ZWRMaXN0KSB7XG5cdFx0XHRcdFx0Y29uZHVjdG9yLnB1c2hUb0xpc3QobGlzdEFycmF5W2luZGV4XSk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cobGlzdEFycmF5KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkNvZGUgZXhpdCAxXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGRpc3BsYXkuZm9ybVJlc2V0KCk7XG5cdFx0XHRjb25zb2xlLmxvZyhsaXN0QXJyYXkpO1xuXHRcdH0pO1xuXHR9XG5cblx0Y3JlYXRlTmV3TGlzdCgpIHtcblx0XHRsZXQgZGlzcGxheSA9IG5ldyBEaXNwbGF5KCk7XG5cdFx0bGV0IGxpc3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3QtZm9ybS1idG5cIik7XG5cdFx0XG5cdFx0bGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9Pntcblx0XHRcdGxldCBsaXN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWxpc3QnKS52YWx1ZTtcblx0XHRcdGNvbnN0IGNhcGl0YWxpemVkTGlzdCA9IGxpc3RJbnB1dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGxpc3RJbnB1dC5zbGljZSgxKTtcblx0XHRcdGNvbnN0IG5ld0xpc3QgPSBuZXcgTGlzdChjYXBpdGFsaXplZExpc3QpO1xuXHRcdFx0bGlzdEFycmF5LnB1c2gobmV3TGlzdCk7XG5cdFx0XHRkaXNwbGF5LmZvcm1SZXNldCgpO1xuXHRcdFx0Y29uc29sZS5sb2cobGlzdEFycmF5KTtcblxuXHRcdFx0Y29uc3QgbGlzdE9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdCcpO1xuXHRcdFx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdFx0XHRvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsbGlzdElucHV0KTtcblx0XHRcdG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnbGlzdC12YWx1ZScpXG5cdFx0XHRvcHRpb24udGV4dENvbnRlbnQgPSBjYXBpdGFsaXplZExpc3Q7XG5cdFx0XHRsaXN0T3B0aW9ucy5hcHBlbmQob3B0aW9uKTtcblx0XHR9KVxuXG5cdH1cbn1cbmV4cG9ydCB7IENvbmR1Y3RvciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge0xpc3R9IGZyb20gXCIuL2NyZWF0ZUxpc3RcIlxuaW1wb3J0IHtEaXNwbGF5fSBmcm9tIFwiLi9kaXNwbGF5XCJcbmltcG9ydCB7Q29uZHVjdG9yfSBmcm9tICcuL3RvZG9EYXRhQ29uZHVjdG9yJztcbi8vSG9sZHMgY3JlYXRlZCBhcnJheXNcbmltcG9ydCB7bGlzdEFycmF5fSBmcm9tIFwiLi9saXN0QXJyYXlUcmFja2VyLmpzXCI7XG5cblxuLy9Eb20gY29udHJvbGxlclxubGV0IGRpc3BsYXkgPSBuZXcgRGlzcGxheSgpO1xuLy9EYXRhIE1hbmlwdWxhdG9yXG5sZXQgZGF0YUNvbmQgPSBuZXcgQ29uZHVjdG9yKCk7XG4vL0xpc3RzIFxuLy9UT0RPIG1ha2UgdGhpcyBhdXRvbWF0aWMuLi4uLlxuLy9ERUZBVUxUIENSRUFURUQgTElTVFxubGV0IGNhcHR1cmUgPSBuZXcgTGlzdCgnQ2FwdHVyZScpO1xubGlzdEFycmF5LnB1c2goY2FwdHVyZSk7XG5sZXQgbmV4dEFjdGlvbnMgPSBuZXcgTGlzdCgnTmV4dCBBY3Rpb25zJyk7XG5saXN0QXJyYXkucHVzaChuZXh0QWN0aW9ucyk7XG5sZXQgdGlja2xlciA9IG5ldyBMaXN0KCdUaWNrbGVyJyk7XG5saXN0QXJyYXkucHVzaCh0aWNrbGVyKTtcblxuXG5cblxuLy9UT0RPXl5eXl5eXl5eXl5eXl5eXl5eXl5cbi8vTG9hZHMgZm9ybVxuZGlzcGxheS50b2RvRm9ybSgpO1xuZGlzcGxheS5saXN0Rm9ybSgpO1xuXG4vL2dyYWJzIHRvZG8gZGF0YSBhbmQgaW5zZXJ0cyBpbnRvIGxpc3RcbmRhdGFDb25kLmluc2VydFRvZG9JbnRvTGlzdCgpO1xuZGF0YUNvbmQuY3JlYXRlTmV3TGlzdCgpO1xuZGlzcGxheS5mb3JtUmVzZXQoKTtcblxuZGlzcGxheS5kaXNwbGF5TGlzdHMoKTtcbi8vIGRpc3BsYXkuZGlzcGxheVRvZG9BbW91bnQoKTtcbmRpc3BsYXkuZGlzcGxheVNlbGVjdGVkTGlzdCgpO1xuXG4vLyBjb25zb2xlLmxvZyhsaXN0QXJyYXlbMF0udGl0bGUpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9