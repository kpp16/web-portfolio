import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import 'bootstrap/dist/css/bootstrap.css';
import {
  TransitionGroup,
  CSSTransition,
} from 'react-transition-group';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const IDX = () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="my-node" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>    
  );
}

const Root = () => <BrowserRouter><IDX /></BrowserRouter>;

root.render(
  <Root />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
