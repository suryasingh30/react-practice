import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
    const check = localStorage.getItem("token");

    return check ? children : <Navigate to="/login" />;
};

export default Private;
