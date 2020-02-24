import React from 'react';

const NewEventForm = ({ onNewEvent = f => f }) => {
  let title, description, start, end

  const submit = e => {
    e.preventDefault()
    onNewEvent(title.value, description.value, start.value, end.value)
    title.value = ''
    description.value = ''
    start.value = ''
    end.value = ''
  }

  return (
    <div className='event-form' id='event-form'>
      <form onSubmit={submit}>
        <div className="input-div">
          <label>Event Name</label>
          <input ref={input => title = input}
            type="text"
            placeholder="Title..." required />
          <label>Description</label>
          <input ref={input => description = input}
            type="text"
            placeholder="Description..." required />
          <label>Start</label>
          <input ref={input => start = input}
            type="date" required />
          <label>End</label>
          <input ref={input => end = input}
            type="date" required />
        </div>
        <div className="submit-div">
          <button className="new-event-submit-btn">Add</button>
        </div>
      </form>
    </div>
  )
}

export default NewEventForm;