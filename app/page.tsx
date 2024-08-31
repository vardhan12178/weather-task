"use client";

import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import WeatherDisplay from '@/components/WeatherDisplay';
import Footer from '@/components/Footer';

export default function Home() {
  const [locality, setLocality] = useState('');

  const handleSelect = (selectedLocality: string) => {
    setLocality(selectedLocality);
  };

  return (
    <Provider store={store}>
      <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 ">
        <div>
          <Header />
          <SearchBar />
          <WeatherDisplay />
          <Footer/>
        </div>
      </main>
    </Provider>
  );
}
