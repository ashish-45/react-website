import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Service from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Service} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch> */}
        <Home />
        <Service />
        <About />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
