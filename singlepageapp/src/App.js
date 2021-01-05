import 'bootstrap/dist/css/bootstrap.css'
import HeaderComponent from './components/HeaderComponent.js'
import { BrowserRouter as Router ,Switch , Route } from 'react-router-dom'
import HomeComponent from './components/HomeComponent.js';
import AboutComponent from './components/AboutComponent.js';
import ServicesComponent from './components/ServicesComponent.js';
import ContactComponent from './components/ContactComponent.js';

function App() {
  return (
    <div>
      <HeaderComponent/>
      <Router>
        <Switch>
          <Route path='/' exact component={HomeComponent} />
          <Route path='/about' component={AboutComponent} />
          <Route path='/services' component={ServicesComponent} />
          <Route path='/contact' component={ContactComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
