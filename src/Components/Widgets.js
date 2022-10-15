import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import UserSuggestion from "./UserSuggestion";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h3 className="widgets_header_title">Add to your feed</h3>
        <InfoIcon />
      </div>
      <div className="widgets_body">
        <UserSuggestion
          userProfileUrl="https://source.unsplash.com/200x200/?portrait"
          userName="Asra Rehman"
          userInfo="Technical Recruiter | HR Operations | Employee Engagement | Head Hunter |"
        />
        <UserSuggestion
          userProfileUrl="https://source.unsplash.com/200x300/"
          userName="Contour Software"
          userInfo="Company • Information Technology and Services"
        />
        <UserSuggestion
          userProfileUrl="https://source.unsplash.com/200x200/"
          userName="Sawleha S."
          userInfo="Hiring talent across Pakistan | Technical Recruiter | HR Professional | Talent Acquisition"
        />
      </div>
      <div className="widgets_footer">
        <h4 className="widgets_footer_title">View all recommendations </h4>
        <ArrowForwardIcon className="arrowIcon" />
      </div>
    </div>
  );
}

export default Widgets;
