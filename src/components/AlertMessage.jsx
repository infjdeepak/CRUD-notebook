import { useNoteContext } from "../context/NoteContext";

const AlertMessage = () => {
  const { alertMessage } = useNoteContext();

  return (
    <>
      {alertMessage && (
        <div className="alert-message">
          <h5>{alertMessage}</h5>
        </div>
      )}
    </>
  );
};
export default AlertMessage;
