import './Header.css'

type HeaderProps = {
  title: string
}

export default function Header() {
    return (
        <header className="header">
            <div className="header__container">
            <h1 className="header__title">ReadLit</h1>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item"><a href="/">Genres</a></li>
                    <li className="header__nav-item"><a href="/to-read">To Read</a></li>
                    <li className="header__nav-item"><a href="/my-books">My Books</a></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}
