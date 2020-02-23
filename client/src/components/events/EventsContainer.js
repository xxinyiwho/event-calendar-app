import React, { Component } from 'react';
import axios from 'axios';
import Event from './Event';
import EditEventForm from './EditEventForm';
import NewEventForm from './NewEventForm';

class EventsContainer extends Component {

  state = {
    events: [],
    editingEventId: null
  }

  handleSort(data) {
    data.sort((event_1, event_2) => (event_1.id > event_2.id) ? 1 : -1)
    return data
  }

  componentDidMount() {
    const formats = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    };

    axios.get('api/v1/events.json', { formats })
      .then(response => {
        const events = this.handleSort(response.data)
        this.setState({
          events
        })
      })
      .catch(error => alert(error.response))
  }

  //CREATE
  addNewEvent = (title, description, start_date, end_date) => {
    axios.post('/api/v1/events', { event: { title, description, start_date, end_date } })
      .then(response => {
        const events = [...this.state.events, response.data]
        this.setState({ events })
      })
      .catch(error => { alert("Please try again") })
  }

  //DELETE
  removeEvent = (id) => {
    axios.delete('/api/v1/events/' + id)
      .then(response => {
        const events = this.state.events.filter(
          event => event.id !== id
        )
        this.setState({ events })
      })
      .catch(error => console.log(error.response))
  }

  //UPDATE
  editingEvent = (id) => {
    this.setState({
      editingEventId: id
    })
  }

  editEvent = (id, title, description, start_date, end_date) => {
    axios.put('/api/v1/events/' + id, {
      event: {
        title,
        description,
        start_date,
        end_date
      }
    })
      .then(response => {
        const updatedEvent = response.data
        const newList = this.state.events.filter((event) => event.id !== updatedEvent.id)
        newList.push(updatedEvent)

        const events = this.handleSort(newList)
        this.setState({
          events,
          editingEventId: null
        })
      })
      .catch(error => alert("Please try again"));
  }

  render() {
    return (

      <div className="events-container">
        {this.state.events.map((event) => {
          if (this.state.editingEventId === event.id) {
            return (<EditEventForm
              event={event}
              key={event.id}
              editEvent={this.editEvent}
            />)
          } else {
            return (
              <Event
                event={event}
                key={event.id}
                onRemoveEvent={this.removeEvent}
                editingEvent={this.editingEvent}
              />
            )
          }
        })
        }
        <br />
        <NewEventForm onNewEvent={this.addNewEvent} />
        <br />
      </div>

    )
  }
}

export default EventsContainer;