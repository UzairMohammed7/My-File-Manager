import { useState, useEffect } from "react";
import Navbar from './Navbar';

const Notes = () => {
  // Initialize the state from localStorage or fallback to an empty array
  const getInitialNotes = () => {
    const storedTodos = localStorage.getItem("notesList");
    return storedTodos ? JSON.parse(storedTodos) : [];
  };

  // State for the todo list, count, and input fields
  const [notesList, setNotesList] = useState(getInitialNotes);
  const [notesCount, setNotesCount] = useState(getInitialNotes().length);
  const [titleInput, setTitleInput] = useState("");
  const [userInput, setUserInput] = useState("");
  const [searchInput, setSearchInput] = useState(""); // State for search input
  const [isEditing, setIsEditing] = useState(null); // State to track which note is being edited
  const [editedTitle, setEditedTitle] = useState("");
  const [editedText, setEditedText] = useState("");
  const [isItemPresent, setIsItemPresent] = useState(notesList.length > 0)

  // Save todos to localStorage whenever the todoList changes
  useEffect(() => {
    localStorage.setItem("notesList", JSON.stringify(notesList));
    setNotesCount(notesList.length);
    setIsItemPresent(notesList.length > 0);
  }, [notesList]);

  // Handle adding a new todo
  const onAddNote = () => {
    if (titleInput.trim() === "" || userInput.trim() === "") {
      alert("Please enter both a title and a note.");
      return;
    }

    const newNote = {
      title: titleInput,
      text: userInput,
      uniqueNo: notesCount + 1,
    };

    setNotesList([...notesList, newNote]);
    setUserInput(""); // Reset the input field
    setTitleInput(""); // Reset the title field
  };

  // Handle deleting a todo
  const onDeleteNote = (uniqueNo) => {
    const updatedTodos = notesList.filter((note) => note.uniqueNo !== uniqueNo);
    setNotesList(updatedTodos);
  };

  // Handle starting the edit process
  const onEditNote = (uniqueNo, title, text) => {
    setIsEditing(uniqueNo); // Track the note being edited
    setEditedTitle(title);
    setEditedText(text);
  };

  // Handle saving the edited note
  const onSaveNote = (uniqueNo) => {
    const updatedTodos = notesList.map((note) =>
      note.uniqueNo === uniqueNo
        ? { ...note, title: editedTitle, text: editedText }
        : note
    );
    setNotesList(updatedTodos);
    setIsEditing(null); // Exit edit mode
  };

  // Handle search functionality
  const filteredNotes = notesList.filter((note) =>
    note.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">Notes</h1>

        <div className="bg-phanton rounded-2xl p-8">
          <h2 className="text-xl mb-4 text-white">
            Create <span className="font-semibold text-white">Notes</span>
          </h2>
          <input
            className="w-full p-2 mb-4 bg-lightgray border border-phanton rounded focus:outline-none focus:ring-2 focus:ring-phanton"
            type="text"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
            placeholder="Enter Title"
          />
          <textarea
            rows="4"
            className="w-full p-2 mb-4 bg-lightgray border border-phanton rounded focus:outline-none focus:ring-2 focus:ring-phanton"
            placeholder="Write your Note"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button
            id="addTodoButton"
            className="w-17 bg-blue text-white p-2 rounded hover:bg-darkpurple transition duration-200"
            onClick={onAddNote}
          >
            Add Notes
          </button>
        </div>
        {/* ------- */}
        <div className="bg-phanton rounded-2xl p-8 mt-4">
          <h1 className="text-2xl mt-5 mb-4 text-white">
            My <span className="font-semibold text-white">Notes</span>
          </h1>
          <div className="flex items-center w-72 mb-4 focus:outline-none focus:ring-2 focus:ring-blue">
            <input
              className="p-2 bg-lightgray"
              type="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search by Title..."
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="bg-white h-10 p-2"
            />
          </div>
          {isItemPresent && (
            <ul className="space-y-4">
              {filteredNotes.map((note) => (
                <li key={note.uniqueNo} className="bg-white p-4 rounded shadow">
                  {isEditing === note.uniqueNo ? (
                    <div className="space-y-4 flex flex-col justify-between">
                      <input
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        placeholder="Edit Title"
                        className="w-full p-2 bg-lightgray border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <textarea
                        rows="4"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                        placeholder="Edit Note"
                        className="w-full p-2 bg-lightgray border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        className="bg-phanton text-white p-2 rounded hover:bg-darkpurple transition duration-200 w-14"
                        onClick={() => onSaveNote(note.uniqueNo)}
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col">
                      <strong className="text-lg">{note.title}</strong>
                      
                      <textarea
                        readOnly
                        rows="4"
                        className="w-17 p-2 bg-lightgray border border-gray rounded focus:outline-none focus:ring-2 focus:ring-darkpurple mt-4 mb-4"
                      >
                        {note.text}
                      </textarea>
                      <div className="flex space-x-2">
                        <button
                          className="hover:text-yellow border border-gray bg-phanton text-white p-2 rounded hover:bg-darkpurple"
                          onClick={() =>
                            onEditNote(note.uniqueNo, note.title, note.text)
                          }
                        >
                          ✏️ Edit
                        </button>
                        <button
                          className="hover:text-red border border-gray bg-phanton text-white p-2 rounded hover:bg-darkpurple"
                          onClick={() => onDeleteNote(note.uniqueNo)}
                        >
                          🗑️ Delete
                        </button>
                      </div>
                      
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
          {!isItemPresent && <p className="text-center text-white text-lg">No Notes found. Add Some Notes.</p>}
        </div>

      </div>
    </>
  );
};

export default Notes;
