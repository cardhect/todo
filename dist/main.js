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
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
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
        dataCond.removeTodo();
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
    dataCond.removeTodo();
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
    dataCond.removeTodo();
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
    });
    dataCond.removeTodo();
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
      const edit = document.createElement("button");
      const deleteTodo = document.createElement("button");
      title.textContent = todoArray[j].title;
      description.textContent = todoArray[j].description;
      dueDate.textContent = todoArray[j].dueDate;
      priority.textContent = todoArray[j].priority;
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
    dataCond.removeTodo();
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
        const edit = document.createElement("button");
        const deleteTodo = document.createElement("button");
        title.textContent = newTodoArray[j].title;
        description.textContent = newTodoArray[j].description;
        dueDate.textContent = newTodoArray[j].dueDate;
        priority.textContent = newTodoArray[j].priority;
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

      //Updates Todo Counter
      const headerCounter = document.querySelector("#header__todo-amount");
      const currentTasks = document.querySelectorAll('.todo-obj');
      let count = 0;
      //Updates the header counter with amount of all todos in all lists.
      for (let i = 0; i < currentTasks.length; i++) {
        count++;
      }
      headerCounter.innerText = count;
    });
    dataCond.removeTodo();
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
      const headerCounter = document.querySelector("#header__todo-amount");
      const currentTasks = document.querySelectorAll('.todo-obj');
      let count = 0;
      //Updates the header counter with amount of all todos in all lists.
      for (let i = 0; i < currentTasks.length; i++) {
        count++;
      }
      headerCounter.innerText = count;
    });
    dataCond.removeTodo();
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
      const headerCounter = document.querySelector("#header__todo-amount");
      const currentTasks = document.querySelectorAll('.todo-obj');
      let count = 0;
      //Updates the header counter with amount of all todos in all lists.
      for (let i = 0; i < currentTasks.length; i++) {
        count++;
      }
      headerCounter.innerText = count;
    });
  }
}
dataCond.removeTodo();


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
          const todoObj = new _createToDo__WEBPACK_IMPORTED_MODULE_5__.Todo(todoElementTitle, todoElementDesc, todoElementDate, todoElementPrio);
          _listArrayTracker__WEBPACK_IMPORTED_MODULE_0__.listArray[i].todos.push(todoObj);
        }
      }

      //Updates the default list view with its tasks.
      displayControl.displayTodo();
      dataCond.todoEditButtonListener();
      dataCond.removeTodo();
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
    // 

    let priority;
    var ele = document.getElementsByName("priority");
    for (let i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        priority = ele[i].value;
      }
    }

    //grab selected list and create todoObj
    const list = document.getElementById("list").value;
    const todoObj = new _createToDo__WEBPACK_IMPORTED_MODULE_0__.Todo(title, description, formatedDate, priority);

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
        const todoElement = event.path[2];
        todoView.removeChild(todoElement);

        //removes the todo from its list.
        const deletedTodo = event.path[2].firstChild.childNodes[0].innerText;
        const listTitle = document.querySelector(".header__list-title").textContent;
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

