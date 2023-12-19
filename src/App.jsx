import "./App.scss";
// import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import mylogo from "./images/mylogo.png";
import "./components/Header.scss";
import { useRef } from "react";
import { RESUME_LINK } from "./constants/system.constants";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const executeScroll = (ref) => () => {
    console.log(ref);
    ref?.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header">
          <div className="container">
            <div className="logo color-primary">
              <img src={mylogo} alt="Logo" />
            </div>

            <div className="list">
              <ul className="clean-list">
                <li className="current">
                  <a href="#home" onClick={executeScroll(homeRef)}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={executeScroll(aboutRef)}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={executeScroll(contactRef)}>
                    Contact
                  </a>
                </li>
                <li>
                  <a href={RESUME_LINK} target="_blank" rel="noreferrer">
                    Résumé &nbsp;
                    <i className="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="App-home" ref={homeRef}>
          <Home />
        </section>
        <section className="App-about" ref={aboutRef}>
          <About />
        </section>
        <section className="App-contact" ref={contactRef}>
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
