import { json, useRouteLoaderData, redirect } from 'react-router-dom';
import EventItem from '../components/EventItem';

export default function EventDetail() {
  const data = useRouteLoaderData('event-detail');

  return (
    <>
      <EventItem event={data.event} />
    </>
  );
}

export async function loader({ request, params }) {
  //request.url can access query parameters, for example;
  const id = params.eventId;

  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could now fetch details for selected event.' },
      { status: 500 }
    );
  } else {
    return response;
  }
}

export async function action({ params, request }) {
  const eventId = params.eventId;

  const response = await fetch('http://localhost:8080/events' + eventId, {
    // method: 'DELETE' // by hardcoding like this, you don't need to pass the method as an argument of useSubmit() (in EventItem.js)
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: 'Could not delete event.' }, { status: 500 });
  }
  return redirect('/events');
}
