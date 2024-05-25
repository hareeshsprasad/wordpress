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

<div class="container">
    <?php
    // Get the product ID from URL query parameter
    $product_id = isset($_REQUEST['product_id']) ? intval($_REQUEST['product_id']) : 0;

    if ($product_id) {
        $product = wc_get_product($product_id);

        if ($product) {
    ?>
            <div class="product-detail">
                <input type="hidden" name="product_id" value="<?php echo $product->get_id(); ?>">
                <h2 class="product-title"><?php echo $product->get_name(); ?></h2>
                <div class="product-image">
                    <img src="<?php echo get_the_post_thumbnail_url($product->get_id()); ?>" alt="<?php echo $product->get_name(); ?>">
                </div>
                <div class="product-price"><?php echo $product->get_price_html(); ?></div>
                <div class="product-description"><?php echo $product->get_description(); ?></div>

                <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
                    <input type="hidden" name="product_id" value="<?php echo $product->get_id(); ?>">
                    <label for="quantity">数量を選ぶ:</label>
                    <select name="product_quanty">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button type="submit">カートに入れる</button>
                </form>
            </div>
    <?php
        } else {
            echo '<p>Product not found.</p>';
        }
    } else {
        echo '<p>No product selected.</p>';
    }
    ?>
</div>