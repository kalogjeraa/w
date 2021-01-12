import React, { useEffect, useState } from 'react';
import FormInput from '../forms/FormInput';
import FormSource from '../forms/FormSource';
import Result from '../results/Result';

import { COL } from '../../constants/home';

const Home = () => {
  let [source, setSource] = useState('');
  let [form, setForm] = useState('');

  useEffect(() => {
    console.log(source);
  });

  const handleSourceChange = (newSource) => {
    setSource(newSource)
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
          handleSourceChange={handleSourceChange}
        />
        <Result
          column={COL}
        />
      </div>
    </div>
  )
};

export default Home;
