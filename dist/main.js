/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bubbleSort.js":
/*!***************************!*\
  !*** ./src/bubbleSort.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bubbleSort": () => (/* binding */ bubbleSort)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");

function bubbleSort(args) {
  //Loop through array elements
  for (let index = 0; index < args.length; index++) {
    let secondEleIndex = index + 1;
    const firstTodoElement = args[index];
    const secTodoElement = args[index + 1];
    const firstElementDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(firstTodoElement.dueDate).toISOString());
    //checks to see if the loop is at the end of the array.
    if (secTodoElement == undefined) {} else {
      const secElementDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(secTodoElement.dueDate).toISOString());

      //if 1 returned first date is after the second, -1 first date is before, 0 dates are equal

      //sets the return val to 1 -1 or 0               
      const compareVal = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(firstElementDate, secElementDate);

      //if first element date is after the second swap their places.
      if (compareVal == 1) {
        //swap elements
        args[index] = secTodoElement;
        args[secondEleIndex] = firstTodoElement;

        //resets for loop.
        index = -1;
        continue;
      } else if (compareVal == -1) {
        //nothing changes
      } else if (compareVal == 0) {
        //nothing changes
      }
    }
  }
  return args;
}

/***/ }),

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
  add(todo) {
    //! Issue when page is refreshed and new todo is added this method does not exist yet.
    this.todos.push(todo);
  }
  remove(deletedTodo) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].title === deletedTodo) {
        this.todos.splice(i, 1);
        i--;
      }
    }
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
  constructor(title, description, dueDate, priority, list) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.list = list;
  }
}


//test push to git

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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isPast/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var _bubbleSort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bubbleSort */ "./src/bubbleSort.js");
/* harmony import */ var _sortByPrio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sortByPrio */ "./src/sortByPrio.js");
/* harmony import */ var _saveToLocalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./saveToLocalStorage */ "./src/saveToLocalStorage.js");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






let dataCond = new _todoDataConductor__WEBPACK_IMPORTED_MODULE_0__.Conductor();
class Display {
  constructor() {
    _defineProperty(this, "removeFromArray", e => {
      console.log("Delete button was clicked");
      const targetList = e.target.parentNode.firstChild.innerText;
      console.log(targetList);
      for (let i = 0; i < _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.length; i++) {
        const list = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].title;
        console.log(i);
        console.log(_listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray);
        if (list === targetList) {
          _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.splice(i, 1);
          console.log("you removed: " + targetList);
          console.table(_listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray);
          this.clearListView();
          this.displayListButtons();
          this.addDeleteListListener();
          (0,_saveToLocalStorage__WEBPACK_IMPORTED_MODULE_4__.saveToLocalStorage)();
          break;
        }
      }
    });
  }
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
        for (let i = 0; i < _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.length; i++) {
          // const element = listArray[i].title;
          const option = document.createElement("option");
          option.setAttribute("value", _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].title);
          option.setAttribute("class", "list-value");
          option.textContent = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].title.charAt(0).toUpperCase() + _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].title.slice(1);
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

      const currentList = document.querySelector(".header__list-title").textContent;
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
        for (let i = 0; i < _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.length; i++) {
          // const element = listArray[i].title;
          const option = document.createElement("option");
          option.setAttribute("value", _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].title);
          option.setAttribute("class", "list-value");
          option.textContent = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].title.charAt(0).toUpperCase() + _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].title.slice(1);
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
      const captureList = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[0].title;
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
      defaultList.addEventListener("click", e => {
        this.clearTodoView();
        this.displaySelectedList(e);
      });
    }
    //creates lists buttons if there are list on local storage.
    for (let i = 1; i < _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.length; i++) {
      const listName = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].title;
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
      element.addEventListener("click", e => {
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
      let listArrayLen = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.length;
      let newList = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[listArrayLen - 1].title;
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
      (0,_saveToLocalStorage__WEBPACK_IMPORTED_MODULE_4__.saveToLocalStorage)();
      console.log(_listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray);

      //Adding event listener to each list button that will run to display todos when clicked.
      const listOptions = document.querySelectorAll(".list-option");
      for (let index = 0; index < listOptions.length; index++) {
        const element = listOptions[index];
        element.addEventListener("click", e => {
          this.clearTodoView();
          this.displaySelectedList(e);
        });
      }
    });
  }
  displaySelectedList(e) {
    let dataCond = new _todoDataConductor__WEBPACK_IMPORTED_MODULE_0__.Conductor();
    //the list that was clicked.

    this.selectedList = e.target.innerText;
    const listTitle = document.querySelector(".header__list-title");
    listTitle.textContent = this.selectedList;

    // this.displayTodoAmount();
    this.displayTodo();
    dataCond.todoEditButtonListener();
    // dataCond.removeTodo();
  }

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
    const currentList = document.querySelector(".header__list-title").textContent;
    const todoView = document.querySelector(".todo-view");
    for (let i = 0; i < _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.length; i++) {
      //listTitle is being used to hold value of the list title to check if it matches the selected list.
      let listTitle = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].title;
      let thisList = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i];
      let listTodoLen = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].todos.length;

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
    for (let i = 0; i < _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.length; i++) {
      const listTitle = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].title;
      const listTodoLen = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].todos.length;
      if (listTitle === this.selectedList) {
        const counter = document.getElementById("header__todo-amount");
        counter.textContent = listTodoLen;
      }
      //Will update counter even if listnode is not selected.
      let defaultList = document.querySelector(".header__list-title").textContent;
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
      for (let i = 0; i < _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.length; i++) {
        const listTodosLen = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].todos.length;
        countHolder += listTodosLen;
        headerCounter.textContent = countHolder;
      }
      // clear and update todo view with all tasks
      const todoView = document.querySelector(".todo-view");
      todoView.innerHTML = "";

      //Update todo view with all todos
      for (let i = 0; i < _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.length; i++) {
        //listTitle is being used to hold value of the list title to check if it matches the selected list.

        let thisList = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i];
        let listTodoLen = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].todos.length;

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
      for (let i = 0; i < _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.length; i++) {
        //listTitle is being used to hold value of the list title to check if it matches the selected list.

        let thisList = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i];
        let listTodoLen = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].todos.length;

        //Cycles through each todo and appends them into the todo-view and adds them into a array
        for (let j = 0; j < listTodoLen; j++) {
          let thisTodoObj = thisList.todos[j];
          const parsedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(thisTodoObj.dueDate).toISOString());

          //Checks if date is in the past. will exclude it if it is.
          if ((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(parsedDate)) {} else {
            newTodoArray.push(thisTodoObj);
          }
          //checks if date is today since isPast() function will return false.
          if ((0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(parsedDate)) {
            newTodoArray.push(thisTodoObj);
          }
        }
      }

      //Sorting function.
      (0,_bubbleSort__WEBPACK_IMPORTED_MODULE_2__.bubbleSort)(newTodoArray);
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
      for (let i = 0; i < _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.length; i++) {
        let thisList = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i];
        let listTodoLen = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].todos.length;
        for (let j = 0; j < listTodoLen; j++) {
          let thisTodoObj = thisList.todos[j];
          let todoDate = thisTodoObj.dueDate;
          const parsedTodoDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(todoDate).toISOString());

          //checks if date of todo is today and returns true or false
          let dateResult = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(parsedTodoDate);
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
      for (let i = 0; i < _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.length; i++) {
        let thisList = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i];
        let listTodoLen = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].todos.length;
        for (let j = 0; j < listTodoLen; j++) {
          let thisTodoObj = thisList.todos[j];
          importantTasks.push(thisTodoObj);
          //write function that sorts tasks by prio. from highest to smallest.
        }
      }

      importantTasks = (0,_sortByPrio__WEBPACK_IMPORTED_MODULE_3__.sortByPrio)(importantTasks);
      this.displayTodoTasks(importantTasks);
      this.updateTodoCounter();
    });
  }

  //This counter will grab all the currently displayed todos in the todo view element and change the counter to the corresponding todos.
  updateTodoCounter() {
    const headerCounter = document.querySelector("#header__todo-amount");
    const currentTasks = document.querySelectorAll('.todo-obj');
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
    });
  }
}
// dataCond.removeTodo();


/***/ }),

/***/ "./src/grabFromLocalStorage.js":
/*!*************************************!*\
  !*** ./src/grabFromLocalStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "grabFromLocalStorage": () => (/* binding */ grabFromLocalStorage)
/* harmony export */ });
/* harmony import */ var _listArrayTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listArrayTracker */ "./src/listArrayTracker.js");
/* harmony import */ var _storageAvailable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageAvailable */ "./src/storageAvailable.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _todoDataConductor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoDataConductor */ "./src/todoDataConductor.js");
/* harmony import */ var _createList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createList */ "./src/createList.js");
/* harmony import */ var _createToDo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createToDo */ "./src/createToDo.js");






function grabFromLocalStorage() {
  let displayControl = new _display__WEBPACK_IMPORTED_MODULE_2__.Display();
  let dataCond = new _todoDataConductor__WEBPACK_IMPORTED_MODULE_3__.Conductor();
  if ((0,_storageAvailable__WEBPACK_IMPORTED_MODULE_1__.storageAvailable)("localStorage")) {
    // Yippee! We can use localStorage awesomeness

    //*savedListArray is the key for listArray Data

    if (localStorage.getItem("savedListArray") === null) {
      //
    } else {
      let savedArray = window.localStorage.getItem("savedListArray");

      //converts data from string back to an object
      let parsedSavedArray = JSON.parse(savedArray);

      //Assigns the listArray to the stored
      // Object.assign(listArray, parsedSavedArray);

      //Clears the listArray
      _listArrayTracker__WEBPACK_IMPORTED_MODULE_0__.listArray.splice(0, _listArrayTracker__WEBPACK_IMPORTED_MODULE_0__.listArray.length);

      //cycles through each list and todo and creates a list and todo object.
      let savedListLen = parsedSavedArray.length - 1;
      for (let i = 0; i <= savedListLen; i++) {
        const listElementName = parsedSavedArray[i].title;
        const newList = new _createList__WEBPACK_IMPORTED_MODULE_4__.List(listElementName);
        _listArrayTracker__WEBPACK_IMPORTED_MODULE_0__.listArray.push(newList);
        const savedTodoLen = parsedSavedArray[i].todos.length - 1;
        for (let j = 0; j <= savedTodoLen; j++) {
          const todoElement = parsedSavedArray[i].todos[j];
          const todoElementTitle = todoElement.title;
          const todoElementDesc = todoElement.description;
          const todoElementDate = todoElement.dueDate;
          const todoElementPrio = todoElement.priority;
          const todoElementList = todoElement.list;
          const todoObj = new _createToDo__WEBPACK_IMPORTED_MODULE_5__.Todo(todoElementTitle, todoElementDesc, todoElementDate, todoElementPrio, todoElementList);
          _listArrayTracker__WEBPACK_IMPORTED_MODULE_0__.listArray[i].todos.push(todoObj);
        }
      }

      //Updates the default list view with its tasks.
      displayControl.displayTodo();
      dataCond.todoEditButtonListener();
      //BUG This adds 2 event listeners on todo delete buttons
      //dataCond.removeTodo();

      displayControl.editFormModal();
      displayControl.displayListButtons();
    }
  } else {
    // Too bad, no localStorage for us
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
let listArray = [];

/***/ }),

/***/ "./src/saveToLocalStorage.js":
/*!***********************************!*\
  !*** ./src/saveToLocalStorage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveToLocalStorage": () => (/* binding */ saveToLocalStorage)
/* harmony export */ });
/* harmony import */ var _listArrayTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listArrayTracker */ "./src/listArrayTracker.js");
/* harmony import */ var _storageAvailable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageAvailable */ "./src/storageAvailable.js");


function saveToLocalStorage() {
  if ((0,_storageAvailable__WEBPACK_IMPORTED_MODULE_1__.storageAvailable)('localStorage')) {
    // Yippee! We can use localStorage awesomeness

    localStorage.clear();

    //stores the listArray in localStorage as a string. 
    window.localStorage.setItem("savedListArray", JSON.stringify(_listArrayTracker__WEBPACK_IMPORTED_MODULE_0__.listArray));
  } else {
    // Too bad, no localStorage for us
  }
}

/***/ }),

/***/ "./src/sortByPrio.js":
/*!***************************!*\
  !*** ./src/sortByPrio.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sortByPrio": () => (/* binding */ sortByPrio)
/* harmony export */ });
function sortByPrio(args) {
  let sortedArray = [];

  //Loops and checks for high prio then adding them into the array.
  for (let i = 0; i < args.length; i++) {
    let element = args[i];
    let elementPrio = args[i].priority;
    if (elementPrio == 'high') {
      sortedArray.push(element);
    }
  }
  for (let i = 0; i < args.length; i++) {
    let element = args[i];
    let elementPrio = args[i].priority;
    if (elementPrio == 'med') {
      sortedArray.push(element);
    }
  }
  for (let i = 0; i < args.length; i++) {
    let element = args[i];
    let elementPrio = args[i].priority;
    if (elementPrio == 'low') {
      sortedArray.push(element);
    }
  }
  return sortedArray;
}

/***/ }),

/***/ "./src/storageAvailable.js":
/*!*********************************!*\
  !*** ./src/storageAvailable.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storageAvailable": () => (/* binding */ storageAvailable)
/* harmony export */ });
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
    // everything except Firefox
    e.code === 22 ||
    // Firefox
    e.code === 1014 ||
    // test name field too, because code might not be present
    // everything except Firefox
    e.name === 'QuotaExceededError' ||
    // Firefox
    e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
    // acknowledge QuotaExceededError only if there's something already stored
    storage && storage.length !== 0;
  }
}

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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _saveToLocalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./saveToLocalStorage */ "./src/saveToLocalStorage.js");






class Conductor {
  constructor() {
    this.todoData = []; //I want to access this array in method.
    this.list;
    this.todoObj = {
      title: '',
      desc: '',
      dueDate: '',
      prio: ''
    };
  }
  grabFormData() {
    let self = this;

    //Grabs data from form to create todoObj.
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    //Grabs duedate and formats it.
    const dueDate = document.getElementById("due-date").value;
    let formatedDate = '';
    if (dueDate.length > 0) {
      formatedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(dueDate.replace(/-/g, '/')), 'M/d/yy');
    } else {
      formatedDate = '';
    }
    let priority;
    var ele = document.getElementsByName("priority");
    for (let i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        priority = ele[i].value;
      }
    }

    //grab selected list and create todoObj
    const list = document.getElementById("list").value;
    const todoObj = new _createToDo__WEBPACK_IMPORTED_MODULE_0__.Todo(title, description, formatedDate, priority, list);

    //Pushes todo to array
    self.todoData.push(todoObj);
    self.list = list;
  }
  grabEditFromData() {
    //Grabs data from form to create todoObj.
    const title = document.getElementById("edit-title").value;
    const description = document.getElementById("edit-description").value;

    //Grabs duedate and formats it.
    const dueDate = document.getElementById("edit-due-date").value;
    // let formatedDate = '';
    // // if (dueDate.length > 0) {
    // // 	formatedDate = format(new Date(dueDate), 'M/d/yy');
    // // }

    let priority;
    var ele = document.getElementsByName("edit-priority");
    for (let i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        priority = ele[i].value;
      }
    }
    return {
      title,
      description,
      dueDate,
      priority
    };
  }
  updateTodo(todoTitle) {
    //Edited data from edit form.
    let newTitle = this.grabEditFromData().title;
    let newDesc = this.grabEditFromData().description;
    let newDueDate = this.grabEditFromData().dueDate;
    let formatedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(newDueDate), 'M/d/yy');
    let newPrio = this.grabEditFromData().priority;

    //atodoObj Node list
    const todoObjs = document.querySelectorAll('.todo-obj');
    const currentList = document.querySelector('.header__list-title').textContent;
    for (let i = 0; i < _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.length; i++) {
      const list = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].title;
      if (currentList == list) {
        for (let j = 0; j < todoObjs.length; j++) {
          const todoObjTitle = todoObjs[j].children[0].children[0].innerText;
          if (todoTitle == todoObjTitle) {
            const selectedTodo = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].todos[j];
            //Update todo obj.
            selectedTodo.title = newTitle;
            selectedTodo.description = newDesc;
            selectedTodo.dueDate = formatedDate;
            selectedTodo.priority = newPrio;

            //Update todo in todo view.
            todoObjs[j].children[0].firstChild.innerText = newTitle;
            todoObjs[j].children[1].children[1].innerText = newDesc;
            todoObjs[j].children[1].children[0].innerText = formatedDate;
            todoObjs[j].children[0].lastChild.innerText = newPrio;
          }
        }
      }
    }
  }
  pushToList(givenlist) {
    let todoDataLen = this.todoData.length;
    givenlist.add(this.todoData[todoDataLen - 1]);
    // list.remove();
  }

  _returnList() {
    return this.list;
  }
  insertTodoIntoList() {
    let conductor = this;
    //Grabs data from
    //Grabs form data and inserts it into the selected List

    conductor.grabFormData();
    let lists = document.getElementById("list");
    let collection = lists.selectedOptions;
    let selectedList = collection[0].label;

    //Inserts data to selected list when submitted.
    for (let index = 0; index < _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.length; index++) {
      const list = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[index];
      if (list.title == selectedList) {
        conductor.pushToList(_listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[index]);
        (0,_saveToLocalStorage__WEBPACK_IMPORTED_MODULE_4__.saveToLocalStorage)();
      }
    }
  }
  createNewList() {
    let display = new _display__WEBPACK_IMPORTED_MODULE_2__.Display();
    let listBtn = document.getElementById("list-form-btn");
    listBtn.addEventListener("click", () => {
      let listInput = document.getElementById("new-list").value;
      const capitalizedList = listInput.charAt(0).toUpperCase() + listInput.slice(1);
      const newList = new _createList__WEBPACK_IMPORTED_MODULE_3__.List(capitalizedList);
      _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.push(newList);
      display.formReset();
      const listOptions = document.getElementById("list");
      const option = document.createElement("option");
      option.setAttribute("value", listInput);
      option.setAttribute("class", "list-value");
      option.textContent = capitalizedList;
      listOptions.append(option);
    });
  }
  removeTodo() {
    const display = new _display__WEBPACK_IMPORTED_MODULE_2__.Display();
    let deleteButtons = document.querySelectorAll(".todo-delete");
    const todoView = document.querySelector(".todo-view");
    for (let index = 0; index < deleteButtons.length; index++) {
      deleteButtons[index].addEventListener("click", event => {
        const todoElement = event.target.parentNode.parentNode;
        todoView.removeChild(todoElement);

        //removes the todo from its list.
        const deletedTodo = event.target.parentElement.parentElement.children[0].children[0].innerText;
        const listTitle = document.querySelector(".header__list-title").textContent;
        //Check this out hector
        // const todoList = 

        for (let i = 0; i < _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.length; i++) {
          const listToRemoveFrom = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i];
          if (listTitle == _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].title) {
            listToRemoveFrom.remove(deletedTodo);
            display.displayTodoAmount();
          }
        }
      });
    }
  }
  todoEditButtonListener() {
    const self = this;
    const display = new _display__WEBPACK_IMPORTED_MODULE_2__.Display();
    const todoEditBtns = document.querySelectorAll('.todo-edit');
    for (let i = 0; i < todoEditBtns.length; i++) {
      const element = todoEditBtns[i];
      element.addEventListener('click', e => {
        const formEle = document.getElementById('edit-modal');
        formEle.style.display = 'block';
        //Title works
        const title = e.target.parentElement.parentElement.childNodes[0].childNodes[0].innerText;
        //Desc Works
        const desc = e.target.parentNode.parentNode.childNodes[1].childNodes[1].innerText;
        //due date works
        const dueDate = e.target.parentNode.parentNode.childNodes[1].childNodes[0].innerText;
        let formatedDate = '';
        if (dueDate.length > 0) {
          formatedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(dueDate), 'yyyy-MM-dd');
        }

        //Prio works
        const prio = e.target.parentNode.parentNode.childNodes[0].childNodes[1].innerText;

        //Shows todo data on edit form
        display.selectedTodoEdit(title, desc, formatedDate, prio);

        //updates list options in edit form 
        const editListOptions = document.querySelector('#edit-list');
        editListOptions.innerHTML = "";
        for (let i = 0; i < _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray.length; i++) {
          const option = document.createElement("option");
          option.setAttribute("value", _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].title);
          option.setAttribute("class", "list-value");
          const capitalizedList = _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].title.charAt(0).toUpperCase() + _listArrayTracker__WEBPACK_IMPORTED_MODULE_1__.listArray[i].title.slice(1);
          option.textContent = capitalizedList;
          const select = document.querySelector('#edit-list');
          select.append(option);
        }
        const makeChangesBtn = document.getElementById('edit-form-btn');
        makeChangesBtn.addEventListener('click', () => {
          self.updateTodo(title);
        });
      });
    }
  }
}


