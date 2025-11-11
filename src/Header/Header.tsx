import { useState } from "react";
import { Link } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";

export default function Header() {
  // Simulated authentication state
  const [user, setUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);

  const handleLogin = (userData) => {
    setUser(userData);
    setShowAuth(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#5C4033" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-3" to="/">
            ReadLit
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Genres
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/to-read">
                  To Read
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/my-books">
                  My Books
                </Link>
              </li>

              {user ? (
                <>
                  <li className="nav-item text-light ms-3">
                    Hello, <strong>{user.name}</strong>
                  </li>
                  <button
                    className="btn btn-outline-light ms-3"
                    type="button"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  className="btn btn-outline-light ms-3"
                  type="button"
                  onClick={() => setShowAuth(true)}
                >
                  Sign in
                </button>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Auth Modal */}
      {showAuth && (
        <div
          className="modal fade show"
          style={{
            display: "block",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-dark text-light p-4">
              <button
                type="button"
                className="btn-close btn-close-white ms-auto"
                onClick={() => setShowAuth(false)}
              ></button>
              <AuthForm onLogin={handleLogin} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
