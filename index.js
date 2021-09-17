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
    
        taskStatus.appendChild(editBtn)
        taskStatus.appendChild(deleteBtn)
        tasksContainer.appendChild(taskDiv)

        todoInput.value = ''
    }
    
}

// eventListener
addBtn.addEventListener('click', addTodo)