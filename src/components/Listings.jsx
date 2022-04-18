import { useEffect, useState } from "react";
import apiReq from "../api/apiReq";
import ListingCard from "./ListingCard";
const Listings = () => {
  const cats = ["Residential", "Commercial", "Apartment", "Office Space"];
  const [currentCat, setCurrentCat] = useState("Residential");
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await apiReq.get("/propertys");
      console.log(response.data);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="w-full h-full">
      <div className="w-full h-full px-5 py-2">
        <div className="w-full flex flex-col items-start space-y-4">
          <h1 className="text-4xl font-medium max-w-xs">
            Latest Property Listings
          </h1>
          <span className="text-gray-500 text-lg">
            Our latest listings at a glance. Explore property from all sizes.
          </span>
          <button className=" text-orange-500 font-medium text-xl border-2 border-orange-500 px-6 py-2 rounded-md">
            Explore All Listing
          </button>
        </div>
        <div className="w-full flex flex-col items-center py-10 space-y-2  ">
          {cats.map((cat) => (
            <span
              onClick={() => setCurrentCat(cat)}
              key={cat}
              className={`w-full text-center border-b-2 py-1 transition-colors duration-300 ${
                currentCat === cat &&
                "border-orange-600 text-orange-600 font-semibold"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
        <div className="w-full min-h-full flex flex-col space-y-5">
          {data
            ?.filter((c) => c.category === currentCat)
            .map((item) => (
              <ListingCard item={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Listings;
