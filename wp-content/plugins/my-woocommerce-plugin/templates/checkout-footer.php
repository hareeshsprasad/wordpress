<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Create the footer element
        const footer = document.createElement('footer');
        footer.className = 'wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained';
        footer.innerHTML = `
                <div class="container mx_full">
    <div class="row d-flex justify-content-center">
        <div class="col-md-10 text-center">
            <div class="sns_title">公式SNS</div>
            <div class="hr_blck mt-5 mb-3"></div>
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-md-10">
            <div class="sns">
                <ul>
                    <li><a href="#">
                            <div><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/twitter.jpg'); ?>" alt="Twitter"></div>
                            <div class="footer_links">X(旧Twitter)</div>
                        </a></li>
                    <li><a href="#">
                            <div><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/facebook.jpg'); ?>" alt="Facebook"></div>
                            <div class="footer_links">Facebook</div>
                        </a></li>
                    <li><a href="#">
                            <div><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/instagram.jpg'); ?>" alt="Instagram"></div>
                            <div class="footer_links">Instagram</div>
                        </a></li>
                    <li><a href="#">
                            <div><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/youtube.jpg'); ?>" alt="YouTube"></div>
                            <div class="footer_links">Youtube</div>
                        </a></li>
                    <li><a href="#">
                            <div><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/line.jpg'); ?>" alt="LINE"></div>
                            <div class="footer_links">LINE</div>
                        </a></li>
                    <li><a href="#">
                            <div><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/mail.jpg'); ?>" alt="Mail"></div>
                            <div class="footer_links">メールマガジン</div>
                        </a></li>
                </ul>
            </div>
        </div>
    </div>
	<div class="row mt-20">
		<div class="col-md-12 d-flex justify-content-center">
			<div><img src="http://52.195.235.189/wp-content/uploads/2024/06/fe689b003e197ec29acbaf795855f586.png" alt="logo" style="height:37px;width:117px"></div>
		</div>
	</div>
    <div class="row mt-20 d-flex justify-content-center">
        <div class="col-md-8">
            <div class="bottom_link">
                <ul>
                    <li><a href="#">プライバシーポリシー</a></li>
                    <li><a href="#">クッキーポリシー</a></li>
                    <li><a href="#">特定商取引法に基づく表記</a></li>
                    <li><a href="#">個人情報の取扱いについて</a></li>
                    <li><a href="#">サイトマップ</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="row mt-10">
        <div class="col-md-12 text-center">
            <div class="mt-3 mb-3">© NOYAMA All rights reserved.</div>
        </div>
    </div>
</div>
            `;

        // Insert the footer after the element with id "colophon"
        const targetElement = document.getElementById('colophon');
        targetElement.insertAdjacentElement('afterend', footer);
    });
</script>