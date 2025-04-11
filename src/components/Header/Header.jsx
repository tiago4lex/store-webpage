import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <h1 className='logo'>FULL OF SHITZ</h1>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/" href="#">Home</Link></li>
                    <li><Link to="/store    " href="#">Store</Link></li>
                    <li><a href="#">Members</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;