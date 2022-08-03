class Conductor {
    constructor() {
        this.todoData = [];
	}

	grabFormData() {
		const todoFormBtn = document.querySelector("#todo-form-btn");
        console.log(this.todoData);
		todoFormBtn.addEventListener("click", function () {
			const title = document.getElementById("title").value;
			const description = document.getElementById("description").value;
			const dueDate = document.getElementById("due-date").value;
			// const priority = document.getElementById('').value;
			const list = document.getElementById("list").value;
            // this.todoData.push('title');
            console.log(this.todoData);//undefined???
		});
	}
}

export { Conductor };
