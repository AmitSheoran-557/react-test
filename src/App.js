import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/home';
import ParamsCards from './components/ParamCards';
import About from './views/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about" element={ <About/> } />
          <Route path="/param" element={ <ParamsCards/> } />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
