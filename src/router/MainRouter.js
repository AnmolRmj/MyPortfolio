import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../component/Home";
import PageNotFound from "../component/PageNotFound";

export const MainRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />

      <Route path="/pagenotfound" element={<PageNotFound />} />
    </Route>
  )
);
