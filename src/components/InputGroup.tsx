interface Props {
  label: string;
  placeholder?: string;
  type: "text" | "email" | "number" | "file" | "url";
}

const InputGroup = ({ label, placeholder, type }: Props) => {
  return (
    <>
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <input
        id={label}
        type={type}
        className="form-control mb-3"
        placeholder={placeholder}
      />
    </>
  );
};

export default InputGroup;
