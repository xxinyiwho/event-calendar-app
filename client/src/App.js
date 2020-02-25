import React, { Component } from 'react';
import Header from './components/events/Header';
import EventsContainer from './components/events/EventsContainer';
import Calendar from './components/calendar/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <EventsContainer />
        <Calendar />
      </div>
    );
  }
}

export default App;