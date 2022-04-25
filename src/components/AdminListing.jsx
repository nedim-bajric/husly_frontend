import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { pickData } from "../redux/Slices/dataSlice";

const AdminListing = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => navigate(`${item._id}`) || dispatch(pickData(item))}
      style={{ backgroundImage: `url("${item.splash_image}")` }}
      className="rounded-xl drop-shadow-xl group w-80 h-80 bg-center bg-cover mb-5 cursor-pointer hover:scale-105 transition-transform duration-300"
    >
      <div className="w-full h-full  flex-col items-center justify-center flex opacity-0 group-hover:opacity-100 group-hover:bg-black/40 transition-all duration-500  ">
        <span className="text-2xl font-medium text-white">{item.street}</span>
        <span className="text-orange-500">{item.addres}</span>
      </div>
    </div>
  );
};

export default AdminListing;
