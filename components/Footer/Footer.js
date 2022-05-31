import Image from "next/image"
import elatoLogo from '../../public/image/elato-logo.svg'
import vkFooterLogo from '../../public/image/footer-vk.svg'
import ytFooterLogo from '../../public/image/footer-yt.svg'
export default function Footer() {
    return (
        <footer>
            <div className="wrapper">
                <div className="footer-top">
                    <div className="footer__logo">
                        <Image src={elatoLogo} width={158} height={49}/>
                    </div>
                    <div className="footer__nav">
                        <div className="nav__column">
                            <a href="#" className="nav__header">О бренде Elato</a>
                        </div>
                        <div className="nav__column">
                            <a href="#" className="nav__header">Корма Elato Holistic</a>
                            <nav>
                                <ul>
                                    <li><a>Корм для кошек</a></li>
                                    <li><a>Корм для собак</a></li>
                                    <li><a>Причины доверять</a></li>
                                    <li><a>Вопрос-ответ</a></li>
                                    <li><a>Где купить</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="nav__column">
                            <a href="#" className="nav__header">Новости</a>
                        </div>
                        <div className="nav__column">
                            <a href="#" className="nav__header">Контакты</a>
                            <span className="nav__phone"><a>+7 (495) 500-34-23</a></span>
                            <span className="nav__email"><a>elatopet@contact.com</a></span>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="footer-bottom">
                    <a href="#" className="footer__policy">Политика конфиденциальности</a>
                    <a href="#" className="footer__made">Сайт разработан</a>
                    <div className="footer__socials">
                        <a className="footer__vk"><Image src={vkFooterLogo} width={24} height={14}/></a>
                        <a className="footer__yt"><Image src={ytFooterLogo} width={22} height={15}/></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}