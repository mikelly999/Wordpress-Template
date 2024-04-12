<?php

// custom.css
function child_theme_enqueue_styles() {
    // Enqueue parent theme's stylesheet
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
    // Enqueue child theme's custom stylesheet
    wp_enqueue_style('child-custom-style', get_stylesheet_directory_uri() . '/custom.css', array('parent-style'));
}
add_action('wp_enqueue_scripts', 'child_theme_enqueue_styles');

// custom.js
function enqueue_custom_scripts() {
    // Enqueue custom JavaScript file
    wp_enqueue_script('custom-script', get_stylesheet_directory_uri() . '/custom.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'enqueue_custom_scripts');
