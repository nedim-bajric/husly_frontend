import React from "react";
import Footer from "../components/Footer";
import Listings from "../components/Listings";
import Navbar from "../components/Navbar";
import Team from "../components/Team";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="w-screen min-h-screen">
        <div className="w-full h-full">
          <div
            style={{
              backgroundImage: `url("https://assets.website-files.com/5f9bf5434935849be0a09d61/5f9ff65f78a425f8f207d9fb_rodion-kutsaev-41022(1).jpg")`,
            }}
            className="w-full h-32 px-5 pt-20 text-white bg-center bg-cover border-b-4 border-orange-500"
          >
            <span className="font-bold text-2xl">About Us</span>
          </div>
          <div className="w-full h-full">
            <div className="w-full h-full p-5 flex flex-col items-center space-y-5">
              <h1 className="text-3xl font-bold">Our Story</h1>
              <p className="text-center font-medium text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
                sed id semper risus in hendrerit gravida rutrum. Bibendum neque
                egestas congue quisque egestas diam in arcu. Consequat ac felis
                donec et odio pellentesque. Mi quis hendrerit dolor magna eget
                est. Pellentesque elit eget gravida cum sociis natoque
                penatibus. In hac habitasse platea dictumst quisque sagittis.
                Interdum velit euismod in pellentesque massa placerat duis
                ultricies. Posuere sollicitudin aliquam ultrices sagittis orci
                a. Morbi tincidunt augue interdum velit euismod in. Tellus in
                metus vulputate eu. Enim diam vulputate ut pharetra sit amet.
                Erat imperdiet sed euismod nisi porta lorem mollis aliquam.
                Adipiscing elit duis tristique sollicitudin nibh sit amet
                commodo.
              </p>
              <img
                src="https://assets.website-files.com/5f9bf5434935849be0a09d61/5fa008705c451dd22552a42f_mediensturmer-aWf7mjwwJJo-unsplash%20(1)2-p-800.jpeg"
                alt="aboyut"
                className="border-b-8 border-r-8 border-orange-600 w-10/12"
              />
            </div>
          </div>
          <div className="w-full h-full">
            <div className="w-full h-full p-5 flex flex-col items-center space-y-5">
              <h1 className="text-3xl font-bold max-w-xs text-center">
                {" "}
                Why we founded Husly
              </h1>
              <p className="text-center font-medium text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
                sed id semper risus in hendrerit gravida rutrum. Bibendum neque
                egestas congue quisque egestas diam in arcu. Consequat ac felis
                donec et odio pellentesque. Mi quis hendrerit dolor magna eget
                est. Pellentesque elit eget gravida cum sociis natoque
                penatibus. In hac habitasse platea dictumst quisque sagittis.
                Interdum velit euismod in pellentesque massa placerat duis
                ultricies. Posuere sollicitudin aliquam ultrices sagittis orci
                a. Morbi tincidunt augue interdum velit euismod in. Tellus in
                metus vulputate eu. Enim diam vulputate ut pharetra sit amet.
                Erat imperdiet sed euismod nisi porta lorem mollis aliquam.
                Adipiscing elit duis tristique sollicitudin nibh sit amet
                commodo.
              </p>
              <img
                src="https://assets.website-files.com/5f9bf5434935849be0a09d61/5fa00abb5c685c4beae13b86_building%20from%20bottom%202-p-800.jpeg"
                alt="aboyut"
                className="border-b-8 border-l-8 border-orange-600 w-10/12"
              />
            </div>
          </div>
          <Team />
          <Listings />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default About;
