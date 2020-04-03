import React from 'react';

export const Slider = ({
  name,
  id = name,
  min = 0,
  max = 100,
  step = 1,
  setter,
  value
}) => {
  function changeHandler(event) {
    setter(event.target.value);
  }
  return (
    <div>
      <input
        type="range"
        name={name}
        id={id}
        min={min}
        max={max}
        step={step}
        onInput={changeHandler}
        value={value}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
}

export default Slider
