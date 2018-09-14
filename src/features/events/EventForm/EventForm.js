import React, {Component} from 'react';
import {Button, Form, Segment} from 'semantic-ui-react';

const emptyEvent = {
	title: '',
	date: '',
	city: '',
	venue: '',
	hostedBy: ''
};

class EventForm extends Component {
	state = {
		event: emptyEvent
	};

	componentDidMount() {
		if(this.props.selectedEvent !== null) {
			this.setState({event: this.props.selectedEvent})
		}
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.selectedEvent !== this.props.selectedEvent) {
			this.setState({ event: nextProps.selectedEvent || emptyEvent })
		}
	}

	onCancel = (ok) => () => {
		this.props.onCancel(ok);
	};

	handleFormSubmit = (evt) => {
		evt.preventDefault();
		console.log('this.state.event.id ', this.state.event.id)
		if(this.state.event.id) {
			this.props.updateEvent(this.state.event)
		} else {
			this.props.createEvent(this.state.event)
		}
	};

	handleInputChange = (evt) => {
		const newEvent = this.state.event;
		newEvent[evt.target.name] = evt.target.value;
		this.setState({ event: newEvent });
	};

	render() {
		const { event } = this.state;
		return (
			<Segment>
				<Form onSubmit={this.handleFormSubmit}>
					<Form.Field>
						<label>Event Title</label>
						<input name='title' onChange={this.handleInputChange} value={event.title}  placeholder="First Title"/>
					</Form.Field>
					<Form.Field>
						<label>Event Date</label>
						<input type='date' name='date' onChange={this.handleInputChange} value={event.date} placeholder="Event Date"/>
					</Form.Field>
					<Form.Field>
						<label>City</label>
						<input name='city' onChange={this.handleInputChange} value={event.city} placeholder="City event is taking place"/>
					</Form.Field>
					<Form.Field>
						<label>Venue</label>
						<input name='venue' onChange={this.handleInputChange} value={event.venue} placeholder="Enter the Venue of the event"/>
					</Form.Field>
					<Form.Field>
						<label>Hosted By</label>
						<input name='hostedBy' onChange={this.handleInputChange} value={event.hostedBy} placeholder="Enter the name of person hosting"/>
					</Form.Field>
					<Button positive type="submit">
						Submit
					</Button>
					<Button type="button" onClick={this.onCancel('hello cancel!')}>Cancel</Button>
				</Form>
			</Segment>
		)
	}
}

export default EventForm;