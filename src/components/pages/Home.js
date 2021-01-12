import React, { useEffect, useState } from 'react';
import Fields from '../forms/Fields';
import Source from '../forms/Source';
import Result from '../results/Result';

import { FORM_FIELDS as FIELDS } from '../../data/forms';
import { COL } from '../../constants/home';

const Home = () => {
  let [source, setSource] = useState(0);
  let [fields, setFields] = useState(FIELDS[0]);

  useEffect(() => {
    console.log(source);
    console.log(fields);
  });

  // Sets the source type (e.g., book, court, etc...).
  const handleSourceChange = (newSource) => {
    setSource(newSource);
    setFields(FIELDS[source]);
  };

  // Sets the source type (e.g., book, court, etc...).
  const handleFieldsChange = (newFields) => {

  };

  return (
    <div>
      <div className="row">

        <Source
          column={COL}
          source={source}
          handleSourceChange={handleSourceChange}
        />

        <Fields
          column={COL}
          fields={fields}
          source={source}
          handleFieldsChange={handleFieldsChange}
        />

        <Result
          column={COL}
          result={''}
        />

      </div>
    </div>
  )
};

export default Home;
