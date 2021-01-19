import React from 'react';

const Fields = props => {
  const {
    column,
    fields,
    handleTyping,
  } = props;

  return (
    <div className={column}>
      {
        Object.keys(fields).map((field, index) => {
          return (
            <div
              className="form-group"
              key={index}
            >
              <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
              <input
                type="text"
                className="form-control"
                placeholder={`${field}`}
                onChange={event => handleTyping(index, event.target.value)}
              />
            </div>
          );
        })
      }
    </div>
  );
};

export default Fields;