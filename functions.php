<?php

function anup_portfolio_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'html5', [ 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ] );
    add_theme_support( 'align-wide' );
    add_theme_support( 'responsive-embeds' );
    add_theme_support( 'wp-block-styles' );
    add_theme_support( 'editor-styles' );
    add_theme_support( 'block-templates' );

    add_theme_support( 'editor-color-palette', [
        [ 'name' => 'Dark BG',  'slug' => 'dark-bg',  'color' => '#080808' ],
        [ 'name' => 'Card BG',  'slug' => 'card-bg',  'color' => '#111111' ],
        [ 'name' => 'White',    'slug' => 'white',    'color' => '#ffffff' ],
        [ 'name' => 'Muted',    'slug' => 'muted',    'color' => '#777777' ],
        [ 'name' => 'Purple',   'slug' => 'purple',   'color' => '#8b5cf6' ],
        [ 'name' => 'Blue',     'slug' => 'blue',     'color' => '#3b82f6' ],
        [ 'name' => 'Pink',     'slug' => 'pink',     'color' => '#f472b6' ],
        [ 'name' => 'Cyan',     'slug' => 'cyan',     'color' => '#22d3ee' ],
        [ 'name' => 'Green',    'slug' => 'green',    'color' => '#34d399' ],
    ] );
}
add_action( 'after_setup_theme', 'anup_portfolio_setup' );

function anup_portfolio_enqueue() {
    wp_enqueue_style(
        'anup-google-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap',
        [],
        null
    );

    wp_enqueue_style(
        'anup-portfolio-main',
        get_template_directory_uri() . '/assets/css/main.css',
        [ 'anup-google-fonts' ],
        '1.1.0'
    );

    wp_enqueue_script(
        'anup-portfolio-main',
        get_template_directory_uri() . '/assets/js/main.js',
        [],
        '1.1.0',
        true
    );
}
add_action( 'wp_enqueue_scripts', 'anup_portfolio_enqueue' );

function anup_portfolio_pattern_categories() {
    register_block_pattern_category( 'anup-portfolio', [
        'label'       => __( 'Anup Portfolio', 'anup-portfolio' ),
        'description' => __( 'Portfolio section components.', 'anup-portfolio' ),
    ] );
}
add_action( 'init', 'anup_portfolio_pattern_categories' );

function anup_portfolio_remove_wp_bloat() {
    remove_action( 'wp_head', 'wp_generator' );
    remove_action( 'wp_head', 'wlwmanifest_link' );
    remove_action( 'wp_head', 'rsd_link' );
}
add_action( 'init', 'anup_portfolio_remove_wp_bloat' );
