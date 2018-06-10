<?php
/*
 * Plugin Name: Rockpool Blocks
 * Plugin URI: https://smallwins.co.uk
 * Description: Custom Gutenberg editor blocks for Rockpool. Good for creating drag-and-drop landing pages.
 * Author: Joshua Hackett
 * Author URI: https://smallwins.co.uk
 * Version: 1.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';



ob_start();
add_action('shutdown', function() {
    $final = '';
    // We'll need to get the number of ob levels we're in, so that we can iterate over each, collecting
    // that buffer's output into the final output.
    $levels = ob_get_level();

    for ($i = 0; $i < $levels; $i++) {
        $final .= ob_get_clean();
    }
    // Apply any filters to the final output
    echo apply_filters('final_output', $final);
}, 0);


add_filter('final_output', function($output) {
    $output = preg_replace('/<div class="container">\s*<\/div>/', '', $output);
		$output = preg_replace('/<div class="container"><p>\s*<\/p><\/div>/', '', $output);
		return $output;
});
