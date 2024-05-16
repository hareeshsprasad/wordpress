<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class Custom_Category_Listing {
    public static function get_categories() {
        $args = [
            'taxonomy' => 'product_cat',
            'parent' => 0,
            'hide_empty' => false,
        ];
        return get_terms($args);
    }

    public static function get_subcategories($parent_id) {
        $args = [
            'taxonomy' => 'product_cat',
            'parent' => $parent_id,
            'hide_empty' => false,
        ];
        return get_terms($args);
    }
}

