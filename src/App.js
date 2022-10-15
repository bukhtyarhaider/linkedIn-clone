import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "./Store/features/counter/userSlice";
import { getAuth } from "firebase/auth";
import Login from "./Components/Login";
import Loading from "./Components/Loading/Loading";
import Home from "./Components/Home/Home";
import "./App.css";

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
            <>
              <div className="desktopView">
                <Home />
              </div>
              <div className="mobileView">
                <Loading underDevelopment />
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default App;
