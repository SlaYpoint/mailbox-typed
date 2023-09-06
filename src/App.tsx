import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Home, Spam, Trash, MailDetail } from "./pages";

export default function App(): JSX.Element {
  const getActiveStyle = ({
    isActive
  }: {
    isActive: boolean;
  }): React.CSSProperties => ({
    margin: "1rem 0",
    padding: "1rem",
    fontWeight: isActive ? "600" : "200",
    color: isActive ? "red" : ""
  });

  return (
    <>
      <h1 className="title">my mailbox</h1>
      <div className="App">
        <nav>
          <NavLink style={getActiveStyle} to="/">
            Inbox
          </NavLink>
          <NavLink style={getActiveStyle} to="/spam">
            Spam
          </NavLink>
          <NavLink style={getActiveStyle} to="/trash">
            Trash
          </NavLink>
        </nav>
        <div style={{ width: "100%" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/spam" element={<Spam />} />
            <Route path="/mail/:mailId" element={<MailDetail />} />
            <Route path="/trash" element={<Trash />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
