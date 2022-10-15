import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "./Store/features/counter/userSlice";
import { getAuth } from "firebase/auth";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Login from "./Components/Login";
import Widgets from "./Components/Widgets";
import "./App.css";

function App() {
  const user = useSelector(selectUser);
  const auth = getAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [auth, dispatch]);

  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        <div>
          <Header />
          <div className="App">
            <div className="app_body ">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
