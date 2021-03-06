import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import apiReq from "../api/apiReq";
import { pickAgent } from "../redux/Slices/dataSlice";
import Loader from "./Loader";
const Team = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getAgents = async () => {
    try {
      const response = await apiReq.get("/agents");
      setAgents(response.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(true);
    }
  };
  useEffect(() => {
    getAgents();
  }, []);
  return (
    <div className="w-full h-full bg-gray-800">
      <div className="w-full h-full pt-20">
        <div className="w-full flex flex-col items-center space-y-2 ">
          <h4 className="text-gray-500 font-medium">OUR TEAM</h4>
          <h1 className="text-white font-bold text-3xl">Meet the team</h1>
        </div>
        <div className="w-full h-full flex items-center justify-center py-10">
          {loading ? (
            <Loader />
          ) : (
            <div className="w-full flex flex-col items-center space-y-5 p-5 sm:flex-row sm:flex-wrap sm:justify-around sm:space-y-0">
              {agents.map((agent) => (
                <Link
                  to={`/team-member/${agent.name}`}
                  className="w-full sm:w-2/5 sm:my-5 lg:w-1/5"
                >
                  <div
                    onClick={() => dispatch(pickAgent(agent))}
                    style={{
                      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.7) 100%) ,url('${agent.image}')`,
                    }}
                    className="w-full h-96 hover:cursor-pointer hover:scale-105 transition-transform duration-500 rounded-lg bg-center bg-cover flex flex-col justify-end px-6 py-10 drop-shadow-lg"
                  >
                    <span className="text-white uppercase font-bold text-2xl">
                      {agent.name}
                    </span>
                    <span className="text-gray-500 uppercase font-medim text-sm">
                      {agent.role}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Team;
