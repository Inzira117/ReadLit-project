
// import { Link } from "react-router-dom";


// export default function Header() {
//     return (
//         <header className="container-fluid bg-dark text-white py-3 mb-4">
//             <div className="container-fluid d-flex justify-content-between align-items-center">
//             <h1 className="h3 mb-0">ReadLit</h1>
//             <nav>
//                 <ul className="nav">
//                     <li className="nav-item"><Link to="/" className="nav-link text-white">Genres</Link></li>
//                     <li className="nav-item"><Link to="/to-read" className="nav-link text-white">To Read</Link></li>
//                     <li className="nav-item"><Link to="/my-books" className="nav-link text-white">My Books</Link></li>
//                 </ul>
//             </nav>
//             </div>
//         </header>
//     )
// }


import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#5C4033" }} // Chocolate brown
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
          </ul>
        </div>
      </div>
    </nav>
  );
}