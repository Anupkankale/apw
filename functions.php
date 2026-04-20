<?php

function anup_portfolio_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'html5', [ 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ] );
    add_theme_support( 'align-wide' );
    add_theme_support( 'responsive-embeds' );
    add_theme_support( 'wp-block-styles' );
    add_theme_support( 'editor-styles' );
    add_theme_support( 'custom-logo', [
        'height'      => 60,
        'width'       => 200,
        'flex-height' => true,
        'flex-width'  => true,
    ] );

    register_nav_menus( [
        'primary' => __( 'Primary Menu', 'anup-portfolio' ),
    ] );

    add_theme_support( 'editor-color-palette', [
        [ 'name' => __( 'Dark BG', 'anup-portfolio' ),    'slug' => 'dark-bg',    'color' => '#0d0d0d' ],
        [ 'name' => __( 'Card BG', 'anup-portfolio' ),    'slug' => 'card-bg',    'color' => '#161616' ],
        [ 'name' => __( 'White', 'anup-portfolio' ),      'slug' => 'white',      'color' => '#ffffff' ],
        [ 'name' => __( 'Muted', 'anup-portfolio' ),      'slug' => 'muted',      'color' => '#888888' ],
        [ 'name' => __( 'Purple', 'anup-portfolio' ),     'slug' => 'purple',     'color' => '#7c3aed' ],
        [ 'name' => __( 'Blue', 'anup-portfolio' ),       'slug' => 'blue',       'color' => '#2563eb' ],
        [ 'name' => __( 'Pink', 'anup-portfolio' ),       'slug' => 'pink',       'color' => '#ec4899' ],
        [ 'name' => __( 'Cyan', 'anup-portfolio' ),       'slug' => 'cyan',       'color' => '#06b6d4' ],
        [ 'name' => __( 'Green', 'anup-portfolio' ),      'slug' => 'green',      'color' => '#10b981' ],
    ] );
}
add_action( 'after_setup_theme', 'anup_portfolio_setup' );

function anup_portfolio_enqueue() {
    wp_enqueue_style(
        'anup-google-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
        [],
        null
    );

    wp_enqueue_style(
        'anup-portfolio-main',
        get_template_directory_uri() . '/assets/css/main.css',
        [ 'anup-google-fonts' ],
        '1.0.0'
    );

    wp_enqueue_script(
        'anup-portfolio-main',
        get_template_directory_uri() . '/assets/js/main.js',
        [],
        '1.0.0',
        true
    );
}
add_action( 'wp_enqueue_scripts', 'anup_portfolio_enqueue' );

function anup_portfolio_editor_styles() {
    add_editor_style( 'assets/css/main.css' );
}
add_action( 'after_setup_theme', 'anup_portfolio_editor_styles' );
