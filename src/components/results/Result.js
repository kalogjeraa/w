import React, { useEffect } from 'react';

const Result = (props) => {

  const {
    column,
    results,
  } = props;

  useEffect(() => {
    console.log(results);
  }, [results]);

  return (
    <div className={column}>
      {
        /*results.map((result, index) => {
          return (
            <div key={index}>
              {result}
            </div>
          );
        })*/
        /*Object.entries(results).map((result, index) => {

          return (
            <p>
              {result}
            </p>
          );
        })*/
      }
    </div>
  )
};

export default Result;