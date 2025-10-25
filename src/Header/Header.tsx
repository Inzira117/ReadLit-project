
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <header className="bg-dark text-white py-3 mb-4">
            <div className="container d-flex justify-content-between align-items-center">
            <h1 className="h3 mb-0">ReadLit</h1>
            <nav>
                <ul className="nav">
                    <li className="nav-item"><Link to="/" className="nav-link text-white">Genres</Link></li>
                    <li className="nav-item"><Link to="/to-read" className="nav-link text-white">To Read</Link></li>
                    <li className="nav-item"><Link to="/my-books" className="nav-link text-white">My Books</Link></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}
