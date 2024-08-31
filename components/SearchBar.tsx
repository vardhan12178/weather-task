import React, { useState } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { fetchWeather } from '@/redux/slices/weatherSlice';
import Autosuggest from 'react-autosuggest';
import mockData from '@/public/mockData.json';

interface Locality {
  city: string;
  locality: string;
  localityId: string;
}

const suggestions = mockData.map((data: Locality) => data.locality);

const getSuggestions = (value: string) => {
  const inputValue = value.toLowerCase();
  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(inputValue)
  );
  return filteredSuggestions.slice(0, 6); 
};

const getSuggestionValue = (suggestion: string) => suggestion;

const renderSuggestion = (suggestion: string) => (
  <div className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-black transition duration-200 ease-in-out rounded-md">
    {suggestion}
  </div>
);

const SearchBar: React.FC = () => {
  const [value, setValue] = useState('');
  const [suggestionsList, setSuggestionsList] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  const onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    setSuggestionsList(getSuggestions(value));
  };

  const onSuggestionSelected = (
    event: React.SyntheticEvent,
    { suggestionValue }: { suggestionValue: string }
  ) => {
    setValue(suggestionValue);
    dispatch(fetchWeather(suggestionValue));
    setValue('');
  };

  const inputProps = {
    placeholder: 'Search for locality',
    value,
    onChange: (event: React.ChangeEvent<HTMLInputElement>, { newValue }: { newValue: string }) => {
      setValue(newValue);
    },
  };

  return (
    <div className="relative flex flex-col items-center w-full max-w-md sm:max-w-lg mx-auto mt-6">
      <div className="relative w-full bg-white dark:bg-gray-800 rounded-full shadow-md">
        <Autosuggest
          suggestions={suggestionsList}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          onSuggestionSelected={onSuggestionSelected}
          highlightFirstSuggestion={true}
          shouldRenderSuggestions={() => true}
          renderInputComponent={(inputProps: React.InputHTMLAttributes<HTMLInputElement>) => (
            <input
              {...inputProps}
              className="w-full text-black dark:text-white bg-white dark:bg-gray-800 py-2 px-4 rounded-full border border-gray-300 dark:border-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition duration-200 ease-in-out"
            />
          )}
        />
      </div>
      <button
        onClick={() => dispatch(fetchWeather(value))}
        className="w-1/2 mt-2 bg-blue-600 text-white dark:bg-indigo-500 dark:text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 dark:hover:bg-indigo-600 transition duration-200 ease-in-out"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
