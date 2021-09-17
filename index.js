const addBtn = document.querySelector('.add')
const tasksContainer = document.querySelector('.tasks-container')
const todoInput = document.querySelector('.todo-input')

// function

const addTodo = (e) => {

    e.preventDefault()

    if (todoInput.value) {
        const taskDiv = document.createElement('div')
        taskDiv.classList.add('task')

        const taskContent = document.createElement('div')
        taskContent.classList.add('task-content')

        const taskTitle = document.createElement('span')
        taskTitle.classList.add('task-title')
        taskTitle.innerText = todoInput.value
        taskDiv.appendChild(taskContent)
        taskContent.appendChild(taskTitle)
     
        const taskStatus = document.createElement('div')
        taskStatus.classList.add('task-status')
        taskContent.appendChild(taskStatus)
    
        const editBtn = document.createElement('button')
        editBtn.classList.add('edite', 'status', 'btn')
        editBtn.innerText = 'Edite'

        const deleteBtn = document.createElement('button')
        deleteBtn.classList.add('delete', 'status', 'btn')
        deleteBtn.innerText = 'Delete'


        const completeBtn = document.createElement('button')
        completeBtn.classList.add('complete', 'status', 'btn')
        completeBtn.innerText = 'completed'
    
        taskStatus.appendChild(editBtn)
        taskStatus.appendChild(deleteBtn)
        taskStatus.appendChild(completeBtn)
        tasksContainer.appendChild(taskDiv)
        // clear todo input value
        todoInput.value = ''
    }
    
}

const TaskBtns = (e) => {
    const button = e.target

    if (e.target.classList[0] === 'delete') {
        const todo = button.closest('.task')
        todo.remove()
    }

    else if (e.target.classList.contains('complete')) {
        const todo = button.closest('.task-content')
        todo.classList.toggle('completed')
    }
    else if (e.target.classList.contains('edite')) {
        const todo = button.closest('.task-content').firstChild
        // console.log(todo , e.target.classList);
        // console.log(todo);
        const inputEdit = document.createElement("input")
        inputEdit.type = 'text'
        inputEdit.value = todo.textContent

        button.closest('.task-content').insertBefore(inputEdit, todo)
        todo.remove()

        button.textContent = 'save'
        button.classList.remove('edite')
    }
    

    else if (e.target.textContent === 'save') {
        const input = e.target.closest('.task-content').firstChild
         const span = document.createElement('span')
         span.textContent= input.value
         button.closest('.task-content').insertBefore(span, input)
         button.closest('.task-content').removeChild(input)
         button.textContent = 'edite'
         button.classList.add('edite')

    
       
    }
}

// eventListener
addBtn.addEventListener('click', addTodo)
tasksContainer.addEventListener('click' , TaskBtns)