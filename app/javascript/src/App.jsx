import React, { useEffect } from "react";
import { initializeLogger } from "common/logger";
import { logger } from "common/logger";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Logger from "js-logger";

const App = () => {
  useEffect(() => {
    /*eslint no-undef: "off"*/
    initializeLogger();
    Logger.info("Log from js-logger");
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <div>Home</div>} />
        <Route exact path="/about" render={() => <div>About new things</div>} />
      </Switch>
    </Router>
  );
};

export default App;
