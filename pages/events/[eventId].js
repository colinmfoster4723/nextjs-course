import { Fragment } from "react";
import { getEventById, getAllEvents } from "../../helpers/api-util";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/ErrorAlert";

function EventDetailPage(props) {
  const event = props.selectedEvent;
  //get event from props, pre-rendered in getStaticProps

  // if (!event) {
  //   return (
  //     <ErrorAlert>
  //       <p>No event found! 🙃</p>
  //     </ErrorAlert>
  //   );
  // }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

////DATA NEEDS TO BE CRAWLABLE BY SEARCH ENGINES AS ALL DATA FOR THE EVENT RESIDES IN THIS PAGE///
// dont need server-side props as data doesnt change all the time/

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  //add this condition to avoid request getting kicked to [..slug]
  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}
///TELL NEXT JS WHICH PATHS TO EXPECT FROM DYNAMIC PAGE///
export async function getStaticPaths() {
  const events = await getAllEvents();

  const paths = events.map((event) => ({
    params: { eventId: event.id },
  }));
  return {
    paths: paths,
    fallback: "blocking",
    //anything thats not a path will recieve a 404//
  };
}

export default EventDetailPage;
