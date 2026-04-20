<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="cursor"></div>
<div id="cursor-ring"></div>

<header class="site-header" id="site-header">
    <div class="header-inner container">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="site-logo">
            <?php if ( has_custom_logo() ) : the_custom_logo(); else : ?>
                <span class="logo-text"><?php bloginfo( 'name' ); ?></span>
            <?php endif; ?>
        </a>

        <nav class="primary-nav" id="primary-nav">
            <ul class="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>

        <a href="#contact" class="btn-hire">Hire Me</a>

        <button class="hamburger" id="hamburger" aria-label="Toggle menu">
            <span></span><span></span><span></span>
        </button>
    </div>

    <div class="mobile-menu" id="mobile-menu">
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#contact" class="btn-hire-mobile">Hire Me</a></li>
        </ul>
    </div>
</header>
