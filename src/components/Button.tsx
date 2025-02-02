interface Props {
  color: "primary" | "danger";
  children: string;
  onClick?: () => void;
}
const Button = ({ color, children, onClick }: Props) => {
  return (
    <>
      <button onClick={onClick} className={"btn me-3 btn-" + color}>
        {children}
      </button>
    </>
  );
};

export default Button;
