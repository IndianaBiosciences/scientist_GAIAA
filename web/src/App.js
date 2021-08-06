import NavBar from './components/base/NavBar'
import Footer from './components/base/Footer'
import About from './components/About'
import Home from './components/Home'
import Data from './components/viewers/QueryData';
import Design from './components/process/Design';
import Select from './components/process/Select';
import Test from './components/process/Test';
import Status from './components/process/Status';
import Dev_Test from './components/Dev_Test'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="w-screen h-full">
        <div className="fixed w-screen">
          <NavBar />
        </div>
        <div className="w-auto h-auto pl-4 pt-28">
          <Switch>
            <Route exact path="/" component = { Home }/>
            <Route path="/about" component = { About }/>
            <Route path="/data" component = { Data }/>
            <Route path="/design" component = { Design }/>
            <Route path="/select" component = { Select }/>
            <Route path="/test" component = { Test }/>
            <Route path="/status" component = { Status }/>
            <Route path="/dev_test" component = { Dev_Test }/>
            <Route path=""
              render={() => <Redirect to="/" />}
            />
          </Switch>
        </div>
        <div className="w-screen fixed bottom-0">
          <Footer />
        </div>
      </div>
    </Router>  );
}

export default App;
