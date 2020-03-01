// REACT
import React from 'react';

// NEW EVENT FORM (using hooks made it easier than normal form like I did in edit event form)
const NewEventForm = ({ onNewEvent = f => f }) => {
  let title, description, start_date, end_date

  // CALL FUNCTION WHEN SUBMIT
  const submit = e => {
    e.preventDefault()
    onNewEvent(title.value, description.value, start_date.value, end_date.value)
    title.value = ''
    description.value = ''
    start_date.value = ''
    end_date.value = ''
  }

  // RENDER NEW EVENT FORM
  return (
    <div className='event-form' id='event-form'>
      <form className='new-event-submit' onSubmit={submit}>
        <div className="input-div">
          <label>Event Name</label>
          <input className='title' ref={input => title = input}
            type="text"
            placeholder="Title..." required />
          <label>Description</label>
          <input className='description' ref={input => description = input}
            type="text"
            placeholder="Description..." required />
          <label>Start</label>
          <input className='start' ref={input => start_date = input}
            type="date" required />
          <label>End</label>
          <input className='end' ref={input => end_date = input}
            type="date" required />
        </div>
        <div className="submit-div">
          <button className="event-submit">Add</button>
        </div>
      </form>
    </div>
  )
}

export default NewEventForm;
