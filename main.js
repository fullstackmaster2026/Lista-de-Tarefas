let tasks = [
    { id: 1, description: 'Fazer compras', completed: false },
    { id: 2, description: 'Ligar para o cliente', completed: false },
    { id: 3, description: 'Enviar e-mail', completed: false }
];

const getCheckbox = ({ id, description, completed }) => {
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    const wrapper = document.createElement('div');
    const checkboxId = `checkbox-${id}`;


    checkbox.type = 'checkbox';
    checkbox.id = checkboxId;
    checkbox.checked = completed;

    label.htmlFor = checkboxId;
    label.textContent = description;

    wrapper.className = 'checkbox-label';

    wrapper.appendChild(checkbox);
    wrapper.appendChild(label);

    return wrapper;
}


window.onload = function() {
    tasks.forEach((task) => {
        const checkbox = getCheckbox(task);
        const taskItem = document.getElementById('tasks-list');
        const toDo = document.createElement('li');
        const button = document.createElement('button');

        toDo.id = task.id;
        toDo.appendChild(checkbox);
        taskItem.appendChild(toDo);
        toDo.appendChild(button);
    });
}