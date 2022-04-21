import Listings from "../pages/Listings";
import About from "../pages/About";
import Home from "../pages/Home";
const routes = [
  { path: "/listings", element: Listings },
  { path: "/about", element: About },
  { path: "/", element: Home },
];
export default routes;
