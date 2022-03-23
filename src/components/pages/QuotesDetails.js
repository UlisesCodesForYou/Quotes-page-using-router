import { useParams, Route } from "react-router-dom";
import Comments from "../comments/Comments";

const QuoteDetail = () => {
  const params = useParams();
  console.log(params.quoteId);

  return (
    <>
      <h1> Tis detailth of tis quote</h1>
      <p>{params.quoteId}</p>
      <p>Share your comments below!</p>

      <Route path={`/quotes${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;

// I need to extract the quote id from the url, log it

// Import the comments component. I have to use a nested route. I have to make it display only when /quotesId/comments is queued
