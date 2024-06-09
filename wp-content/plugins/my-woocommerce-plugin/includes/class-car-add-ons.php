<?php

// Check if ABSPATH is defined to prevent direct access
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class Car_Addons
{
    public static function get_categories()
    {
        $args = [
            'taxonomy' => 'product_cat',
            'parent' => 0,
            'hide_empty' => false,
            'orderby' => 'slug',
            'order' => 'ASC',
        ];
        return get_terms($args);
    }

    public static function get_products_by_category_name($category_name)
    {
        $category = get_term_by('slug', $category_name, 'product_cat');
        if ($category && !is_wp_error($category)) {
            $args = [
                'post_type' => 'product',
                'posts_per_page' => -1,
                'tax_query' => [
                    [
                        'taxonomy' => 'product_cat',
                        'field' => 'term_id',
                        'terms' => $category->term_id,
                    ],
                ],
            ];
            $products = new WP_Query($args);

            // Sort products by slug
            usort($products->posts, function ($a, $b) {
                return strcmp($a->post_name, $b->post_name);
            });

            return $products->posts;
        }

        return [];
    }
}
