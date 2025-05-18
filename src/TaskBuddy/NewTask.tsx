import { X } from "lucide-react";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

interface Prop {
  onclick: () => void;
}
export default function NewTask({ onclick }: Prop) {
  const [taskList, setTaskList] = useState([]);
  const [data, setData] = useState({
    TaskDescription: "",
    TaskName: "",
    Date: "",
  });
  const handleTaskCreateForm = async (e) => {
    e.preventDefault();
    setTaskList((taskList) => [...taskList, data]);
    const user = auth.currentUser;
    await setDoc(doc(db, "tasks", user?.uid), {
      taskList,
    });
    setData({ TaskName: "", TaskDescription: "", Date: "" });
  };
  let task = "";

  const handleTaskName = (e) => {
    task = task + e.target.value;
    setData({ ...data, TaskName: task });
  };

  const handleTaskDescription = (e) => {
    setData({ ...data, TaskDescription: e.target.value });
  };

  const handleDate = (e) => {
    setData({ ...data, Date: e.target.value });
  };

  return (
    <div
      style={{
        backgroundColor: "green",
        width: "50vw",
        height: "50vh",
        position: "absolute",
        top: "25%",
        left: "25% ",
        borderRadius: "10px",
      }}
    >
      <p style={{ display: "flex", justifyContent: "space-between" }}>
        Create Task
        <X onClick={onclick} style={{ cursor: "pointer" }} />
      </p>
      <hr />
      <form onSubmit={handleTaskCreateForm}>
        <input
          type="text"
          placeholder="Task title"
          value={data.TaskName}
          onChange={(e) => handleTaskName(e)}
        />
        <textarea
          value={data.TaskDescription}
          onChange={(e) => handleTaskDescription(e)}
        />
        <label>
          Due on
          <input
            type="date"
            value={data.Date}
            onChange={(e) => handleDate(e)}
          />
        </label>
        <label>
          <input type="file" placeholder="Drop your files here or update" />
        </label>
        <div style={{ float: "right" }}>
          <button>Cancel</button>
          <input type="submit" placeholder="create" />

          {/* </input> */}
        </div>
      </form>
    </div>
  );
}
