import { NavbarStyle } from "./style"
import Logo from '../../assets/icons/logo';
import Menu from '../../assets/icons/menu';
import User from '../../assets/icons/user';
export const Navbar = () => {
    return(
        <NavbarStyle>
            <div className="container">
                <div className="nav-left">
                    <Menu />
                    <Logo />
                </div>
                <div className="nav-right">
                    Olá, Pedro <User />
                </div>
            </div>
        </NavbarStyle>
    )
}