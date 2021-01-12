import React, { useEffect, useState } from 'react';
import { FORM_FIELDS as FIELDS } from '../../data/forms';

const Fields = (props) => {
  let [fields, setFields] = useState(FIELDS[0]);
  const {
    column,
    // fields,
    source,
  } = props;

  useEffect(() => {
    setFields(FIELDS[source])
  }, [source]);

  return (
    <div className={column}>
      FIELDS
      {<p>${source}</p>}
      {Object.keys(fields).map((field) => {
        return (<p>{field}</p>);
      })}
    </div>
  )
};

export default Fields;