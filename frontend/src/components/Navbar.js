import { Link, NavLink, Outlet } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <>
      <div className="navbar-container">
        <NavLink to="/">
          <h2>Blog App</h2>
        </NavLink>

        <div className="login-logout-wrapper">
          <div className="user-wrapper">{user.email}</div>
          <Link to="/login">
            <button onClick={logout}>Log out</button>
          </Link>
        </div>
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
}
