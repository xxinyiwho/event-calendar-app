import React, { Component } from 'react';
import axios from 'axios';
import Event from './Event';
import EditEventForm from './EditEventForm';

class EventsContainer extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     events: [],
  //     editingEventId: null
  //   }
  //   this.addNewEvent = this.addNewEvent.bind(this)
  //   this.removeEvent = this.removeEvent.bind(this)
  //   this.editingEvent = this.editingEvent.bind(this)
  //   this.editEvent = this.editEvent.bind(this)
  // }
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
        console.log(response)
        this.setState({
          events: response.data
        })
      })
      .catch(error => console.log(error))
  }

  addNewEvent(title, description, start_date, end_date) {
    axios.post('/api/v1/events', { event: { title, description, start_date, end_date } })
      .then(response => {
        console.log(response)
        const events = [...this.state.events, response.data]
        this.setState({ events })
      })
      .catch(error => { alert("Please try again") })
  }

  removeEvent(id) {
    axios.delete('/api/v1/events/' + id)
      .then(response => {
        const events = this.state.events.filter(
          event => event.id !== id
        )
        this.setState({ events })
      })
      .catch(error => { alert("Please try again") })
  }


  editEvent(id, title, description, start_date, end_date) {
    axios.put('/api/v1/events/' + id, {
      event: {
        title,
        description,
        start_date,
        end_date
      }
    })
      .then(response => {
        console.log(response);
        const events = this.state.events;
        events[id - 1] = { id, title, description, start_date, end_date }
        this.setState(() => ({
          events,
          editingEventId: null
        }))
      })
      .catch(error => console.log(error));
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
      </div>

    )
  }
}

export default EventsContainer;