/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */
var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function (pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};

var timeLongFormatter = function (pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};

var dateTimeLongFormatter = function (pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */

var daysInYear = 365.2425;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;
/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */

var secondsInDay = secondsInHour * 24;
/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */

var secondsInWeek = secondsInDay * 7;
/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */

var secondsInYear = secondsInDay * daysInYear;
/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */

var secondsInMonth = secondsInYear / 12;
/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];

    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isPast/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isPast/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPast)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isPast
 * @category Common Helpers
 * @summary Is the given date in the past?
 * @pure false
 *
 * @description
 * Is the given date in the past?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in the past
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * const result = isPast(new Date(2014, 6, 2))
 * //=> true
 */

function isPast(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime() < Date.now();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function (token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function (token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function (dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, options) {
  var _options$additionalDi;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
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
/* harmony import */ var _grabFromLocalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grabFromLocalStorage */ "./src/grabFromLocalStorage.js");



//Holds created arrays


//Dom controller
let display = new _display__WEBPACK_IMPORTED_MODULE_1__.Display();
//Data Manipulator
let dataCond = new _todoDataConductor__WEBPACK_IMPORTED_MODULE_2__.Conductor();

//DEFAULT CREATED LIST
let defaultList = new _createList__WEBPACK_IMPORTED_MODULE_0__.List('Todo');
_listArrayTracker_js__WEBPACK_IMPORTED_MODULE_3__.listArray.push(defaultList);

//Loads form
display.listForm();

//grabs todo data and inserts into list
dataCond.createNewList();
display.displayListButtons();
//adds event listener to list-form-button
display.AddEventListenerToListSubmit();
(0,_grabFromLocalStorage__WEBPACK_IMPORTED_MODULE_4__.grabFromLocalStorage)();
//adds event listener to delete buttons
display.addDeleteListListener();
display.todoForm();
display.formReset();
display.todoFormModal();
display.editForm();
// dataCond.changeList();

//Display different tasks
display.displayAllTasks();
display.displayUpcomingTasks();
display.displayTodayTasks();
display.displayPrioTasks();
display.mobileSideMenuBtn();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RMbUM7QUFDZ0I7QUFDbEI7QUFDb0I7QUFDUTtBQUMyQjtBQUM2QjtBQUN6RTtBQUNNO0FBQ1c7QUFDVCxDQUFDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNGQUFzRjtBQUN0Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9idWJibGVTb3J0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY3JlYXRlTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NyZWF0ZVRvRG8uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZ3JhYkZyb21Mb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9saXN0QXJyYXlUcmFja2VyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc2F2ZVRvTG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc29ydEJ5UHJpby5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0b3JhZ2VBdmFpbGFibGUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b2RvRGF0YUNvbmR1Y3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb21wYXJlQXNjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNEYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzUGFzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1ZhbGlkL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZUlTTy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtwYXJzZUlTTywgY29tcGFyZUFzY30gZnJvbSBcImRhdGUtZm5zXCI7XG5leHBvcnQgZnVuY3Rpb24gYnViYmxlU29ydChhcmdzKSB7XG4gICAgXG4gICAgLy9Mb29wIHRocm91Z2ggYXJyYXkgZWxlbWVudHNcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJncy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgbGV0IHNlY29uZEVsZUluZGV4ID0gaW5kZXggKyAxO1xuICAgICAgICBjb25zdCBmaXJzdFRvZG9FbGVtZW50ID0gYXJnc1tpbmRleF07XG4gICAgICAgIGNvbnN0IHNlY1RvZG9FbGVtZW50ID0gYXJnc1tpbmRleCsxXTtcblxuICAgICAgICBcbiAgICAgICAgY29uc3QgZmlyc3RFbGVtZW50RGF0ZSA9IHBhcnNlSVNPKG5ldyBEYXRlKGZpcnN0VG9kb0VsZW1lbnQuZHVlRGF0ZSkudG9JU09TdHJpbmcoKSk7XG4gICAgICAgIC8vY2hlY2tzIHRvIHNlZSBpZiB0aGUgbG9vcCBpcyBhdCB0aGUgZW5kIG9mIHRoZSBhcnJheS5cbiAgICAgICAgaWYoc2VjVG9kb0VsZW1lbnQgPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc2VjRWxlbWVudERhdGUgPSBwYXJzZUlTTyhuZXcgRGF0ZShzZWNUb2RvRWxlbWVudC5kdWVEYXRlKS50b0lTT1N0cmluZygpKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy9pZiAxIHJldHVybmVkIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCwgLTEgZmlyc3QgZGF0ZSBpcyBiZWZvcmUsIDAgZGF0ZXMgYXJlIGVxdWFsXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvL3NldHMgdGhlIHJldHVybiB2YWwgdG8gMSAtMSBvciAwICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBhcmVWYWwgPSBjb21wYXJlQXNjKGZpcnN0RWxlbWVudERhdGUsc2VjRWxlbWVudERhdGUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvL2lmIGZpcnN0IGVsZW1lbnQgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kIHN3YXAgdGhlaXIgcGxhY2VzLlxuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZVZhbCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3N3YXAgZWxlbWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3NbaW5kZXhdID0gc2VjVG9kb0VsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzW3NlY29uZEVsZUluZGV4XSA9IGZpcnN0VG9kb0VsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcmVzZXRzIGZvciBsb29wLlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbXBhcmVWYWwgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vbm90aGluZyBjaGFuZ2VzXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tcGFyZVZhbCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL25vdGhpbmcgY2hhbmdlc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiBhcmdzO1xuXG59IiwiY2xhc3MgTGlzdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMudG9kb3MgPSBbXTtcbiAgICB9XG4gICAgLy9hZGRzIGdpdmVuIG9iaiB0byBsaXN0IGFycmF5XG4gICAgYWRkKHRvZG8peyAvLyEgSXNzdWUgd2hlbiBwYWdlIGlzIHJlZnJlc2hlZCBhbmQgbmV3IHRvZG8gaXMgYWRkZWQgdGhpcyBtZXRob2QgZG9lcyBub3QgZXhpc3QgeWV0LlxuICAgICAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XG4gICAgfVxuXG4gICAgcmVtb3ZlKGRlbGV0ZWRUb2RvKXtcbiAgICAgICAgZm9yKCBsZXQgaSA9IDA7IGkgPCB0aGlzLnRvZG9zLmxlbmd0aDsgaSsrKXsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCB0aGlzLnRvZG9zW2ldLnRpdGxlID09PSBkZWxldGVkVG9kbykgeyBcbiAgICAgICAgICAgICAgICB0aGlzLnRvZG9zLnNwbGljZShpLCAxKTsgXG4gICAgICAgICAgICAgICAgaS0tOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cblxufVxuXG5leHBvcnQge0xpc3R9OyIsIlxuY2xhc3MgVG9kbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSxsaXN0KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gICAgfVxuXG4gXG59XG5cbmV4cG9ydCB7IFRvZG8gfTtcblxuLy90ZXN0IHB1c2ggdG8gZ2l0IiwiaW1wb3J0IHsgQ29uZHVjdG9yIH0gZnJvbSBcIi4vdG9kb0RhdGFDb25kdWN0b3JcIjtcbmltcG9ydCB7IGxpc3RBcnJheSB9IGZyb20gXCIuL2xpc3RBcnJheVRyYWNrZXJcIjtcbmltcG9ydCB7IGlzUGFzdCwgaXNUb2RheSwgcGFyc2VJU08gfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IGJ1YmJsZVNvcnQgfSBmcm9tIFwiLi9idWJibGVTb3J0XCI7XG5pbXBvcnQgeyBzb3J0QnlQcmlvIH0gZnJvbSBcIi4vc29ydEJ5UHJpb1wiO1xuaW1wb3J0IHsgc2F2ZVRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vc2F2ZVRvTG9jYWxTdG9yYWdlXCI7XG5cbmxldCBkYXRhQ29uZCA9IG5ldyBDb25kdWN0b3IoKTtcbmNsYXNzIERpc3BsYXkge1xuXHRjb25zdHJ1Y3RvcigpIHt9ICBcblx0Ly9jcmVhdGVzIGEgdGhlIGZvcm0gbmVlZGVkIGZyb20gdG9kb1xuXHR0b2RvRm9ybSgpIHtcblx0XHRsZXQgaW5wdXRBcnJheSA9IFtcInRpdGxlXCIsIFwiZGVzY3JpcHRpb25cIiwgXCJkdWVEYXRlXCIsIFwicHJpb3JpdHlcIiwgXCJsaXN0XCJdO1xuXG5cdFx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXHRcdGZvcm0uc2V0QXR0cmlidXRlKFwib25zdWJtaXRcIiwgXCJyZXR1cm4gZmFsc2VcIik7XG5cdFx0Zm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tZm9ybVwiKTtcblx0XHRjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jb250ZW50XCIpO1xuXHRcdGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVwiKTtcblx0XHR0b2RvQ29udGFpbmVyLmluc2VydEJlZm9yZShmb3JtLCBjbG9zZUJ1dHRvbik7XG5cdFx0Ly9lYWNoIGVsZW1lbnQgZGlzcGxheXMgZGlmZmVyZW50IGlucHV0cyBiYXNlZCBvbiB0aGVpciBuZWVkZWQgZGF0YS5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0QXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGVsZW1lbnQgPSBpbnB1dEFycmF5W2ldO1xuXHRcdFx0aWYgKGVsZW1lbnQgPT09IFwidGl0bGVcIikge1xuXHRcdFx0XHRsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRpdGxlXCIpO1xuXHRcdFx0XHRsYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGU6XCI7XG5cdFx0XHRcdGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGl0bGVcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGVsZW1lbnQgPT09IFwiZGVzY3JpcHRpb25cIikge1xuXHRcdFx0XHRsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NyaXB0aW9uXCIpO1xuXHRcdFx0XHRsYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCI7XG5cdFx0XHRcdGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVzY3JpcHRpb25cIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiKTtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGVsZW1lbnQgPT09IFwiZHVlRGF0ZVwiKSB7XG5cdFx0XHRcdGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZHVlLWRhdGVcIik7XG5cdFx0XHRcdGxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTpcIjtcblx0XHRcdFx0bGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWUtZGF0ZVwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImR1ZS1kYXRlXCIpO1xuXHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cdFx0XHR9XG5cdFx0XHQvL2NoYW5nZSB0aGlzIHRvIHJhZGlvIHdpdGggMyBwcmlvcml0eSBvcHRpb25zIGxvdyBtZWQgaGlnaFxuXHRcdFx0aWYgKGVsZW1lbnQgPT09IFwicHJpb3JpdHlcIikge1xuXHRcdFx0XHRsZXQgYXJyYXkgPSBbXCJsb3dcIiwgXCJtZWRcIiwgXCJoaWdoXCJdO1xuXHRcdFx0XHRsZXQgZmllbGRTZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XG5cdFx0XHRcdGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuXHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eVwiKTtcblx0XHRcdFx0bGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIjtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cdFx0XHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdFx0XHRjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG5cdFx0XHRcdFx0bGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRcdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBlbGVtZW50KTtcblx0XHRcdFx0XHRsYWJlbC50ZXh0Q29udGVudCA9IGVsZW1lbnQ7XG5cblx0XHRcdFx0XHRsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdFx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuXHRcdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGVsZW1lbnQpO1xuXHRcdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKTtcblx0XHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBlbGVtZW50KTtcblx0XHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGZpZWxkU2V0KTtcblx0XHRcdFx0XHRmaWVsZFNldC5hcHBlbmRDaGlsZChpbnB1dCk7XG5cdFx0XHRcdFx0ZmllbGRTZXQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZWxlbWVudCA9PT0gXCJsaXN0XCIpIHtcblx0XHRcdFx0bGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJMaXN0XCIpO1xuXHRcdFx0XHRsYWJlbC50ZXh0Q29udGVudCA9IFwiTGlzdDpcIjtcblx0XHRcdFx0bGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5cdFx0XHRcdHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxpc3RcIik7XG5cdFx0XHRcdHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibGlzdFwiKTtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0KTtcblxuXHRcdFx0XHRjb25zdCBsaXN0T3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdFwiKTtcblx0XHRcdFx0bGlzdE9wdGlvbnMuaW5uZXJIVE1MID0gXCJcIjtcblxuXHRcdFx0XHQvL1VwZGF0ZXMgb3B0aW9ucyBvbiBmb3JtIHdoZW4gbmV3IGxpc3QgaXMgY3JlYXRlZC5cblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHQvLyBjb25zdCBlbGVtZW50ID0gbGlzdEFycmF5W2ldLnRpdGxlO1xuXHRcdFx0XHRcdGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cdFx0XHRcdFx0b3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGxpc3RBcnJheVtpXS50aXRsZSk7XG5cdFx0XHRcdFx0b3B0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlzdC12YWx1ZVwiKTtcblx0XHRcdFx0XHRvcHRpb24udGV4dENvbnRlbnQgPVxuXHRcdFx0XHRcdFx0bGlzdEFycmF5W2ldLnRpdGxlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICtcblx0XHRcdFx0XHRcdGxpc3RBcnJheVtpXS50aXRsZS5zbGljZSgxKTtcblx0XHRcdFx0XHRzZWxlY3QuYXBwZW5kKG9wdGlvbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly9PTiBTVUJNSVQgRVZFTlQgRlVOQ1xuXHRcdGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRzdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcblx0XHRzdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJTdWJtaXRcIik7XG5cdFx0c3VibWl0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1mb3JtLWJ0blwiKTtcblx0XHRmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cdFx0bGV0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1mb3JtLWJ0blwiKTtcblx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0c3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRkYXRhQ29uZC5pbnNlcnRUb2RvSW50b0xpc3QoKTtcblx0XHRcdC8vIHNlbGYuZGlzcGxheVRvZG9BbW91bnQoKTtcblx0XHRcdGRhdGFDb25kLnRvZG9FZGl0QnV0dG9uTGlzdGVuZXIoKTtcblx0XHRcdC8vIGdyYWJzIHRoZSBzZWxlY3RlZCBsaXN0IGluIHRoZSBvcHRpb25zIGluIHRoZSBmb3JtXG5cblx0XHRcdC8vIGxldCBjb2xsZWN0aW9uID0gbGlzdHMuc2VsZWN0ZWRPcHRpb25zO1xuXG5cdFx0XHRjb25zdCBjdXJyZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcdFwiLmhlYWRlcl9fbGlzdC10aXRsZVwiXG5cdFx0XHQpLnRleHRDb250ZW50O1xuXG5cdFx0XHRjb25zdCBzZWxlY3RlZExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RcIikudmFsdWU7XG5cblx0XHRcdGlmIChzZWxlY3RlZExpc3QgPT09IGN1cnJlbnRMaXN0KSB7XG5cdFx0XHRcdHNlbGYuY2xlYXJUb2RvVmlldygpO1xuXHRcdFx0XHRzZWxmLmRpc3BsYXlUb2RvKCk7XG5cdFx0XHRcdHNlbGYuZWRpdEZvcm1Nb2RhbCgpO1xuXHRcdFx0XHRkYXRhQ29uZC50b2RvRWRpdEJ1dHRvbkxpc3RlbmVyKCk7XG5cdFx0XHRcdC8vIGRhdGFDb25kLnJlbW92ZVRvZG8oKTtcblx0XHRcdFx0c2VsZi5mb3JtUmVzZXQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNlbGYuZm9ybVJlc2V0KCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblx0ZWRpdEZvcm0oKSB7XG5cdFx0bGV0IGlucHV0QXJyYXkgPSBbXCJ0aXRsZVwiLCBcImRlc2NyaXB0aW9uXCIsIFwiZHVlRGF0ZVwiLCBcInByaW9yaXR5XCIsIFwibGlzdFwiXTtcblxuXHRcdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblx0XHRmb3JtLnNldEF0dHJpYnV0ZShcIm9uc3VibWl0XCIsIFwicmV0dXJuIGZhbHNlXCIpO1xuXHRcdGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0LWZvcm1cIik7XG5cdFx0Y29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1tb2RhbC1jb250ZW50XCIpO1xuXHRcdGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LWNsb3NlXCIpO1xuXHRcdHRvZG9Db250YWluZXIuaW5zZXJ0QmVmb3JlKGZvcm0sIGNsb3NlQnV0dG9uKTtcblx0XHQvL2VhY2ggZWxlbWVudCBkaXNwbGF5cyBkaWZmZXJlbnQgaW5wdXRzIGJhc2VkIG9uIHRoZWlyIG5lZWRlZCBkYXRhLlxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRBcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgZWxlbWVudCA9IGlucHV0QXJyYXlbaV07XG5cdFx0XHRpZiAoZWxlbWVudCA9PT0gXCJ0aXRsZVwiKSB7XG5cdFx0XHRcdGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZWRpdC10aXRsZVwiKTtcblx0XHRcdFx0bGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlOlwiO1xuXHRcdFx0XHRsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXQtdGl0bGVcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJlZGl0LXRpdGxlXCIpO1xuXG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuXHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblx0XHRcdH1cblx0XHRcdGlmIChlbGVtZW50ID09PSBcImRlc2NyaXB0aW9uXCIpIHtcblx0XHRcdFx0bGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJlZGl0LWRlc2NyaXB0aW9uXCIpO1xuXHRcdFx0XHRsYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCI7XG5cdFx0XHRcdGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdC1kZXNjcmlwdGlvblwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImVkaXQtZGVzY3JpcHRpb25cIik7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuXHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblx0XHRcdH1cblx0XHRcdGlmIChlbGVtZW50ID09PSBcImR1ZURhdGVcIikge1xuXHRcdFx0XHRsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImVkaXQtZHVlLWRhdGVcIik7XG5cdFx0XHRcdGxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTpcIjtcblx0XHRcdFx0bGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0LWR1ZS1kYXRlXCIpO1xuXHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZWRpdC1kdWUtZGF0ZVwiKTtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXHRcdFx0fVxuXHRcdFx0Ly9jaGFuZ2UgdGhpcyB0byByYWRpbyB3aXRoIDMgcHJpb3JpdHkgb3B0aW9ucyBsb3cgbWVkIGhpZ2hcblx0XHRcdGlmIChlbGVtZW50ID09PSBcInByaW9yaXR5XCIpIHtcblx0XHRcdFx0bGV0IGFycmF5ID0gW1wibG93XCIsIFwibWVkXCIsIFwiaGlnaFwiXTtcblx0XHRcdFx0bGV0IGZpZWxkU2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xuXHRcdFx0XHRsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cblx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZWRpdC1wcmlvcml0eVwiKTtcblx0XHRcdFx0bGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIjtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cdFx0XHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdFx0XHRjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG5cdFx0XHRcdFx0bGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRcdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBlbGVtZW50KTtcblx0XHRcdFx0XHRsYWJlbC50ZXh0Q29udGVudCA9IGVsZW1lbnQ7XG5cblx0XHRcdFx0XHRsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdFx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuXHRcdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGBlZGl0LSR7ZWxlbWVudH1gKTtcblx0XHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBlbGVtZW50KTtcblx0XHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZWRpdC1wcmlvcml0eVwiKTtcblx0XHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGZpZWxkU2V0KTtcblx0XHRcdFx0XHRmaWVsZFNldC5hcHBlbmRDaGlsZChpbnB1dCk7XG5cdFx0XHRcdFx0ZmllbGRTZXQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZWxlbWVudCA9PT0gXCJsaXN0XCIpIHtcblx0XHRcdFx0bGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJMaXN0XCIpO1xuXHRcdFx0XHRsYWJlbC50ZXh0Q29udGVudCA9IFwiTGlzdDpcIjtcblx0XHRcdFx0bGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5cdFx0XHRcdHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXQtbGlzdFwiKTtcblx0XHRcdFx0c2VsZWN0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJsaXN0XCIpO1xuXHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChzZWxlY3QpO1xuXG5cdFx0XHRcdGNvbnN0IGVkaXRMaXN0T3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1saXN0XCIpO1xuXHRcdFx0XHRlZGl0TGlzdE9wdGlvbnMuaW5uZXJIVE1MID0gXCJcIjtcblxuXHRcdFx0XHQvL1VwZGF0ZXMgb3B0aW9ucyBvbiBmb3JtIHdoZW4gbmV3IGxpc3QgaXMgY3JlYXRlZC5cblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHQvLyBjb25zdCBlbGVtZW50ID0gbGlzdEFycmF5W2ldLnRpdGxlO1xuXHRcdFx0XHRcdGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cdFx0XHRcdFx0b3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGxpc3RBcnJheVtpXS50aXRsZSk7XG5cdFx0XHRcdFx0b3B0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlzdC12YWx1ZVwiKTtcblx0XHRcdFx0XHRvcHRpb24udGV4dENvbnRlbnQgPVxuXHRcdFx0XHRcdFx0bGlzdEFycmF5W2ldLnRpdGxlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICtcblx0XHRcdFx0XHRcdGxpc3RBcnJheVtpXS50aXRsZS5zbGljZSgxKTtcblx0XHRcdFx0XHRzZWxlY3QuYXBwZW5kKG9wdGlvbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRlZGl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG5cdFx0ZWRpdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIk1ha2UgQ2hhbmdlc1wiKTtcblx0XHRlZGl0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdC1mb3JtLWJ0blwiKTtcblx0XHRmb3JtLmFwcGVuZENoaWxkKGVkaXQpO1xuXHRcdC8vTWFrZSBDaGFuZ2VzIEVWRU5UIEZVTkNcblx0XHRjb25zdCBtYWtlQ2hhbmdlc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1mb3JtLWJ0blwiKTtcblx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0bWFrZUNoYW5nZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdHNlbGYuZWRpdEZvcm1Nb2RhbCgpO1xuXHRcdH0pO1xuXHR9XG5cdC8vU2hvd3MgdG9kbyBkYXRhIG9uIGVkaXQgZm9ybVxuXHRzZWxlY3RlZFRvZG9FZGl0KHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvKSB7XG5cdFx0Y29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10aXRsZVwiKTtcblx0XHRjb25zdCBkZXNjSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtZGVzY3JpcHRpb25cIik7XG5cdFx0Y29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LWR1ZS1kYXRlXCIpO1xuXHRcdGNvbnN0IHByaW9Mb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtbG93XCIpO1xuXHRcdGNvbnN0IHByaW9NZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtbWVkXCIpO1xuXHRcdGNvbnN0IHByaW9IaWdoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LWhpZ2hcIik7XG5cblx0XHR0aXRsZUlucHV0LnZhbHVlID0gdGl0bGU7XG5cdFx0ZGVzY0lucHV0LnZhbHVlID0gZGVzYztcblx0XHRkdWVEYXRlSW5wdXQudmFsdWUgPSBkdWVEYXRlO1xuXG5cdFx0aWYgKHByaW8gPT09IFwibG93XCIpIHtcblx0XHRcdHByaW9Mb3cuY2hlY2tlZCA9IHRydWU7XG5cdFx0fSBlbHNlIGlmIChwcmlvID09PSBcIm1lZFwiKSB7XG5cdFx0XHRwcmlvTWVkLmNoZWNrZWQgPSB0cnVlO1xuXHRcdH0gZWxzZSBpZiAocHJpbyA9PT0gXCJoaWdoXCIpIHtcblx0XHRcdHByaW9IaWdoLmNoZWNrZWQgPSB0cnVlO1xuXHRcdH1cblx0XHQvLyBkdWVEYXRlSW5wdXRcblx0fVxuXG5cdGxpc3RGb3JtKCkge1xuXHRcdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblx0XHRmb3JtLnNldEF0dHJpYnV0ZShcIm9uc3VibWl0XCIsIFwicmV0dXJuIGZhbHNlXCIpO1xuXHRcdGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaXN0LWZvcm1cIik7XG5cdFx0Y29uc3QgbGlzdFZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1saXN0XCIpO1xuXHRcdGxpc3RWaWV3LmFwcGVuZENoaWxkKGZvcm0pO1xuXG5cdFx0bGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRcdGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5ldy1saXN0XCIpO1xuXHRcdGxhYmVsLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJuZXctbGlzdFwiKTtcblx0XHRsYWJlbC50ZXh0Q29udGVudCA9IFwiQWRkIExpc3Q6XCI7XG5cdFx0bGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXHRcdGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3LWxpc3RcIik7XG5cdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5ldy1saXN0XCIpO1xuXHRcdGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuXHRcdGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG5cdFx0Y29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuXHRcdHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlN1Ym1pdFwiKTtcblx0XHRzdWJtaXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaXN0LWZvcm0tYnRuXCIpO1xuXHRcdGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblx0fVxuXG5cdGZvcm1SZXNldCgpIHtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZm9ybVwiKS5yZXNldCgpO1xuXHR9XG5cdC8vIGVkaXRGb3JtUmVzZXQoKSB7XG5cdC8vIFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWZvcm1cIikucmVzZXQoKTtcblx0Ly8gfVxuXG5cdGRpc3BsYXlMaXN0QnV0dG9ucygpIHtcblx0XHQvLyBkYXRhQ29uZC5yZW1vdmVUb2RvKCk7XG5cdFx0Ly9EaXNwbGF5cyBkZWZhdWx0IENhcHR1cmUgbGlzdCBpbiBsaXN0IHZpZXcuXG5cdFx0Y29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdF9fY29udGFpbmVyXCIpO1xuXHRcdFxuXHRcdGNvbnN0IGluaXRpYWxMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LW9wdGlvblwiKTtcblx0XHQvL2NyZWF0ZXMgZGVmYXVsdCBsaXN0IGlmIGl0IGlzIG5vdCB0aGVyZS5cblx0XHRpZiAoaW5pdGlhbExpc3QgPT0gbnVsbCkge1xuXHRcdFx0Y29uc3QgY2FwdHVyZUxpc3QgPSBsaXN0QXJyYXlbMF0udGl0bGU7XG5cdFx0XHRjb25zdCBsaXN0QnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGxpc3RCdG5Db250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaXN0LWJ1dHRvbnNcIik7XG5cdFx0XHRcblx0XHRcdGNvbnN0IGRlZmF1bHRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRcdC8vY3JlYXRlIGNvbnRhaW5lciBmb3IgbGlzdCBhbmQgaXRzIGRlbGV0ZSBidXR0b24uXG5cdFx0XHRcblx0XHRcdGNvbnN0IGxpc3REZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdFx0bGlzdERlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlIExpc3RcIjtcblx0XHRcdGxpc3REZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaXN0LWRlbGV0ZS1idG5cIik7XG5cdFx0XHRcblx0XHRcdGRlZmF1bHRMaXN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlzdC1vcHRpb25cIik7XG5cdFx0XHRkZWZhdWx0TGlzdC50ZXh0Q29udGVudCA9IGNhcHR1cmVMaXN0O1xuXHRcdFx0XG5cdFx0XHRsaXN0QnRuQ29udGFpbmVyLmFwcGVuZChkZWZhdWx0TGlzdCk7XG5cdFx0XHRsaXN0QnRuQ29udGFpbmVyLmFwcGVuZChsaXN0RGVsZXRlQnV0dG9uKTtcblx0XHRcdGxpc3RDb250YWluZXIuYXBwZW5kKGxpc3RCdG5Db250YWluZXIpO1xuXHRcdFx0XG5cdFx0XHRkZWZhdWx0TGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdFx0dGhpcy5jbGVhclRvZG9WaWV3KCk7XG5cdFx0XHRcdHRoaXMuZGlzcGxheVNlbGVjdGVkTGlzdChlKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHQvL2NyZWF0ZXMgbGlzdHMgYnV0dG9ucyBpZiB0aGVyZSBhcmUgbGlzdCBvbiBsb2NhbCBzdG9yYWdlLlxuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgbGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBsaXN0TmFtZSA9IGxpc3RBcnJheVtpXS50aXRsZTtcblx0XHRcdFxuXHRcdFx0Y29uc3QgaW5wdXRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRcdGlucHV0TGlzdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpc3Qtb3B0aW9uXCIpO1xuXHRcdFx0aW5wdXRMaXN0LnRleHRDb250ZW50ID0gbGlzdE5hbWU7XG5cdFx0XHRcblx0XHRcdGNvbnN0IGxpc3RCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0bGlzdEJ0bkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpc3QtYnV0dG9uc1wiKTtcblx0XHRcdFxuXHRcdFx0bGlzdENvbnRhaW5lci5hcHBlbmQobGlzdEJ0bkNvbnRhaW5lcik7XG5cdFx0XHRsaXN0QnRuQ29udGFpbmVyLmFwcGVuZChpbnB1dExpc3QpO1xuXHRcdFx0XG5cdFx0XHQvL2FkZHMgZGVsZXRlIGJ1dHRvbiB0byBuZXdseSBjcmVhdGVkIGxpc3Rcblx0XHRcdGNvbnN0IGxpc3REZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdFx0bGlzdERlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlIExpc3RcIjtcblx0XHRcdGxpc3REZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaXN0LWRlbGV0ZS1idG5cIik7XG5cdFx0XHRcblx0XHRcdGxpc3RCdG5Db250YWluZXIuYXBwZW5kKGxpc3REZWxldGVCdXR0b24pO1xuXHRcdH1cblx0XHRcblx0XHQvL0FkZHMgZXZlbnQgbGlzdGVuZXJzIHRvIGxpc3QgYnV0dG9ucyBwdWxsZWQgZm9yIGxvY2FsIHN0b3JhZ2Vcblx0XHRjb25zdCBsb2NhbExpc3RPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0LW9wdGlvblwiKTtcblx0XHRcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbG9jYWxMaXN0T3B0aW9ucy5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdGNvbnN0IGVsZW1lbnQgPSBsb2NhbExpc3RPcHRpb25zW2luZGV4XTtcblx0XHRcdFxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdFx0dGhpcy5jbGVhclRvZG9WaWV3KCk7XG5cdFx0XHRcdHRoaXMuZGlzcGxheVNlbGVjdGVkTGlzdChlKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXHRBZGRFdmVudExpc3RlbmVyVG9MaXN0U3VibWl0KCkge1xuXHRcdGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RfX2NvbnRhaW5lclwiKTtcblx0XHQvL0FkZHMgZXZlbnQgbGlzdGVuZXJzIHRvIG5ld2x5IGNyZWF0ZWQgbGlzdC5cblx0XHRjb25zdCBsaXN0U3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0LWZvcm0tYnRuXCIpO1xuXHRcdGxpc3RTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdGxldCBsaXN0QXJyYXlMZW4gPSBsaXN0QXJyYXkubGVuZ3RoO1xuXHRcdFx0bGV0IG5ld0xpc3QgPSBsaXN0QXJyYXlbbGlzdEFycmF5TGVuIC0gMV0udGl0bGU7XG5cdFx0XHRjb25zdCBpbnB1dExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdFx0aW5wdXRMaXN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlzdC1vcHRpb25cIik7XG5cdFx0XHRpbnB1dExpc3QudGV4dENvbnRlbnQgPSBuZXdMaXN0O1xuXHRcdFx0Y29uc3QgbGlzdEJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRsaXN0QnRuQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlzdC1idXR0b25zXCIpO1xuXHRcdFx0XG5cdFx0XHRsaXN0Q29udGFpbmVyLmFwcGVuZChsaXN0QnRuQ29udGFpbmVyKTtcblx0XHRcdGxpc3RCdG5Db250YWluZXIuYXBwZW5kKGlucHV0TGlzdCk7XG5cdFx0XHRcblx0XHRcdC8vYWRkcyBkZWxldGUgYnV0dG9uIHRvIG5ld2x5IGNyZWF0ZWQgbGlzdFxuXHRcdFx0Y29uc3QgbGlzdERlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFx0XHRsaXN0RGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGUgTGlzdFwiO1xuXHRcdFx0bGlzdERlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpc3QtZGVsZXRlLWJ0blwiKTtcblx0XHRcdFxuXHRcdFx0bGlzdEJ0bkNvbnRhaW5lci5hcHBlbmQobGlzdERlbGV0ZUJ1dHRvbik7XG5cdFx0XHR0aGlzLnJlbW92ZURlbGV0ZUxpc3RMaXN0ZW5lcigpO1xuXHRcdFx0dGhpcy5hZGREZWxldGVMaXN0TGlzdGVuZXIoKTtcblx0XHRcdFxuXHRcdFx0c2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG5cdFx0XHRjb25zb2xlLmxvZyhsaXN0QXJyYXkpO1xuXHRcdFx0XG5cdFx0XHQvL0FkZGluZyBldmVudCBsaXN0ZW5lciB0byBlYWNoIGxpc3QgYnV0dG9uIHRoYXQgd2lsbCBydW4gdG8gZGlzcGxheSB0b2RvcyB3aGVuIGNsaWNrZWQuXG5cdFx0XHRjb25zdCBsaXN0T3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdC1vcHRpb25cIik7XG5cdFx0XHRcblx0XHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaXN0T3B0aW9ucy5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdFx0Y29uc3QgZWxlbWVudCA9IGxpc3RPcHRpb25zW2luZGV4XTtcblx0XHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdFx0XHR0aGlzLmNsZWFyVG9kb1ZpZXcoKTtcblx0XHRcdFx0XHR0aGlzLmRpc3BsYXlTZWxlY3RlZExpc3QoZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cdFxuXHRkaXNwbGF5U2VsZWN0ZWRMaXN0KGUpIHtcblx0XHRsZXQgZGF0YUNvbmQgPSBuZXcgQ29uZHVjdG9yKCk7XG5cdFx0Ly90aGUgbGlzdCB0aGF0IHdhcyBjbGlja2VkLlxuXHRcdFxuXHRcdHRoaXMuc2VsZWN0ZWRMaXN0ID0gZS50YXJnZXQuaW5uZXJUZXh0O1xuXHRcdFxuXHRcdGNvbnN0IGxpc3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19saXN0LXRpdGxlXCIpO1xuXHRcdGxpc3RUaXRsZS50ZXh0Q29udGVudCA9IHRoaXMuc2VsZWN0ZWRMaXN0O1xuXHRcdFxuXHRcdC8vIHRoaXMuZGlzcGxheVRvZG9BbW91bnQoKTtcblx0XHR0aGlzLmRpc3BsYXlUb2RvKCk7XG5cdFx0ZGF0YUNvbmQudG9kb0VkaXRCdXR0b25MaXN0ZW5lcigpO1xuXHRcdC8vIGRhdGFDb25kLnJlbW92ZVRvZG8oKTtcblx0fVxuXHRcblx0cmVtb3ZlRnJvbUFycmF5ID0gKGUpID0+IHtcblx0XHRjb25zb2xlLmxvZyhcIkRlbGV0ZSBidXR0b24gd2FzIGNsaWNrZWRcIik7XG5cdFx0Y29uc3QgdGFyZ2V0TGlzdCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG5cdFx0Y29uc29sZS5sb2codGFyZ2V0TGlzdCk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGxpc3QgPSBsaXN0QXJyYXlbaV0udGl0bGU7XG5cdFx0XHRjb25zb2xlLmxvZyhpKTtcblx0XHRcdGNvbnNvbGUubG9nKGxpc3RBcnJheSk7XG5cdFx0XHRpZiAobGlzdCA9PT0gdGFyZ2V0TGlzdCkge1xuXHRcdFx0XHRsaXN0QXJyYXkuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcInlvdSByZW1vdmVkOiBcIiArIHRhcmdldExpc3QpO1xuXHRcdFx0XHRjb25zb2xlLnRhYmxlKGxpc3RBcnJheSk7XG5cdFx0XHRcdHRoaXMuY2xlYXJMaXN0VmlldygpO1xuXHRcdFx0XHR0aGlzLmRpc3BsYXlMaXN0QnV0dG9ucygpO1xuXHRcdFx0XHR0aGlzLmFkZERlbGV0ZUxpc3RMaXN0ZW5lcigpO1xuXHRcdFx0XHRcblx0XHRcdFx0c2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0XG5cdGFkZERlbGV0ZUxpc3RMaXN0ZW5lcigpIHtcblx0XHRjb25zdCBsaXN0RGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0LWRlbGV0ZS1idG5cIik7XG5cdFx0XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0RGVsZXRlQnRuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHQvL29uIGNsaWNrIGRlbGV0ZSB0aGUgbGlzdCBmcm9tIHRoZSB2aWV3XG5cdFx0XHQvL2RlbGV0ZSB0aGUgbGlzdCBmcm9tIHRoZSBsaXN0QXJyYXkgb2JqZWN0XG5cdFx0XHQvL3VwZGF0ZSB0aGUgdmlld1xuXHRcdFx0Ly91cGRhdGUgdGhlIGxvY2FsU3RvcmFnZSB3aXRoIHJlbW92ZWQgZGF0YS5cblx0XHRcdGxldCBkZWxldGVCdG5FbGVtZW50ID0gbGlzdERlbGV0ZUJ0bltpXTtcblx0XHRcdFxuXHRcdFx0ZGVsZXRlQnRuRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5yZW1vdmVGcm9tQXJyYXkpO1xuXHRcdH1cblx0fVxuXHRcblx0cmVtb3ZlRGVsZXRlTGlzdExpc3RlbmVyKCkge1xuXHRcdGNvbnN0IGxpc3REZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3QtZGVsZXRlLWJ0blwiKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdERlbGV0ZUJ0bi5sZW5ndGg7IGkrKykge1xuXHRcdFx0Ly9vbiBjbGljayBkZWxldGUgdGhlIGxpc3QgZnJvbSB0aGUgdmlld1xuXHRcdFx0Ly9kZWxldGUgdGhlIGxpc3QgZnJvbSB0aGUgbGlzdEFycmF5IG9iamVjdFxuXHRcdFx0Ly91cGRhdGUgdGhlIHZpZXdcblx0XHRcdC8vdXBkYXRlIHRoZSBsb2NhbFN0b3JhZ2Ugd2l0aCByZW1vdmVkIGRhdGEuXG5cdFx0XHRsZXQgZGVsZXRlQnRuRWxlbWVudCA9IGxpc3REZWxldGVCdG5baV07XG5cdFx0XHRkZWxldGVCdG5FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnJlbW92ZUZyb21BcnJheSk7XG5cdFx0fVxuXHR9XG5cdFxuXHRkaXNwbGF5VG9kbygpIHtcblx0XHRjb25zdCBjdXJyZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcIi5oZWFkZXJfX2xpc3QtdGl0bGVcIlxuXHRcdFx0KS50ZXh0Q29udGVudDtcblx0XHRcdGNvbnN0IHRvZG9WaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXZpZXdcIik7XG5cdFx0XHRcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdC8vbGlzdFRpdGxlIGlzIGJlaW5nIHVzZWQgdG8gaG9sZCB2YWx1ZSBvZiB0aGUgbGlzdCB0aXRsZSB0byBjaGVjayBpZiBpdCBtYXRjaGVzIHRoZSBzZWxlY3RlZCBsaXN0LlxuXHRcdFx0XHRsZXQgbGlzdFRpdGxlID0gbGlzdEFycmF5W2ldLnRpdGxlO1xuXHRcdFx0XHRsZXQgdGhpc0xpc3QgPSBsaXN0QXJyYXlbaV07XG5cdFx0XHRcdGxldCBsaXN0VG9kb0xlbiA9IGxpc3RBcnJheVtpXS50b2Rvcy5sZW5ndGg7XG5cdFx0XHRcdFxuXHRcdFx0XHQvLyBjb25zdCBzZWxlY3RlZExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RcIikudmFsdWU7XG5cdFx0XHRcdGlmIChjdXJyZW50TGlzdCA9PT0gbGlzdFRpdGxlICYmIGxpc3RUb2RvTGVuID4gMCkge1xuXHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGxpc3RUb2RvTGVuOyBqKyspIHtcblx0XHRcdFx0XHQvLyBjb25zdCBlbGVtZW50ID0gbGlzdEFycmF5LnRvZG9zW2luZGV4XTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0XHRjb25zdCB0b2RvVG9wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0XHRjb25zdCB0b2RvQm90RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblx0XHRcdFx0XHRjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRcdFx0XHRcdGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0XHRcdFx0XHRjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRcdFx0XHRcdGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdFx0XHRcdGNvbnN0IGRlbGV0ZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHRpdGxlLnRleHRDb250ZW50ID0gdGhpc0xpc3QudG9kb3Nbal0udGl0bGU7XG5cdFx0XHRcdFx0ZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0aGlzTGlzdC50b2Rvc1tqXS5kZXNjcmlwdGlvbjtcblx0XHRcdFx0XHRkdWVEYXRlLnRleHRDb250ZW50ID0gdGhpc0xpc3QudG9kb3Nbal0uZHVlRGF0ZTtcblx0XHRcdFx0XHRwcmlvcml0eS50ZXh0Q29udGVudCA9IHRoaXNMaXN0LnRvZG9zW2pdLnByaW9yaXR5O1xuXHRcdFx0XHRcdGVkaXQudGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcblx0XHRcdFx0XHRkZWxldGVUb2RvLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblx0XHRcdFx0XHQvLyBDb250YWluZXIgQXR0cmlidXRlc1xuXHRcdFx0XHRcdHRvZG9Db250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLW9ialwiKTtcblx0XHRcdFx0XHR0b2RvVG9wRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby10b3AtZGl2XCIpO1xuXHRcdFx0XHRcdHRvZG9Cb3REaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLWJvdC1kaXZcIik7XG5cdFx0XHRcdFx0Ly9FbGVtZW50IEF0dHJpYnV0ZXNcblx0XHRcdFx0XHR0aXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8taXRlbXMgdG9kby10aXRsZVwiKTtcblx0XHRcdFx0XHRkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8taXRlbXMgdG9kby1kZXNjXCIpO1xuXHRcdFx0XHRcdGR1ZURhdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLWl0ZW1zIHRvZG8tZHVlZGF0ZVwiKTtcblx0XHRcdFx0XHRwcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8taXRlbXMgdG9kby1wcmlvcml0eVwiKTtcblx0XHRcdFx0XHRlZGl0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1pdGVtcyB0b2RvLWVkaXRcIik7XG5cdFx0XHRcdFx0ZGVsZXRlVG9kby5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8taXRlbXMgdG9kby1kZWxldGVcIik7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dG9kb1RvcERpdi5hcHBlbmQodGl0bGUpO1xuXHRcdFx0XHRcdHRvZG9Ub3BEaXYuYXBwZW5kKHByaW9yaXR5KTtcblx0XHRcdFx0XHR0b2RvQm90RGl2LmFwcGVuZChkdWVEYXRlKTtcblx0XHRcdFx0XHR0b2RvQm90RGl2LmFwcGVuZChkZXNjcmlwdGlvbik7XG5cdFx0XHRcdFx0dG9kb0JvdERpdi5hcHBlbmQoZWRpdCk7XG5cdFx0XHRcdFx0dG9kb0JvdERpdi5hcHBlbmQoZGVsZXRlVG9kbyk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb1RvcERpdik7XG5cdFx0XHRcdFx0dG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb0JvdERpdik7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dG9kb1ZpZXcuYXBwZW5kKHRvZG9Db250YWluZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHQgICAgZGF0YUNvbmQucmVtb3ZlVG9kbygpO1xuXHRcdHRoaXMuZGlzcGxheVRvZG9BbW91bnQoKTtcblx0fVxuXHRcblx0Ly9DaGFuZ2VzIG51bWJlciBhbW91bnQgb2YgdG9kb3MuXG5cdGRpc3BsYXlUb2RvQW1vdW50KCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBsaXN0VGl0bGUgPSBsaXN0QXJyYXlbaV0udGl0bGU7XG5cdFx0XHRjb25zdCBsaXN0VG9kb0xlbiA9IGxpc3RBcnJheVtpXS50b2Rvcy5sZW5ndGg7XG5cdFx0XHRcblx0XHRcdGlmIChsaXN0VGl0bGUgPT09IHRoaXMuc2VsZWN0ZWRMaXN0KSB7XG5cdFx0XHRcdGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlcl9fdG9kby1hbW91bnRcIik7XG5cdFx0XHRcdGNvdW50ZXIudGV4dENvbnRlbnQgPSBsaXN0VG9kb0xlbjtcblx0XHRcdH1cblx0XHRcdC8vV2lsbCB1cGRhdGUgY291bnRlciBldmVuIGlmIGxpc3Rub2RlIGlzIG5vdCBzZWxlY3RlZC5cblx0XHRcdGxldCBkZWZhdWx0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcdFwiLmhlYWRlcl9fbGlzdC10aXRsZVwiXG5cdFx0XHRcdCkudGV4dENvbnRlbnQ7XG5cdFx0XHRcdGlmIChsaXN0VGl0bGUgPT09IGRlZmF1bHRMaXN0KSB7XG5cdFx0XHRcdGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlcl9fdG9kby1hbW91bnRcIik7XG5cdFx0XHRcdGNvdW50ZXIudGV4dENvbnRlbnQgPSBsaXN0VG9kb0xlbjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cdGNsZWFyVG9kb1ZpZXcoKSB7XG5cdFx0Y29uc3QgdG9kb1ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tdmlld1wiKTtcblx0XHR0b2RvVmlldy5pbm5lckhUTUwgPSBcIlwiO1xuXHR9XG5cblx0Y2xlYXJMaXN0VmlldygpIHtcblx0XHRjb25zdCBsaXN0VmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdF9fY29udGFpbmVyXCIpO1xuXHRcdGxpc3RWaWV3LmlubmVySFRNTCA9IFwiXCI7XG5cdH1cblx0XG5cdHRvZG9Gb3JtTW9kYWwoKSB7XG5cdFx0bGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsXCIpO1xuXG5cdFx0Ly8gR2V0IHRoZSBidXR0b24gdGhhdCBvcGVucyB0aGUgbW9kYWxcblx0XHRsZXQgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWZvcm0tbW9kYWxcIik7XG5cdFx0XG5cdFx0Ly8gR2V0IHRoZSA8c3Bhbj4gZWxlbWVudCB0aGF0IGNsb3NlcyB0aGUgbW9kYWxcblx0XHRsZXQgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKVswXTtcblxuXHRcdC8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIHRoZSBidXR0b24sIG9wZW4gdGhlIG1vZGFsXG5cdFx0YnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdH07XG5cdFx0XG5cdFx0Ly8gV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gPHNwYW4+ICh4KSwgY2xvc2UgdGhlIG1vZGFsXG5cdFx0c3Bhbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdH07XG5cdFx0XG5cdFx0Ly8gV2hlbiB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZSB0aGUgbW9kYWwsIGNsb3NlIGl0XG5cdFx0d2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsKSB7XG5cdFx0XHRcdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cdGVkaXRGb3JtTW9kYWwoKSB7XG5cdFx0bGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LW1vZGFsXCIpO1xuXHRcdFxuXHRcdC8vIEdldCB0aGUgYnV0dG9uIHRoYXQgb3BlbnMgdGhlIG1vZGFsXG5cdFx0bGV0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1lZGl0XCIpO1xuXHRcdFxuXHRcdC8vIEdldCB0aGUgPHNwYW4+IGVsZW1lbnQgdGhhdCBjbG9zZXMgdGhlIG1vZGFsXG5cdFx0bGV0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZWRpdC1jbG9zZVwiKVswXTtcblx0XHRcblx0XHQvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyB0aGUgYnV0dG9uLCBvcGVuIHRoZSBtb2RhbFxuXHRcdGJ0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHR9O1xuXHRcdFxuXHRcdC8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIDxzcGFuPiAoeCksIGNsb3NlIHRoZSBtb2RhbFxuXHRcdHNwYW4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHR9O1xuXHRcdFxuXHRcdC8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIGFueXdoZXJlIG91dHNpZGUgb2YgdGhlIG1vZGFsLCBjbG9zZSBpdFxuXHRcdC8vIXRvZG8gQnVnIHVuYWJsZSB0byBleGl0IGVkaXQgc2luY2UgdGhpcyBmdW5jIGlzIG5vdCBsaXN0ZW5pbmcgd2hlbiBpbiBhbm90aGVyIGxpc3Rcblx0XHR3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0aWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWwpIHtcblx0XHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblx0XG5cdGRpc3BsYXlBbGxUYXNrcygpIHtcblx0XHRjb25zdCBhbGxUYXNrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsLXRhc2tzXCIpO1xuXHRcdGFsbFRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHQvLyBjbGVhciB0b2RvIHZpZXcgdGl0bGUgYW5kIGFjaGFuZ2UgdG8gQWxsIFRhc2tzXG5cdFx0XHRjb25zdCB0b2RvVmlld0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19saXN0LXRpdGxlXCIpO1xuXHRcdFx0XG5cdFx0XHR0b2RvVmlld0hlYWRlci50ZXh0Q29udGVudCA9IFwiQWxsIFRhc2tzXCI7XG5cdFx0XHRcblx0XHRcdGNvbnN0IGhlYWRlckNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlcl9fdG9kby1hbW91bnRcIik7XG5cdFx0XHRcblx0XHRcdGxldCBjb3VudEhvbGRlciA9IDA7XG5cdFx0XHRcblx0XHRcdC8vVXBkYXRlcyB0aGUgaGVhZGVyIGNvdW50ZXIgd2l0aCBhbW91bnQgb2YgYWxsIHRvZG9zIGluIGFsbCBsaXN0cy5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IGxpc3RUb2Rvc0xlbiA9IGxpc3RBcnJheVtpXS50b2Rvcy5sZW5ndGg7XG5cdFx0XHRcdGNvdW50SG9sZGVyICs9IGxpc3RUb2Rvc0xlbjtcblx0XHRcdFx0aGVhZGVyQ291bnRlci50ZXh0Q29udGVudCA9IGNvdW50SG9sZGVyO1xuXHRcdFx0fVxuXHRcdFx0Ly8gY2xlYXIgYW5kIHVwZGF0ZSB0b2RvIHZpZXcgd2l0aCBhbGwgdGFza3Ncblx0XHRcdGNvbnN0IHRvZG9WaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXZpZXdcIik7XG5cdFx0XHR0b2RvVmlldy5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdFx0XG5cdFx0XHQvL1VwZGF0ZSB0b2RvIHZpZXcgd2l0aCBhbGwgdG9kb3Ncblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdC8vbGlzdFRpdGxlIGlzIGJlaW5nIHVzZWQgdG8gaG9sZCB2YWx1ZSBvZiB0aGUgbGlzdCB0aXRsZSB0byBjaGVjayBpZiBpdCBtYXRjaGVzIHRoZSBzZWxlY3RlZCBsaXN0LlxuXHRcdFx0XHRcblx0XHRcdFx0bGV0IHRoaXNMaXN0ID0gbGlzdEFycmF5W2ldO1xuXHRcdFx0XHRsZXQgbGlzdFRvZG9MZW4gPSBsaXN0QXJyYXlbaV0udG9kb3MubGVuZ3RoO1xuXHRcdFx0XHRcblx0XHRcdFx0Ly9DeWNsZXMgdGhyb3VnaCBlYWNoIHRvZG8gYW5kIGFwcGVuZHMgdGhlbSBpbnRvIHRoZSB0b2RvLXZpZXdcblx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBsaXN0VG9kb0xlbjsgaisrKSB7XG5cdFx0XHRcdFx0Y29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdFx0Y29uc3QgdG9kb1RvcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdFx0Y29uc3QgdG9kb0JvdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cblx0XHRcdFx0XHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblx0XHRcdFx0XHRjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRcdFx0XHRcdGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0XHRcdFx0XHRjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRcdFx0XHRcdC8vIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdFx0XHRcdC8vIGNvbnN0IGRlbGV0ZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHRpdGxlLnRleHRDb250ZW50ID0gdGhpc0xpc3QudG9kb3Nbal0udGl0bGU7XG5cdFx0XHRcdFx0ZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0aGlzTGlzdC50b2Rvc1tqXS5kZXNjcmlwdGlvbjtcblx0XHRcdFx0XHRkdWVEYXRlLnRleHRDb250ZW50ID0gdGhpc0xpc3QudG9kb3Nbal0uZHVlRGF0ZTtcblx0XHRcdFx0XHRwcmlvcml0eS50ZXh0Q29udGVudCA9IHRoaXNMaXN0LnRvZG9zW2pdLnByaW9yaXR5O1xuXHRcdFx0XHRcdC8vIC8vIGVkaXQudGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcblx0XHRcdFx0XHQvLyBkZWxldGVUb2RvLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblx0XHRcdFx0XHQvLyBDb250YWluZXIgQXR0cmlidXRlc1xuXHRcdFx0XHRcdHRvZG9Db250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLW9ialwiKTtcblx0XHRcdFx0XHR0b2RvVG9wRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby10b3AtZGl2XCIpO1xuXHRcdFx0XHRcdHRvZG9Cb3REaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLWJvdC1kaXZcIik7XG5cdFx0XHRcdFx0Ly9FbGVtZW50IEF0dHJpYnV0ZXNcblx0XHRcdFx0XHR0aXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8taXRlbXMgdG9kby10aXRsZVwiKTtcblx0XHRcdFx0XHRkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8taXRlbXMgdG9kby1kZXNjXCIpO1xuXHRcdFx0XHRcdGR1ZURhdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLWl0ZW1zIHRvZG8tZHVlZGF0ZVwiKTtcblx0XHRcdFx0XHRwcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8taXRlbXMgdG9kby1wcmlvcml0eVwiKTtcblx0XHRcdFx0XHQvLyAvLyBlZGl0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1pdGVtcyB0b2RvLWVkaXRcIik7XG5cdFx0XHRcdFx0Ly8gZGVsZXRlVG9kby5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8taXRlbXMgdG9kby1kZWxldGVcIik7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dG9kb1RvcERpdi5hcHBlbmQodGl0bGUpO1xuXHRcdFx0XHRcdHRvZG9Ub3BEaXYuYXBwZW5kKHByaW9yaXR5KTtcblx0XHRcdFx0XHR0b2RvQm90RGl2LmFwcGVuZChkdWVEYXRlKTtcblx0XHRcdFx0XHR0b2RvQm90RGl2LmFwcGVuZChkZXNjcmlwdGlvbik7XG5cdFx0XHRcdFx0Ly8gdG9kb0JvdERpdi5hcHBlbmQoZWRpdCk7XG5cdFx0XHRcdCAgICAvL3RvZG9Cb3REaXYuYXBwZW5kKGRlbGV0ZVRvZG8pO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9Ub3BEaXYpO1xuXHRcdFx0XHRcdHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9Cb3REaXYpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHRvZG9WaWV3LmFwcGVuZCh0b2RvQ29udGFpbmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkYXRhQ29uZC5yZW1vdmVUb2RvKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblx0XG5cdGRpc3BsYXlUb2RvVGFza3ModG9kb0FycmF5KSB7XG5cdFx0dGhpcy5jbGVhclRvZG9WaWV3KCk7XG5cdFx0XG5cdFx0Y29uc3QgdG9kb1ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tdmlld1wiKTtcblx0XHRcblx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRvZG9BcnJheS5sZW5ndGg7IGorKykge1xuXHRcdFx0Y29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRjb25zdCB0b2RvVG9wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGNvbnN0IHRvZG9Cb3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XG5cdFx0XHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblx0XHRcdGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdFx0XHRjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdFx0XHRjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRcdFx0Ly8gY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFx0XHQvLyBjb25zdCBkZWxldGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRcdFxuXHRcdFx0dGl0bGUudGV4dENvbnRlbnQgPSB0b2RvQXJyYXlbal0udGl0bGU7XG5cdFx0XHRkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG9BcnJheVtqXS5kZXNjcmlwdGlvbjtcblx0XHRcdGR1ZURhdGUudGV4dENvbnRlbnQgPSB0b2RvQXJyYXlbal0uZHVlRGF0ZTtcblx0XHRcdHByaW9yaXR5LnRleHRDb250ZW50ID0gdG9kb0FycmF5W2pdLnByaW9yaXR5O1xuXHRcdFx0Ly8gLy8gZWRpdC50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuXHRcdFx0Ly8gZGVsZXRlVG9kby50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG5cdFx0XHQvLyBDb250YWluZXIgQXR0cmlidXRlc1xuXHRcdFx0dG9kb0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8tb2JqXCIpO1xuXHRcdFx0dG9kb1RvcERpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8tdG9wLWRpdlwiKTtcblx0XHRcdHRvZG9Cb3REaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLWJvdC1kaXZcIik7XG5cdFx0XHQvL0VsZW1lbnQgQXR0cmlidXRlc1xuXHRcdFx0dGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLWl0ZW1zIHRvZG8tdGl0bGVcIik7XG5cdFx0XHRkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8taXRlbXMgdG9kby1kZXNjXCIpO1xuXHRcdFx0ZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8taXRlbXMgdG9kby1kdWVkYXRlXCIpO1xuXHRcdFx0cHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLWl0ZW1zIHRvZG8tcHJpb3JpdHlcIik7XG5cdFx0XHQvLyAvLyBlZGl0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1pdGVtcyB0b2RvLWVkaXRcIik7XG5cdFx0XHQvLyBkZWxldGVUb2RvLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1pdGVtcyB0b2RvLWRlbGV0ZVwiKTtcblx0XHRcdFxuXHRcdFx0dG9kb1RvcERpdi5hcHBlbmQodGl0bGUpO1xuXHRcdFx0dG9kb1RvcERpdi5hcHBlbmQocHJpb3JpdHkpO1xuXHRcdFx0dG9kb0JvdERpdi5hcHBlbmQoZHVlRGF0ZSk7XG5cdFx0XHR0b2RvQm90RGl2LmFwcGVuZChkZXNjcmlwdGlvbik7XG5cdFx0XHQvLyB0b2RvQm90RGl2LmFwcGVuZChlZGl0KTtcblx0XHRcdC8vIHRvZG9Cb3REaXYuYXBwZW5kKGRlbGV0ZVRvZG8pO1xuXHRcdFx0XG5cdFx0XHR0b2RvQ29udGFpbmVyLmFwcGVuZCh0b2RvVG9wRGl2KTtcblx0XHRcdHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9Cb3REaXYpO1xuXHRcdFx0XG5cdFx0XHR0b2RvVmlldy5hcHBlbmQodG9kb0NvbnRhaW5lcik7XG5cdFx0XHR0aGlzLnVwZGF0ZVRvZG9Db3VudGVyKCk7XG5cdFx0fVxuXHRcdC8vIGRhdGFDb25kLnJlbW92ZVRvZG8oKTtcblx0fVxuXHRcblx0ZGlzcGxheVVwY29taW5nVGFza3MoKSB7XG5cdFx0XG5cdFx0Y29uc3QgdXBjb21pbmdUYXNrc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBjb21pbmctdGFza3NcIik7XG5cdFx0XG5cdFx0dXBjb21pbmdUYXNrc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0bGV0IG5ld1RvZG9BcnJheSA9IFtdO1xuXHRcdFx0Ly9QdXQgdGFza3MgaW50byB0aGlzIGFycmF5IG9yZGVyZWQgYnkgbW9zdCByZWNlbnQgZGF0ZSB0byBmdXJ0aGVzdC5cblx0XHRcdFxuXHRcdFx0Ly91cGRhdGVzIHRpdGxlIHRvIFVwY29taW5nXG5cdFx0XHRjb25zdCB2aWV3VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbGlzdC10aXRsZVwiKTtcblx0XHRcdHZpZXdUaXRsZS50ZXh0Q29udGVudCA9IFwiVXBjb21pbmdcIjtcblx0XHRcdFxuXHRcdFx0Ly9DeWNsZSB0aHJvdWdoIGxpc3RzXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RBcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHQvL2xpc3RUaXRsZSBpcyBiZWluZyB1c2VkIHRvIGhvbGQgdmFsdWUgb2YgdGhlIGxpc3QgdGl0bGUgdG8gY2hlY2sgaWYgaXQgbWF0Y2hlcyB0aGUgc2VsZWN0ZWQgbGlzdC5cblx0XHRcdFx0XG5cdFx0XHRcdGxldCB0aGlzTGlzdCA9IGxpc3RBcnJheVtpXTtcblx0XHRcdFx0bGV0IGxpc3RUb2RvTGVuID0gbGlzdEFycmF5W2ldLnRvZG9zLmxlbmd0aDtcblx0XHRcdFx0XG5cdFx0XHRcdC8vQ3ljbGVzIHRocm91Z2ggZWFjaCB0b2RvIGFuZCBhcHBlbmRzIHRoZW0gaW50byB0aGUgdG9kby12aWV3IGFuZCBhZGRzIHRoZW0gaW50byBhIGFycmF5XG5cdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgbGlzdFRvZG9MZW47IGorKykge1xuXHRcdFx0XHRcdGxldCB0aGlzVG9kb09iaiA9IHRoaXNMaXN0LnRvZG9zW2pdO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGNvbnN0IHBhcnNlZERhdGUgPSBwYXJzZUlTTyhcblx0XHRcdFx0XHRcdG5ldyBEYXRlKHRoaXNUb2RvT2JqLmR1ZURhdGUpLnRvSVNPU3RyaW5nKClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdC8vQ2hlY2tzIGlmIGRhdGUgaXMgaW4gdGhlIHBhc3QuIHdpbGwgZXhjbHVkZSBpdCBpZiBpdCBpcy5cblx0XHRcdFx0XHRcdGlmIChpc1Bhc3QocGFyc2VkRGF0ZSkpIHtcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRuZXdUb2RvQXJyYXkucHVzaCh0aGlzVG9kb09iaik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvL2NoZWNrcyBpZiBkYXRlIGlzIHRvZGF5IHNpbmNlIGlzUGFzdCgpIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIGZhbHNlLlxuXHRcdFx0XHRcdFx0aWYgKGlzVG9kYXkocGFyc2VkRGF0ZSkpIHtcblx0XHRcdFx0XHRcdFx0bmV3VG9kb0FycmF5LnB1c2godGhpc1RvZG9PYmopO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vU29ydGluZyBmdW5jdGlvbi5cblx0XHRcdFx0YnViYmxlU29ydChuZXdUb2RvQXJyYXkpO1xuXHRcdFx0XHRcblx0XHRcdFx0dGhpcy5jbGVhclRvZG9WaWV3KCk7XG5cdFx0XHRcdFxuXHRcdFx0XHRjb25zdCB0b2RvVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby12aWV3XCIpO1xuXHRcdFx0XHRcblx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBuZXdUb2RvQXJyYXkubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0XHRjb25zdCB0b2RvVG9wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0XHRjb25zdCB0b2RvQm90RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblx0XHRcdFx0XHRjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRcdFx0XHRcdGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0XHRcdFx0Y29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0XHRcdFx0Ly8gY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFx0XHRcdC8vIGNvbnN0IGRlbGV0ZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdFx0XHRcblx0XHRcdFx0dGl0bGUudGV4dENvbnRlbnQgPSBuZXdUb2RvQXJyYXlbal0udGl0bGU7XG5cdFx0XHRcdGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gbmV3VG9kb0FycmF5W2pdLmRlc2NyaXB0aW9uO1xuXHRcdFx0XHRkdWVEYXRlLnRleHRDb250ZW50ID0gbmV3VG9kb0FycmF5W2pdLmR1ZURhdGU7XG5cdFx0XHRcdHByaW9yaXR5LnRleHRDb250ZW50ID0gbmV3VG9kb0FycmF5W2pdLnByaW9yaXR5O1xuXHRcdFx0XHQvLyAvLyBlZGl0LnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG5cdFx0XHRcdC8vIGRlbGV0ZVRvZG8udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuXHRcdFx0XHQvLyBDb250YWluZXIgQXR0cmlidXRlc1xuXHRcdFx0XHR0b2RvQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1vYmpcIik7XG5cdFx0XHRcdHRvZG9Ub3BEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLXRvcC1kaXZcIik7XG5cdFx0XHRcdHRvZG9Cb3REaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLWJvdC1kaXZcIik7XG5cdFx0XHRcdC8vRWxlbWVudCBBdHRyaWJ1dGVzXG5cdFx0XHRcdHRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1pdGVtcyB0b2RvLXRpdGxlXCIpO1xuXHRcdFx0XHRkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8taXRlbXMgdG9kby1kZXNjXCIpO1xuXHRcdFx0XHRkdWVEYXRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1pdGVtcyB0b2RvLWR1ZWRhdGVcIik7XG5cdFx0XHRcdHByaW9yaXR5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1pdGVtcyB0b2RvLXByaW9yaXR5XCIpO1xuXHRcdFx0XHQvLyAvLyBlZGl0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1pdGVtcyB0b2RvLWVkaXRcIik7XG5cdFx0XHRcdC8vIGRlbGV0ZVRvZG8uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLWl0ZW1zIHRvZG8tZGVsZXRlXCIpO1xuXHRcdFx0XHRcblx0XHRcdFx0dG9kb1RvcERpdi5hcHBlbmQodGl0bGUpO1xuXHRcdFx0XHR0b2RvVG9wRGl2LmFwcGVuZChwcmlvcml0eSk7XG5cdFx0XHRcdHRvZG9Cb3REaXYuYXBwZW5kKGR1ZURhdGUpO1xuXHRcdFx0XHR0b2RvQm90RGl2LmFwcGVuZChkZXNjcmlwdGlvbik7XG5cdFx0XHRcdC8vIHRvZG9Cb3REaXYuYXBwZW5kKGVkaXQpO1xuXHRcdFx0XHQvLyB0b2RvQm90RGl2LmFwcGVuZChkZWxldGVUb2RvKTtcblx0XHRcdFx0XG5cdFx0XHRcdHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9Ub3BEaXYpO1xuXHRcdFx0XHR0b2RvQ29udGFpbmVyLmFwcGVuZCh0b2RvQm90RGl2KTtcblx0XHRcdFx0XG5cdFx0XHRcdHRvZG9WaWV3LmFwcGVuZCh0b2RvQ29udGFpbmVyKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0dGhpcy51cGRhdGVUb2RvQ291bnRlcigpO1xuXHRcdFx0XG5cdFx0fSk7XG5cdFx0Ly8gZGF0YUNvbmQucmVtb3ZlVG9kbygpO1xuXHR9XG5cdFxuXHRkaXNwbGF5VG9kYXlUYXNrcygpIHtcblx0XHRjb25zdCB0b2RheVRhc2tzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheS10YXNrc1wiKTtcblx0XHRcblx0XHR0b2RheVRhc2tzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHQvL3VwZGF0ZXMgdGl0bGUgdG8gVG9kYXlcblx0XHRcdGNvbnN0IHZpZXdUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19saXN0LXRpdGxlXCIpO1xuXHRcdFx0dmlld1RpdGxlLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuXHRcdFx0XG5cdFx0XHRsZXQgdG9kYXlUb2RvVGFza3MgPSBbXTtcblx0XHRcdFxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bGV0IHRoaXNMaXN0ID0gbGlzdEFycmF5W2ldO1xuXHRcdFx0XHRsZXQgbGlzdFRvZG9MZW4gPSBsaXN0QXJyYXlbaV0udG9kb3MubGVuZ3RoO1xuXHRcdFx0XHRcblx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBsaXN0VG9kb0xlbjsgaisrKSB7XG5cdFx0XHRcdFx0bGV0IHRoaXNUb2RvT2JqID0gdGhpc0xpc3QudG9kb3Nbal07XG5cdFx0XHRcdFx0bGV0IHRvZG9EYXRlID0gdGhpc1RvZG9PYmouZHVlRGF0ZTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRjb25zdCBwYXJzZWRUb2RvRGF0ZSA9IHBhcnNlSVNPKG5ldyBEYXRlKHRvZG9EYXRlKS50b0lTT1N0cmluZygpKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQvL2NoZWNrcyBpZiBkYXRlIG9mIHRvZG8gaXMgdG9kYXkgYW5kIHJldHVybnMgdHJ1ZSBvciBmYWxzZVxuXHRcdFx0XHRcdGxldCBkYXRlUmVzdWx0ID0gaXNUb2RheShwYXJzZWRUb2RvRGF0ZSk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYgKGRhdGVSZXN1bHQpIHtcblx0XHRcdFx0XHRcdHRvZGF5VG9kb1Rhc2tzLnB1c2godGhpc1RvZG9PYmopO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5kaXNwbGF5VG9kb1Rhc2tzKHRvZGF5VG9kb1Rhc2tzKTtcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHR0aGlzLnVwZGF0ZVRvZG9Db3VudGVyKCk7XG5cdFx0fSk7XG5cdFx0Ly8gZGF0YUNvbmQucmVtb3ZlVG9kbygpO1xuXHR9XG5cblx0ZGlzcGxheVByaW9UYXNrcygpIHtcblx0XHRjb25zdCBpbXBvcnRhbnRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvLXRhc2tzXCIpO1xuXHRcdFxuXHRcdGltcG9ydGFudFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdGxldCBpbXBvcnRhbnRUYXNrcyA9IFtdO1xuXHRcdFx0XG5cdFx0XHQvL3VwZGF0ZXMgdGl0bGUgdG8gSW1wb3J0YW50XG5cdFx0XHRjb25zdCB2aWV3VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbGlzdC10aXRsZVwiKTtcblx0XHRcdHZpZXdUaXRsZS50ZXh0Q29udGVudCA9IFwiSW1wb3J0YW50XCI7XG5cdFx0XHRcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCB0aGlzTGlzdCA9IGxpc3RBcnJheVtpXTtcblx0XHRcdFx0bGV0IGxpc3RUb2RvTGVuID0gbGlzdEFycmF5W2ldLnRvZG9zLmxlbmd0aDtcblx0XHRcdFx0XG5cdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgbGlzdFRvZG9MZW47IGorKykge1xuXHRcdFx0XHRcdGxldCB0aGlzVG9kb09iaiA9IHRoaXNMaXN0LnRvZG9zW2pdO1xuXHRcdFx0XHRcdGltcG9ydGFudFRhc2tzLnB1c2godGhpc1RvZG9PYmopO1xuXHRcdFx0XHRcdC8vd3JpdGUgZnVuY3Rpb24gdGhhdCBzb3J0cyB0YXNrcyBieSBwcmlvLiBmcm9tIGhpZ2hlc3QgdG8gc21hbGxlc3QuXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGltcG9ydGFudFRhc2tzID0gc29ydEJ5UHJpbyhpbXBvcnRhbnRUYXNrcyk7XG5cdFx0XHR0aGlzLmRpc3BsYXlUb2RvVGFza3MoaW1wb3J0YW50VGFza3MpO1xuXG5cdFx0XHR0aGlzLnVwZGF0ZVRvZG9Db3VudGVyKCk7XG5cdFx0fSk7XG5cblx0fVxuXG5cdC8vVGhpcyBjb3VudGVyIHdpbGwgZ3JhYiBhbGwgdGhlIGN1cnJlbnRseSBkaXNwbGF5ZWQgdG9kb3MgaW4gdGhlIHRvZG8gdmlldyBlbGVtZW50IGFuZCBjaGFuZ2UgdGhlIGNvdW50ZXIgdG8gdGhlIGNvcnJlc3BvbmRpbmcgdG9kb3MuXG5cdHVwZGF0ZVRvZG9Db3VudGVyKCkge1xuXHRcdGNvbnN0IGhlYWRlckNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlcl9fdG9kby1hbW91bnRcIik7XG5cdFx0XHRjb25zdCBjdXJyZW50VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1vYmonKVxuXHRcdFx0bGV0IGNvdW50ID0gMDtcblx0XHRcdC8vVXBkYXRlcyB0aGUgaGVhZGVyIGNvdW50ZXIgd2l0aCBhbW91bnQgb2YgYWxsIHRvZG9zIGluIGFsbCBsaXN0cy5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFRhc2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvdW50Kys7XG5cdFx0XHR9XG5cblx0XHRcdGhlYWRlckNvdW50ZXIuaW5uZXJUZXh0ID0gY291bnQ7XG5cdH1cblxuXHRtb2JpbGVTaWRlTWVudUJ0bigpIHtcblx0XHRjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1idG4nKTtcblx0XHRjb25zdCBsZWZ0U2lkZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LWJveC1jb250YWluZXInKTtcblx0XHRjb25zdCB0b2dnbGVTaWRlTWVudUNsYXNzID0gJ3NpZGUtbWVudS10cmFuc2l0aW9uJztcblxuXHRcdG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnSSB3YXMgY2xpY2tlZC4nKTtcblx0XHRcdGxlZnRTaWRlQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUodG9nZ2xlU2lkZU1lbnVDbGFzcyk7XG5cdFx0fSlcblx0fVxufVxuLy8gZGF0YUNvbmQucmVtb3ZlVG9kbygpO1xuZXhwb3J0IHsgRGlzcGxheSB9O1xuXG5cblxuXG5cbiIsImltcG9ydCB7IGxpc3RBcnJheSB9IGZyb20gXCIuL2xpc3RBcnJheVRyYWNrZXJcIjtcbmltcG9ydCB7IHN0b3JhZ2VBdmFpbGFibGUgfSBmcm9tIFwiLi9zdG9yYWdlQXZhaWxhYmxlXCI7XG5pbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IHsgQ29uZHVjdG9yIH0gZnJvbSBcIi4vdG9kb0RhdGFDb25kdWN0b3JcIjtcbmltcG9ydCB7IExpc3QgfSBmcm9tIFwiLi9jcmVhdGVMaXN0XCI7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vY3JlYXRlVG9Eb1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ3JhYkZyb21Mb2NhbFN0b3JhZ2UoKSB7XG5cdGxldCBkaXNwbGF5Q29udHJvbCA9IG5ldyBEaXNwbGF5KCk7XG5cdGxldCBkYXRhQ29uZCA9IG5ldyBDb25kdWN0b3IoKTtcblx0aWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcblx0XHQvLyBZaXBwZWUhIFdlIGNhbiB1c2UgbG9jYWxTdG9yYWdlIGF3ZXNvbWVuZXNzXG5cblx0XHQvLypzYXZlZExpc3RBcnJheSBpcyB0aGUga2V5IGZvciBsaXN0QXJyYXkgRGF0YVxuXG5cdFx0aWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2F2ZWRMaXN0QXJyYXlcIikgPT09IG51bGwpIHtcblx0XHRcdC8vXG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCBzYXZlZEFycmF5ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2F2ZWRMaXN0QXJyYXlcIik7XG5cblx0XHRcdC8vY29udmVydHMgZGF0YSBmcm9tIHN0cmluZyBiYWNrIHRvIGFuIG9iamVjdFxuXHRcdFx0bGV0IHBhcnNlZFNhdmVkQXJyYXkgPSBKU09OLnBhcnNlKHNhdmVkQXJyYXkpO1xuXG5cdFx0XHQvL0Fzc2lnbnMgdGhlIGxpc3RBcnJheSB0byB0aGUgc3RvcmVkXG5cdFx0XHQvLyBPYmplY3QuYXNzaWduKGxpc3RBcnJheSwgcGFyc2VkU2F2ZWRBcnJheSk7XG5cblx0XHRcdC8vQ2xlYXJzIHRoZSBsaXN0QXJyYXlcblx0XHRcdGxpc3RBcnJheS5zcGxpY2UoMCwgbGlzdEFycmF5Lmxlbmd0aCk7XG5cblx0XHRcdC8vY3ljbGVzIHRocm91Z2ggZWFjaCBsaXN0IGFuZCB0b2RvIGFuZCBjcmVhdGVzIGEgbGlzdCBhbmQgdG9kbyBvYmplY3QuXG5cdFx0XHRsZXQgc2F2ZWRMaXN0TGVuID0gcGFyc2VkU2F2ZWRBcnJheS5sZW5ndGggLSAxO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPD0gc2F2ZWRMaXN0TGVuOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgbGlzdEVsZW1lbnROYW1lID0gcGFyc2VkU2F2ZWRBcnJheVtpXS50aXRsZTtcblx0XHRcdFx0Y29uc3QgbmV3TGlzdCA9IG5ldyBMaXN0KGxpc3RFbGVtZW50TmFtZSk7XG5cblx0XHRcdFx0bGlzdEFycmF5LnB1c2gobmV3TGlzdCk7XG5cblx0XHRcdFx0Y29uc3Qgc2F2ZWRUb2RvTGVuID0gcGFyc2VkU2F2ZWRBcnJheVtpXS50b2Rvcy5sZW5ndGggLSAxO1xuXHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8PSBzYXZlZFRvZG9MZW47IGorKykge1xuXHRcdFx0XHRcdGNvbnN0IHRvZG9FbGVtZW50ID0gcGFyc2VkU2F2ZWRBcnJheVtpXS50b2Rvc1tqXTtcblxuXHRcdFx0XHRcdGNvbnN0IHRvZG9FbGVtZW50VGl0bGUgPSB0b2RvRWxlbWVudC50aXRsZTtcblxuXHRcdFx0XHRcdGNvbnN0IHRvZG9FbGVtZW50RGVzYyA9IHRvZG9FbGVtZW50LmRlc2NyaXB0aW9uO1xuXG5cdFx0XHRcdFx0Y29uc3QgdG9kb0VsZW1lbnREYXRlID0gdG9kb0VsZW1lbnQuZHVlRGF0ZTtcblxuXHRcdFx0XHRcdGNvbnN0IHRvZG9FbGVtZW50UHJpbyA9IHRvZG9FbGVtZW50LnByaW9yaXR5O1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGNvbnN0IHRvZG9FbGVtZW50TGlzdCA9IHRvZG9FbGVtZW50Lmxpc3Q7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Y29uc3QgdG9kb09iaiA9IG5ldyBUb2RvKFxuXHRcdFx0XHRcdFx0dG9kb0VsZW1lbnRUaXRsZSxcblx0XHRcdFx0XHRcdHRvZG9FbGVtZW50RGVzYyxcblx0XHRcdFx0XHRcdHRvZG9FbGVtZW50RGF0ZSxcblx0XHRcdFx0XHRcdHRvZG9FbGVtZW50UHJpbyxcblx0XHRcdFx0XHRcdHRvZG9FbGVtZW50TGlzdFxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRsaXN0QXJyYXlbaV0udG9kb3MucHVzaCh0b2RvT2JqKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvL1VwZGF0ZXMgdGhlIGRlZmF1bHQgbGlzdCB2aWV3IHdpdGggaXRzIHRhc2tzLlxuXHRcdFx0ZGlzcGxheUNvbnRyb2wuZGlzcGxheVRvZG8oKTtcblx0XHRcdGRhdGFDb25kLnRvZG9FZGl0QnV0dG9uTGlzdGVuZXIoKTtcblx0XHRcdC8vQlVHIFRoaXMgYWRkcyAyIGV2ZW50IGxpc3RlbmVycyBvbiB0b2RvIGRlbGV0ZSBidXR0b25zXG5cdFx0XHQvL2RhdGFDb25kLnJlbW92ZVRvZG8oKTtcblx0XHRcdFxuXHRcdFx0ZGlzcGxheUNvbnRyb2wuZWRpdEZvcm1Nb2RhbCgpO1xuXHRcdFx0ZGlzcGxheUNvbnRyb2wuZGlzcGxheUxpc3RCdXR0b25zKCk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdC8vIFRvbyBiYWQsIG5vIGxvY2FsU3RvcmFnZSBmb3IgdXNcblx0fVxufVxuIiwiLy9IZWxwcyB0cmFjayB0aGUgY3JlYXRlZCBsaXN0cy5cbmV4cG9ydCBsZXQgbGlzdEFycmF5ID0gW107IiwiaW1wb3J0IHtsaXN0QXJyYXl9IGZyb20gJy4vbGlzdEFycmF5VHJhY2tlcic7XG5pbXBvcnQgeyBzdG9yYWdlQXZhaWxhYmxlIH0gZnJvbSAnLi9zdG9yYWdlQXZhaWxhYmxlJztcblxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVRvTG9jYWxTdG9yYWdlKCkge1xuIFxuaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4gICAgLy8gWWlwcGVlISBXZSBjYW4gdXNlIGxvY2FsU3RvcmFnZSBhd2Vzb21lbmVzc1xuICAgIFxuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIFxuICAgIC8vc3RvcmVzIHRoZSBsaXN0QXJyYXkgaW4gbG9jYWxTdG9yYWdlIGFzIGEgc3RyaW5nLiBcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzYXZlZExpc3RBcnJheVwiLCBKU09OLnN0cmluZ2lmeShsaXN0QXJyYXkpKTtcblxuICAgIFxuICAgIFxuICAgIFxuIFxuICB9XG4gIGVsc2Uge1xuICAgIC8vIFRvbyBiYWQsIG5vIGxvY2FsU3RvcmFnZSBmb3IgdXNcbiAgfVxufVxuIiwiXG5leHBvcnQgZnVuY3Rpb24gc29ydEJ5UHJpbyhhcmdzKSB7XG4gICAgXG4gICAgbGV0IHNvcnRlZEFycmF5ID0gW107XG5cbiAgICAvL0xvb3BzIGFuZCBjaGVja3MgZm9yIGhpZ2ggcHJpbyB0aGVuIGFkZGluZyB0aGVtIGludG8gdGhlIGFycmF5LlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGFyZ3NbaV07XG4gICAgICAgIGxldCBlbGVtZW50UHJpbyA9IGFyZ3NbaV0ucHJpb3JpdHk7XG4gICAgXG4gICAgICAgIGlmIChlbGVtZW50UHJpbyA9PSAnaGlnaCcpIHtcbiAgICAgICAgICAgIHNvcnRlZEFycmF5LnB1c2goZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBhcmdzW2ldO1xuICAgICAgICBsZXQgZWxlbWVudFByaW8gPSBhcmdzW2ldLnByaW9yaXR5O1xuICAgIFxuICAgICAgICBpZiAoZWxlbWVudFByaW8gPT0gJ21lZCcpIHtcbiAgICAgICAgICAgIHNvcnRlZEFycmF5LnB1c2goZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGFyZ3NbaV07XG4gICAgICAgIGxldCBlbGVtZW50UHJpbyA9IGFyZ3NbaV0ucHJpb3JpdHk7XG4gICAgXG4gICAgICAgIGlmIChlbGVtZW50UHJpbyA9PSAnbG93Jykge1xuICAgICAgICAgICAgc29ydGVkQXJyYXkucHVzaChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgXG5cbiAgICByZXR1cm4gc29ydGVkQXJyYXk7XG5cbn0iLCJleHBvcnQgZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gICAgbGV0IHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgICAgY29uc3QgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoXG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICBlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJlxuICAgICAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgICAgIChzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL2NyZWF0ZVRvRG9cIjtcbmltcG9ydCB7IGxpc3RBcnJheSB9IGZyb20gXCIuL2xpc3RBcnJheVRyYWNrZXJcIjtcbmltcG9ydCB7IERpc3BsYXkgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSBcIi4vY3JlYXRlTGlzdFwiO1xuaW1wb3J0IHtmb3JtYXR9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7c2F2ZVRvTG9jYWxTdG9yYWdlfSBmcm9tICcuL3NhdmVUb0xvY2FsU3RvcmFnZSc7XG5cbmNsYXNzIENvbmR1Y3RvciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMudG9kb0RhdGEgPSBbXTsgLy9JIHdhbnQgdG8gYWNjZXNzIHRoaXMgYXJyYXkgaW4gbWV0aG9kLlxuXHRcdHRoaXMubGlzdDtcblx0XHR0aGlzLnRvZG9PYmogPSB7XG5cdFx0XHR0aXRsZTogJycsXG5cdFx0XHRkZXNjOiAnJyxcblx0XHRcdGR1ZURhdGU6ICcnLFxuXHRcdFx0cHJpbzogJycsXG5cdFx0fVxuXHRcdFxuXHR9XG5cdFxuXHRncmFiRm9ybURhdGEoKSB7XG5cblxuXHRcdGxldCBzZWxmID0gdGhpcztcblxuXHRcdC8vR3JhYnMgZGF0YSBmcm9tIGZvcm0gdG8gY3JlYXRlIHRvZG9PYmouXG5cdFx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlO1xuXHRcdGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZTtcblx0XHRcblx0XHQvL0dyYWJzIGR1ZWRhdGUgYW5kIGZvcm1hdHMgaXQuXG5cdFx0Y29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLWRhdGVcIikudmFsdWU7XG5cdFx0bGV0IGZvcm1hdGVkRGF0ZSA9ICcnO1xuXHRcdGlmIChkdWVEYXRlLmxlbmd0aCA+IDApIHtcblx0XHRcdGZvcm1hdGVkRGF0ZSA9IGZvcm1hdChuZXcgRGF0ZShkdWVEYXRlLnJlcGxhY2UoLy0vZywgJy8nKSksICdNL2QveXknKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9ybWF0ZWREYXRlID0gJyc7XG5cdFx0XHRcblx0XHR9XG5cdFx0XG5cdFx0XG5cdFx0bGV0IHByaW9yaXR5O1xuXHRcdHZhciBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcInByaW9yaXR5XCIpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlbGUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChlbGVbaV0uY2hlY2tlZCkge1xuXHRcdFx0XHRwcmlvcml0eSA9IGVsZVtpXS52YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cblxuXG5cdFx0Ly9ncmFiIHNlbGVjdGVkIGxpc3QgYW5kIGNyZWF0ZSB0b2RvT2JqXG5cdFx0Y29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdFwiKS52YWx1ZTtcblx0XHRjb25zdCB0b2RvT2JqID0gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBmb3JtYXRlZERhdGUsIHByaW9yaXR5LGxpc3QpO1xuXG5cdFx0Ly9QdXNoZXMgdG9kbyB0byBhcnJheVxuXHRcdHNlbGYudG9kb0RhdGEucHVzaCh0b2RvT2JqKTtcblx0XHRzZWxmLmxpc3QgPSBsaXN0O1xuXHR9XG5cblx0Z3JhYkVkaXRGcm9tRGF0YSgpe1xuXG5cblxuXG5cdFx0Ly9HcmFicyBkYXRhIGZyb20gZm9ybSB0byBjcmVhdGUgdG9kb09iai5cblx0XHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC10aXRsZVwiKS52YWx1ZTtcblx0XHRjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1kZXNjcmlwdGlvblwiKS52YWx1ZTtcblx0XHRcblx0XHQvL0dyYWJzIGR1ZWRhdGUgYW5kIGZvcm1hdHMgaXQuXG5cdFx0Y29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1kdWUtZGF0ZVwiKS52YWx1ZTtcblx0XHQvLyBsZXQgZm9ybWF0ZWREYXRlID0gJyc7XG5cdFx0Ly8gLy8gaWYgKGR1ZURhdGUubGVuZ3RoID4gMCkge1xuXHRcdC8vIC8vIFx0Zm9ybWF0ZWREYXRlID0gZm9ybWF0KG5ldyBEYXRlKGR1ZURhdGUpLCAnTS9kL3l5Jyk7XG5cdFx0Ly8gLy8gfVxuXG5cblxuXG5cdFx0bGV0IHByaW9yaXR5O1xuXHRcdHZhciBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImVkaXQtcHJpb3JpdHlcIik7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGVsZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGVsZVtpXS5jaGVja2VkKSB7XG5cdFx0XHRcdHByaW9yaXR5ID0gZWxlW2ldLnZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7dGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eX07XG5cdFx0XG5cdFx0XG5cdH1cblxuXHRcdFxuXHRcdFxuXHR1cGRhdGVUb2RvKHRvZG9UaXRsZSl7XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0Ly9FZGl0ZWQgZGF0YSBmcm9tIGVkaXQgZm9ybS5cblx0XHRcdGxldCBuZXdUaXRsZSA9IHRoaXMuZ3JhYkVkaXRGcm9tRGF0YSgpLnRpdGxlO1xuXHRcdFx0bGV0IG5ld0Rlc2MgPSB0aGlzLmdyYWJFZGl0RnJvbURhdGEoKS5kZXNjcmlwdGlvbjtcblx0XHRcdGxldCBuZXdEdWVEYXRlID0gdGhpcy5ncmFiRWRpdEZyb21EYXRhKCkuZHVlRGF0ZTtcblx0XHRcdGxldCBmb3JtYXRlZERhdGUgPSBmb3JtYXQobmV3IERhdGUobmV3RHVlRGF0ZSksICdNL2QveXknKTtcblx0XHRcdGxldCBuZXdQcmlvID0gdGhpcy5ncmFiRWRpdEZyb21EYXRhKCkucHJpb3JpdHk7XG5cdFx0XHRcblx0XHRcdC8vYXRvZG9PYmogTm9kZSBsaXN0XG5cdFx0XHRjb25zdCB0b2RvT2JqcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLW9iaicpO1xuXHRcdFx0XG5cdFx0XHRjb25zdCBjdXJyZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2xpc3QtdGl0bGUnKS50ZXh0Q29udGVudDtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgbGlzdCA9IGxpc3RBcnJheVtpXS50aXRsZTtcblxuXHRcdFx0XHRpZiAoY3VycmVudExpc3QgPT0gbGlzdCkge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdG9kb09ianMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdGNvbnN0IHRvZG9PYmpUaXRsZSA9IHRvZG9PYmpzW2pdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmlubmVyVGV4dDtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0aWYgKHRvZG9UaXRsZSA9PSB0b2RvT2JqVGl0bGUpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWRUb2RvID0gbGlzdEFycmF5W2ldLnRvZG9zW2pdO1xuXHRcdFx0XHRcdFx0XHQvL1VwZGF0ZSB0b2RvIG9iai5cblx0XHRcdFx0XHRcdFx0c2VsZWN0ZWRUb2RvLnRpdGxlID0gbmV3VGl0bGU7XG5cdFx0XHRcdFx0XHRcdHNlbGVjdGVkVG9kby5kZXNjcmlwdGlvbiA9IG5ld0Rlc2M7XG5cdFx0XHRcdFx0XHRcdHNlbGVjdGVkVG9kby5kdWVEYXRlID0gZm9ybWF0ZWREYXRlO1xuXHRcdFx0XHRcdFx0XHRzZWxlY3RlZFRvZG8ucHJpb3JpdHkgPSBuZXdQcmlvO1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0Ly9VcGRhdGUgdG9kbyBpbiB0b2RvIHZpZXcuXG5cdFx0XHRcdFx0XHRcdFx0dG9kb09ianNbal0uY2hpbGRyZW5bMF0uZmlyc3RDaGlsZC5pbm5lclRleHQgPSBuZXdUaXRsZTtcblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHR0b2RvT2Jqc1tqXS5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS5pbm5lclRleHQgPSBuZXdEZXNjO1xuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdHRvZG9PYmpzW2pdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9IGZvcm1hdGVkRGF0ZTtcblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHR0b2RvT2Jqc1tqXS5jaGlsZHJlblswXS5sYXN0Q2hpbGQuaW5uZXJUZXh0ID0gbmV3UHJpbztcblxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0XHRcblx0fVxuXG5cdHB1c2hUb0xpc3QoZ2l2ZW5saXN0KSB7XG5cdFx0bGV0IHRvZG9EYXRhTGVuID0gdGhpcy50b2RvRGF0YS5sZW5ndGg7XG5cdFx0Z2l2ZW5saXN0LmFkZCh0aGlzLnRvZG9EYXRhW3RvZG9EYXRhTGVuIC0gMV0pO1xuXHRcdC8vIGxpc3QucmVtb3ZlKCk7XG5cdH1cblxuXHRfcmV0dXJuTGlzdCgpIHtcblx0XHRyZXR1cm4gdGhpcy5saXN0O1xuXHR9XG5cblx0aW5zZXJ0VG9kb0ludG9MaXN0KCkge1xuXHRcdGxldCBjb25kdWN0b3IgPSB0aGlzO1xuXHRcdC8vR3JhYnMgZGF0YSBmcm9tXG5cdFx0Ly9HcmFicyBmb3JtIGRhdGEgYW5kIGluc2VydHMgaXQgaW50byB0aGUgc2VsZWN0ZWQgTGlzdFxuXG5cblx0XHRjb25kdWN0b3IuZ3JhYkZvcm1EYXRhKCk7XG5cdFx0bGV0IGxpc3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0XCIpO1xuXHRcdGxldCBjb2xsZWN0aW9uID0gbGlzdHMuc2VsZWN0ZWRPcHRpb25zO1xuXG5cdFx0bGV0IHNlbGVjdGVkTGlzdCA9IGNvbGxlY3Rpb25bMF0ubGFiZWw7XG5cdFx0XG5cblx0XHQvL0luc2VydHMgZGF0YSB0byBzZWxlY3RlZCBsaXN0IHdoZW4gc3VibWl0dGVkLlxuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaXN0QXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRjb25zdCBsaXN0ID0gbGlzdEFycmF5W2luZGV4XTtcblx0XHRcdGlmIChsaXN0LnRpdGxlID09IHNlbGVjdGVkTGlzdCkge1xuXHRcdFx0XHRjb25kdWN0b3IucHVzaFRvTGlzdChsaXN0QXJyYXlbaW5kZXhdKTtcblx0XHRcdFx0c2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlTmV3TGlzdCgpIHtcblx0XHRsZXQgZGlzcGxheSA9IG5ldyBEaXNwbGF5KCk7XG5cdFx0bGV0IGxpc3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3QtZm9ybS1idG5cIik7XG5cblx0XHRsaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRsZXQgbGlzdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctbGlzdFwiKS52YWx1ZTtcblx0XHRcdGNvbnN0IGNhcGl0YWxpemVkTGlzdCA9XG5cdFx0XHRcdGxpc3RJbnB1dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGxpc3RJbnB1dC5zbGljZSgxKTtcblx0XHRcdGNvbnN0IG5ld0xpc3QgPSBuZXcgTGlzdChjYXBpdGFsaXplZExpc3QpO1xuXHRcdFx0bGlzdEFycmF5LnB1c2gobmV3TGlzdCk7XG5cdFx0XHRkaXNwbGF5LmZvcm1SZXNldCgpO1xuXG5cdFx0XHRjb25zdCBsaXN0T3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdFwiKTtcblx0XHRcdGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cdFx0XHRvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgbGlzdElucHV0KTtcblx0XHRcdG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpc3QtdmFsdWVcIik7XG5cdFx0XHRvcHRpb24udGV4dENvbnRlbnQgPSBjYXBpdGFsaXplZExpc3Q7XG5cdFx0XHRsaXN0T3B0aW9ucy5hcHBlbmQob3B0aW9uKTtcblx0XHR9KTtcblx0fVxuXG5cdHJlbW92ZVRvZG8oKSB7XG5cdFx0Y29uc3QgZGlzcGxheSA9IG5ldyBEaXNwbGF5KCk7XG5cdFx0bGV0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG8tZGVsZXRlXCIpO1xuXG5cblx0XHRjb25zdCB0b2RvVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby12aWV3XCIpO1xuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkZWxldGVCdXR0b25zLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdFx0ZGVsZXRlQnV0dG9uc1tpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuXHRcdFx0XHRjb25zdCB0b2RvRWxlbWVudCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0dG9kb1ZpZXcucmVtb3ZlQ2hpbGQodG9kb0VsZW1lbnQpO1xuXG5cdFx0XHRcdC8vcmVtb3ZlcyB0aGUgdG9kbyBmcm9tIGl0cyBsaXN0LlxuXHRcdFx0XHRjb25zdCBkZWxldGVkVG9kbyA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uaW5uZXJUZXh0O1xuXHRcdFx0XHRcblx0XHRcdFx0Y29uc3QgbGlzdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdFx0XHRcIi5oZWFkZXJfX2xpc3QtdGl0bGVcIlxuXHRcdFx0XHQpLnRleHRDb250ZW50O1xuXHRcdFx0XHQvL0NoZWNrIHRoaXMgb3V0IGhlY3RvclxuXHRcdFx0XHQvLyBjb25zdCB0b2RvTGlzdCA9IFxuXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Y29uc3QgbGlzdFRvUmVtb3ZlRnJvbSA9IGxpc3RBcnJheVtpXTtcblx0XHRcdFx0XHRpZiAobGlzdFRpdGxlID09IGxpc3RBcnJheVtpXS50aXRsZSkge1xuXHRcdFx0XHRcdFx0bGlzdFRvUmVtb3ZlRnJvbS5yZW1vdmUoZGVsZXRlZFRvZG8pO1xuXHRcdFx0XHRcdFx0ZGlzcGxheS5kaXNwbGF5VG9kb0Ftb3VudCgpO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXHR0b2RvRWRpdEJ1dHRvbkxpc3RlbmVyKCl7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3QgZGlzcGxheSA9IG5ldyBEaXNwbGF5KCk7XG5cdFx0Y29uc3QgdG9kb0VkaXRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8tZWRpdCcpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvRWRpdEJ0bnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGVsZW1lbnQgPSB0b2RvRWRpdEJ0bnNbaV07XG5cblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuXHRcdFx0XHRcblx0XHRcdFx0Y29uc3QgZm9ybUVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LW1vZGFsJyk7XG5cdFx0XHRcdGZvcm1FbGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHRcdC8vVGl0bGUgd29ya3Ncblx0XHRcdFx0XHRjb25zdCB0aXRsZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uaW5uZXJUZXh0O1xuXHRcdFx0XHRcdC8vRGVzYyBXb3Jrc1xuXHRcdFx0XHRcdGNvbnN0IGRlc2MgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzFdLmlubmVyVGV4dDtcblx0XHRcdFx0XHQvL2R1ZSBkYXRlIHdvcmtzXG5cdFx0XHRcdFx0Y29uc3QgZHVlRGF0ZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMF0uaW5uZXJUZXh0O1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGxldCBmb3JtYXRlZERhdGUgPSAnJztcblx0XHRcdFx0XHRpZiAoZHVlRGF0ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRmb3JtYXRlZERhdGUgPSBmb3JtYXQobmV3IERhdGUoZHVlRGF0ZSksICd5eXl5LU1NLWRkJyk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly9QcmlvIHdvcmtzXG5cdFx0XHRcdFx0Y29uc3QgcHJpbyA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMV0uaW5uZXJUZXh0O1xuXG5cdFx0XHRcdFx0Ly9TaG93cyB0b2RvIGRhdGEgb24gZWRpdCBmb3JtXG5cdFx0XHRcdFx0ZGlzcGxheS5zZWxlY3RlZFRvZG9FZGl0KHRpdGxlLGRlc2MsZm9ybWF0ZWREYXRlLCBwcmlvKTtcblxuXHRcdFx0XHRcdC8vdXBkYXRlcyBsaXN0IG9wdGlvbnMgaW4gZWRpdCBmb3JtIFxuXHRcdFx0XHRcdGNvbnN0IGVkaXRMaXN0T3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LWxpc3QnKTtcblx0XHRcdFx0XHRlZGl0TGlzdE9wdGlvbnMuaW5uZXJIVE1MID0gXCJcIjtcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RBcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblx0XHRcdFx0XHRcdG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBsaXN0QXJyYXlbaV0udGl0bGUpO1xuXHRcdFx0XHRcdFx0b3B0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlzdC12YWx1ZVwiKTtcblx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkTGlzdCA9XG5cdFx0XHRcdFx0XHRcdGxpc3RBcnJheVtpXS50aXRsZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG5cdFx0XHRcdFx0XHRcdGxpc3RBcnJheVtpXS50aXRsZS5zbGljZSgxKTtcblx0XHRcdFx0XHRcdFx0b3B0aW9uLnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZWRMaXN0O1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1saXN0Jyk7XG5cblx0XHRcdFx0XHRcdFx0c2VsZWN0LmFwcGVuZChvcHRpb24pO1xuXHRcdFx0XHRcdH1cblxuXG5cblx0XHRcdFx0XHRjb25zdCBtYWtlQ2hhbmdlc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWZvcm0tYnRuJyk7XG5cblx0XHRcdFx0XHRtYWtlQ2hhbmdlc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9Pntcblx0XHRcdFx0XHRcdHNlbGYudXBkYXRlVG9kbyh0aXRsZSk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdFxuXHRcbn1cbmV4cG9ydCB7IENvbmR1Y3RvciB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuXG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uLy4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdExvY2FsZTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG5pbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogJ2FtJyxcbiAgcG06ICdwbScsXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICBub29uOiAnbm9vbicsXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICBuaWdodDogJ25pZ2h0J1xufTtcblxuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZXJhID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlICdHJzpcbiAgICAgIGNhc2UgJ0dHJzpcbiAgICAgIGNhc2UgJ0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBBLCBCXG5cbiAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuXG4gICAgICBjYXNlICdHR0dHJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAneW8nKSB7XG4gICAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyOyAvLyBUd28gZGlnaXQgeWVhclxuXG4gICAgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgICB2YXIgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfSAvLyBPcmRpbmFsIG51bWJlclxuXG5cbiAgICBpZiAodG9rZW4gPT09ICdZbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfSAvLyBQYWRkaW5nXG5cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpOyAvLyBQYWRkaW5nXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAnUSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdRUSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAnUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAnUVFRUSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAncXEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ3FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAncXFxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ3FxcXEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdNbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuXG4gICAgICBjYXNlICdMTCc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTG8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdMTExMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdMTExMJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgd2VlayA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodG9rZW4gPT09ICd3bycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBpc29XZWVrID0gZ2V0VVRDSVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnZG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RhdGUoKSwge1xuICAgICAgICB1bml0OiAnZGF0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnRG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHtcbiAgICAgICAgdW5pdDogJ2RheU9mWWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgY2FzZSAnRUUnOlxuICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ0VFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdlZSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2VvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2VlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnZWVlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlICdjJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2NjJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdjbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2NjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdjY2NjJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSAnaSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG5cbiAgICAgIGNhc2UgJ2lpJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcblxuICAgICAgY2FzZSAnaW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZVxuXG4gICAgICBjYXNlICdpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnaWlpaSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdiJzpcbiAgICAgIGNhc2UgJ2JiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2JiYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmJiJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnQkInOlxuICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ0hvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENIb3VycygpLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSAnS28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuXG4gICAgaWYgKHRva2VuID09PSAna28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnbW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ01pbnV0ZXMoKSwge1xuICAgICAgICB1bml0OiAnbWludXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiAnWic7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ1gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuXG4gICAgICBjYXNlICdYWFhYJzpcbiAgICAgIGNhc2UgJ1hYJzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFhYJzpcbiAgICAgIGNhc2UgJ1hYWCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcblxuICAgICAgY2FzZSAneHh4eCc6XG4gICAgICBjYXNlICd4eCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuXG4gICAgICBjYXNlICd4eHh4eCc6XG4gICAgICBjYXNlICd4eHgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAnTyc6XG4gICAgICBjYXNlICdPTyc6XG4gICAgICBjYXNlICdPT08nOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICdPT09PJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAneic6XG4gICAgICBjYXNlICd6eic6XG4gICAgICBjYXNlICd6enonOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBvcmlnaW5hbERhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG5cbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cblxuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpO1xuICB2YXIgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG4gICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09ICd5eScgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gJ00nID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRVVENIb3VycygpIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09ICdhbScgPyAnYS5tLicgOiAncC5tLic7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgIHZhciBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMykpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsInZhciBkYXRlTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIChwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG5cbnZhciB0aW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIChwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ3AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcHAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG5cbnZhciBkYXRlVGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiAocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59O1xuXG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ0lTT1dlZWsoZGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWtPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIG9wdGlvbnMpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJ2YXIgcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zID0gWydEJywgJ0REJ107XG52YXIgcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMgPSBbJ1lZJywgJ1lZWVknXTtcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgaWYgKHRva2VuID09PSAnWVlZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnREQnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IDE7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeSA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTtcbiAgdmFyIHllYXIgPSBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrLCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNzUwIG1pbGxpc2Vjb25kcyB0byAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB0aW1lc3RhbXAgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgYW1vdW50KTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmYgPSBkYXRlTGVmdC5nZXRUaW1lKCkgLSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xuXG4gIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAxOyAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufSIsIi8qKlxuICogRGF5cyBpbiAxIHdlZWsuXG4gKlxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5XZWVrID0gNztcbi8qKlxuICogRGF5cyBpbiAxIHllYXJcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICpcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG4vKipcbiAqIE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG4vKipcbiAqIE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW5UaW1lID0gLW1heFRpbWU7XG4vKipcbiAqIE1pbnV0ZXMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbnV0ZXNJbkhvdXIgPSA2MDtcbi8qKlxuICogTW9udGhzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luUXVhcnRlciA9IDM7XG4vKipcbiAqIE1vbnRocyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblllYXIgPSAxMjtcbi8qKlxuICogUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBxdWFydGVyc0luWWVhciA9IDQ7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTWludXRlID0gNjA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBkYXlcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG4vKipcbiAqIFNlY29uZHMgaW4gMSB3ZWVrXG4gKlxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1vbnRoXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcbi8qKlxuICogU2Vjb25kcyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMzsiLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcblxudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7IC8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcblxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9vcHRpb25zJGxvY2FsZSwgX3JlZjIsIF9yZWYzLCBfcmVmNCwgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUyLCBfb3B0aW9ucyRsb2NhbGUyJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiwgX3JlZjUsIF9yZWY2LCBfcmVmNywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUzLCBfb3B0aW9ucyRsb2NhbGUzJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQ7XG5cbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgbG9jYWxlID0gKF9yZWYgPSAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX29wdGlvbnMkbG9jYWxlICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRsb2NhbGUgOiBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiBkZWZhdWx0TG9jYWxlO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmMiA9IChfcmVmMyA9IChfcmVmNCA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTIub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUyJG9wdGkuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmNCAhPT0gdm9pZCAwID8gX3JlZjQgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IDEpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWY1ID0gKF9yZWY2ID0gKF9yZWY3ID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyRvcHRpID0gX29wdGlvbnMkbG9jYWxlMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTMkb3B0aS53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY3ICE9PSB2b2lkIDAgPyBfcmVmNyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjYgIT09IHZvaWQgMCA/IF9yZWY2IDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0LndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjUgIT09IHZvaWQgMCA/IF9yZWY1IDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUubG9jYWxpemUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKTtcbiAgfVxuXG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfSAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cblxuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSk7XG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSwgdGltZXpvbmVPZmZzZXQpO1xuICB2YXIgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGVcbiAgfTtcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdFN0ci5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09ICdwJyB8fCBmaXJzdENoYXJhY3RlciA9PT0gJ1AnKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgIH1cblxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG5cbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgdmFyIG1hdGNoZWQgPSBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKTtcblxuICBpZiAoIW1hdGNoZWQpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlZFsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1Bhc3RcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHBhc3Q/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHBhc3Q/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoZSBwYXN0XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDIgSnVseSAyMDE0IGluIHRoZSBwYXN0P1xuICogY29uc3QgcmVzdWx0ID0gaXNQYXN0KG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNQYXN0KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKSA8IERhdGUubm93KCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgaXNEYXRlIGZyb20gXCIuLi9pc0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcblxuICBpZiAoIWlzRGF0ZShkaXJ0eURhdGUpICYmIHR5cGVvZiBkaXJ0eURhdGUgIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoZGF0ZSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7IC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG5cbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcblxudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcblxuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xuXG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiAodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07IC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiAoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG5cbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiAocXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwXG4gICAgLyogU3VuZGF5ICovXG4gICAgLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciwgbWlsbGlzZWNvbmRzSW5NaW51dGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgcGFyc2VJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgSVNPIHN0cmluZ1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUGFyc2UgdGhlIGdpdmVuIHN0cmluZyBpbiBJU08gODYwMSBmb3JtYXQgYW5kIHJldHVybiBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEZ1bmN0aW9uIGFjY2VwdHMgY29tcGxldGUgSVNPIDg2MDEgZm9ybWF0cyBhcyB3ZWxsIGFzIHBhcnRpYWwgaW1wbGVtZW50YXRpb25zLlxuICogSVNPIDg2MDE6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDFcbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXNuJ3QgYSBzdHJpbmcsIHRoZSBmdW5jdGlvbiBjYW5ub3QgcGFyc2UgdGhlIHN0cmluZyBvclxuICogdGhlIHZhbHVlcyBhcmUgaW52YWxpZCwgaXQgcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VJU08oYXJndW1lbnQsIG9wdGlvbnMpIHtcbiAgdmFyIF9vcHRpb25zJGFkZGl0aW9uYWxEaTtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFkZGl0aW9uYWxEaWdpdHMgPSB0b0ludGVnZXIoKF9vcHRpb25zJGFkZGl0aW9uYWxEaSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgIT09IHZvaWQgMCA/IF9vcHRpb25zJGFkZGl0aW9uYWxEaSA6IDIpO1xuXG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cblxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcbiAgdmFyIGRhdGU7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cblxuICBpZiAoIWRhdGUgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciB0aW1lID0gMDtcbiAgdmFyIG9mZnNldDtcblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XG5cbiAgICBpZiAoaXNOYU4odGltZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lem9uZSkge1xuICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpO1xuXG4gICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgZGlydHlEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7IC8vIGpzIHBhcnNlZCBzdHJpbmcgYXNzdW1pbmcgaXQncyBpbiBVVEMgdGltZXpvbmVcbiAgICAvLyBidXQgd2UgbmVlZCBpdCB0byBiZSBwYXJzZWQgaW4gb3VyIHRpbWV6b25lXG4gICAgLy8gc28gd2UgdXNlIHV0YyB2YWx1ZXMgdG8gYnVpbGQgZGF0ZSBpbiBvdXIgdGltZXpvbmUuXG4gICAgLy8gWWVhciB2YWx1ZXMgZnJvbSAwIHRvIDk5IG1hcCB0byB0aGUgeWVhcnMgMTkwMCB0byAxOTk5XG4gICAgLy8gc28gc2V0IHllYXIgZXhwbGljaXRseSB3aXRoIHNldEZ1bGxZZWFyLlxuXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKDApO1xuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihkaXJ0eURhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGlydHlEYXRlLmdldFVUQ01vbnRoKCksIGRpcnR5RGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgIHJlc3VsdC5zZXRIb3VycyhkaXJ0eURhdGUuZ2V0VVRDSG91cnMoKSwgZGlydHlEYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGlydHlEYXRlLmdldFVUQ1NlY29uZHMoKSwgZGlydHlEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQpO1xufVxudmFyIHBhdHRlcm5zID0ge1xuICBkYXRlVGltZURlbGltaXRlcjogL1tUIF0vLFxuICB0aW1lWm9uZURlbGltaXRlcjogL1taIF0vaSxcbiAgdGltZXpvbmU6IC8oW1orLV0uKikkL1xufTtcbnZhciBkYXRlUmVnZXggPSAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbnZhciB0aW1lUmVnZXggPSAvXihcXGR7Mn0oPzpbLixdXFxkKik/KSg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8oPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/JC87XG52YXIgdGltZXpvbmVSZWdleCA9IC9eKFsrLV0pKFxcZHsyfSkoPzo6PyhcXGR7Mn0pKT8kLztcblxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgdmFyIGRhdGVTdHJpbmdzID0ge307XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICB2YXIgdGltZVN0cmluZzsgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cblxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuXG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcblxuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGltZVN0cmluZykge1xuICAgIHZhciB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7JyArICg0ICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSl8KFxcXFxkezJ9fFsrLV1cXFxcZHsnICsgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KSQpJyk7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogTmFOLFxuICAgIHJlc3REYXRlU3RyaW5nOiAnJ1xuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSA/IHBhcnNlSW50KGNhcHR1cmVzWzJdKSA6IG51bGw7IC8vIGVpdGhlciB5ZWFyIG9yIGNlbnR1cnkgaXMgbnVsbCwgbm90IGJvdGhcblxuICByZXR1cm4ge1xuICAgIHllYXI6IGNlbnR1cnkgPT09IG51bGwgPyB5ZWFyIDogY2VudHVyeSAqIDEwMCxcbiAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSgoY2FwdHVyZXNbMV0gfHwgY2FwdHVyZXNbMl0pLmxlbmd0aClcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKGRhdGVSZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCBzdHJpbmdcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGlzV2Vla0RhdGUgPSAhIWNhcHR1cmVzWzRdO1xuICB2YXIgZGF5T2ZZZWFyID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtb250aCA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMl0pIC0gMTtcbiAgdmFyIGRheSA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbM10pO1xuICB2YXIgd2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNF0pO1xuICB2YXIgZGF5T2ZXZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s1XSkgLSAxO1xuXG4gIGlmIChpc1dlZWtEYXRlKSB7XG4gICAgaWYgKCF2YWxpZGF0ZVdlZWtEYXRlKHllYXIsIHdlZWssIGRheU9mV2VlaykpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWssIGRheU9mV2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcblxuICAgIGlmICghdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXkpIHx8ICF2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZSh0aW1lU3RyaW5nKSB7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWVTdHJpbmcubWF0Y2godGltZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIE5hTjsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHRpbWVcblxuICB2YXIgaG91cnMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1pbnV0ZXMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzJdKTtcbiAgdmFyIHNlY29uZHMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzNdKTtcblxuICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIDEwMDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpIHx8IDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUpO1xufVxuXG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihpc29XZWVrWWVhciwgMCwgNCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIHZhciBkaWZmID0gKHdlZWsgLSAxKSAqIDcgKyBkYXkgKyAxIC0gZm91cnRoT2ZKYW51YXJ5RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59IC8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG4vLyBGZWJydWFyeSBpcyBudWxsIHRvIGhhbmRsZSB0aGUgbGVhcCB5ZWFyICh1c2luZyB8fClcblxuXG52YXIgZGF5c0luTW9udGhzID0gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5cbmZ1bmN0aW9uIGlzTGVhcFllYXJJbmRleCh5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNDAwID09PSAwIHx8IHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDA7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSkge1xuICByZXR1cm4gbW9udGggPj0gMCAmJiBtb250aCA8PSAxMSAmJiBkYXRlID49IDEgJiYgZGF0ZSA8PSAoZGF5c0luTW9udGhzW21vbnRoXSB8fCAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMjkgOiAyOCkpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSB7XG4gIHJldHVybiBkYXlPZlllYXIgPj0gMSAmJiBkYXlPZlllYXIgPD0gKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDM2NiA6IDM2NSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV2Vla0RhdGUoX3llYXIsIHdlZWssIGRheSkge1xuICByZXR1cm4gd2VlayA+PSAxICYmIHdlZWsgPD0gNTMgJiYgZGF5ID49IDAgJiYgZGF5IDw9IDY7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykge1xuICBpZiAoaG91cnMgPT09IDI0KSB7XG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiBzZWNvbmRzID49IDAgJiYgc2Vjb25kcyA8IDYwICYmIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDwgNjAgJiYgaG91cnMgPj0gMCAmJiBob3VycyA8IDI1O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWV6b25lKF9ob3VycywgbWludXRlcykge1xuICByZXR1cm4gbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPD0gNTk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1Yk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDc1MCBtaWxsaXNlY29uZHMgZnJvbSAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gc3ViTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MjkuMjUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge0xpc3R9IGZyb20gXCIuL2NyZWF0ZUxpc3RcIlxuaW1wb3J0IHtEaXNwbGF5fSBmcm9tIFwiLi9kaXNwbGF5XCJcbmltcG9ydCB7Q29uZHVjdG9yfSBmcm9tICcuL3RvZG9EYXRhQ29uZHVjdG9yJztcbi8vSG9sZHMgY3JlYXRlZCBhcnJheXNcbmltcG9ydCB7bGlzdEFycmF5fSBmcm9tIFwiLi9saXN0QXJyYXlUcmFja2VyLmpzXCI7XG5pbXBvcnQge2dyYWJGcm9tTG9jYWxTdG9yYWdlfSBmcm9tICcuL2dyYWJGcm9tTG9jYWxTdG9yYWdlJztcbi8vRG9tIGNvbnRyb2xsZXJcbmxldCBkaXNwbGF5ID0gbmV3IERpc3BsYXkoKTtcbi8vRGF0YSBNYW5pcHVsYXRvclxubGV0IGRhdGFDb25kID0gbmV3IENvbmR1Y3RvcigpO1xuXG4vL0RFRkFVTFQgQ1JFQVRFRCBMSVNUXG5sZXQgZGVmYXVsdExpc3QgPSBuZXcgTGlzdCgnVG9kbycpO1xubGlzdEFycmF5LnB1c2goZGVmYXVsdExpc3QpO1xuXG4vL0xvYWRzIGZvcm1cbmRpc3BsYXkubGlzdEZvcm0oKTtcblxuLy9ncmFicyB0b2RvIGRhdGEgYW5kIGluc2VydHMgaW50byBsaXN0XG5kYXRhQ29uZC5jcmVhdGVOZXdMaXN0KCk7XG5kaXNwbGF5LmRpc3BsYXlMaXN0QnV0dG9ucygpO1xuLy9hZGRzIGV2ZW50IGxpc3RlbmVyIHRvIGxpc3QtZm9ybS1idXR0b25cbmRpc3BsYXkuQWRkRXZlbnRMaXN0ZW5lclRvTGlzdFN1Ym1pdCgpO1xuZ3JhYkZyb21Mb2NhbFN0b3JhZ2UoKTtcbi8vYWRkcyBldmVudCBsaXN0ZW5lciB0byBkZWxldGUgYnV0dG9uc1xuZGlzcGxheS5hZGREZWxldGVMaXN0TGlzdGVuZXIoKTtcblxuZGlzcGxheS50b2RvRm9ybSgpO1xuZGlzcGxheS5mb3JtUmVzZXQoKTtcbmRpc3BsYXkudG9kb0Zvcm1Nb2RhbCgpO1xuZGlzcGxheS5lZGl0Rm9ybSgpO1xuLy8gZGF0YUNvbmQuY2hhbmdlTGlzdCgpO1xuXG4vL0Rpc3BsYXkgZGlmZmVyZW50IHRhc2tzXG5kaXNwbGF5LmRpc3BsYXlBbGxUYXNrcygpO1xuZGlzcGxheS5kaXNwbGF5VXBjb21pbmdUYXNrcygpO1xuZGlzcGxheS5kaXNwbGF5VG9kYXlUYXNrcygpO1xuZGlzcGxheS5kaXNwbGF5UHJpb1Rhc2tzKCk7XG5cbmRpc3BsYXkubW9iaWxlU2lkZU1lbnVCdG4oKTtcblxuXG5cbiJdLCJuYW1lcyI6WyJwYXJzZUlTTyIsImNvbXBhcmVBc2MiLCJidWJibGVTb3J0IiwiYXJncyIsImluZGV4IiwibGVuZ3RoIiwic2Vjb25kRWxlSW5kZXgiLCJmaXJzdFRvZG9FbGVtZW50Iiwic2VjVG9kb0VsZW1lbnQiLCJmaXJzdEVsZW1lbnREYXRlIiwiRGF0ZSIsImR1ZURhdGUiLCJ0b0lTT1N0cmluZyIsInVuZGVmaW5lZCIsInNlY0VsZW1lbnREYXRlIiwiY29tcGFyZVZhbCIsIkxpc3QiLCJjb25zdHJ1Y3RvciIsInRpdGxlIiwidG9kb3MiLCJhZGQiLCJ0b2RvIiwicHVzaCIsInJlbW92ZSIsImRlbGV0ZWRUb2RvIiwiaSIsInNwbGljZSIsIlRvZG8iLCJkZXNjcmlwdGlvbiIsInByaW9yaXR5IiwibGlzdCIsIkNvbmR1Y3RvciIsImxpc3RBcnJheSIsImlzUGFzdCIsImlzVG9kYXkiLCJzb3J0QnlQcmlvIiwic2F2ZVRvTG9jYWxTdG9yYWdlIiwiZGF0YUNvbmQiLCJEaXNwbGF5IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXRMaXN0IiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsImZpcnN0Q2hpbGQiLCJpbm5lclRleHQiLCJ0YWJsZSIsImNsZWFyTGlzdFZpZXciLCJkaXNwbGF5TGlzdEJ1dHRvbnMiLCJhZGREZWxldGVMaXN0TGlzdGVuZXIiLCJ0b2RvRm9ybSIsImlucHV0QXJyYXkiLCJmb3JtIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwidG9kb0NvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJjbG9zZUJ1dHRvbiIsImluc2VydEJlZm9yZSIsImVsZW1lbnQiLCJsYWJlbCIsInRleHRDb250ZW50IiwiaW5wdXQiLCJhcHBlbmRDaGlsZCIsImFycmF5IiwiZmllbGRTZXQiLCJzZWxlY3QiLCJsaXN0T3B0aW9ucyIsImlubmVySFRNTCIsIm9wdGlvbiIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJhcHBlbmQiLCJzdWJtaXQiLCJzdWJtaXRCdG4iLCJnZXRFbGVtZW50QnlJZCIsInNlbGYiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5zZXJ0VG9kb0ludG9MaXN0IiwidG9kb0VkaXRCdXR0b25MaXN0ZW5lciIsImN1cnJlbnRMaXN0Iiwic2VsZWN0ZWRMaXN0IiwidmFsdWUiLCJjbGVhclRvZG9WaWV3IiwiZGlzcGxheVRvZG8iLCJlZGl0Rm9ybU1vZGFsIiwiZm9ybVJlc2V0IiwiZWRpdEZvcm0iLCJlZGl0TGlzdE9wdGlvbnMiLCJlZGl0IiwibWFrZUNoYW5nZXNCdG4iLCJzZWxlY3RlZFRvZG9FZGl0IiwiZGVzYyIsInByaW8iLCJ0aXRsZUlucHV0IiwiZGVzY0lucHV0IiwiZHVlRGF0ZUlucHV0IiwicHJpb0xvdyIsInByaW9NZWQiLCJwcmlvSGlnaCIsImNoZWNrZWQiLCJsaXN0Rm9ybSIsImxpc3RWaWV3IiwicmVzZXQiLCJsaXN0Q29udGFpbmVyIiwiaW5pdGlhbExpc3QiLCJjYXB0dXJlTGlzdCIsImxpc3RCdG5Db250YWluZXIiLCJkZWZhdWx0TGlzdCIsImxpc3REZWxldGVCdXR0b24iLCJkaXNwbGF5U2VsZWN0ZWRMaXN0IiwibGlzdE5hbWUiLCJpbnB1dExpc3QiLCJsb2NhbExpc3RPcHRpb25zIiwicXVlcnlTZWxlY3RvckFsbCIsIkFkZEV2ZW50TGlzdGVuZXJUb0xpc3RTdWJtaXQiLCJsaXN0U3VibWl0IiwibGlzdEFycmF5TGVuIiwibmV3TGlzdCIsInJlbW92ZURlbGV0ZUxpc3RMaXN0ZW5lciIsImxpc3RUaXRsZSIsImxpc3REZWxldGVCdG4iLCJkZWxldGVCdG5FbGVtZW50IiwicmVtb3ZlRnJvbUFycmF5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvZG9WaWV3IiwidGhpc0xpc3QiLCJsaXN0VG9kb0xlbiIsImoiLCJ0b2RvVG9wRGl2IiwidG9kb0JvdERpdiIsImRlbGV0ZVRvZG8iLCJyZW1vdmVUb2RvIiwiZGlzcGxheVRvZG9BbW91bnQiLCJjb3VudGVyIiwidG9kb0Zvcm1Nb2RhbCIsIm1vZGFsIiwiYnRuIiwic3BhbiIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJvbmNsaWNrIiwic3R5bGUiLCJkaXNwbGF5Iiwid2luZG93IiwiZXZlbnQiLCJkaXNwbGF5QWxsVGFza3MiLCJhbGxUYXNrcyIsInRvZG9WaWV3SGVhZGVyIiwiaGVhZGVyQ291bnRlciIsImNvdW50SG9sZGVyIiwibGlzdFRvZG9zTGVuIiwiZGlzcGxheVRvZG9UYXNrcyIsInRvZG9BcnJheSIsInVwZGF0ZVRvZG9Db3VudGVyIiwiZGlzcGxheVVwY29taW5nVGFza3MiLCJ1cGNvbWluZ1Rhc2tzQnRuIiwibmV3VG9kb0FycmF5Iiwidmlld1RpdGxlIiwidGhpc1RvZG9PYmoiLCJwYXJzZWREYXRlIiwiZGlzcGxheVRvZGF5VGFza3MiLCJ0b2RheVRhc2tzQnRuIiwidG9kYXlUb2RvVGFza3MiLCJ0b2RvRGF0ZSIsInBhcnNlZFRvZG9EYXRlIiwiZGF0ZVJlc3VsdCIsImRpc3BsYXlQcmlvVGFza3MiLCJpbXBvcnRhbnRUYXNrQnRuIiwiaW1wb3J0YW50VGFza3MiLCJjdXJyZW50VGFza3MiLCJjb3VudCIsIm1vYmlsZVNpZGVNZW51QnRuIiwibWVudUJ0biIsImxlZnRTaWRlQ29udGFpbmVyIiwidG9nZ2xlU2lkZU1lbnVDbGFzcyIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInN0b3JhZ2VBdmFpbGFibGUiLCJncmFiRnJvbUxvY2FsU3RvcmFnZSIsImRpc3BsYXlDb250cm9sIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNhdmVkQXJyYXkiLCJwYXJzZWRTYXZlZEFycmF5IiwiSlNPTiIsInBhcnNlIiwic2F2ZWRMaXN0TGVuIiwibGlzdEVsZW1lbnROYW1lIiwic2F2ZWRUb2RvTGVuIiwidG9kb0VsZW1lbnQiLCJ0b2RvRWxlbWVudFRpdGxlIiwidG9kb0VsZW1lbnREZXNjIiwidG9kb0VsZW1lbnREYXRlIiwidG9kb0VsZW1lbnRQcmlvIiwidG9kb0VsZW1lbnRMaXN0IiwidG9kb09iaiIsImNsZWFyIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInNvcnRlZEFycmF5IiwiZWxlbWVudFByaW8iLCJ0eXBlIiwic3RvcmFnZSIsIngiLCJyZW1vdmVJdGVtIiwiRE9NRXhjZXB0aW9uIiwiY29kZSIsIm5hbWUiLCJmb3JtYXQiLCJ0b2RvRGF0YSIsImdyYWJGb3JtRGF0YSIsImZvcm1hdGVkRGF0ZSIsInJlcGxhY2UiLCJlbGUiLCJnZXRFbGVtZW50c0J5TmFtZSIsImdyYWJFZGl0RnJvbURhdGEiLCJ1cGRhdGVUb2RvIiwidG9kb1RpdGxlIiwibmV3VGl0bGUiLCJuZXdEZXNjIiwibmV3RHVlRGF0ZSIsIm5ld1ByaW8iLCJ0b2RvT2JqcyIsInRvZG9PYmpUaXRsZSIsImNoaWxkcmVuIiwic2VsZWN0ZWRUb2RvIiwibGFzdENoaWxkIiwicHVzaFRvTGlzdCIsImdpdmVubGlzdCIsInRvZG9EYXRhTGVuIiwiX3JldHVybkxpc3QiLCJjb25kdWN0b3IiLCJsaXN0cyIsImNvbGxlY3Rpb24iLCJzZWxlY3RlZE9wdGlvbnMiLCJjcmVhdGVOZXdMaXN0IiwibGlzdEJ0biIsImxpc3RJbnB1dCIsImNhcGl0YWxpemVkTGlzdCIsImRlbGV0ZUJ1dHRvbnMiLCJyZW1vdmVDaGlsZCIsInBhcmVudEVsZW1lbnQiLCJsaXN0VG9SZW1vdmVGcm9tIiwidG9kb0VkaXRCdG5zIiwiZm9ybUVsZSIsImNoaWxkTm9kZXMiXSwic291cmNlUm9vdCI6IiJ9