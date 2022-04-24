import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import apiReq from "../api/apiReq";
import ListingCard from "../components/ListingCard";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
const Estate = () => {
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const cat = useSelector((state) => state.data.cat);

  const getData = async () => {
    try {
      const response = await apiReq.get("/propertys");
      setData(response.data.filter((c) => c.category === cat.title));
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(true);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <>
      {loading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <>
          <Navbar />
          <div className="w-screen h-scree">
            <div className="w-full h-full">
              <div
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 100%), url("${cat.img}")`,
                }}
                className="w-full h-32 px-5 pt-20 text-white bg-center bg-cover border-b-4 border-orange-500"
              >
                <span className="font-bold text-2xl">{cat.title}</span>
              </div>
              <div className="w-10/12 mx-auto mt-10 h-full flex items-center justify-center">
                {data.map((item) => (
                  <ListingCard item={item} />
                ))}
              </div>
              <Footer />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Estate;
