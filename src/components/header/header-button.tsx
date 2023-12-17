import Styles from './header-button.module.css';

export const HeaderButton = ({ href , children} : HeaderButtonProps) => {
    return(
        
            <li className={Styles.button}>
                <a href={href} >{children}</a>
            </li>

)}

interface HeaderButtonProps{
    href: string;
    children:React.ReactNode;
}