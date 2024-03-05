
import './App.css';
import About from './components/About';
import Backgorund from './components/Background';
import Contact from './components/Contact';
import Home from './components/Home';
import Nav from './components/Nav';
import Services from './components/Services';


function App() {
  return (
    <div className="App">
      <Nav />
      <Backgorund />
      <Home />
      <About />
       <Services />
      <Contact />
    </div>
  );
}

export default App;
