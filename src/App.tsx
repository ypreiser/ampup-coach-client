import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout/Layout"
// import ChallengesPage from "./pages/ChallengesPage"
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
        element: <>ChallengesPage </>,
      },
      {
        path: "teams",
        element: <>TeamsPage </>,
      },
      {
        path: "decks",
        element: <>DecksPage </>,
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