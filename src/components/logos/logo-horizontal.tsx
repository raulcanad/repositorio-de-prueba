import Logo from "../../assets/logo.svg";
import Styles from "./logo-horizontal.module.css";

export const LogoHorizontal = ({alt= "Logo app"}) => {
    return (
        < img className={`${Styles.logo} `} src={Logo} alt={alt} />
    )
}