import React from "react";
import "./index.css";

const Skills = ({ skills, removeSkill }) => {
  return (
    <div className="skills">
      {skills.map((skill, idx) => {
        return (
          <div key={idx} className="skill">
            <p>{skill}</p>
            <p
              className="cross"
              onClick={() => {
                removeSkill(skill);
              }}
            >
              x
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
