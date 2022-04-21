import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { name: "Home", path: "/home" },
    { name: "About Us", path: "/aboutus" },
    { name: "Listings", path: "/listings" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <div className="w-screen h-screen bg-gray-800">
      <div className="w-full h-full px-5 py-20 flex flex-col items-center justify-between">
        <div className="flex flex-col items-center ">
          <img
            width={90}
            src="https://uploads-ssl.webflow.com/5f9bf5434935849be0a09d61/5f9c0490368065ddaa5388bb_Husly%20Logo%20white.svg"
            alt="logo"
          />
          <span className="text-gray-500">© Husly</span>
        </div>
        <p className="text-gray-500 text-center ">
          With over 20 years of experience, we at Husly are pioneers in the real
          estate business. We believe there's a perfect home for everybody, no
          matter the budget. That's why we always find the best homes for your
          budget.
        </p>
        <div className="flex flex-col items-center space-y-1 text-gray-500">
          <h4 className="text-white text-xl">Useful Links</h4>
          {links.map((link) => (
            <Link to={link.path}>{link.name}</Link>
          ))}
        </div>
        <div className="flex flex-col items-center space-y-1 text-gray-500">
          <h4 className="text-white text-xl">Location</h4>
          <span>3880 Braxton Street</span>
          <span>Chicago, Il 60606</span>
          <span>United States</span>
        </div>
        <div className="flex flex-col items-center space-y-1 text-gray-500">
          <h4 className="text-white text-xl">Contact Us</h4>
          <span>815-515-2350</span>
          <span>company@domain.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
