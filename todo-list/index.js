const input = document.getElementById('input')
const todoList = document.getElementById('todo-list')
const submitBtn = document.getElementById('submit')


const addTask = () => {
    const taskValue = input.value

    if (taskValue === "") {
        return;
    }
    const taskElement = document.createElement('span')
    const deleteBtn = document.createElement('button')
    const liElement = document.createElement('li')

    taskElement.textContent = taskValue
    deleteBtn.textContent = "delete"
    liElement.appendChild(taskElement)
    liElement.appendChild(deleteBtn)

    todoList.appendChild(liElement)
}

const deleteTask = (node) => {
    node.parentNode.removeChild(node)
}

todoList.addEventListener("click", (e) => {
    if(e.target.tagName === "BUTTON"){
        deleteTask(e.target.parentNode)
    }
})

submitBtn.addEventListener("click", (e) => {
    addTask()
    input.value = ""
})
