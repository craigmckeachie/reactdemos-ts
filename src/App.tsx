import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

function App() {
  return (
    <>
      <header className="container-fluid d-flex gap-2 p-4  border">
        <img src="/react.svg" alt="React Logo" height={32} width={32} />
        <strong>React Demos</strong>
      </header>

      <main className="d-flex gap-4">
        <SideBar />
        <section className="mt-4">
          <Outlet />
        </section>
      </main>
    </>
  );
}

export default App;
