import { listArray } from "./listArrayTracker";
import { storageAvailable } from "./storageAvailable";
import { Display } from "./display";

export function grabFromLocalStorage() {
	let displayControl = new Display();
    if (storageAvailable("localStorage")) {
        
		// Yippee! We can use localStorage awesomeness
		console.log("localStorage is ready.");

		//*savedListArray is the key for listArray Data

		if (localStorage.getItem("savedListArray") === null) {
            //
            console.log("no local data saved..");
		} else {
			let savedArray = window.localStorage.getItem("savedListArray");

			//converts data from string back to an object
			let parsedSavedArray = JSON.parse(savedArray);

			//Assigns the listArray to the stored
			Object.assign(listArray, parsedSavedArray);
			console.log(parsedSavedArray);
			console.log("Saved listArray above!");

            //Updates the default list view with its tasks.
            displayControl.displayTodo();
		}
	} else {
		// Too bad, no localStorage for us
		console.log("no local data saved..");
	}
}

//TODO Update localStorage every time a new list or todo is created.
//local storage needs to be updated each time a list is created, a task is created, a task is edited, a task is deleted.
//* when the above happens clear local storage and update with the new data.
//TODO Figure out when localStorage data would need to be retrieved. (For what purpose would i need to retrieve the data?)
//answer: when page is refreshed.
