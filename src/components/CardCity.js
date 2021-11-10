import React from 'react';

function CardCity({ name, country_name }) {
  return (
    <div className="col-4">
      <div className="card bg-light mb-3">
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p>{country_name}</p>
          <a href="/#" className="card-text">
            See restaurants in {name}
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardCity;
