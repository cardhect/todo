import {listArray} from './listArrayTracker';
import { storageAvailable } from './storageAvailable';


export function saveToLocalStorage() {
 
if (storageAvailable('localStorage')) {
    // Yippee! We can use localStorage awesomeness
    console.log('localStorage is ready.');
    localStorage.clear();
    
    //stores the listArray in localStorage as a string. 
    window.localStorage.setItem("savedListArray", JSON.stringify(listArray));

    console.log('Data was saved to localStorage.');
  }
  else {
    // Too bad, no localStorage for us
  }
}

//TODO Update localStorage every time a new list or todo is created.
//local storage needs to be updated each time a list is created, a task is created, a task is edited, a task is deleted.
//* when the above happens clear local storage and update with the new data.
//TODO Figure out when localStorage data would need to be retrieved. (For what purpose would i need to retrieve the data?)
//answer: when page is refreshed. 