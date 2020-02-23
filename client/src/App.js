import React, { Component } from 'react';
import './App.css';
import EventsContainer from './components/events/EventsContainer';
import Header from './components/events/Header';
import NewEventForm from './components/events/NewEventForm';
import EditEventForm from './components/events/EditEventForm';
import Calendar from './components/calendar/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NewEventForm onNewEvent={this.addNewEvent} />
        <EventsContainer />
        <Calendar />
      </div>
    );
  }
}

export default App;