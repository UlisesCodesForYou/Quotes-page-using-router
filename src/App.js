import { Route, Redirect, Switch } from "react-router-dom";
import NewQuote from "./components/pages/NewQuote";
import Quotes from "./components/pages/Quotes";
import QuoteDetail from "./components/pages/QuotesDetails";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quote" />
        </Route>
        <Route path="/quote" exact>
          <Quotes />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
      </Switch>
    </>
  );
}

export default App;
