<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
?>
<header>
    <nav class="navbar navbar-expand-lg navbar-light shadow-sm">
        <div class="container-fluid head_w"> <a class="navbar-brand" href="<?php echo esc_url(home_url('/index.php/')); ?>"><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/BLK logo.png'); ?>" alt="BLK Logo"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item"><a href="#">運営企業情報</a> </li>
                    <li class="nav-item"><a href="#">サービスについて</a></li>
                    <li class="nav-item"><a href="#">利用規約</a></li>
                    <li class="nav-item"><a href="#">お知らせ</a></li>
                    <li class="nav-item"><a href="#">お問い合わせ</a></li>
                    <li>
                        <a href="<?php echo wp_login_url() ?>"><button type="button" class="btn btn-outline-secondary curve_button">login</button></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
<div style="background-image: url('<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/top-image.png'); ?>'); background-repeat: no-repeat; background-size: cover; height: 335px; color: #ffffff;">
    <div class="sp_container">
        <div style="height: 335px" class="d-flex justify-content-end align-items-center">
            <h1 class="top_title">プラグインアウトドア<br>
                予約フォー</h1>
        </div>
    </div>
</div>