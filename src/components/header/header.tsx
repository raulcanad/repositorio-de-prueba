import Styles from './header.module.css'
import { LogoHorizontal } from '../logos/logo-horizontal';
import { NavigationHeader } from './navigation';



export const Header = () => {
    return(
        <>
        <header className={Styles.header}>
        <div className={Styles.logo}>
        <LogoHorizontal contain />
        </div> 
        <NavigationHeader />
        </header>
        </>

    )
}