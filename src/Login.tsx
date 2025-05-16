import { ClipboardList } from "lucide-react";
import "./Login.css";
import image from "./assets/google.jpg";
export default function Login({ onClick }) {
  return (
    <>
      <div className="login-page" style={{ display: "flex" }}>
        <div style={{ width: "50vw", height: "50vh" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            <ClipboardList color="#7B1984" />

            <h3 style={{ color: "#7B1984" }}>TaskBuddy</h3>
          </div>
          <p className="login-para">
            Streamline your workflow and track progress effortlessly with our
            all-in-one task management app.
          </p>
          <button onClick={onClick} className="login-button">
            <img src={image} style={{ width: "15px", height: "15px" }} />
            Continue with Google
          </button>
        </div>
        <div style={{ width: "50vw", height: "50vh" }}></div>
      </div>
    </>
  );
}
