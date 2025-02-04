import React from "react";

interface Props {
  label: string;
  value?: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type: "text" | "email" | "number" | "file" | "url";
}

const InputGroup = ({
  value,
  label,
  placeholder,
  type,
  onInputChange,
}: Props) => {
  return (
    <>
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <input
        value={type === "file" ? undefined : value}
        id={label}
        type={type}
        className="form-control mb-3"
        placeholder={placeholder}
        onChange={onInputChange}
      />
    </>
  );
};

export default InputGroup;
