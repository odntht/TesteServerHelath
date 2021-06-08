import Login from './../Login/login';
import Dashboard from './../Dashboard/dashboard';
import Manager from './../Manager/manager';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/manager" component={Manager} />
    </Router>
  );
}

export default App;
