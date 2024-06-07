<?php

if (!is_user_logged_in()) {
    wp_safe_redirect(home_url('/index.php/registration-login'));
} else { ?>

    <body style="font-family: Arial, sans-serif;">
        <div class="back back_hide"><a href="<?php echo home_url("index.php/custom-cart-details"); ?>"><img src="<?php echo plugin_dir_url(__FILE__) . '../assets/images/back.png'; ?>">戻る</a></div>
        <div class="stepper mt-3">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li class="active">4</li>
                <li>5</li>
            </ul>
        </div>
    </body>

<?php } ?>