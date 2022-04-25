import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import FileBase64 from "react-file-base64";
import apiReq from "../api/apiReq";
const AdminAdd = () => {
  const [data, setData] = useState({
    category: "",
    price: "",
    sale: null,
    street: "",
    addres: "",
    desc: "",
    splash_image: "",
  });

  const uploadProperty = async () => {
    try {
      const response = await apiReq.post(`/propertys/upload`, data);
      window.location.reload();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full">
        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-800 lg:hidden">
          <h1 className="text-5xl text-orange-500 font-medium font-mono">
            Wooops!!!
          </h1>
          <h3 className="text-white font-bold">
            Your screen is to small for this feature.
          </h3>
        </div>
        <div className="hidden lg:block">
          <div className="w-full h-14 px-5 bg-gray-800">
            <div
              onClick={() => navigate(-1)}
              className=" h-full w-fit cursor-pointer flex items-center justify-start text-2xl space-x-2 text-white"
            >
              <RiArrowGoBackFill />
              <span>Back</span>
            </div>
          </div>
          <div className="w-full h-full">
            <div className="w-full h-full p-5 flex flex-col items-center space-y-10">
              <h1 className="text-3xl font-medium">Add a new property</h1>
              <div className="w-full h-full flex flex-col items-center space-y-6">
                <input
                  onChange={(e) =>
                    setData({ ...data, category: e.target.value })
                  }
                  placeholder="Enter a categorty"
                  className="outline-none border-b-2 border-orange-500 text-orange-500 py-1 w-1/3"
                />
                <input
                  onChange={(e) => setData({ ...data, price: e.target.value })}
                  placeholder="Enter price"
                  className="outline-none border-b-2 border-orange-500 text-orange-500 py-1 w-1/3"
                />
                <input
                  onChange={(e) =>
                    setData({
                      ...data,
                      sale: e.target.value === "Sale" ? true : false,
                    })
                  }
                  placeholder="Enter purpose"
                  className="outline-none border-b-2 border-orange-500 text-orange-500 py-1 w-1/3"
                />
                <input
                  onChange={(e) => setData({ ...data, street: e.target.value })}
                  placeholder="Enter street"
                  className="outline-none border-b-2 border-orange-500 text-orange-500 py-1 w-1/3"
                />
                <input
                  onChange={(e) => setData({ ...data, addres: e.target.value })}
                  placeholder="Enter addres"
                  className="outline-none border-b-2 border-orange-500 text-orange-500 py-1 w-1/3"
                />
                <input
                  onChange={(e) => setData({ ...data, desc: e.target.value })}
                  placeholder="Add description"
                  className="outline-none border-b-2 border-orange-500 text-orange-500 py-1 w-1/3"
                />
                <div className="w-1/3 flex items-center justify-center cursor-pointer h-20 border-dashed border border-orange-500 mx-auto bg-gray-100 relative">
                  <FileBase64
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setData({ ...data, splash_image: base64 })
                    }
                  />
                </div>
                <button
                  onClick={uploadProperty}
                  className="bg-orange-500 rounded-lg text-white font-medium cursor-pointer w-40 px-5 py-2 self-center"
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAdd;
