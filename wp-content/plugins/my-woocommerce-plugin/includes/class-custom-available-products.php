<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class Custom_Available_Product_Listing
{
    public static function availabe_Cars($data)
    {
        $main_category = $data['main_category'];
        $sub_category = $data['sub_category'];
        $rent_from = $data['rent_from'];
        $rent_to = $data['rent_to'];

        $args = [
            "post_type" => "product",
            "tax_query" => [
                "relation" => "AND",
                [
                    "taxonomy" => "product_cat",
                    "field" => "term_id",
                    "terms" => $main_category,
                ],
                [
                    "taxonomy" => "product_cat",
                    "field" => "term_id",
                    "terms" => $sub_category,
                ],
            ],
        ];

        // Execute the query to retrieve products
        $products_query = new WP_Query($args);
        $available_products = [];
        global $wpdb;
        if ($products_query->have_posts()) {
            while ($products_query->have_posts()) {
                $products_query->the_post();
                $product_id = get_the_ID();
                $rental_stock = get_post_meta($product_id, '_wcrp_rental_products_rental_stock', true);
                $sql = $wpdb->prepare(
                    "SELECT DISTINCT(order_id), product_id, quantity FROM {$wpdb->prefix}wcrp_rental_products_rentals 
                    WHERE product_id = %d AND reserved_date >= %s AND reserved_date <= %s",
                    $product_id,
                    $rent_from,
                    $rent_to
                );
                $reserved_products = $wpdb->get_results($sql);
                $total_quantity = [];

                if ($reserved_products) {
                    foreach ($reserved_products as $reserved) {
                        $product_id = $reserved->product_id;
                        $quantity = $reserved->quantity;

                        // Check if product_id already exists in $total_quantity array
                        if (isset($total_quantity[$product_id])) {
                            // If it exists, add the quantity to the existing total
                            $total_quantity[$product_id] += $quantity;
                        } else {
                            // If it doesn't exist, initialize it with the quantity
                            $total_quantity[$product_id] = $quantity;
                        }
                    }

                    foreach ($total_quantity as $total) {
                        $available_quantity = intval($rental_stock) - intval($total);
                    }

                    if ($available_quantity > 0) {
                        $available_products[] = $product_id;
                    }
                } else {
                    $available_products[] = $product_id;
                }
            }
            return $available_products;
        } else {
            echo "No products found.";
        }
        wp_reset_postdata();
    }
}
