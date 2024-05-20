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
require_once MY_WC_PLUGIN_PATH . 'includes/class-custom-category-listing.php';
require_once MY_WC_PLUGIN_PATH . 'includes/class-custom-available-products.php';
class My_WC_Plugin
{
    public function __construct()
    {
        add_action('wp_enqueue_scripts', [$this, 'enqueue_styles']);
        add_action('wp_enqueue_scripts', [$this, 'enqueue_scripts']);
        add_action('woocommerce_before_shop_loop', [$this, 'custom_product_listing'], 20);
        add_shortcode('custom_category_select', [$this, 'custom_category_select_shortcode']);
        add_filter('the_content', [$this, 'render_custom_category_listing_on_page']);
        add_shortcode('custom', [$this, 'custom_product_list_shortcode']);
        add_action('wp_ajax_get_subcategories', [$this, 'get_subcategories']);
        add_action('wp_ajax_nopriv_get_subcategories', [$this, 'get_subcategories']);
        // add_filter('the_content', [$this, 'render_available_products_listing_on_page']);
    }

    public function enqueue_styles()
    {
        wp_enqueue_style('custom-category-style', MY_WC_PLUGIN_URL . 'assets/css/custom-category-style.css');
        wp_enqueue_style('custom-available-product', MY_WC_PLUGIN_URL . 'assets/css/custom-available-product.css');
    }
    public function enqueue_scripts()
    {
        wp_enqueue_script('custom-script', MY_WC_PLUGIN_URL . 'assets/js/custom-script.js', ['jquery'], null, true);
        wp_enqueue_script('category-list-script', MY_WC_PLUGIN_URL . 'assets/js/category-list-script.js');
        wp_localize_script('custom-script', 'my_wc_plugin', [
            'ajax_url' => admin_url('admin-ajax.php')
        ]);
    }

    public function custom_product_listing()
    {
        include MY_WC_PLUGIN_PATH . 'templates/custom-product-listing-template.php';
    }

    public function custom_category_select_shortcode()
    {
        ob_start();
        include MY_WC_PLUGIN_PATH . 'templates/custom-category-listing-template.php';
        return ob_get_clean();
    }
    public function custom_product_list_shortcode()
    {
        ob_start();
        include MY_WC_PLUGIN_PATH . 'templates/custom-product-list.php';
        return ob_get_clean();
    }
    public function render_custom_category_listing_on_page($content)
    {
        if (is_page('sample-page')) {
            ob_start();
            include MY_WC_PLUGIN_PATH . 'templates/custom-category-listing-template.php';
            $category_listing = ob_get_clean();
            return $content . $category_listing;
        }
        return $content;
    }
    public function get_subcategories()
    {
        if (!isset($_POST['category_id'])) {
            wp_send_json_error('Category ID is missing');
        }

        $category_id = intval($_POST['category_id']);
        $subcategories = Custom_Category_Listing::get_subcategories($category_id);
        wp_send_json_success($subcategories);
    }

    // public function render_available_products_listing_on_page($content)
    // {
    //     if (is_page('demo')) {
    //         ob_start();
    //         include MY_WC_PLUGIN_PATH . 'templates/custom-available-product-list-template.php';
    //         $available_product_listing = ob_get_clean();
    //         return $content . $available_product_listing;
    //     }
    //     return $content;
    // }
}

new My_WC_Plugin();
