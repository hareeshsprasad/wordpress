<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Create the footer element
        const footer = document.createElement('footer');
        footer.className = 'wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained';
        footer.innerHTML = `
                <div class="wp-block-group alignwide is-content-justification-space-between is-layout-flex wp-container-core-group-is-layout-1 wp-block-group-is-layout-flex" style="padding-bottom:var(--wp--preset--spacing--40)">
                <div class="container mx_full">
    <div class="row">
        <div class="col-md-12 text-center">
            <div class="sns_title">公式SNS</div>
            <div class="hr_blck mt-5 mb-3"></div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="sns">
                <ul>
                    <li><a href="#">
                            <div><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/twitter.jpg'); ?>" alt="Twitter"></div>
                            <div>X(旧Twitter)</div>
                        </a></li>
                    <li><a href="#">
                            <div><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/facebook.jpg'); ?>" alt="Facebook"></div>
                            <div>Facebook</div>
                        </a></li>
                    <li><a href="#">
                            <div><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/instagram.jpg'); ?>" alt="Instagram"></div>
                            <div>Instagram</div>
                        </a></li>
                    <li><a href="#">
                            <div><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/youtube.jpg'); ?>" alt="YouTube"></div>
                            <div>Youtube</div>
                        </a></li>
                    <li><a href="#">
                            <div><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/line.jpg'); ?>" alt="LINE"></div>
                            <div>LINE</div>
                        </a></li>
                    <li><a href="#">
                            <div><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/mail.jpg'); ?>" alt="Mail"></div>
                            <div>メールマガジン</div>
                        </a></li>
                    <li><a href="#">
                            <div><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/mail.jpg'); ?>" alt="Mail"></div>
                            <div>ソーシャルメディア一覧</div>
                        </a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="bottom_link">
                <ul>
                    <li><a href="#">サイトマップ</a></li>
                    <li><a href="#">個人情報保護方針</a></li>
                    <li><a href="#">クッキーポリシー</a></li>
                    <li><a href="#">特定個人情報基本方針</a></li>
                    <li><a href="#">サイトのご利用について</a></li>
                    <li><a href="#">企業・I R</a></li>
                    <li><a href="#">G l o b a l S i t e</a></li>
                    <li><a href="#">お問い合わせ</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12 text-center">
            <div class="mt-3 mb-3">© MITSUBISHI MOTORS CORPORATION. All rights reserved.</div>
        </div>
    </div>
</div>
                </div>
            `;

        // Insert the footer after the element with id "colophon"
        const targetElement = document.getElementById('colophon');
        targetElement.insertAdjacentElement('afterend', footer);
    });
</script>