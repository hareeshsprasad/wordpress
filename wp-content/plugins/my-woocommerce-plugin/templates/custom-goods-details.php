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

            // if ($response) {
            //     function_alert('Product added to cart!');
            // }

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
        <div class="back_show"><a href="<?php echo home_url("index.php/goods"); ?>"><img src="<?php echo plugin_dir_url(__FILE__) . '../assets/images/back.png'; ?>"></a></div>
        <h1 class="top_title-small">プラグインアウトドア<br>
            予約フォー</h1>

        <div class="back back_hide"><a href="<?php echo home_url("index.php/goods"); ?>"><img src="<?php echo plugin_dir_url(__FILE__) . '../assets/images/back.png'; ?>">Back</a></div>
        <div class="stepper mt-3">
            <ul>
                <li>1</li>
                <li>2</li>
                <li class="active">3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </div>
        <?php
        // Get the product ID from URL query parameter
        $product_id = isset($_REQUEST['product_id']) ? intval($_REQUEST['product_id']) : 0;

        if ($product_id) {
            $product = wc_get_product($product_id);

            if ($product) {
        ?>
                <div class="sub_content_area">
                    <h2 class="sub_heading"><?php echo $product->get_name(); ?><span style="font-weight: 200"> |</span></h2>
                    <div class="w-100 hr_blck"></div>
                    <div class="container m-0 p-0 full_width">
                        <div class="row">
                            <div class="col-md-12">
                                <img id="primary-image" src="<?php echo get_the_post_thumbnail_url($product->get_id()); ?>" alt="<?php echo $product->get_name(); ?>">
                            </div>
                            <div class="col-md-12">
                                <div class="sm-images">
                                    <ul>
                                        <?php
                                        $gallery_image_ids = $product->get_gallery_image_ids();
                                        if (!empty($gallery_image_ids)) {
                                            foreach ($gallery_image_ids as $gallery_image_id) {
                                                $gallery_image_url = wp_get_attachment_url($gallery_image_id);
                                        ?>
                                                <li class="image-carousel" onclick="imageAppend('<?php echo $gallery_image_url; ?>')"><a href="#"><img src="<?php echo $gallery_image_url; ?>"></a></li>
                                        <?php }
                                        } ?>
                                    </ul>


                                </div>

                            </div>

                            <div class="col-md-12">
                                <h4 class="mt-4">デイキャンプデビューにぴったりのセット！<br>
                                    気軽にキャンプに出かけましょう！</h4>
                                <div class="mt-2">Coleman(コールマン)</div>
                                <div class="sub-head2 mt-2"><b>¥</b><?php echo $product->get_price(); ?><span>(税込)</span> / 1泊2日</div>
                                <div class="txt_highlight ul-auto mt-3 mb-3">
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

                                <div>数量を選ぶ</div>
                                <div class="row">
                                    <form action="" method="POST">
                                        <input type="hidden" name="product_id" value="<?php echo $product->get_id(); ?>">
                                        <div class="col-2"> <select name="product_quanty" class="form-select mt-3" aria-label="Default select example">
                                                <option selected>1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                            </select>
                                        </div>
                                        <div class="col-3 mt-3"> <button type="submit" class="btn btn-secondary m_btm_btn_black shadow w-100">検索する</button></div>
                                    </form>
                                </div>

                                <div class="row mt-4">
                                    <div class="col-md-12">
                                        <p>【 セットプラン価格 】<br>
                                            それぞれを単品でレンタルするよりも約16%お得に！<br>
                                            ※時期により割引率は前後します</p>
                                    </div>
                                </div>

                                <div class="row mt-4">
                                    <div class="col-md-12">
                                        <p>【　セット紹介　】<br>
                                            2人でゆったりとくつろげるサイズのヘキサタープ、<br>
                                            使い勝手のいいアルミテーブル、<br>
                                            組み立て式の定番ローチェア<br>
                                            快適に2人キャンプを過ごすための基本のセットです！</p>
                                    </div>
                                </div>

                                <div class="row mt-4">
                                    <div class="col-md-12">
                                        <p>【　セット内容　】<br>
                                            １タープ：XPヘキサタープMDX（コールマン）<br>
                                            ２チェア：チェアワン（ヘリノックス）<br>
                                            ３テーブル：アルミコンパクトロールテーブル（タラスブルバ）</p>
                                    </div>
                                </div>




                                <div class="row mt-4">
                                    <div class="col-md-12 text-center">
                                        <a href="<?php echo home_url("index.php/goods"); ?>">
                                            <button type="button" class="btn btn-outline-secondary m_btm_btn_line shadow ">戻る</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        <?php
            } else {
                echo '<p>製品が見つかりません。</p>';
            }
        } else {
            echo '<p>製品が選択されていません。</p>';
        }
        ?>
    </div>
    <a href="<?php echo home_url("index.php/cart"); ?>">
        <button class="cart-button">カートを見る</button>
    </a>
</body>

</html>

<script>
    function imageAppend(gallery_image_url) {
        document.getElementById('primary-image').src = gallery_image_url;
    }
</script>