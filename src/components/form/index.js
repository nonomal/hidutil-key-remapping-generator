import React from 'react';
import KeySelect from '../key-select';
import './form.css';

const Form = ({ keyMaps, setKeyMaps }) => {
  const handleChange = (keyMap, { target: { name, value } }) => {
    setKeyMaps(keyMaps.map(k => k === keyMap ? ({
      ...k,
      [name]: value
    }) : k));
  };

  return (
    <div className="form">
      <div className="form__header">
        <div>From key</div>
        <div>To key</div>
        <div></div>
      </div>
      <div className="form__rows">
        {keyMaps.map((keyMap, keyMapIndex) => (
          <div
            key={`keyMap-${keyMapIndex}`}
            className="form__row"
          >
            <KeySelect
              className="form__row__select"
              name="from"
              value={keyMap.from}
              onChange={(e) => {
                handleChange(keyMap, e);
              }}
            />

            <KeySelect
              className="form__row__select"
              name="to"
              value={keyMap.to}
              onChange={(e) => {
                handleChange(keyMap, e);
              }}
            />
    
            <button
              className="form__row__button"
              onClick={() => {
                setKeyMaps(keyMaps.filter(k => k !== keyMap));
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      
      <button
        className="form__button"
        onClick={() => {
          setKeyMaps([
            ...keyMaps,
            {}
          ]);
        }}
      >
        Add key map
      </button>
    </div>
  );
};

export default Form;
