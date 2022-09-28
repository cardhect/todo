import {parseISO, compareAsc} from "date-fns";
export function bubbleSort(args) {

    for (let index = 0; index < args.length; index++) {
        let secondEleIndex = index + 1;
        const firstTodoElement = args[index];
        const secTodoElement = args[index+1];

        
        const firstElementDate = parseISO(new Date(firstTodoElement.dueDate).toISOString());
        //checks to see if the loop is at the end of the array.
        if(secTodoElement == undefined){
            console.log('end of array');
        } else {
            const secElementDate = parseISO(new Date(secTodoElement.dueDate).toISOString())
            
            
                    //if 1 returned first date is after the second, -1 first date is before, 0 dates are equal

                    //I need to compare 2 at a time starting from 0,1 1,2, 2,3 3,4.
                    //if first number is less swap them and continue onto next 2.

                    //! This code is currently comparing0
                                    
                    
                                    
                    const compareVal = compareAsc(firstElementDate,secElementDate);
            
                    console.log(compareVal);
            
                    if (compareVal == 1) {
                        //swap elements
                        args[index] = secTodoElement;
                        args[secondEleIndex] = firstTodoElement;
                        console.log(args)
                    } else if (compareVal == -1) {
                        //nothing changes
                    } else if (compareVal == 0) {
                        //nothing changes
                    }
        }
        
        
       
    }

}