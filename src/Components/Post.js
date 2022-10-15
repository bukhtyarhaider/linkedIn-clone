import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import InputOption from "./InputOption";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import PublicIcon from "@mui/icons-material/Public";
import "./Post.css";

const Post = forwardRef(
  ({ postphoto, time, photoURL, name, description, message }, ref) => {
    return (
      <div ref={ref} className="post">
        <div className="post_header">
          <Avatar src={photoURL}>{name[0]}</Avatar>
          <div className="post_info">
            <h2>{name}</h2>
            <p>{description}</p>
            <p className="post_time">
              {time} . <PublicIcon className="post_earth_icon" />
            </p>
          </div>
        </div>
        <div className="post_body">
          <p>{message}</p>
          <img src={postphoto} width="585" alt="post_image" />
        </div>

        <div className="post_button">
          <InputOption
            Icon={ThumbUpAltOutlinedIcon}
            title="like"
            color="gray"
          />
          <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
          <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
          <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
        </div>
      </div>
    );
  }
);

export default Post;
