import { listArray } from "./listArrayTracker";
import { storageAvailable } from "./storageAvailable";
import { Display } from "./display";
import { List } from "./createList";
import { Todo } from "./createToDo";
import { parse } from "date-fns";

export function grabFromLocalStorage() {
	let displayControl = new Display();
    if (storageAvailable("localStorage")) {
        
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
			listArray.splice(0, listArray.length)

			//cycles through each list and todo and creates a list and todo object.
			let savedListLen = parsedSavedArray.length-1;
			for (let i= 0; i <= savedListLen; i++) {
				const listElement = parsedSavedArray[i];
				const listElementName = parsedSavedArray[i].title;
				const newList = new List(listElementName);
				
				listArray.push(newList);
				
				
				const savedTodoLen = parsedSavedArray[i].todos.length-1;
				for (let j = 0; j <= savedTodoLen; j++) {
					const todoElement = parsedSavedArray[i].todos[j];
					
					const todoElementTitle = todoElement.title;
					
					const todoElementDesc = todoElement.description;
					
					const todoElementDate = todoElement.dueDate;
					
					const todoElementPrio = todoElement.priority;
					

					const todoObj = new Todo(todoElementTitle, todoElementDate, todoElementDate, todoElementPrio);

					listArray[i].todos.push(todoObj);
			

					
				}
				
			}


			
			
			
			
			
			
            //Updates the default list view with its tasks.
			displayControl.displayTodo();
			displayControl.displayListButtons();
		}
	} else {
		// Too bad, no localStorage for us
		
	}
}

