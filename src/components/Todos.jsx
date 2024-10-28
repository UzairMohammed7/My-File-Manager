import { useState, useEffect } from "react";

const Todos = () => {
  // Initialize the state from localStorage or fallback to an empty array
  const getInitialTodos = () => {
    const storedTodos = localStorage.getItem("todoList");
    return storedTodos ? JSON.parse(storedTodos) : [];
  };

  // State for the todo list and count
  const [todoList, setTodoList] = useState(getInitialTodos); // Initialize from localStorage
  const [todosCount, setTodosCount] = useState(getInitialTodos().length); // Initialize count
  const [userInput, setUserInput] = useState("");

  // Save todos to localStorage whenever the todoList changes
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    setTodosCount(todoList.length); // Keep count in sync with the list
  }, [todoList]);

  // Handle adding a new todo
  const onAddTodo = () => {
    if (userInput.trim() === "") {
      alert("Enter Valid Text");
      return;
    }

    const newTodo = {
      text: userInput,
      uniqueNo: todosCount + 1,
      isChecked: false,
    };

    setTodoList([...todoList, newTodo]); // Add the new todo
    setUserInput(""); // Reset the input field
  };

  // Handle checking/unchecking a todo
  const onTodoStatusChange = (uniqueNo) => {
    const updatedTodos = todoList.map((todo) =>
      todo.uniqueNo === uniqueNo
        ? { ...todo, isChecked: !todo.isChecked }
        : todo
    );
    setTodoList(updatedTodos);
  };

  // Handle deleting a todo
  const onDeleteTodo = (uniqueNo) => {
    const updatedTodos = todoList.filter((todo) => todo.uniqueNo !== uniqueNo);
    setTodoList(updatedTodos);
  };

  return (
    // <div className="todos-bg-container">
    // //   <h1 className="todos-heading">Todos</h1>
    // //   <h2 className="create-task-heading">Create <span className="create-task-heading-subpart">Task</span> </h2>
    // //   <input
    // //     className="todo-user-input"
    // //     type="text"
    // //     id="todoUserInput"
    // //     value={userInput}
    // //     onChange={(e) => setUserInput(e.target.value)}
    // //     placeholder="Enter your task"
    // //   />
    // //   <button id="addTodoButton" className="button" onClick={onAddTodo}>
    // //     Add Todo
    // //   </button>

    // //   <h1 className="todo-items-heading">My <span className="todo-items-heading-subpart">Task</span></h1>

    // //   <ul id="todoItemsContainer" className="todo-items-container">
    // //     {todoList.map((todo) => (
    // //       <li key={todo.uniqueNo} className="todo-item-container">
    // //         <input
    // //           type="checkbox"
    // //           checked={todo.isChecked}
    // //           onChange={() => onTodoStatusChange(todo.uniqueNo)}
    // //           id={`checkbox${todo.uniqueNo}`}
    // //           className="checkbox-input"
    // //         />
    // //         <div className="label-container">
    // //             <label
    // //               htmlFor={`checkbox${todo.uniqueNo}`}
    // //               className={`checkbox-label ${todo.isChecked ? "checked" : ""}`}
    // //             >
    // //               {todo.text}
    // //             </label>
    // //             <div className="delete-icon-container">
    // //                 <button className="delete-icon" onClick={() => onDeleteTodo(todo.uniqueNo)}>
    // //                 🗑️
    // //                 </button>
    // //             </div>
    // //         </div>
    // //       </li>
    // //     ))}
    // //   </ul>
    // </div>

    <div className="bg-lightpurple p-6 shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Todos</h1>
      <h2 className="text-xl mb-4">
        Create <span className="font-semibold text-white">Task</span>
      </h2>

      <input
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-phanton"
        type="text"
        id="todoUserInput"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Enter your task"
      />
      <button
        id="addTodoButton"
        className="w-17 bg-phanton text-white p-2 rounded hover:bg-darkpurple transition duration-200"
        onClick={onAddTodo}
      >
        Add Todo
      </button>


      <h1 className="text-2xl font-bold mb-4 mt-4">
        My <span className="font-semibold text-white">Task</span>
      </h1>
      <div className="bg-phanton">
        <ul id="todoItemsContainer" className="space-y-4 bg-darkpurple">
          {todoList.map((todo) => (
            <li
              key={todo.uniqueNo}
              className="bg-white p-4 rounded shadow flex items-center justify-between"
            >
              <input
                type="checkbox"
                checked={todo.isChecked}
                onChange={() => onTodoStatusChange(todo.uniqueNo)}
                id={`checkbox${todo.uniqueNo}`}
                className="mr-2 leading-tight"
              />
              <div className="flex-1">
                <label
                  htmlFor={`checkbox${todo.uniqueNo}`}
                  className={`cursor-pointer ${
                    todo.isChecked ? "line-through text-gray-400" : ""
                  }`}
                >
                  {todo.text}
                </label>
              </div>
              <button
                className="text-red-600 hover:text-red-700"
                onClick={() => onDeleteTodo(todo.uniqueNo)}
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
