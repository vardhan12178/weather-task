import * as React from 'react';
import Autosuggest from 'react-autosuggest';

declare module 'react-autosuggest' {
    export interface AutosuggestProps<T> {
        suggestions: T[];
        onSuggestionsFetchRequested: (request: { value: string }) => void;
        onSuggestionSelected: (event: React.SyntheticEvent, { suggestionValue: string }) => void;
        getSuggestionValue: (suggestion: T) => string;
        renderSuggestion: (suggestion: T) => JSX.Element;
        inputProps: {
            placeholder: string;
            value: string;
            onChange: (event: React.ChangeEvent<HTMLInputElement>, { newValue }: { newValue: string }) => void;
        };
        highlightFirstSuggestion?: boolean;
        shouldRenderSuggestions?: (value: string) => boolean;
        renderInputComponent?: (inputProps: React.InputHTMLAttributes<HTMLInputElement>) => JSX.Element;
    }

    const Autosuggest: React.FC<AutosuggestProps<any>>;

    export default Autosuggest;
}
