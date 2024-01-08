import './App.css';
import image from './assets/img/загруженное.png'
import Navbar from "./components/Navbar";

function App() {
    return (
        <header>
            <Navbar/>
            <img className={'image'} src={image} alt="not working"/>
        </header>
    )
}

export default App;
