import React, { useEffect, useState } from 'react';
import FormInput from '../forms/FormInput';
import FormSource from '../forms/FormSource';
import Result from '../results/Result';

import { FORM_FIELDS as FIELDS } from '../../data/forms';
import { COL } from '../../constants/home';

const Home = () => {
  let [source, setSource] = useState(0);
  let [form, setForm] = useState(FIELDS[source]);
  let [result, setResult] = useState('');

  useEffect(() => {
    console.log(source);
  });

  const handleSourceChange = (newSource) => {
    setSource(newSource)
  };

  const handleFormChange = (newForm) => {
    setForm(newForm);
  };

  const handleResultChange = (newResult) => {
    setResult(newResult);
  };

  return (
    <div>
      <div className="row">
        <FormSource
          column={COL}
          source={source}
          handleSourceChange={handleSourceChange}
        />
        <FormInput
          column={COL}
          form={form}
          handleFormChange={handleFormChange}
        />
        <Result
          column={COL}
          result={result}
          handleResultChange={handleResultChange}
        />
      </div>
    </div>
  )
};

export default Home;
