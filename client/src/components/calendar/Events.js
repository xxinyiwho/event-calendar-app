// import moment from 'moment'
// import Event from '../events/Event'
import React from 'react'
import axios from 'axios'

export default class EventsList extends React.Component {

  state = {
    eventos: []
  };

  componentDidMount() {

    const formats = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    };

    axios.get('api/v1/events.json', { formats }).then(response => {
      this.setState({ eventos: response.data });
    })
  }



  render() {
    return (
      <ul>
        {this.state.eventos.map(evento => <li key={evento.id}>{evento.title} {evento.description}</li>)}
      </ul>
    )
  }
}

// export const Events = [

//   {
//     title: "Have a great week :)",
//     start: "2020-02-24",
//     end: "2020-02-29"
//   },
//   {
//     title: <EventsList title />
//   }
// ]