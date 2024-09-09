import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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
                <a className="nav-link" aria-current="page" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true">
                  Link
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <section className="mt-4">
          <h3>Ready</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            blanditiis illum facere sequi soluta, fugiat mollitia tenetur
            impedit illo aspernatur minima earum eligendi quam maiores quaerat
            ipsa natus quas voluptatem.
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
