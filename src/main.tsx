import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Greeter from './Greeter.tsx';
import PersonalGreeter from './PersonalGreeter.tsx';
import ParentFragment from './ParentFragment.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'greeter', element: <Greeter /> },
      { path: 'personal-greeter', element: <PersonalGreeter /> },
      { path: 'parent-fragment', element: <ParentFragment /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
