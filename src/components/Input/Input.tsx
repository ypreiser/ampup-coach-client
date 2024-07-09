import React from 'react';
import styles from './Input.module.css';

interface InputProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ type, value, onChange, placeholder, label, required }) => {
  return (
    <div className={styles.inputContainer}>
      {label && <label className={required ? styles.requiredLabel : ''}>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={styles.input}
      />
    </div>
  );
};

export default Input;
