import React, { useState, useEffect } from "react";
import "./Feed.css";
import Photo from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "../Firebase/Firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../Store/features/counter/userSlice";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { Avatar } from "@mui/material";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
    return unsubscribe;
  }, []);

  const changetimestamp = (timestamp) => {
    if (timestamp != null) {
      return timestamp.toDate().toUTCString();
    } else {
      return "";
    }
  };

  const sendImagePost = () => {
    if (!input) {
      alert("Please Paste URL First");
    } else {
      try {
        const docRef = addDoc(collection(db, "posts"), {
          name: user.displayName,
          description: "new user",
          message: "",
          postphoto: input,
          photoUrl: user.photoUrl || "",
          timestamp: serverTimestamp(),
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding POST to database : ", e);
      }
      setInput("");
    }
  };

  const sendPost = (e) => {
    e.preventDefault();

    try {
      const docRef = addDoc(collection(db, "posts"), {
        name: user.displayName,
        description: "new user",
        message: input,
        postphoto: "",
        photoUrl: user.photoUrl || "",
        timestamp: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding POST to database : ", e);
    }
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_inputContainer_top">
          <Avatar src={user.photoUrl}>
            {user.displayName && user.displayName[0]}
          </Avatar>
          <div className="feed_input">
            <form>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Share a post"
              />
              <button onClick={sendPost} type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="feed_inputOptions">
          <InputOption
            onClick={sendImagePost}
            Icon={Photo}
            title="Photo"
            color="#75B5F9"
          />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#7FC15E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#E7A33E" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Writing article"
            color="#FC9295"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            photoURL={post.data().photoUrl}
            name={post.data().name}
            description={post.data().description}
            message={post.data().message}
            postphoto={post.data().postphoto}
            time={changetimestamp(post.data().timestamp)}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
