import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PageIndex from './Pages/PageIndex/PageIndex';
import Page404 from './Pages/Page404/Page404';

render(
	<Router>
		<div>
			<Switch>
				<Route exact path="/" component={PageIndex} />
				<Route component={Page404} />
			</Switch>
		</div>
	</Router>,
document.getElementById('root')
);