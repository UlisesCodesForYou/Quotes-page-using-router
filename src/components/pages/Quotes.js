import QuoteList from "../quotes/QuoteList";

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
      "This is a book about a book that was written aboot another book of a book.",
  },
];

const Quotes = (props) => {
  return (
    <>
      <QuoteList quotes={DUMMY_QUOTES} />
    </>
  );
};

export default Quotes;
