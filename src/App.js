import './App.css';
import logo from './logo.svg';
import Create from './components/Create';

function App() {
  return (
    <div className="main">
      <h2 className="main-header">React Crud Operations</h2>
      <img src={logo} className="main-logo" alt="logo" />
      <div>
        <Create />
      </div>
    </div>
  );
}

export default App;
