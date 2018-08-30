import React, {Component} from 'react';
import {Item, List} from 'semantic-ui-react';

class EventListAttendee extends Component {
	render() {
		return (
			<List.Item>
				<Item.Image as="a" size="mini" circular src={this.props.attendee.photoURL} />
			</List.Item>
		)
	}
}

export default EventListAttendee;