<?php
session_start();
if (!isset($_SESSION['visited_index']) || $_SESSION['visited_index'] !== true) {
    // If not, redirect them to the index page
    wp_safe_redirect(home_url('/index.php/'));
    exit();
}
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
require_once MY_WC_PLUGIN_PATH . 'templates/header-template.php';
require_once MY_WC_PLUGIN_PATH . 'includes/class-custom-price-calculation.php';
// Function definition 
function function_alert($message)
{
    // Display the alert box  
    echo "<script>alert('$message');</script>";
}

const GOODS_PURCHASE_CATEGORY = "camping-goods";

$search_keyword = !empty($_REQUEST['keyword-search']) ? $_REQUEST['keyword-search'] : "";
$tag_slug = !empty($_REQUEST['tag-search']) ? $_REQUEST['tag-search'] : "";
$product_good_tags = [];

require_once MY_WC_PLUGIN_PATH . 'includes/class-custom-category-listing.php';

$mainCategories = Custom_Category_Listing::get_categories();

// check category existed or not.
if (empty($mainCategories)) {
    function_alert('Category is empty!');
}

$product_good_tags = get_tags_by_good_category($mainCategories);

function get_tags_by_good_category($mainCategories)
{
    $product_good_tags = [];
    foreach ($mainCategories as $mCategories) {

        if ($mCategories->slug == GOODS_PURCHASE_CATEGORY) {

            $subCategories = Custom_Category_Listing::get_subcategories($mCategories->term_id);

            if (empty($subCategories)) {
                function_alert('Purchase sub category is empty!');
            }

            if (!empty($subCategories)) {
                foreach ($subCategories as $sCategories) {
                    $products = fetch_products($sCategories->name);

                    foreach ($products as $product) {
                        $product_tags = wp_get_post_terms($product->get_id(), 'product_tag');

                        if (!empty($product_tags)) {
                            foreach ($product_tags as $product_tag) {

                                if (!empty($product_tag->name) && !in_array($product_tag->name, $product_good_tags)) {
                                    $product_good_tags[] = $product_tag->name;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return $product_good_tags;
}

// check the array has goods purachase category.
function good_category_existed($categories, $goods_category_slug)
{
    foreach ($categories as $category) {
        if ($category->slug === $goods_category_slug) {
            return true;
        }
    }
    return false;
}

$goods_category_slug = GOODS_PURCHASE_CATEGORY;

if (!good_category_existed($mainCategories, $goods_category_slug)) {
    function_alert('Goods purchase category is empty!');
}

function fetch_products($category_slug = "", $search_keyword = "", $tag_slug = "")
{
    // Get category
    $product_cat = get_term_by('slug', $category_slug, 'product_cat');

    // Get tag
    $product_tag = get_term_by('slug', $tag_slug, 'product_tag');

    // Query products
    $args = array(
        'status' => 'publish',
        'limit' => -1, // -1 to get all products
        'category' => (!empty($product_cat)) ? array($product_cat->slug) : "", // Array of category slug.
        's' => (!empty($search_keyword)) ? $search_keyword : "", // Search key word.
        'tag' => (!empty($product_tag)) ? array($product_tag->slug) : "", // Array of tag slug.
    );

    $products = wc_get_products($args);

    return $products;
}

goods_added_to_cart();

function goods_added_to_cart()
{
    if (isset($_REQUEST['product_id']) && isset($_REQUEST['product_quanty'])) {
        $product_id = intval($_REQUEST['product_id']);
        $product = wc_get_product($product_id);
        $product_quantity = intval($_REQUEST['product_quanty']);
        $cart_item_data = [];
        $total_rent_amount = Custom_Price_calculation::set_rent_amount($product->get_price());
        $cart_item_data['wcrp_rental_products_cart_item_price'] = $total_rent_amount;
        // Ensure WooCommerce is loaded
        if (class_exists('WC_Cart')) {
            $response = WC()->cart->add_to_cart($product_id, $product_quantity, 0, array(), $cart_item_data);

            if ($response) {
?>
                <script>
                    var message = '商品をカートに追加しました！';
                    var type = 'success';
                    notification(message, type);
                </script>
            <?php
            } else {
            ?>
                <script>
                    var message = '問題が発生しました！';
                    var type = 'error';
                    notification(message, type);
                </script>
<?php
            }
        }
    }
}

?>

<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
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

        document.addEventListener('DOMContentLoaded', function() {
            const btnBox = document.querySelector('.btn_box');
            const toggleButton = document.querySelector('.toggle-button');

            toggleButton.addEventListener('click', function() {
                if (btnBox.scrollHeight > 100) {
                    btnBox.classList.toggle('expanded');
                    if (btnBox.classList.contains('expanded')) {
                        toggleButton.textContent = '\u2715'; // Close icon (×)
                    } else {
                        toggleButton.textContent = '\u2261'; // Hamburger icon (≡)
                    }
                }
            });

            // Initially check the height and add 'collapsed' class if needed
            if (btnBox.scrollHeight <= 60) {
                toggleButton.style.display = 'none';
            } else {
                btnBox.classList.add('collapsed');
            }
        });
    </script>
</head>

<body>
    <div class="sp_container">
        <div class="back_show"><a href="#"></a></div>
        <h1 class="top_title-small">プラグインアウトドア<br>
            予約フォー</h1>

        <div class="back back_hide"><a href="<?php echo esc_url(add_query_arg(['change_add_on' => uniqid('add_on_')], home_url('/index.php/car-add-ons/'))); ?>"><img src="<?php echo plugin_dir_url(__FILE__) . '../assets/images/back.png'; ?>">戻る</a></div>
        <div class="stepper mt-3">
            <ul>
                <li>1</li>
                <li>2</li>
                <li class="active">3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </div>
        <div class="sub_content_area">
            <form action="" method="POST">
                <div class="row">
                    <div class="col-md-4 fnt15"><img src="<?php echo plugin_dir_url(__FILE__) . '../assets/images/search.png'; ?>">キーワード検索 </div>
                    <div class="col-md-8">
                        <div class="d-flex justify-content-between">
                            <div class="w-65"><input type="text" class="form-control txt-box-curve" name="keyword-search" id="keyword-search" value="<?php echo $search_keyword; ?>" placeholder="キャンプグッズ"></div>
                            <div class="w-30"> <button type="submit" class="btn btn-secondary m_btm_btn_blacked shadow w-100">検索する</button></div>
                        </div>
                    </div>
                </div>

                <div class="row mt-3 p-60">
                    <div class="col-md-4 fnt15"><img src="<?php echo plugin_dir_url(__FILE__) . '../assets/images/discount.png'; ?>">タグで絞る </div>
                    <div class="col-md-8">
                        <div class="expandable_box">
                            <div class="btn_box" style="border:none !important;">
                                <div class="txt_highlight2 ul-auto">
                                    <ul>
                                        <?php foreach ($product_good_tags as $value) { ?>
                                            <li style="display:inline-block;"><button name="tag-search" value="<?php echo $value; ?>" type="submit"><?php echo $value; ?></button></li>
                                        <?php } ?>
                                    </ul>
                                </div>
                            </div>
                            <div class="toggle-button-container">
                                <button class="toggle-button" type="button">&#x2261;</button> <!-- Unicode character for the "hamburger" icon -->
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <section>
                <?php

                foreach ($mainCategories as $mCategories) {

                    if ($mCategories->slug == GOODS_PURCHASE_CATEGORY) {

                        $subCategories = Custom_Category_Listing::get_subcategories($mCategories->term_id);

                        if (empty($subCategories)) {
                            function_alert('Purchase sub category is empty!');
                        }

                        if (!empty($subCategories)) {
                            foreach ($subCategories as $sCategories) {
                                $products = fetch_products($sCategories->slug, $search_keyword, $tag_slug);
                                if (count($products)) {
                ?>
                                    <div class="row mb-4 add-mt">
                                        <div class="col-md-12">
                                            <h2 class="sub_heading"><?php echo $sCategories->name; ?><span style="font-weight: 200"> |</span></h2>
                                            <div class="w-100 hr_blck"></div>
                                        </div>
                                    </div>
                                <?php } ?>
                                <div class="row">
                                    <?php
                                    foreach ($products as $product) {
                                    ?>
                                        <div class="col-md-6">
                                            <form method="POST" action="">
                                                <div class="product_box">
                                                    <input type="hidden" name="product_id" value="<?php echo $product->get_id(); ?>">
                                                    <a href="<?php echo home_url("index.php/goods-details/?product_id={$product->get_id()}"); ?>"><img class="w-100" src="<?php echo get_the_post_thumbnail_url($product->get_id()); ?>" alt="Car Image"></a>
                                                    <h2 class="min_sub mt-2"><?php echo $product->get_name(); ?><span style="font-weight: 200"></span></h2>
                                                    <div class="w-100 hr_blck"></div>
                                                    <div class="d-flex justify-content-between mt-2">
                                                        <div><b>¥<?php echo $product->get_price(); ?></b> (税込)</div>
                                                        <div>
                                                            <div class="txt_highlight ul-auto">
                                                                <?php
                                                                $tgs = get_the_terms($product->get_id(), 'product_tag');
                                                                ?>
                                                                <ul>
                                                                    <?php
                                                                    if (!empty($tgs)) {
                                                                        foreach ($tgs as $tag) {
                                                                            if (!empty($tag->name) && !in_array($tag->name, $displayed_tags = [])) {
                                                                                $displayed_tags[] = $tag->name;
                                                                    ?>
                                                                                <li><?php echo $tag->name; ?></li>
                                                                    <?php }
                                                                        }
                                                                    }
                                                                    ?>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <?php echo $product->get_description(); ?>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-4"> <select name="product_quanty" class="form-select mt-3" aria-label="Default select example">
                                                                <option selected value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                                <option value="6">6</option>
                                                                <option value="7">7</option>
                                                                <option value="8">8</option>
                                                                <option value="9">9</option>
                                                                <option value="10">10</option>
                                                            </select></div>
                                                        <div class="col-8 mt-3"> <button type="submit" class="btn btn-secondary m_btm_btn_blacked shadow w-100">検索する</button></div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    <?php  } ?>
                                </div>
                <?php

                            }
                        }
                    } else {
                    }
                }
                ?>
            </section>
        </div>
    </div>
    <a href="<?php echo home_url("index.php/custom-cart-details"); ?>">
        <button class="cart-button">カートを見る</button>
    </a>
    <?php
    require_once MY_WC_PLUGIN_PATH . 'templates/footer-template.php';
    ?>
</body>

</html>