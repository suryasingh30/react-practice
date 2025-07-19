import { Navigate } from "react-router-dom";

const Public = ({ children }) => {
    const check = localStorage.getItem("token");

    return !check ? children : <Navigate to="/dashboard" />;
};

export default Public;
