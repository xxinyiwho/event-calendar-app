// REACT
import React, { Component } from 'react'
import axios from 'axios'

import Event from './Event'
import EditEventForm from './EditEventForm'
import NewEventForm from './NewEventForm'

// EVENTS CRUD COMPONENT
class EventsContainer extends Component {

  //SET DEFAULT STATE AND BIND FUNCTION
  constructor(props) {

    super(props)
    this.state = {
      events: [],
      editingEventId: null
    }

    this.addNewEvent = this.addNewEvent.bind(this)
    this.removeEvent = this.removeEvent.bind(this)
    this.editingEvent = this.editingEvent.bind(this)
    this.editEvent = this.editEvent.bind(this)
  }

  // DATA FETCHED AND FORMAT JSON
  componentDidMount() {
    const formats = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    };

    axios.get('api/v1/events.json', { formats })
      .then(response => {
        const events = response.data
        this.setState({
          events
        })
      })
      .catch(error => alert(error.response))
  }


  // CREATE
  addNewEvent = (title, description, start_date, end_date) => {
    axios.post('/api/v1/events', { event: { title, description, start_date, end_date } })
      .then(response => {
        const events = [...this.state.events, response.data]
        this.setState({ events })
      })
      .catch(error => { alert("Please try again") })
  }

  // DELETE
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

  // UPDATE
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

        const events = newList
        this.setState({
          events,
          editingEventId: null
        })
      })
      .catch(error => alert("Please try again"));
  }

  // RENDER ALL EVENTS
  render() {
    return (

      <div className="events-container">
        <div className="events-card">
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
        </div>
        <br />
        <NewEventForm onNewEvent={this.addNewEvent} />
        <br />
      </div>

    )
  }
}

export default EventsContainer;