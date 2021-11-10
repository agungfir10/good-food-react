import React from 'react';
import { Link } from 'react-router-dom';

function CityCard({ id, name, country_name }) {
  return (
    <div className="col-4">
      <div className="card bg-light mb-3">
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p>{country_name}</p>
          <Link to={`/city/${id}`} className="card-text">
            See restaurants in {name}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CityCard;
