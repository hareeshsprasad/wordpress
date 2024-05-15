<?php
/*
Plugin Name: My WooCommerce Plugin
Description: A custom plugin for WooCommerce product and category listing.
Version: 1.0
Author: Your Name
*/

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

define('MY_WC_PLUGIN_PATH', plugin_dir_path(__FILE__));
define('MY_WC_PLUGIN_URL', plugin_dir_url(__FILE__));

class My_WC_Plugin {
    public function __construct() {
        add_action('wp_enqueue_scripts', [$this, 'enqueue_styles']);
        add_action('woocommerce_before_shop_loop', [$this, 'custom_product_listing'], 20);
        add_shortcode('custom_category_select', [$this, 'custom_category_select_shortcode']);// for adding the template as shortcode
        add_filter('the_content', [$this, 'render_custom_category_listing_on_page']);// for rendering the template
    }

    public function enqueue_styles() {
        wp_enqueue_style('custom-style', MY_WC_PLUGIN_URL . 'assets/css/custom-style.css');
        wp_enqueue_style('custom-category-style', MY_WC_PLUGIN_URL . 'assets/css/custom-category-style.css');
    }

    public function custom_product_listing() {
        include MY_WC_PLUGIN_PATH . 'templates/custom-product-listing-template.php';
    }

    public function custom_category_select_shortcode() {
        ob_start();
        include MY_WC_PLUGIN_PATH . 'templates/custom-category-listing-template.php';
        return ob_get_clean();
    }
    public function render_custom_category_listing_on_page($content) {
        if (is_page('sample-page')) {
            ob_start();
            include MY_WC_PLUGIN_PATH . 'templates/custom-category-listing-template.php';
            $category_listing = ob_get_clean();
            return $content . $category_listing;
        }
        return $content;
    }
}

new My_WC_Plugin();
