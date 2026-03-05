import Header from "./component/Header";
import About from "./component/About";
import Skills from "./component/Skills";
import Education from "./component/Education";
import Contact from "./component/Contact";
import { useState } from "react";

function App() {
      const [darkMode, setDarkMode] = useState(false);
      const skills = [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
      ];
      const education = [
            {
                  Program: "College",
                  Institution: "USTP - CDO Campus",
                  Year: "2024-Present"
            },
            {
                  Program: "Senior High",
                  Institution: "USTP - Senior High",
                  Year: "2022-2024"
            },
            {
                  Program: "Junior High",
                  Institution: "Corpus Christi School",
                  Year: "2018-2022"
            },
            {
                  Program: "Grade School",
                  Institution: "USTP - CDO Campus",
                  Year: "2012-2018"
            },
            {
            Program: "Kinder",
                  Institution: "East City Central",
                        Year: "2009-2012"
            },

      ]
      return (
            <div className={darkMode ? "dark-mode" : ""}>
                  <button onClick={() => setDarkMode(!darkMode)}>
                        Toggle Dark Mode
                  </button>
                  <Header />
                  <About />
                  <Skills skills={skills} />
                  <Education education={education} />
                  <Contact />
            </div>
      );
}

export default App;