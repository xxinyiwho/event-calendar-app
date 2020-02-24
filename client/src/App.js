import React, { Component } from 'react';
import './App.css';
import Header from './components/events/Header';
import EventsContainer from './components/events/EventsContainer';
import Calendar from './components/calendar/index';
// import EventsList from './components/calendar/EventsList'

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