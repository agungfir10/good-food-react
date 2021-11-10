import React from 'react';
import CityCard from './CityCard';

function CityList({ cities, title, subtitle, showSubtitle }) {
  return (
    <React.Fragment>
      <div className="row mt-3">
        <div className="col-12">
          <h3>{title}</h3>
          {showSubtitle === true && subtitle !== '' && (
            <h6 className="text-muted">Search result for keyword {subtitle}</h6>
          )}
        </div>
      </div>
      <div className="row">
        {cities === null ? (
          <div className="col">
            <p>Loading ...</p>
          </div>
        ) : (
          _renderCityList(cities)
        )}
      </div>
    </React.Fragment>
  );
}

const _renderCityList = (cities) => {
  // console.log(cities);
  console.log(typeof cities);
  if (cities.length > 0) {
    return cities.map((city) => <CityCard key={city.id} city={city} />);
  } else {
    return (
      <div className="col">
        <p className="text-danger">Data not found!</p>
      </div>
    );
  }
};
export default CityList;
