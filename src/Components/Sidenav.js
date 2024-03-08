import React from "react";
import {
  SidenavImg1,
  SidenavImg2,
  SidenavImg3,
  SidenavImg4,
  SidenavImg5,
  SidenavImg6,
} from "../Assets/Images/SidenavIcons";
import MenuImg from "../Assets/Images/menu";
function SideNav() {
  return (
    <div className="nav-bar-container">
      <div className="navbar-img">
        <span id="webicons">
          <SidenavImg1 />
        </span>
        <SidenavImg2 />
        <SidenavImg3 />
        <SidenavImg4 fillColor={"#e51058"} />
        <span id="webicons">
          <SidenavImg5 />
        </span>
        <span id="webicons">
          <SidenavImg6 />
        </span>
      </div>

      <div className="navbar-img2">
        <MenuImg />
        <img
          className="avatar"
          width={40}
          height={40}
          alt="member profile"
          src={require("../Assets/Images/samplerecipient2.jpeg")}
        ></img>
      </div>
    </div>
  );
}
export default SideNav;
