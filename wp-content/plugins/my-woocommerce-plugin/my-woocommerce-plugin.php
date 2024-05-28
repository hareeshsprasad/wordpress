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
        // Hook into the 'init' action
        add_action('init', [$this, 'create_custom_taxonomy'], 0);

        // Enqueue styles and scripts
        add_action('wp_enqueue_scripts', [$this, 'enqueue_styles']);
        add_action('wp_enqueue_scripts', [$this, 'enqueue_scripts']);

        // Add content filters
        add_filter('the_content', [$this, 'render_custom_category_listing_on_page']);
        add_filter('the_content', [$this, 'render_add_ons']);
        add_filter('the_content', [$this, 'search_cars']);
        add_filter('the_content', [$this, 'custom_cart_details']);
        add_filter('the_content', [$this, 'change_reservation_details']);
        // Handle AJAX requests
        add_action('wp_ajax_get_subcategories', [$this, 'get_subcategories']);
        add_action('wp_ajax_nopriv_get_subcategories', [$this, 'get_subcategories']);

        add_action('wp_ajax_update_cart_quantity', [$this, 'update_cart_quantity']);
        add_action('wp_ajax_nopriv_update_cart_quantity', [$this, 'update_cart_quantity']);

        add_shortcode('child_seat_count', 'child_seat_count');
    }

    public function enqueue_styles()
    {
        wp_enqueue_style('bootstrap', 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');
        if (is_page('book-your-car')) {
            wp_enqueue_style('custom-style', MY_WC_PLUGIN_URL . 'assets/css/search-car/css/bootstrap.min.css');
            wp_enqueue_style('custom-style-one', MY_WC_PLUGIN_URL . 'assets/css/search-car/css/style.css');
        }
        if (is_page('change-reservation-details')) {
            wp_enqueue_style('custom-style', MY_WC_PLUGIN_URL . 'assets/css/search-car/css/bootstrap.min.css');
            wp_enqueue_style('custom-style-one', MY_WC_PLUGIN_URL . 'assets/css/search-car/css/style.css');
        }
        if (is_page('car-add-ons')) {
            wp_enqueue_style('custom-style', MY_WC_PLUGIN_URL . 'assets/css/search-car/css/bootstrap.min.css');
            wp_enqueue_style('custom-style-one', MY_WC_PLUGIN_URL . 'assets/css/search-car/css/style.css');
        }
        if (is_page('custom-cart-details')) {
            wp_enqueue_style('custom-category-style', MY_WC_PLUGIN_URL . 'assets/css/cartstyles.css');
        }
        if (is_page('goods')) {
            wp_enqueue_style('custom-style', MY_WC_PLUGIN_URL . 'assets/css/search-car/css/bootstrap.min.css');
            wp_enqueue_style('custom-style-goods', MY_WC_PLUGIN_URL . 'assets/css/search-car/css/goods-style.css');
        }
        if (is_page('goods-details')) {
            wp_enqueue_style('custom-style', MY_WC_PLUGIN_URL . 'assets/css/search-car/css/bootstrap.min.css');
            wp_enqueue_style('custom-style-goods', MY_WC_PLUGIN_URL . 'assets/css/search-car/css/goods-details-style.css');
        }
    }

    public function enqueue_scripts()
    {
        wp_enqueue_script('custom-script', MY_WC_PLUGIN_URL . 'assets/js/custom-script.js', ['jquery'], null, true);
        wp_enqueue_script('category-list-script', MY_WC_PLUGIN_URL . 'assets/js/category-list-script.js');
        wp_enqueue_script('bootstrap-script', MY_WC_PLUGIN_URL . 'assets/js/bootstrap.bundle.min.js');
        wp_localize_script('custom-script', 'my_wc_plugin', [
            'ajax_url' => admin_url('admin-ajax.php')
        ]);
        wp_enqueue_script('custom-cart', MY_WC_PLUGIN_URL . 'assets/js/custom-cart.js', ['jquery'], null, true);
        wp_localize_script('custom-cart', 'my_wc_plugin', [
            'ajax_url' => admin_url('admin-ajax.php')
        ]);
    }


    public function render_custom_category_listing_on_page($content)
    {

        if (is_page('camping-goods')) {
            ob_start();
            include MY_WC_PLUGIN_PATH . 'templates/custom-goods-template.php';
            $category_listing = ob_get_clean();
            return $content . $category_listing;
        }

        if (is_page('goods-details')) {
            ob_start();
            include MY_WC_PLUGIN_PATH . 'templates/custom-goods-details.php';
            $category_listing = ob_get_clean();
            return $content . $category_listing;
        }

        if (is_page('goods')) {
            ob_start();
            include MY_WC_PLUGIN_PATH . 'templates/custom-goods.php';
            $category_listing = ob_get_clean();
            return $content . $category_listing;
        }

        if (is_page('goods-details')) {
            ob_start();
            include MY_WC_PLUGIN_PATH . 'templates/custom-goods-details.php';
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

    public function render_add_ons($content)
    {
        if (is_page('car-add-ons')) {
            ob_start();
            include MY_WC_PLUGIN_PATH . 'templates/car-add-ons-template.php';
            $available_product_listing = ob_get_clean();
            return $content . $available_product_listing;
        }
        return $content;
    }
    public function search_cars($content)
    {
        if (is_page('book-your-car')) {
            ob_start();
            include MY_WC_PLUGIN_PATH . 'templates/book-car-search-template.php';
            $category_listing = ob_get_clean();
            return $content . $category_listing;
        }
        return $content;
    }
    public function custom_cart_details($content)
    {
        if (is_page('custom-cart-details')) {
            ob_start();
            include MY_WC_PLUGIN_PATH . 'templates/custom-cart-template.php';
            $cart_details = ob_get_clean();
            return $content . $cart_details;
        }
        return $content;
    }
    public function change_reservation_details($content)
    {
        if (is_page('change-reservation-details')) {
            ob_start();
            include MY_WC_PLUGIN_PATH . 'templates/change-reservation-details-template.php';
            $cart_details = ob_get_clean();
            return $content . $cart_details;
        }
        return $content;
    }
    public function update_cart_quantity()
    {
        if (!isset($_POST['cart_item_key']) || !isset($_POST['quantity'])) {
            wp_send_json_error('Invalid request');
        }

        $cart_item_key = sanitize_text_field($_POST['cart_item_key']);
        $quantity = intval($_POST['quantity']);

        $cart = WC()->cart;
        $cart->set_quantity($cart_item_key, $quantity);

        $cart_total = $cart->get_cart_total();
        $cart_item = $cart->get_cart_item($cart_item_key);
        $item_price = wc_price($cart_item['line_total']);

        wp_send_json_success(array(
            'message' => 'Cart updated successfully',
            'cart_total' => $cart_total,
            'item_price' => $item_price // Return updated item price
        ));
    }



    public function create_custom_taxonomy()
    {
        $labels = array(
            'name'              => _x('Car Features', 'taxonomy general name'),
            'singular_name'     => _x('Car Features', 'taxonomy singular name'),
            'search_items'      => __('Search Car Features'),
            'all_items'         => __('AllCar Features'),
            'parent_item'       => __('Parent Car Features'),
            'parent_item_colon' => __('Parent Car Features:'),
            'edit_item'         => __('Edit Car Features'),
            'update_item'       => __('Update Car Features'),
            'add_new_item'      => __('Add New Car Features'),
            'new_item_name'     => __('New Custom Car Features'),
            'menu_name'         => __('Car Features'),
        );

        register_taxonomy('car_features', 'product', array(
            'hierarchical'      => true,
            'labels'            => $labels,
            'show_ui'           => true,
            'show_admin_column' => true,
            'query_var'         => true,
            'rewrite'           => array('slug' => 'car-features'),
        ));
    }
}

function child_seat_count()
{
    include MY_WC_PLUGIN_PATH . 'templates/custom-seat-count.php';
}

// Initialize the plugin
new My_WC_Plugin();
