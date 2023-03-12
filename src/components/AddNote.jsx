import { useRef } from "react";
import { useNoteContext } from "../context/NoteContext";

const AddNote = () => {
  //states
  const { addNote, showAlertMessage } = useNoteContext();
  const titleRef = useRef();
  const bodyRef = useRef();

  //event handle
  const handleAddNote = (e) => {
    e.preventDefault();
    addNote(titleRef.current.value, bodyRef.current.value);
    titleRef.current.value = "";
    bodyRef.current.value = "";

    showAlertMessage("Note added..");
  };
  return (
    <div className="addnote-wrapper wrapper">
      <h1>
        Add
        <br /> A Note &#8594;
      </h1>
      <form className="addnote-form" onSubmit={handleAddNote}>
        <input type="text" placeholder="Title" ref={titleRef} required />
        <textarea
          type="text"
          placeholder="Start typing"
          ref={bodyRef}
          required
        />
        <button>Add Note</button>
      </form>
    </div>
  );
};

export default AddNote;
