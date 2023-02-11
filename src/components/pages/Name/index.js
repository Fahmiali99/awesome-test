import React, { useState } from "react";
import FormInput from "./Detail/FormInput";

function NamePage({ bright }) {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstWord = name.toLowerCase().charAt(0);
    if (firstWord >= "a" && firstWord <= "d") {
      setResult("In a first group");
    } else if (firstWord >= "e" && firstWord <= "i") {
      setResult("In a second group");
    } else {
      setResult("In a last group");
    }
  };
  return (
    <div className="grid items-center min-h-[calc(100vh-2.9rem)]">
      <FormInput
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        name={name}
        result={result}
        bright={bright}
      />
    </div>
  );
}

export default NamePage;
