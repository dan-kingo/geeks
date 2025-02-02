interface Props {
  label: string;
  placeholder: string;
  type: "text" | "email" | "number";
}

const InputGroup = ({ label, placeholder, type }: Props) => {
  return (
    <>
      <label htmlFor={label} className="form-label fw-bold">
        {label}
      </label>
      <input type={type} className="form-control" placeholder={placeholder} />
    </>
  );
};

export default InputGroup;
