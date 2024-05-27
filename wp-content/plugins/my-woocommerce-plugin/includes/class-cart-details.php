<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class Custom_Cart_Details
{
    public static function cart_details()
    {
        // Ensure WooCommerce is active
        if (class_exists('WooCommerce')) {
            $cart = WC()->cart->get_cart();
            return $cart;
        }
    }
}
