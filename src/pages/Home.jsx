import { useEffect, useRef, useState } from "react";
import { TiArrowDown } from "react-icons/ti";
import { useSelector } from "react-redux";
import Listings from "../components/Listings";

const Home = () => {
  const hidden = useSelector((state) => state.menu.hidden);
  const myRef = useRef(null);
  const scrollTo = () => myRef.current.scrollIntoView({ behavior: "smooth" });
  const [bounce, setBounce] = useState(false);

  const handleBounce = () => {
    if (window.scrollY > 5) {
      setBounce(false);
    } else {
      setBounce(true);
    }
  };
  useEffect(() => {
    handleBounce();
    window.addEventListener("scroll", handleBounce);
  }, []);

  return (
    <div className="w-screen min-h-screen">
      <div className="w-full h-full">
        <div className="w-full h-screen bg-main_bg bg-center bg-cover">
          <div className="w-full h-full flex flex-col items-start justify-center p-5 text-white bg-gray-400/30">
            <div className="w-full h-full flex flex-col justify-center space-y-3">
              <h1 className="text-6xl font-semibold">
                Find your perfect home with husly
              </h1>
              <p className="font-medium">
                With over 20 years of experience, we at Husly are pioneers in
                the real estate business. We believe there's a perfect home for
                everybody, no matter the budget. That's why we always find the
                best homes for your budget.
              </p>
            </div>
            <span
              className={`${
                !hidden && "opacity-0"
              } transition-opacity animate-bounce ${!bounce && "animate-none"}`}
              onClick={scrollTo}
            >
              <TiArrowDown size={50} />
            </span>
          </div>
        </div>
        <div ref={myRef} className="w-full min-h-screen py-16">
          <Listings />
        </div>
      </div>
    </div>
  );
};

export default Home;
