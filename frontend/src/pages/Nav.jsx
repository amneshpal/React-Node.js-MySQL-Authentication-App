import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Nav() {
 const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        <Link to="/" className="text-xl font-bold">MyApp</Link>

        <div className="space-x-4">
          {token ? (
            <>
              <Link to="/" className="hover:underline">Home</Link>
              <button onClick={handleLogout} className="hover:underline">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:underline">Login</Link>
              <Link to="/register" className="hover:underline">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav