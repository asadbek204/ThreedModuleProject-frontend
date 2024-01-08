import React, {useEffect, useState} from 'react';
import logo from '../assets/img/logo-black-with-text.svg'
// import searchIcon from '../assets/img/search-icon.png'
import langUz from '../assets/img/uz.png'
import langRu from '../assets/img/ru.png'

function Navbar(props) {
    const [lnkAccount, setLnkAccount] = useState('registration')
    const [lang, setLang] = useState('uz')
    const [langIcon, setLangIcon] = useState(langUz)
    useEffect(() => {
        setLangIcon(lang === 'uz' ? langUz: langRu)
    }, [lang]);
    return (
        <nav className={'site-nav'}>
            <img className={'site-logo'} src={logo} alt=""/>
            <div className="container-nav">
                <div className="block-contact">
                    <a className={'contact-tel'} href="tel:998712509391">+998 71 2509391</a>
                    <span className={'working-time'}>Пн. – Сб. : с 09:00 до 18:00</span>
                </div>
                <div className="block-nav">
                    <div className="link" id={'btn-search'}>
                        <i className={'link-icon fa fa-search'}></i>
                        <span className={'link-text'}>search</span>
                    </div>
                    <div className="link" id={'btn-cart'}>
                        <span className={'counter'} id={'counter-cart'}></span>
                        <img className={'link-icon'} src="" alt=""/>
                        <span className={'link-text'}>cart</span>
                    </div>
                    <div className="link" id={'btn-favorites'}>
                        <span className={'counter'} id={'counter-favorites'}></span>
                        <img className={'link-icon'} src="" alt=""/>
                        <span className={'link-text'}>favorites</span>
                    </div>
                    <div className="link" id={'btn-account'} onClick={() => {setLnkAccount('account')}}>
                        <img className={'link-icon'} src="" alt=""/>
                        <span className={'link-text'}>{lnkAccount}</span>
                    </div>
                </div>
                <div className="block-lang">
                    <img src={langIcon} alt=""/>
                    <div
                        className={'btn-lang'}
                        onClick={
                            () => {
                                setLang(prev => prev === 'uz'? 'ru': 'uz')
                            }
                        }
                    >
                        <span>{lang}</span>
                        <i className="lang-select-arrow fa-solid fa-chevron-down"></i>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;