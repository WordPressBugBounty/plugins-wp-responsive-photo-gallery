<?php
/**
 * Native Gutenberg blocks for Masonry Tiled Gallery & Photo Gallery Slideshow.
 *
 * Registers two server-rendered blocks that reuse the existing shortcode
 * renderers, so block output always matches shortcode output (Legacy/Modern
 * engine selection included). Neither block has any attributes: both
 * shortcodes always render the single global gallery configured under the
 * plugin's admin menu, so there's nothing per-instance to configure.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register both blocks via their block.json metadata.
 */
function wprpg_register_blocks() {

	// register_block_type() reading a block.json directory needs WP 5.8+.
	global $wp_version;
	if ( ! function_exists( 'register_block_type' ) || version_compare( $wp_version, '5.8', '<' ) ) {
		return;
	}

	$blocks_dir = plugin_dir_path( __FILE__ );

	if ( file_exists( $blocks_dir . 'slideshow/block.json' ) ) {
		register_block_type(
			$blocks_dir . 'slideshow',
			array(
				'render_callback' => 'wprpg_render_slideshow_block',
			)
		);
	}

	if ( file_exists( $blocks_dir . 'masonry-gallery/block.json' ) ) {
		register_block_type(
			$blocks_dir . 'masonry-gallery',
			array(
				'render_callback' => 'wprpg_render_masonry_gallery_block',
			)
		);
	}
}
add_action( 'init', 'wprpg_register_blocks' );

/**
 * Render callback for the Photo Gallery Slideshow block.
 * Reuses the exact same renderer the shortcode uses.
 */
function wprpg_render_slideshow_block( $attributes, $content, $block ) {
	return print_my_responsive_photo_gallery_func();
}

/**
 * Render callback for the Masonry Tiled Gallery block.
 * Reuses the exact same renderer the shortcode uses.
 */
function wprpg_render_masonry_gallery_block( $attributes, $content, $block ) {
	return rjg_print_masonry_gallery_plus_lightbox_func( array() );
}
