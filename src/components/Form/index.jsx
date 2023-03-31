import React, { useEffect, useState } from "react";
import InputField from "../InputField";
import Skills from "../Skills";
import "./index.css";

const skillList = ["HTML", "CSS", "JS", "REACT"];

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [skills, setSkills] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [skillValue, setSkillValue] = useState("");

  const removeSkill = (skill) => {
    const updatedSkills = skills.filter((ele) => ele !== skill);
    setSkills(updatedSkills);
  };

  useEffect(() => {
    if (name && email && password && skills.length) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [name, email, password, skills]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    setSkills([]);
    setIsSubmitted(true);
    setIsValid(false);
    setSkillValue("");
  };

  return (
    <div className="form-container">
      <div className="red-box">
        {isSubmitted ? (
          <p>You have successfully subscribed to our plan ✓</p>
        ) : (
          <p>
            <span>Try it free 7 days </span>then ₹180/mo. thereafter
          </p>
        )}
      </div>
      <form className="form-box">
        <InputField
          type="text"
          placeholder="Name"
          setInputText={setName}
          value={name}
        />
        <InputField
          type="email"
          placeholder="Email Address"
          setInputText={setEmail}
          value={email}
        />
        <InputField
          type="password"
          placeholder="Password"
          setInputText={setPassword}
          value={password}
        />
        <select
          value={skillValue}
          onChange={(e) => {
            setSkillValue(e.target.value);
            if (skills.includes(e.target.value)) {
              return;
            }
            setSkills([...skills, e.target.value]);
          }}
        >
          <option value="" disabled selected>
            Choose your skills
          </option>

          {skillList.map((skill) => (
            <option key={skill}>{skill}</option>
          ))}
        </select>

        <Skills skills={skills} removeSkill={removeSkill} />

        <button
          className={`${isValid ? "btn-active" : "btn-disabled"}`}
          disabled={isValid ? false : true}
          onClick={handleSubmit}
        >
          CLAIM YOUR FREE TRIAL
        </button>
        <p className="tc">
          By clicking the button you are agreeing to our
          <span> Terms and Services</span>
        </p>
      </form>
    </div>
  );
};

export default Form;
