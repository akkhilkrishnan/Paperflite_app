import React from "react";

import ListImg from "../Assets/Images/list";
import ConversationData from "../SampleData/conversations.json";
import ListItem from "./ListItem";

function ConversationList(props) {
  const { conversations } = ConversationData; //sample data replicating a response from api
  conversations["selected"] = false;
  return (
    <div className="conversation-container">
      <div className="conversation-list-header">
        <div>
          <div className="details-title">conversations</div>
          <div className="conversation-list-subhead">track user engagement</div>
        </div>
        <ListImg />
      </div>
      <div>
        <input
          type="text"
          placeholder="search by conversations and contacts"
          className="seach-bar-style"
        ></input>
      </div>
      <div className="sort-style">
        <span>Sort by:</span>
        <span>Created Date</span>
        <span>Last Activity</span>
        <span>Time Spent</span>
      </div>
      {conversations.map((item, index, arr) => {
        return (
          <>
            <div
              onClick={() => {
                arr.map((item) => (item["selected"] = false));
                item["selected"] = true;
                props.pushDetails(item);
              }}
              key={index}
            >
              <ListItem item={item} />
            </div>
          </>
        );
      })}
    </div>
  );
}

export default ConversationList;
