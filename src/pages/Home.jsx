import React, { useEffect, useState } from 'react';
import axiosInstance from '../services/axiosInstance';

const Home = () => {
  const [serverData, setServerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await axiosInstance.get('/');
        setServerData(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchServerData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1 className='text-4xl font-bold text-violet-700 mb-4'>Welcome to Home!</h1>
      {serverData && (
        <div>
          <h2 className='text-lg text-gray-600'>Your Data:</h2>
          <p>{serverData.name}</p>
          <p>{serverData.email}</p>
          {/* Render other data from the server */}
        </div>
      )}
    </div>
  );
};

export default Home;