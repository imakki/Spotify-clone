import React from "react";
import "./SidebarOption.css";

const SidebarOption = ({ title, Icon }) => {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sideBarOption__Icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
};

export default SidebarOption;
