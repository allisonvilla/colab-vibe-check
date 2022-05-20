import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Home = lazy(() => import("pages/Home/Home"));
const About = lazy(() => import("pages/About/About"));

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/about",
    exact: true,
    component: About
  },
  {
    path: "*",
    exact: true,
    component: () => <Navigate to="/" />
  }
];

export default routes;
