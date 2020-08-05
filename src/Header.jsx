import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataContextValue } from "./DataProvider";

const Header = () => {
  const [{ user }] = useDataContextValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input type="text" placeholder="Search for artists and songs.." />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0].url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
