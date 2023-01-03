const Todo = (title) => {
    let title = title;
    let description;
    let dueDate;
    let priority;
    let completed;

    const getTitle = () => {
        return title;
    }

    const setTitle = (value) => {
        title = value;
    }

    const getDescription = () => {
        return description;
    }

    const setDescription = (value) => {
        description = value;
    }

    const getDueDate = () => {
        return dueDate;
    }

    const setDueDate = (value) => {
        dueDate = value;
    }

    const getPriority = () => {
        return priority;
    }

    const setPriority = (value) => {
        priority = value;
    }

    const getCompleted = () => {
        return completed;
    }

    const setCompleted = (value) => {
        completed = value;
    }

    return {
        getTitle,
        setTitle,
        getDescription,
        setDescription,
        getDueDate,
        setDueDate,
        getPriority,
        setPriority,
        getCompleted,
        setCompleted
    }
}

export default Todo;