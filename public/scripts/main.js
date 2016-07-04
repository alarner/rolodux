let React = require('react');
let ReactDOM = require('react-dom');
let { Router, Route, IndexRoute, browserHistory } = require('react-router');

let App = require('./components/App');
let Home = require('./components/pages/Home');
let Profile = require('./components/pages/Profile');

let app = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="profile/:slug/:id" component={Profile} />
		</Route>
	</Router>
);

ReactDOM.render(app, document.getElementById('app'));