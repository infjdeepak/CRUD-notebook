import { createContext, useContext, useState } from "react";
const baseUrl = "https://640ad56081d8a32198d1b662.mockapi.io/todo";

export const NoteContext = createContext();

export const useNoteContext = () => {
  return useContext(NoteContext);
};

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  //get All notes
  const getAllNotes = async () => {
    const response = await fetch(baseUrl, {
      method: "GET",
    });

    if (response.ok) {
      const fetchedNotes = await response.json();
      setNotes(fetchedNotes);
    }
  };
  //add a note
  const addNote = async (title, body) => {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });
    if (response.ok) {
      const result = await response.json();
      setNotes([...notes, { title, body, id: result.id }]);
    }
  };

  //delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      setNotes(notes.filter((stateNote) => stateNote.id !== id));
    }
  };
  //edit a note
  const updateNote = async (id, title, body) => {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });

    if (response.ok) {
      const newNotes = notes.map((stateNote) => {
        if (stateNote.id === id) {
          return { ...stateNote, title, body };
        } else {
          return stateNote;
        }
      });
      setNotes(newNotes);
    }
  };
  //alert Message
  const [alertMessage, setAlertMessage] = useState(null);

  const showAlertMessage = (message) => {
    setAlertMessage(message);

    setTimeout(() => {
      setAlertMessage(null);
    }, 2000);
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        getAllNotes,
        addNote,
        deleteNote,
        updateNote,
        alertMessage,
        showAlertMessage,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
