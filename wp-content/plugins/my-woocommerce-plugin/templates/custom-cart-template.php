<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
require_once MY_WC_PLUGIN_PATH . 'includes/class-cart-details.php';
require_once MY_WC_PLUGIN_PATH . 'templates/header-template.php';
$cart_details = Custom_Cart_Details::cart_details();
$has_rental_product = false;
$has_non_rental_product = false;
foreach ($cart_details as $cart_item) {
    if (isset($cart_item['wcrp_rental_products_cart_item_validation'])) {
        $has_rental_product = true;
    } else {
        $has_non_rental_product = true;
    }
}
?>

<head>
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
        <div class="back back_hide"><a href="<?php echo esc_url(home_url('/index.php/goods/')); ?>">
                < Back</a>
        </div>
        <div class="stepper mt-3">
            <ul>
                <a href="<?php echo esc_url(home_url('/index.php/book-your-car/')); ?>">
                    <li>1</li>
                </a>
                <a href="<?php echo esc_url(home_url('/index.php/car-add-ons/')); ?>">
                    <li>2</li>
                </a>
                <a href="<?php echo esc_url(home_url('/index.php/goods/')); ?>">
                    <li>3</li>
                </a>
                <a href="<?php echo esc_url(home_url('/index.php/custom-cart-details/')); ?>">
                    <li class="active">4</li>
                </a>
                <a href="<?php echo esc_url(home_url('/index.php/checkout/')); ?>">
                    <li>5</li>
                </a>
            </ul>
        </div>
        <div class="sub_content_area">
            <h2 class="sub_heading">オプション選択 <span style="font-weight: 200">|</span></h2>
            <div class="w-100 hr_blck"></div>
            <div class="container m-0 p-0 full_width">
                <?php if (empty($cart_details)) : ?>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="cont_box mt-4">
                                <div class="row">
                                    <div class="col-md-12 text-center">
                                        <h4>カートは空です</h4>
                                        <a href="<?php echo esc_url(home_url('/index.php/book-your-car/')); ?>"><button type="button" class="btn btn-secondary m_btm_btn_black shadow">キャンプグッズ選択へ</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php endif ?>
                <?php if ($has_rental_product) : ?>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="drk-heading">選択されたクルマ</div>
                        </div>
                    </div>
                    <?php foreach ($cart_details as  $cart_item_key => $cart_item) :
                        $is_rental_product = isset($cart_item['wcrp_rental_products_cart_item_validation']);
                        if ($is_rental_product) :
                            $product = $cart_item['data'];
                            $product_id = $product->get_id();
                            $product_name = $product->get_name();
                            $product_quantity = $cart_item['quantity'];
                            $product_price = $product->get_price();
                            $rent_from = $cart_item['wcrp_rental_products_rent_from'];
                            $rent_to = $cart_item['wcrp_rental_products_rent_to'];
                            $rental_price = $cart_item['wcrp_rental_products_cart_item_price'];
                            $product_image = get_the_post_thumbnail_url($product_id);
                            $attributes = $product->get_attributes();
                            $model_attribute = $product->get_attribute('car-model');
                            $passenger_attribute = $product->get_attribute('number-of-passengers');
                            $drive_type = $product->get_attribute('drive-type');
                            $car_features = wp_get_post_terms($product_id, 'car_features');
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
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="cont_box mt-4">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <h4 class="txt-center"><?php echo $product_name ?></h4>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-4 text-center"> <img class="responsive-img" src="<?php echo  $product_image ?>"> </div>
                                            <div class="col-md-8">
                                                <div class="row">
                                                    <div class="col-md-6 sub-head1 border-end txt-center"><?php echo $model_attribute ?></div>
                                                    <div class="col-md-6 text-lg-end sub-head2 txt-center"><span>料金：</span> <?php echo $product_price ?>円 <span>(税込)</span></div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-md-12">
                                                        <div class="d-flex col_dir ">
                                                            <div class="text16 txt-center">乗車人数：<?php echo $passenger_attribute ?>人 </div>
                                                            <div class="txt_highlight ul-auto">
                                                                <ul>
                                                                    <?php foreach ($car_features as $feature) : ?>
                                                                        <li><?php echo esc_html($feature->name); ?></li>
                                                                    <?php endforeach ?>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="hr_blck line-position"></div>
                                                        <div class="mt-2 text-left_center mb-3"> 駆動式： <?php echo $drive_type ?><br>
                                                            ハイブリッド燃料消費率 <?php echo $hybrid_fule_type ?> <br>
                                                            16.4km/L<?php echo $drive_type ?><br>
                                                            EV走行換算距離 <?php echo $ev_mileage ?>
                                                            <bn>
                                                                <!-- 57km -->
                                                        </div>

                                                        <div class="w-100 hr_blck dnone"></div>

                                                    </div>
                                                </div>
                                                <div class="row mt-3">
                                                    <div class="col-12 text-left_center">
                                                        <a href="<?php echo esc_url(add_query_arg(['change_car' => $cart_item_key], home_url('/index.php/book-your-car/'))); ?>"><button type="button" class="btn btn-secondary btndark_big shadow px-5">変更する</button></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-md-12">
                                    <div class="drk-heading">出発返却店舗・日時</div>
                                    <div class="boxy mt-3 p-3">
                                        <div class="row d-flex  justify-content-center align-items-center">
                                            <div class="col-md-9">
                                                <div class="row d-flex  justify-content-center align-items-center">
                                                    <div class="col-3">
                                                        <div class="greybox">出発</div>
                                                    </div>
                                                    <div class="col-3 brd-right "><?php echo $taxonomy ?></div>
                                                    <div class="col-6 brd-right no-border text-left-right"><?php echo $rent_from ?></div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="hr_blck mt-3 mb-3"></div>
                                                    </div>
                                                </div>
                                                <div class="row d-flex  justify-content-center align-items-center">
                                                    <div class="col-3">
                                                        <div class="greybox">出発</div>
                                                    </div>
                                                    <div class="col-3 brd-right"><?php echo $taxonomy ?></div>
                                                    <div class="col-6 brd-right no-border text-left-right"><?php echo $rent_to ?></div>
                                                </div>
                                            </div>
                                            <div class="col-md-3 text-center">
                                                <a href="<?php echo esc_url(add_query_arg(['change_car' => $cart_item_key], home_url('/index.php/book-your-car/'))); ?>"><button type="button" class="btn btn-secondary btndark_big shadow fnt15 px-4">変更する</button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <?php endif ?>
                    <?php endforeach ?>
                <?php endif ?>
                <?php if ($has_non_rental_product) : ?>
                    <?php foreach ($cart_details as $cart_item_key => $cart_item) :
                        $is_rental_product = isset($cart_item['wcrp_rental_products_cart_item_validation']);
                        if (!$is_rental_product) :
                            $product = $cart_item['data'];
                            $product_id = $product->get_id();
                            $product_name = $product->get_name();
                            $product_price = $product->get_price();
                            $product_quantity = $cart_item['quantity'];
                            $product_image = get_the_post_thumbnail_url($product_id);
                            $product_description = $product->get_description();
                            $rent_from = $cart_item['wcrp_rental_products_rent_from'];
                            $rent_to = $cart_item['wcrp_rental_products_rent_to'];
                            $rent_from_date = new DateTime($rent_from);
                            $rent_to_date = new DateTime($rent_to);
                            $interval = $rent_from_date->diff($rent_to_date);
                            $interval = $interval->days + 1;
                            $is_camping_good = false;
                            $categories = wp_get_post_terms($product_id, 'product_cat');
                            if (!is_wp_error($categories) && !empty($categories)) {
                                foreach ($categories as $category) {
                                    if ($category->slug === 'camping-goods') {
                                        $is_camping_good = true;
                                    }
                                }
                            }

                    ?>
                            <?php if ($is_camping_good) : ?>
                                <div class="row mt-3">
                                    <div class="col-md-12">

                                        <div class="drk-heading">選択されたキャンプグッズ</div>

                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="cont_box mt-4">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <h4 class="txt-center"><?php echo $product_name ?></h4>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-4 text-center"> <img src="<?php echo  $product_image ?>" class="w-100"> </div>
                                                <div class="col-md-8">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div>
                                                                <?php echo $product_description ?>
                                                            </div>
                                                            <div class="mt-2">Coleman(コールマン)</div>
                                                            <div class="sub-head2 mt-2"><?php echo $product_price ?>円 <span>(税込)</span> / <?php echo $interval ?>日</div>
                                                        </div>
                                                        <div class="row">
                                                            <label for="quantity-<?php echo $cart_item_key; ?>"></label>
                                                            <div class="col-3">
                                                                <select class="form-select mt-3" aria-label="Default select example" id="quantity-<?php echo $cart_item_key; ?>" name="quantity">
                                                                    <?php for ($i = 1; $i <= 10; $i++) : ?>
                                                                        <option value="<?php echo $i; ?>" <?php selected($product_quantity, $i); ?>>
                                                                            <?php echo $i; ?>
                                                                        </option>
                                                                    <?php endfor; ?>
                                                                </select>
                                                            </div>
                                                            <input type="hidden" id="item-base-price-<?php echo $cart_item_key; ?>" value="<?php echo $product_price; ?>">
                                                            <div class="col-6 mt-3"> <button type="button" class="btn btn-secondary m_btm_btn_black_sm shadow w-100 update-cart-button" data-cart-item-key="<?php echo $cart_item_key; ?>">変更する</button></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <?php else : $add_ons = true ?>
                            <?php endif ?>
                            <?php if ($add_ons) : ?>
                                <div class="row mt-3">
                                    <div class="col-md-12">

                                        <div class="drk-heading">選択したアドオン</div>

                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="cont_box mt-4">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <h4 class="txt-center"><?php echo $product_name; ?></h4>
                                                    <p> 料金：<?php echo $product_price; ?>円 (税込) </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <?php endif ?>
                        <?php endif ?>
                    <?php endforeach ?>
                <?php endif ?>
                <?php if (!empty($cart_details)) : ?>
                    <div class="row mt-3">
                        <div class="col-md-12">

                            <div class="drk-heading">ご利用料金</div>

                        </div>

                    </div>

                    <?php foreach (WC()->cart->get_cart() as $cart_item_key => $cart_item) : ?>
                        <div class="row mt-3" data-cart-item-key="<?php echo $cart_item_key; ?>">
                            <div class="col-8 cart-item-name"><?php echo $cart_item['data']->get_name(); ?></div>
                            <div class="col-4 text-end cart-item-price" id="cart-item-price-<?php echo $cart_item_key; ?>"><?php echo wc_price($cart_item['line_total']); ?>円</div>
                        </div>
                    <?php endforeach; ?>
                    <div class="row  mt-3">
                        <div class="col-md-12">
                            <div class="w-100 hr_blck"></div>
                        </div>
                    </div>

                    <div class="row  mt-3">
                        <div class="col-8">合計ご利用料金</div>
                        <div class="col-4 text-end cart-subtotal-amount"><?php echo WC()->cart->get_cart_total(); ?>円 (税込）</div>
                    </div>


                    <div class="row">
                        <div class="col-md-12 text-center mt-4">
                            <a href="<?php echo wc_get_checkout_url(); ?>" id="checkout-button-link">
                                <button type="button" class="btn btn-secondary m_btm_btn_black shadow" <?php echo $has_rental_product ? '' : 'disabled'; ?> id="checkout-button">
                                    支払い情報の入力
                                </button>
                            </a>
                            <div id="popoverContent" class="popover">車を追加して支払いに進みます。</div>
                        </div>
                        <div class="col-md-12 text-center mt-4">
                            <a href="<?php echo esc_url(home_url('/index.php/book-your-car/')); ?>"><button type="button" class="btn btn-outline-secondary m_btm_btn_line shadow ">戻る</button></a>
                        </div>

                    </div>
                <?php endif ?>
            </div>
        </div>
    </div>
    <?php
    require_once MY_WC_PLUGIN_PATH . 'templates/footer-template.php';
    ?>
</body>