import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/EventList";

function HomePage(props) {
  return (
    <div>
      <EventList items={props.featured} />
    </div>
  );
}

//DATA IS PRE-RENDERED ON BUILD//
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featured: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
