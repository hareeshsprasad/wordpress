<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
require_once MY_WC_PLUGIN_PATH . 'includes/class-car-add-ons.php';
// require_once MY_WC_PLUGIN_PATH . 'templates/header-template.php';
$add_on_products = Car_Addons::get_products_by_category_name('add-ons');
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['action'])) {
        foreach ($_POST as $key => $value) {
            if (!empty($value)) {
                $product_id = intval($value);
                WC()->cart->add_to_cart($product_id);
            }
        }
    }
    if ($_POST['action'] == 'select_camping_goods') {
?>
        <script>
            window.location.href = "http://52.195.235.189/goods/";
        </script>
    <?php
        // wp_redirect('http://localhost/wordpress/index.php/my-account/'); //not working with astra theme
        // exit();
    }
    if ($_POST['action'] == 'proceed_to_checkout') {
    ?>
        <script>
            window.location.href = "http://52.195.235.189/custom-cart-details/";
        </script>
<?php
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
        <h1 class="top_title-small">プラグインアウトドア<br>
            予約フォー</h1>

        <div class="back back_hide"><a href="<?php echo esc_url(home_url('/index.php/book-your-car/')); ?>">
                < Back</a>
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
                <h2 class="sub_heading">オプション選択 <span style="font-weight: 200">|</span></h2>
                <div class="w-100 hr_blck"></div>
                <div class="container m-0 p-0 full_width">
                    <?php if (!empty($add_on_products)) : ?>
                        <?php foreach ($add_on_products as $index => $product_post) :
                            $product = wc_get_product($product_post->ID);
                        ?>
                            <div class="row">
                                <div class="col-12 col-lg-6 mt-3">
                                    <div class="fn-17"><?php echo $product->get_name(); ?></div>
                                    <div class="mt-1">料金：　<?php echo wc_price($product->get_price()); ?> 円 ／ 1枚</div>
                                </div>
                                <div class="col-6 col-lg-3 mt-3">
                                    <div class="radio_box">
                                        <div>希望する</div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="product_option_<?php echo $index; ?>" id="option_<?php echo $index; ?>_yes" value="<?php echo $product->get_id(); ?>">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-lg-3 mt-3">
                                    <div class="radio_box">
                                        <div>希望しない</div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="product_option_<?php echo $index; ?>" id="option_<?php echo $index; ?>_no" value="" checked>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    <?php endif ?>
                    <div class="row">
                        <div class="col-md-12 text-center mt-4">
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
    // require_once MY_WC_PLUGIN_PATH . 'templates/footer-template.php';
    ?>
</body>