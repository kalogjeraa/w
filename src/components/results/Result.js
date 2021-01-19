import React, { useEffect, useRef, useState } from 'react';

import { formatStringBy } from '../../utils/utilities';
import '../../styles/result.css';

const Result = (props) => {
  const [citation, setCitation] = useState('');
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  const {
    column,
    fields,
    type,
  } = props;

  useEffect(() => {
    const formatted = formatStringBy(type, fields);
    setCitation(formatted);
  }, [fields, type]);

  const copyToClipboard = (value) => {
    navigator.clipboard.writeText(value)
    setCopySuccess('Copied!');
  };

  return (
    <div className={column}>
      <div className="paper">
        <div className="paper-content">
          <textarea
            autofocus
            readOnly
            ref={textAreaRef}
            value={citation}
          />        
          {copySuccess}
        </div>
      </div>
      <button
        onClick={()=> copyToClipboard(citation)}
      >
        Copy
      </button>
    </div>
  )
};

export default Result;