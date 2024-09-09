import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Greeter from './Greeter.tsx';
import PersonalGreeter from './PersonalGreeter.tsx';
import ParentFragment from './ParentFragment.tsx';
import ProperPersonalGreeter from './ProperPersonalGreeter.tsx';
import FruitList from './FruitList.tsx';
import ClickMeButton from './ClickMeButton.tsx';

const fruitArray = [
  { id: 1, name: 'apple' },
  { id: 2, name: 'orange' },
  { id: 3, name: 'blueberry' },
  { id: 4, name: 'banana' },
  { id: 5, name: 'kiwi' },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'greeter', element: <Greeter /> },
      { path: 'personal-greeter', element: <PersonalGreeter /> },
      { path: 'parent-fragment', element: <ParentFragment /> },
      {
        path: 'proper-personal-greeter',
        element: <ProperPersonalGreeter first="Calvin" last="Broadus" />,
      },
      { path: 'fruit-list', element: <FruitList fruits={fruitArray} /> },
      { path: 'click-me-button', element: <ClickMeButton /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
