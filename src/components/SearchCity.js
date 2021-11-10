import React from 'react';

function SearchCity({ onClickSearch, value, onChangeKeywordHandler }) {
  return (
    <div className="row">
      <div className="col">
        <h3>Search City</h3>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="d-flex">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Type keyword or city name"
                  className="form-control"
                  value={value}
                  onChange={onChangeKeywordHandler}
                />
                <button
                  className="btn btn-primary ml-2"
                  type="submit"
                  onClick={onClickSearch}
                >
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
