import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    function handleClick(){
        localStorage.setItem("token", "okokok");
        navigate("/dashboard");
    }
return (
    <div>
        <h2>login</h2>
        <button  onClick={handleClick}>
            Set Token
        </button>
    </div>
)
}
