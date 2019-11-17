import React from 'react';
import AsyncSelect from 'react-select/async';

export default function Select({ ...rest }) {
  return (
    <AsyncSelect
      className='react-select-container'
      styles={{
        control: (provided) => ({
          ...provided,
          height: "38px",
          maxHeight: '38px',
          lineHeight: '25px'
        }),
        valueContainer: (base) => ({
          ...base,
          height: '38px',
          maxHeight: "38px",
        }),
      }}
      {...rest}
    />
  );
}
