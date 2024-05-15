<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class Custom_Product_Listing {
    public static function get_products() {
        $args = [
            'post_type' => 'product',
            'posts_per_page' => 10,
        ];
        $query = new WP_Query($args);

        return $query->posts;
    }
}
