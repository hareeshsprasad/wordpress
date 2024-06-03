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
?>

<body>
    <div class="sp_container">
        <div class="back_show"><a href="#"><img src="images/back.png"></a></div>
        <h1 class="top_title-small">プラグインアウトドア<br>
            予約フォー</h1>

        <div class="back back_hide"><a href="<?php echo esc_url(home_url('/index.php/book-your-car/')); ?>"><img src="<?php echo plugin_dir_url(__FILE__) . '../assets/images/back.png'; ?>">Back</a></div>
        <div class="stepper mt-3">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li class="active">5</li>
            </ul>
        </div>
        <div class="sub_content_area text-center">
            <h2 class="sub_heading">ご予約いただきまして<br>
                誠にありがとうございました</h2>

            <div class="container m-0 p-0 full_width">
                <div class="row">
                    <div class="col-md-12">
                        <h4 class="mt-4 fnt15">このたびは、NOYAMAプラグインアウトドアのご予約ありがとうございます。<br> ご記入頂いたメールアドレスへ、ご予約内容をお送りいたしましたのでご確認お願いいたします。</h4>
                        <div class="row mt-4">
                            <div class="col-md-12">
                                <p>しばらく経ってもメールが届かない場合は、入力頂いたメールアドレスが間違っているか、<br>
                                    迷惑メールフォルダに振り分けられている可能性がございます。 また、ドメイン指定をされている場合は、<br>
                                    「@XXXX.com」からのメールが受信できるようあらかじめ設定をお願いいたします。 以上の内容をご確認の上、お手数ですがもう一度フォームよりお申し込み頂きますようお願い申し上げます。</p>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-md-12 text-center">
                                <a href="<?php echo esc_url(home_url('/index.php/book-your-car/')); ?>"><button type="button" class="btn btn-outline-secondary m_btm_btn_line shadow ">戻る</button></a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
    <?php
    require_once MY_WC_PLUGIN_PATH . 'templates/footer-template.php';
    session_destroy();
    ?>
    <script>
        localStorage.removeItem("child_count");
        localStorage.removeItem("adult_count");
    </script>
</body>