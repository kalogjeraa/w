import React from 'react';

import Radio from './Radio';
import { SOURCES } from '../../constants/source';

const Source = (props) => {
  const {
    column,
    handleSourceChange,
  } = props;


  const mapSources = sources => {
    return (
      sources.map((source, index) => {
        return (
          <div
            className="form-check"
            key={index}
          >
            <Radio
              handleSourceChange={handleSourceChange}
              index={index}
              text={source}
            />
          </div>
        );
      })
    );
  };

  return (
    <div className={column}>
      {SOURCES && mapSources(SOURCES)}  
    </div>
  )
}

export default Source;