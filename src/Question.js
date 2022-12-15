import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function Question({ title, info }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBtn = () => setIsOpen(!isOpen);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={toggleBtn}>
          {isOpen ? <FaMinus /> : <FaPlus />}
        </button>
      </header>
      {isOpen ? <p>{info}</p> : <p />}
    </article>
  );
}
