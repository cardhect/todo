import {listArray} from './listArrayTracker';
import { storageAvailable } from './storageAvailable';


export function saveToLocalStorage() {
 
if (storageAvailable('localStorage')) {
    // Yippee! We can use localStorage awesomeness
    
    localStorage.clear();
    
    //stores the listArray in localStorage as a string. 
    window.localStorage.setItem("savedListArray", JSON.stringify(listArray));

    
    
    
 
  }
  else {
    // Too bad, no localStorage for us
  }
}
