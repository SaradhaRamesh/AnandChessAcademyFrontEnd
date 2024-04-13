import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const TourContext = createContext();

export const useTour = () => useContext(TourContext);

export const TourProvider = ({ children }) => {
  const [tourTitle, setTourTitle] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('./Data.json');
        setTourTitle(response.data.title);
      } catch (error) {
        console.error('Error fetching tour title:', error.message);
        setTourTitle('Error fetching title');
      }
    };

    fetchData();
  }, []);

  return (
    <TourContext.Provider value={{ tourTitle }}>
      {children}
    </TourContext.Provider>
  );
};
