import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
const navigate = useNavigate();

const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
};

return (
    <div>
        <h2>ddashboard</h2>
        <button onClick={handleLogout}>
            Logout
        </button>
    </div>
);
}
