import { BrowserRouter } from "react-router-dom";

import { Hero, Navbar, About, Experience, Tech, Feedbacks, Contact } from "./components";
import { StarsCanvas } from "./components/canvas";

const App = () => {
  return (
    <BrowserRouter>
      <div className=" bg-primary font-sans transition-colors duration-300">
         <div className="relative z-0 ">
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>
        <About />
        <Experience />
        <Tech />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
