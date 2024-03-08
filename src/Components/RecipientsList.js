import React, { useState } from "react";
import RecipientRecord from "./RecipientRecord";

function RecipientsList(props) {
  const { recipients } = props;
  const [recipientSelected, setRecipientSelected] = useState("true");
  return (
    <div>
      <div className="recipients-header">
        <div
          className={`${recipientSelected ? "selected-header" : ""}`}
          onClick={() => setRecipientSelected(!recipientSelected)}
        >
          Recipients - {recipients.length.toString().padStart(2, "0")}
        </div>
        <div
          className={`${!recipientSelected ? "selected-header" : ""}`}
          onClick={() => setRecipientSelected(!recipientSelected)}
        >
          Sections - {(recipients.length - 2).toString().padStart(2, "0")}
        </div>
      </div>
      {recipientSelected ? (
        recipients.map((recipient, index) => {
          return <RecipientRecord recipient={recipient} key={index} />;
        })
      ) : (
        <div className="fallback-msg">No data found.</div>
      )}
    </div>
  );
}

export default RecipientsList;
