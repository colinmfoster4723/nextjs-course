//FILTER FIREBASE FETCH DATA///

export async function getAllEvents() {
  const response = await fetch(
    `https://nextjs-course-74d48-default-rtdb.firebaseio.com/events.json`
  );

  const data = await response.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
      //...push all key/values for every key in data
    });
  }

  return events;
  //resolve promise;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}
