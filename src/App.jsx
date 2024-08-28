import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from "react-router-dom";
import Layout from "./components/Layout";
import Calculator from "./pages/Calculator";
import Home from "./pages/Home";
import RandomVerses from "./pages/RandomVerses";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "verses",
        element: <RandomVerses />,
      },
      {
        path: "calculator",
        element: <Calculator />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
