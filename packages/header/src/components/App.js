import { Router } from "react-router-dom";

import Header from "./header/Header";
import { logger } from "@lerna-mono/common";

const App = ({ history }) => {
  logger.warn("header initiated");
  return (
    <Router history={history}>
      <Header />
    </Router>
  );
};

export default App;
