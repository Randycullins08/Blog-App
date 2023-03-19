import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <NavLink to="/">
          <h2>Blog App</h2>
        </NavLink>
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
}
