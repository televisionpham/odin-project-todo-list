const SidePanel = () => {
    const element = document.createElement('div')
    element.classList.add('side-panel');
    element.innerHTML = `<div class="logo"><i class="fa-solid fa-check-double"></i> Todo List</div>
    <div class="side-panel-links">
        <ul>
            <li><a class="side-panel-link" href="#" name="todos"><i class="fa-solid fa-check"></i> Todos</a>
            </li>
            <li><a class="side-panel-link" href="#" name="projects"><i class="fa-solid fa-list-check"></i>
                    Projects</a></li>
        </ul>
    </div>`
    return element;
}

export default SidePanel;