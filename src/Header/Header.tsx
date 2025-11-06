
import { Link } from "react-router-dom";

export default function Header() {
  return (
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
          <ul className="navbar-nav ms-auto">
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
            <button
              className="btn btn-outline-light ms-3"
              type="button"
            >
              Sign in
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}