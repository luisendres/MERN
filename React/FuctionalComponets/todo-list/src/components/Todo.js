const Todo = (props) => {
    const todoClases = ["bold", "italic"];

    if (props.todo.complete) {
        todoClases.push("line-through");
    }

    return (
        <div>
            <input 
                onChange={(event) => {
                    props.handleToggleComplete(props.i);
                }} 
                checked={props.todo.complete} 
                type="checkbox" 
            />
            <span className={todoClases.join(" ")}>{props.todo.text}</span>
            <button 
                onClick={(event) => {
                    props.handleTodoDelete(props.i);
                }}
                style={{ marginLeft: "10px" }}
            >
                Delete
            </button>
        </div>
    );
};

export default Todo;