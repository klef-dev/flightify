import React from "react";
import countryList from "../country-list";
import { arrayFromNationality } from "../constants";

const validateFields = (fields) =>
  fields.filter((field) => !field.trim()).length !== 0;
const InfoPage = ({ fields, setFields, extrafields }) => {
  const { step, lastName, firstName, email, nationality, passportNo } = fields;
  const {
    setStep,
    setFirstName,
    setEmail,
    setNationality,
    setPassportNo,
  } = setFields;
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="mb-8 text-lg font-bold">Hi, Mr {lastName}</div>
      <label>First Name:</label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label>Last Name:</label>
      <input type="text" value={lastName} disabled readOnly={true} />
      <label>Nationality:</label>
      <select
        value={nationality}
        onChange={(e) => setNationality(e.target.value)}
      >
        <option value="" disabled hidden></option>
        {countryList.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Passport No:</label>
      <input
        type="text"
        value={passportNo}
        onChange={(e) => setPassportNo(e.target.value)}
      />
      {extrafields(arrayFromNationality(nationality))}
      <div className="flex justify-between mt-8">
        <button onClick={() => setStep(step - 1)}>Back</button>
        <button
          disabled={validateFields([
            lastName,
            firstName,
            email,
            nationality,
            passportNo,
          ])}
          onClick={() => setStep(step + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default InfoPage;
