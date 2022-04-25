import Listings from "../pages/Listings";
import About from "../pages/About";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Project from "../pages/Project";
import Estate from "../pages/Estate";
import Member from "../pages/Member";
import Admin from "../pages/Admin";
import AdminUpdate from "../pages/AdminUpdate";
import AdminAdd from "../pages/AdminAdd";
const routes = [
  { path: "/team-member/:id", element: Member },
  { path: "/estate-categories/:id", element: Estate },
  { path: "/project/:id", element: Project },
  { path: "/adminAdd", element: AdminAdd },
  { path: "/admin/:id", element: AdminUpdate },
  { path: "/admin", element: Admin },
  { path: "/contact", element: Contact },
  { path: "/listings", element: Listings },
  { path: "/about", element: About },
  { path: "/", element: Home },
];
export default routes;
