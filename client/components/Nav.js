import Link from 'next/link'
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='https://github.com/Mavetane'>Github</Link>
                </li>
                <li>
                    <Link href='/'>Projects</Link>
                </li>
                <li>
                    <Link href='/'>About Me</Link>
                </li>
                <li>
                    <Link href='/'>Contact Me</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
