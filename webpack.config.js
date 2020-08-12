/**
 * External dependencies
 */
const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = {
	...defaultConfig,
	entry: {
		index: path.resolve( __dirname, 'client/index.js' ),
	},
	resolve: {
		...defaultConfig.resolve,
		modules: [ path.join( __dirname, 'client' ), 'node_modules' ],
	},
};
