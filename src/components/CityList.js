import React from 'react';
import CardCity from './CardCity';

function CityList({ cities, title }) {
  return (
    <React.Fragment>
      <div className="row mt-3">
        <div className="col-12">
          <h3>{title}</h3>
        </div>
      </div>
      <div className="row">
        {cities == null ? (
          <div className="col">
            <p>Loading ...</p>
          </div>
        ) : (
          cities.map((city) => (
            <CardCity
              name={city.name}
              country_name={city.country_name}
              key={city.id}
            />
          ))
        )}
      </div>
    </React.Fragment>
  );
}

export default CityList;
