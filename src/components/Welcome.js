import React from 'react';

function Welcome() {
  return (
    <div className="container px-3 py-3 mt-3">
      <div className="card text-white bg-success mb-3 text-center">
        <div className="card-header">
          <h1>Welcome to Good Food</h1>
        </div>
        <div className="card-body">
          <h4 className="card-title">
            The Easiest Way to Find Restaurant and Food
          </h4>
          <p className="card-text">
            You can grab information about restaurants, cafees, cuisines with
            just a few clicks.
          </p>
          <p className="card-text">
            Start by choosing the featured cities below, or search the city
            name.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
