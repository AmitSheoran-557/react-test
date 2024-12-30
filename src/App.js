import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/home';
import ParamsCards from './components/ParamCards';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/param" element={ <ParamsCards/> } />
          
      </Routes>
    </BrowserRouter>
  
    </div>
  );
}

export default App;
