import React from "react";

interface rangeProps {
  priceRange: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Range: React.FC<rangeProps> = ({ priceRange, onChange }) => {
  return (
    <div className="px-2 w-1/4">
      <label className="block">Price Range:</label>
      <input
        type="range"
        className="w-full border rounded p-2"
        min={0}
        max={1000000}
        value={priceRange}
        onChange={onChange}
      />
      <span>
        {priceRange.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </span>{" "}
    </div>
  );
};

export default Range;
