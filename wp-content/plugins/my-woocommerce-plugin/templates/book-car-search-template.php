<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly 
}
require_once MY_WC_PLUGIN_PATH . 'includes/class-custom-category-listing.php';
// require_once MY_WC_PLUGIN_PATH . 'templates/header-template.php';
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
<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Company info</title>
    <script>
        (function(d) {
            var config = {
                    kitId: 'wxt5yvx',
                    scriptTimeout: 3000,
                    async: true
                },
                h = d.documentElement,
                t = setTimeout(function() {
                    h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
                }, config.scriptTimeout),
                tk = d.createElement("script"),
                f = false,
                s = d.getElementsByTagName("script")[0],
                a;
            h.className += " wf-loading";
            tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
            tk.async = true;
            tk.onload = tk.onreadystatechange = function() {
                a = this.readyState;
                if (f || a && a != "complete" && a != "loaded") return;
                f = true;
                clearTimeout(t);
                try {
                    Typekit.load(config)
                } catch (e) {}
            };
            s.parentNode.insertBefore(tk, s)
        })(document);
    </script>
</head>

<body>

    <div class="sp_container">

        <h1 class="top_title-small">プラグインアウトドア<br>
            予約フォー</h1>
        <div class="stepper">
            <ul>
                <li class="active">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </div>
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post" id="car-select-form">
            <div class="sub_content_area">
                <h2 class="sub_heading">出発する店舗と日時を選ぶ <span style="font-weight: 200">|</span></h2>
                <div class="w-100 hr_blck"></div>
                <div class="container m-0 p-0 full_width">
                    <div class="row">
                        <div class="col-md-6">
                            <select class="form-select mt-4" aria-label="Default select example" id="main-category" name="main_category" required>
                                <option selected disabled>都道府県</option>
                                <?php foreach ($categories as $category) : ?>
                                    <?php if ($category->name !== 'Uncategorized' && $category->name !== 'Add-Ons' && $category->name !== 'camping-goods') : ?>
                                        <option value="<?php echo $category->term_id; ?>" <?php echo (isset($_POST['main_category']) && $_POST['main_category'] == $category->term_id) ? 'selected' : ''; ?>>
                                            <?php echo $category->name; ?>
                                        </option>
                                    <?php endif; ?>
                                <?php endforeach; ?>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <select class="form-select mt-4" aria-label="Default select example" id="sub-category" name="sub_category" required>
                                <option selected disabled>店舗</option>
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
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <input type="date" id="rent_from" name="rent_from" placeholder="choose the start date" class="form-select mt-4" aria-label="Default select example" value="<?php echo $rent_from; ?>" style="height:50px" required>
                        </div>
                    </div>

                    <div class="row" style="margin-top: 70px;">
                        <div class="col-md-12">
                            <h2 class="sub_heading">返却する日時を選ぶ <span style="font-weight: 200">|</span></h2>
                            <div class="w-100 hr_blck"></div>
                            <input type="date" id="rent_to" name="rent_to" placeholder="choose the end date" class="form-select mt-4" aria-label="Default select example" value="<?php echo $rent_from; ?>" style="height:50px" required>
                        </div>
                        <div id="error-message" style="color: red; float:left; display: none">
                            The end date cannot be earlier than the start date.
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12 text-center mt-5 ">
                            <button type="submit" class="btn btn-secondary btndark_big shadow px-5">検索</button>
                        </div>
                    </div>
                    <input type="hidden" value="submitted" name="submitted">
                </div>
            </div>
        </form>
        <?php if ($_REQUEST['submitted'] && empty($response)) :
            echo "<script>alert('No cars are available in the selected date range at the chosen store.');</script>";
        ?>
        <?php endif ?>
        <?php if (!empty($response)) : ?>
            <!-- <div class="sub_content_area2">
                <h2 class="sub_heading">クルマの選択 <span style="font-weight: 200">|</span></h2>
                <div class="w-100 hr_blck"></div>
            </div> -->
            <?php foreach ($response as $product_id) : ?>
                <?php
                $product = wc_get_product($product_id);
                $attributes = $product->get_attributes();
                $model_attribute = $product->get_attribute('car-model');
                $passenger_attribute = $product->get_attribute('number-of-passengers');
                $drive_type = $product->get_attribute('drive-type');
                $hybrid_fule_type = $product->get_attribute('hybri-fuel-consumption-rate');
                $ev_mileage = $product->get_attribute('ev-milege');
                $product_description = $product->get_description();
                $car_features = wp_get_post_terms($product_id, 'car_features');
                $rental_form_id = uniqid();
                $rent_from_date = new DateTime($rent_from);
                $rent_to_date = new DateTime($rent_to);
                $interval = $rent_from_date->diff($rent_to_date);
                $interval = $interval->days + 1;
                $total_rent_amount = $product->get_price() * $interval;
                ?>
                <div class="sub_content_area2">
                    <h2 class="sub_heading">クルマの選択 <span style="font-weight: 200">|</span></h2>
                    <div class="w-100 hr_blck"></div>
                    <div class="container m-0 p-0 full_width">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="cont_box mt-4">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <h4 class="txt-center"><?php echo $product->get_name(); ?></h4>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4 text-center"> <img class="responsive-img" src="<?php echo get_the_post_thumbnail_url($product_id); ?>"> </div>
                                        <div class="col-md-8">
                                            <div class="row">
                                                <div class="col-md-6 sub-head1 border-end txt-center"><?php echo $model_attribute; ?></div>
                                                <div class="col-md-6 text-lg-end sub-head2 txt-center"><span>料金：</span> <?php echo $product->get_price(); ?>円 <span>(税込)</span></div>
                                            </div>
                                            <div class="row mt-2">
                                                <div class="col-md-12">
                                                    <div class="d-flex col_dir ">
                                                        <div class="text16 txt-center">乗車人数： <?php echo $passenger_attribute; ?>人 </div>
                                                        <div class="txt_highlight ul-auto">
                                                            <ul>
                                                                <?php foreach ($car_features as $feature) : ?>
                                                                    <li><?php echo esc_html($feature->name); ?></li>
                                                                <?php endforeach ?>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="hr_blck mt-1"></div>
                                                </div>
                                            </div>
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
                                                    'model' => $model_attribute,
                                                    'number_of_passengers' => $passenger_attribute,
                                                    'car_features' => $car_features,
                                                    'hybrid_fule_type' => $hybrid_fule_type,
                                                    'ev_mileage' => $ev_mileage,
                                                    'product_description' => $product_description,
                                                    'drive_type' => $drive_type,
                                                    'rental_form_id' => $rental_form_id,
                                                    'cart-item-validation' => $product,
                                                    'timestamp' => current_time('timestamp', false),
                                                    'total_price' => $total_rent_amount,
                                                    'rent_from' => $rent_from,
                                                    'rent_to' => $rent_to,
                                                    'start_days_threshold' => "0",
                                                    'return_days_threshold' => "0",
                                                    'products_advanced_pricing' => "off"
                                                ];
                                                ?>
                                                <div class="row mt-3">
                                                    <div class="col-6 text-center ">
                                                        <button type="button" class="btn btn-outline-secondary line_btns  w-100 shadow details-button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-product='<?php echo json_encode($product_data); ?>'>詳細</button>
                                                    </div>
                                                    <div class="col-6 text-center">
                                                        <!-- <button type="button" class="btn btn-secondary btndark w-100 shadow">選択する</button> -->
                                                        <input type="submit" name="hidden_form" value="選択する" class="btn btn-secondary btndark w-100 shadow">
                                                    </div>
                                            </form>
                                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-lg">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <div class="modal-border p-3">
                                                                <div class="row">
                                                                    <div class="col-md-12">
                                                                        <h4 class="txt-center" id="modalProductName"></h4>
                                                                    </div>
                                                                </div>
                                                                <div class="row center-flex">
                                                                    <div class="col-md-6 text-center"> <img class="responsive-img" id="modalProductImage" src=""> </div>
                                                                </div>
                                                                <div class="row margin-addition">
                                                                    <div class="col-md-6 sub-head1 border-end text-end txt-center" id="productModel"></div>
                                                                    <div class="col-md-6 sub-head2 text-start txt-center"><span>料金：</span> <span id="modalProductPrice"></span>円<span>(税込)</span></div>
                                                                </div>
                                                                <div class="row mt-3 m-25">
                                                                    <div class="col-md-12">
                                                                        <div class="d-flex justify-content-center col_dir">
                                                                            <div class="text16 txt-center" id="number-of-passengers"></div>
                                                                            <div class="txt_highlight ul-auto">
                                                                                <ul id="carFeaturesList">
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div class="hr_blck mt-1"></div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mt-2 m-25">
                                                                    <div class="col-md-2 txt-center" id="drive-type"></div>
                                                                    <div class="col-md-5">
                                                                        <div class="txt-center" id="hybrid">ハイブリッド燃料消費率 WLTCモー 16.4km/L（4WD)</div>
                                                                    </div>
                                                                    <div class="col-md-5">
                                                                        <div class="txt-center" id="ev">EV走行換算距離 WLTCモード 57km</div>
                                                                    </div>
                                                                    <div class="col-md-12">
                                                                        <div class="hr_blck mt-2"></div>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-md-12 mt-2 p-45" id="description"> 上質感を高めながらいっそう流麗で洗練されたフォルム。精悍でスポーティな表情。そして、SUVとしての機動性とスタビリティの高さを表現した、シャープで立体的な六角形のリヤデザイン。走りへの欲求を掻き立てる、新たな造形に辿り着きました。 </div>
                                                                </div>
                                                                <div class="row mt-3">
                                                                    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
                                                                        <input type="hidden" id="wcrp-rental-products-cart-item-validation" name="wcrp_rental_products_cart_item_validation">
                                                                        <input type="hidden" id="wcrp-rental-products-cart-item-timestamp" name="wcrp_rental_products_cart_item_timestamp">
                                                                        <input type="hidden" id="wcrp-rental-products-cart-item-price" name="wcrp_rental_products_cart_item_price">
                                                                        <input type="hidden" id="wcrp-rental-products-rent-from" name="wcrp_rental_products_rent_from">
                                                                        <input type="hidden" id="wcrp-rental-products-rent-to" name="wcrp_rental_products_rent_to">
                                                                        <input type="hidden" id="wcrp-rental-products-start-days-threshold" name="wcrp_rental_products_start_days_threshold">
                                                                        <input type="hidden" id="wcrp-rental-products-return-days-threshold" name="wcrp_rental_products_return_days_threshold">
                                                                        <input type="hidden" id="wcrp-rental-products-advanced-pricing" name="wcrp_rental_products_advanced_pricing">
                                                                        <input type="hidden" name="product_id" id="product-id">
                                                                        <div class="row mt-3">
                                                                            <div class="col-6 text-end">
                                                                                <button type="button" class="btn btn-outline-secondary line_btns shadow btn-wdth" data-bs-toggle="modal" data-bs-target="#exampleModal">戻る</button>
                                                                            </div>
                                                                            <div class="col-6 text-start">
                                                                                <input type="submit" name="model_form" value="選択する" class="btn btn-secondary btndark  shadow btn-wdth">
                                                                                <!-- <button type="button" class="btn btn-secondary btndark  shadow btn-wdth">選択する</button> -->
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
<?php endforeach; ?>
<div class="row">
    <div class="col-md-12 text-center mt-5 ">
        <!-- <button type="button" class="btn btn-secondary btndark_big shadow px-5">選択する</button> -->
    </div>
</div>
<?php endif ?>
</div>
<?php
function custom_add_to_cart()
{
    $has_etc_device = false;
    $car_features = wp_get_post_terms($_REQUEST['product_id'], 'car_features');
    foreach ($car_features as $feature) {
        if ($feature->slug === 'etc-on-board-device') {
            $has_etc_device = true;
        }
    }
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
                if ($has_etc_device) {
?>
                    <script>
                        window.location.href = "http://52.195.235.189/car-add-ons/";
                    </script>
                <?php
                } else {
                ?>
                    <script>
                        window.location.href = "http://52.195.235.189/goods/";
                    </script>
<?php
                }
                // wp_safe_redirect($redirect_url);
            }
        }
    }
}

// require_once MY_WC_PLUGIN_PATH . 'templates/footer-template.php';

?>
</body>

</html>