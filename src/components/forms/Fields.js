import React from 'react';

import '../../styles/fields.css';

const Fields = props => {
  const {
    column,
    fields,
    handleTyping,
  } = props;

  return (
    <div className={column}>
      {/*<div className="fields-container">
        {
          Object.keys(fields).map((field, index) => {
            return (
              <div
                className="form-group"
                key={index}
              >
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
      </div>*/}
      <div className="paper">
        <div className="paper-content">
          {
            Object.keys(fields).map((field, index) => {
              return (
                <div
                  className=""
                  key={index}
                >
                  <input
                    type="text"
                    className=""
                    placeholder={`${field}`}
                    onChange={event => handleTyping(index, event.target.value)}
                  />
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Fields;