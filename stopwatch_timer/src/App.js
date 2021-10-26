import { Route, Switch, useLocation } from "react-router";
import Home from "./components/pages/Home/Home";
import Stopwatch_page from "./components/pages/Stopwatch_page/Stopwatch_page";
import Timer_page from "./components/pages/Timer_page/Timer_page";
import Error404 from "./components/pages/Error404/Error404";
import "./css/normalize.css";
import "./css/main.css";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route exact path="/stopwatch" component={Stopwatch_page} />
          <Route exact path="/timer" component={Timer_page} />
          <Route path="*" component={Error404} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
