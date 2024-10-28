import { useState, useEffect } from "react";
import { v4 } from "uuid";
import Navbar from './Navbar';

const Contacts = () => {
  // Initialize the state from localStorage or fallback to an empty array
  const getInitialContact = () => {
    const storedContacts = localStorage.getItem("contactsList");
    return storedContacts ? JSON.parse(storedContacts) : [];
  };

  // State for the todo list, count, and input fields
  const [contactsList, setContactsList] = useState(getInitialContact);
  const [contactsCount, setContactsCount] = useState(getInitialContact().length);
  const [userInput, setUserInput] = useState("");
  const [numberInput, setNumberInput] = useState("");
  const [searchInput, setSearchInput] = useState(""); // State for search input
  const [isEditing, setIsEditing] = useState(null); // State to track which contact is being edited
  const [editedName, setEditedName] = useState("");
  const [editedNumber, setEditedNumber] = useState("");
  const [isItemPresent, setIsItemPresent] = useState(contactsList.length > 0)

  // Save todos to localStorage whenever the todoList changes
  useEffect(() => {
    localStorage.setItem("contactsList", JSON.stringify(contactsList));
    setContactsCount(contactsList.length);
    setIsItemPresent(contactsList.length > 0);
  }, [contactsList]);

  // Handle adding a new todo
  const onAddContact = () => {
    if (userInput.trim() === "" || numberInput.trim() === "") {
      alert("Please enter both a name and a contact.");
      return;
    }

    const newContact = {
      id: v4(),
      userName: userInput,
      number: numberInput,
      uniqueNo: contactsCount + 1,
    };

    setContactsList([...contactsList, newContact]);
    setNumberInput("");
    setUserInput("");
  };

  // Handle deleting a todo
  const onDeleteContact = (uniqueNo) => {
    const updatedTodos = contactsList.filter((contact) => contact.uniqueNo !== uniqueNo);
    setContactsList(updatedTodos);
  };

  // Handle starting the edit process
  const onEditContact = (uniqueNo, userName, number) => {
    setIsEditing(uniqueNo); // Track the contact being edited
    setEditedName(userName);
    setEditedNumber(number);
  };

  // Handle saving the edited contact
  const onSaveContact = (uniqueNo) => {
    const updatedTodos = contactsList.map((contact) =>
      contact.uniqueNo === uniqueNo
        ? { ...contact, userName: editedName, number: editedNumber }
        : contact
    );
    setContactsList(updatedTodos);
    setIsEditing(null); // Exit edit mode
  };

  // Handle search functionality
  const filteredContacts = contactsList.filter((contact) =>
    (contact.userName?.toLowerCase() ?? "").includes(
      searchInput?.toLowerCase() ?? ""
    )
  );
  
  return ( 
    
  <div>

    <Navbar />
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center text-white">Contacts</h1>
      
      <div className="bg-phanton rounded-2xl p-8">
        <h2 className="text-xl mb-4 text-white">
          Create <span className="font-semibold text-white">Contacts</span>
        </h2>
        <input
          className="w-17 p-2 bg-lightgray border border-phanton rounded focus:outline-none focus:ring-2 focus:ring-phanton mr-2"
          type="text" // Changed to text for names
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter Contact Name"
        />
        <input
          type="number" // Changed to tel for phone numbers
          className="w-17 p-2 bg-lightgray border border-phanton rounded focus:outline-none focus:ring-2 focus:ring-phanton mr-2"
          placeholder="Enter a Contact Number"
          value={numberInput}
          onChange={(e) => setNumberInput(e.target.value)}
        />
        <button
          id="addTodoButton"
          className="w-17 bg-blue text-white p-2 rounded hover:bg-darkpurple transition duration-200"
          onClick={onAddContact}
        >
          Add Contacts
        </button>
      </div>
      {/* -------- */}
      <div className="bg-phanton rounded-2xl p-8 mt-5">
        <h2 className="text-xl mb-4 text-white">
          Search <span className="font-semibold text-white">Contacts</span>
        </h2>
        <div className="flex items-center w-72 mb-4 focus:outline-none focus:ring-2 focus:ring-blue">
          <input
            className="p-2 bg-lightgray"
            type="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search by Name"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
            alt="search"
            className="bg-white h-10 p-2"
          />
        </div>

        <h1 className="text-white">Saved Contacts: {contactsList.length}</h1>
        {isItemPresent && (
          <ul className="space-y-4 bg-darkpurple rounded">
          {filteredContacts.map((contact) => (
            <li key={contact.uniqueNo} className="bg-lightgray p-4 rounded">
              {isEditing === contact.uniqueNo ? (
                <div className="space-y-4 flex flex-col">
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    placeholder="Edit Name"
                    className="w-17 p-2 bg-lightgray border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-phanton"
                  />
                  <div className="flex flex-row space-x-2 justify-between w-60">
                    <input
                      type="tel"
                      value={editedNumber}
                      onChange={(e) => setEditedNumber(e.target.value)}
                      placeholder="Edit Number"
                      className="w-17 p-2 bg-lightgray border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-phanton"
                    />
                    <button
                      className="bg-phanton text-white pl-2 pr-2 rounded hover:bg-darkpurple transition duration-200 cursor-pointer"
                      onClick={() => onSaveContact(contact.uniqueNo)}
                    >
                      Save
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <strong className="text-lg">{contact.userName}</strong>
                  <div className="flex flex-row space-x-2 justify-between w-80">
                    <span>
                      {contact.number}
                    </span>
                    <div className="space-x-2">
                        <button
                          className="hover:text-yellow border border-gray bg-phanton text-white pl-2 pr-2 rounded hover:bg-darkpurple"
                          onClick={() =>
                            onEditContact(
                              contact.uniqueNo,
                              contact.userName,
                              contact.number
                            )
                          }
                        >
                          ✏️ Edit
                        </button>
                        <button
                          className="hover:text-red border border-gray bg-phanton text-white pl-2 pr-2 rounded hover:bg-darkpurple"
                          onClick={() => onDeleteContact(contact.uniqueNo)}
                        >
                          🗑️ Delete
                        </button>
                    </div>
                  </div>        
                </div>
              )}
            </li>
          ))}
          </ul>
        )}
        {!isItemPresent && <p className="text-white text-center text-lg">No Contacts Found. Add Contacts</p>}
      </div>
    </div>
  </div>
    
  );
};

export default Contacts;
