import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import React from "react";
import Userlayout from "../component/layout/UserLayout";

const PageNotFound = React.lazy(import("../component/PageNotFound"));

export const MainRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Userlayout />} />
      <Route path="/pagenotfound" element={<PageNotFound />} />
    </Route>
  )
);
