import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import Footer from "../components/Footer";
const Member = () => {
  const agent = useSelector((state) => state.data.agent);
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
            <span className="font-bold text-2xl">{agent.name}</span>
          </div>
          <div className="w-full h-full lg:flex  items-center  justify-center">
            <div className="w-full h-full px-5 py-10 flex items-center lg:justify-end">
              <img src={agent.image} className="rounded-xl max-w-sm" />
            </div>
            <div className="w-full h-full flex flex-col items-start justify-around p-5 space-y-3 ">
              <h1 className="font-medium text-3xl">My contact information</h1>
              <div className="flex items-center space-x-5">
                <AiOutlineMail
                  size={30}
                  className="bg-orange-200 text-orange-400 p-1 rounded"
                />
                <span className="text-orange-400 font-medium">
                  info@company.com
                </span>
              </div>
              <div className="flex items-center space-x-5">
                <AiOutlinePhone
                  size={30}
                  className="bg-orange-200 text-orange-400 p-1 rounded"
                />
                <span className="text-orange-400 font-medium">
                  {agent.number}
                </span>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Member;
