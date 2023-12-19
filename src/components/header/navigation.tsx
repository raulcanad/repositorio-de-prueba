
import { useState } from 'react';
import { HeaderButton } from './header-button';
import Styles from './navigation.module.css';
import Hamburger from 'hamburger-react';




export const NavigationHeader = () => {
    
    const [isOpen, setOpen] = useState(false)
   
   
    return(
        <div className='containerAll'>
            <div className={Styles.burger}>
            <Hamburger color="#4FD1C5"  onToggle={toggled => {
                    if (toggled) {
                        setOpen(true);
                        //open menu
                    } else {
                        setOpen(false);
                        // close a menu
                    }
            } }/>
            </div>
           

        <nav className={isOpen? Styles.menu : Styles.novisible}>

       
                
                    <HeaderButton href='/'>INICIO</HeaderButton>
                    <HeaderButton href='/casino'>CASINO</HeaderButton>
                    <HeaderButton href='/contacto'>CONTACTO</HeaderButton>

                
            </nav>
            </div>
    )
    

}

