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

const CHILD_SEAT_SLUG = 'child-seat';
$data = isset($_SESSION['data']) ? $_SESSION['data'] : [];
require_once MY_WC_PLUGIN_PATH . 'includes/class-cart-details.php';
require_once MY_WC_PLUGIN_PATH . 'templates/header-template.php';
// removing car and associated add-ons //
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['remove_item_key'])) {
    $cart = WC()->cart;
    $cart_items = $cart->get_cart();
    $remove_item_key = sanitize_text_field($_POST['remove_item_key']);
    $unique_car_id = '';
    foreach ($cart_items as $cart_item_key => $cart_item) {
        if ($cart_item_key === $remove_item_key && isset($cart_item['unique_car_id'])) {
            $unique_car_id = $cart_item['unique_car_id'];
            break;
        }
    }
    $cart->remove_cart_item($remove_item_key);
    if ($unique_car_id) {
        foreach ($cart_items as $cart_item_key => $cart_item) {
            if (isset($cart_item['unique_car_id']) && $cart_item['unique_car_id'] === $unique_car_id) {
                $cart->remove_cart_item($cart_item_key);
            }
        }
    }

    wp_safe_redirect(home_url('/index.php/custom-cart-details/'));
    exit;
}


$cart_details = Custom_Cart_Details::cart_details();
$car_details = [];
$goods_details = [];
foreach ($cart_details as $cart_item_key => $cart_item) {
    $product = $cart_item['data'];
    $product_id = $product->get_id();
    $categories = wp_get_post_terms($product_id, 'product_cat');

    if (!is_wp_error($categories) && !empty($categories)) {
        $is_camping_good = false;
        $is_add_on = false;

        foreach ($categories as $category) {
            if ($category->slug === 'camping-goods') {
                $is_camping_good = true;
            }
            if ($category->slug === 'add-ons' || $category->slug === 'uncategorized') {
                $is_add_on = true;
            }
        }

        if ($is_camping_good) {
            $goods_details[$cart_item_key] = $cart_item;
        } elseif (!$is_camping_good && !$is_add_on) {
            $car_details[$cart_item_key] = $cart_item;
        }
    }
}

// Call the function to add or update the cart item
$cart_response = add_or_update_cart_item();

