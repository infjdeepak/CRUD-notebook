import AddNote from "../components/AddNote";
import NotesList from "../components/NotesList";

const Home = () => {
  return (
    <div className="home-wrapper">
      <AddNote />
      <NotesList />
    </div>
  );
};

export default Home;
