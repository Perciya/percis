function addTask() {
    let input = document.getElementById("taskInput");
    if (!input.value.trim()) return;
    let li = document.createElement("li");
    li.className = "task-item"; 
    let taskSpan = document.createElement("span");
    taskSpan.textContent = input.value;
    let checkBtn = document.createElement("button");
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    checkBtn.className = "check-btn";
    checkBtn.onclick = () => {
        li.classList.toggle("completed");
        filterTasks(currentFilter); 
    };
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => li.remove();
    li.appendChild(taskSpan);
    li.appendChild(checkBtn);
    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
function clearAllTasks() {
    document.getElementById("taskList").innerHTML = "";
}
let currentFilter = 'all';
function filterTasks(filter) {
    currentFilter = filter;
    let tasks = document.querySelectorAll(".task-item");
    tasks.forEach(task => {
        switch (filter) {
            case 'completed':
                task.style.display = task.classList.contains("completed") ? "flex" : "none";
                break;
            case 'pending':
                task.style.display = !task.classList.contains("completed") ? "flex" : "none";
                break;
            default:
                task.style.display = "flex";
        }
    });
}

