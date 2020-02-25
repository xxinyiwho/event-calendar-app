// REACT
import React from 'react';

// RENDER EVENTS
const Event = ({ event, onRemoveEvent = f => f, editingEvent = f => f }) =>
  <div className="all-event" key={event.id}>
    <h4>{event.title}</h4>
    <p><label>About: {event.description}</label></p>
    <p><label>From: {event.start_date}</label></p>
    <p><label>To: {event.end_date}</label></p>
    <button className="delete-btn" onClick={() => onRemoveEvent(event.id)}>Delete</button>
    <button className="edit-btn" onClick={() => editingEvent(event.id)}>Edit</button>
    <hr />
  </div>

export default Event;