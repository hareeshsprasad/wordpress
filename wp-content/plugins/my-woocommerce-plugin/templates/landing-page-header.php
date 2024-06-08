<?php
session_start();
?>
<header style="max-width:100% !important;">
    <nav class="navbar navbar-expand-lg navbar-light shadow-sm">
        <div class="container-fluid head_w"> <a class="navbar-brand" href="<?php echo esc_url(home_url('/index.php/home-page')); ?>"><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/BLK logo.png'); ?>" alt="BLK Logo"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" style="justify-content: end;">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item"><a href="http://52.195.235.189/notifications/">お知らせ</a> </li>
                    <li class="nav-item"><a href="#"> ご利用ガイド</a></li>
                    <li class="nav-item"><a href="#">車種　料金</a></li>
                    <li class="nav-item"><a href="#">店舗情報</a></li>
                    <li class="nav-item"><a href="#">サイト利用規約</a></li>
                    <li class="nav-item"><a href="#">よくある問い合わせ</a></li>
                    <li class="nav-item"><a href="#"> お問合せフォーム</a></li>
                    <?php
                    if (is_user_logged_in()) {
                    ?>
                        <a href="<?php echo esc_url(home_url('/index.php/my-account/orders/')); ?>"><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/user.png'); ?>" alt="" style="height:20px;"></a>
                    <?php
                    } else {
                    ?> <li>
                            <a href="<?php echo wp_login_url() ?>">会員登録</a>
                        </li><?php
                            }
                                ?>
                </ul>
            </div>
        </div>
    </nav>
</header>
<div style="background-image: url(<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/topbanner.png'); ?>); background-repeat: no-repeat; background-size: cover; height:550px; color: #ffffff; background-position:center center" class="d-flex justify-content-end align-items-center">
    <div class="sp_container_payment" style="width: 100% !important;">
        <h1 class="top_title">プラグインアウトドア<br>
            予約フォー</h1>
        <div class="text-end">「電化製品が使える大容量バッテリーを搭載したPHEV」と<br>
            「便利なアウトドアグッズ／電化製品」の一括レンタルで<br>
            電源に繋ぐ新たなアウトドア体験を提供します。
        </div>
        <div class="text-end mt-3"><a class="navbar-brand" href="<?php echo esc_url(home_url('/index.php/book-your-car')); ?>"><button type="button" class="btn btn-secondary m_btm_btn_white shadow ">ご予約・申込み</button></a></div>
        <div class="text-end" style="position: relative; top:110px;">＊プラグインアウトドアとは？　車から電気を供給して電化製品を用いて行うアウトドア</div>
    </div>
</div>