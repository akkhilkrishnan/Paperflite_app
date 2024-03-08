import React from "react";
import MailImg from "../Assets/Images/widget-mail";
import MoneyImg from "../Assets/Images/widget-money";
import TimeImg from "../Assets/Images/widget-time";
import MemberImg from "../Assets/Images/widget-member";

function Widget(props) {
  const { number, info, symbol } = props;
  return (
    <div className="widget-box">
      <div className="widget-row">
        <div className="widget-number">
          {`${symbol === "$" ? symbol + number : number + symbol}`}
        </div>
        {info.includes("email") ? (
          <MailImg />
        ) : info.includes("click") ? (
          <MemberImg />
        ) : info.includes("time") ? (
          <TimeImg />
        ) : (
          <MoneyImg />
        )}
      </div>
      <div className="widget-info">{info}</div>
    </div>
  );
}

export default Widget;
