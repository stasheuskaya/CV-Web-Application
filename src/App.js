import './App.css';
import './components/Portfolio/portfolio.css';
import '../src/assets/styles/reset_Stylesheet.css';
import Home from './pages/Home/home';
import Inner from './pages/Inner/inner';
import { Routes, Route } from "react-router-dom";


export default function App () {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/inner" element={<Inner />}>
          </Route>
        </Routes>
      </>
    </div>
  );
}
