<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

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
                    $products = fetch_products($sCategories->slug);

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
        $product_quantity = intval($_REQUEST['product_quanty']);

        // Ensure WooCommerce is loaded
        if (class_exists('WC_Cart')) {
            $response = WC()->cart->add_to_cart($product_id, $product_quantity);

            if ($response) {
                function_alert('Product added to cart!');
            }

            // Redirect to the cart page after adding the product to the cart

            // wp_safe_redirect(home_url('index.php/goods-details/'));
            // exit;
        }
    }
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
        <div class="back_show"><a href="#"><img src="<?php echo plugin_dir_url(__FILE__) . '../assets/images/back.png'; ?>"></a></div>
        <h1 class="top_title-small">プラグインアウトドア<br>
            予約フォー</h1>

        <div class="back back_hide"><a href="#"><img src="<?php echo plugin_dir_url(__FILE__) . '../assets/images/back.png'; ?>">Back</a></div>
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
                            <div class="w-30"> <button type="submit" class="btn btn-secondary m_btm_btn_black shadow w-100">検索する</button></div>
                        </div>
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col-md-4 fnt15"><img src="<?php echo plugin_dir_url(__FILE__) . '../assets/images/discount.png'; ?>">タグで絞る </div>
                    <div class="col-md-8">
                        <div class="btn_box">
                            <div class="txt_highlight2 ul-auto ">
                                <ul>
                                    <?php foreach ($product_good_tags as $value) { ?>
                                        <li><button name="tag-search" value="<?php echo $value; ?>" type="submit"><?php echo $value; ?></button></li>
                                    <?php } ?>
                                </ul>
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


                ?>
                                <div class="row mt-4 mb-4">
                                    <div class="col-md-12">
                                        <h2 class="sub_heading"><?php echo $sCategories->name; ?><span style="font-weight: 200"> |</span></h2>
                                        <div class="w-100 hr_blck"></div>
                                    </div>
                                </div>
                                <div class="row">
                                    <?php

                                    $products = fetch_products($sCategories->slug, $search_keyword, $tag_slug);

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
                                                                            if (!empty($tag->slug) && !in_array($tag->slug, $displayed_tags = [])) {
                                                                                $displayed_tags[] = $tag->slug;
                                                                    ?>
                                                                                <li><?php echo $tag->slug; ?></li>
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
                                                        <div class="col-8 mt-3"> <button type="submit" class="btn btn-secondary m_btm_btn_black shadow w-100">検索する</button></div>
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
    <a href="<?php echo home_url("index.php/cart"); ?>">
        <button class="cart-button">カートを見る</button>
    </a>
</body>

</html>