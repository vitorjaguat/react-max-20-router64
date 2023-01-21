import { json, redirect } from 'react-router-dom';
import EventForm from '../components/EventForm';

export default function NewEvent() {
  return <EventForm />;
}

export async function action({ request, params }) {
  const data = await request.formData();

  const eventData = {
    title: data.get('title'), //the arguments are the names of the inputs in that Form
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  };

  const response = await fetch('http://localhost:8080/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    //this error status is being sent by the backend if there are invalid input values
    return response;
  }

  if (!response.ok) {
    throw json({ message: 'Could not save event.' }, { status: 500 });
  }

  return redirect('/events');
}
