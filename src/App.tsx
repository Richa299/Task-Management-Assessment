import { useState } from "react";
import Login from "./Login";
import { auth, provider, signInWithPopup } from "./firebase";
import TaskList from "./TaskBuddy/TaskList";
import { getAuth, signOut } from "firebase/auth";
import "./App.css";

function App() {
  const [state, setState] = useState(false);
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // capture user details in result which can be used later
      // result- will use later
      if (auth.currentUser) setState(true);
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };
  const handleLogout = () => {
    const auth = getAuth();
    console.log(auth);
    signOut(auth)
      .then(() => {
        setState(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {state ? (
        <TaskList onClick={handleLogout} />
      ) : (
        <Login onClick={signInWithGoogle} />
      )}
    </>
  );
}

export default App;
