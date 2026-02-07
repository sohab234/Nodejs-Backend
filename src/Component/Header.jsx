import React from "react";

export default function Header() {
  const isLogged = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <header className="app-header">
      <div className="header-right">
        {isLogged && (
          <button className="btn-logout" onClick={handleLogout}>
            Logout
          </button>
        )}
        <a className="link-register" href="/register">
          Register
        </a>
      </div>
    </header>
  );
}
