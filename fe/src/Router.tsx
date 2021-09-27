import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home/Home';

export default function AppRouter() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}
