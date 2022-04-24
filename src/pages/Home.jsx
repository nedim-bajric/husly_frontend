import { useEffect, useRef, useState } from "react";
import { TiArrowDown } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Listings from "../components/Listings";
import Team from "../components/Team";
import cat from "../helpers/categories";
import { pickCat } from "../redux/Slices/dataSlice";

const Home = () => {
  const hidden = useSelector((state) => state.menu.hidden);
  const [bounce, setBounce] = useState(false);
  const myRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const scrollTo = () => myRef.current.scrollIntoView({ behavior: "smooth" });

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
    <>
      <Navbar />
      <div className="w-screen min-h-screen ">
        <div className="w-full h-full">
          <div className="w-full h-screen bg-main_bg bg-center bg-cover">
            <div className="w-full h-full flex flex-col items-start justify-center p-5 text-white bg-gray-400/30">
              <div className="w-full h-full flex flex-col justify-center space-y-3">
                <h1 className="text-6xl font-semibold sm:max-w-sm lg:max-w-xl lg:text-7xl ">
                  Find your perfect home with husly
                </h1>
                <p className="font-medium sm:max-w-sm text-gray-300 lg:max-w-lg lg:text-lg">
                  With over 20 years of experience, we at Husly are pioneers in
                  the real estate business. We believe there's a perfect home
                  for everybody, no matter the budget. That's why we always find
                  the best homes for your budget.
                </p>
              </div>
              <span
                className={`${
                  !hidden && "opacity-0"
                } transition-opacity animate-bounce ${
                  !bounce && "animate-none"
                }`}
                onClick={scrollTo}
              >
                <TiArrowDown size={50} />
              </span>
            </div>
          </div>
          <div ref={myRef} className="w-full min-h-screen py-16">
            <Listings />
          </div>
          <div className="w-full min-h-screen py-16">
            <div className="w-full h-full px-5 py-2 flex flex-col items-center space-y-8 sm:flex-row">
              <div className="w-full sm:flex sm:flex-col h-full sm:space-y-5">
                <div className="w-full h-full flex-col items-start space-y-3">
                  <h3 className="font-bold text-gray-500">ABOUT US</h3>
                  <h1 className="text-5xl font-medium sm:max-w-sm">
                    We're not your typical real estate agency
                  </h1>
                  <p className="text-gray-600 sm:max-w-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero quia animi ipsam quas tenetur, cum dolore perferendis
                    nihil possimus repellat! Repudiandae molestiae hic officiis
                    mollitia? Cumque recusandae quidem explicabo ex?
                  </p>
                </div>
                <button
                  onClick={() => navigate("/about")}
                  className="bg-orange-600 text-white font-medium text-lg px-6 py-2 rounded-md self-start"
                >
                  Learn More{" "}
                </button>
              </div>
              <img
                className="border-b-8 border-r-8 border-orange-600 w-10/12 sm:w-1/2 sm:h-[24rem]"
                src="https://assets.website-files.com/5f9bf5434935849be0a09d61/5f9c4daa5fbbac234cad8504_austin-distel-jpHw8ndwJ_Q-unsplash2%20(1)-p-800.jpeg"
                alt="about"
              />
            </div>
          </div>
          <div className="w-full min-h-screen py-16">
            <div className="w-full h-full px-5 py-2 flex flex-col items-center space-y-8">
              <div className="w-full">
                <h3 className="font-bold text-gray-500">CATEGORIES</h3>
                <h1 className="text-4xl font-medium">Search by category</h1>
              </div>
              <div className="w-full flex flex-col items-center space-y-2 sm:flex-row  sm:flex-wrap sm:justify-around sm:space-y-0">
                {cat.map((c) => (
                  <div
                    onClick={() => navigate(c.path) || dispatch(pickCat(c))}
                    style={{
                      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.7) 100%) ,url('${c.img}')`,
                    }}
                    className="w-full h-96 hover:cursor-pointer hover:scale-75 rounded-lg bg-center bg-cover flex flex-col justify-end px-6 py-10 sm:w-2/5 sm:my-2"
                  >
                    <span className="text-white uppercase font-bold text-2xl">
                      {c.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full min-h-screen py-16">
            <div className="w-full h-full px-5 py-2 flex flex-col items-center space-y-8 sm:flex-row">
              <div className="w-full h-full sm:flex sm:flex-col sm:space-y-5">
                <div className="w-full flex flex-col items-start space-y-3">
                  <h3 className="font-bold text-gray-500">WHY CHOOSE US</h3>
                  <h1 className="text-5xl font-medium sm:max-w-sm">
                    We'll find the perfect home for you
                  </h1>
                  <p className="text-gray-600 sm:max-w-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero quia animi ipsam quas tenetur, cum dolore perferendis
                    nihil possimus repellat! Repudiandae molestiae hic officiis
                    mollitia? Cumque recusandae quidem explicabo ex?
                  </p>
                </div>
                <button
                  onClick={() => navigate("/about")}
                  className="bg-orange-600 text-white font-medium text-lg px-6 py-2 rounded-md self-start"
                >
                  Learn More{" "}
                </button>
              </div>
              <img
                className="border-b-8 border-r-8 border-orange-600 w-10/12 sm:1/2 sm:h-[24rem]"
                src="https://assets.website-files.com/5f9bf5434935849be0a09d61/5f9d94a2a9647272daf9333d_collov-home-design-h-1j_s0dhcw-unsplash_3fqgx-p-800.jpeg"
                alt="about"
              />
            </div>
          </div>
          <div className="w-full min-h-screen">
            <Team />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
