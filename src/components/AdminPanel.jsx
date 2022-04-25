import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiReq from "../api/apiReq";
import AdminListing from "./AdminListing";
const AdminPanel = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const response = await apiReq.get("/propertys");
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="w-full h-full bg-gray-800 ">
      <div className="w-full h-full ">
        <div className="w-full h-full flex flex-col items-center justify-center lg:hidden">
          <h1 className="text-5xl text-orange-500 font-medium font-mono">
            Wooops!!!
          </h1>
          <h3 className="text-white font-bold">
            Your screen is to small for this feature.
          </h3>
        </div>
        <div className="w-full h-full hidden lg:block ">
          <div className="w-full h-full">
            <div className="w-full h-14 flex items-center justify-start px-5">
              <span
                className="text-2xl text-white cursor-pointer"
                onClick={() =>
                  window.localStorage.clear() || window.location.reload()
                }
              >
                Logout
              </span>
            </div>
            <div className="w-full  h-full bg-white px-5 py-2">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-3xl font-medium ">Current Propertys</h1>
                <button
                  onClick={() => navigate("/adminAdd")}
                  className="bg-orange-500 px-2 py-1 rounded cursor-pointer text-white font-medium hover:bg-orange-600"
                >
                  + Add a property
                </button>
              </div>
              <div className="w-full h-full py-10 flex items-center flex-wrap justify-evenly">
                {data?.map((item) => (
                  <AdminListing key={item._id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
