import React from "react";

const StartPage = ({ fields, setFields }) => {
  const { step, lastName, flightNo } = fields;
  const { setStep, setLastName, setFlightNo } = setFields;
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="mb-8 text-lg font-bold">Welcome to your web check in</div>
      <input
        type="text"
        placeholder="Flight #"
        value={flightNo}
        onChange={(e) => setFlightNo(e.target.value)}
      />

      <input
        type="text"
        value={lastName}
        placeholder="Last Name"
        onChange={(e) => setLastName(e.target.value)}
      />
      <button
        disabled={!lastName.trim() | !flightNo.trim()}
        className="block mx-auto"
        onClick={() => setStep(step + 1)}
      >
        Continue
      </button>
    </div>
  );
};

export default StartPage;
