import './App.css';
import Navbar from "./components/Navbar";
import ProductsRouter from "./components/product/ProductsRouter";
import {useEffect, useRef, useState} from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SideBar from "./components/sideBar/SideBar";
import MobileNavbar from "./components/mobileNavbar/MobileNavbar";

function App() {
    const [bannerState, setBanner] = useState(1)
    const switch1 = useRef()
    const switch2 = useRef()
    const switch3 = useRef()

    const bannerAnimation = () => {
        setBanner(prev =>
            {
                switch (prev) {
                    case 1:
                        switch1.current.classList.remove('selected')
                        switch2.current.classList.add('selected')
                        return 2
                    case 2:
                        switch2.current.classList.remove('selected')
                        switch3.current.classList.add('selected')
                        return 3
                    case 3:
                        switch3.current.classList.remove('selected')
                        switch1.current.classList.add('selected')
                        return 1
                    default:
                        throw Error('wrong value for banner state')
                }
            }
        )
    }

    useEffect(() => {
        const interval = setInterval(bannerAnimation, 10000)
        return () => clearInterval(interval);
    }, []);
    const bannerSetter = target => prev => {
        target.classList.add('selected')
        switch (prev) {
            case 1:
                switch1.current.classList.remove('selected')
                break
            case 2:
                switch2.current.classList.remove('selected')
                break
            case 3:
                switch3.current.classList.remove('selected')
                break
            default:
                throw Error('wrong value for banner state')
        }
        return Number(target.id.split('-')[1])
    }
    const switcher = (e) => setBanner(bannerSetter(e.target))

    return (
        <>
            <header>
                <Navbar/>
                <ProductsRouter/>
                <section className='header-main'>
                    <div className={`header-container selected-${bannerState}`}>
                        <div className='banner' id="banner-1">
                            <span className='banner-text'>New Collection</span>
                            <button className='banner-button' id='btn-catalog-new'>View all</button>
                        </div>
                        <div className='banner' id="banner-2">
                            <span className='banner-text'>Discounted products</span>
                            <button className='banner-button' id='btn-catalog-discount'>View all</button>
                        </div>
                        <div className='banner' id="banner-3">
                            <span className='banner-text'>Bestsellers</span>
                            <button className='banner-button' id='btn-catalog-top'>View all</button>
                        </div>
                    </div>
                    <div className="switches">
                        <button ref={switch1} className="btn-switch selected" id="switch-1" onClick={switcher}></button>
                        <button ref={switch2} className="btn-switch" id="switch-2" onClick={switcher}></button>
                        <button ref={switch3} className="btn-switch" id="switch-3" onClick={switcher}></button>
                    </div>
                </section>
            </header>
            <Main/>
            <Footer/>
            <div className="modals">
                <SideBar/>
                <MobileNavbar/>
            </div>
        </>
    )
}

export default App;
