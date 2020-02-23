import React from 'react';

const Event = ({ event, onRemoveEvent = f => f, editingEvent = f => f }) =>
  <div className="all-event" key={event.id}>
    <h4>{event.title}</h4>
    <p>{event.description}</p>
    <p>{event.start_date}</p>
    <p>{event.end_date}</p>
    <button className="delete-btn" onClick={() => onRemoveEvent(event.id)}>Delete</button>
    <button className="edit-btn" onClick={() => editingEvent(event.id)}>Edit</button>
    <hr />
  </div>

export default Event;