import React from 'react';

const COL = 'col-md';

const Home = () => {
  return (
    <div>
      <div className="row">
        <div className={COL}>
          Sources
        </div>
        <div className={COL}>
          Input
        </div>
        <div className={COL}>
          Result
        </div>
      </div>
    </div>
  )
};

export default Home;
