import { useState } from "react";

function Skills() {
  const [visible, setVisible] = useState(true);

  const toggleSkills = () => {
    setVisible(!visible);
  };

  return (
    <>
      <button id="toggleSkills" onClick={toggleSkills}>
        Show / Hide Skills
      </button>

      {visible && (
        <section className="card" id="skillsSection">
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>

          <h2>Web Development</h2>
          <ul>
            <li>
              Frontend
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </li>
            <li>Backend (Basic)</li>
          </ul>
        </section>
      )}
    </>
  );
}

export default Skills;