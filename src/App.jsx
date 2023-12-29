import "./App.scss";
// import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import mylogo from "./images/mylogo.png";
import "./components/Header.scss";
import { useRef, useState, useEffect } from "react";
import { RESUME_LINK } from "./constants/system.constants";

const navbarItems = [
  {
    text: "Home",
    className: "App-home",
    htmlElement: <Home />,
  },
  {
    text: "About",
    className: "App-about",
    htmlElement: <About />,
  },
  {
    text: "Skills",
    className: "App-skills",
    htmlElement: <Skills />,
  },
  {
    text: "Contact",
    className: "App-contact",
    htmlElement: <Contact />,
  },
];

function App() {
  // ########### Start:Change navbar bg ##########
  const [navBg, setNavBg] = useState(false);
  const changeNavBg = () => {
    window.scrollY >= 100 ? setNavBg(true) : setNavBg(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);
  // ########### End: Change navbar bg ##########

  const observerRefs = useRef([]);
  const [visibleKey, setVisibleKey] = useState(0);
  const observers = useRef([]);

  const scrollToView = (item, key) => {
    observerRefs?.current[key]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    setVisibleKey(key);
  };

  // const observerCallback = async (e, key) => {
  //   if (e.length && e[0].isIntersecting) {
  //     setVisibleKey(key);
  //   }
  // };

  // useEffect(() => {
  //   if (observerRefs.current?.length && observers.current) {
  //     console.log(observerRefs.current);
  //     Array.from(Array(navbarItems.length).keys()).forEach((_u, key) => {
  //       observers.current[key] = new IntersectionObserver((e) =>
  //         observerCallback(e, key)
  //       );
  //       if (observerRefs.current[key]) {
  //         observers.current[key].observe(observerRefs.current[key]);
  //       }
  //     });
  //   }
  //   return () =>
  //     observers.current?.forEach((observer) => observer?.current?.disconnect());
  // }, [observerRefs, observers]);

  return (
    <div className="App">
      <div className="mobile-header">
        <div className="Header">
          <div className="container">
            <div className="logo color-primary">
              <img src={mylogo} alt="Logo" />
            </div>
          </div>
        </div>
      </div>

      <header
        onScroll={changeNavBg}
        className={`App-header ${navBg ? "add-bg" : ""}`}
      >
        <div className="Header">
          <div className="container">
            <div className="logo color-primary">
              <img src={mylogo} alt="Logo" />
            </div>

            <div className="list">
              <ul className="clean-list">
                {navbarItems.map((item, key) => {
                  return (
                    <li
                      name={item.text.toLowerCase()}
                      key={`item-${key}`}
                      className={`${key === visibleKey ? "  current" : ""}`}
                      onClick={() => scrollToView(item, key)}
                    >
                      <a href={`#${item.text.toLowerCase()}`}>
                        <span className="text">{item.text}</span>
                      </a>
                    </li>
                  );
                })}

                {/* Resume hyperlink */}
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
        {navbarItems.map((item, key) => {
          return (
            <section
              name={item.text.toLowerCase()}
              key={`section-${key}`}
              className={item.className}
              ref={(el) => (observerRefs.current[key] = el)}
            >
              {item.htmlElement}
            </section>
          );
        })}
      </main>
    </div>
  );
}

export default App;
