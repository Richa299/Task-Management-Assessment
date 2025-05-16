import { useEffect, useState } from "react";
import Login from "./Login";
import { auth, provider, signInWithPopup } from "./firebase";
import TaskList from "./TaskBuddy/TaskList";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import "./App.css";

function App() {
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState();
  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      setLoading(false);
      setState(true);

      if (auth.currentUser) setName(auth.currentUser?.displayName);
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };
  const handleLogout = () => {
    // const auth = getAuth();
    setLoading(false);
    console.log(auth);
    signOut(auth)
      .then(() => {
        setState(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    setLoading(true);
    setState(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user, "user");
      if (user) {
        setName(user?.displayName);
        setState(true);
        setLoading(false);
      } else {
        setState(false);
        setLoading(false);
      }
    });

    return () => unsubscribe(); // Clean up the listener
  }, []);
  console.log(loading, state, auth.currentUser?.displayName);
  return (
    <>
      {loading ? (
        <p>loading</p>
      ) : state ? (
        <TaskList onClick={handleLogout} name={name} />
      ) : (
        <Login onClick={signInWithGoogle} />
      )}
    </>
  );
}

export default App;
