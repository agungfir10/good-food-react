import React from 'react';

function SearchKeyword(props) {
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
                  placeholder="Type keyword i.e: restaurant's name, location, cuisine, etc."
                  className="form-control"
                  value={props.keyword}
                  onChange={(e) => props.changekKeywordHandler}
                />
                <button className="btn btn-primary ml-2" type="submit">
                  +Criteria
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchKeyword;
