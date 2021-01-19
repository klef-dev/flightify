import React, { useState } from "react";
import StartPage from "./StartPage";
import InfoPage from "./InfoPage";
import ReviewPage from "./ReviewPage";
import ConfirmPage from "./ConfirmPage";
import {
  BIRTH_DATE,
  BIRTH_PLACE,
  PASSPORT_EXPIRY,
  PASSPORT_ISSUE_DATE,
  PASSPORT_LOCATION,
  RESIDENCE_A,
  RESIDENCE_CC,
} from "../constants";

const MainForm = () => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nationality, setNationality] = useState("");
  const [flightNo, setFlightNo] = useState("");
  const [email, setEmail] = useState("");
  const [passportNo, setPassportNo] = useState("");
  // Optional Fields
  const [dob, setDOB] = useState(undefined);
  const [issueDate, setIssueDate] = useState(undefined);
  const [expiryDate, setExpiryDate] = useState(undefined);
  const [birthPlace, setBirthPlace] = useState("");
  const [residence_cc, setResidenceCC] = useState("");
  const [residence_a, setResidenceA] = useState("");
  const [passportLoc, setPassportLoc] = useState("");
  const fields = {
    step,
    firstName,
    lastName,
    flightNo,
    nationality,
    email,
    passportNo,
  };
  const extrafields = (visibleArray, blocked = false) =>
    [
      {
        id: BIRTH_DATE,
        label: "Birth Date",
        field: dob,
        type: "date",
        setField: setDOB,
      },
      {
        id: BIRTH_PLACE,
        label: "Birth Place",
        field: birthPlace,
        setField: setBirthPlace,
      },
      {
        id: PASSPORT_ISSUE_DATE,
        label: "Passport Issue Date",
        field: issueDate,
        type: "date",
        setField: setIssueDate,
      },
      {
        id: PASSPORT_EXPIRY,
        label: "Passport Expiry  Date",
        field: expiryDate,
        type: "date",
        setField: setExpiryDate,
      },
      {
        id: PASSPORT_LOCATION,
        label: "Passport Location",
        field: passportLoc,
        setField: setPassportLoc,
      },
      {
        id: RESIDENCE_CC,
        label: "Residence (Country and City)",
        field: residence_cc,
        setField: setResidenceCC,
      },
      {
        id: RESIDENCE_A,
        label: "Residence (Address)",
        field: residence_a,
        setField: setResidenceA,
      },
    ]
      .filter((field) => visibleArray.indexOf(field.id) !== -1)
      .map((field) => (
        <React.Fragment key={field.id}>
          <label>{field.label}:</label>
          <input
            type={field.type ?? "text"}
            value={field.field}
            onChange={(e) => field.setField(e.target.value)}
            disabled={blocked}
            readOnly={blocked}
          />
        </React.Fragment>
      ));

  const setFields = {
    setStep,
    setFirstName,
    setLastName,
    setFlightNo,
    setNationality,
    setEmail,
    setPassportNo,
  };

  switch (step) {
    case 1:
      return <StartPage fields={fields} setFields={setFields} />;
    case 2:
      return (
        <InfoPage
          fields={fields}
          setFields={setFields}
          extrafields={extrafields}
        />
      );
    case 3:
      return (
        <ReviewPage
          fields={fields}
          setFields={setFields}
          extrafields={extrafields}
        />
      );
    case 4:
      return <ConfirmPage />;
    default:
      return <div>Page Not Found</div>;
  }
};

export default MainForm;
