import { useState } from "react";
import { useSelector } from "react-redux";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import { GiElectric, GiWaterDrop, GiRiver } from "react-icons/gi";
import { AiFillFire } from "react-icons/ai";
import { BiBuilding } from "react-icons/bi";
import { RiMedalLine } from "react-icons/ri";
import NotFound from "../components/NotFound";
import Footer from "../components/Footer";
import ImageShow from "../components/imageShow";
const Project = () => {
  const item = useSelector((state) => state.data.data);
  const [hidden, setHidden] = useState(true);
  console.log(item.length);
  return (
    <>
      {item._id?.length > 0 ? (
        <>
          <Navbar />
          <div
            className={`w-screen overflow-hidden  ${
              !hidden ? "max-h-screen" : "min-h-screen"
            }`}
          >
            {!hidden && (
              <ImageShow
                hidden={hidden}
                setHidden={setHidden}
                images={item.images}
              />
            )}
            <div className="w-full h-full">
              <div className="w-full h-40 bg-gray-800 py-24 px-5 flex flex-col text-white">
                <span className="font-bold text-3xl">{item.street}</span>
                <span>{item.addres}</span>
              </div>
              <div className="w-full flex items-center justify-center p-5">
                <div className="w-full h-full flex items-center justify-between border-2 border-orange-500 p-2 rounded-3xl max-w-md">
                  <span className="bg-orange-600 text-white font-bold px-2 py-1 rounded-lg">
                    {item.sale ? "For Sale" : " For Rent"}
                  </span>
                  <span className="font-bold text-lg">{item.price}</span>
                </div>
              </div>
              <div className="w-full h-full lg:flex items-center justify-center">
                <div className="w-full mt-10 max-w-lg">
                  <Carousel
                    images={item.images}
                    setHidden={setHidden}
                    hidden={hidden}
                  />
                </div>
                <div className="w-full h-full py-10 px-20 flex flex-wrap lg:w-1/4 ">
                  <div className="flex-[50%] flex flex-col items-start">
                    <span className="text-gray-500">Bedrooms</span>
                    <div className="flex items-center space-x-3 font-bold text-xl">
                      <img
                        width={20}
                        src="https://assets.website-files.com/5f9bf5434935849be0a09d61/5fa30d048d013c11795eecca_bed-double%20(2).svg"
                        alt="bed"
                      />
                      <span>{item.properties[0].bedrooms}</span>
                    </div>
                  </div>
                  <div className="flex-[50%] flex flex-col items-end">
                    <span className="text-gray-500">Bathrooms</span>
                    <div className="flex items-center space-x-3 font-bold text-xl">
                      <img
                        width={20}
                        src="https://assets.website-files.com/5f9bf5434935849be0a09d61/5fa30d04b4d0b4089cb2a8f2_bath%20(2).svg"
                        alt="bath"
                      />
                      <span>{item.properties[2].bathrooms}</span>
                    </div>
                  </div>
                  <div className="flex-[50%] flex-col flex mt-10 ">
                    <span className="text-gray-500">Area</span>
                    <span className="font-bold text-xl">
                      {item.properties[3].area}
                    </span>
                  </div>
                  <div className="flex-[50%] mt-10 flex flex-col items-end">
                    <span className="text-gray-500">Bathrooms</span>
                    <div className="flex items-center space-x-3 font-bold text-xl">
                      <img
                        width={20}
                        src="https://assets.website-files.com/5f9bf5434935849be0a09d61/5fa30d04569acfc31b999e36_car%20(1).svg"
                        alt="park"
                      />
                      <span>{item.properties[1].parking}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:flex items-start mt-10">
                <div className="w-full h-full px-5 space-y-3 py-5 ">
                  <h1 className="text-3xl font-bold text-center">
                    About this property
                  </h1>
                  <p className="text-gray-500  text-center">
                    {item.desc}
                    {item.desc}
                    {item.desc}
                    {item.desc}
                  </p>
                </div>
                <div className="w-full h-full py-10 px-5">
                  <div className="w-full h-full bg-gray-900 flex flex-col space-y-3 p-6 rounded">
                    <h1 className="text-white text-xl">Features</h1>
                    <div className="w-full  bg-gray-300 flex flex-col space-y-3 p-5">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Electricity</span>
                        <GiElectric className="text-orange-600" size={25} />
                      </div>
                      <span className="font-bold">
                        {item.features[0].electricty ? "Yes" : "No"}
                      </span>
                    </div>
                    <div className="w-full  bg-gray-300 flex flex-col space-y-3 p-5">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Gas</span>
                        <AiFillFire className="text-orange-600" size={20} />
                      </div>
                      <span className="font-bold">
                        {item.features[1].gas ? "Yes" : "No"}
                      </span>
                    </div>
                    <div className="w-full  bg-gray-300 flex flex-col space-y-3 p-5">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">City Water</span>
                        <GiWaterDrop className="text-orange-600" size={20} />
                      </div>
                      <span className="font-bold">
                        {item.features[2].city_water ? "Yes" : "No"}
                      </span>
                    </div>
                    <div className="w-full  bg-gray-300 flex flex-col space-y-3 p-5">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Sewerage</span>
                        <GiRiver className="text-orange-600" size={20} />
                      </div>
                      <span className="font-bold">
                        {item.features[3].sewrage ? "Yes" : "No"}
                      </span>
                    </div>
                    <div className="w-full  bg-gray-300 flex flex-col space-y-3 p-5">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Built in</span>
                        <BiBuilding className="text-orange-600" size={20} />
                      </div>
                      <span className="font-bold">
                        {item.features[4].construction}
                      </span>
                    </div>
                    <div className="w-full  bg-gray-300 flex flex-col space-y-3 p-5">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Energy Rating</span>
                        <RiMedalLine className="text-orange-600" size={20} />
                      </div>
                      <span className="font-bold">
                        {item.features[5].energy_rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <Footer />
            </div>
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Project;
