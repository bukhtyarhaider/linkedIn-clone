import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "./Store/features/counter/userSlice";
import { getAuth } from "firebase/auth";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Login from "./Components/Login";
import Widgets from "./Components/Widgets";
import "./App.css";
import Loading from "./Components/Loading/Loading";

function App() {
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      } else {
        dispatch(logout());
        setLoading(false);
      }
    });
  }, [auth, dispatch]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
}

export default App;
