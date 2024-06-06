<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

require_once MY_WC_PLUGIN_PATH . 'templates/header-template.php';

?>

<body>
    <div class="sp_container">
        <div class="back_show"><a href="#"><img src="images/back.png"></a></div>
        <h1 class="top_title-small">プラグインアウトドア<br>
            予約フォー</h1>

        <div class="back back_hide"><a style="top:15px !important;" href="<?php echo home_url("index.php/custom-cart-details"); ?>"><img src="<?php echo plugin_dir_url(__FILE__) . '../assets/images/back.png'; ?>">戻る</a></div>


        <div class="sub_content_area">

            <div class="row">
                <div class="col-md-12">

                    <div class="boxy text-center">
                        <div>会員登録をして予約する方はこちら</div>
                        <div class="mt-3"> <a href="<?php echo wp_registration_url() ?>"><button type="button" class="btn btn-secondary m_btm_btn_black2 shadow ">会員登録</button></a></div>
                        <div class="mt-4">既にIDをお持ちの方はこちら</div>
                        <div class="mt-3"> <a href="<?php echo wp_login_url("index.php/custom-cart-details") ?>"><button type="button" class="btn btn-secondary orange-btn shadow ">ログイン</button></a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

<?php

require_once MY_WC_PLUGIN_PATH . 'templates/footer-template.php';

?>