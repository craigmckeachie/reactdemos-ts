import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <header className="container-fluid d-flex gap-2 p-4  border">
        <img src="/react.svg" alt="React Logo" height={32} width={32} />
        <strong>React Demos</strong>
      </header>

      <main className="d-flex gap-4">
        <section className="min-vh-100  border-end pt-4 px-4">
          <nav>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link" to="/greeter">
                  Greeter
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/personal-greeter">
                  Personal Greeter
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/parent-fragment">
                  Parent Fragment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/proper-personal-greeter">
                  Proper Personal Greeter
                </Link>
              </li>
            </ul>
          </nav>
        </section>
        <section className="mt-4">
          <Outlet />
        </section>
      </main>
    </>
  );
}

export default App;
