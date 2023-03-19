import { useRouteError, Link, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <h1>Uh Oh! We've got a problem</h1>

      <p>{error.message || error.statusText}</p>

      <div className="redirect-buttons">
        <button onClick={() => navigate(-1)}>Go Back</button>
        <Link to="/">Home Page</Link>
      </div>
    </div>
  );
}
