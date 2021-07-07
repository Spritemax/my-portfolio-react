import Topbar from "./components/Topbar/Topbar";
import { useState } from "react";
import Intro from "./components/Intro/Intro";
import Menu from "./components/Menu/Menu";
import Testimonials from "./components/Testimonials/Testimonials";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import Portfolio from "./components/Portfolio/Portfolio";
import './theme/styles/App.scss';


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar open={isMenuOpen} changeStyle={setIsMenuOpen} />
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Projects />
        <Testimonials />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
