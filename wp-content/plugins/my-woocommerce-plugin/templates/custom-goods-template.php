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

                            $product_tag = $product_tags[0]->slug;

                            $product_good_tags[] = $product_tag;
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

<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>キャンプ用品</title>
</head>

<body>
    <div class="container">
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
            <div class="navigation">
                <div>1</div>
                <div>2</div>
                <div class="active">3</div>
                <div>4</div>
                <div>5</div>
            </div>

            <div class="search-container">
                <label for="keyword-search">キーワード検索</label>
                <input type="text" id="keyword-search" name="keyword-search" value="<?php echo $search_keyword; ?>" placeholder="キーワード">
                <button type="submit">検索する</button>
            </div>

            <div class="tags-container">
                <label for="tag-search">キーワード検索</label>
                <?php foreach ($product_good_tags as $value) { ?>
                    <button name="tag-search" value="<?php echo $value; ?>" type="submit"><?php echo $value; ?></button>
                <?php } ?>

                <!-- <button name="tag-search" value="Tag Two" type="submit" class="active">食事</button>
                <button name="tag-search" value="Tag Three" type="submit">料理</button>
                <button name="tag-search" value="" type="submit">アクティブ</button>
                <button name="tag-search" value="" type="submit">車</button>
                <button name="tag-search" value="" type="submit" class="more">季節</button> -->
            </div>
        </form>
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
                        <h4><?php echo $sCategories->name; ?></h4>
                        <div class="product-list">
                            <?php

                            $products = fetch_products($sCategories->slug, $search_keyword, $tag_slug);

                            foreach ($products as $product) {

                            ?>
                                <form method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
                                    <div class="product-item">
                                        <a href="<?php echo home_url("index.php/goods-details/?product_id={$product->get_id()}"); ?>"><img src="<?php echo get_the_post_thumbnail_url($product->get_id()); ?>" alt="Car Image"></a>
                                        <input type="hidden" name="product_id" value="<?php echo $product->get_id(); ?>">
                                        <div class="product-details">
                                            <div class="product-title"><?php echo $product->get_name(); ?></div>
                                            <div class="product-price"><?php echo $product->get_price(); ?></div>
                                            <div class="product-desc"><?php echo $product->get_description(); ?></div>
                                            <div class="product-actions">
                                                <select name="product_quanty">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                                <button type="submit">カートに入れる</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            <?php } ?>
                            <!-- Repeat product-item as needed -->
                        </div>
        <?php
                    }
                }
            } else {
                // echo "outsideeeeee";
            }
        }
        ?>

    </div>
    </form>
    <button class="cart-button">カートを見る</button>

</body>

</html>

<?php

// echo "<pre>";
// print_r($product_good_tags);
// exit;
