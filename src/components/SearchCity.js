import React from 'react';

function SearchCity(props) {
  return (
    <div className="row">
      <div className="col">
        <h3>Search City</h3>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-11">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Type keyword or city name"
                  className="form-control"
                  value={props.value}
                  onChange={props.onChangeKeywordHandler}
                />
              </div>
              <div className="col-1">
                <button className="btn btn-primary" type="submit">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchCity;
