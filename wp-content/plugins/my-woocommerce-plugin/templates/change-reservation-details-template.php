<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
require_once MY_WC_PLUGIN_PATH . 'includes/class-cart-details.php';
// require_once MY_WC_PLUGIN_PATH . 'templates/header-template.php';
$cart_details = Custom_Cart_Details::cart_details();
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
        <div class="back_show"><a href="#"><img src="images/back.png"></a></div>
        <h1 class="top_title-small">プラグインアウトドア<br>
            予約フォー</h1>
        <div class="back back_hide"><a href="#"><img src="images/back.png">Back</a></div>
        <div class="sub_content_area" style="margin-top: 90px;">
            <h2 class="sub_heading mt-3">予約内容の照会・変更・取消 <span style="font-weight: 200; font-size:51px">|</span></h2>
            <div class="w-100 hr_blck"></div>
            <div class="container m-0 p-0 full_width">
                <div class="row">
                    <div class="col-md-12">
                        <div class="cont_box mt-5">
                            <div class="row">
                                <div class="col-md-4">
                                    <h4 class="txt-center mb-2">エクリプス クロス</h4>
                                </div>
                                <div class="col-md-4 mb-2">予約日：　2024年4月30日</div>
                                <div class="col-md-4 text-end">
                                    <button type="button" class="btn btn-secondary m_btm_btn_black shadow w-100">検索する</button>
                                </div>
                            </div>
                            <div>
                                <div class="drk-heading no-radius">選択されたクルマ</div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-6">
                                    <div class="text16 ">乗車人数： 5人 </div>
                                </div>
                                <div class="col-6">
                                    <div class="text16 text-end">12,100円 <span>(税込)</span> </div>
                                </div>
                            </div>
                            <div class="row d-flex justify-content-center align-items-center mt-3">
                                <div class="col-md-12">
                                    <div class="row d-flex  justify-content-center align-items-center">
                                        <div class="col-3">
                                            <div class="greybox">出発</div>
                                        </div>
                                        <div class="col-3 brd-right">横浜店</div>
                                        <div class="col-6  no-border text-end">2024年5月16日</div>
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
                                        <div class="col-3 brd-right">横浜店</div>
                                        <div class="col-6  no-border text-end">2024年5月16日</div>
                                    </div>
                                </div>
                            </div>
                            <div class="row  mt-3">
                                <div class="col-8">免責補償制度</div>
                                <div class="col-4 text-end">2,100円</div>
                            </div>
                            <div class="row  mt-3">
                                <div class="col-8">ETCカード</div>
                                <div class="col-4 text-end">330円</div>
                            </div>
                            <div class="row  mt-3">
                                <div class="col-8">チャイルドシート　×2</div>
                                <div class="col-4 text-end">2,200円</div>
                            </div>
                            <div>
                                <div class="drk-heading no-radius">選択されたキャンプグッズ</div>
                            </div>
                            <div class="row  mt-3">
                                <div class="col-8">2人用キャンプセット</div>
                                <div class="col-4 text-end">8,200円</div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="hr_blck mt-3 mb-3"></div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-8">2人用キャンプセット</div>
                                <div class="col-4 text-end text16">24,930円</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="cont_box mt-4">
                            <div class="row">
                                <div class="col-md-4 mb-2">
                                    <h4 class="txt-center">エクリプス クロス</h4>
                                </div>
                                <div class="col-md-4 mb-2">予約日：　2024年4月30日</div>
                                <div class="col-md-4 text-end">
                                    <button type="button" class="btn btn-secondary m_btm_btn_black shadow w-100">検索する</button>
                                </div>
                            </div>
                            <div>
                                <div class="drk-heading no-radius">選択されたクルマ</div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-6">
                                    <div class="text16 ">乗車人数： 5人 </div>
                                </div>
                                <div class="col-6">
                                    <div class="text16 text-end">12,100円 <span>(税込)</span> </div>
                                </div>
                            </div>
                            <div class="row d-flex justify-content-center align-items-center mt-3">
                                <div class="col-md-12">
                                    <div class="row d-flex  justify-content-center align-items-center">
                                        <div class="col-3">
                                            <div class="greybox">出発</div>
                                        </div>
                                        <div class="col-3 brd-right">横浜店</div>
                                        <div class="col-6  no-border text-end">2024年5月16日</div>
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
                                        <div class="col-3 brd-right">横浜店</div>
                                        <div class="col-6  no-border text-end">2024年5月16日</div>
                                    </div>
                                </div>
                            </div>
                            <div class="row  mt-3">
                                <div class="col-8">免責補償制度</div>
                                <div class="col-4 text-end">2,100円</div>
                            </div>
                            <div class="row  mt-3">
                                <div class="col-8">ETCカード</div>
                                <div class="col-4 text-end">330円</div>
                            </div>
                            <div class="row  mt-3">
                                <div class="col-8">チャイルドシート　×2</div>
                                <div class="col-4 text-end">2,200円</div>
                            </div>
                            <div>
                                <div class="drk-heading no-radius">選択されたキャンプグッズ</div>
                            </div>
                            <div class="row  mt-3">
                                <div class="col-8">2人用キャンプセット</div>
                                <div class="col-4 text-end">8,200円</div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="hr_blck mt-3 mb-3"></div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-8">2人用キャンプセット</div>
                                <div class="col-4 text-end text16">24,930円</div>
                            </div>
                        </div>
                    </div>
                </div>
                <?php
                // require_once MY_WC_PLUGIN_PATH . 'templates/footer-template.php';
                ?>
</body>