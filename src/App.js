import React from 'react';
import { Link} from 'react-router-dom';
import './App.css';
import Page2 from './components/Page2.js';

class App extends React.Component {
  render() {
      return ( 
          <div>
              <h1>home</h1>
              <Link to="/page2">跳转Page2</Link>
             
          </div> 
      );
  }
}

export default App;
