import { useState } from "react";
import Button from "../components/Button";

interface Props {
  maxChars?: number;
  children: string;
}

const ExpandableText = ({ maxChars = 100, children }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  let text = !isExpanded ? children.slice(0, maxChars) : children;
  return (
    <div>
      <p style={{ color: "#fff" }}>{text}</p>
      <Button color="primary" onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Show Less" : "Show More"}
      </Button>
    </div>
  );
};

export default ExpandableText;
