import React from "react";
function ListItem(props) {
  const { item } = props;
  return (
    <div className="list-container">
      <img
        src={require("../../src/Assets/Images/sampleimg.jpg")}
        alt="conversation profile"
        className="conversation-img-style"
      ></img>
      <div className="list-record">
        <div
          className={`con-topic ${
            item.selected === true ? "selected-header" : ""
          }`}
        >
          {item.topic.length > 32
            ? item.topic.substring(0, 30) + "..."
            : item.topic}
        </div>
        <div className="share-time">Shared {item.time} ago</div>
        <div className="share-members">
          {item.members[0]}
          <span>
            {item.members.length > 1 ? `+ ${item.members.length - 1} more` : ""}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
