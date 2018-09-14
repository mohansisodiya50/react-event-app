import React, { Component } from 'react';
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

class EventListItem extends Component {
	render() {
		const { event, onEventOpen, deleteEvent } = this.props;
		return (
			<div>
				<Segment.Group>
					<Segment>
						<Item.Group>
							<Item>
								<Item.Image size="tiny" circular src={event.hostPhotoURL} />
								<Item.Content>
									<Item.Header as="a">{event.title}</Item.Header>
									<Item.Description>
										Hosted by <a>{event.hostedBy}</a>
									</Item.Description>
								</Item.Content>
							</Item>
						</Item.Group>
					</Segment>
					<Segment>
						<span>
							<Icon name="clock" /> {event.date} |
							<Icon name="marker" /> {event.value}
						</span>
					</Segment>
					<Segment secondary>
						<List horizontal>
							{event.attendees && event.attendees.map(attendee => <EventListAttendee key={attendee.id} attendee={attendee} />)}
						</List>
					</Segment>
					<Segment clearing>
						<span>{event.description}</span>
						<Button as="a" color="teal" floated="right" content="View" onClick={onEventOpen(event)} />
						<Button as="a" color="red" floated="right" content="Delete" onClick={deleteEvent(event.id)} />
					</Segment>
				</Segment.Group>
			</div>
		)
	}
}

export default EventListItem;