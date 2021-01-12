import React from 'react';

const Fields = props => {
  const {
    column,
    fields,
  } = props;

  return (
    <div className={column}>
      {
        Object.keys(fields).map(field => {
          return (
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder={`${field}`}
              />
            </div>
          );
        })
      }
    </div>
  );
};

export default Fields;