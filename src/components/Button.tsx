import { FormEvent, ReactNode } from "react";

interface Props {
  color: "primary" | "danger" | "custom";
  children: ReactNode;
  onClick?: (event: FormEvent) => void;
}
const Button = ({ color, children, onClick }: Props) => {
  return (
    <>
      <button onClick={onClick} className={"btn me-3 mb-3 btn-" + color}>
        {children}
      </button>
    </>
  );
};

export default Button;
