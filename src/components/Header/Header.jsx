import './Header.css';

function Header() {
    return (
        <header className="header">
            <h1 className='logo'>FULL OF SHITZ</h1>
            <nav>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Store</a></li>
                    <li><a href="#">Members</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;