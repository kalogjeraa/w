import React from 'react';

const Source = (props) => {
  const {
    column,
    handleSourceChange,
    reset,
  } = props;

  return (
    <div className={column}>

      <div className="form-check">
        <input className="form-check-input" type="radio" name="source" id="book" value="book" defaultChecked
          onClick={() => {
            reset();
            handleSourceChange(0);
          }}
        />
        <label className="form-check-label" htmlFor="book">
          Book
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="radio" name="source" id="court" value="court"
          onClick={() => handleSourceChange(1)}
        />
        <label className="form-check-label" htmlFor="court">
          Court Case
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="radio" name="source" id="encyclopaedia" value="encyclopaedia"
          onClick={() => handleSourceChange(2)}
        />
        <label className="form-check-label" htmlFor="encyclopaedia">
          Encyclopaedia
        </label>
      </div>
      
    </div>
  )
}

export default Source;