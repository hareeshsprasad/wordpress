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
            // "orderby" => "date",    // Sort by the date field
            // "order" => "ASC",       // Oldest products first
        ];

        // Execute the query to retrieve products
        $products_query = new WP_Query($args);
        $available_products = [];
        global $wpdb;
        if ($products_query->have_posts()) {
            while ($products_query->have_posts()) {
                $price_available = true;
                $products_query->the_post();
                $product_id = get_the_ID();
                $product = wc_get_product($product_id);
                $product_price = $product->get_price();
                if (!$product_price) {
                    $price_available = false;
                }
                $rental_stock = get_post_meta($product_id, '_wcrp_rental_products_rental_stock', true);
                // Fetch disabled rental dates
                $disabled_dates = get_post_meta($product_id, '_wcrp_rental_products_disable_rental_dates', true);
                if ($disabled_dates) {
                    // Convert disabled dates into an array
                    $disabled_dates_array = explode(",", $disabled_dates);

                    // Generate all dates between rent_from and rent_to
                    $all_rental_dates = self::getDatesInRange($rent_from, $rent_to);

                    // Check if any date in the range is within the disabled dates
                    $is_disabled = false;
                    foreach ($all_rental_dates as $date) {
                        if (in_array($date, $disabled_dates_array)) {
                            $is_disabled = true;
                            break;
                        }
                    }

                    if ($is_disabled) {
                        continue; // Skip this product if any date in the range is disabled
                    }
                }
                $sql = $wpdb->prepare(
                    "SELECT DISTINCT(order_item_id), product_id, quantity FROM {$wpdb->prefix}wcrp_rental_products_rentals 
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

                    if ($available_quantity > 0 &&  $price_available) {
                        $available_products[] = $product_id;
                    }
                } else {
                    if ($price_available) {
                        $available_products[] = $product_id;
                    }
                }
            }
            wp_reset_postdata();
            return $available_products;
        }
    }

    // Helper function to get all dates between two dates
    private static function getDatesInRange($start_date, $end_date)
    {
        $dates = [];
        $current = strtotime($start_date);
        $end = strtotime($end_date);

        while ($current <= $end) {
            $dates[] = date("Y-m-d", $current);
            $current = strtotime("+1 day", $current);
        }

        return $dates;
    }
}
