/**
 * @copyright 2024 esaintmjay
 * @license Apache-2.0
 */

import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SkillCard from "./components/SkillCard";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills /> 
      </main>
    </>
  );
};

export default App;
