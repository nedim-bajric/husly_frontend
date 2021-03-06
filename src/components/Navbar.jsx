import { useDispatch, useSelector } from "react-redux";
import { handleMenu } from "../redux/Slices/menuSlice";
import Drawer from "./Drawer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
  const hidden = useSelector((state) => state.menu.hidden);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);
  const menu = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About Us" },
    { path: "/listings", name: "Listings" },
    { path: "/contact", name: "Contact" },
  ];
  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();

    window.addEventListener("scroll", changeBackground);
  }, []);
  return (
    <div
      className={`w-screen h-16 z-50 border-b border-gray-500 fixed top-0 duration-500 transition-colors ease-in ${
        navbar && "bg-gray-800 border-b-0"
      }`}
    >
      <div className="w-full h-full flex items-center justify-between px-5 ">
        <img
          onClick={() => navigate("/")}
          width={90}
          src="https://uploads-ssl.webflow.com/5f9bf5434935849be0a09d61/5f9c0490368065ddaa5388bb_Husly%20Logo%20white.svg"
          alt="logo"
        />
        <div className="h-full flex flex-col justify-center space-y-2 z-50 ">
          <div className="hidden lg:flex items-center space-x-3 text-white font-semibold">
            {menu.map((i) => (
              <Link to={i.path} key={i.name}>
                {i.name}{" "}
              </Link>
            ))}
          </div>
          <div
            className={` lg:hidden w-8 h-0.5 bg-white transition-transform duration-300 ${
              !hidden && "rotate-45 translate-y-0.5 "
            }`}
            onClick={() => dispatch(handleMenu())}
          />
          <div
            className={`lg:hidden w-8 h-0.5 bg-white transition-transform duration-300 ${
              !hidden && "-rotate-45 -translate-y-2"
            }`}
            onClick={() => dispatch(handleMenu())}
          />
        </div>
      </div>
      <Drawer />
    </div>
  );
};

export default Navbar;
