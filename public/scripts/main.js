let React = require('react');
let ReactDOM = require('react-dom');
let { Router, Route, IndexRoute, browserHistory } = require('react-router');

let App = require('./components/App');
let Home = require('./components/pages/Home');
let Profile = require('./components/pages/Profile');
let Messages = require('./components/pages/Messages');
let Edit = require('./components/pages/Edit');
let Connections = require('./components/pages/Connections');

let app = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="profile/:slug/:id" component={Profile} />
			<Route path="messages" component={Messages} />
			<Route path="edit" component={Edit} />
			<Route path="connections" component={Connections} />
		</Route>
	</Router>
);

ReactDOM.render(app, document.getElementById('app'));