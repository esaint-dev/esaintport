/**
 * @copyright 2024 esaintmjay
 * @license Apache-2.0
 */

import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SkillCard from "./components/SkillCard";
import Skills from "./components/Skills";
import Work from "./components/Work";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills /> 
        <Work /> 
      </main>
    </>
  );
};

export default App;
