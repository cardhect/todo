import {listArray} from './listArrayTracker';
import { storageAvailable } from './storageAvailable';


export function saveToLocalStorage() {
 
if (storageAvailable('localStorage')) {
    // Yippee! We can use localStorage awesomeness
    console.log('localStorage is ready.');
    localStorage.clear();
    
    //* objects need to be converted to string in order to be stored properly in localStorage. JSON.stringify().
    //stores the listArray in localStorage. 
    window.localStorage.setItem("listArray", JSON.stringify(listArray));

    //* this is how you can grab the stored array from localStorage.
    let storedArray = window.localStorage.getItem("listArray");

    //* JSON.parse converts the retrieved string back into a object.
    console.log(JSON.parse(storedArray));
    
  }
  else {
    // Too bad, no localStorage for us
  }
}

//TODO Update localStorage every time a new list or todo is created.
//TODO Figure out when localStorage data would need to be retrieved. (For what purpose would i need to retrieve the data?)