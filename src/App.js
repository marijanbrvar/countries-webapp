import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import CountryList from './pages/CountryList';
import Country from './pages/Country';

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/:continent" component={CountryList} />
          <Route exact path="/:continent/:country" component={Country} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
