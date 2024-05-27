<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
require_once MY_WC_PLUGIN_PATH . 'includes/class-cart-details.php';
$cart_details = Custom_Cart_Details::cart_details();
?>

<body>
    <div class="container">
        <h2>Current Reservation Details</h2>
        <?php
        // Display rental products first
        foreach ($cart_details as  $cart_item_key => $cart_item) :
            $is_rental_product = isset($cart_item['wcrp_rental_products_cart_item_validation']);
            if ($is_rental_product) {
                $product = $cart_item['data'];
                $product_id = $product->get_id();
                $product_name = $product->get_name();
                $product_quantity = $cart_item['quantity'];
                $product_price = $product->get_price();
                $rent_from = $cart_item['wcrp_rental_products_rent_from'];
                $rent_to = $cart_item['wcrp_rental_products_rent_to'];
                $rental_price = $cart_item['wcrp_rental_products_cart_item_price'];
                $product_image =  get_the_post_thumbnail_url($product_id);
                $attributes = $product->get_attributes();
                $model_attribute = $product->get_attribute('car-model');
                $passenger_attribute = $product->get_attribute('number-of-passengers');
                $drive_type = $product->get_attribute('drive-type');
                $categories = wp_get_post_terms($product_id, 'product_cat');
                $subcategories = array();
                if (!is_wp_error($categories) && !empty($categories)) {
                    foreach ($categories as $category) {
                        if ($category->parent != 0) {
                            $subcategories[] = $category->name;
                        }
                    }
                }
                $taxonomy = implode(', ', $subcategories);
                $hybrid_fule_type = $product->get_attribute('hybri-fuel-consumption-rate');
                $ev_mileage = $product->get_attribute('ev-milege');
                $product_permalink = get_permalink($product_id);
                $car_features = wp_get_post_terms($product_id, 'car_features');
        ?>
                <section class="selected-car">
                    <h3>Selected Car</h3>
                    <div class="car-details">
                        <h4><?php echo $product_name ?></h4>
                        <div class="car-info">
                            <img src="<?php echo  $product_image ?>" alt="Car" />
                            <div class="car-specs">
                                <p><?php echo  $model_attribute ?> Price: ¥<?php echo $rental_price ?> (tax included)</p>
                                <p>Seating Capacity: <?php echo  $passenger_attribute ?></p>
                                <p>Drive: <?php echo  $drive_type ?></p>
                                <p>EV Range:<?php echo $ev_mileage ?></p>
                                <p>Hybrid range:<?php echo $hybrid_fule_type ?></p>
                                <p><?php echo $taxonamy ?></p>
                                <div class="txt_highlight ul-auto">
                                    <ul>
                                        <?php foreach ($car_features as $feature) : ?>
                                            <li><?php echo esc_html($feature->name); ?></li>
                                        <?php endforeach ?>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="date-time">
                    <h3>Departure and Return Date/Time</h3>
                    <div class="dates">
                        <div class="date">
                            <span>Departure <?php echo $taxonomy ?></span>
                            <span><?php echo $rent_from ?></span>
                        </div>
                        <div class="date">
                            <span>Return <?php echo $taxonomy ?> </span>
                            <span><?php echo $rent_to ?></span>
                        </div>
                    </div>
                </section>
            <?php $is_rental_product_rendered = true;
            }
        endforeach;

        // Display non-rental products next
        foreach ($cart_details as $cart_item_key => $cart_item) :
            $is_rental_product = isset($cart_item['wcrp_rental_products_cart_item_validation']);
            if (!$is_rental_product) {
                $product = $cart_item['data'];
                $product_id = $product->get_id();
                $product_name = $product->get_name();
                $product_price = $product->get_price();
                $product_quantity = $cart_item['quantity'];
            ?>
                <section class="selected-goods">
                    <h3>Selected Add Ons</h3>
                    <div class="goods-details cart-item" data-cart-item-key="<?php echo $cart_item_key; ?>">
                        <div class="goods-info">
                            <h4><?php echo $product_name; ?></h4>
                            <p id="selected-item-price-<?php echo $cart_item_key; ?>">Price: ¥<?php echo number_format($product_price * $product_quantity, 2); ?> (tax included)</p>
                        </div>
                        <div class="quantity">
                            <label for="quantity-<?php echo $cart_item_key; ?>">Quantity:</label>
                            <select id="quantity-<?php echo $cart_item_key; ?>" name="quantity">
                                <?php for ($i = 1; $i <= 10; $i++) : ?>
                                    <option value="<?php echo $i; ?>" <?php selected($product_quantity, $i); ?>>
                                        <?php echo $i; ?>
                                    </option>
                                <?php endfor; ?>
                            </select>
                            <input type="hidden" id="item-base-price-<?php echo $cart_item_key; ?>" value="<?php echo $product_price; ?>">
                            <button type="button" class="update-cart-button" data-cart-item-key="<?php echo $cart_item_key; ?>">Change</button>
                        </div>
                    </div>
                </section>
        <?php
            }
        endforeach;
        ?>
        <section class="cart-totals">
            <h2>ご利用料金</h2>
            <div class="cart-totals-content">
                <div class="cart-totals-items">
                    <?php foreach (WC()->cart->get_cart() as $cart_item_key => $cart_item) : ?>
                        <div class="cart-item" data-cart-item-key="<?php echo $cart_item_key; ?>">
                            <span class="cart-item-name"><?php echo $cart_item['data']->get_name(); ?></span>
                            <span class="cart-item-price" id="cart-item-price-<?php echo $cart_item_key; ?>"><?php echo wc_price($cart_item['line_total']); ?></span>
                        </div>
                    <?php endforeach; ?>
                </div>
                <div class="cart-subtotal">
                    <span>Total usage fee</span>
                    <span class="cart-subtotal-amount"><?php echo WC()->cart->get_cart_total(); ?></span>
                </div>

            </div>
            <div class="cart-totals-actions">
                <a href="<?php echo wc_get_checkout_url(); ?>" class="button primary">支払い情報の入力</a>
                <a href="<?php echo wc_get_cart_url(); ?>" class="button secondary">戻る</a>
            </div>
        </section>
    </div>
</body>