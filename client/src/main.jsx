import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {Machines, MachineDetails, RecipeDetails, Dispensers, Ingredients, Recipes} from './pages/index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
         <Machines />
        )
      },
      {
        path: "/machine-details/:machineId",
        element: (
         <MachineDetails />
        )
      },
      {
        path: "/machine-details/:machineId/recipe-details/:recipeId",
        element: (
         <RecipeDetails />
        )
      },
      {
        path: "/dispensers",
        element: <Dispensers />,
      },
      {
        path: "/ingredients",
        element: <Ingredients />,
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
