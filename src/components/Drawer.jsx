import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Drawer = () => {
  const hidden = useSelector((state) => state.menu.hidden);
  const menu = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About Us" },
    { path: "/listings", name: "Listings" },
    { path: "/contact", name: "Contact" },
  ];
  return (
    <div
      className={`absolute w-screen h-screen bg-gray-800 top-0 transition-transfrm duration-500 z-20 ${
        hidden ? "translate-x-full" : "translate-x-0"
      }`}
    >
      <div className="w-full h-full flex flex-col items-center justify-start py-20 text-xl text-white space-y-10 font-light">
        {menu.map((i) => (
          <Link to={i.path} key={i.name}>
            {i.name}{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Drawer;
