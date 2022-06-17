import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Home = lazy(() => import("pages/Home/Home"));
const VibeCheck = lazy(() => import("pages/VibeCheck/VibeCheck"));
const Results = lazy(() => import("pages/Results/Results"));
const Matches = lazy(() => import("pages/Matches/Matches"));
const Chat = lazy(() => import("pages/Matches/Chat/Chat"));

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/vibecheck",
    exact: true,
    component: VibeCheck
  },
  {
    path: "/myresults",
    exact: true,
    component: Results
  },
  {
    path: "/matches",
    exact: true,
    component: Matches
  },
  {
    path: "/matches/:id",
    exact: true,
    component: Chat
  },
  {
    path: "*",
    exact: true,
    component: () => <Navigate to="/" />
  }
];

export default routes;
