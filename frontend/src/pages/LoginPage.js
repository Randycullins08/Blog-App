import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { login, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);

    navigate("/");
  };

  return (
    <div className="login-signup-container">
      <form className="edit-blog-form" onSubmit={handleSubmit}>
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
          <button disabled={isLoading} type="submit">
            Login
          </button>
        </div>

        <Link to="/signup">Create Account</Link>
      </form>
    </div>
  );
}
