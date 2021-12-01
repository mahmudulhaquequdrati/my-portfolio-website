import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PortfolioDetails from "./pages/Home/Portfolio/PortfolioDetails/PortfolioDetails";
import HomeItems from "./pages/Home/HomeItems/HomeItems";
import Navigation from "./pages/Shared/navigation/Navigation";
import About from "./pages/Home/About/About";
import Blog from "./pages/Home/Blog/Blog";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <HomeItems />
          </Route>
          <Route path="/home">
            <HomeItems />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blogs">
            <Blog />
          </Route>
          <Route path="/portfolio/:nameId">
            <PortfolioDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
