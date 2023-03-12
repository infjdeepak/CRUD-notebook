//react router dom
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Inotebook</Link>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
