import React, { useEffect, useState } from 'react';

import '../../styles/result.css';

const Result = (props) => {
  const [citation, setCitation] = useState('');

  const {
    column,
    fields,
    type,
  } = props;

  useEffect(() => {
    const keys = Object.keys(fields)
    const values = Object.values(fields)
    let m = `{{ cite ${type} \n`;
    for (let i = 0; i < keys.length; i++) {
      m += `  | ${keys[i]} = ${values[i]} \n`;
    }
    m += `}}`
    setCitation(m)
  }, [citation, fields, type]);

  return (
    <div className={column}>
      <textarea
        value={citation}
      />
      {
        /*Object.keys(fields).map(field => {
          return (
            <div className="resultP">
              <span className="resultLine">{`| ${field} = ${fields[field]}`}</span>
            </div>
          );
        })
      */}
    </div>
  )
};

export default Result;