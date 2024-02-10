import React from "react";

interface selectProps {
  value: number;
  title: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<selectProps> = ({ value, onChange, title }) => {
  return (
    <div className="px-2 w-1/4">
      <label className="block">{title}:</label>

      <select
        className="w-full border rounded p-2"
        value={value}
        onChange={onChange}
      >
        <option defaultChecked value={0}>
          All
        </option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
    </div>
  );
};

export default Select;
