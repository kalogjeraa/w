import React, { useEffect } from 'react';

const Result = (props) => {

  const {
    column,
    fields,
  } = props;

  useEffect(() => {
    console.log('Result.js fields:', fields);
  }, [fields]);

  console.log(fields);

  return (
    <div className={column}>
      {
        Object.keys(fields).map((key) => {
          return (
            <p>
              {`${key}: ${fields[key]}`}
            </p>
          );
        })
      }
    </div>
  )
};

export default Result;

/*
Wikipedia's format:
{{cite encyclopedia
  | title =
  | encyclopedia =
  | date =
  | year =
  | publisher =
  | location =
  | id =
 }}
 */