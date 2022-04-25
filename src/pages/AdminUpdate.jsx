import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { IoExpand, IoResize } from "react-icons/io5";
import apiReq from "../api/apiReq";
import ImageShow from "../components/imageShow";
import FileBase64 from "react-file-base64";
import Loader from "../components/Loader";

const AdminUpdate = () => {
  const data = useSelector((state) => state.data.data);
  const [hidden, setHidden] = useState(true);
  const [updateData, setUpdateData] = useState({
    price: "",
    sale: null,
    splash_image: "",
  });
  const navigate = useNavigate();

  const deleteProperty = async () => {
    try {
      const response = await apiReq.delete(`/propertys/delete/${data._id}`);
      navigate(-1);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const updateProperty = async () => {
    try {
      const response = await apiReq.put(
        `/propertys/update/${data._id}`,
        updateData
      );
      navigate(-1);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={`w-full h-full   ${!hidden && "overflow-hidden"}`}>
      <div className="w-full h-full">
        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-800 lg:hidden">
          <h1 className="text-5xl text-orange-500 font-medium font-mono">
            Wooops!!!
          </h1>
          <h3 className="text-white font-bold">
            Your screen is to small for this feature.
          </h3>
        </div>
        <div className="lg:block hidden w-full h-full">
          <div className="w-full h-14 px-5 bg-gray-800">
            <div
              onClick={() => navigate(-1)}
              className=" h-full w-fit cursor-pointer flex items-center justify-start text-2xl space-x-2 text-white"
            >
              <RiArrowGoBackFill />
              <span>Back</span>
            </div>
          </div>
          {data ? (
            <div className="w-full h-full p-5  ">
              {!hidden && (
                <ImageShow
                  hidden={hidden}
                  setHidden={setHidden}
                  images={data.images}
                />
              )}
              <div className="w-full h-full flex justify-between ">
                <div className="w-1/3 h-fit pb-2 bg-gray-100 shadow-2xl rounded-lg overflow-hidden">
                  <div
                    className="w-full h-60 bg-center bg-cover p-2 rounded-b-xl"
                    style={{ backgroundImage: `url("${data.splash_image}")` }}
                  >
                    <div
                      className="bg-orange-500 rounded-2xl cursor-pointer w-fit p-2 text-white"
                      onClick={() => setHidden(!hidden)}
                    >
                      <IoExpand size={25} />
                    </div>
                  </div>
                  <div className="w-full h-fit p-2 flex flex-col space-y-5">
                    <div className="w-full flex items-start justify-between">
                      <span className="text-lg font-medium">
                        {data.category}
                      </span>
                      <div className="flex flex-col items-center ">
                        <span className="font-medium">{data.price}</span>
                        <span className="text-gray-500 font-medium">
                          {data?.sale ? "Sale" : "Rent"}
                        </span>
                      </div>
                    </div>
                    <div className="w-full h-full">
                      <div className="flex flex-col justify-center">
                        <span className="font-medium text-lg">
                          {data.addres}
                        </span>
                        <span>{data.street}</span>
                      </div>
                    </div>
                    <div className="w-full flex items-center justify-around">
                      <div className="flex flex-col items-center justify-center">
                        <img
                          width={20}
                          src="https://assets.website-files.com/5f9bf5434935849be0a09d61/5fa30d048d013c11795eecca_bed-double%20(2).svg"
                          alt="bed"
                        />
                        <span>{data.properties[0]?.bedrooms}</span>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <img
                          width={20}
                          src="https://assets.website-files.com/5f9bf5434935849be0a09d61/5fa30d04b4d0b4089cb2a8f2_bath%20(2).svg"
                          alt="bath"
                        />
                        <span>{data.properties[2]?.bathrooms}</span>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <IoResize size={20} />
                        <span className="">{data.properties[3]?.area}</span>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <img
                          width={20}
                          src="https://assets.website-files.com/5f9bf5434935849be0a09d61/5fa30d04569acfc31b999e36_car%20(1).svg"
                          alt="park"
                        />
                        <span>{data.properties[1]?.parking}</span>
                      </div>
                    </div>
                    <button
                      onClick={deleteProperty}
                      className="bg-red-600 rounded-lg text-white font-medium cursor-pointer w-40 px-5 py-2 self-center"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="w-full h-full">
                  <div className="w-full h-full flex flex-col items-center">
                    <h1 className="text-3xl font-medium">
                      Change Property Information
                    </h1>
                    <div className="w-full flex flex-col items-center justify-center py-5 space-y-5">
                      <input
                        onChange={(e) =>
                          setUpdateData({
                            ...updateData,
                            price: e.target.value,
                          })
                        }
                        placeholder="Change Price"
                        type="text"
                        className="outline-none border-b-2 border-orange-500 text-orange-500 py-1 w-1/3"
                      />
                      <input
                        onChange={(e) =>
                          setUpdateData({
                            ...updateData,
                            sale: e.target.value === "Sale" ? true : false,
                          })
                        }
                        placeholder="Change Purpose"
                        type="text"
                        className="outline-none border-b-2 border-orange-500 text-orange-500 py-1 w-1/3"
                      />
                      <div className="w-1/3 flex items-center justify-center cursor-pointer h-20 border-dashed border border-orange-500 mx-auto bg-gray-100 relative">
                        <FileBase64
                          type="file"
                          multiple={false}
                          onDone={({ base64 }) =>
                            setUpdateData({
                              ...updateData,
                              splash_image: base64,
                            })
                          }
                        />
                      </div>
                      <button
                        onClick={updateProperty}
                        className="bg-red-600 rounded-lg text-white font-medium cursor-pointer w-40 px-5 py-2 self-center"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminUpdate;
