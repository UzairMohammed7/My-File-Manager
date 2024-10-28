import { useState, useEffect } from "react";

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

  // Save todos to localStorage whenever the todoList changes
  useEffect(() => {
    localStorage.setItem("notesList", JSON.stringify(notesList));
    setNotesCount(notesList.length);
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
    <div className="bg-lightpurple p-6 shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Notes</h1>
      <h2 className="text-xl mb-4">
        Create <span className="font-semibold text-white">Notes</span>
      </h2>

      <input
        className="w-full p-2 mb-4 border border-phanton rounded focus:outline-none focus:ring-2 focus:ring-phanton"
        type="text"
        value={titleInput}
        onChange={(e) => setTitleInput(e.target.value)}
        placeholder="Enter Title"
      />

      <textarea
        rows="4"
        className="w-full p-2 mb-4 border border-phanton rounded focus:outline-none focus:ring-2 focus:ring-phanton"
        placeholder="Write your Note"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />

      <button
        id="addTodoButton"
        className="w-17 bg-phanton text-white p-2 rounded hover:bg-darkpurple transition duration-200"
        onClick={onAddNote}
      >
        Add Notes
      </button>


      <h1 className="text-2xl font-bold mt-5">
        My <span className="font-semibold text-white">Notes</span>
      </h1>
      <input
        className="w-17 p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-phanton mt-2"
        type="search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search by Title"
      />

      <ul className="space-y-4 bg-darkpurple">
        {filteredNotes.map((note) => (
          <li key={note.uniqueNo} className="bg-white p-4 rounded shadow">
            {isEditing === note.uniqueNo ? (
              <div className="space-y-4 flex flex-col justify-between">
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  placeholder="Edit Title"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  rows="4"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  placeholder="Edit Note"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-17 p-2 border border-gray rounded focus:outline-none focus:ring-2 focus:ring-darkpurple mt-4 mb-4"
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
    </div>
  );
};

export default Notes;
