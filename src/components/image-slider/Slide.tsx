import { useState } from "react";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";

export interface Slide {
  title: string;
  imageUrl: string;
}

interface Props {
  slides: Slide[];
}
const Slide = ({ slides }: Props) => {
  const [slide, setSlide] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl">{slides[slide].title}</h1>
      <img className="w-[90%] h-[512px] rounded-xl shadow-2xl" src={slides[slide].imageUrl} alt="Slide Image" />
      <div className="flex gap-4">
        <button
          className={`px-4 py-2 rounded-sm text-white  ${
            slide === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 cursor-pointer"
          }`}
          disabled={slide === 0}
          onClick={() => setSlide(slide - 1)}
        >
          <BiCaretRight className="rotate-180" />
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
        <BiCaretLeft className="rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default Slide;
