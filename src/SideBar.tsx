import { Link, NavLink } from 'react-router-dom';

function SideBar() {
  return (
    <section className="min-vh-100  border-end pt-4 px-4">
      <nav>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className="nav-link" to="/greeter">
              Greeter
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/personal-greeter">
              Personal Greeter
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/parent-fragment">
              Parent Fragment
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/proper-personal-greeter">
              Proper Personal Greeter
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/fruit-list">
              Fruit List
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/click-me-button">
              Click Me Button
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/fruit-list-delete">
              Fruit List Delete
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}
export default SideBar;
