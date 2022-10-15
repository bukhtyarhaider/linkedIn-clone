import React from "react";
import "./Header.css";
import "./HeaderOption";
import SearchIcon from "@mui/icons-material/Search";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Home from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import HeaderOption from "./HeaderOption";
import ChatIcon from "@mui/icons-material/Chat";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from "@mui/icons-material/Apps";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Store/features/counter/userSlice";
import { getAuth } from "@firebase/auth";
import { selectUser } from "../Store/features/counter/userSlice";

function Header() {
  const user = useSelector(selectUser);
  const auth = getAuth();
  const dispatch = useDispatch();
  const logoutAction = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header_left">
        <LinkedInIcon className="logo" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="search" />
        </div>
      </div>

      <div className="header_right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          name={user.displayName}
          avatar={user.photoUrl}
          title="me"
          onClick={logoutAction}
        />
        <hr />
        <HeaderOption Icon={AppsIcon} title="Work" />
        <div className="header_add_text">
          <p>Try Premium for free</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
