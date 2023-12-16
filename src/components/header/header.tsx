import Styles from './header.module.css'
import Logo from '../../assets/logo.svg';


export const Header = () => {
    return(
        <>
        <header className={Styles.header}>
        <img src={Logo} />
        <nav className="menu">
        <ul>
            <li>
                <button>INICIO</button>
            </li>
            <li>
                <button>CASINO</button>            
            </li>
            <li>
                <button>CONTACTO</button>
            </li>
        </ul>
        </nav>
        
        
        
        </header>
        </>

    )
}