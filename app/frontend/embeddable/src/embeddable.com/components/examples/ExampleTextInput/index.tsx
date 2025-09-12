/*
 * This component displays a simple text input with a label.
 * Its props are passed from the .emb.ts file
 *
 * You can delete this folder once you move to Vanilla Components post-Onboarding
 */
import React, { useState } from 'react';
import { inputStyles, labelStyles, labelTopStyles } from '../styles';

type Change = (text: string) => void;

let timeout: NodeJS.Timeout | null = null;

type Props = {
  label: string;
  defaultValue?: string;
  onChange: Change;
};

export default (props: Props) => {
  const { label, onChange } = props;
  const [value, setValue] = useState('');

  const handleChange = (newValue: string) => {
    setValue(newValue);
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      onChange(newValue);
    }, 500);
  };

  return (
    <>
      <label style={labelTopStyles}>
        <span style={labelStyles}>{label}</span>
        <input
          style={inputStyles}
          type="text"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      </label>
    </>
  );
};
