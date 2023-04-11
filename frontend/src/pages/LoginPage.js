import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-signup-container">
      <form className="edit-blog-form">
        <h1 style={{ margin: "1em", color: "rgb(48, 48, 255)" }}>Log In</h1>

        <div className="edit-input">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="edit-input">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="button-wrapper" style={{ margin: "2em" }}>
          <button>Login</button>
        </div>

        <Link to="/signup">Create Account</Link>
      </form>
    </div>
  );
}
