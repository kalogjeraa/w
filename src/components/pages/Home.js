import React, { useEffect, useState } from 'react';
import Fields from '../forms/Fields';
import Source from '../forms/Source';
import Result from '../results/Result';

import { COL } from '../../constants/home';

const FIELDS_JSON = require('../../data/forms.json');
const ARR_JSON_OBJ_FIELDS = Object.values(FIELDS_JSON); // [{"last":"", "first":""}, {"title":"", "id":""}]

const Home = () => {
  let [sourceIndex, setSourceIndex] = useState(0); // [0(book), 1(court), 2(encyclopaedia)]
  // there is no need for an array of types
  let [fields, setFields] = useState(ARR_JSON_OBJ_FIELDS[sourceIndex]);


  // Sets the fields.
  useEffect(() => {
    setFields(ARR_JSON_OBJ_FIELDS[sourceIndex]);
  }, [sourceIndex]);

  const reset = () => {
    setFields(ARR_JSON_OBJ_FIELDS[sourceIndex])
  };

  // Sets the source type (e.g., book, court, etc...).
  const handleSourceChange = newSource => {
    reset();
    setSourceIndex(newSource);
  };

  // Sets the results.
  const handleTyping = (index, input) => {
    // Perform some logic to append to a result string.

    const tupleArray = Object.entries(fields); // array of [["litigation", ""], ["title", ""]]
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

    console.log('obj to INSERT: ', obj);
    setFields(obj); //////////
  };

  return (
    <div>
      <div className="row">

        <Source
          column={COL}
          sourceIndex={sourceIndex}
          handleSourceChange={handleSourceChange}
          reset={reset}
        />

        <Fields
          column={COL}
          fields={fields}
          sourceIndex={sourceIndex}
          handleTyping={handleTyping}
        />

        <Result
          column={COL}
          fields={fields}
        />

      </div>
    </div>
  );
};

export default Home;