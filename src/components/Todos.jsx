import { useState, useEffect } from "react";
import Navbar from './Navbar';

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
  const [isItemPresent, setIsItemPresent] = useState(todoList.length > 0)

  // Save todos to localStorage whenever the todoList changes
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    setTodosCount(todoList.length); // Keep count in sync with the list
    setIsItemPresent(todoList.length > 0) // Check if the list is not empty
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
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">Todos</h1>

        <div className="bg-phanton rounded-2xl p-8">
          <h2 className="text-xl mb-4 text-white">
            Create <span className="font-semibold text-white">Task</span>
          </h2>
          <input
            className="w-full p-2 mb-4 border bg-lightgray border-phanton rounded focus:outline-none focus:ring-2 focus:ring-phanton"
            type="text"
            id="todoUserInput"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Enter your task"
          />
          <button
            id="addTodoButton"
            className="w-17 bg-blue text-white p-2 rounded hover:bg-darkpurple transition duration-200"
            onClick={onAddTodo}
          >
            Add Todo
          </button>
        </div>
        {/* ------ */}
        <div className="bg-phanton rounded-2xl p-8 mt-4">
          <h1 className="text-2xl mb-4 mt-4 text-white">
            My <span className="text-white">Task</span>
          </h1>
          {isItemPresent && (
            <ul id="todoItemsContainer" className="space-y-4">
                {todoList.map((todo) => (
                  <li
                    key={todo.uniqueNo}
                    className="bg-lightgray p-4 rounded shadow flex items-center justify-between"
                  >
                    <input
                      type="checkbox"
                      checked={todo.isChecked}
                      onChange={() => onTodoStatusChange(todo.uniqueNo)}
                      id={`checkbox${todo.uniqueNo}`}
                      className="mr-2 leading-tight bg-lightgray"
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
          )}
          {!isItemPresent && <p className="text-center text-white text-lg">No Todos Found. Add Some TODOS.</p>}

        </div>
      </div>
    </>
  );
};

export default Todos;
