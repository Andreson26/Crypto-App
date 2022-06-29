import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './components/header/Header';
import Coin from './pages/Coin/Coin';
import Portfolio from './pages/Portfolio/Portfolio';
import Homepage from './pages/HomePage/HomePage';
import './App.css';




function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />

        <Switch>
          <Route  path="/homepage" component={Homepage} />
          <Route  path="/portfolio" component={Portfolio} />
          <Route path="/:coinId" component={Coin} />
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
