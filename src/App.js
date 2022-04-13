import React, { Suspense } from "react";

import { Route, Redirect, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";


const NewQuote = React.lazy(() => import("./components/pages/NewQuote")); // This is lazy loading.  These files will only be downloaded when they are needed.
const QuoteDetail = React.lazy(() =>
  import("./components/pages/QuotesDetails")
);
const NotFound = React.lazy(() => import("./components/pages/NotFound"));
const Quotes = React.lazy(() => import("./components/pages/Quotes")); 

function App() {
  return (
    <>
      <Layout>
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }
        >
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
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
