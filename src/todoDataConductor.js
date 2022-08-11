class Conductor {
    constructor() {
        this.todoData = [];//I want to access this array in method.
	}

	grabFormData() {
		const todoFormBtn = document.querySelector("#todo-form-btn");
		console.log(this.todoData);
        let arrayData = this;

		todoFormBtn.addEventListener("click", () => {
			const title = document.getElementById("title").value;
			const description = document.getElementById("description").value;
			const dueDate = document.getElementById("due-date").value;
			// const priority = document.getElementById('').value;
			const list = document.getElementById("list").value;
			arrayData.todoData.push(title);
			console.log(arrayData.todoData);
	
		});
	}
	returnArray() {
		console.log(this.todoData);
	}
}

export { Conductor };
