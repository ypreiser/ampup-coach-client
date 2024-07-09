import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout/Layout"
import "./App.css"
import ChallengesPage from "./Pages/Challanges/ChallengesPage"
import TeamsPage from "./Pages/Teams/TeamsPage"
import UsersPage from "./Pages/Users/UserPage"
import StorePage from "./Pages/Store/StorePage"
// import TeamsPage from "./pages/TeamsPage"
// import DecksPage from "./pages/DecksPage"
// import StoresPage from "./pages/StoresPage"
// import HelpPage from "./pages/HelpPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <div>Home Page</div>,
      },
      {
        path: "challenges",
        element: <ChallengesPage />,
      },
      {
        path: "teams",
        element: <TeamsPage />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
      {
        path: "decks",
        element: <>DecksPage </>,
      },
      {
        path: "decksCatalog",
        element: <>decksCatalogPage </>,
      },
      {
        path: "stores",
        element: <StorePage />,
      },
      {
        path: "help",
        element: <>HelpPage </>,
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}