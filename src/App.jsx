/**
 * @copyright 2024 esaintmjay
 * @license Apache-2.0
 */

import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Review from "./components/Review";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills /> 
        <Work /> 
        <Review />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
