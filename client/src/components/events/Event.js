// REACT
import React from 'react';

// RENDER EVENTS
const Event = ({ event, onRemoveEvent = f => f, editingEvent = f => f }) =>
  <div className="event-card" key={event.id}>
    <h4 className='title'>{event.title}</h4>
    <p className='des'><label>About: {event.description}</label></p>
    <p className='from'><label>From: {event.start_date}</label></p>
    <p className='to'><label>To: {event.end_date}</label></p>
    <div className="event-btn">
      <button className="delete-btn" onClick={() => onRemoveEvent(event.id)}>Delete</button>
      <button className="edit-btn" onClick={() => editingEvent(event.id)}>Edit</button>
    </div >
    <hr />
  </div >

export default Event;