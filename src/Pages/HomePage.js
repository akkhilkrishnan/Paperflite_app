import React, { useState } from "react";
import SideNav from "../Components/Sidenav";
import ConversationList from "../Components/ConversationList";
import ConversationDetails from "../Components/ConversationDetails";
import ConversationData from "../SampleData/conversations.json";

function HomePage() {
  const { conversations } = ConversationData;
  const [details, setDetails] = useState(conversations[1]); //default data on pacge load

  const pushDetails = (item) => {
    setDetails(item);
  };
  return (
    <div className="home-page">
      <SideNav />
      <ConversationList pushDetails={pushDetails} />
      <ConversationDetails details={details} />
    </div>
  );
}
export default HomePage;
