<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

require_once MY_WC_PLUGIN_PATH . 'includes/class-custom-category-listing.php';
require_once MY_WC_PLUGIN_PATH . 'includes/class-custom-available-products.php';

$categories = Custom_Category_Listing::get_categories();
$response = [];

custom_add_to_cart();


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $main_category = isset($_POST['main_category']) ? sanitize_text_field($_POST['main_category']) : '';
    $sub_category = isset($_POST['sub_category']) ? sanitize_text_field($_POST['sub_category']) : '';
    $rent_from = isset($_POST['rent_from']) ? sanitize_text_field($_POST['rent_from']) : '';
    $rent_to = isset($_POST['rent_to']) ? sanitize_text_field($_POST['rent_to']) : '';

    $data = [
        'main_category' => $main_category,
        'sub_category' => $sub_category,
        'rent_from' => $rent_from,
        'rent_to' => $rent_to,
    ];
    $response = Custom_Available_Product_Listing::availabe_Cars($data);
}
?>
<div class="container">
    <div class="container-form">
        <div class="navigation">
            <a href="#" class="navigation-link">
                < Back</a>
                    <div class="active">1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
        </div>
        <div class="title">
            <h4>Select the departure store and date</h4>
            <span class="vertical-line"></span>
        </div>
        <hr style="margin-top:-10px;">
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post" id="car-select-form">
            <div class="select-group">
                <select id="main-category" name="main_category" required>
                    <option value="">Select Location</option>
                    <?php foreach ($categories as $category) : ?>
                        <?php if ($category->name !== 'Uncategorized' && $category->name !== 'Add-Ons') : ?>
                            <option value="<?php echo $category->term_id; ?>" <?php echo (isset($_POST['main_category']) && $_POST['main_category'] == $category->term_id) ? 'selected' : ''; ?>>
                                <?php echo $category->name; ?>
                            </option>
                        <?php endif; ?>
                    <?php endforeach; ?>
                </select>
                <select id="sub-category" name="sub_category" required>
                    <option value="17">Select Store</option>
                    <?php
                    if (isset($_POST['main_category']) && isset($_POST['sub_category'])) {
                        $subcategories = Custom_Category_Listing::get_subcategories(intval($_POST['main_category']));
                        foreach ($subcategories as $subcategory) {
                            echo '<option value="' . $subcategory->term_id . '" ' . ($_POST['sub_category'] == $subcategory->term_id ? 'selected' : '') . '>' . $subcategory->name . '</option>';
                        }
                    }
                    ?>
                </select>
            </div>
            <div class="form-group">
                <input type="date" id="rent_from" name="rent_from" placeholder="choose the start date" value="<?php echo $rent_from; ?>" required>
            </div>
            <div class="title">
                <h4 class="return-date">Select the return date</h4>
                <span class="vertical-line-2"></span>
            </div>
            <hr style="margin-top:-15px;">
            <div class="form-group">
                <input type="date" id="rent_to" name="rent_to" placeholder="choose the end date" value="<?php echo $rent_to; ?>" required>
                <div id="error-message" style="color: red; float:left; display: none">
                    The end date cannot be earlier than the start date.
                </div>
            </div>
            <div style="margin-top:30px;">
                <button id="select-car" type="submit">choose a car</button>
            </div>
        </form>

        <?php foreach ($response as $product_id) : ?>
            <?php
            $product = wc_get_product($product_id);
            $attributes = $product->get_attributes();
            $model_attribute = $product->get_attribute('car-model');
            $passenger_attribute = $product->get_attribute('number-of-passengers');
            $taxonamy = get_term_by('name', $category_name, 'product_cat');
            $product_permalink = get_permalink($product_id);
            $car_features = wp_get_post_terms($product_id, 'car_features');
            print_r($car_features);
            ?>
            <div class="title">
                <h4 class="return-date">Car selection</h4>
                <span class="vertical-line-2"></span>
            </div>
            <hr style="margin-top:-15px;">
            <div class="car-container">
                <div class="car-card">
                    <h3><?php echo $product->get_name(); ?></h3>
                    <div class="car-content">
                        <img src="<?php echo get_the_post_thumbnail_url($product_id); ?>" alt="Car Image">
                        <div class="car-details">
                            <p>
                                <?php echo  $model_attribute; ?>
                                <span class="vertical-line"></span>
                                Price : <?php echo $product->get_price(); ?>
                            </p>
                            <p>Number of passengers: 5 people</p>
                            <div class="car-features">
                                <span class="feature">禁煙車</span>
                                <span class="feature">カーナビ</span>
                                <span class="feature">ETC車載器</span>
                            </div>
                            <hr>
                            <?php
                            $rental_form_id = uniqid();
                            $rent_from_date = new DateTime($rent_from);
                            $rent_to_date = new DateTime($rent_to);
                            $interval = $rent_from_date->diff($rent_to_date);
                            $interval = $interval->days + 1;
                            $total_rent_amount = $product->get_price() * $interval;
                            ?>

                            <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
                                <input type="hidden" id="wcrp-rental-products-cart-item-validation-<?php echo esc_html($rental_form_id); ?>" name="wcrp_rental_products_cart_item_validation">
                                <input type="hidden" id="wcrp-rental-products-cart-item-timestamp-<?php echo esc_html($rental_form_id); ?>" name="wcrp_rental_products_cart_item_timestamp" value="<?php echo esc_html(current_time('timestamp', false)); ?>">
                                <input type="hidden" id="wcrp-rental-products-cart-item-price-<?php echo esc_html($rental_form_id); ?>" name="wcrp_rental_products_cart_item_price" value="<?php echo $total_rent_amount ?>">
                                <input type="hidden" id="wcrp-rental-products-rent-from-<?php echo esc_html($rental_form_id); ?>" name="wcrp_rental_products_rent_from" value="<?php echo $rent_from ?>">
                                <input type="hidden" id="wcrp-rental-products-rent-to-<?php echo esc_html($rental_form_id); ?>" name="wcrp_rental_products_rent_to" value="<?php echo $rent_to ?>">
                                <input type="hidden" id="wcrp-rental-products-start-days-threshold-<?php echo esc_html($rental_form_id); ?>" name="wcrp_rental_products_start_days_threshold" value="0">
                                <input type="hidden" id="wcrp-rental-products-return-days-threshold-<?php echo esc_html($rental_form_id); ?>" name="wcrp_rental_products_return_days_threshold" value="0">
                                <input type="hidden" id="wcrp-rental-products-advanced-pricing-<?php echo esc_html($rental_form_id); ?>" name="wcrp_rental_products_advanced_pricing" value="off">
                                <!-- <input type="hidden" id="wcrp_rental_products_rental_form_nonce" name="wcrp_rental_products_rental_form_nonce" value="475aeb1d16"> -->
                                <input type="hidden" name="product_id" value="<?php echo esc_attr($product->get_id()); ?>">
                                <input type="hidden" name="_wp_http_referer" value="/wordpress/index.php/product/ <?php echo $product->get_slug(); ?>/?<?php echo $rent_from ?>&amp;<?php echo $rent_to ?>">
                                <?php

                                $product_data = [
                                    'product_id' => $product_id,
                                    'name' => $product->get_name(),
                                    'image' => get_the_post_thumbnail_url($product_id),
                                    'price' => $product->get_price(),
                                    'rental_form_id' => $rental_form_id,
                                    'cart-item-validation' => $product,
                                    'timestamp' => current_time('timestamp', false),
                                    'total_price' => $total_rent_amount,
                                    'rent_from' => $rent_from,
                                    'rent_to' => $rent_to,
                                    'start_days_threshold' => "0",
                                    'return_days_threshold' => "0",
                                    'products_advanced_pricing' => "off"
                                ]; ?>
                                <div class="car-actions">
                                    <button class="details-button" data-product='<?php echo json_encode($product_data); ?>'>Details</button>
                                    <input type="submit" name="hidden_form" value="Add to cart" class="select-button">
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <?php
            ?>
            </form>

            <script>
                var cartItemValidationString = document.getElementById("wcrp-rental-products-cart-item-timestamp-<?php echo esc_html($rental_form_id); ?>").value;
                cartItemValidationString += document.getElementById("wcrp-rental-products-cart-item-price-<?php echo esc_html($rental_form_id); ?>").value;
                cartItemValidationString += document.getElementById("wcrp-rental-products-rent-from-<?php echo esc_html($rental_form_id); ?>").value;
                cartItemValidationString += document.getElementById("wcrp-rental-products-rent-to-<?php echo esc_html($rental_form_id); ?>").value;
                cartItemValidationString += document.getElementById("wcrp-rental-products-start-days-threshold-<?php echo esc_html($rental_form_id); ?>").value;
                cartItemValidationString += document.getElementById("wcrp-rental-products-advanced-pricing-<?php echo esc_html($rental_form_id); ?>").value;
                cartItemValidationString = btoa(cartItemValidationString);
                document.getElementById("wcrp-rental-products-cart-item-validation-<?php echo esc_html($rental_form_id); ?>").value = cartItemValidationString;
            </script>
            <?php


            // custom_add_to_cart($cart_item_data);
            ?>
        <?php endforeach; ?>

        <!-- Modal Structure -->
        <div id="exampleModal" class="modal">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="modal-header">
                        <h2 id="modalProductName">Eclipse Cross</h2>
                    </div>
                    <img id="modalProductImage" src="" alt="Car Image" />
                    <div class="info">
                        <div class="car-model">
                            <p><strong>PHEV Model</strong> <span class="vertical-line"></span> Price: <span id="modalProductPrice"></span></p>
                            <p>
                                <span style="padding: 2px 5px">Non-smoking vehicle</span>
                                <span style="background-color: #ccc; padding: 2px 5px">Car navigation</span>
                                <span style="background-color: #ccc; padding: 2px 5px">ETC on-board unit</span>
                            </p>
                        </div>
                    </div>
                    <div class="car-spec">
                        <span class="spec-item" style="padding: 2px 5px; font-size: 14px;">駆動方式: 4WD</span>
                        <span class="spec-item" style="padding: 2px 17px; font-size: 14px;">ハイブリッド燃料消費率 WLTCモード<br>16.4km/L(4WD)</span>
                        <span class="spec-item" style="padding: 2px 5px; font-size: 14px;">EV走行換算距離 WLTCモード<br>57km</span>
                    </div>
                    <hr style="margin-top:-10px;max-width:90%;margin-left:25px;">
                    <div class="details">
                        <p>
                            A form sharpened by a depth that enhances the ordinary. A rugged
                            and sporty outfit. And it supported the functionality and spirit
                            of an SUV. A sharp and three-dimensional interior redesign. It has
                            reached a new path by enhancing smaller equipment
                        </p>
                    </div>

                    <form action="" method="POST">
                        <input type="hidden" id="wcrp-rental-products-cart-item-validation" name="wcrp_rental_products_cart_item_validation">
                        <input type="hidden" id="wcrp-rental-products-cart-item-timestamp" name="wcrp_rental_products_cart_item_timestamp">
                        <input type="hidden" id="wcrp-rental-products-cart-item-price" name="wcrp_rental_products_cart_item_price">
                        <input type="hidden" id="wcrp-rental-products-rent-from" name="wcrp_rental_products_rent_from">
                        <input type="hidden" id="wcrp-rental-products-rent-to" name="wcrp_rental_products_rent_to">
                        <input type="hidden" id="wcrp-rental-products-start-days-threshold" name="wcrp_rental_products_start_days_threshold">
                        <input type="hidden" id="wcrp-rental-products-return-days-threshold" name="wcrp_rental_products_return_days_threshold">
                        <input type="hidden" id="wcrp-rental-products-advanced-pricing" name="wcrp_rental_products_advanced_pricing">
                        <input type="hidden" name="product_id" id="product-id">
                        <div class="modal-footer">
                            <button class="back-btn">Cancel</button>
                            <button class="select-btn" type="submit">Select</button>
                            <input type="submit" name="model_form" value="Add to cart" class="select-button">
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
</div>
<?php
function custom_add_to_cart()
{
    $cart_item_data = [];
    $cart_item_data['wcrp_rental_products_cart_item_validation'] = !empty($_REQUEST['wcrp_rental_products_cart_item_validation']) ? $_REQUEST['wcrp_rental_products_cart_item_validation'] : "";
    $cart_item_data['wcrp-rental-products-cart-item-timestamp'] = !empty($_REQUEST['wcrp_rental_products_cart_item_timestamp']) ? $_REQUEST['wcrp_rental_products_cart_item_timestamp'] : "";
    $cart_item_data['wcrp_rental_products_cart_item_price'] = !empty($_REQUEST['wcrp_rental_products_cart_item_price']) ? $_REQUEST['wcrp_rental_products_cart_item_price'] : "";
    $cart_item_data['wcrp_rental_products_rent_from'] = !empty($_REQUEST['wcrp_rental_products_rent_from']) ? $_REQUEST['wcrp_rental_products_rent_from'] : "";
    $cart_item_data['wcrp_rental_products_rent_to'] = !empty($_REQUEST['wcrp_rental_products_rent_to']) ? $_REQUEST['wcrp_rental_products_rent_to'] : "";
    $cart_item_data['wcrp_rental_products_start_days_threshold'] = !empty($_REQUEST['wcrp_rental_products_start_days_threshold']) ? $_REQUEST['wcrp_rental_products_start_days_threshold'] : 0;
    $cart_item_data['wcrp_rental_products_return_days_threshold'] = !empty($_REQUEST['wcrp_rental_products_return_days_threshold']) ? $_REQUEST['wcrp_rental_products_return_days_threshold'] : 0;
    $cart_item_data['wcrp_rental_products_advanced_pricing'] = !empty($_REQUEST['wcrp_rental_products_advanced_pricing']) ? $_REQUEST['wcrp_rental_products_advanced_pricing'] : "off";


    if (!empty($_REQUEST['hidden_form']) || !empty($_REQUEST['model_form'])) {
        $product_id = $_REQUEST['product_id'];
        $quantity = 1;
        // Ensure WooCommerce is loaded
        if (class_exists('WC_Cart')) {
            $response = WC()->cart->add_to_cart($product_id, $quantity, 0, array(), $cart_item_data);
            if ($response) {
                echo 'Product added to cart!';
                ob_clean();
                wp_redirect('http://localhost/wordpress/index.php/my-account/');
                exit();
            }
            exit();
        }
    }
}
?>