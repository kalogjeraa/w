import React from 'react';

const FormSource = (props) => {
  const {
    column,
    handleSourceChange,
  } = props;

  return (
    <div className={column}>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="source" id="book" value="book" defaultChecked
          onClick={() => handleSourceChange('book')}
        />
        <label className="form-check-label" htmlFor="book">
          Book
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="source" id="courtcase" value="courtCase"
          onClick={() => handleSourceChange('court case')}
        />
        <label className="form-check-label" htmlFor="courtCase">
          Court Case
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="source" id="encyclopaedia" value="encyclopaedia"
          onClick={() => handleSourceChange('encyclopaedia')}
        />
        <label className="form-check-label" htmlFor="encyclopaedia">
          Encyclopaedia
        </label>
      </div>
    </div>
  )
}

export default FormSource;