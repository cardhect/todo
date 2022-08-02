
class Display{
    constructor() {
        
    }

    loadBody(){
         
    }

    form(){
        let inputArray = ['title','description','dueDate','priority','list'];
        
        const form = document.createElement('form');
        form.setAttribute('id','todo-form');
        document.body.append(form);
        
        for (let i = 0; i < inputArray.length; i++) {
            const element = inputArray[i];
            if (element == "title") {
                let label = document.createElement('label');
                label.setAttribute('for','title');
                label.textContent = 'Title:';
                let input = document.createElement('input');
                input.setAttribute('type','text')
                input.setAttribute('id','title')
                input.setAttribute('name','title');
                form.appendChild(label);
                form.appendChild(input);
            }
            if (element == "description") {
                let label = document.createElement('label');
                label.setAttribute('for','description');
                label.textContent = 'Description:';
                let input = document.createElement('input');
                input.setAttribute('type','text')
                input.setAttribute('id','description')
                input.setAttribute('name','description');
                form.appendChild(label);
                form.appendChild(input);
            }
            if (element == "dueDate") {
                let label = document.createElement('label');
                label.setAttribute('for','due-date');
                label.textContent = 'Due Date:';
                let input = document.createElement('input');
                input.setAttribute('type','text')
                input.setAttribute('id','due-date')
                input.setAttribute('name','due-date');
                form.appendChild(label);
                form.appendChild(input);
            }
            if (element == "priority") {
                let label = document.createElement('label');
                label.setAttribute('for','priority');
                label.textContent = 'Priority:';
                let input = document.createElement('input');
                input.setAttribute('type','text')
                input.setAttribute('id','priority')
                input.setAttribute('name','priority');
                form.appendChild(label);
                form.appendChild(input);
            }
            if (element == "list") {
                let label = document.createElement('label');
                label.setAttribute('for','List');
                label.textContent = 'List:';
                let input = document.createElement('input');
                input.setAttribute('type','text')
                input.setAttribute('id','list')
                input.setAttribute('name','list');
                form.appendChild(label);
                form.appendChild(input);
            }
            
            
        }
        
        const submit = document.createElement('input');
        submit.setAttribute('type','submit')
        submit.setAttribute('value','Submit')
        form.appendChild(submit);
    }
}
export {Display}
