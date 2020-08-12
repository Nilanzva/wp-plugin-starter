/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import './index.scss';
import { HelloWorld } from 'hello-world';

const ExamplePage = () => <HelloWorld>This is example page!</HelloWorld>;

addFilter(
	'woocommerce_admin_pages_list',
	'woocommerce-extension',
	( pages ) => {
		pages.push( {
			container: ExamplePage,
			path: '/example',
			wpOpenMenu: 'toplevel_page_wc-admin-path--analytics-revenue',
			breadcrumbs: [
				[ '/example', __( 'Example', 'woocommerce-admin' ) ],
			],
		} );

		return pages;
	}
);
