<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

require_once MY_WC_PLUGIN_PATH . 'includes/class-custom-product-listing.php';

$products = Custom_Product_Listing::get_products();
?>

<div class="custom-product-listing">
    <?php if ($products): ?>
        <ul>
            <?php foreach ($products as $product): ?>
                <li>
                    <a href="<?php echo get_permalink($product->ID); ?>">
                        <?php echo get_the_post_thumbnail($product->ID, 'thumbnail'); ?>
                        <h2><?php echo get_the_title($product->ID); ?></h2>
                        <span><?php echo get_post_meta($product->ID, '_price', true); ?></span>
                    </a>
                </li>
            <?php endforeach; ?>
        </ul>
    <?php else: ?>
        <p>No products found</p>
    <?php endif; ?>
</div>
