interface Props {
  color: "primary" | "danger" | "custom";
  children: string;
  onClick?: () => void;
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
