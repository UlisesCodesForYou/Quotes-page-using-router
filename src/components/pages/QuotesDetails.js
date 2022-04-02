// import classes from "*.module.css";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../comments/Comments";

import HighlightedQuote from "../quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Ulises",
    text: "This is a book about a book",
  },
  {
    id: "q2",
    author: "Feddie",
    text:
      "This is a book about a book that was written about another book of a book.",
  },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
