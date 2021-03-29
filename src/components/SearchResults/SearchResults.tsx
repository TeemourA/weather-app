import React from 'react';
import { Loading } from '../index';

interface SearchResultsProps {
  searchResults: any[];
  isSearching: boolean;
  notFound: boolean;
  searchedCity: string;
  getCurrentData: (cityID: number) => void;
  getEightDayData: (coords: { lat: number; lon: number }, cityData: any) => void;
}

const SearchResults: React.FC<SearchResultsProps> = props => {
  const {
    searchResults,
    isSearching,
    notFound,
    getCurrentData,
    getEightDayData,
    searchedCity,
  } = props;

  return (
    <div className="SearchResults">
      {searchResults.length > 0 ? (
        searchResults.map(city => (
          <div className="item" key={city.id}>
            <h4 className="item__title">{`${city.name}, ${city.sys.country}`}</h4>
            <div className="item__buttons">
              <i
                onClick={() => getCurrentData(city.id)}
                className="item__button_current item__button"
              >
                Current
              </i>
              <i
                onClick={() => getEightDayData(city.coord, city)}
                className="item__button_eightday item__button"
              >
                8-day
              </i>
            </div>
          </div>
        ))
      ) : !searchedCity ? (
          <p>Search results</p>
      ) : isSearching ? (
        <Loading className="loading_small loading_searchResults" />
      ) : notFound && searchedCity ? (
        <p>We haven't found city "{searchedCity}", please specify your query</p>
      ) : null}
    </div>
  );
};

export { SearchResults };
