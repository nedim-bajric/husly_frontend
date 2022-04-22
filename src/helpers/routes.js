import Listings from "../pages/Listings";
import About from "../pages/About";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Project from "../pages/Project";
const routes = [
  { path: "/project/:id", element: Project },
  { path: "/contact", element: Contact },
  { path: "/listings", element: Listings },
  { path: "/about", element: About },
  { path: "/", element: Home },
];
export default routes;
