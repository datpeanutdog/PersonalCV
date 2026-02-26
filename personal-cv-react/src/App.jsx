import Header from "./component/Header";
import About from "./component/About";
import Skills from "./component/Skills";
import Education from "./component/Education";
import Contact from "./component/Contact";
import { useState } from "react";

function App() {
const [darkMode, setDarkMode] = useState(false);
return (
<div className={darkMode ? "dark-mode" : ""}>
<button onClick={() => setDarkMode(!darkMode)}>
Toggle Dark Mode
</button>
      <Header />
      <About />
      <Skills />
      <Education />
      <Contact />
</div>
);
}

export default App;