
export function sortByPrio(args) {
    
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