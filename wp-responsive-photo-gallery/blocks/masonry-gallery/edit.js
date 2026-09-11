( function ( wp ) {
	'use strict';

	var registerBlockType = wp.blocks.registerBlockType;
	var el = wp.element.createElement;
	var useBlockProps = wp.blockEditor.useBlockProps;
	var __ = wp.i18n.__;

	registerBlockType( 'i13-rpg/masonry-gallery', {
		edit: function () {
			return el(
				'div',
				useBlockProps( { className: 'i13-rpg-block-preview' } ),
				el( 'span', { className: 'i13-rpg-block-preview__icon dashicons dashicons-screenoptions' } ),
				el(
					'div',
					{ className: 'i13-rpg-block-preview__body' },
					el( 'strong', {}, __( 'Masonry Tiled Gallery', 'wp-responsive-photo-gallery' ) ),
					el(
						'span',
						{ className: 'i13-rpg-block-preview__meta' },
						__( 'Renders on the front end. Manage media and settings from the plugin\u2019s admin menu.', 'wp-responsive-photo-gallery' )
					)
				)
			);
		},
		save: function () {
			// Dynamic block — rendered server-side via render.php.
			return null;
		},
	} );
} )( window.wp );
