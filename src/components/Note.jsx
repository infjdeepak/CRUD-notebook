import { useNoteContext } from "../context/NoteContext";
import { AiFillDelete, AiTwotoneEdit, AiFillSave } from "react-icons/ai";
import { useState } from "react";

const Note = ({ note }) => {
  const { deleteNote, updateNote, showAlertMessage } = useNoteContext();
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);

  const handleDeleteNote = async () => {
    deleteNote(note.id);
    showAlertMessage("Deleting..");
  };
  const handleEditNote = () => {
    setEditMode(!editMode);
  };
  const handleSaveNote = () => {
    updateNote(note.id, title, body);
    setEditMode(!editMode);
    showAlertMessage("Note saved..");
  };

  return (
    <div className="note-card">
      {editMode ? (
        <>
          <div className="note-icons">
            <AiFillSave onClick={handleSaveNote} />
          </div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </>
      ) : (
        <>
          <div className="note-icons">
            <AiTwotoneEdit onClick={handleEditNote} />
            <AiFillDelete onClick={handleDeleteNote} />
          </div>
          <h3>{note.title}</h3>
          <p>{note.body}</p>
        </>
      )}
    </div>
  );
};

export default Note;
