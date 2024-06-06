<?php

if (!is_user_logged_in()) {
    wp_safe_redirect(home_url('/index.php/registration-login'));
}
