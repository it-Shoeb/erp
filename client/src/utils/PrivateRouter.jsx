import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.authenticate);
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default PrivateRouter;
