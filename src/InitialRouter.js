import { BrowserRouter as Router } from "react-router-dom";
import TheRoutes from "./routes";

function InitialRouter() {
  return (
    <>
      <Router>
        <TheRoutes />
      </Router>
    </>
  );
}

export default InitialRouter;
