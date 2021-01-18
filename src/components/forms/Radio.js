import React from 'react';

const Radio = (props) => {
  const {
    handleSourceChange,
    index,
    text,
  } = props;

  return (
    <div>
      <input
        className="form-check-input"
        type="radio"
        name="source"
        id={text}
        value={text}
        onClick={() => handleSourceChange(index)}
      />
      <label
        className="form-check-label"
        htmlFor="web"
      >
        {text}
      </label>
    </div>
  );
};

export default Radio;