<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
?>
<header style="max-width:100% !important;">
    <nav class="navbar navbar-expand-lg navbar-light shadow-sm">
        <div class="container-fluid head_w"> <a class="navbar-brand" href="<?php echo esc_url(home_url('/index.php/home-page')); ?>"><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/BLK logo.png'); ?>" alt="BLK Logo"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" style="justify-content: end;">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item"><a href="#">お知らせ</a> </li>
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
<div style="background-image: url('<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/top-image.png'); ?>'); background-repeat: no-repeat; background-size: cover; height: 335px; color: #ffffff;margin-top:0px;max-width:100% !important;
">
    <div class="sp_container">
        <div style="height: 335px" class="d-flex justify-content-end align-items-center">
            <h1 class="top_title">プラグインアウトドア<br>
                予約フォー</h1>
        </div>
    </div>
</div>
<style>
    /* Snackbar container */
    #snackbar {
        visibility: hidden;
        /* Hidden by default. Visible on click */
        width: fit-content;
        /* Set a default minimum width */
        margin-left: -125px;
        /* Center the snackbar */
        background-color: #333;
        /* Black background color */
        color: #fff;
        /* White text color */
        text-align: center;
        /* Centered text */
        border-radius: 2px;
        /* Rounded borders */
        padding: 16px;
        /* Some padding */
        position: fixed;
        /* Sit on top of the screen */
        z-index: 1;
        font-size: 17px;
        /* Increase font size */
    }

    /* Show the snackbar when changing its visibility */
    #snackbar.show {
        visibility: visible;
        /* Show the snackbar */
        /* Add animation: Take 0.5 seconds to fade in and out the snackbar. 
 However, delay the fade out process for 2.5 seconds */
        -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
        animation: fadein 0.5s, fadeout 0.5s 2.5s;
    }

    /* Add keyframes for the fadein and fadeout effects */
    @-webkit-keyframes fadein {
        from {
            bottom: 0;
            opacity: 0;
        }

        to {
            bottom: 30px;
            opacity: 1;
        }
    }

    @keyframes fadein {
        from {
            bottom: 0;
            opacity: 0;
        }

        to {
            bottom: 30px;
            opacity: 1;
        }
    }

    @-webkit-keyframes fadeout {
        from {
            bottom: 30px;
            opacity: 1;
        }

        to {
            bottom: 0;
            opacity: 0;
        }
    }

    @keyframes fadeout {
        from {
            bottom: 30px;
            opacity: 1;
        }

        to {
            bottom: 0;
            opacity: 0;
        }
    }
</style>
<div id="snackbar"></div>

<script>
    function notification(message, type = 'success') {
        var snackbar = document.getElementById("snackbar");
        snackbar.className = "show";
        snackbar.innerHTML = message;
        snackbar.style.position = "fixed";
        snackbar.style.bottom = "80px";
        snackbar.style.right = "0px";
        snackbar.style.height = "fit-content";


        if (type === 'error') {
            snackbar.style.backgroundColor = "#ff4d4d"; // Red background for error
        } else {
            snackbar.style.backgroundColor = "#4CAF50"; // Green background for success
        }

        switch (type) {
            case "success":
                snackbar.style.backgroundColor = "#4CAF50";
                break;
            case "error":
                snackbar.style.backgroundColor = "#ff4d4d";
                break;
            case "warning":
                snackbar.style.backgroundColor = "#ffc107";
        }

        setTimeout(function() {
            snackbar.className = snackbar.className.replace("show", "");
        }, 3000);
    }
</script>