import './App.css';
import logo from './logo.svg';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <img src={logo} className="main-logo" alt="logo" />
        <div>
          <Route exact path='/create' component={Create} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/read' component={Read} />
        </div>
        <div>
          <Route exact path='/update' component={Update} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
