import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { BiBuilding, BiEnvelope, BiMobile } from "react-icons/bi";
import Footer from "../components/Footer";
import apiReq from "../api/apiReq";
const Contact = () => {
  const [data, setData] = useState({
    email: "",
    phone: "",
    name: "",
    message: "",
  });
  const [error, setError] = useState("");
  const sendEmail = () => {
    try {
      apiReq.post("/email", data);
      window.location.reload();
    } catch {
      setError(true);
    }
  };
  return (
    <>
      <Navbar />
      <div className="w-screen min-h-screen">
        <div className="w-full h-full">
          <div
            style={{
              backgroundImage: `url("https://assets.website-files.com/5f9bf5434935849be0a09d61/5f9ff65f78a425f8f207d9fb_rodion-kutsaev-41022(1).jpg")`,
            }}
            className="w-full h-32 px-5 pt-20 text-white bg-center bg-cover border-b-4 border-orange-500"
          >
            <span className="font-bold text-2xl">Contact us</span>
          </div>
          <div className="w-full h-full px-5 py-20 flex flex-col items-start space-y-14 lg:flex-row lg:items-center lg:justify-around">
            <div className="">
              <div className="w-full h-full flex flex-col items-start lg:items-center ">
                <h1 className="text-3xl font-bold">Get in touch</h1>
                <p className="text-center">
                  Got a question about one of our listings, want to sell your
                  house or just a question? Contact us and we'll get back to you
                  as soon as possible.
                </p>
              </div>
              <div className="lg:flex lg:flex-col items-start max-w-xs mx-auto justify-center">
                <div className=" h-full flex flex-col items-start space-y-8 ">
                  <div className="flex items-start space-x-3 text-orange-500">
                    <BiBuilding size={30} />
                    <span className="max-w-xs text-black">
                      3880 Braxton Street Chichago, Il 60606 United States
                    </span>
                  </div>
                </div>
                <div className="flex items-start space-x-3 text-orange-500">
                  <BiEnvelope size={30} />
                  <span className="text-black">company@domain.com</span>
                </div>
                <div className="flex items-start space-x-3 text-orange-500">
                  <BiMobile size={30} />
                  <span className="text-black">815-323-2651-421</span>
                </div>
              </div>
            </div>
            <div className="w-full h-full space-y-5 lg:flex  lg:flex-col items-center">
              <div className="w-full h-full flex flex-col items-start space-y-8 max-w-md  ">
                <input
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full border-b-2 border-orange-500 py-2 outline-none"
                />
                <input
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  placeholder="Enter your email"
                  className="w-full border-b-2 border-orange-500 py-2 outline-none"
                />
                <input
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                  placeholder="Enter your phone number"
                  className="w-full border-b-2 border-orange-500 py-2 outline-none"
                />
                <input
                  onChange={(e) =>
                    setData({ ...data, message: e.target.value })
                  }
                  placeholder="How can we help you?"
                  className="w-full border-b-2 border-orange-500 py-2 outline-none"
                />
              </div>
              <div className="w-full h-full flex items-start lg:justify-center">
                <button
                  onClick={sendEmail}
                  className="bg-orange-600 text-white font-medium px-5 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;
