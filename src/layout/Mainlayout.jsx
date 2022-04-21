import { Routes, Route } from "react-router-dom";
import NotFound from "../components/NotFound";
import routes from "../helpers/routes";

const Mainlayout = () => {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      return <Route path={prop.path} key={key} element={<prop.element />} />;
    });
  };

  const unknownRoute = () => {
    return <Route path="*" element={<NotFound />} />;
  };

  return (
    <div className="relative">
      <Routes>
        {getRoutes(routes)} {unknownRoute()}
      </Routes>
    </div>
  );
};

export default Mainlayout;
