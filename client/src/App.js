import React, { Component } from 'react';
import './App.css';
import EventsContainer from './components/events/EventsContainer';
import Header from './components/events/Header';
import EditEventForm from './components/events/EditEventForm';
import Calendar from './components/calendar/index';
import EventsList from './components/calendar/Events'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <EventsContainer />
        <Calendar />
        {/* <EventsList /> */}
      </div>
    );
  }
}

export default App;