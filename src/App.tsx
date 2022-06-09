import React from 'react';
import dog from './dog.jpg';
import './App.css';
import Header from './components/Header';
import { AiFillGithub } from 'react-icons/ai';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={dog} className="image" alt='Responsive Image'/> {/* Replace it with irl photo */}
        <p className='textLarge'>
          Kairav Parekh
        </p>
        <p className='textSmall'>A minimalistic programmer</p>
        <a href='https://www.github.com/kpp16'> <AiFillGithub  className="icon" /></a>
      </header>
    </div>
  );
}

export default App;
