import React from 'react';

import Radio from './Radio';
import { SOURCES } from '../../constants/source';
import '../../styles/source.css';

const Source = props => {
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
    <div className={`${column} d-flex align-items-center justify-content-center`}>
      {/*<div className="card d-flex align-items-center source-card">
        <div className="instruction">Select an option.</div>
        <div className="options">
          {SOURCES && mapSources(SOURCES)}
        </div>
      </div>*/}
      <div className="options">
        <div>Select an option.</div>
        {SOURCES && mapSources(SOURCES)}
      </div>
    </div>
  )
}

export default Source;