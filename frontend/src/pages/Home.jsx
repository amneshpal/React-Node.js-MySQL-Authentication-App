import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3000/auth/home', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status !== 201) {
        navigate('/login');
      }

      console.log(response.data);
    } catch (err) {
      console.error('Error fetching user:', err.message);
      navigate('/login');
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="text-3xl text-blue-500">Home</div>
  );
}

export default Home;
