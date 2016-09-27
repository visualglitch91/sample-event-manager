import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const EventList = ({ events }) => (
	<div className="event-map">
		<h1>Event List</h1>
	</div>
);

EventList.propTypes =
{
	events: PropTypes.array.isRequired
};

export default EventList;