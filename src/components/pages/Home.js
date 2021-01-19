import React, { useEffect, useState } from 'react';

import Fields from '../forms/Fields';
import Footer from '../common/Footer';
import Result from '../results/Result';
import Source from '../forms/Source';

import { COL } from '../../constants/home';

const FULL_JSON = require('../../data/forms.json');
const KEYS_JSON = Object.keys(FULL_JSON);
const VALUES_JSON = Object.values(FULL_JSON);

const Home = () => {
  let [sourceIndex, setSourceIndex] = useState(0);
  let [fields, setFields] = useState(VALUES_JSON[sourceIndex]);

  useEffect(() => {
    setFields(VALUES_JSON[sourceIndex]);
  }, [sourceIndex]);

  const reset = () => {
    setFields(VALUES_JSON[sourceIndex])
  };

  const handleSourceChange = newSource => {
    reset();
    setSourceIndex(newSource);
  };

  const handleTyping = (index, input) => {
    const tupleArray = Object.entries(fields); // array of [["litigation", ""], ["title", ""]]
    const tuple = tupleArray[index]; // ["litigation", ""]
    tuple.splice(1, 1, input); // replace second index with new input
    tupleArray.splice(index, 1, tuple); // replace old tuple in tupleArray with new tuple

    const obj = Object.assign(
      ...tupleArray.map(
        ([key, value]) => (
          {[key]: value}
        )
      )
    );

    setFields(obj);
  };

  return (
    <div>
      <div className="row">
        <Source
          column={COL}
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
          type={KEYS_JSON[sourceIndex]}
          column={COL}
          fields={fields}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;