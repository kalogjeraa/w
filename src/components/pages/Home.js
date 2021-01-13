import React, { useEffect, useState } from 'react';
import Fields from '../forms/Fields';
import Source from '../forms/Source';
import Result from '../results/Result';
import { COL } from '../../constants/home';
import { insert } from '../../utils/utilities';

const FIELDS_JSON = require('../../data/forms.json');

const FIELDS_ENTRIES = Object.entries(FIELDS_JSON);
const ARR_JSON_OBJ_TYPES = Object.keys(FIELDS_JSON);
const ARR_JSON_OBJ_FIELDS = Object.values(FIELDS_JSON);

const Home = () => {
  let [sourceIndex, setSourceIndex] = useState(0);
  // there is no need for an array of types
  let [fields, setFields] = useState(ARR_JSON_OBJ_FIELDS[sourceIndex]);
  let [results, setResults] = useState(ARR_JSON_OBJ_FIELDS[sourceIndex]); //results 'would' be blank fields at first

  // Sets the fields.
  useEffect(() => {
    setFields(ARR_JSON_OBJ_FIELDS[sourceIndex]);
  }, [sourceIndex, fields]);

  // Sets the source type (e.g., book, court, etc...).
  const handleSourceChange = newSource => {
    setSourceIndex(newSource);
  };

  // Sets the results.
  const handleTyping = (index, input) => {
    // Perform some logic to append to a result string.

    console.log(fields)
    console.log(results)
    const entries = fields; // current results MUST be fields
    
    const tupleArray = Object.entries(entries); // array of [["litigation", ""], ["title", ""]]
    const tuple = tupleArray[index]; // ["litigation", ""]
    tuple.splice(1, 1, input); // replace second index with new input
    tupleArray.splice(index, 1, tuple); // replace old tuple in tupleArray with new tuple
    // converts everything back into like entries above
    const obj = Object.assign(
      ...tupleArray.map(
        ([key, value]) => (
          {[key]: value}
        )
      )
    );

    console.log(obj);
    setResults(obj);
  };

  return (
    <div>
      <div className="row">

        <Source
          column={COL}
          sourceIndex={sourceIndex}
          handleSourceChange={handleSourceChange}
        />

        <Fields
          column={COL}
          fields={fields}
          sourceIndex={sourceIndex}
          handleTyping={handleTyping}
        />

        <Result
          column={COL}
          results={results}
        />

      </div>
    </div>
  );
};

export default Home;