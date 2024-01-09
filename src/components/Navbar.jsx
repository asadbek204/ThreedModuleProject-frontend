import React, {useEffect, useState} from 'react';
import logo from '../assets/img/logo-black-with-text.svg'
import langUz from '../assets/img/uz.png'
import langRu from '../assets/img/ru.png'
import SearchIcon from "./icons/SearchIcon";

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
                    <SearchIcon color={'black'} className='link-icon'/>
                    <div className='link-icon link-anim'>
                        <span className={'counter'} id={'counter-cart'}>0</span>
                        <i className="bi bi-handbag link-icon"></i>
                    </div>
                    <div className='link-icon link-anim'>
                        <span className={'counter'} id={'counter-favorites'}>0</span>
                        <i className="bi bi-heart link-icon"></i>
                    </div>
                    <i className="bi bi-person link-icon link-anim"></i>
                    <span className={'link-text'}>search</span>
                    <span className={'link-text'}>cart</span>
                    <span className={'link-text'}>favorites</span>
                    <span className={'link-text'}>{lnkAccount}</span>
                </div>
                <div className="block-lang">
                <img src={langIcon} alt=""/>
                    <div className={'btn-lang'} onClick={e => {
                        setLang(prev => prev === 'uz' ? 'ru' : 'uz')
                    }}>
                    <span>{lang}</span>
                        <i className="lang-select-arrow fa-solid fa-chevron-down"></i>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;