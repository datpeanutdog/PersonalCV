import { useState } from "react";

function Skills({ skills }) {
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
        <section className="card">
          <h2>Skills</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
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