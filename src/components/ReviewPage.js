import React from "react";
import countryList from "../country-list";
import { arrayFromNationality } from "../constants";

const InfoPage = ({ fields, setFields, extrafields }) => {
  const { step, lastName, firstName, email, nationality, passportNo } = fields;
  const { setStep } = setFields;
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="mb-8 text-lg font-bold">
        Please, Review your information
      </div>
      <label>First Name:</label>
      <input type="text" value={firstName} disabled readOnly />
      <label>Last Name:</label>
      <input type="text" value={lastName} disabled readOnly />
      <label>Nationality:</label>
      <select value={nationality} disabled readOnly>
        {countryList.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      <label>Email:</label>
      <input type="email" value={email} disabled readOnly />
      <label>Passport No:</label>
      <input type="text" value={passportNo} disabled readOnly />
      {extrafields(arrayFromNationality(nationality), true)}
      <div className="flex justify-between mt-8">
        <button onClick={() => setStep(step - 1)}>Back</button>
        <button onClick={() => setStep(step + 1)}>Next</button>
      </div>
    </div>
  );
};

export default InfoPage;
