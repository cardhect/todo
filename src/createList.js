class List {

    constructor(title) {
        this.title = title;
        this.todos = [];
    }
    //adds given obj to list array
    add(todo){ //! Issue when page is refreshed and new todo is added this method does not exist yet.
        this.todos.push(todo);
    }

    remove(deletedTodo){
        
        
        for( let i = 0; i < this.todos.length; i++){ 
                                   
            if ( this.todos[i].title === deletedTodo) { 
                this.todos.splice(i, 1); 
                i--; 
            }
        }
        
    }


}

export {List};