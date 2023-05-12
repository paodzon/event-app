export const getAllEvents = async () => {
  const response = await fetch(
    "https://samplenext-59345-default-rtdb.asia-southeast1.firebasedatabase.app/events.json"
  );
  const data = await response.json();
  const eventList = [];

  for (let x in data) {
    eventList.push({ ...data[x], id: x });
  }
  return eventList;
};


export const getFeaturedEvents = async () => {
  const eventList = await getAllEvents();
  return eventList.filter((event) => event.isFeatured);
}

export const getEventById = async(id) =>{
  const eventList = await getAllEvents();
  return eventList.find((event) => event.id == id);
}

export const getFilteredEvents = async (dateFilter) => {
  const { year, month } = dateFilter;
  const eventList = await getAllEvents();
  let filteredEvents = eventList.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;

}