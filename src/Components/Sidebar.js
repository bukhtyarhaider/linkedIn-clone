import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../Store/features/counter/userSlice";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentIteams = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          className="background_img"
          src="https://loremflickr.com/420/420"
          alt="background"
        />
        <Avatar src={user.photoUrl} className="sidebar_avatar" />
        <div class="sidebar_top_info">
          <h4>{user.displayName}</h4>
          <p>{user.email}</p>
        </div>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <div className="sidebar_stat_right">
            <p>
              <span>Connections</span>
            </p>
            <p>Grow your network</p>
          </div>
          <p className="sidebar_statNumber">0</p>
        </div>

        <div className="sidebar_stat">
          <div className="sidebar_stat_right">
            <p>
              <span>Access exclusive tools & insights</span>
            </p>
            <p>Try Premium for free</p>
          </div>
        </div>

        <div className="sidebar_stat">
          <div class="sidebar_stat_bottom">
            <TurnedInIcon className="arrowIcon" />
            <p>My Items</p>
          </div>
        </div>
      </div>

      <div className="sidebar_button">
        <p>Recents</p>
        {recentIteams("reactJS")}
        {recentIteams("Python")}
      </div>
    </div>
  );
}

export default Sidebar;
