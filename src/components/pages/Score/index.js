import React, { useState } from "react";
import FormInput from "./Detail/FormInput";

function ScorePage({ bright }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [result, setResult] = useState("");

  const handleNamaChange = (e) => {
    setName(e.target.value);
  };

  const handleScoreChange = (e) => {
    setScore(e.target.value);
  };

  const submitAssesment = (e) => {
    e.preventDefault();

    if (score <= 0 || score > 100) {
      setResult("Nilai Invalid");
    } else if (score >= 80 && score <= 100) {
      setResult(`Nilai ${name} mendapatkan nilai A`);
    } else if (score >= 65 && score <= 79) {
      setResult(`Nilai ${name} mendapatkan nilai B`);
    } else if (score >= 50 && score <= 64) {
      setResult(`Nilai ${name} mendapatkan nilai C`);
    } else if (score >= 35 && score <= 49) {
      setResult(`Nilai ${name} mendapatkan nilai D`);
    } else if (score >= 1 && score <= 34) {
      setResult(`Nilai ${name} mendapatkan nilai E`);
    }
  };
  return (
    <div className="grid items-center min-h-[calc(100vh-2.9rem)]">
      <FormInput
        submitAssesment={submitAssesment}
        handleNamaChange={handleNamaChange}
        handleScoreChange={handleScoreChange}
        name={name}
        score={score}
        result={result}
        bright={bright}
      />
    </div>
  );
}

export default ScorePage;
