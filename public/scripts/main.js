let React = require('react');
let ReactDOM = require('react-dom');
let WorkHistoryRow = require('./components/WorkHistoryRow');

let descriptions = [
	'As a software engineer on the Internal Tools team at Trello, I gather requirements and write software to help the company streamline and automate time consuming tasks.',
	'As an instructor at The Iron Yard I am responsible for educating students who wish to switch careers into software development. I instruct a new class of 10-20 students every four months and teach them technical skills necessary to excel as a junior font-end developer, such as HTML, CSS, and JavaScript (vanilla, jQuery, Backbone, React, Node). In addition to technical skills I teach useful developer tools and methodologies such as command line usage, Git/GitHub, agile methodologies and how to work effectively in a team.'
];

let app = (
	<div className="container">
		<h4>Work History</h4>
		<WorkHistoryRow
			title="Software Engineer"
			company="Trello"
			startDate="2016-06-01"
			description={descriptions[0]} />
		<WorkHistoryRow
			title="Frontend Engineering Instructor"
			company="The Iron Yard"
			startDate="2015-01-01"
			endDate="2016-05-24"
			description={descriptions[1]} />
	</div>
);

ReactDOM.render(app, document.getElementById('app'));