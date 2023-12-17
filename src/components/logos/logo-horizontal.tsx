import Logo from "../../assets/logo.svg";
import Styles from "./logo-horizontal.module.css";

export const LogoHorizontal = ({alt= "Logo app",contain = false}) => {
    return (
        < img className={`${Styles.logo} ${contain ? `${Styles.contain}`: ``} `} src={Logo} alt={alt} />
    )
}