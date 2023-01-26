import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './features/Main/App';
import CreateNote from './features/CreateNote/CreateNote';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/nowy",
    element: <CreateNote/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

