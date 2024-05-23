<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
require_once MY_WC_PLUGIN_PATH . 'includes/class-car-add-ons.php';
$add_on_products = Car_Addons::get_products_by_category_name('add-ons');
?>
<div class="container-form-add-ons">
    <nav>
        <button class="back-btn">
            < Back</button>
                <div class="steps">
                    <div class="step">1</div>
                    <div class="step active">2</div>
                    <div class="step">3</div>
                    <div class="step">4</div>
                    <div class="step">5</div>
                </div>
    </nav>
    <form class="options-form">
        <h2>オプション選択</h2>
        <span class="vertical-line-add-on"></span>
        <hr />
        <?php if (!empty($add_on_products)) : ?>
            <?php foreach ($add_on_products as $product_post) :
                $product = wc_get_product($product_post->ID);
            ?>
                <div class="option">
                    <label for="etc" style="font-size: 28px;line-height:1.5"><?php echo $product->get_name(); ?><br />料金: <?php echo wc_price($product->get_price()); ?></label>
                    <div class="radio-group">
                        <label class="radio-btn-label">
                            希望する
                            <input type="radio" id="etc-yes" name="etc" value="yes" />
                        </label>
                        <label class="radio-btn-label">
                            希望しない
                            <input type="radio" id="etc-no" name="etc" value="no" checked />
                        </label>
                    </div>
                </div>
            <?php endforeach; ?>
        <?php endif ?>
        <div class="buttons">
            <a href="http://localhost/wordpress/index.php/cart/"><button type="button" class="camp-goods-btn">
                    キャンプグッズ選択へ
                </button></a>
        </div>
        <div class="buttons">
            <a href="<?php echo esc_url(wc_get_checkout_url()); ?>" class="components-button wc-block-components-button wp-element-button wc-block-cart__submit-button contained proceed-btn" style="text-decoration:none;font-size: 25px;color: #000;">
                <span class="wc-block-components-button__text">このまま決済へ進む</span>
            </a>
            <!-- <button type="submit" class="proceed-btn">このまま決済へ進む</button> -->
        </div>
    </form>
</div>