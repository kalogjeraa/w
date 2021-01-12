import React from 'react';

const Fields = (props) => {
  const {
    column,
    fields,
  } = props;

  return (
    <div className={column}>
      FIELDS
      {Object.keys(fields).map((field) => {
        return (<p>{field}</p>);
      })}
    </div>
  )
};

export default Fields;