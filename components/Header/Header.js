import Image from "next/image"
import elatoLogo from '../../public/image/elato-logo.svg'
import searchIcon from '../../public/image/search-icon.svg'
import SelectLang from "../SelectLang/SelectLang"
import menuCross from "../../public/image/menu-cross.svg"
import { useState } from "react"
export default function Header() {
    const [menuActive, setMenuActive] = useState(false)
    const toggleMenu = () => {
        setMenuActive(!menuActive)
    }
    return (
        <div className="header">
            <div className="wrapper">
                <div className="header__main">
                    <div className={menuActive ? 'header__menu--mobile active menu--mobile' : 'header__menu--mobile menu--mobile'}>
                        <div className="menu--mobile__block">
                            <div onClick={toggleMenu} className="menu--mobile__cross">
                                <Image src={menuCross} width={28} height={28}/>
                            </div>
                            <h3>Меню</h3>
                            <div className="menu--mobile__select">
                                <p>Язык: </p>
                                <SelectLang />
                            </div>
                            <nav className="menu--mobile__footer">
                                <ul>
                                    <li><h5>О бренде Elato</h5></li>
                                    <li><h5>Корма Elato Holistic</h5></li>
                                    <li><h5>Новости</h5></li>
                                    <li><h5>Контакты</h5></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="header__logo">
                        <div onClick={toggleMenu} className="header__icon">
                            <span></span>
                        </div>
                        <Image src={elatoLogo}  objectFit="contain"/>
                    </div>
                    <div className="header__menu menu--pc">
                        <div className="menu--pc__header">
                            <SelectLang className="menu--pc__select" />
                            <Image className="menu--pc__search" src={searchIcon} width={15} height={15}/>
                            <p className="menu--pc__city">Киров</p>
                        </div>
                        <nav className="menu--pc__footer">
                            <ul>
                                <li><h5>О бренде Elato</h5></li>
                                <li><h5>Корма Elato Holistic</h5></li>
                                <li><h5>Новости</h5></li>
                                <li><h5>Контакты</h5></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}