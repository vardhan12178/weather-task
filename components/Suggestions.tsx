import React from 'react';
import Autosuggest from 'react-autosuggest';
import mockData from '@/public/mockData.json';

interface SuggestionsProps {
  locality: string;
  onSelect: (locality: string) => void;
}

const Suggestions: React.FC<SuggestionsProps> = ({ locality, onSelect }) => {
  const filteredSuggestions = mockData
    .filter((loc) =>
      loc.locality.toLowerCase().includes(locality.toLowerCase())
    )
    .slice(0, 7);

  const getSuggestionValue = (suggestion: { locality: string }) => suggestion.locality;

  const renderSuggestion = (suggestion: { locality: string }) => (
    <div className="px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 text-black dark:text-gray-300 transition duration-200 ease-in-out">
      {suggestion.locality}
    </div>
  );

 
  const onSuggestionSelected = (
    event: React.SyntheticEvent,
    { suggestionValue }: { suggestionValue: string }
  ) => {
    onSelect(suggestionValue);
  };

  const inputProps = {
    placeholder: 'Search for locality',
    value: locality,
    onChange: (event: React.ChangeEvent<HTMLInputElement>, { newValue }: { newValue: string }) => {
    },
  };

  return (
    <div className="relative">
      <Autosuggest
        suggestions={filteredSuggestions}
        onSuggestionSelected={onSuggestionSelected}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        highlightFirstSuggestion={true}
        shouldRenderSuggestions={() => true}
      />
      <style jsx>{`
        .react-autosuggest__suggestions-container {
          max-height: 300px; /* Adjust height as needed */
          overflow-y: auto;
          border: 1px solid #ccc; /* Light border for suggestions container */
          border-radius: 0.5rem; /* Rounded corners */
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
          background-color: white; /* Ensure background is white in light mode */
        }
        .dark .react-autosuggest__suggestions-container {
          background-color: #333; /* Dark background for dark mode */
        }
      `}</style>
    </div>
  );
};

export default Suggestions;