// // Function to add or update the cart item
function add_or_update_cart_item()
{
    $product_id = 0;
    $product_quantity = 0;

    $child_seat_slug = CHILD_SEAT_SLUG;

    // Get the product by slug
    $product = wc_get_product(get_page_by_path($child_seat_slug, OBJECT, 'product'));

    if (isset($_REQUEST['child_count'])) {
        // Set product ID and quantity
        $product_id = $product->get_id();

        $product_quantity = isset($_REQUEST['child_count']) ? $_REQUEST['child_count'] : 0;
    } elseif (isset($_REQUEST['adult_count'])) {
        // Set product ID and quantity
        $product_id = $product->get_id();

        $product_quantity = isset($_REQUEST['adult_count']) ? $_REQUEST['adult_count'] : 0;
    }


    // Get the cart items
    $cart = WC()->cart->get_cart();

    // Initialize a variable to track if the product is found in the cart
    $found = false;

    // Loop through the cart items
    foreach ($cart as $cart_item_key => $cart_item) {
        // Check if the product is already in the cart
        if ($cart_item['product_id'] === $product_id) {
            // If the product is found, update its quantity
            $response = WC()->cart->set_quantity($cart_item_key, $product_quantity);
            $found = true;
            break;
        }
    }

    // If the product is not found in the cart, add it to the cart
    if (!$found) {
        $response = WC()->cart->add_to_cart($product_id, $product_quantity);
    }

    return $response;
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
                <img src="<?php echo plugin_dir_url(__FILE__) . '../assets/images/back.png'; ?>"> 戻る</a>
        </div>
        <div class="stepper mt-3">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li class="active">4</li>
                <li>5</li>
            </ul>
        </div>
        <div class="sub_content_area">
            <h2 class="sub_heading">現在のご予約内容 <span style="font-weight: 200;font-size:51px">|</span></h2>
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
                <?php if (!empty($car_details)) : ?>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="drk-heading">選択されたクルマ</div>
                        </div>
                    </div>
                    <?php foreach ($car_details as $cart_item_key => $cart_item) :
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
                                            <h4 class="txt-center fn-28"><?php echo $product_name ?></h4>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4 text-center"> <img class="responsive-img" src="<?php echo  $product_image ?>"> </div>
                                        <div class="col-md-8">
                                            <div class="row">
                                                <div class="col-md-6 sub-head1 border-end txt-center fn-20"><?php echo $model_attribute ?></div>
                                                <div class="col-md-6 text-lg-end sub-head2 txt-center fn-20"><span>料金：</span> <?php echo $product_price ?>円 <span>(税込)</span></div>
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
                                                        16.4km/L(<?php echo $drive_type ?>)<br>
                                                        EV走行換算距離 <?php echo $ev_mileage ?>
                                                        <bn>
                                                            <!-- 57km -->
                                                    </div>

                                                    <div class="w-100 hr_blck dnone"></div>

                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-6 text-left_center">
                                                    <a href="<?php echo esc_url(add_query_arg(['change_car' => $cart_item_key], home_url('/index.php/book-your-car/'))); ?>"><button type="button" class="btn btn-secondary m_btm_btn_blacked_sm shadow px-5">変更する</button></a>
                                                </div>
                                                <div class="col-6 text-left_center">
                                                    <form method="post" action="">
                                                        <input type="hidden" name="remove_item_key" value="<?php echo $cart_item_key; ?>">
                                                        <button type="submit" class="btn btn-secondary m_btm_btn_blacked_sm shadow px-5">取り除く</button>
                                                    </form>
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
                                                <div class="col-3 brd-right fn-24"><?php echo $taxonomy ?></div>
                                                <div class="col-6 brd-right no-border text-left-right fn-24"><?php echo $rent_from ?></div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12" style="padding-right: 0px;">
                                                    <div class="hr_blck mt-3 mb-3"></div>
                                                </div>
                                            </div>
                                            <div class="row d-flex  justify-content-center align-items-center">
                                                <div class="col-3">
                                                    <div class="greybox">返却</div>
                                                </div>
                                                <div class="col-3 brd-right fn-24"><?php echo $taxonomy ?></div>
                                                <div class="col-6 brd-right no-border text-left-right fn-24"><?php echo $rent_to ?></div>
                                            </div>
                                        </div>

                                        <div class="col-md-3 text-center">
                                            <a href="<?php echo esc_url(add_query_arg(['change_car' => $cart_item_key], home_url('/index.php/book-your-car/'))); ?>"><button type="button" class="btn btn-secondary btndark_big shadow fnt15 px-4">変更する</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php endforeach ?>
                <?php endif ?>
                <?php if (!empty($goods_details)) : ?>
                    <?php foreach ($goods_details as $cart_item_key => $cart_item) :
                        $product = $cart_item['data'];
                        $product_id = $product->get_id();
                        $product_name = $product->get_name();
                        $product_price = $product->get_price();
                        $product_quantity = $cart_item['quantity'];
                        $product_image = get_the_post_thumbnail_url($product_id);
                        $product_description = $product->get_description();
                        $rent_from = isset($data['rent_from']) ? $data['rent_from'] : '';
                        $rent_to = isset($data['rent_to']) ? $data['rent_to'] : '';
                        $rent_from_date = new DateTime($rent_from);
                        $rent_to_date = new DateTime($rent_to);
                        $interval = $rent_from_date->diff($rent_to_date);
                        $interval = $interval->days + 1;
                    ?>

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
                                                    <div class="col-4 mt-3 mr-2"> <button type="button" class="btn btn-secondary m_btm_btn_blacked1_sm shadow w-100 update-cart-button" data-cart-item-key="<?php echo $cart_item_key; ?>">変更する</button></div>
                                                    <div class="col-4 mt-3 ml-4">
                                                        <form method="post" action="">
                                                            <input type="hidden" name="remove_item_key" value="<?php echo $cart_item_key; ?>">
                                                            <button type="submit" class="btn btn-secondary m_btm_btn_blacked1_sm shadow px-5">取り除く</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php endforeach ?>
                <?php endif ?>
                <?php if (!WC()->cart->is_empty()) { ?>
                    <div class="row mt-3">
                        <div class="col-md-12">
                            <div class="drk-heading">選択されたキャンプグッズ</div>
                        </div>
                    </div>
                    <div>
                        <div style="font-family: Arial, sans-serif;">
                            <div class="child-seat">
                                <div style="display: flex; align-items: center; margin-bottom: 30px;">
                                    <div class="col-md-3 d-flex align-items-center">
                                        <span style="background-color: red;color: white;padding: 5px;width: 25%;text-align: center;">必須</span>
                                        <span style="margin-left: 10px; font-size: 20px;">大人</span>
                                    </div>
                                    <div class="col-md-3 ">
                                        <select name="adult_count" id="adult_count" style="margin-left: 10px;padding: 5px;width: 90%;height: 40px;">
                                            <option value="">オプションを選択してください</option>
                                            <option value="1">1人</option>
                                            <option value="2">2人</option>
                                            <option value="3">3人</option>
                                            <option value="4">4人</option>
                                            <option value="5">5人</option>
                                        </select>
                                    </div>
                                </div>

                                <div style="display: flex; align-items: center; margin-bottom: 30px;">
                                    <div class="col-md-3 d-flex align-items-center">
                                        <span style="background-color: red;color: white;padding: 5px;width: 25%;text-align: center;">必須</span>
                                        <span style="margin-left: 10px; font-size: 20px;">子供（6歳以下）</span>
                                    </div>
                                    <div class="col-md-3">
                                        <select name="child_count" id="child_count" style="margin-left: 10px;padding: 5px;width: 90%;height: 40px;">
                                            <option value="">オプションを選択してください</option>
                                            <option value="0">0人</option>
                                            <option value="1">1人</option>
                                            <option value="2">2人</option>
                                            <option value="3">3人</option>
                                            <option value="4">4人</option>
                                            <option value="5">5人</option>
                                        </select>
                                    </div>
                                </div>
                                <ul style="list-style-type: disc; margin-left: 20px;">
                                    <li>6歳未満の幼児を同乗させる場合、チャイルドシートの使用が義務付けられています。</li>
                                    <li>オプション料金1台当たり1,100円（税込）</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                <?php } ?>
                <?php if (!empty($cart_details)) : ?>
                    <div class="row mt-3">
                        <div class="col-md-12">

                            <div class="drk-heading">ご利用料金</div>

                        </div>

                    </div>
                    <?php foreach (WC()->cart->get_cart() as $cart_item_key => $cart_item) : ?>
                        <div class="row mt-3" data-cart-item-key="<?php echo $cart_item_key; ?>">
                            <div class="col-8 cart-item-name fn-22"><?php echo $cart_item['data']->get_name(); ?></div>
                            <div class="col-4 text-end cart-item-price fn-22" id="cart-item-price-<?php echo $cart_item_key; ?>"><?php echo wc_price($cart_item['line_total']); ?>円</div>
                        </div>
                    <?php endforeach; ?>
                    <div class="row  mt-3">
                        <div class="col-md-12">
                            <div class="w-100 hr_blck"></div>
                        </div>
                    </div>

                    <div class="row  mt-3">
                        <div class="col-8 fn-24">合計ご利用料金</div>
                        <div class="col-4 text-end cart-subtotal-amount fn-24"><?php echo WC()->cart->get_cart_total(); ?>円 (税込）</div>
                    </div>


                    <div class="row">
                        <div class="col-md-12 text-center mt-4">
                            <a href="<?php echo wc_get_checkout_url(); ?>" id="checkout-button-link">
                                <button type="button" class="btn btn-secondary m_btm_btn_black_checkout shadow" <?php echo (!empty($car_details)) ? '' : 'disabled'; ?> id="checkout-button">
                                    支払い情報の入力
                                </button>
                            </a>
                            <div id="popoverContent" class="popover">車を追加して支払いに進みます。</div>
                        </div>
                        <div class="col-md-12 text-center mt-4">
                            <a href="<?php echo esc_url(home_url('/index.php/book-your-car/')); ?>"><button type="button" class="btn btn-outline-secondary m_btm_btn_line_checkout shadow ">戻る</button></a>
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

<script>
    let child_count = localStorage.getItem("child_count");

    if (child_count != null) {
        document.getElementById("child_count").value = child_count;
    }

    document.getElementById('child_count').addEventListener('change', function() {
        let selectedValue = this.value;
        localStorage.setItem("child_count", selectedValue);
        // Make a fetch request to the same page
        fetch(window.location.pathname + "?child_count=" + selectedValue)
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .then(data => {
                // Reload the page after fetch
                location.reload();
            })
            .catch(error => {
                // Handle errors
                console.error('There was a problem with the fetch operation:', error);
            });
    });

    let adult_count = localStorage.getItem("adult_count");

    if (adult_count != null) {
        document.getElementById("adult_count").value = adult_count;
    }

    document.getElementById('adult_count').addEventListener('change', function() {
        let selectedValue = this.value;
        localStorage.setItem("adult_count", selectedValue);
        // Make a fetch request to the same page
        // fetch(window.location.pathname + "?adult_count=" + selectedValue)
        //     .then(response => {
        //         if (response.ok) {
        //             return response.text();
        //         } else {
        //             throw new Error('Network response was not ok.');
        //         }
        //     })
        //     .then(data => {
        //         // Reload the page after fetch
        //         location.reload();
        //     })
        //     .catch(error => {
        //         // Handle errors
        //         console.error('There was a problem with the fetch operation:', error);
        //     });
    });
</script>