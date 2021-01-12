import React, { useEffect } from 'react';

const Fields = (props) => {
  const {
    column,
    fields,
    source,
  } = props;

  useEffect(() => {
    console.log('mounted');
  }, []);

  return (
    <div className={column}>
      FIELDS
      {<p>${source}</p>}
      {Object.keys(fields).map((field) => {
        return (<p>{field}</p>);
      })}
    </div>
  )
};

export default Fields;