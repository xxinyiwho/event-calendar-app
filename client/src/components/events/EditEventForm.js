// REACT
import React, { Component } from 'react';

// EDIT FORM
class EditEventForm extends Component {

  // SET STATE OF TARGET EVENT
  state = {
    edit: {
      id: this.props.event.id,
      title: this.props.event.title,
      description: this.props.event.description,
      start_date: this.props.event.start_date,
      end_date: this.props.event.end_date
    }
  }

  // ASSIGN VALUE
  handleChange = (e) => {
    const newObject = Object.assign(this.state.edit)
    newObject[e.target.name] = e.target.value
    this.setState({
      edit: newObject
    })
  }

  // SUBMIT VALUE
  handleSubmit = (e) => {
    e.preventDefault()
    const { id, title, description, start_date, end_date } = this.state.edit
    this.props.editEvent(id, title, description, start_date, end_date);
  }

  // RENDER FORM
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="title"
          type="text"
          placeholder="Title..."
          value={this.state.edit.title}
          onChange={this.handleChange} />
        <input name="description"
          type="text"
          placeholder="Description..."
          value={this.state.edit.description}
          onChange={this.handleChange} />
        <input name="Start date"
          type="date"
          placeholder="Description..."
          value={this.state.edit.start_date}
          onChange={this.handleChange} />
        <input name="End date"
          type="text"
          placeholder="End date..."
          value={this.state.edit.end_date}
          onChange={this.handleChange} />
        <button>Update</button>
      </form>
    )
  }
}

export default EditEventForm;