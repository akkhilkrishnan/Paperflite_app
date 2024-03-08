import React from "react";

//images import
import ViewImg from "../Assets/Images/view";
import RefreshImg from "../Assets/Images/refresh";
import DeleteImge from "../Assets/Images/delete";
import Widget from "./Widget";

import RecipientsList from "./RecipientsList";

function ConversationDetails(props) {
  const { details } = props;
  return (
    <div className="details-container">
      <div id="coverImage"></div>
      <div className="details-section">
        <div className="page-header">
          <div>
            <div className="details-topic">{details.topic}</div>
            <div className="details-subheading">
              You shared {details.noofassetsshared} assets with{" "}
              {details.noofrecipients} recipients
            </div>
            <div className="details-time">{details.time} ago via Quicksend</div>
          </div>
          <div className="image-stack details-btns">
            <ViewImg />
            <RefreshImg />
            <DeleteImge />
          </div>
        </div>
        <div className="widget-container">
          <Widget
            number={details.openemail}
            info={"email open rate"}
            symbol={"%"}
          />
          <Widget
            number={details.clickrate}
            info={"content click rate"}
            symbol={"%"}
          />
          <Widget
            number={details.timespent}
            info={"total time spent"}
            symbol={""}
          />
          <Widget number={details.dealvalue} info={"deal value"} symbol={"$"} />
        </div>
        <RecipientsList recipients={details.recipients} />
      </div>
    </div>
  );
}

export default ConversationDetails;
