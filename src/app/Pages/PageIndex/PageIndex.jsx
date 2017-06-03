import React, { Component } from 'react';
import { IonBody, IonNavBar, IonNavBackButton } from 'reactionic';

class PageIndex extends Component {
	render() {
		return 	<div>
					<IonBody location={this.props.location} >
						<IonNavBar customClasses="bar-dark"
								   title="My title"
						/>
					</IonBody>
				</div>
	};
};

export default PageIndex;