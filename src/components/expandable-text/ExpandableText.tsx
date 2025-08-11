import { useState } from "react";

interface Props {
  children: string;
  maxLength?: number;
}

const ExpandableText = ({ children, maxLength = 80 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongText = children.length > maxLength;

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const textToShow = !isExpanded && isLongText
    ? children.slice(0, maxLength) + "..."
    : children;

  return (
    <div>
      <p>{textToShow}</p>

      {isLongText && (
        <div className="mt-4">
          <button
            className="cursor-pointer px-4 py-2 rounded-lg bg-violet-600 text-white"
            onClick={toggleExpand}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ExpandableText;
