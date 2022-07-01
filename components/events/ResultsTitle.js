import Btn from "../ui/Btn";
import classes from "./results-title.module.css";

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Btn link="/events">Show all events</Btn>
    </section>
  );
}

export default ResultsTitle;
