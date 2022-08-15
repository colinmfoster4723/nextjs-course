import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/EventList";
import NewsletterRegistration from "../components/input/newsletter-registration";

function HomePage(props) {
  if (!props.events[1]) return <div>...loading events... </div>;
  return (
    <div>
      <NewsletterRegistration />
      <EventList items={props.events} />
    </div>
  );
}

//DATA IS PRE-RENDERED ON BUILD//
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
    //every 30min re-gen page w/ new request
  };
}

export default HomePage;
