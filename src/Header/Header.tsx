type HeaderProps = {
  title: string
}

export default function Header() {
    return (
        <header className="header">
            <div className="header__container">
            <h1 className="header__title">ReadLit</h1>
            <nav className="header__nav">
                <ul>
                    <li><a href="/">Genres</a></li>
                    <li><a href="/about">To Read</a></li>
                    <li><a href="/contact">My Books</a></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}
