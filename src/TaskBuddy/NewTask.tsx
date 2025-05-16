import { X } from "lucide-react";
interface Prop {
  onclick: () => void;
}
export default function NewTask({ onclick }: Prop) {
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
      <form>
        <input type="text" placeholder="Task title" />
        <textarea />
        <label>
          {" "}
          Due on <input type="date" />
        </label>
        <label>
          <input type="file" placeholder="Drop your files here or update" />
        </label>
      </form>
    </div>
  );
}
