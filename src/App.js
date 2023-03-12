//react router dom
import { Routes, Route } from "react-router-dom";
//components
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import AlertMessage from "./components/AlertMessage";
const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <AlertMessage />
    </>
  );
};

export default App;
