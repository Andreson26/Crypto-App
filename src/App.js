import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavBar from './components/header/NavBar/NavBar';
//import Coin from './pages/Coin/Coin';
import Portfolio from './pages/Portfolio/Portfolio';
import Coins from './pages/Coins/Coins';
import Coin from './pages/Coin/Coin'
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme/Theme';
import  './App.css';



class App extends Component {
  state={
    theme: 'dark',
    dropdown: false,
  }

  handleToggleTheme = () => {
    const { theme } = this.state
    if(theme === 'dark') {
      this.setState({theme: 'light'})
    }else {
      this.setState({theme: 'dark'})
    }
  }

  handleToggleDropdown = () => {
    if(this.state.dropdown === false ){
      this.setState({dropdown: true}) 
        
      }else {
        this.setState({dropdown: false})
      }  
  }
  
  render() {
    const {dropdown, theme} = this.state
    return (
      <ThemeProvider theme={theme==='dark' ? darkTheme : lightTheme}>
        <div className='App'>
        
          <Router>

            <NavBar
              dropdown={dropdown}
              handleToggleTheme={this.handleToggleTheme}
              handleToggleDropdown={this.handleToggleDropdown}
            />
          
            <Switch>
              <Route  path="/coins" component={Coins} />
              <Route  path="/portfolio" component={Portfolio} />
              <Route path="/:coinId" component={Coin} />
            </Switch>
        
          
          </Router>
        
        
        </div>
      </ThemeProvider>
      
    );
  }
  
}

export default App;
