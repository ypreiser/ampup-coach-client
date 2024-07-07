import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout/Layout"
import "./App.css"
import ChallengesPage from "./Challanges/ChallengesPage"
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
        // element: <>ChallengesPage </>,
        element: <ChallengesPage />,
      },
      {
        path: "teams",
        element: <>TeamsPage </>,
      },
      {
        path: "users",
        element: <>usersPage </>,
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
        element: <>StoresPage </>,
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