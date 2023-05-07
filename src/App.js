import './bootstrap-grid.min.css'
import './App.css';
import { About } from "./layout/About"
import { TwoLetters } from "./layout/TwoLetters"
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { RandomItem } from './layout/Syllable';

function App() {
  
  return (
    
    <>
      <Router>
        <div className='main'>
          <div className='about'>
            <About />
          </div>
          <div className='routes'>
            <Routes>
              <Route exact path="/" element={<TwoLetters />} />
              <Route path="/RandomItem" element={<RandomItem />} />

              
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
