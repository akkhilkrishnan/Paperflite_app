import React, { useState } from "react";
import RecipientRecord from "./RecipientRecord";

function RecipientsList(props) {
  const { recipients } = props;
  const [recipientSelected, setRecipientSelected] = useState("true");
  return (
    <>
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
        recipients.map((recipient) => {
          return <RecipientRecord recipient={recipient} />;
        })
      ) : (
        <div className="fallback-msg">No data found.</div>
      )}
    </>
  );
}

export default RecipientsList;
