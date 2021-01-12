import React, { useEffect, useState } from 'react';
import Fields from '../forms/Fields';
import Source from '../forms/Source';
import Result from '../results/Result';

import { FORM_FIELDS as FIELDS } from '../../data/forms';
import { COL } from '../../constants/home';

const Home = () => {
  let [source, setSource] = useState(0);
  let [fields, setFields] = useState(FIELDS[0]);
  let [results, setResults] = useState('');

  // Sets the fields.
  useEffect(() => {
    setFields(FIELDS[source])
  }, [source]);

  // Sets the source type (e.g., book, court, etc...).
  const handleSourceChange = newSource => {
    setSource(newSource);
  };

  // Sets the results.
  const handleTyping = input => {
    // Perform some logic to append to a result string.

    setResults(input);
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
          handleTyping={handleTyping}
        />

        <Result
          column={COL}
          result={''}
        />

      </div>
    </div>
  );
};

export default Home;