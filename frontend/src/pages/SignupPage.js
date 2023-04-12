import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { signup, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);

    navigate("/");
  };

  return (
    <div className="login-signup-container">
      <form className="edit-blog-form" onSubmit={handleSubmit}>
        <h1 style={{ margin: "1em", color: "rgb(48, 48, 255)" }}>Sign Up</h1>

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
          <button disabled={isLoading}>Sign Up</button>
        </div>

        <Link to="/login">Log In</Link>
      </form>
    </div>
  );
}
