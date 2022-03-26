import { Route, Redirect, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import NewQuote from "./components/pages/NewQuote";
import NotFound from "./components/pages/NotFound";
import Quotes from "./components/pages/Quotes";
import QuoteDetail from "./components/pages/QuotesDetails";

function App() {
  return (
    <>
      <Layout>
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
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
