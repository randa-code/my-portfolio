
let tasks = JSON.parse(localStorage.getItem('randa_tasks')) || [];

function addTask() {
    const input = document.getElementById('taskInput');
    if (!input || input.value.trim() === "") return;

    const newTask = {
        id: Date.now(),
        text: input.value,
        completed: false
    };

    tasks.push(newTask);
    save();
    input.value = "";
    render();
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    save();
    render();
}

function toggleComplete(id) {
    tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
    save();
    render();
}

function save() {
    localStorage.setItem('randa_tasks', JSON.stringify(tasks));
}

function render() {
    const list = document.getElementById('taskList');
    if (!list) return;
    list.innerHTML = "";

    tasks.forEach(t => {
        const li = document.createElement('li');
        li.className = "task-item " + (t.completed ? "completed" : "");
        
        
        li.innerHTML = '<div style="display:flex; align-items:center; gap:10px;">' +
            '<input type="checkbox" ' + (t.completed ? 'checked' : '') + ' onchange="toggleComplete(' + t.id + ')">' +
            '<span>' + t.text + '</span>' +
            '</div>' +
            '<button class="delete-btn" onclick="deleteTask(' + t.id + ')">حذف</button>';
            
        list.appendChild(li);
    });
}

render();