import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { pickData } from "../redux/Slices/dataSlice";

const ListingCard = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div
      onClick={() =>
        navigate(`/project/${item.street}`) || dispatch(pickData(item))
      }
      className="w-full h-[440px] "
    >
      <div className="w-full h-full relative">
        <div
          className=" w-full h-1/2 bg-center bg-cover rounded-xl"
          style={{
            backgroundImage: `url("${item?.splash_image}")`,
          }}
        />
        <div className="w-11/12 bg-white h-1/2 absolute bottom-10 mx-auto  inset-x-0 rounded-lg ">
          <div className="w-full h-full flex flex-col items-start  justify-between p-4 ">
            <div className="w-full flex items-start justify-between">
              <span className="bg-orange-600 px-2 rounded text-white py-1">
                {item?.sale ? "For Sale" : "For Rent"}
              </span>
              <span>{item?.category}</span>
            </div>
            <span className="font-bold">
              {item.price}
              <span className="font-normal">{item.sale ? "" : "/month"}</span>
            </span>
            <div className="flex w-full items-center justify-center  space-x-5 font-bold">
              <div className="flex items-center justify-center space-x-2 flex-1">
                <img
                  width={15}
                  src="https://uploads-ssl.webflow.com/5f9bf5434935849be0a09d61/5fa30d048d013c11795eecca_bed-double%20(2).svg"
                  alt="beds"
                />
                <span>{item?.properties.map((props) => props?.bedrooms)}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 flex-1">
                <img
                  width={15}
                  src="https://uploads-ssl.webflow.com/5f9bf5434935849be0a09d61/5fa30d04b4d0b4089cb2a8f2_bath%20(2).svg"
                  alt="baths"
                />
                <span>{item?.properties.map((props) => props?.bathrooms)}</span>
              </div>
              <div className="flex items-center justify-center flex-1">
                <span>{item?.properties.map((props) => props?.area)}</span>
              </div>
            </div>
            <div className="flex flex-col w-full justify-end">
              <span className="font-bold">{item.street}</span>
              <span>{item.addres}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
