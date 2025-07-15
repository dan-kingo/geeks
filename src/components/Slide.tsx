import { useState } from "react";

export interface Slide {
  title: string;
  subtitle: string;
}

interface Props {
  slides: Slide[];
}
const Slide = ({ slides }: Props) => {
  const [slide, setSlide] = useState(0);
  return (
    <div>
      <h1 className="text-3xl">{slides[slide].title}</h1>
      <p className="text-lg">{slides[slide].subtitle}</p>
      <div className="flex gap-4">
        <button
          className={`px-4 py-2 rounded-sm text-white  ${
            slide === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 cursor-pointer"
          }`}
          disabled={slide === 0}
          onClick={() => setSlide(slide - 1)}
        >
          Prev
        </button>

        <button
          className={`px-4 py-2 rounded-sm text-white  ${
            slide === slides.length - 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 cursor-pointer"
          }`}
          disabled={slide === slides.length - 1}
          onClick={() => setSlide(slide + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Slide;
