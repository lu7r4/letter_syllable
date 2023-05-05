import './App.css';
import {Header} from './layout/Header'
import { About } from "./layout/About"
import { Dashboard } from "./layout/Dashboard"
import { TwoLetters } from "./layout/TwoLetters"
import { ThreeLetters } from "./layout/ThreeLetters"
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Test } from './layout/Test';
import { RandomItem } from './layout/Test2';

function App() {
  
  return (
    
    <>
      <Router>
        <Header/>
        <div className='main'>
          <div className='aboutt'>
            <About />
          </div>
          <div className='routes'>
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/TwoLetters" element={<TwoLetters />} />
              <Route path="/ThreeLetters" element={<ThreeLetters />} />
              <Route path="/Test" element={<Test />} />
              <Route path="/RandomItem" element={<RandomItem />} />

              
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
