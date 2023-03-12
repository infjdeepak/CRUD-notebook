import Note from "./Note";
import { useNoteContext } from "../context/NoteContext";
import { useEffect } from "react";

const NotesList = () => {
  const { notes, getAllNotes } = useNoteContext();

  useEffect(() => {
    getAllNotes();
  }, []);

  return (
    <div className="wrapper notes-list">
      {notes.map((note) => (
        <Note note={note} key={note.id} />
      ))}
    </div>
  );
};

export default NotesList;
