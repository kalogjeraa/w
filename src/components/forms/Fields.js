import React, { useEffect } from 'react';

const Fields = props => {

  const {
    column,
    fields,
    handleTyping,
  } = props;

  useEffect(() => {
    console.log(fields);
  }, [fields]);

  return (
    <div className={column}>
      {
        Object.keys(fields).map((field, index) => {
          console.log(field.value);
          return (
            <div
              className="form-group"
              key={index}
            >
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder={`${field}`}
                onChange={event => handleTyping(event.target.value)}
              />
            </div>
          );
        })
      }
    </div>
  );
};

export default Fields;