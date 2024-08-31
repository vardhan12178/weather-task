"use client";

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTemperatureHigh,
  faTint,
  faWind,
  faCompass,
  faCloudRain,
  faWater,
} from '@fortawesome/free-solid-svg-icons';

const WeatherDisplay: React.FC = () => {
  const {
    temperature,
    humidity,
    windSpeed,
    windDirection,
    rainIntensity,
    rainAccumulation,
    status,
    errorMessage,
  } = useSelector((state: RootState) => state.weather);

  return (
    <div className="m-10 mb-20 p-6 max-w-lg mx-auto bg-gradient-to-r from-blue-500 to-blue-300 dark:from-gray-800 dark:to-gray-600 text-white shadow-xl rounded-xl md:max-w-md">
      {status === 'loading' && <p className="text-white text-xl animate-pulse">Loading...</p>}
      {status === 'failed' && (
        <div className="text-red-200">
          <p>Failed to fetch weather data.</p>
          {errorMessage && <p>Error: {errorMessage}</p>}
        </div>
      )}
      {status === 'succeeded' && temperature !== null ? (
        <div className="text-3xl">
          <div className="flex flex-col items-center mb-6">
            <FontAwesomeIcon icon={faTemperatureHigh} className="text-5xl text-yellow-400 mb-2" />
            <p className="font-bold">Temperature</p>
            <p>{temperature}°C</p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-lg md:text-xl">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faTint} className="text-blue-200 mb-2" />
              <p>Humidity</p>
              <p>{humidity}%</p>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faWind} className="text-teal-200 mb-2" />
              <p>Wind Speed</p>
              <p>{windSpeed} m/s</p>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faCompass} className="text-green-200 mb-2" />
              <p>Wind Direction</p>
              <p>{windDirection}°</p>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faCloudRain} className="text-indigo-200 mb-2" />
              <p>Rain Intensity</p>
              <p>{rainIntensity} mm/hr</p>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faWater} className="text-blue-300 mb-2" />
              <p>Rain Accumulation</p>
              <p>{rainAccumulation} mm</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-200 text-xl">Select a locality to view weather details.</p>
      )}
    </div>
  );
};

export default WeatherDisplay;
