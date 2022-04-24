import { useState } from "react";

const ImageShow = ({ hidden, setHidden, images }) => {
  const [image, setImage] = useState(0);
  console.log(images);
  return (
    <div className="w-screen h-screen absolute inset-0 z-50 bg-black/80 overflow-hidden">
      <div className="w-full h-full flex flex-col justify-between">
        <div className="w-full flex items-center justify-end p-3">
          <span
            onClick={() => setHidden(!hidden)}
            className="font-medium text-3xl text-white cursor-pointer"
          >
            X
          </span>
        </div>
        <div
          style={{ backgroundImage: `url("${images[image]}")` }}
          className="w-full h-60 bg-cover bg-center transition-all duration-500 ease-out lg:max-w-2xl lg:h-80 mx-auto"
        />
        <div className="flex w-full items-center justify-evenly pb-2 ">
          {images.map((i) => (
            <img
              className="w-20 lg:w-28 cursor-pointer"
              src={i}
              alt="i"
              onClick={() => setImage(images.indexOf(i))}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageShow;
