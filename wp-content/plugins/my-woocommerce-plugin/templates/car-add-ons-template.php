<?php
session_start();
// if (!isset($_SESSION['visited_index']) || $_SESSION['visited_index'] !== true) {
//     // If not, redirect them to the index page
//     wp_safe_redirect(home_url('/index.php/'));
//     exit();
// }
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
if (isset($_GET['change_add_on'])) {
    $_SESSION['check_add_on_key'] = sanitize_text_field($_GET['change_add_on']);
}
$data = isset($_SESSION['data']) ? $_SESSION['data'] : [];
require_once MY_WC_PLUGIN_PATH . 'includes/class-car-add-ons.php';
require_once MY_WC_PLUGIN_PATH . 'templates/header-template.php';
require_once MY_WC_PLUGIN_PATH . 'includes/class-custom-price-calculation.php';
$add_on_products = Car_Addons::get_products_by_category_name('add-ons');
// $has_etc_device = false;
// $has_insurance = false;
// $no_add_ons = false;
$has_validation_key = false;
$check_add_on_key = isset($_SESSION['check_add_on_key']) ? $_SESSION['check_add_on_key'] : null;
if ($check_add_on_key) {
    $cart = WC()->cart;
    $cart_details = $cart->get_cart();
    foreach ($cart_details as $cart_item_key => $cart_item) {
        if (isset($cart_item['wcrp_rental_products_cart_item_validation'])) {
            $has_validation_key = true;
            break;
        }
    }
}
$unique_car_id = isset($_SESSION['unique_car_id']) ? $_SESSION['unique_car_id'] : '';
// $car_features = wp_get_post_terms($_SESSION['car_id'], 'car_features');
// foreach ($car_features as $feature) {
//     if ($feature->slug === 'etc-on-board-device') {
//         $has_etc_device = true;
//     }
//     if ($feature->slug === 'insurance') {
//         $has_insurance = true;
//     }
// }
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['action'])) {
        $is_add_on = false;
        $found_add_ons = array();
        $check_add_on_key = isset($_SESSION['check_add_on_key']) ? $_SESSION['check_add_on_key'] : null;
        if ($check_add_on_key) {
            $cart = WC()->cart;
            $cart_details = $cart->get_cart();
            foreach ($cart_details as $cart_item_key => $cart_item) {
                $product = $cart_item['data'];
                $product_id = $product->get_id();
                $categories = wp_get_post_terms($product_id, 'product_cat');
                if (!is_wp_error($categories) && !empty($categories)) {
                    $is_add_on = false;
                    foreach ($categories as $category) {
                        if ($category->slug === 'add-ons') {
                            $is_add_on = true;
                            $add_on_name = $product->get_slug();
                            $found_add_ons[] = $add_on_name;
                        }
                    }
                }
            }
        }
        foreach ($_POST as $key => $value) {
            $flag = false;
            if (!empty($value)) {
                $cart_item_data = [];
                $product_id = intval($value);
                if ($product_id > 0) {
                    $product = wc_get_product($product_id);
                    foreach ($found_add_ons as $found) {
                        if ($found === $product->get_slug()) {
                            $flag = true;
                        }
                    }
                    if ($product && is_a($product, 'WC_Product')) {
                        $product_price = $product->get_price();
                    } else {
                        echo "Error: Product not found or invalid product ID: " . $product_id;
                    }
                } else {
                    echo "Error: Invalid product ID.";
                }
                $quantity = 1;
                $total_rent_amount = Custom_Price_calculation::set_rent_amount($product_price);
                $cart_item_data['wcrp_rental_products_cart_item_price'] = $total_rent_amount;
                $cart_item_data['unique_car_id'] = sanitize_text_field($_POST['car_id']);
                if (class_exists('WC_Cart') && !$flag) {
                    $response = WC()->cart->add_to_cart($product_id, $quantity, 0, array(), $cart_item_data);
                    // if ($response) {
                    //     echo "<script> alert('message successfully sent')</script>";
                    // }
                }
            }
        }
    }
    if ($_POST['action'] == 'select_camping_goods') {
        wp_safe_redirect(home_url('/index.php/goods/'));
        exit;
    }
    if ($_POST['action'] == 'proceed_to_checkout') {
        wp_safe_redirect(home_url('/index.php/custom-cart-details/'));
        exit;
    }
}
?>

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
        <div class="back_show"><a href="#"></a></div>
        <h1 class="top_title-small">プラグインアウトドア<br>予約フォー</h1>

        <div class="back back_hide"><a href="<?php echo esc_url(home_url('/index.php/book-your-car/')); ?>">
                <img src="<?php echo plugin_dir_url(__FILE__) . '../assets/images/back.png'; ?>"> 戻る</a>
        </div>
        <div class="stepper mt-3">
            <ul>
                <li>1</li>
                <li class="active">2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </div>
        <form action="" method="POST">
            <div class="sub_content_area">
                <h2 class="sub_heading">オプション選択 <span style="font-weight: 200;font-size:51px">|</span></h2>
                <div class="w-100 hr_blck"></div>
                <div class="container m-0 p-0 full_width">
                    <?php if ($check_add_on_key && !$has_validation_key) : ?>
                        <script>
                            var message = '最初に車を選択してください。';
                            var type = 'error';
                            notification(message, type);
                        </script>
                    <?php else : ?>
                        <?php if (!empty($add_on_products)) : ?>
                            <?php foreach ($add_on_products as $index => $product_post) :
                                $product = wc_get_product($product_post->ID);

                                // Add conditions for displaying add-ons
                                // $display_add_on = false;
                                // if ($has_etc_device && strpos($product->get_slug(), 'etc-card') !== false) {
                                //     $display_add_on = true;
                                // }
                                // if ($has_insurance && strpos($product->get_slug(), 'insurance') !== false) {
                                //     // exit;
                                //     $display_add_on = true;
                                // }
                                // if (!$has_insurance && strpos($product->get_slug(), 'insurance') == false && !$has_etc_device && strpos($product->get_name(), 'etc-card') == false) {
                                //     $no_add_ons = true;
                                // }

                                // if ($display_add_on) :
                            ?>
                                <div class="row">
                                    <div class="col-12 col-lg-6 mt-3">
                                        <div class="fn-28"><?php echo $product->get_name(); ?></div>
                                        <?php if ($product->get_slug() === 'etc-card') : ?>
                                            <div class="mt-1">料金：　<?php echo wc_price($product->get_price()); ?> 円 ／ 1枚</div>
                                        <?php endif ?>
                                        <?php if ($product->get_slug() === 'insurance') : ?>
                                            <div class="mt-1">料金：　<?php echo wc_price($product->get_price()); ?> 円 ／ 1日</div>
                                            <div class="mt-1"><a href="<?php echo esc_url(home_url('/liability_compensation/')) ?>">免責保証について</a></div>
                                        <?php endif ?>
                                    </div>
                                    <div class="col-6 col-lg-3 mt-3">
                                        <div class="radio_box">
                                            <div class="fn-24">希望する</div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="product_option_<?php echo $index; ?>" id="option_<?php echo $index; ?>_yes" value="<?php echo $product->get_id(); ?>">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6 col-lg-3 mt-3">
                                        <div class="radio_box">
                                            <div class="fn-24">希望しない</div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="product_option_<?php echo $index; ?>" id="option_<?php echo $index; ?>_no" value="" checked>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        <?php endif ?>
                        <!-- <script>
                            var message = '選択された車には追加製品がありません';
                            var type = 'error';
                            notification(message, type);
                        </script> -->
                    <?php endif ?>
                    <div class="row">
                        <input type="hidden" name="car_id" value="<?php echo $unique_car_id; ?>">
                        <div class="col-md-12 text-center mt-6">
                            <button type="submit" class="btn btn-secondary m_btm_btn_black shadow" name="action" value="select_camping_goods">キャンプグッズ選択へ</button>
                        </div>
                        <div class="col-md-12 text-center mt-4">
                            <button type="submit" class="btn btn-outline-secondary m_btm_btn_line shadow" name="action" value="proceed_to_checkout">このまま決済へ進む</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
    <?php
    require_once MY_WC_PLUGIN_PATH . 'templates/footer-template.php';
    ?>
</body>