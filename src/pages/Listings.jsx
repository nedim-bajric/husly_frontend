import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import apiReq from "../api/apiReq";
import Loader from "../components/Loader";
import { RiArrowDropDownLine } from "react-icons/ri";
import cat from "../helpers/categories";
import ListingCard from "../components/ListingCard";
import { useNavigate } from "react-router-dom";

const Listings = () => {
  const [catHidden, setCatHidden] = useState(true);
  const [data, setData] = useState([]);
  const [cate, setCate] = useState(true);
  const [loading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  console.log(data);
  const getData = async () => {
    try {
      const response = await apiReq.get("/propertys");
      setData(response.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(true);
    }
  };
  useEffect(() => {
    getData();
  }, []);
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
            <span className="font-bold text-2xl">Listings</span>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            {loading ? (
              <Loader />
            ) : (
              <div className="w-full h-full py-12 px-5 space-y-10">
                <div className="w-full">
                  <div
                    className="w-full flex items-center justify-between "
                    onClick={() => setCatHidden(!catHidden)}
                  >
                    <span className="font-medium">Choose a category...</span>
                    <RiArrowDropDownLine size={35} />
                  </div>
                  {!catHidden && (
                    <div className="flex flex-col items-center space-y-2 py-5 shadow-xl">
                      {cat.map((c) => (
                        <span onClick={() => navigate(c.path)}>{c.title}</span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="w-full flex flex-col items-center space-y-2 text-lg ">
                  <span
                    onClick={() => setCate(true)}
                    className={`w-full text-center font-bold transition-colors duration-500 ${
                      cate && "border-b-2  border-orange-500 text-orange-500"
                    }`}
                  >
                    For Sale
                  </span>
                  <span
                    onClick={() => setCate(false)}
                    className={`w-full text-center font-bold transition-colors duration-500 ${
                      !cate && "border-b-2  border-orange-500 text-orange-500"
                    }`}
                  >
                    For Rent
                  </span>
                </div>

                <div className="w-full h-full">
                  {data
                    ?.filter((c) => c.sale === cate)
                    .map((item) => (
                      <ListingCard key={item._id} item={item} />
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Listings;
