import { useState } from "react";
import Slide from "./components/Slide";
import { Slide as SlideType } from "./components/Slide";
const App = () => {

  const [slides, _setSlides] = useState<SlideType[]>([{
    title: "Welcome to the Presentation",
    subtitle: "This is the first slide"
  },{
    title: "Next Slide",
    subtitle: "This is the second slide"
  },{
    title: "Final Slide",
    subtitle: "This is the last slide"
  }])
  return (
    <>

<Slide slides={slides} />

  </>
  );
};

export default App;
