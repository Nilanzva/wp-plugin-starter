/**
 * External dependencies
 */
import { Component } from '@wordpress/element';

class HelloWorld extends Component {
	render() {
		return (
			<div className="woocommerce__section">
				Hello, world.
				{ this.props.children || 'Hello, world.' }
			</div>
		);
	}
}

export { HelloWorld };
