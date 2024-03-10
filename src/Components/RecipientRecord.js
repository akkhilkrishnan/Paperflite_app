import React from "react";

import MailImg from "../Assets/Images/mail";
import ShareImg from "../Assets/Images/share";
import LocationImg from "../Assets/Images/location";
import LineImg from "../Assets/Images/divideLine";
import MemberImg from "../Assets/Images/widget-member";
function RecipientRecord(props) {
  const { recipient } = props;
  return (
    <div className="recipient-record-container">
      <div className="recipient-record">
        <img
          src={recipient.imgurl}
          width={35}
          height={35}
          alt="recipient profile"
          style={{ borderRadius: "8px" }}
        ></img>
        <div className="recipient-name">{recipient.name}</div>
        <span id="nonmobileicons">
          <LineImg />
        </span>
        <div className="last-view-time">
          last viewed on {recipient.lastviewedtime}
        </div>
      </div>
      <div className="recipient-record-btns">
        <div className="number-style">~{recipient.number}m</div>
        <div className="image-stack">
          <MailImg />
          <MemberImg />
          <ShareImg />
          <span id="webicons">
            <LineImg />
          </span>
          <span id="webicons">
            <LocationImg />
          </span>
        </div>
      </div>
    </div>
  );
}

export default RecipientRecord;
