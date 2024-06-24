import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import SignUp from "../components/SignUp/SignUp";
import Login from "../components/Login/Login";
import Privacy from "../components/PrivacyPolicy/Privacy";
import Terms from "../components/Terms/Terms";
import Layout from "../Layout/Layout";
import Resources from "../components/Resources/Resources";
import AddResource from "../components/AddResource/AddResource";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/policy",
        element: <Privacy />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
    ],
  },
  {
    path: "/resource",
    element: (
      <PrivateRoutes>
        <Layout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/resource/all",

        element: <Resources />,
      },
      {
        path: "/resource/add",
        element: <AddResource />,
      },
    ],
  },
]);