//* BUG lists retrieved from local storage does not appear in the list options drop down in the add todo modal.
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1FQUFpQjtBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGVBQWUsb0VBQVU7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esa0JBQWtCLHVFQUFhOztBQUUvQjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQix5RUFBZTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFD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QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RMbUM7QUFDZ0I7QUFDbEI7QUFDb0I7QUFDUTtBQUMyQjtBQUM2QjtBQUN6RTtBQUNNO0FBQ1c7QUFDVCxDQUFDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNGQUFzRjtBQUN0Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LENBQUNQLGFBQWEsRUFBRTtBQUN2Qk8sT0FBTyxDQUFDdEQsUUFBUSxFQUFFO0FBQ2xCOztBQUVBO0FBQ0FzRCxPQUFPLENBQUNHLGVBQWUsRUFBRTtBQUN6QkgsT0FBTyxDQUFDVyxvQkFBb0IsRUFBRTtBQUM5QlgsT0FBTyxDQUFDbUIsaUJBQWlCLEVBQUU7QUFDM0JuQixPQUFPLENBQUN5QixnQkFBZ0IsRUFBRTs7QUFJMUIsK0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2J1YmJsZVNvcnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jcmVhdGVMaXN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY3JlYXRlVG9Eby5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9ncmFiRnJvbUxvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xpc3RBcnJheVRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zYXZlVG9Mb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zb3J0QnlQcmlvLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3RvcmFnZUF2YWlsYWJsZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG9EYXRhQ29uZHVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVBc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNQYXN0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlSVNPL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3BhcnNlSVNPLCBjb21wYXJlQXNjfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmV4cG9ydCBmdW5jdGlvbiBidWJibGVTb3J0KGFyZ3MpIHtcbiAgICBcbiAgICAvL0xvb3AgdGhyb3VnaCBhcnJheSBlbGVtZW50c1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcmdzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBsZXQgc2Vjb25kRWxlSW5kZXggPSBpbmRleCArIDE7XG4gICAgICAgIGNvbnN0IGZpcnN0VG9kb0VsZW1lbnQgPSBhcmdzW2luZGV4XTtcbiAgICAgICAgY29uc3Qgc2VjVG9kb0VsZW1lbnQgPSBhcmdzW2luZGV4KzFdO1xuXG4gICAgICAgIFxuICAgICAgICBjb25zdCBmaXJzdEVsZW1lbnREYXRlID0gcGFyc2VJU08obmV3IERhdGUoZmlyc3RUb2RvRWxlbWVudC5kdWVEYXRlKS50b0lTT1N0cmluZygpKTtcbiAgICAgICAgLy9jaGVja3MgdG8gc2VlIGlmIHRoZSBsb29wIGlzIGF0IHRoZSBlbmQgb2YgdGhlIGFycmF5LlxuICAgICAgICBpZihzZWNUb2RvRWxlbWVudCA9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzZWNFbGVtZW50RGF0ZSA9IHBhcnNlSVNPKG5ldyBEYXRlKHNlY1RvZG9FbGVtZW50LmR1ZURhdGUpLnRvSVNPU3RyaW5nKCkpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvL2lmIDEgcmV0dXJuZWQgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLCAtMSBmaXJzdCBkYXRlIGlzIGJlZm9yZSwgMCBkYXRlcyBhcmUgZXF1YWxcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vc2V0cyB0aGUgcmV0dXJuIHZhbCB0byAxIC0xIG9yIDAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcGFyZVZhbCA9IGNvbXBhcmVBc2MoZmlyc3RFbGVtZW50RGF0ZSxzZWNFbGVtZW50RGF0ZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgZmlyc3QgZWxlbWVudCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQgc3dhcCB0aGVpciBwbGFjZXMuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlVmFsID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc3dhcCBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJnc1tpbmRleF0gPSBzZWNUb2RvRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3Nbc2Vjb25kRWxlSW5kZXhdID0gZmlyc3RUb2RvRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy9yZXNldHMgZm9yIGxvb3AuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tcGFyZVZhbCA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9ub3RoaW5nIGNoYW5nZXNcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb21wYXJlVmFsID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vbm90aGluZyBjaGFuZ2VzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIGFyZ3M7XG5cbn0iLCJjbGFzcyBMaXN0IHtcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIH1cbiAgICAvL2FkZHMgZ2l2ZW4gb2JqIHRvIGxpc3QgYXJyYXlcbiAgICBhZGQodG9kbyl7IC8vISBJc3N1ZSB3aGVuIHBhZ2UgaXMgcmVmcmVzaGVkIGFuZCBuZXcgdG9kbyBpcyBhZGRlZCB0aGlzIG1ldGhvZCBkb2VzIG5vdCBleGlzdCB5ZXQuXG4gICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcbiAgICB9XG5cbiAgICByZW1vdmUoZGVsZXRlZFRvZG8pe1xuICAgICAgICBmb3IoIGxldCBpID0gMDsgaSA8IHRoaXMudG9kb3MubGVuZ3RoOyBpKyspeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIHRoaXMudG9kb3NbaV0udGl0bGUgPT09IGRlbGV0ZWRUb2RvKSB7IFxuICAgICAgICAgICAgICAgIHRoaXMudG9kb3Muc3BsaWNlKGksIDEpOyBcbiAgICAgICAgICAgICAgICBpLS07IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuXG59XG5cbmV4cG9ydCB7TGlzdH07IiwiXG5jbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxuXG4gXG59XG5cbmV4cG9ydCB7IFRvZG8gfTtcblxuLy90ZXN0IHB1c2ggdG8gZ2l0IiwiaW1wb3J0IHsgQ29uZHVjdG9yIH0gZnJvbSBcIi4vdG9kb0RhdGFDb25kdWN0b3JcIjtcbmltcG9ydCB7IGxpc3RBcnJheSB9IGZyb20gXCIuL2xpc3RBcnJheVRyYWNrZXJcIjtcbmltcG9ydCB7IGlzUGFzdCwgaXNUb2RheSwgcGFyc2VJU08gfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IGJ1YmJsZVNvcnQgfSBmcm9tIFwiLi9idWJibGVTb3J0XCI7XG5pbXBvcnQgeyBzb3J0QnlQcmlvIH0gZnJvbSBcIi4vc29ydEJ5UHJpb1wiO1xuaW1wb3J0IHsgc2F2ZVRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vc2F2ZVRvTG9jYWxTdG9yYWdlXCI7XG5cbmxldCBkYXRhQ29uZCA9IG5ldyBDb25kdWN0b3IoKTtcbmNsYXNzIERpc3BsYXkge1xuXHRjb25zdHJ1Y3RvcigpIHt9ICBcblx0Ly9jcmVhdGVzIGEgdGhlIGZvcm0gbmVlZGVkIGZyb20gdG9kb1xuXHR0b2RvRm9ybSgpIHtcblx0XHRsZXQgaW5wdXRBcnJheSA9IFtcInRpdGxlXCIsIFwiZGVzY3JpcHRpb25cIiwgXCJkdWVEYXRlXCIsIFwicHJpb3JpdHlcIiwgXCJsaXN0XCJdO1xuXG5cdFx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXHRcdGZvcm0uc2V0QXR0cmlidXRlKFwib25zdWJtaXRcIiwgXCJyZXR1cm4gZmFsc2VcIik7XG5cdFx0Zm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tZm9ybVwiKTtcblx0XHRjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jb250ZW50XCIpO1xuXHRcdGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVwiKTtcblx0XHR0b2RvQ29udGFpbmVyLmluc2VydEJlZm9yZShmb3JtLCBjbG9zZUJ1dHRvbik7XG5cdFx0Ly9lYWNoIGVsZW1lbnQgZGlzcGxheXMgZGlmZmVyZW50IGlucHV0cyBiYXNlZCBvbiB0aGVpciBuZWVkZWQgZGF0YS5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0QXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGVsZW1lbnQgPSBpbnB1dEFycmF5W2ldO1xuXHRcdFx0aWYgKGVsZW1lbnQgPT09IFwidGl0bGVcIikge1xuXHRcdFx0XHRsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRpdGxlXCIpO1xuXHRcdFx0XHRsYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGU6XCI7XG5cdFx0XHRcdGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGl0bGVcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGVsZW1lbnQgPT09IFwiZGVzY3JpcHRpb25cIikge1xuXHRcdFx0XHRsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NyaXB0aW9uXCIpO1xuXHRcdFx0XHRsYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCI7XG5cdFx0XHRcdGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVzY3JpcHRpb25cIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiKTtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGVsZW1lbnQgPT09IFwiZHVlRGF0ZVwiKSB7XG5cdFx0XHRcdGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZHVlLWRhdGVcIik7XG5cdFx0XHRcdGxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTpcIjtcblx0XHRcdFx0bGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWUtZGF0ZVwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImR1ZS1kYXRlXCIpO1xuXHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cdFx0XHR9XG5cdFx0XHQvL2NoYW5nZSB0aGlzIHRvIHJhZGlvIHdpdGggMyBwcmlvcml0eSBvcHRpb25zIGxvdyBtZWQgaGlnaFxuXHRcdFx0aWYgKGVsZW1lbnQgPT09IFwicHJpb3JpdHlcIikge1xuXHRcdFx0XHRsZXQgYXJyYXkgPSBbXCJsb3dcIiwgXCJtZWRcIiwgXCJoaWdoXCJdO1xuXHRcdFx0XHRsZXQgZmllbGRTZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XG5cdFx0XHRcdGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuXHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eVwiKTtcblx0XHRcdFx0bGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIjtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cdFx0XHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdFx0XHRjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG5cdFx0XHRcdFx0bGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRcdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBlbGVtZW50KTtcblx0XHRcdFx0XHRsYWJlbC50ZXh0Q29udGVudCA9IGVsZW1lbnQ7XG5cblx0XHRcdFx0XHRsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdFx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuXHRcdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGVsZW1lbnQpO1xuXHRcdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKTtcblx0XHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBlbGVtZW50KTtcblx0XHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGZpZWxkU2V0KTtcblx0XHRcdFx0XHRmaWVsZFNldC5hcHBlbmRDaGlsZChpbnB1dCk7XG5cdFx0XHRcdFx0ZmllbGRTZXQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZWxlbWVudCA9PT0gXCJsaXN0XCIpIHtcblx0XHRcdFx0bGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJMaXN0XCIpO1xuXHRcdFx0XHRsYWJlbC50ZXh0Q29udGVudCA9IFwiTGlzdDpcIjtcblx0XHRcdFx0bGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5cdFx0XHRcdHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxpc3RcIik7XG5cdFx0XHRcdHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibGlzdFwiKTtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0KTtcblxuXHRcdFx0XHRjb25zdCBsaXN0T3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdFwiKTtcblx0XHRcdFx0bGlzdE9wdGlvbnMuaW5uZXJIVE1MID0gXCJcIjtcblxuXHRcdFx0XHQvL1VwZGF0ZXMgb3B0aW9ucyBvbiBmb3JtIHdoZW4gbmV3IGxpc3QgaXMgY3JlYXRlZC5cblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHQvLyBjb25zdCBlbGVtZW50ID0gbGlzdEFycmF5W2ldLnRpdGxlO1xuXHRcdFx0XHRcdGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cdFx0XHRcdFx0b3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGxpc3RBcnJheVtpXS50aXRsZSk7XG5cdFx0XHRcdFx0b3B0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlzdC12YWx1ZVwiKTtcblx0XHRcdFx0XHRvcHRpb24udGV4dENvbnRlbnQgPVxuXHRcdFx0XHRcdFx0bGlzdEFycmF5W2ldLnRpdGxlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICtcblx0XHRcdFx0XHRcdGxpc3RBcnJheVtpXS50aXRsZS5zbGljZSgxKTtcblx0XHRcdFx0XHRzZWxlY3QuYXBwZW5kKG9wdGlvbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly9PTiBTVUJNSVQgRVZFTlQgRlVOQ1xuXHRcdGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRzdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcblx0XHRzdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJTdWJtaXRcIik7XG5cdFx0c3VibWl0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1mb3JtLWJ0blwiKTtcblx0XHRmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cdFx0bGV0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1mb3JtLWJ0blwiKTtcblx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0c3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRkYXRhQ29uZC5pbnNlcnRUb2RvSW50b0xpc3QoKTtcblx0XHRcdC8vIHNlbGYuZGlzcGxheVRvZG9BbW91bnQoKTtcblx0XHRcdGRhdGFDb25kLnRvZG9FZGl0QnV0dG9uTGlzdGVuZXIoKTtcblx0XHRcdC8vIGdyYWJzIHRoZSBzZWxlY3RlZCBsaXN0IGluIHRoZSBvcHRpb25zIGluIHRoZSBmb3JtXG5cblx0XHRcdC8vIGxldCBjb2xsZWN0aW9uID0gbGlzdHMuc2VsZWN0ZWRPcHRpb25zO1xuXG5cdFx0XHRjb25zdCBjdXJyZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcdFwiLmhlYWRlcl9fbGlzdC10aXRsZVwiXG5cdFx0XHQpLnRleHRDb250ZW50O1xuXG5cdFx0XHRjb25zdCBzZWxlY3RlZExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RcIikudmFsdWU7XG5cblx0XHRcdGlmIChzZWxlY3RlZExpc3QgPT09IGN1cnJlbnRMaXN0KSB7XG5cdFx0XHRcdHNlbGYuY2xlYXJUb2RvVmlldygpO1xuXHRcdFx0XHRzZWxmLmRpc3BsYXlUb2RvKCk7XG5cdFx0XHRcdHNlbGYuZWRpdEZvcm1Nb2RhbCgpO1xuXHRcdFx0XHRkYXRhQ29uZC50b2RvRWRpdEJ1dHRvbkxpc3RlbmVyKCk7XG5cdFx0XHRcdGRhdGFDb25kLnJlbW92ZVRvZG8oKTtcblx0XHRcdFx0c2VsZi5mb3JtUmVzZXQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNlbGYuZm9ybVJlc2V0KCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblx0ZWRpdEZvcm0oKSB7XG5cdFx0bGV0IGlucHV0QXJyYXkgPSBbXCJ0aXRsZVwiLCBcImRlc2NyaXB0aW9uXCIsIFwiZHVlRGF0ZVwiLCBcInByaW9yaXR5XCIsIFwibGlzdFwiXTtcblxuXHRcdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblx0XHRmb3JtLnNldEF0dHJpYnV0ZShcIm9uc3VibWl0XCIsIFwicmV0dXJuIGZhbHNlXCIpO1xuXHRcdGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0LWZvcm1cIik7XG5cdFx0Y29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1tb2RhbC1jb250ZW50XCIpO1xuXHRcdGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LWNsb3NlXCIpO1xuXHRcdHRvZG9Db250YWluZXIuaW5zZXJ0QmVmb3JlKGZvcm0sIGNsb3NlQnV0dG9uKTtcblx0XHQvL2VhY2ggZWxlbWVudCBkaXNwbGF5cyBkaWZmZXJlbnQgaW5wdXRzIGJhc2VkIG9uIHRoZWlyIG5lZWRlZCBkYXRhLlxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRBcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgZWxlbWVudCA9IGlucHV0QXJyYXlbaV07XG5cdFx0XHRpZiAoZWxlbWVudCA9PT0gXCJ0aXRsZVwiKSB7XG5cdFx0XHRcdGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZWRpdC10aXRsZVwiKTtcblx0XHRcdFx0bGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlOlwiO1xuXHRcdFx0XHRsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXQtdGl0bGVcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJlZGl0LXRpdGxlXCIpO1xuXG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuXHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblx0XHRcdH1cblx0XHRcdGlmIChlbGVtZW50ID09PSBcImRlc2NyaXB0aW9uXCIpIHtcblx0XHRcdFx0bGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJlZGl0LWRlc2NyaXB0aW9uXCIpO1xuXHRcdFx0XHRsYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCI7XG5cdFx0XHRcdGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdC1kZXNjcmlwdGlvblwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImVkaXQtZGVzY3JpcHRpb25cIik7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuXHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblx0XHRcdH1cblx0XHRcdGlmIChlbGVtZW50ID09PSBcImR1ZURhdGVcIikge1xuXHRcdFx0XHRsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImVkaXQtZHVlLWRhdGVcIik7XG5cdFx0XHRcdGxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTpcIjtcblx0XHRcdFx0bGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0LWR1ZS1kYXRlXCIpO1xuXHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZWRpdC1kdWUtZGF0ZVwiKTtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cdFx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXHRcdFx0fVxuXHRcdFx0Ly9jaGFuZ2UgdGhpcyB0byByYWRpbyB3aXRoIDMgcHJpb3JpdHkgb3B0aW9ucyBsb3cgbWVkIGhpZ2hcblx0XHRcdGlmIChlbGVtZW50ID09PSBcInByaW9yaXR5XCIpIHtcblx0XHRcdFx0bGV0IGFycmF5ID0gW1wibG93XCIsIFwibWVkXCIsIFwiaGlnaFwiXTtcblx0XHRcdFx0bGV0IGZpZWxkU2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xuXHRcdFx0XHRsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cblx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZWRpdC1wcmlvcml0eVwiKTtcblx0XHRcdFx0bGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIjtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cdFx0XHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdFx0XHRjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG5cdFx0XHRcdFx0bGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRcdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBlbGVtZW50KTtcblx0XHRcdFx0XHRsYWJlbC50ZXh0Q29udGVudCA9IGVsZW1lbnQ7XG5cblx0XHRcdFx0XHRsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdFx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuXHRcdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGBlZGl0LSR7ZWxlbWVudH1gKTtcblx0XHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBlbGVtZW50KTtcblx0XHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZWRpdC1wcmlvcml0eVwiKTtcblx0XHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGZpZWxkU2V0KTtcblx0XHRcdFx0XHRmaWVsZFNldC5hcHBlbmRDaGlsZChpbnB1dCk7XG5cdFx0XHRcdFx0ZmllbGRTZXQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZWxlbWVudCA9PT0gXCJsaXN0XCIpIHtcblx0XHRcdFx0bGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJMaXN0XCIpO1xuXHRcdFx0XHRsYWJlbC50ZXh0Q29udGVudCA9IFwiTGlzdDpcIjtcblx0XHRcdFx0bGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5cdFx0XHRcdHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXQtbGlzdFwiKTtcblx0XHRcdFx0c2VsZWN0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJsaXN0XCIpO1xuXHRcdFx0XHRmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcblx0XHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChzZWxlY3QpO1xuXG5cdFx0XHRcdGNvbnN0IGVkaXRMaXN0T3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1saXN0XCIpO1xuXHRcdFx0XHRlZGl0TGlzdE9wdGlvbnMuaW5uZXJIVE1MID0gXCJcIjtcblxuXHRcdFx0XHQvL1VwZGF0ZXMgb3B0aW9ucyBvbiBmb3JtIHdoZW4gbmV3IGxpc3QgaXMgY3JlYXRlZC5cblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHQvLyBjb25zdCBlbGVtZW50ID0gbGlzdEFycmF5W2ldLnRpdGxlO1xuXHRcdFx0XHRcdGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cdFx0XHRcdFx0b3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGxpc3RBcnJheVtpXS50aXRsZSk7XG5cdFx0XHRcdFx0b3B0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlzdC12YWx1ZVwiKTtcblx0XHRcdFx0XHRvcHRpb24udGV4dENvbnRlbnQgPVxuXHRcdFx0XHRcdFx0bGlzdEFycmF5W2ldLnRpdGxlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICtcblx0XHRcdFx0XHRcdGxpc3RBcnJheVtpXS50aXRsZS5zbGljZSgxKTtcblx0XHRcdFx0XHRzZWxlY3QuYXBwZW5kKG9wdGlvbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRlZGl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG5cdFx0ZWRpdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIk1ha2UgQ2hhbmdlc1wiKTtcblx0XHRlZGl0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdC1mb3JtLWJ0blwiKTtcblx0XHRmb3JtLmFwcGVuZENoaWxkKGVkaXQpO1xuXHRcdC8vTWFrZSBDaGFuZ2VzIEVWRU5UIEZVTkNcblx0XHRjb25zdCBtYWtlQ2hhbmdlc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1mb3JtLWJ0blwiKTtcblx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0bWFrZUNoYW5nZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdHNlbGYuZWRpdEZvcm1Nb2RhbCgpO1xuXHRcdH0pO1xuXHR9XG5cdC8vU2hvd3MgdG9kbyBkYXRhIG9uIGVkaXQgZm9ybVxuXHRzZWxlY3RlZFRvZG9FZGl0KHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvKSB7XG5cdFx0Y29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10aXRsZVwiKTtcblx0XHRjb25zdCBkZXNjSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtZGVzY3JpcHRpb25cIik7XG5cdFx0Y29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LWR1ZS1kYXRlXCIpO1xuXHRcdGNvbnN0IHByaW9Mb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtbG93XCIpO1xuXHRcdGNvbnN0IHByaW9NZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtbWVkXCIpO1xuXHRcdGNvbnN0IHByaW9IaWdoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LWhpZ2hcIik7XG5cblx0XHR0aXRsZUlucHV0LnZhbHVlID0gdGl0bGU7XG5cdFx0ZGVzY0lucHV0LnZhbHVlID0gZGVzYztcblx0XHRkdWVEYXRlSW5wdXQudmFsdWUgPSBkdWVEYXRlO1xuXG5cdFx0aWYgKHByaW8gPT09IFwibG93XCIpIHtcblx0XHRcdHByaW9Mb3cuY2hlY2tlZCA9IHRydWU7XG5cdFx0fSBlbHNlIGlmIChwcmlvID09PSBcIm1lZFwiKSB7XG5cdFx0XHRwcmlvTWVkLmNoZWNrZWQgPSB0cnVlO1xuXHRcdH0gZWxzZSBpZiAocHJpbyA9PT0gXCJoaWdoXCIpIHtcblx0XHRcdHByaW9IaWdoLmNoZWNrZWQgPSB0cnVlO1xuXHRcdH1cblx0XHQvLyBkdWVEYXRlSW5wdXRcblx0fVxuXG5cdGxpc3RGb3JtKCkge1xuXHRcdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblx0XHRmb3JtLnNldEF0dHJpYnV0ZShcIm9uc3VibWl0XCIsIFwicmV0dXJuIGZhbHNlXCIpO1xuXHRcdGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaXN0LWZvcm1cIik7XG5cdFx0Y29uc3QgbGlzdFZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1saXN0XCIpO1xuXHRcdGxpc3RWaWV3LmFwcGVuZENoaWxkKGZvcm0pO1xuXG5cdFx0bGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRcdGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5ldy1saXN0XCIpO1xuXHRcdGxhYmVsLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJuZXctbGlzdFwiKTtcblx0XHRsYWJlbC50ZXh0Q29udGVudCA9IFwiQWRkIExpc3Q6XCI7XG5cdFx0bGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXHRcdGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3LWxpc3RcIik7XG5cdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5ldy1saXN0XCIpO1xuXHRcdGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuXHRcdGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG5cdFx0Y29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuXHRcdHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlN1Ym1pdFwiKTtcblx0XHRzdWJtaXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaXN0LWZvcm0tYnRuXCIpO1xuXHRcdGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblx0fVxuXG5cdGZvcm1SZXNldCgpIHtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZm9ybVwiKS5yZXNldCgpO1xuXHR9XG5cdC8vIGVkaXRGb3JtUmVzZXQoKSB7XG5cdC8vIFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWZvcm1cIikucmVzZXQoKTtcblx0Ly8gfVxuXG5cdGRpc3BsYXlMaXN0QnV0dG9ucygpIHtcblx0XHRkYXRhQ29uZC5yZW1vdmVUb2RvKCk7XG5cdFx0Ly9EaXNwbGF5cyBkZWZhdWx0IENhcHR1cmUgbGlzdCBpbiBsaXN0IHZpZXcuXG5cdFx0Y29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdF9fY29udGFpbmVyXCIpO1xuXHRcdFxuXHRcdGNvbnN0IGluaXRpYWxMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LW9wdGlvblwiKTtcblx0XHQvL2NyZWF0ZXMgZGVmYXVsdCBsaXN0IGlmIGl0IGlzIG5vdCB0aGVyZS5cblx0XHRpZiAoaW5pdGlhbExpc3QgPT0gbnVsbCkge1xuXHRcdFx0Y29uc3QgY2FwdHVyZUxpc3QgPSBsaXN0QXJyYXlbMF0udGl0bGU7XG5cdFx0XHRjb25zdCBsaXN0QnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGxpc3RCdG5Db250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaXN0LWJ1dHRvbnNcIik7XG5cdFx0XHRcblx0XHRcdGNvbnN0IGRlZmF1bHRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRcdC8vY3JlYXRlIGNvbnRhaW5lciBmb3IgbGlzdCBhbmQgaXRzIGRlbGV0ZSBidXR0b24uXG5cdFx0XHRcblx0XHRcdGNvbnN0IGxpc3REZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdFx0bGlzdERlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlIExpc3RcIjtcblx0XHRcdGxpc3REZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaXN0LWRlbGV0ZS1idG5cIik7XG5cdFx0XHRcblx0XHRcdGRlZmF1bHRMaXN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlzdC1vcHRpb25cIik7XG5cdFx0XHRkZWZhdWx0TGlzdC50ZXh0Q29udGVudCA9IGNhcHR1cmVMaXN0O1xuXHRcdFx0XG5cdFx0XHRsaXN0QnRuQ29udGFpbmVyLmFwcGVuZChkZWZhdWx0TGlzdCk7XG5cdFx0XHRsaXN0QnRuQ29udGFpbmVyLmFwcGVuZChsaXN0RGVsZXRlQnV0dG9uKTtcblx0XHRcdGxpc3RDb250YWluZXIuYXBwZW5kKGxpc3RCdG5Db250YWluZXIpO1xuXHRcdFx0XG5cdFx0XHRkZWZhdWx0TGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdFx0dGhpcy5jbGVhclRvZG9WaWV3KCk7XG5cdFx0XHRcdHRoaXMuZGlzcGxheVNlbGVjdGVkTGlzdChlKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHQvL2NyZWF0ZXMgbGlzdHMgYnV0dG9ucyBpZiB0aGVyZSBhcmUgbGlzdCBvbiBsb2NhbCBzdG9yYWdlLlxuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgbGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBsaXN0TmFtZSA9IGxpc3RBcnJheVtpXS50aXRsZTtcblx0XHRcdFxuXHRcdFx0Y29uc3QgaW5wdXRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRcdGlucHV0TGlzdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpc3Qtb3B0aW9uXCIpO1xuXHRcdFx0aW5wdXRMaXN0LnRleHRDb250ZW50ID0gbGlzdE5hbWU7XG5cdFx0XHRcblx0XHRcdGNvbnN0IGxpc3RCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0bGlzdEJ0bkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpc3QtYnV0dG9uc1wiKTtcblx0XHRcdFxuXHRcdFx0bGlzdENvbnRhaW5lci5hcHBlbmQobGlzdEJ0bkNvbnRhaW5lcik7XG5cdFx0XHRsaXN0QnRuQ29udGFpbmVyLmFwcGVuZChpbnB1dExpc3QpO1xuXHRcdFx0XG5cdFx0XHQvL2FkZHMgZGVsZXRlIGJ1dHRvbiB0byBuZXdseSBjcmVhdGVkIGxpc3Rcblx0XHRcdGNvbnN0IGxpc3REZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdFx0bGlzdERlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlIExpc3RcIjtcblx0XHRcdGxpc3REZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaXN0LWRlbGV0ZS1idG5cIik7XG5cdFx0XHRcblx0XHRcdGxpc3RCdG5Db250YWluZXIuYXBwZW5kKGxpc3REZWxldGVCdXR0b24pO1xuXHRcdH1cblx0XHRcblx0XHQvL0FkZHMgZXZlbnQgbGlzdGVuZXJzIHRvIGxpc3QgYnV0dG9ucyBwdWxsZWQgZm9yIGxvY2FsIHN0b3JhZ2Vcblx0XHRjb25zdCBsb2NhbExpc3RPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0LW9wdGlvblwiKTtcblx0XHRcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbG9jYWxMaXN0T3B0aW9ucy5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdGNvbnN0IGVsZW1lbnQgPSBsb2NhbExpc3RPcHRpb25zW2luZGV4XTtcblx0XHRcdFxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdFx0dGhpcy5jbGVhclRvZG9WaWV3KCk7XG5cdFx0XHRcdHRoaXMuZGlzcGxheVNlbGVjdGVkTGlzdChlKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXHRBZGRFdmVudExpc3RlbmVyVG9MaXN0U3VibWl0KCkge1xuXHRcdGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RfX2NvbnRhaW5lclwiKTtcblx0XHQvL0FkZHMgZXZlbnQgbGlzdGVuZXJzIHRvIG5ld2x5IGNyZWF0ZWQgbGlzdC5cblx0XHRjb25zdCBsaXN0U3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0LWZvcm0tYnRuXCIpO1xuXHRcdGxpc3RTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdGxldCBsaXN0QXJyYXlMZW4gPSBsaXN0QXJyYXkubGVuZ3RoO1xuXHRcdFx0bGV0IG5ld0xpc3QgPSBsaXN0QXJyYXlbbGlzdEFycmF5TGVuIC0gMV0udGl0bGU7XG5cdFx0XHRjb25zdCBpbnB1dExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdFx0aW5wdXRMaXN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlzdC1vcHRpb25cIik7XG5cdFx0XHRpbnB1dExpc3QudGV4dENvbnRlbnQgPSBuZXdMaXN0O1xuXHRcdFx0Y29uc3QgbGlzdEJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRsaXN0QnRuQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlzdC1idXR0b25zXCIpO1xuXHRcdFx0XG5cdFx0XHRsaXN0Q29udGFpbmVyLmFwcGVuZChsaXN0QnRuQ29udGFpbmVyKTtcblx0XHRcdGxpc3RCdG5Db250YWluZXIuYXBwZW5kKGlucHV0TGlzdCk7XG5cdFx0XHRcblx0XHRcdC8vYWRkcyBkZWxldGUgYnV0dG9uIHRvIG5ld2x5IGNyZWF0ZWQgbGlzdFxuXHRcdFx0Y29uc3QgbGlzdERlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFx0XHRsaXN0RGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGUgTGlzdFwiO1xuXHRcdFx0bGlzdERlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpc3QtZGVsZXRlLWJ0blwiKTtcblx0XHRcdFxuXHRcdFx0bGlzdEJ0bkNvbnRhaW5lci5hcHBlbmQobGlzdERlbGV0ZUJ1dHRvbik7XG5cdFx0XHR0aGlzLnJlbW92ZURlbGV0ZUxpc3RMaXN0ZW5lcigpO1xuXHRcdFx0dGhpcy5hZGREZWxldGVMaXN0TGlzdGVuZXIoKTtcblx0XHRcdFxuXHRcdFx0c2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG5cdFx0XHRjb25zb2xlLmxvZyhsaXN0QXJyYXkpO1xuXHRcdFx0XG5cdFx0XHQvL0FkZGluZyBldmVudCBsaXN0ZW5lciB0byBlYWNoIGxpc3QgYnV0dG9uIHRoYXQgd2lsbCBydW4gdG8gZGlzcGxheSB0b2RvcyB3aGVuIGNsaWNrZWQuXG5cdFx0XHRjb25zdCBsaXN0T3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdC1vcHRpb25cIik7XG5cdFx0XHRcblx0XHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaXN0T3B0aW9ucy5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdFx0Y29uc3QgZWxlbWVudCA9IGxpc3RPcHRpb25zW2luZGV4XTtcblx0XHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdFx0XHR0aGlzLmNsZWFyVG9kb1ZpZXcoKTtcblx0XHRcdFx0XHR0aGlzLmRpc3BsYXlTZWxlY3RlZExpc3QoZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cdFxuXHRkaXNwbGF5U2VsZWN0ZWRMaXN0KGUpIHtcblx0XHRsZXQgZGF0YUNvbmQgPSBuZXcgQ29uZHVjdG9yKCk7XG5cdFx0Ly90aGUgbGlzdCB0aGF0IHdhcyBjbGlja2VkLlxuXHRcdFxuXHRcdHRoaXMuc2VsZWN0ZWRMaXN0ID0gZS50YXJnZXQuaW5uZXJUZXh0O1xuXHRcdFxuXHRcdGNvbnN0IGxpc3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19saXN0LXRpdGxlXCIpO1xuXHRcdGxpc3RUaXRsZS50ZXh0Q29udGVudCA9IHRoaXMuc2VsZWN0ZWRMaXN0O1xuXHRcdFxuXHRcdC8vIHRoaXMuZGlzcGxheVRvZG9BbW91bnQoKTtcblx0XHR0aGlzLmRpc3BsYXlUb2RvKCk7XG5cdFx0ZGF0YUNvbmQudG9kb0VkaXRCdXR0b25MaXN0ZW5lcigpO1xuXHRcdGRhdGFDb25kLnJlbW92ZVRvZG8oKTtcblx0fVxuXHRcblx0cmVtb3ZlRnJvbUFycmF5ID0gKGUpID0+IHtcblx0XHRjb25zb2xlLmxvZyhcIkRlbGV0ZSBidXR0b24gd2FzIGNsaWNrZWRcIik7XG5cdFx0Y29uc3QgdGFyZ2V0TGlzdCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG5cdFx0Y29uc29sZS5sb2codGFyZ2V0TGlzdCk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGxpc3QgPSBsaXN0QXJyYXlbaV0udGl0bGU7XG5cdFx0XHRjb25zb2xlLmxvZyhpKTtcblx0XHRcdGNvbnNvbGUubG9nKGxpc3RBcnJheSk7XG5cdFx0XHRpZiAobGlzdCA9PT0gdGFyZ2V0TGlzdCkge1xuXHRcdFx0XHRsaXN0QXJyYXkuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcInlvdSByZW1vdmVkOiBcIiArIHRhcmdldExpc3QpO1xuXHRcdFx0XHRjb25zb2xlLnRhYmxlKGxpc3RBcnJheSk7XG5cdFx0XHRcdHRoaXMuY2xlYXJMaXN0VmlldygpO1xuXHRcdFx0XHR0aGlzLmRpc3BsYXlMaXN0QnV0dG9ucygpO1xuXHRcdFx0XHR0aGlzLmFkZERlbGV0ZUxpc3RMaXN0ZW5lcigpO1xuXHRcdFx0XHRcblx0XHRcdFx0c2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0XG5cdGFkZERlbGV0ZUxpc3RMaXN0ZW5lcigpIHtcblx0XHRjb25zdCBsaXN0RGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0LWRlbGV0ZS1idG5cIik7XG5cdFx0XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0RGVsZXRlQnRuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHQvL29uIGNsaWNrIGRlbGV0ZSB0aGUgbGlzdCBmcm9tIHRoZSB2aWV3XG5cdFx0XHQvL2RlbGV0ZSB0aGUgbGlzdCBmcm9tIHRoZSBsaXN0QXJyYXkgb2JqZWN0XG5cdFx0XHQvL3VwZGF0ZSB0aGUgdmlld1xuXHRcdFx0Ly91cGRhdGUgdGhlIGxvY2FsU3RvcmFnZSB3aXRoIHJlbW92ZWQgZGF0YS5cblx0XHRcdGxldCBkZWxldGVCdG5FbGVtZW50ID0gbGlzdERlbGV0ZUJ0bltpXTtcblx0XHRcdFxuXHRcdFx0ZGVsZXRlQnRuRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5yZW1vdmVGcm9tQXJyYXkpO1xuXHRcdH1cblx0fVxuXHRcblx0cmVtb3ZlRGVsZXRlTGlzdExpc3RlbmVyKCkge1xuXHRcdGNvbnN0IGxpc3REZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3QtZGVsZXRlLWJ0blwiKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdERlbGV0ZUJ0bi5sZW5ndGg7IGkrKykge1xuXHRcdFx0Ly9vbiBjbGljayBkZWxldGUgdGhlIGxpc3QgZnJvbSB0aGUgdmlld1xuXHRcdFx0Ly9kZWxldGUgdGhlIGxpc3QgZnJvbSB0aGUgbGlzdEFycmF5IG9iamVjdFxuXHRcdFx0Ly91cGRhdGUgdGhlIHZpZXdcblx0XHRcdC8vdXBkYXRlIHRoZSBsb2NhbFN0b3JhZ2Ugd2l0aCByZW1vdmVkIGRhdGEuXG5cdFx0XHRsZXQgZGVsZXRlQnRuRWxlbWVudCA9IGxpc3REZWxldGVCdG5baV07XG5cdFx0XHRkZWxldGVCdG5FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnJlbW92ZUZyb21BcnJheSk7XG5cdFx0fVxuXHR9XG5cdFxuXHRkaXNwbGF5VG9kbygpIHtcblx0XHRjb25zdCBjdXJyZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcIi5oZWFkZXJfX2xpc3QtdGl0bGVcIlxuXHRcdFx0KS50ZXh0Q29udGVudDtcblx0XHRcdGNvbnN0IHRvZG9WaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXZpZXdcIik7XG5cdFx0XHRcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdC8vbGlzdFRpdGxlIGlzIGJlaW5nIHVzZWQgdG8gaG9sZCB2YWx1ZSBvZiB0aGUgbGlzdCB0aXRsZSB0byBjaGVjayBpZiBpdCBtYXRjaGVzIHRoZSBzZWxlY3RlZCBsaXN0LlxuXHRcdFx0XHRsZXQgbGlzdFRpdGxlID0gbGlzdEFycmF5W2ldLnRpdGxlO1xuXHRcdFx0XHRsZXQgdGhpc0xpc3QgPSBsaXN0QXJyYXlbaV07XG5cdFx0XHRcdGxldCBsaXN0VG9kb0xlbiA9IGxpc3RBcnJheVtpXS50b2Rvcy5sZW5ndGg7XG5cdFx0XHRcdFxuXHRcdFx0XHQvLyBjb25zdCBzZWxlY3RlZExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RcIikudmFsdWU7XG5cdFx0XHRcdGlmIChjdXJyZW50TGlzdCA9PT0gbGlzdFRpdGxlICYmIGxpc3RUb2RvTGVuID4gMCkge1xuXHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGxpc3RUb2RvTGVuOyBqKyspIHtcblx0XHRcdFx0XHQvLyBjb25zdCBlbGVtZW50ID0gbGlzdEFycmF5LnRvZG9zW2luZGV4XTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0XHRjb25zdCB0b2RvVG9wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0XHRjb25zdCB0b2RvQm90RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblx0XHRcdFx0XHRjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRcdFx0XHRcdGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0XHRcdFx0XHRjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRcdFx0XHRcdGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdFx0XHRcdGNvbnN0IGRlbGV0ZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHRpdGxlLnRleHRDb250ZW50ID0gdGhpc0xpc3QudG9kb3Nbal0udGl0bGU7XG5cdFx0XHRcdFx0ZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0aGlzTGlzdC50b2Rvc1tqXS5kZXNjcmlwdGlvbjtcblx0XHRcdFx0XHRkdWVEYXRlLnRleHRDb250ZW50ID0gdGhpc0xpc3QudG9kb3Nbal0uZHVlRGF0ZTtcblx0XHRcdFx0XHRwcmlvcml0eS50ZXh0Q29udGVudCA9IHRoaXNMaXN0LnRvZG9zW2pdLnByaW9yaXR5O1xuXHRcdFx0XHRcdGVkaXQudGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcblx0XHRcdFx0XHRkZWxldGVUb2RvLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblx0XHRcdFx0XHQvLyBDb250YWluZXIgQXR0cmlidXRlc1xuXHRcdFx0XHRcdHRvZG9Db250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLW9ialwiKTtcblx0XHRcdFx0XHR0b2RvVG9wRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby10b3AtZGl2XCIpO1xuXHRcdFx0XHRcdHRvZG9Cb3REaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLWJvdC1kaXZcIik7XG5cdFx0XHRcdFx0Ly9FbGVtZW50IEF0dHJpYnV0ZXNcblx0XHRcdFx0XHR0aXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8taXRlbXMgdG9kby10aXRsZVwiKTtcblx0XHRcdFx0XHRkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8taXRlbXMgdG9kby1kZXNjXCIpO1xuXHRcdFx0XHRcdGR1ZURhdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLWl0ZW1zIHRvZG8tZHVlZGF0ZVwiKTtcblx0XHRcdFx0XHRwcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8taXRlbXMgdG9kby1wcmlvcml0eVwiKTtcblx0XHRcdFx0XHRlZGl0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1pdGVtcyB0b2RvLWVkaXRcIik7XG5cdFx0XHRcdFx0ZGVsZXRlVG9kby5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8taXRlbXMgdG9kby1kZWxldGVcIik7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dG9kb1RvcERpdi5hcHBlbmQodGl0bGUpO1xuXHRcdFx0XHRcdHRvZG9Ub3BEaXYuYXBwZW5kKHByaW9yaXR5KTtcblx0XHRcdFx0XHR0b2RvQm90RGl2LmFwcGVuZChkdWVEYXRlKTtcblx0XHRcdFx0XHR0b2RvQm90RGl2LmFwcGVuZChkZXNjcmlwdGlvbik7XG5cdFx0XHRcdFx0dG9kb0JvdERpdi5hcHBlbmQoZWRpdCk7XG5cdFx0XHRcdFx0dG9kb0JvdERpdi5hcHBlbmQoZGVsZXRlVG9kbyk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb1RvcERpdik7XG5cdFx0XHRcdFx0dG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb0JvdERpdik7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dG9kb1ZpZXcuYXBwZW5kKHRvZG9Db250YWluZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMuZGlzcGxheVRvZG9BbW91bnQoKTtcblx0fVxuXHRcblx0Ly9DaGFuZ2VzIG51bWJlciBhbW91bnQgb2YgdG9kb3MuXG5cdGRpc3BsYXlUb2RvQW1vdW50KCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBsaXN0VGl0bGUgPSBsaXN0QXJyYXlbaV0udGl0bGU7XG5cdFx0XHRjb25zdCBsaXN0VG9kb0xlbiA9IGxpc3RBcnJheVtpXS50b2Rvcy5sZW5ndGg7XG5cdFx0XHRcblx0XHRcdGlmIChsaXN0VGl0bGUgPT09IHRoaXMuc2VsZWN0ZWRMaXN0KSB7XG5cdFx0XHRcdGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlcl9fdG9kby1hbW91bnRcIik7XG5cdFx0XHRcdGNvdW50ZXIudGV4dENvbnRlbnQgPSBsaXN0VG9kb0xlbjtcblx0XHRcdH1cblx0XHRcdC8vV2lsbCB1cGRhdGUgY291bnRlciBldmVuIGlmIGxpc3Rub2RlIGlzIG5vdCBzZWxlY3RlZC5cblx0XHRcdGxldCBkZWZhdWx0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcdFwiLmhlYWRlcl9fbGlzdC10aXRsZVwiXG5cdFx0XHRcdCkudGV4dENvbnRlbnQ7XG5cdFx0XHRcdGlmIChsaXN0VGl0bGUgPT09IGRlZmF1bHRMaXN0KSB7XG5cdFx0XHRcdGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlcl9fdG9kby1hbW91bnRcIik7XG5cdFx0XHRcdGNvdW50ZXIudGV4dENvbnRlbnQgPSBsaXN0VG9kb0xlbjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cdGNsZWFyVG9kb1ZpZXcoKSB7XG5cdFx0Y29uc3QgdG9kb1ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tdmlld1wiKTtcblx0XHR0b2RvVmlldy5pbm5lckhUTUwgPSBcIlwiO1xuXHR9XG5cblx0Y2xlYXJMaXN0VmlldygpIHtcblx0XHRjb25zdCBsaXN0VmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdF9fY29udGFpbmVyXCIpO1xuXHRcdGxpc3RWaWV3LmlubmVySFRNTCA9IFwiXCI7XG5cdH1cblx0XG5cdHRvZG9Gb3JtTW9kYWwoKSB7XG5cdFx0bGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsXCIpO1xuXG5cdFx0Ly8gR2V0IHRoZSBidXR0b24gdGhhdCBvcGVucyB0aGUgbW9kYWxcblx0XHRsZXQgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWZvcm0tbW9kYWxcIik7XG5cdFx0XG5cdFx0Ly8gR2V0IHRoZSA8c3Bhbj4gZWxlbWVudCB0aGF0IGNsb3NlcyB0aGUgbW9kYWxcblx0XHRsZXQgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKVswXTtcblxuXHRcdC8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIHRoZSBidXR0b24sIG9wZW4gdGhlIG1vZGFsXG5cdFx0YnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdH07XG5cdFx0XG5cdFx0Ly8gV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gPHNwYW4+ICh4KSwgY2xvc2UgdGhlIG1vZGFsXG5cdFx0c3Bhbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdH07XG5cdFx0XG5cdFx0Ly8gV2hlbiB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZSB0aGUgbW9kYWwsIGNsb3NlIGl0XG5cdFx0d2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsKSB7XG5cdFx0XHRcdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cdGVkaXRGb3JtTW9kYWwoKSB7XG5cdFx0bGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LW1vZGFsXCIpO1xuXHRcdFxuXHRcdC8vIEdldCB0aGUgYnV0dG9uIHRoYXQgb3BlbnMgdGhlIG1vZGFsXG5cdFx0bGV0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1lZGl0XCIpO1xuXHRcdFxuXHRcdC8vIEdldCB0aGUgPHNwYW4+IGVsZW1lbnQgdGhhdCBjbG9zZXMgdGhlIG1vZGFsXG5cdFx0bGV0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZWRpdC1jbG9zZVwiKVswXTtcblx0XHRcblx0XHQvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyB0aGUgYnV0dG9uLCBvcGVuIHRoZSBtb2RhbFxuXHRcdGJ0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHR9O1xuXHRcdFxuXHRcdC8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIDxzcGFuPiAoeCksIGNsb3NlIHRoZSBtb2RhbFxuXHRcdHNwYW4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHR9O1xuXHRcdFxuXHRcdC8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIGFueXdoZXJlIG91dHNpZGUgb2YgdGhlIG1vZGFsLCBjbG9zZSBpdFxuXHRcdC8vIXRvZG8gQnVnIHVuYWJsZSB0byBleGl0IGVkaXQgc2luY2UgdGhpcyBmdW5jIGlzIG5vdCBsaXN0ZW5pbmcgd2hlbiBpbiBhbm90aGVyIGxpc3Rcblx0XHR3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0aWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWwpIHtcblx0XHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblx0XG5cdGRpc3BsYXlBbGxUYXNrcygpIHtcblx0XHRjb25zdCBhbGxUYXNrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsLXRhc2tzXCIpO1xuXHRcdGFsbFRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHQvLyBjbGVhciB0b2RvIHZpZXcgdGl0bGUgYW5kIGFjaGFuZ2UgdG8gQWxsIFRhc2tzXG5cdFx0XHRjb25zdCB0b2RvVmlld0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19saXN0LXRpdGxlXCIpO1xuXHRcdFx0XG5cdFx0XHR0b2RvVmlld0hlYWRlci50ZXh0Q29udGVudCA9IFwiQWxsIFRhc2tzXCI7XG5cdFx0XHRcblx0XHRcdGNvbnN0IGhlYWRlckNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlcl9fdG9kby1hbW91bnRcIik7XG5cdFx0XHRcblx0XHRcdGxldCBjb3VudEhvbGRlciA9IDA7XG5cdFx0XHRcblx0XHRcdC8vVXBkYXRlcyB0aGUgaGVhZGVyIGNvdW50ZXIgd2l0aCBhbW91bnQgb2YgYWxsIHRvZG9zIGluIGFsbCBsaXN0cy5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IGxpc3RUb2Rvc0xlbiA9IGxpc3RBcnJheVtpXS50b2Rvcy5sZW5ndGg7XG5cdFx0XHRcdGNvdW50SG9sZGVyICs9IGxpc3RUb2Rvc0xlbjtcblx0XHRcdFx0aGVhZGVyQ291bnRlci50ZXh0Q29udGVudCA9IGNvdW50SG9sZGVyO1xuXHRcdFx0fVxuXHRcdFx0Ly8gY2xlYXIgYW5kIHVwZGF0ZSB0b2RvIHZpZXcgd2l0aCBhbGwgdGFza3Ncblx0XHRcdGNvbnN0IHRvZG9WaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXZpZXdcIik7XG5cdFx0XHR0b2RvVmlldy5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdFx0XG5cdFx0XHQvL1VwZGF0ZSB0b2RvIHZpZXcgd2l0aCBhbGwgdG9kb3Ncblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdC8vbGlzdFRpdGxlIGlzIGJlaW5nIHVzZWQgdG8gaG9sZCB2YWx1ZSBvZiB0aGUgbGlzdCB0aXRsZSB0byBjaGVjayBpZiBpdCBtYXRjaGVzIHRoZSBzZWxlY3RlZCBsaXN0LlxuXHRcdFx0XHRcblx0XHRcdFx0bGV0IHRoaXNMaXN0ID0gbGlzdEFycmF5W2ldO1xuXHRcdFx0XHRsZXQgbGlzdFRvZG9MZW4gPSBsaXN0QXJyYXlbaV0udG9kb3MubGVuZ3RoO1xuXHRcdFx0XHRcblx0XHRcdFx0Ly9DeWNsZXMgdGhyb3VnaCBlYWNoIHRvZG8gYW5kIGFwcGVuZHMgdGhlbSBpbnRvIHRoZSB0b2RvLXZpZXdcblx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBsaXN0VG9kb0xlbjsgaisrKSB7XG5cdFx0XHRcdFx0Y29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdFx0Y29uc3QgdG9kb1RvcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdFx0Y29uc3QgdG9kb0JvdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cblx0XHRcdFx0XHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblx0XHRcdFx0XHRjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRcdFx0XHRcdGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0XHRcdFx0XHRjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRcdFx0XHRcdGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdFx0XHRcdGNvbnN0IGRlbGV0ZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHRpdGxlLnRleHRDb250ZW50ID0gdGhpc0xpc3QudG9kb3Nbal0udGl0bGU7XG5cdFx0XHRcdFx0ZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0aGlzTGlzdC50b2Rvc1tqXS5kZXNjcmlwdGlvbjtcblx0XHRcdFx0XHRkdWVEYXRlLnRleHRDb250ZW50ID0gdGhpc0xpc3QudG9kb3Nbal0uZHVlRGF0ZTtcblx0XHRcdFx0XHRwcmlvcml0eS50ZXh0Q29udGVudCA9IHRoaXNMaXN0LnRvZG9zW2pdLnByaW9yaXR5O1xuXHRcdFx0XHRcdGVkaXQudGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcblx0XHRcdFx0XHRkZWxldGVUb2RvLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblx0XHRcdFx0XHQvLyBDb250YWluZXIgQXR0cmlidXRlc1xuXHRcdFx0XHRcdHRvZG9Db250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLW9ialwiKTtcblx0XHRcdFx0XHR0b2RvVG9wRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby10b3AtZGl2XCIpO1xuXHRcdFx0XHRcdHRvZG9Cb3REaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLWJvdC1kaXZcIik7XG5cdFx0XHRcdFx0Ly9FbGVtZW50IEF0dHJpYnV0ZXNcblx0XHRcdFx0XHR0aXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8taXRlbXMgdG9kby10aXRsZVwiKTtcblx0XHRcdFx0XHRkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8taXRlbXMgdG9kby1kZXNjXCIpO1xuXHRcdFx0XHRcdGR1ZURhdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLWl0ZW1zIHRvZG8tZHVlZGF0ZVwiKTtcblx0XHRcdFx0XHRwcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8taXRlbXMgdG9kby1wcmlvcml0eVwiKTtcblx0XHRcdFx0XHRlZGl0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1pdGVtcyB0b2RvLWVkaXRcIik7XG5cdFx0XHRcdFx0ZGVsZXRlVG9kby5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8taXRlbXMgdG9kby1kZWxldGVcIik7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dG9kb1RvcERpdi5hcHBlbmQodGl0bGUpO1xuXHRcdFx0XHRcdHRvZG9Ub3BEaXYuYXBwZW5kKHByaW9yaXR5KTtcblx0XHRcdFx0XHR0b2RvQm90RGl2LmFwcGVuZChkdWVEYXRlKTtcblx0XHRcdFx0XHR0b2RvQm90RGl2LmFwcGVuZChkZXNjcmlwdGlvbik7XG5cdFx0XHRcdFx0dG9kb0JvdERpdi5hcHBlbmQoZWRpdCk7XG5cdFx0XHRcdFx0dG9kb0JvdERpdi5hcHBlbmQoZGVsZXRlVG9kbyk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb1RvcERpdik7XG5cdFx0XHRcdFx0dG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb0JvdERpdik7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dG9kb1ZpZXcuYXBwZW5kKHRvZG9Db250YWluZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0ZGF0YUNvbmQucmVtb3ZlVG9kbygpO1xuXHR9XG5cdFxuXHRkaXNwbGF5VG9kb1Rhc2tzKHRvZG9BcnJheSkge1xuXHRcdHRoaXMuY2xlYXJUb2RvVmlldygpO1xuXHRcdFxuXHRcdGNvbnN0IHRvZG9WaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXZpZXdcIik7XG5cdFx0XG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0b2RvQXJyYXkubGVuZ3RoOyBqKyspIHtcblx0XHRcdGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0Y29uc3QgdG9kb1RvcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRjb25zdCB0b2RvQm90RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFxuXHRcdFx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cdFx0XHRjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRcdFx0Y29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRcdFx0Y29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0XHRcdGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdFx0Y29uc3QgZGVsZXRlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFx0XHRcblx0XHRcdHRpdGxlLnRleHRDb250ZW50ID0gdG9kb0FycmF5W2pdLnRpdGxlO1xuXHRcdFx0ZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvQXJyYXlbal0uZGVzY3JpcHRpb247XG5cdFx0XHRkdWVEYXRlLnRleHRDb250ZW50ID0gdG9kb0FycmF5W2pdLmR1ZURhdGU7XG5cdFx0XHRwcmlvcml0eS50ZXh0Q29udGVudCA9IHRvZG9BcnJheVtqXS5wcmlvcml0eTtcblx0XHRcdGVkaXQudGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcblx0XHRcdGRlbGV0ZVRvZG8udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuXHRcdFx0Ly8gQ29udGFpbmVyIEF0dHJpYnV0ZXNcblx0XHRcdHRvZG9Db250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLW9ialwiKTtcblx0XHRcdHRvZG9Ub3BEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLXRvcC1kaXZcIik7XG5cdFx0XHR0b2RvQm90RGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1ib3QtZGl2XCIpO1xuXHRcdFx0Ly9FbGVtZW50IEF0dHJpYnV0ZXNcblx0XHRcdHRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1pdGVtcyB0b2RvLXRpdGxlXCIpO1xuXHRcdFx0ZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLWl0ZW1zIHRvZG8tZGVzY1wiKTtcblx0XHRcdGR1ZURhdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLWl0ZW1zIHRvZG8tZHVlZGF0ZVwiKTtcblx0XHRcdHByaW9yaXR5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1pdGVtcyB0b2RvLXByaW9yaXR5XCIpO1xuXHRcdFx0ZWRpdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8taXRlbXMgdG9kby1lZGl0XCIpO1xuXHRcdFx0ZGVsZXRlVG9kby5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8taXRlbXMgdG9kby1kZWxldGVcIik7XG5cdFx0XHRcblx0XHRcdHRvZG9Ub3BEaXYuYXBwZW5kKHRpdGxlKTtcblx0XHRcdHRvZG9Ub3BEaXYuYXBwZW5kKHByaW9yaXR5KTtcblx0XHRcdHRvZG9Cb3REaXYuYXBwZW5kKGR1ZURhdGUpO1xuXHRcdFx0dG9kb0JvdERpdi5hcHBlbmQoZGVzY3JpcHRpb24pO1xuXHRcdFx0dG9kb0JvdERpdi5hcHBlbmQoZWRpdCk7XG5cdFx0XHR0b2RvQm90RGl2LmFwcGVuZChkZWxldGVUb2RvKTtcblx0XHRcdFxuXHRcdFx0dG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb1RvcERpdik7XG5cdFx0XHR0b2RvQ29udGFpbmVyLmFwcGVuZCh0b2RvQm90RGl2KTtcblx0XHRcdFxuXHRcdFx0dG9kb1ZpZXcuYXBwZW5kKHRvZG9Db250YWluZXIpO1xuXHRcdH1cblx0XHRkYXRhQ29uZC5yZW1vdmVUb2RvKCk7XG5cdH1cblx0XG5cdGRpc3BsYXlVcGNvbWluZ1Rhc2tzKCkge1xuXHRcdFxuXHRcdGNvbnN0IHVwY29taW5nVGFza3NCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwY29taW5nLXRhc2tzXCIpO1xuXHRcdFxuXHRcdHVwY29taW5nVGFza3NCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdGxldCBuZXdUb2RvQXJyYXkgPSBbXTtcblx0XHRcdC8vUHV0IHRhc2tzIGludG8gdGhpcyBhcnJheSBvcmRlcmVkIGJ5IG1vc3QgcmVjZW50IGRhdGUgdG8gZnVydGhlc3QuXG5cdFx0XHRcblx0XHRcdC8vdXBkYXRlcyB0aXRsZSB0byBVcGNvbWluZ1xuXHRcdFx0Y29uc3Qgdmlld1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2xpc3QtdGl0bGVcIik7XG5cdFx0XHR2aWV3VGl0bGUudGV4dENvbnRlbnQgPSBcIlVwY29taW5nXCI7XG5cdFx0XHRcblx0XHRcdC8vQ3ljbGUgdGhyb3VnaCBsaXN0c1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Ly9saXN0VGl0bGUgaXMgYmVpbmcgdXNlZCB0byBob2xkIHZhbHVlIG9mIHRoZSBsaXN0IHRpdGxlIHRvIGNoZWNrIGlmIGl0IG1hdGNoZXMgdGhlIHNlbGVjdGVkIGxpc3QuXG5cdFx0XHRcdFxuXHRcdFx0XHRsZXQgdGhpc0xpc3QgPSBsaXN0QXJyYXlbaV07XG5cdFx0XHRcdGxldCBsaXN0VG9kb0xlbiA9IGxpc3RBcnJheVtpXS50b2Rvcy5sZW5ndGg7XG5cdFx0XHRcdFxuXHRcdFx0XHQvL0N5Y2xlcyB0aHJvdWdoIGVhY2ggdG9kbyBhbmQgYXBwZW5kcyB0aGVtIGludG8gdGhlIHRvZG8tdmlldyBhbmQgYWRkcyB0aGVtIGludG8gYSBhcnJheVxuXHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGxpc3RUb2RvTGVuOyBqKyspIHtcblx0XHRcdFx0XHRsZXQgdGhpc1RvZG9PYmogPSB0aGlzTGlzdC50b2Rvc1tqXTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRjb25zdCBwYXJzZWREYXRlID0gcGFyc2VJU08oXG5cdFx0XHRcdFx0XHRuZXcgRGF0ZSh0aGlzVG9kb09iai5kdWVEYXRlKS50b0lTT1N0cmluZygpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQvL0NoZWNrcyBpZiBkYXRlIGlzIGluIHRoZSBwYXN0LiB3aWxsIGV4Y2x1ZGUgaXQgaWYgaXQgaXMuXG5cdFx0XHRcdFx0XHRpZiAoaXNQYXN0KHBhcnNlZERhdGUpKSB7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0bmV3VG9kb0FycmF5LnB1c2godGhpc1RvZG9PYmopO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly9jaGVja3MgaWYgZGF0ZSBpcyB0b2RheSBzaW5jZSBpc1Bhc3QoKSBmdW5jdGlvbiB3aWxsIHJldHVybiBmYWxzZS5cblx0XHRcdFx0XHRcdGlmIChpc1RvZGF5KHBhcnNlZERhdGUpKSB7XG5cdFx0XHRcdFx0XHRcdG5ld1RvZG9BcnJheS5wdXNoKHRoaXNUb2RvT2JqKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvL1NvcnRpbmcgZnVuY3Rpb24uXG5cdFx0XHRcdGJ1YmJsZVNvcnQobmV3VG9kb0FycmF5KTtcblx0XHRcdFx0XG5cdFx0XHRcdHRoaXMuY2xlYXJUb2RvVmlldygpO1xuXHRcdFx0XHRcblx0XHRcdFx0Y29uc3QgdG9kb1ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tdmlld1wiKTtcblx0XHRcdFx0XG5cdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgbmV3VG9kb0FycmF5Lmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0Y29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdFx0Y29uc3QgdG9kb1RvcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdFx0Y29uc3QgdG9kb0JvdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cdFx0XHRcdFx0Y29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0XHRcdFx0XHRjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdFx0XHRcdGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdFx0XHRcdGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdFx0XHRjb25zdCBkZWxldGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRcdFx0XG5cdFx0XHRcdHRpdGxlLnRleHRDb250ZW50ID0gbmV3VG9kb0FycmF5W2pdLnRpdGxlO1xuXHRcdFx0XHRkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG5ld1RvZG9BcnJheVtqXS5kZXNjcmlwdGlvbjtcblx0XHRcdFx0ZHVlRGF0ZS50ZXh0Q29udGVudCA9IG5ld1RvZG9BcnJheVtqXS5kdWVEYXRlO1xuXHRcdFx0XHRwcmlvcml0eS50ZXh0Q29udGVudCA9IG5ld1RvZG9BcnJheVtqXS5wcmlvcml0eTtcblx0XHRcdFx0ZWRpdC50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuXHRcdFx0XHRkZWxldGVUb2RvLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblx0XHRcdFx0Ly8gQ29udGFpbmVyIEF0dHJpYnV0ZXNcblx0XHRcdFx0dG9kb0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8tb2JqXCIpO1xuXHRcdFx0XHR0b2RvVG9wRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby10b3AtZGl2XCIpO1xuXHRcdFx0XHR0b2RvQm90RGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1ib3QtZGl2XCIpO1xuXHRcdFx0XHQvL0VsZW1lbnQgQXR0cmlidXRlc1xuXHRcdFx0XHR0aXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8taXRlbXMgdG9kby10aXRsZVwiKTtcblx0XHRcdFx0ZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLWl0ZW1zIHRvZG8tZGVzY1wiKTtcblx0XHRcdFx0ZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8taXRlbXMgdG9kby1kdWVkYXRlXCIpO1xuXHRcdFx0XHRwcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8taXRlbXMgdG9kby1wcmlvcml0eVwiKTtcblx0XHRcdFx0ZWRpdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8taXRlbXMgdG9kby1lZGl0XCIpO1xuXHRcdFx0XHRkZWxldGVUb2RvLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1pdGVtcyB0b2RvLWRlbGV0ZVwiKTtcblx0XHRcdFx0XG5cdFx0XHRcdHRvZG9Ub3BEaXYuYXBwZW5kKHRpdGxlKTtcblx0XHRcdFx0dG9kb1RvcERpdi5hcHBlbmQocHJpb3JpdHkpO1xuXHRcdFx0XHR0b2RvQm90RGl2LmFwcGVuZChkdWVEYXRlKTtcblx0XHRcdFx0dG9kb0JvdERpdi5hcHBlbmQoZGVzY3JpcHRpb24pO1xuXHRcdFx0XHR0b2RvQm90RGl2LmFwcGVuZChlZGl0KTtcblx0XHRcdFx0dG9kb0JvdERpdi5hcHBlbmQoZGVsZXRlVG9kbyk7XG5cdFx0XHRcdFxuXHRcdFx0XHR0b2RvQ29udGFpbmVyLmFwcGVuZCh0b2RvVG9wRGl2KTtcblx0XHRcdFx0dG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb0JvdERpdik7XG5cdFx0XHRcdFxuXHRcdFx0XHR0b2RvVmlldy5hcHBlbmQodG9kb0NvbnRhaW5lcik7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdFxuXG5cdFx0XHQvL1VwZGF0ZXMgVG9kbyBDb3VudGVyXG5cdFx0XHRjb25zdCBoZWFkZXJDb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkZXJfX3RvZG8tYW1vdW50XCIpO1xuXHRcdFx0Y29uc3QgY3VycmVudFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8tb2JqJylcblx0XHRcdGxldCBjb3VudCA9IDA7XG5cdFx0XHQvL1VwZGF0ZXMgdGhlIGhlYWRlciBjb3VudGVyIHdpdGggYW1vdW50IG9mIGFsbCB0b2RvcyBpbiBhbGwgbGlzdHMuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRUYXNrcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb3VudCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRoZWFkZXJDb3VudGVyLmlubmVyVGV4dCA9IGNvdW50O1xuXHRcdH0pO1xuXHRcdGRhdGFDb25kLnJlbW92ZVRvZG8oKTtcblx0fVxuXHRcblx0ZGlzcGxheVRvZGF5VGFza3MoKSB7XG5cdFx0Y29uc3QgdG9kYXlUYXNrc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kYXktdGFza3NcIik7XG5cdFx0XG5cdFx0dG9kYXlUYXNrc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0Ly91cGRhdGVzIHRpdGxlIHRvIFRvZGF5XG5cdFx0XHRjb25zdCB2aWV3VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbGlzdC10aXRsZVwiKTtcblx0XHRcdHZpZXdUaXRsZS50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcblx0XHRcdFxuXHRcdFx0bGV0IHRvZGF5VG9kb1Rhc2tzID0gW107XG5cdFx0XHRcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCB0aGlzTGlzdCA9IGxpc3RBcnJheVtpXTtcblx0XHRcdFx0bGV0IGxpc3RUb2RvTGVuID0gbGlzdEFycmF5W2ldLnRvZG9zLmxlbmd0aDtcblx0XHRcdFx0XG5cdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgbGlzdFRvZG9MZW47IGorKykge1xuXHRcdFx0XHRcdGxldCB0aGlzVG9kb09iaiA9IHRoaXNMaXN0LnRvZG9zW2pdO1xuXHRcdFx0XHRcdGxldCB0b2RvRGF0ZSA9IHRoaXNUb2RvT2JqLmR1ZURhdGU7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Y29uc3QgcGFyc2VkVG9kb0RhdGUgPSBwYXJzZUlTTyhuZXcgRGF0ZSh0b2RvRGF0ZSkudG9JU09TdHJpbmcoKSk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Ly9jaGVja3MgaWYgZGF0ZSBvZiB0b2RvIGlzIHRvZGF5IGFuZCByZXR1cm5zIHRydWUgb3IgZmFsc2Vcblx0XHRcdFx0XHRsZXQgZGF0ZVJlc3VsdCA9IGlzVG9kYXkocGFyc2VkVG9kb0RhdGUpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmIChkYXRlUmVzdWx0KSB7XG5cdFx0XHRcdFx0XHR0b2RheVRvZG9UYXNrcy5wdXNoKHRoaXNUb2RvT2JqKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHR9XG5cdFx0XHR0aGlzLmRpc3BsYXlUb2RvVGFza3ModG9kYXlUb2RvVGFza3MpO1xuXG5cblx0XHRcdGNvbnN0IGhlYWRlckNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlcl9fdG9kby1hbW91bnRcIik7XG5cdFx0XHRjb25zdCBjdXJyZW50VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1vYmonKVxuXHRcdFx0bGV0IGNvdW50ID0gMDtcblx0XHRcdC8vVXBkYXRlcyB0aGUgaGVhZGVyIGNvdW50ZXIgd2l0aCBhbW91bnQgb2YgYWxsIHRvZG9zIGluIGFsbCBsaXN0cy5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFRhc2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvdW50Kys7XG5cdFx0XHR9XG5cblx0XHRcdGhlYWRlckNvdW50ZXIuaW5uZXJUZXh0ID0gY291bnQ7XG5cdFx0fSk7XG5cdFx0ZGF0YUNvbmQucmVtb3ZlVG9kbygpO1xuXHR9XG5cblx0ZGlzcGxheVByaW9UYXNrcygpIHtcblx0XHRjb25zdCBpbXBvcnRhbnRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvLXRhc2tzXCIpO1xuXHRcdFxuXHRcdGltcG9ydGFudFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdGxldCBpbXBvcnRhbnRUYXNrcyA9IFtdO1xuXHRcdFx0XG5cdFx0XHQvL3VwZGF0ZXMgdGl0bGUgdG8gSW1wb3J0YW50XG5cdFx0XHRjb25zdCB2aWV3VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbGlzdC10aXRsZVwiKTtcblx0XHRcdHZpZXdUaXRsZS50ZXh0Q29udGVudCA9IFwiSW1wb3J0YW50XCI7XG5cdFx0XHRcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCB0aGlzTGlzdCA9IGxpc3RBcnJheVtpXTtcblx0XHRcdFx0bGV0IGxpc3RUb2RvTGVuID0gbGlzdEFycmF5W2ldLnRvZG9zLmxlbmd0aDtcblx0XHRcdFx0XG5cdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgbGlzdFRvZG9MZW47IGorKykge1xuXHRcdFx0XHRcdGxldCB0aGlzVG9kb09iaiA9IHRoaXNMaXN0LnRvZG9zW2pdO1xuXHRcdFx0XHRcdGltcG9ydGFudFRhc2tzLnB1c2godGhpc1RvZG9PYmopO1xuXHRcdFx0XHRcdC8vd3JpdGUgZnVuY3Rpb24gdGhhdCBzb3J0cyB0YXNrcyBieSBwcmlvLiBmcm9tIGhpZ2hlc3QgdG8gc21hbGxlc3QuXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGltcG9ydGFudFRhc2tzID0gc29ydEJ5UHJpbyhpbXBvcnRhbnRUYXNrcyk7XG5cdFx0XHR0aGlzLmRpc3BsYXlUb2RvVGFza3MoaW1wb3J0YW50VGFza3MpO1xuXG5cblx0XHRcdGNvbnN0IGhlYWRlckNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlcl9fdG9kby1hbW91bnRcIik7XG5cdFx0XHRjb25zdCBjdXJyZW50VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1vYmonKVxuXHRcdFx0bGV0IGNvdW50ID0gMDtcblx0XHRcdC8vVXBkYXRlcyB0aGUgaGVhZGVyIGNvdW50ZXIgd2l0aCBhbW91bnQgb2YgYWxsIHRvZG9zIGluIGFsbCBsaXN0cy5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFRhc2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvdW50Kys7XG5cdFx0XHR9XG5cblx0XHRcdGhlYWRlckNvdW50ZXIuaW5uZXJUZXh0ID0gY291bnQ7XG5cdFx0fSk7XG5cblx0fVxufVxuZGF0YUNvbmQucmVtb3ZlVG9kbygpO1xuZXhwb3J0IHsgRGlzcGxheSB9O1xuXG5cblxuXG5cbiIsImltcG9ydCB7IGxpc3RBcnJheSB9IGZyb20gXCIuL2xpc3RBcnJheVRyYWNrZXJcIjtcbmltcG9ydCB7IHN0b3JhZ2VBdmFpbGFibGUgfSBmcm9tIFwiLi9zdG9yYWdlQXZhaWxhYmxlXCI7XG5pbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IHsgQ29uZHVjdG9yIH0gZnJvbSBcIi4vdG9kb0RhdGFDb25kdWN0b3JcIjtcbmltcG9ydCB7IExpc3QgfSBmcm9tIFwiLi9jcmVhdGVMaXN0XCI7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vY3JlYXRlVG9Eb1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ3JhYkZyb21Mb2NhbFN0b3JhZ2UoKSB7XG5cdGxldCBkaXNwbGF5Q29udHJvbCA9IG5ldyBEaXNwbGF5KCk7XG5cdGxldCBkYXRhQ29uZCA9IG5ldyBDb25kdWN0b3IoKTtcbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgICBcblx0XHQvLyBZaXBwZWUhIFdlIGNhbiB1c2UgbG9jYWxTdG9yYWdlIGF3ZXNvbWVuZXNzXG5cdFx0XG5cblx0XHQvLypzYXZlZExpc3RBcnJheSBpcyB0aGUga2V5IGZvciBsaXN0QXJyYXkgRGF0YVxuXG5cdFx0aWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2F2ZWRMaXN0QXJyYXlcIikgPT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICBcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IHNhdmVkQXJyYXkgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzYXZlZExpc3RBcnJheVwiKTtcblxuXHRcdFx0Ly9jb252ZXJ0cyBkYXRhIGZyb20gc3RyaW5nIGJhY2sgdG8gYW4gb2JqZWN0XG5cdFx0XHRsZXQgcGFyc2VkU2F2ZWRBcnJheSA9IEpTT04ucGFyc2Uoc2F2ZWRBcnJheSk7XG5cblx0XHRcdC8vQXNzaWducyB0aGUgbGlzdEFycmF5IHRvIHRoZSBzdG9yZWRcblx0XHRcdC8vIE9iamVjdC5hc3NpZ24obGlzdEFycmF5LCBwYXJzZWRTYXZlZEFycmF5KTtcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdC8vQ2xlYXJzIHRoZSBsaXN0QXJyYXlcblx0XHRcdGxpc3RBcnJheS5zcGxpY2UoMCwgbGlzdEFycmF5Lmxlbmd0aClcblxuXHRcdFx0Ly9jeWNsZXMgdGhyb3VnaCBlYWNoIGxpc3QgYW5kIHRvZG8gYW5kIGNyZWF0ZXMgYSBsaXN0IGFuZCB0b2RvIG9iamVjdC5cblx0XHRcdGxldCBzYXZlZExpc3RMZW4gPSBwYXJzZWRTYXZlZEFycmF5Lmxlbmd0aC0xO1xuXHRcdFx0Zm9yIChsZXQgaT0gMDsgaSA8PSBzYXZlZExpc3RMZW47IGkrKykge1xuXHRcdFx0XG5cdFx0XHRcdGNvbnN0IGxpc3RFbGVtZW50TmFtZSA9IHBhcnNlZFNhdmVkQXJyYXlbaV0udGl0bGU7XG5cdFx0XHRcdGNvbnN0IG5ld0xpc3QgPSBuZXcgTGlzdChsaXN0RWxlbWVudE5hbWUpO1xuXHRcdFx0XHRcblx0XHRcdFx0bGlzdEFycmF5LnB1c2gobmV3TGlzdCk7XG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0Y29uc3Qgc2F2ZWRUb2RvTGVuID0gcGFyc2VkU2F2ZWRBcnJheVtpXS50b2Rvcy5sZW5ndGgtMTtcblx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPD0gc2F2ZWRUb2RvTGVuOyBqKyspIHtcblx0XHRcdFx0XHRjb25zdCB0b2RvRWxlbWVudCA9IHBhcnNlZFNhdmVkQXJyYXlbaV0udG9kb3Nbal07XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Y29uc3QgdG9kb0VsZW1lbnRUaXRsZSA9IHRvZG9FbGVtZW50LnRpdGxlO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGNvbnN0IHRvZG9FbGVtZW50RGVzYyA9IHRvZG9FbGVtZW50LmRlc2NyaXB0aW9uO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGNvbnN0IHRvZG9FbGVtZW50RGF0ZSA9IHRvZG9FbGVtZW50LmR1ZURhdGU7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Y29uc3QgdG9kb0VsZW1lbnRQcmlvID0gdG9kb0VsZW1lbnQucHJpb3JpdHk7XG5cdFx0XHRcdFx0XG5cblx0XHRcdFx0XHRjb25zdCB0b2RvT2JqID0gbmV3IFRvZG8odG9kb0VsZW1lbnRUaXRsZSwgdG9kb0VsZW1lbnREZXNjLCB0b2RvRWxlbWVudERhdGUsIHRvZG9FbGVtZW50UHJpbyk7XG5cblx0XHRcdFx0XHRsaXN0QXJyYXlbaV0udG9kb3MucHVzaCh0b2RvT2JqKTtcblx0XHRcdFxuXG5cdFx0XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHR9XG5cblxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdFxuICAgICAgICAgICAgLy9VcGRhdGVzIHRoZSBkZWZhdWx0IGxpc3QgdmlldyB3aXRoIGl0cyB0YXNrcy5cblx0XHRcdGRpc3BsYXlDb250cm9sLmRpc3BsYXlUb2RvKCk7XG5cdFx0XHRkYXRhQ29uZC50b2RvRWRpdEJ1dHRvbkxpc3RlbmVyKCk7XG5cdFx0XHRkYXRhQ29uZC5yZW1vdmVUb2RvKCk7XG5cdFx0XHRkaXNwbGF5Q29udHJvbC5lZGl0Rm9ybU1vZGFsKCk7XG5cdFx0XHRkaXNwbGF5Q29udHJvbC5kaXNwbGF5TGlzdEJ1dHRvbnMoKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gVG9vIGJhZCwgbm8gbG9jYWxTdG9yYWdlIGZvciB1c1xuXHRcdFxuXHR9XG59XG5cbiIsIi8vSGVscHMgdHJhY2sgdGhlIGNyZWF0ZWQgbGlzdHMuXG5leHBvcnQgbGV0IGxpc3RBcnJheSA9IFtdOyIsImltcG9ydCB7bGlzdEFycmF5fSBmcm9tICcuL2xpc3RBcnJheVRyYWNrZXInO1xuaW1wb3J0IHsgc3RvcmFnZUF2YWlsYWJsZSB9IGZyb20gJy4vc3RvcmFnZUF2YWlsYWJsZSc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVUb0xvY2FsU3RvcmFnZSgpIHtcbiBcbmlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuICAgIC8vIFlpcHBlZSEgV2UgY2FuIHVzZSBsb2NhbFN0b3JhZ2UgYXdlc29tZW5lc3NcbiAgICBcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBcbiAgICAvL3N0b3JlcyB0aGUgbGlzdEFycmF5IGluIGxvY2FsU3RvcmFnZSBhcyBhIHN0cmluZy4gXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2F2ZWRMaXN0QXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkobGlzdEFycmF5KSk7XG5cbiAgICBcbiAgICBcbiAgICBcbiBcbiAgfVxuICBlbHNlIHtcbiAgICAvLyBUb28gYmFkLCBubyBsb2NhbFN0b3JhZ2UgZm9yIHVzXG4gIH1cbn1cbiIsIlxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRCeVByaW8oYXJncykge1xuICAgIFxuICAgIGxldCBzb3J0ZWRBcnJheSA9IFtdO1xuXG4gICAgLy9Mb29wcyBhbmQgY2hlY2tzIGZvciBoaWdoIHByaW8gdGhlbiBhZGRpbmcgdGhlbSBpbnRvIHRoZSBhcnJheS5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBhcmdzW2ldO1xuICAgICAgICBsZXQgZWxlbWVudFByaW8gPSBhcmdzW2ldLnByaW9yaXR5O1xuICAgIFxuICAgICAgICBpZiAoZWxlbWVudFByaW8gPT0gJ2hpZ2gnKSB7XG4gICAgICAgICAgICBzb3J0ZWRBcnJheS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gYXJnc1tpXTtcbiAgICAgICAgbGV0IGVsZW1lbnRQcmlvID0gYXJnc1tpXS5wcmlvcml0eTtcbiAgICBcbiAgICAgICAgaWYgKGVsZW1lbnRQcmlvID09ICdtZWQnKSB7XG4gICAgICAgICAgICBzb3J0ZWRBcnJheS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBhcmdzW2ldO1xuICAgICAgICBsZXQgZWxlbWVudFByaW8gPSBhcmdzW2ldLnByaW9yaXR5O1xuICAgIFxuICAgICAgICBpZiAoZWxlbWVudFByaW8gPT0gJ2xvdycpIHtcbiAgICAgICAgICAgIHNvcnRlZEFycmF5LnB1c2goZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIFxuXG4gICAgcmV0dXJuIHNvcnRlZEFycmF5O1xuXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIGxldCBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICAgIGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XG4gICAgfVxufSIsImltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi9jcmVhdGVUb0RvXCI7XG5pbXBvcnQgeyBsaXN0QXJyYXkgfSBmcm9tIFwiLi9saXN0QXJyYXlUcmFja2VyXCI7XG5pbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gXCIuL2NyZWF0ZUxpc3RcIjtcbmltcG9ydCB7Zm9ybWF0fSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQge3NhdmVUb0xvY2FsU3RvcmFnZX0gZnJvbSAnLi9zYXZlVG9Mb2NhbFN0b3JhZ2UnO1xuXG5jbGFzcyBDb25kdWN0b3Ige1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnRvZG9EYXRhID0gW107IC8vSSB3YW50IHRvIGFjY2VzcyB0aGlzIGFycmF5IGluIG1ldGhvZC5cblx0XHR0aGlzLmxpc3Q7XG5cdFx0dGhpcy50b2RvT2JqID0ge1xuXHRcdFx0dGl0bGU6ICcnLFxuXHRcdFx0ZGVzYzogJycsXG5cdFx0XHRkdWVEYXRlOiAnJyxcblx0XHRcdHByaW86ICcnLFxuXHRcdH1cblx0XHRcblx0fVxuXHRcblx0Z3JhYkZvcm1EYXRhKCkge1xuXG5cblx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cblx0XHQvL0dyYWJzIGRhdGEgZnJvbSBmb3JtIHRvIGNyZWF0ZSB0b2RvT2JqLlxuXHRcdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZTtcblx0XHRjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XG5cdFx0XG5cdFx0Ly9HcmFicyBkdWVkYXRlIGFuZCBmb3JtYXRzIGl0LlxuXHRcdGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS1kYXRlXCIpLnZhbHVlO1xuXHRcdGxldCBmb3JtYXRlZERhdGUgPSAnJztcblx0XHRpZiAoZHVlRGF0ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRmb3JtYXRlZERhdGUgPSBmb3JtYXQobmV3IERhdGUoZHVlRGF0ZS5yZXBsYWNlKC8tL2csICcvJykpLCAnTS9kL3l5Jyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvcm1hdGVkRGF0ZSA9ICcnO1xuXHRcdFx0XG5cdFx0fVxuXHRcdC8vIFxuXG5cblxuXHRcdGxldCBwcmlvcml0eTtcblx0XHR2YXIgZWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJwcmlvcml0eVwiKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZWxlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoZWxlW2ldLmNoZWNrZWQpIHtcblx0XHRcdFx0cHJpb3JpdHkgPSBlbGVbaV0udmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cblxuXHRcdC8vZ3JhYiBzZWxlY3RlZCBsaXN0IGFuZCBjcmVhdGUgdG9kb09ialxuXHRcdGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RcIikudmFsdWU7XG5cdFx0Y29uc3QgdG9kb09iaiA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZm9ybWF0ZWREYXRlLCBwcmlvcml0eSk7XG5cblx0XHQvL1B1c2hlcyB0b2RvIHRvIGFycmF5XG5cdFx0c2VsZi50b2RvRGF0YS5wdXNoKHRvZG9PYmopO1xuXHRcdHNlbGYubGlzdCA9IGxpc3Q7XG5cdH1cblxuXHRncmFiRWRpdEZyb21EYXRhKCl7XG5cblxuXG5cblx0XHQvL0dyYWJzIGRhdGEgZnJvbSBmb3JtIHRvIGNyZWF0ZSB0b2RvT2JqLlxuXHRcdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LXRpdGxlXCIpLnZhbHVlO1xuXHRcdGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuXHRcdFxuXHRcdC8vR3JhYnMgZHVlZGF0ZSBhbmQgZm9ybWF0cyBpdC5cblx0XHRjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWR1ZS1kYXRlXCIpLnZhbHVlO1xuXHRcdC8vIGxldCBmb3JtYXRlZERhdGUgPSAnJztcblx0XHQvLyAvLyBpZiAoZHVlRGF0ZS5sZW5ndGggPiAwKSB7XG5cdFx0Ly8gLy8gXHRmb3JtYXRlZERhdGUgPSBmb3JtYXQobmV3IERhdGUoZHVlRGF0ZSksICdNL2QveXknKTtcblx0XHQvLyAvLyB9XG5cblxuXG5cblx0XHRsZXQgcHJpb3JpdHk7XG5cdFx0dmFyIGVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZWRpdC1wcmlvcml0eVwiKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZWxlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoZWxlW2ldLmNoZWNrZWQpIHtcblx0XHRcdFx0cHJpb3JpdHkgPSBlbGVbaV0udmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHt0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5fTtcblx0XHRcblx0XHRcblx0fVxuXG5cdFx0XG5cdFx0XG5cdHVwZGF0ZVRvZG8odG9kb1RpdGxlKXtcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHQvL0VkaXRlZCBkYXRhIGZyb20gZWRpdCBmb3JtLlxuXHRcdFx0bGV0IG5ld1RpdGxlID0gdGhpcy5ncmFiRWRpdEZyb21EYXRhKCkudGl0bGU7XG5cdFx0XHRsZXQgbmV3RGVzYyA9IHRoaXMuZ3JhYkVkaXRGcm9tRGF0YSgpLmRlc2NyaXB0aW9uO1xuXHRcdFx0bGV0IG5ld0R1ZURhdGUgPSB0aGlzLmdyYWJFZGl0RnJvbURhdGEoKS5kdWVEYXRlO1xuXHRcdFx0bGV0IGZvcm1hdGVkRGF0ZSA9IGZvcm1hdChuZXcgRGF0ZShuZXdEdWVEYXRlKSwgJ00vZC95eScpO1xuXHRcdFx0bGV0IG5ld1ByaW8gPSB0aGlzLmdyYWJFZGl0RnJvbURhdGEoKS5wcmlvcml0eTtcblx0XHRcdFxuXHRcdFx0Ly9hdG9kb09iaiBOb2RlIGxpc3Rcblx0XHRcdGNvbnN0IHRvZG9PYmpzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8tb2JqJyk7XG5cdFx0XHRcblx0XHRcdGNvbnN0IGN1cnJlbnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbGlzdC10aXRsZScpLnRleHRDb250ZW50O1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RBcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBsaXN0ID0gbGlzdEFycmF5W2ldLnRpdGxlO1xuXG5cdFx0XHRcdGlmIChjdXJyZW50TGlzdCA9PSBsaXN0KSB7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0b2RvT2Jqcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0Y29uc3QgdG9kb09ialRpdGxlID0gdG9kb09ianNbal0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uaW5uZXJUZXh0O1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRpZiAodG9kb1RpdGxlID09IHRvZG9PYmpUaXRsZSkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZFRvZG8gPSBsaXN0QXJyYXlbaV0udG9kb3Nbal07XG5cdFx0XHRcdFx0XHRcdC8vVXBkYXRlIHRvZG8gb2JqLlxuXHRcdFx0XHRcdFx0XHRzZWxlY3RlZFRvZG8udGl0bGUgPSBuZXdUaXRsZTtcblx0XHRcdFx0XHRcdFx0c2VsZWN0ZWRUb2RvLmRlc2NyaXB0aW9uID0gbmV3RGVzYztcblx0XHRcdFx0XHRcdFx0c2VsZWN0ZWRUb2RvLmR1ZURhdGUgPSBmb3JtYXRlZERhdGU7XG5cdFx0XHRcdFx0XHRcdHNlbGVjdGVkVG9kby5wcmlvcml0eSA9IG5ld1ByaW87XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQvL1VwZGF0ZSB0b2RvIGluIHRvZG8gdmlldy5cblx0XHRcdFx0XHRcdFx0XHR0b2RvT2Jqc1tqXS5jaGlsZHJlblswXS5maXJzdENoaWxkLmlubmVyVGV4dCA9IG5ld1RpdGxlO1xuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdHRvZG9PYmpzW2pdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmlubmVyVGV4dCA9IG5ld0Rlc2M7XG5cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0dG9kb09ianNbal0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gZm9ybWF0ZWREYXRlO1xuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdHRvZG9PYmpzW2pdLmNoaWxkcmVuWzBdLmxhc3RDaGlsZC5pbm5lclRleHQgPSBuZXdQcmlvO1xuXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH1cblx0XHRcdFxuXHR9XG5cblx0cHVzaFRvTGlzdChnaXZlbmxpc3QpIHtcblx0XHRsZXQgdG9kb0RhdGFMZW4gPSB0aGlzLnRvZG9EYXRhLmxlbmd0aDtcblx0XHRnaXZlbmxpc3QuYWRkKHRoaXMudG9kb0RhdGFbdG9kb0RhdGFMZW4gLSAxXSk7XG5cdFx0Ly8gbGlzdC5yZW1vdmUoKTtcblx0fVxuXG5cdF9yZXR1cm5MaXN0KCkge1xuXHRcdHJldHVybiB0aGlzLmxpc3Q7XG5cdH1cblxuXHRpbnNlcnRUb2RvSW50b0xpc3QoKSB7XG5cdFx0bGV0IGNvbmR1Y3RvciA9IHRoaXM7XG5cdFx0Ly9HcmFicyBkYXRhIGZyb21cblx0XHQvL0dyYWJzIGZvcm0gZGF0YSBhbmQgaW5zZXJ0cyBpdCBpbnRvIHRoZSBzZWxlY3RlZCBMaXN0XG5cblxuXHRcdGNvbmR1Y3Rvci5ncmFiRm9ybURhdGEoKTtcblx0XHRsZXQgbGlzdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RcIik7XG5cdFx0bGV0IGNvbGxlY3Rpb24gPSBsaXN0cy5zZWxlY3RlZE9wdGlvbnM7XG5cblx0XHRsZXQgc2VsZWN0ZWRMaXN0ID0gY29sbGVjdGlvblswXS5sYWJlbDtcblx0XHRcblxuXHRcdC8vSW5zZXJ0cyBkYXRhIHRvIHNlbGVjdGVkIGxpc3Qgd2hlbiBzdWJtaXR0ZWQuXG5cdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpc3RBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdGNvbnN0IGxpc3QgPSBsaXN0QXJyYXlbaW5kZXhdO1xuXHRcdFx0aWYgKGxpc3QudGl0bGUgPT0gc2VsZWN0ZWRMaXN0KSB7XG5cdFx0XHRcdGNvbmR1Y3Rvci5wdXNoVG9MaXN0KGxpc3RBcnJheVtpbmRleF0pO1xuXHRcdFx0XHRzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjcmVhdGVOZXdMaXN0KCkge1xuXHRcdGxldCBkaXNwbGF5ID0gbmV3IERpc3BsYXkoKTtcblx0XHRsZXQgbGlzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdC1mb3JtLWJ0blwiKTtcblxuXHRcdGxpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdGxldCBsaXN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1saXN0XCIpLnZhbHVlO1xuXHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRMaXN0ID1cblx0XHRcdFx0bGlzdElucHV0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbGlzdElucHV0LnNsaWNlKDEpO1xuXHRcdFx0Y29uc3QgbmV3TGlzdCA9IG5ldyBMaXN0KGNhcGl0YWxpemVkTGlzdCk7XG5cdFx0XHRsaXN0QXJyYXkucHVzaChuZXdMaXN0KTtcblx0XHRcdGRpc3BsYXkuZm9ybVJlc2V0KCk7XG5cblx0XHRcdGNvbnN0IGxpc3RPcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0XCIpO1xuXHRcdFx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblx0XHRcdG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBsaXN0SW5wdXQpO1xuXHRcdFx0b3B0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlzdC12YWx1ZVwiKTtcblx0XHRcdG9wdGlvbi50ZXh0Q29udGVudCA9IGNhcGl0YWxpemVkTGlzdDtcblx0XHRcdGxpc3RPcHRpb25zLmFwcGVuZChvcHRpb24pO1xuXHRcdH0pO1xuXHR9XG5cblx0cmVtb3ZlVG9kbygpIHtcblx0XHRjb25zdCBkaXNwbGF5ID0gbmV3IERpc3BsYXkoKTtcblx0XHRsZXQgZGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kby1kZWxldGVcIik7XG5cblxuXHRcdGNvbnN0IHRvZG9WaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXZpZXdcIik7XG5cdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRlbGV0ZUJ1dHRvbnMubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRkZWxldGVCdXR0b25zW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGNvbnN0IHRvZG9FbGVtZW50ID0gZXZlbnQucGF0aFsyXTtcblx0XHRcdFx0XG5cdFx0XHRcdFxuXHRcdFx0XHR0b2RvVmlldy5yZW1vdmVDaGlsZCh0b2RvRWxlbWVudCk7XG5cblx0XHRcdFx0Ly9yZW1vdmVzIHRoZSB0b2RvIGZyb20gaXRzIGxpc3QuXG5cdFx0XHRcdGNvbnN0IGRlbGV0ZWRUb2RvID1ldmVudC5wYXRoWzJdLmZpcnN0Q2hpbGQuY2hpbGROb2Rlc1swXS5pbm5lclRleHQ7XG5cdFx0XHRcdGNvbnN0IGxpc3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcdFx0XCIuaGVhZGVyX19saXN0LXRpdGxlXCJcblx0XHRcdFx0KS50ZXh0Q29udGVudDtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRjb25zdCBsaXN0VG9SZW1vdmVGcm9tID0gbGlzdEFycmF5W2ldO1xuXHRcdFx0XHRcdGlmIChsaXN0VGl0bGUgPT0gbGlzdEFycmF5W2ldLnRpdGxlKSB7XG5cdFx0XHRcdFx0XHRsaXN0VG9SZW1vdmVGcm9tLnJlbW92ZShkZWxldGVkVG9kbyk7XG5cdFx0XHRcdFx0XHRkaXNwbGF5LmRpc3BsYXlUb2RvQW1vdW50KCk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cdHRvZG9FZGl0QnV0dG9uTGlzdGVuZXIoKXtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCBkaXNwbGF5ID0gbmV3IERpc3BsYXkoKTtcblx0XHRjb25zdCB0b2RvRWRpdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1lZGl0Jyk7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9FZGl0QnRucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgZWxlbWVudCA9IHRvZG9FZGl0QnRuc1tpXTtcblxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG5cdFx0XHRcdFxuXHRcdFx0XHRjb25zdCBmb3JtRWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtbW9kYWwnKTtcblx0XHRcdFx0Zm9ybUVsZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdFx0Ly9UaXRsZSB3b3Jrc1xuXHRcdFx0XHRcdGNvbnN0IHRpdGxlID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5pbm5lclRleHQ7XG5cdFx0XHRcdFx0Ly9EZXNjIFdvcmtzXG5cdFx0XHRcdFx0Y29uc3QgZGVzYyA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMV0uaW5uZXJUZXh0O1xuXHRcdFx0XHRcdC8vZHVlIGRhdGUgd29ya3Ncblx0XHRcdFx0XHRjb25zdCBkdWVEYXRlID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXS5pbm5lclRleHQ7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0bGV0IGZvcm1hdGVkRGF0ZSA9ICcnO1xuXHRcdFx0XHRcdGlmIChkdWVEYXRlLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdGZvcm1hdGVkRGF0ZSA9IGZvcm1hdChuZXcgRGF0ZShkdWVEYXRlKSwgJ3l5eXktTU0tZGQnKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvL1ByaW8gd29ya3Ncblx0XHRcdFx0XHRjb25zdCBwcmlvID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1sxXS5pbm5lclRleHQ7XG5cblx0XHRcdFx0XHQvL1Nob3dzIHRvZG8gZGF0YSBvbiBlZGl0IGZvcm1cblx0XHRcdFx0XHRkaXNwbGF5LnNlbGVjdGVkVG9kb0VkaXQodGl0bGUsZGVzYyxmb3JtYXRlZERhdGUsIHByaW8pO1xuXG5cdFx0XHRcdFx0Ly91cGRhdGVzIGxpc3Qgb3B0aW9ucyBpbiBlZGl0IGZvcm0gXG5cdFx0XHRcdFx0Y29uc3QgZWRpdExpc3RPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtbGlzdCcpO1xuXHRcdFx0XHRcdGVkaXRMaXN0T3B0aW9ucy5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXHRcdFx0XHRcdFx0b3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGxpc3RBcnJheVtpXS50aXRsZSk7XG5cdFx0XHRcdFx0XHRvcHRpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaXN0LXZhbHVlXCIpO1xuXHRcdFx0XHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRMaXN0ID1cblx0XHRcdFx0XHRcdFx0bGlzdEFycmF5W2ldLnRpdGxlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICtcblx0XHRcdFx0XHRcdFx0bGlzdEFycmF5W2ldLnRpdGxlLnNsaWNlKDEpO1xuXHRcdFx0XHRcdFx0XHRvcHRpb24udGV4dENvbnRlbnQgPSBjYXBpdGFsaXplZExpc3Q7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LWxpc3QnKTtcblxuXHRcdFx0XHRcdFx0XHRzZWxlY3QuYXBwZW5kKG9wdGlvbik7XG5cdFx0XHRcdFx0fVxuXG5cblxuXHRcdFx0XHRcdGNvbnN0IG1ha2VDaGFuZ2VzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZm9ybS1idG4nKTtcblxuXHRcdFx0XHRcdG1ha2VDaGFuZ2VzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuXHRcdFx0XHRcdFx0c2VsZi51cGRhdGVUb2RvKHRpdGxlKTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0XG5cdFxufVxuZXhwb3J0IHsgQ29uZHVjdG9yIH07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwID8gJy0nIDogJyc7XG4gIHZhciBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCk7XG5cbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gIH1cblxuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn0iLCJpbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0TG9jYWxlOyIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbmltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuXG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcblxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG5cbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7IC8vIFR3byBkaWdpdCB5ZWFyXG5cbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9IC8vIE9yZGluYWwgbnVtYmVyXG5cblxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9IC8vIFBhZGRpbmdcblxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7IC8vIFBhZGRpbmdcblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG5cbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcblxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG5cbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcblxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG5cbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcblxuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwidmFyIGRhdGVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcblxudmFyIHRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcblxudmFyIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIChwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHZhciBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xuICB2YXIgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgdmFyIHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG5cbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuXG4gIHZhciBkYXRlVGltZUZvcm1hdDtcblxuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG5cbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgb3B0aW9ucyk7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsInZhciBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbJ0QnLCAnREQnXTtcbnZhciBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFsnWVknLCAnWVlZWSddO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBpZiAodG9rZW4gPT09ICdZWVlZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdEJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdERCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpO1xuICB2YXIgeWVhciA9IGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMC43NTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgY29tcGFyZUFzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OTpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IC0xXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlQXNjKVxuICogLy89PiBbXG4gKiAvLyAgIFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMCxcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wYXJlQXNjKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgZGlmZiA9IGRhdGVMZWZ0LmdldFRpbWUoKSAtIGRhdGVSaWdodC5nZXRUaW1lKCk7XG5cbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7IC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaWZmO1xuICB9XG59IiwiLyoqXG4gKiBEYXlzIGluIDEgd2Vlay5cbiAqXG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJbldlZWsgPSA3O1xuLyoqXG4gKiBEYXlzIGluIDEgeWVhclxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKlxuICogQG5hbWUgZGF5c0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIGRheXNJblllYXIgPSAzNjUuMjQyNTtcbi8qKlxuICogTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWF4VGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcbi8qKlxuICogTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWluVGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pblRpbWUgPSAtbWF4VGltZTtcbi8qKlxuICogTWludXRlcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWludXRlc0luSG91ciA9IDYwO1xuLyoqXG4gKiBNb250aHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5RdWFydGVyID0gMztcbi8qKlxuICogTW9udGhzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luWWVhciA9IDEyO1xuLyoqXG4gKiBRdWFydGVycyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHF1YXJ0ZXJzSW5ZZWFyID0gNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luSG91ciA9IDM2MDA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5NaW51dGUgPSA2MDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGRheVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIHdlZWtcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG4vKipcbiAqIFNlY29uZHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbW9udGhcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzOyIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZzsgLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyBgWVlgIGFuZCBgWVlZWWA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX29wdGlvbnMkbG9jYWxlLCBfcmVmMiwgX3JlZjMsIF9yZWY0LCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZTIsIF9vcHRpb25zJGxvY2FsZTIkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLCBfcmVmNSwgX3JlZjYsIF9yZWY3LCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZTMsIF9vcHRpb25zJGxvY2FsZTMkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMywgX2RlZmF1bHRPcHRpb25zJGxvY2FsNDtcblxuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBsb2NhbGUgPSAoX3JlZiA9IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRsb2NhbGUgIT09IHZvaWQgMCA/IF9vcHRpb25zJGxvY2FsZSA6IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYyID0gKF9yZWYzID0gKF9yZWY0ID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiRvcHRpID0gX29wdGlvbnMkbG9jYWxlMi5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTIkb3B0aS5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWY0ICE9PSB2b2lkIDAgPyBfcmVmNCA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogMSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZjUgPSAoX3JlZjYgPSAoX3JlZjcgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUzLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMyRvcHRpLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjcgIT09IHZvaWQgMCA/IF9yZWY3IDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNiAhPT0gdm9pZCAwID8gX3JlZjYgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNSAhPT0gdm9pZCAwID8gX3JlZjUgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9IC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuXG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcblxuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICB2YXIgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuXG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzUGFzdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhlIHBhc3RcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgMiBKdWx5IDIwMTQgaW4gdGhlIHBhc3Q/XG4gKiBjb25zdCByZXN1bHQgPSBpc1Bhc3QobmV3IERhdGUoMjAxNCwgNiwgMikpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1Bhc3QoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpIDwgRGF0ZS5ub3coKTtcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuXG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuXG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDsgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcblxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuXG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiAodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuXG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG5cbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uICh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTsgLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xuXG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIChkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7IC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcblxuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcblxudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIChxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDBcbiAgICAvKiBTdW5kYXkgKi9cbiAgICAsXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyLCBtaWxsaXNlY29uZHNJbk1pbnV0ZSB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXG4gKiAvLyBpZiB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdCBpcyAxOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUlTTyhhcmd1bWVudCwgb3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMkYWRkaXRpb25hbERpO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IHRvSW50ZWdlcigoX29wdGlvbnMkYWRkaXRpb25hbERpID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpICE9PSBudWxsICYmIF9vcHRpb25zJGFkZGl0aW9uYWxEaSAhPT0gdm9pZCAwID8gX29wdGlvbnMkYWRkaXRpb25hbERpIDogMik7XG5cbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKTtcbiAgfVxuXG4gIGlmICghKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuICB2YXIgZGF0ZTtcblxuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuXG4gIGlmICghZGF0ZSB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcblxuICAgIGlmIChpc05hTih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG5cbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTsgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSwgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCk7XG59XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuXG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgdmFyIGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIHZhciB0aW1lU3RyaW5nOyAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxuXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG5cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuXG4gICAgaWYgKHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyLnRlc3QoZGF0ZVN0cmluZ3MuZGF0ZSkpIHtcbiAgICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyKVswXTtcbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCwgZGF0ZVN0cmluZy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGVTdHJpbmdzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcbiAgICB5ZWFyOiBOYU4sXG4gICAgcmVzdERhdGVTdHJpbmc6ICcnXG4gIH07XG4gIHZhciB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDsgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2goZGF0ZVJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHN0cmluZ1xuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICB2YXIgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG5cbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuXG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUgKyBzZWNvbmRzICogMTAwMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHZhciBtaW51dGVzID0gY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pIHx8IDA7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn0gLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxuXG5cbnZhciBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcblxuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiBtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIGRhdGUgPj0gMSAmJiBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpIHtcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIHNlY29uZHMgPj0gMCAmJiBzZWNvbmRzIDwgNjAgJiYgbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPCA2MCAmJiBob3VycyA+PSAwICYmIGhvdXJzIDwgMjU7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGFkZE1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7TGlzdH0gZnJvbSBcIi4vY3JlYXRlTGlzdFwiXG5pbXBvcnQge0Rpc3BsYXl9IGZyb20gXCIuL2Rpc3BsYXlcIlxuaW1wb3J0IHtDb25kdWN0b3J9IGZyb20gJy4vdG9kb0RhdGFDb25kdWN0b3InO1xuLy9Ib2xkcyBjcmVhdGVkIGFycmF5c1xuaW1wb3J0IHtsaXN0QXJyYXl9IGZyb20gXCIuL2xpc3RBcnJheVRyYWNrZXIuanNcIjtcbmltcG9ydCB7Z3JhYkZyb21Mb2NhbFN0b3JhZ2V9IGZyb20gJy4vZ3JhYkZyb21Mb2NhbFN0b3JhZ2UnO1xuLy9Eb20gY29udHJvbGxlclxubGV0IGRpc3BsYXkgPSBuZXcgRGlzcGxheSgpO1xuLy9EYXRhIE1hbmlwdWxhdG9yXG5sZXQgZGF0YUNvbmQgPSBuZXcgQ29uZHVjdG9yKCk7XG5cbi8vREVGQVVMVCBDUkVBVEVEIExJU1RcbmxldCBkZWZhdWx0TGlzdCA9IG5ldyBMaXN0KCdUb2RvJyk7XG5saXN0QXJyYXkucHVzaChkZWZhdWx0TGlzdCk7XG5cbi8vTG9hZHMgZm9ybVxuZGlzcGxheS5saXN0Rm9ybSgpO1xuXG4vL2dyYWJzIHRvZG8gZGF0YSBhbmQgaW5zZXJ0cyBpbnRvIGxpc3RcbmRhdGFDb25kLmNyZWF0ZU5ld0xpc3QoKTtcbmRpc3BsYXkuZGlzcGxheUxpc3RCdXR0b25zKCk7XG4vL2FkZHMgZXZlbnQgbGlzdGVuZXIgdG8gbGlzdC1mb3JtLWJ1dHRvblxuZGlzcGxheS5BZGRFdmVudExpc3RlbmVyVG9MaXN0U3VibWl0KCk7XG5ncmFiRnJvbUxvY2FsU3RvcmFnZSgpO1xuLy9hZGRzIGV2ZW50IGxpc3RlbmVyIHRvIGRlbGV0ZSBidXR0b25zXG5kaXNwbGF5LmFkZERlbGV0ZUxpc3RMaXN0ZW5lcigpO1xuXG5kaXNwbGF5LnRvZG9Gb3JtKCk7XG5kaXNwbGF5LmZvcm1SZXNldCgpO1xuZGlzcGxheS50b2RvRm9ybU1vZGFsKCk7XG5kaXNwbGF5LmVkaXRGb3JtKCk7XG4vLyBkYXRhQ29uZC5jaGFuZ2VMaXN0KCk7XG5cbi8vRGlzcGxheSBkaWZmZXJlbnQgdGFza3NcbmRpc3BsYXkuZGlzcGxheUFsbFRhc2tzKCk7XG5kaXNwbGF5LmRpc3BsYXlVcGNvbWluZ1Rhc2tzKCk7XG5kaXNwbGF5LmRpc3BsYXlUb2RheVRhc2tzKCk7XG5kaXNwbGF5LmRpc3BsYXlQcmlvVGFza3MoKTtcblxuXG5cbi8vKiBCVUcgbGlzdHMgcmV0cmlldmVkIGZyb20gbG9jYWwgc3RvcmFnZSBkb2VzIG5vdCBhcHBlYXIgaW4gdGhlIGxpc3Qgb3B0aW9ucyBkcm9wIGRvd24gaW4gdGhlIGFkZCB0b2RvIG1vZGFsLlxuXG4iXSwibmFtZXMiOlsicGFyc2VJU08iLCJjb21wYXJlQXNjIiwiYnViYmxlU29ydCIsImFyZ3MiLCJpbmRleCIsImxlbmd0aCIsInNlY29uZEVsZUluZGV4IiwiZmlyc3RUb2RvRWxlbWVudCIsInNlY1RvZG9FbGVtZW50IiwiZmlyc3RFbGVtZW50RGF0ZSIsIkRhdGUiLCJkdWVEYXRlIiwidG9JU09TdHJpbmciLCJ1bmRlZmluZWQiLCJzZWNFbGVtZW50RGF0ZSIsImNvbXBhcmVWYWwiLCJMaXN0IiwiY29uc3RydWN0b3IiLCJ0aXRsZSIsInRvZG9zIiwiYWRkIiwidG9kbyIsInB1c2giLCJyZW1vdmUiLCJkZWxldGVkVG9kbyIsImkiLCJzcGxpY2UiLCJUb2RvIiwiZGVzY3JpcHRpb24iLCJwcmlvcml0eSIsIkNvbmR1Y3RvciIsImxpc3RBcnJheSIsImlzUGFzdCIsImlzVG9kYXkiLCJzb3J0QnlQcmlvIiwic2F2ZVRvTG9jYWxTdG9yYWdlIiwiZGF0YUNvbmQiLCJEaXNwbGF5IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXRMaXN0IiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsImZpcnN0Q2hpbGQiLCJpbm5lclRleHQiLCJsaXN0IiwidGFibGUiLCJjbGVhckxpc3RWaWV3IiwiZGlzcGxheUxpc3RCdXR0b25zIiwiYWRkRGVsZXRlTGlzdExpc3RlbmVyIiwidG9kb0Zvcm0iLCJpbnB1dEFycmF5IiwiZm9ybSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInRvZG9Db250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiY2xvc2VCdXR0b24iLCJpbnNlcnRCZWZvcmUiLCJlbGVtZW50IiwibGFiZWwiLCJ0ZXh0Q29udGVudCIsImlucHV0IiwiYXBwZW5kQ2hpbGQiLCJhcnJheSIsImZpZWxkU2V0Iiwic2VsZWN0IiwibGlzdE9wdGlvbnMiLCJpbm5lckhUTUwiLCJvcHRpb24iLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiYXBwZW5kIiwic3VibWl0Iiwic3VibWl0QnRuIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZWxmIiwiYWRkRXZlbnRMaXN0ZW5lciIsImluc2VydFRvZG9JbnRvTGlzdCIsInRvZG9FZGl0QnV0dG9uTGlzdGVuZXIiLCJjdXJyZW50TGlzdCIsInNlbGVjdGVkTGlzdCIsInZhbHVlIiwiY2xlYXJUb2RvVmlldyIsImRpc3BsYXlUb2RvIiwiZWRpdEZvcm1Nb2RhbCIsInJlbW92ZVRvZG8iLCJmb3JtUmVzZXQiLCJlZGl0Rm9ybSIsImVkaXRMaXN0T3B0aW9ucyIsImVkaXQiLCJtYWtlQ2hhbmdlc0J0biIsInNlbGVjdGVkVG9kb0VkaXQiLCJkZXNjIiwicHJpbyIsInRpdGxlSW5wdXQiLCJkZXNjSW5wdXQiLCJkdWVEYXRlSW5wdXQiLCJwcmlvTG93IiwicHJpb01lZCIsInByaW9IaWdoIiwiY2hlY2tlZCIsImxpc3RGb3JtIiwibGlzdFZpZXciLCJyZXNldCIsImxpc3RDb250YWluZXIiLCJpbml0aWFsTGlzdCIsImNhcHR1cmVMaXN0IiwibGlzdEJ0bkNvbnRhaW5lciIsImRlZmF1bHRMaXN0IiwibGlzdERlbGV0ZUJ1dHRvbiIsImRpc3BsYXlTZWxlY3RlZExpc3QiLCJsaXN0TmFtZSIsImlucHV0TGlzdCIsImxvY2FsTGlzdE9wdGlvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQWRkRXZlbnRMaXN0ZW5lclRvTGlzdFN1Ym1pdCIsImxpc3RTdWJtaXQiLCJsaXN0QXJyYXlMZW4iLCJuZXdMaXN0IiwicmVtb3ZlRGVsZXRlTGlzdExpc3RlbmVyIiwibGlzdFRpdGxlIiwibGlzdERlbGV0ZUJ0biIsImRlbGV0ZUJ0bkVsZW1lbnQiLCJyZW1vdmVGcm9tQXJyYXkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG9kb1ZpZXciLCJ0aGlzTGlzdCIsImxpc3RUb2RvTGVuIiwiaiIsInRvZG9Ub3BEaXYiLCJ0b2RvQm90RGl2IiwiZGVsZXRlVG9kbyIsImRpc3BsYXlUb2RvQW1vdW50IiwiY291bnRlciIsInRvZG9Gb3JtTW9kYWwiLCJtb2RhbCIsImJ0biIsInNwYW4iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib25jbGljayIsInN0eWxlIiwiZGlzcGxheSIsIndpbmRvdyIsImV2ZW50IiwiZGlzcGxheUFsbFRhc2tzIiwiYWxsVGFza3MiLCJ0b2RvVmlld0hlYWRlciIsImhlYWRlckNvdW50ZXIiLCJjb3VudEhvbGRlciIsImxpc3RUb2Rvc0xlbiIsImRpc3BsYXlUb2RvVGFza3MiLCJ0b2RvQXJyYXkiLCJkaXNwbGF5VXBjb21pbmdUYXNrcyIsInVwY29taW5nVGFza3NCdG4iLCJuZXdUb2RvQXJyYXkiLCJ2aWV3VGl0bGUiLCJ0aGlzVG9kb09iaiIsInBhcnNlZERhdGUiLCJjdXJyZW50VGFza3MiLCJjb3VudCIsImRpc3BsYXlUb2RheVRhc2tzIiwidG9kYXlUYXNrc0J0biIsInRvZGF5VG9kb1Rhc2tzIiwidG9kb0RhdGUiLCJwYXJzZWRUb2RvRGF0ZSIsImRhdGVSZXN1bHQiLCJkaXNwbGF5UHJpb1Rhc2tzIiwiaW1wb3J0YW50VGFza0J0biIsImltcG9ydGFudFRhc2tzIiwic3RvcmFnZUF2YWlsYWJsZSIsImdyYWJGcm9tTG9jYWxTdG9yYWdlIiwiZGlzcGxheUNvbnRyb2wiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2F2ZWRBcnJheSIsInBhcnNlZFNhdmVkQXJyYXkiLCJKU09OIiwicGFyc2UiLCJzYXZlZExpc3RMZW4iLCJsaXN0RWxlbWVudE5hbWUiLCJzYXZlZFRvZG9MZW4iLCJ0b2RvRWxlbWVudCIsInRvZG9FbGVtZW50VGl0bGUiLCJ0b2RvRWxlbWVudERlc2MiLCJ0b2RvRWxlbWVudERhdGUiLCJ0b2RvRWxlbWVudFByaW8iLCJ0b2RvT2JqIiwiY2xlYXIiLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwic29ydGVkQXJyYXkiLCJlbGVtZW50UHJpbyIsInR5cGUiLCJzdG9yYWdlIiwieCIsInJlbW92ZUl0ZW0iLCJET01FeGNlcHRpb24iLCJjb2RlIiwibmFtZSIsImZvcm1hdCIsInRvZG9EYXRhIiwiZ3JhYkZvcm1EYXRhIiwiZm9ybWF0ZWREYXRlIiwicmVwbGFjZSIsImVsZSIsImdldEVsZW1lbnRzQnlOYW1lIiwiZ3JhYkVkaXRGcm9tRGF0YSIsInVwZGF0ZVRvZG8iLCJ0b2RvVGl0bGUiLCJuZXdUaXRsZSIsIm5ld0Rlc2MiLCJuZXdEdWVEYXRlIiwibmV3UHJpbyIsInRvZG9PYmpzIiwidG9kb09ialRpdGxlIiwiY2hpbGRyZW4iLCJzZWxlY3RlZFRvZG8iLCJsYXN0Q2hpbGQiLCJwdXNoVG9MaXN0IiwiZ2l2ZW5saXN0IiwidG9kb0RhdGFMZW4iLCJfcmV0dXJuTGlzdCIsImNvbmR1Y3RvciIsImxpc3RzIiwiY29sbGVjdGlvbiIsInNlbGVjdGVkT3B0aW9ucyIsImNyZWF0ZU5ld0xpc3QiLCJsaXN0QnRuIiwibGlzdElucHV0IiwiY2FwaXRhbGl6ZWRMaXN0IiwiZGVsZXRlQnV0dG9ucyIsInBhdGgiLCJyZW1vdmVDaGlsZCIsImNoaWxkTm9kZXMiLCJsaXN0VG9SZW1vdmVGcm9tIiwidG9kb0VkaXRCdG5zIiwiZm9ybUVsZSIsInBhcmVudEVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9