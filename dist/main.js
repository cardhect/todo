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
				
				for (let i = 0; i < _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.length; i++) {
					console.log('list title');
					console.log(_listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].title);
					console.log('Hey!')
					//grabs created Lists and inputs them into the list selection options drop down.
					const element = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].title;
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
let capture = new _createList__WEBPACK_IMPORTED_MODULE_0__.List('Capture');
let nextActions = new _createList__WEBPACK_IMPORTED_MODULE_0__.List('Next actions');
let waitingOn = new _createList__WEBPACK_IMPORTED_MODULE_0__.List('Hector');
_listArrayTracker_js__WEBPACK_IMPORTED_MODULE_4__.listArray.push(capture);
_listArrayTracker_js__WEBPACK_IMPORTED_MODULE_4__.listArray.push(nextActions);
_listArrayTracker_js__WEBPACK_IMPORTED_MODULE_4__.listArray.push(waitingOn);
console.log(_listArrayTracker_js__WEBPACK_IMPORTED_MODULE_4__.listArray);
console.log(_listArrayTracker_js__WEBPACK_IMPORTED_MODULE_4__.listArray[0]);
//Loads form
display.todoForm();
//Grabs data from form

//Grabs form data and inserts it into the selected List
let formBtn = document.getElementById('todo-form-btn');
dataCond.grabFormData();
formBtn.addEventListener('click',function(){
    
    //TODO: Create code that grabs selected list and inserts into that list.
    let lists = document.getElementById('list');
    let collection = lists.selectedOptions; 
    
    let selectedList = collection[0].label;
    console.log(selectedList);
    
    
    //Inserts data to selected list when submitted.
    for (let index = 0; index < _listArrayTracker_js__WEBPACK_IMPORTED_MODULE_4__.listArray.length; index++) {
        const list = _listArrayTracker_js__WEBPACK_IMPORTED_MODULE_4__.listArray[index];
        if (list.title == selectedList) {
            dataCond.pushToList(_listArrayTracker_js__WEBPACK_IMPORTED_MODULE_4__.listArray[index]);
        } else {
            console.log("something went wrong Ln44");
        }
        
    }

    
    //i want to be bale to insert a variable above depending on the selected list so it goes to its correct list.
    // console.log(capture);
    display.formReset();
    console.log(_listArrayTracker_js__WEBPACK_IMPORTED_MODULE_4__.listArray);

})



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0NBQWdDLDJEQUFTO0FBQ3pDLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyREFBUzs7QUFFekIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvY3JlYXRlTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NyZWF0ZVRvRG8uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbGlzdEFycmF5VHJhY2tlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG9EYXRhQ29uZHVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIExpc3Qge1xuXG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnRvZG9zID0gW107XG4gICAgfVxuICAgIC8vYWRkcyBnaXZlbiBvYmogdG8gbGlzdCBhcnJheVxuICAgIGFkZCh0b2RvKXtcbiAgICAgICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xuICAgIH1cblxuICAgIGFkZExpc3QoKXtcblxuICAgIH1cblxufVxuXG5leHBvcnQge0xpc3R9OyIsIlxuY2xhc3MgVG9kbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cblxuIFxufVxuXG5leHBvcnQgeyBUb2RvIH07IiwiaW1wb3J0IHtDb25kdWN0b3J9IGZyb20gXCIuL3RvZG9EYXRhQ29uZHVjdG9yXCI7XG5pbXBvcnQge2xpc3RBcnJheX0gZnJvbSBcIi4vbGlzdEFycmF5VHJhY2tlclwiO1xuY2xhc3MgRGlzcGxheSB7XG5cdGNvbnN0cnVjdG9yKCkge31cblxuXHRsb2FkQm9keSgpIHt9XG5cdC8vY3JlYXRlcyBhIHRoZSBmb3JtIG5lZWRlZCBmcm9tIHRvZG9cblx0dG9kb0Zvcm0oKSB7XG5cdFx0bGV0IGlucHV0QXJyYXkgPSBbXCJ0aXRsZVwiLCBcImRlc2NyaXB0aW9uXCIsIFwiZHVlRGF0ZVwiLCBcInByaW9yaXR5XCIsIFwibGlzdFwiXTtcblxuXHRcdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblx0XHRmb3JtLnNldEF0dHJpYnV0ZShcIm9uc3VibWl0XCIsIFwicmV0dXJuIGZhbHNlXCIpO1xuXHRcdGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWZvcm1cIik7XG5cdFx0Y29uc3QgdG9kb1ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJveF9fY29udGFpbmVyXCIpO1xuXHRcdHRvZG9WaWV3LmFwcGVuZENoaWxkKGZvcm0pO1xuXHRcdC8vZWFjaCBlbGVtZW50IGRpc3BsYXlzIGRpZmZlcmVudCBpbnB1dHMgYmFzZWQgb24gdGhlaXIgbmVlZGVkIGRhdGEuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dEFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBlbGVtZW50ID0gaW5wdXRBcnJheVtpXTtcblx0XHRcdGlmIChlbGVtZW50ID09IFwidGl0bGVcIikge1xuXHRcdFx0XHRsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRpdGxlXCIpO1xuXHRcdFx0XHRsYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGU6XCI7XG5cdFx0XHRcdGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGl0bGVcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGVsZW1lbnQgPT0gXCJkZXNjcmlwdGlvblwiKSB7XG5cdFx0XHRcdGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGVzY3JpcHRpb25cIik7XG5cdFx0XHRcdGxhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjpcIjtcblx0XHRcdFx0bGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvblwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRlc2NyaXB0aW9uXCIpO1xuXHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZWxlbWVudCA9PSBcImR1ZURhdGVcIikge1xuXHRcdFx0XHRsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImR1ZS1kYXRlXCIpO1xuXHRcdFx0XHRsYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6XCI7XG5cdFx0XHRcdGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGV0aW1lLWxvY2FsXCIpO1xuXHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImR1ZS1kYXRlXCIpO1xuXHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZHVlLWRhdGVcIik7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuXHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblx0XHRcdH1cblx0XHRcdC8vY2hhbmdlIHRoaXMgdG8gcmFkaW8gd2l0aCAzIHByaW9yaXR5IG9wdGlvbnMgbG93IG1lZCBoaWdoXG5cdFx0XHRpZiAoZWxlbWVudCA9PSBcInByaW9yaXR5XCIpIHtcblx0XHRcdFx0bGV0IGFycmF5ID0gW1wibG93XCIsIFwibWVkXCIsIFwiaGlnaFwiXTtcblx0XHRcdFx0XG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eVwiKTtcblx0XHRcdFx0bGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIjtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdFx0XHRcdGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cblx0XHRcdFx0XHRsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGVsZW1lbnQpXG5cdFx0XHRcdFx0bGFiZWwudGV4dENvbnRlbnQgPSBlbGVtZW50O1xuXG5cdFx0XHRcdFx0bGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcblx0XHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBlbGVtZW50KTtcblx0XHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsZWxlbWVudCk7XG5cblx0XHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblx0XHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGVsZW1lbnQgPT0gXCJsaXN0XCIpIHtcblx0XHRcdFx0bGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJMaXN0XCIpO1xuXHRcdFx0XHRsYWJlbC50ZXh0Q29udGVudCA9IFwiTGlzdDpcIjtcblx0XHRcdFx0bGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5cdFx0XHRcdHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxpc3RcIik7XG5cdFx0XHRcdHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibGlzdFwiKTtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0KTtcblx0XHRcdFx0XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2xpc3QgdGl0bGUnKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhsaXN0QXJyYXlbaV0udGl0bGUpO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdIZXkhJylcblx0XHRcdFx0XHQvL2dyYWJzIGNyZWF0ZWQgTGlzdHMgYW5kIGlucHV0cyB0aGVtIGludG8gdGhlIGxpc3Qgc2VsZWN0aW9uIG9wdGlvbnMgZHJvcCBkb3duLlxuXHRcdFx0XHRcdGNvbnN0IGVsZW1lbnQgPSBsaXN0QXJyYXlbaV0udGl0bGU7XG5cdFx0XHRcdFx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdFx0XHRcdFx0b3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLGxpc3RBcnJheVtpXS50aXRsZSk7XG5cdFx0XHRcdFx0b3B0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdsaXN0LXZhbHVlJylcblx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZExpc3QgPSBsaXN0QXJyYXlbaV0udGl0bGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBsaXN0QXJyYXlbaV0udGl0bGUuc2xpY2UoMSk7XG5cdFx0XHRcdFx0b3B0aW9uLnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZWRMaXN0O1xuXHRcdFx0XHRcdHNlbGVjdC5hcHBlbmQob3B0aW9uKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRzdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcblx0XHRzdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJTdWJtaXRcIik7XG4gICAgICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1mb3JtLWJ0bicpXG5cdFx0Zm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXHR9XG5cblx0Zm9ybVJlc2V0KCkge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1mb3JtXCIpLnJlc2V0KCk7XG5cdH1cblxuXHRkaXNwbGF5VG9kbygpe1xuXG5cdH1cbn1cbmV4cG9ydCB7IERpc3BsYXkgfTtcbiIsIi8vSGVscHMgdHJhY2sgdGhlIGNyZWF0ZWQgbGlzdHMuXG5leHBvcnQgY29uc3QgbGlzdEFycmF5ID0gW107IiwiaW1wb3J0IHtUb2RvfSBmcm9tIFwiLi9jcmVhdGVUb0RvXCI7XG5cbmNsYXNzIENvbmR1Y3RvciB7XG5cdFxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnRvZG9EYXRhID0gW107Ly9JIHdhbnQgdG8gYWNjZXNzIHRoaXMgYXJyYXkgaW4gbWV0aG9kLlxuXHRcdHRoaXMubGlzdDtcblx0fVxuXG5cdGdyYWJGb3JtRGF0YSgpIHtcblx0XHRjb25zdCB0b2RvRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1mb3JtLWJ0blwiKTtcblxuICAgICAgICBsZXQgYXJyYXlEYXRhID0gdGhpcztcblxuXHRcdHRvZG9Gb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWU7XG5cdFx0XHRjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XG5cdFx0XHRjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtZGF0ZVwiKS52YWx1ZTtcblx0XHRcdGxldCBwcmlvcml0eTtcdFx0XHRcdFxuXHRcdFx0dmFyIGVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdwcmlvcml0eScpO1xuXHRcdFx0XHQgIFxuXHRcdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgZWxlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYoZWxlW2ldLmNoZWNrZWQpe1xuXHRcdFx0XHRcdHByaW9yaXR5ID0gZWxlW2ldLnZhbHVlO1x0XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RcIikudmFsdWU7XG5cblx0XHRcdC8vY3JlYXRlIHRvZG9PYmpcblx0XHRcdGNvbnN0IHRvZG9PYmogPSBuZXcgVG9kbyh0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5KTtcblxuXHRcdFx0Ly9QdXNoZXMgdG9kbyB0byBhcnJheVxuXHRcdFx0YXJyYXlEYXRhLnRvZG9EYXRhLnB1c2godG9kb09iaik7XG5cdFx0XHRhcnJheURhdGEubGlzdCA9IGxpc3Q7XG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm5BcnJheSgpIHtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnRvZG9EYXRhKTtcblx0fVxuXG5cdHB1c2hUb0xpc3QobGlzdCkge1xuXHRcdGxldCB0b2RvRGF0YUxlbiA9IHRoaXMudG9kb0RhdGEubGVuZ3RoXG5cdFx0bGlzdC5hZGQodGhpcy50b2RvRGF0YVt0b2RvRGF0YUxlbi0xXSk7XG5cdH1cblxuXHRyZXR1cm5MaXN0KCkge1x0XG5cdFx0cmV0dXJuIHRoaXMubGlzdDtcblx0fSBcblxufVxuZXhwb3J0IHsgQ29uZHVjdG9yIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7TGlzdH0gZnJvbSBcIi4vY3JlYXRlTGlzdFwiXG5pbXBvcnQge1RvZG99IGZyb20gXCIuL2NyZWF0ZVRvRG8uanNcIlxuaW1wb3J0IHtEaXNwbGF5fSBmcm9tIFwiLi9kaXNwbGF5XCJcbmltcG9ydCB7Q29uZHVjdG9yfSBmcm9tICcuL3RvZG9EYXRhQ29uZHVjdG9yJztcbi8vSG9sZHMgY3JlYXRlZCBhcnJheXNcbmltcG9ydCB7bGlzdEFycmF5fSBmcm9tIFwiLi9saXN0QXJyYXlUcmFja2VyLmpzXCI7XG5pbXBvcnQgeyBzZXRXZWVrIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cblxubGV0IGRpc3BsYXkgPSBuZXcgRGlzcGxheSgpO1xubGV0IGRhdGFDb25kID0gbmV3IENvbmR1Y3RvcigpO1xubGV0IGNhcHR1cmUgPSBuZXcgTGlzdCgnQ2FwdHVyZScpO1xubGV0IG5leHRBY3Rpb25zID0gbmV3IExpc3QoJ05leHQgYWN0aW9ucycpO1xubGV0IHdhaXRpbmdPbiA9IG5ldyBMaXN0KCdIZWN0b3InKTtcbmxpc3RBcnJheS5wdXNoKGNhcHR1cmUpO1xubGlzdEFycmF5LnB1c2gobmV4dEFjdGlvbnMpO1xubGlzdEFycmF5LnB1c2god2FpdGluZ09uKTtcbmNvbnNvbGUubG9nKGxpc3RBcnJheSk7XG5jb25zb2xlLmxvZyhsaXN0QXJyYXlbMF0pO1xuLy9Mb2FkcyBmb3JtXG5kaXNwbGF5LnRvZG9Gb3JtKCk7XG4vL0dyYWJzIGRhdGEgZnJvbSBmb3JtXG5cbi8vR3JhYnMgZm9ybSBkYXRhIGFuZCBpbnNlcnRzIGl0IGludG8gdGhlIHNlbGVjdGVkIExpc3RcbmxldCBmb3JtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZm9ybS1idG4nKTtcbmRhdGFDb25kLmdyYWJGb3JtRGF0YSgpO1xuZm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICBcbiAgICAvL1RPRE86IENyZWF0ZSBjb2RlIHRoYXQgZ3JhYnMgc2VsZWN0ZWQgbGlzdCBhbmQgaW5zZXJ0cyBpbnRvIHRoYXQgbGlzdC5cbiAgICBsZXQgbGlzdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdCcpO1xuICAgIGxldCBjb2xsZWN0aW9uID0gbGlzdHMuc2VsZWN0ZWRPcHRpb25zOyBcbiAgICBcbiAgICBsZXQgc2VsZWN0ZWRMaXN0ID0gY29sbGVjdGlvblswXS5sYWJlbDtcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZExpc3QpO1xuICAgIFxuICAgIFxuICAgIC8vSW5zZXJ0cyBkYXRhIHRvIHNlbGVjdGVkIGxpc3Qgd2hlbiBzdWJtaXR0ZWQuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpc3RBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgbGlzdCA9IGxpc3RBcnJheVtpbmRleF07XG4gICAgICAgIGlmIChsaXN0LnRpdGxlID09IHNlbGVjdGVkTGlzdCkge1xuICAgICAgICAgICAgZGF0YUNvbmQucHVzaFRvTGlzdChsaXN0QXJyYXlbaW5kZXhdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic29tZXRoaW5nIHdlbnQgd3JvbmcgTG40NFwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBcbiAgICAvL2kgd2FudCB0byBiZSBiYWxlIHRvIGluc2VydCBhIHZhcmlhYmxlIGFib3ZlIGRlcGVuZGluZyBvbiB0aGUgc2VsZWN0ZWQgbGlzdCBzbyBpdCBnb2VzIHRvIGl0cyBjb3JyZWN0IGxpc3QuXG4gICAgLy8gY29uc29sZS5sb2coY2FwdHVyZSk7XG4gICAgZGlzcGxheS5mb3JtUmVzZXQoKTtcbiAgICBjb25zb2xlLmxvZyhsaXN0QXJyYXkpO1xuXG59KVxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==