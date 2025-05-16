import {
  AlignJustify,
  SquareKanban,
  SquareArrowLeft,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import NewTask from "./NewTask";
interface OnClick {
  onClick: () => void;
  name: string;
}
export default function TaskList({ onClick, name }: OnClick) {
  const [open, setOpen] = useState(false);
  const handleAddTask = () => {
    setOpen(true);
  };
  const handleCloseBox = () => {
    setOpen(false);
  };
  return (
    <>
      {/* to do */}

      <div
        style={{
          height: "100vh",
          padding: "1rem",
          width: "100vw",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4>TaskBuddy</h4>
          <p>{name}</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <p style={{ display: "flex" }}>
              <AlignJustify />
              <span style={{ fontSize: "14px" }}> List</span>
            </p>
            <p style={{ display: "flex", marginLeft: "2rem" }}>
              <SquareKanban />
              <span style={{ fontSize: "14px" }}>Board</span>
            </p>
          </div>
          <button onClick={onClick}>
            <SquareArrowLeft /> logout
          </button>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>
            Filter: <button>Category</button> <button>Due Date</button>{" "}
          </p>
          <p>
            <button>Search</button>{" "}
            <button onClick={handleAddTask}>Add Task</button>{" "}
          </p>
        </div>
        <hr />
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <td>Task Name</td>
              <td>Due on</td>
              <td>Task Status</td>
              <td>Task Category </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4}>
                <div
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "#F1F1F1",
                    height: "50vh",
                  }}
                >
                  <div>
                    <p
                      style={{
                        backgroundColor: "#FAC3FF",
                        marginTop: "0px",
                        lineHeight: "2rem",
                        borderRadius: "10px 10px 0px 0px",
                      }}
                    >
                      Todo (3)
                      <button
                        style={{
                          float: "right",
                          border: "none",
                          backgroundColor: "transparent",
                          cursor: "pointer",
                        }}
                      >
                        <ChevronUp />
                      </button>
                    </p>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {open ? <NewTask onclick={handleCloseBox} /> : <></>}
      </div>
    </>
  );
}
