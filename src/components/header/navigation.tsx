import { HeaderButton } from './header-button'
import Styles from './navigation.module.css'

export const NavigationHeader = () => {
    return(

        <nav className={Styles.menu}>
            <ul>
                    <HeaderButton href='/'>INICIO</HeaderButton>
                    <HeaderButton href='/casino'>CASINO</HeaderButton>
                    <HeaderButton href='/contacto'>CONTACTO</HeaderButton>
            </ul>
        </nav>
    )

}