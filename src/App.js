import logo from './logo.svg';
import './App.css';
import About from "./pages/about";
import Main from "./pages/main";
import Shoes from "./pages/shoes";
import Shoes_detail from "./pages/shoes_detail";
import {
    BrowserRouter as Router, Link,
    Switch,
    useLocation,
    Route, Redirect
} from "react-router-dom";


function App() {
  return (
    <div className="App">

                      <Router>
                          <Switch>
                            <Link exact path = "/" component={Main} />
                              <Link exact path = "/about" component={About} />
                                    <Link exact path = "/shoes" component={Shoes} />
                                                                  <Route exact path = "/shoes/:id" component={Shoes_detail} />





                          </Switch>
                      </Router>
    </div>
  );
}

export default App;
