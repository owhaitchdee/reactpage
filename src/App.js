import './App.css';
import NavbarD from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Gallery from './pages/Gallery';
import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';

function App() {
  // let component;
  // console.log(window.location.pathname);
  // switch (window.location.pathname){
  //   case '/home':
  //     component = <Home/>
  //   break;
  //   case '/about':
  //     component = <About/>
  //   break;
  //   case '/gallery':
  //     component = <Gallery/>
  //   break;
  // }

  return (
    <div>
      <NavbarD/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
    </div>
  )
}

export default App;
