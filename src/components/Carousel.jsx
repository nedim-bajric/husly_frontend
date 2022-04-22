import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { IoExpand } from "react-icons/io5";
const Carousel = ({ images, setHidden, hidden }) => {
  const [image, setImage] = useState(0);
  return (
    <div className="w-full h-72">
      <div className="w-full h-full flex items-center justify-center  relative">
        <div className="text-white flex items-center justify-between w-full px-5 absolute inset-y-0">
          <AiOutlineArrowLeft
            className="bg-orange-600 rounded-full p-2"
            size={40}
            onClick={() =>
              image === 0 ? setImage(images.length - 1) : setImage((c) => c - 1)
            }
          />
          <AiOutlineArrowRight
            className="bg-orange-600 rounded-full p-2"
            size={40}
            onClick={() =>
              image === images.length - 1 ? setImage(0) : setImage((c) => c + 1)
            }
          />
        </div>
        <div className="w-full h-full">
          <div
            className="w-10/12 h-full mx-auto  rounded-2xl bg-cover bg-center transition-all duration-500 ease-in"
            style={{ backgroundImage: `url(${images[image]})` }}
          >
            <span
              onClick={() => setHidden(!hidden)}
              className="absolute top-3 left-12 bg-gray-800 text-white p-2 rounded-lg text-lg"
            >
              <IoExpand />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
