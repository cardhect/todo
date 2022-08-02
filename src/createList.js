class List {
    constructor(title) {
        this.title = title;
        this.list = [];
    }
    //adds given obj to list array
    add(todo){
        this.list.push(todo);
    }

}

export {List};