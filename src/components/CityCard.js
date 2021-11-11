import React from 'react';
import { Link } from 'react-router-dom';

function CityCard({ city }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card bg-light mb-3">
        <div className="card-body">
          <h3 className="card-title">{city.name}</h3>
          <p>{city.country_name}</p>
          <Link to={`/city/${city.id}`} className="card-text">
            See restaurants in {city.name}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CityCard;
