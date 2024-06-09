<?php
session_start();
// $_SESSION['visited_index'] = true;
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

require_once MY_WC_PLUGIN_PATH . 'templates/landing-page-header.php';

?>

<body>
    <div class="sp_container_payment">
        <div class="sub_content_area">
            <div class="container m-0 p-0 full_width">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="fn-21">レンタルパッケージ<span style="font-weight: 200;font-size:51px">|</span></h2>
                        <div class="w-100 hr_blck"></div>
                    </div>
                </div>


                <div class="row">
                    <div class="col-md-12">
                        <div class="d-flex clmn mt-6 mb-4">
                            <div class="top_main_left">
                                <h3 class="font-24to-small">PHEV自動車</h3>

                                <div class="w-100 hr_blck"></div>
                                <div class="top_main_text">給電機能により電化製品が使用<br>
                                    できるPHEV自動車をレンタル</div>
                                <div class="car_ps"><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/intro-car.png'); ?>" style="width: 45%"></div>

                            </div>
                            <div class="plus_sec"><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/plus.png'); ?>"></div>
                            <div class="top_main_left">
                                <h3 class="font-24to-small">アウトドアグッズ／電化製品</h3>

                                <div class="w-100 hr_blck"></div>
                                <div class="top_main_text">テントやチェア等のアウトドアグッズに加え<br>
                                    便利な電化製品をレンタル</div>
                                <div class="car_ps2"><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/intro-car.png'); ?>" style="width: 35%"></div>

                            </div>


                        </div>

                    </div>


                </div>

                <div class="row mt-5">
                    <div class="col-md-12">
                        <div class="landing_desc">
                            <div class="row">
                                <div class="col-md-2" style="border-right: 1px solid #000000; color:#FF3C00; font-size: 24px;font-weight:600;margin:auto 0px">PHEVとは</div>
                                <div class="col-md-8 fn-14">「Plug-in Hybrid Electric Vehicle」の略で、普段の使用は電気だけ、<br>
                                    遠出の際はガソリン+電気で走れるなど経済的。ガソリン車よりも地球にやさしいクルマです</div>


                            </div>


                        </div>




                    </div>


                </div>

                <div class="row mt-6">
                    <div class="col-md-12">
                        <h2 class="fn-23">電化製品を活用した新たなプラグインアウトドア体験例<span style="font-weight: 200;font-size:51px;padding-left: 60px">|</span></h2>
                        <div class="w-100 hr_blck"></div>


                        <div class="mt-4 mb-4 fn-19">PHEV自動車の給電機能により、電化製品をフル活用し、プラグインアウトドア体験を楽しむことができる。</div>
                    </div>
                </div>


                <div class="row mt-3">
                    <div class="col-md-4 ">
                        <div><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/img2.png'); ?>" class="w-100"></div>
                        <div style="border-left: 2px solid #ff3c00; margin-top: 15px; padding-left: 10px ">
                            <h3 class="fn-23">アウトドアシアター</h3>
                        </div>
                        <div class="fn-18">夜空の下で映像が楽しめる！</div>
                    </div>

                    <div class="col-md-4 mb-4 ">
                        <div><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/img4.png'); ?>" class="w-100"></div>
                        <div style="border-left: 2px solid #ff3c00; margin-top: 15px;">
                            <h3 class="fn-23">青空ワーケーション</h3>
                        </div>
                        <div class="fn-18">Wi-Fiやモニターが使える！</div>
                    </div>

                    <div class="col-md-4 mb-4">
                        <div><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/img6.png'); ?>" class="w-100"></div>
                        <div style="border-left: 2px solid #ff3c00; margin-top: 15px;">
                            <h3 class="fn-23">外でもビールサーバー</h3>
                        </div>
                        <div class="fn-18">キンキンに冷えた生ビールが楽しめる！</div>
                    </div>

                </div>

                <div class="row mt-3">
                    <div class="col-md-4 ">
                        <div><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/img1.png'); ?>" class="w-100"></div>
                        <div style="border-left: 2px solid #ff3c00; margin-top: 15px;">
                            <h3 class="fn-23">手軽なコーヒメーカー</h3>
                        </div>
                        <div class="fn-18">家庭用調理器具で楽々調理！</div>
                    </div>

                    <div class="col-md-4 ">
                        <div><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/img3.png'); ?>" class="w-100"></div>
                        <div style="border-left: 2px solid #ff3c00; margin-top: 15px;">
                            <h3 class="fn-23">快適な宿泊環境</h3>
                        </div>
                        <div class="fn-18">ドライヤー等で普段通りの生活を！</div>
                    </div>

                    <div class="col-md-4 ">
                        <div><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/img5.png'); ?>" class="w-100"></div>
                        <div style="border-left: 2px solid #ff3c00; margin-top: 15px;">
                            <h3 class="fn-23">季節を問わないアウトドア体験</h3>
                        </div>
                        <div class="fn-18">扇風機やヒーターが使える！</div>
                    </div>

                </div>


                <div class="row mt-5 mb-2">
                    <div class="col-md-12">
                        <h2 class="fn-23">ご利用の流れ<span style="font-weight: 200;font-size:51px;padding-left:60px">|</span></h2>
                        <div class="w-100 hr_blck"></div>


                        <div class="mt-4 fn-19">サイト上で、PHEV自動車とアウトドアグッズ／電化製品を同時に手配できるため、手軽に利用できます。</div>
                    </div>
                </div>


                <div class="row mt-6">
                    <div class="col-md-4 mb-4">
                        <div class="step-indicator">
                            <div class="step-number fn-17">STEP </div>
                            <div class="step-text"><span class="number-big fn-47">1</span> <span class="number_text_alt fn-20">予約日時を選択</span></div>
                        </div>

                        <div class="text-center mn-ht"><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/ic-1.png'); ?>"></div>
                        <div class="mt-3">オンラインサイトでお申し込み！</div>


                    </div>

                    <div class="d-flex justify-content-center mob_arrow">
                        <span class="arrow_pos_mob"><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/arrow.png'); ?>"></span>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="step-indicator">
                            <div class="step-number fn-17">STEP </div>
                            <div class="step-text"><span class="number-big fn-47">2</span> <span class="number_text_alt fn-20">車両を選択 </span></div>
                        </div>

                        <div class="text-center mn-ht"><span class="arrow_pos  web_arrow"><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/arrow.png'); ?>"></span><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/ic2.png'); ?>" class="w-75"></div>
                        <div class="mt-3">お好きなPHEV車をレンタル！</div>


                    </div>

                    <div class="d-flex justify-content-center mob_arrow">
                        <span class="arrow_pos_mob"><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/arrow.png'); ?>"></span>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="step-indicator">
                            <div class="step-number fn-17">STEP </div>
                            <div class="step-text"><span class="number-big fn-47">3</span> <span class="number_text_alt fn-20">車両を選択 </span></div>
                        </div>

                        <div class="text-center mn-ht"><span class="arrow_pos  web_arrow"><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/arrow.png'); ?>"></span> <img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/ic3.png'); ?>" class="w-75"><span class="arrow_pos4"><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/arrow.png'); ?>"></span> </div>

                        <div class="mt-3">体験したいプラグインアウトドアを選択！</div>


                    </div>






                </div>

                <div class="d-flex justify-content-center mob_arrow">
                    <span class="arrow_pos_mob"><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/arrow.png'); ?>"></span>
                </div>
                <div class="row mt-4">
                    <div class="col-md-4">
                        <div class="step-indicator">
                            <div class="step-number fn-17">STEP </div>
                            <div class="step-text"><span class="number-big fn-47">4</span> <span class="number_text_alt fn-20">予約日時を選択</span></div>
                        </div>

                        <div class="text-center mn-ht"><span class="arrow_pos3  web_arrow"><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/arrow.png'); ?>"></span><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/ic-4.png'); ?>" class="w-75"></div>
                        <div class="mt-3">お近くの店舗で車とアウトドアグッズ／電化製品を同時にピックアップ！</div>


                    </div>

                    <div class="d-flex justify-content-center mob_arrow">
                        <span class="arrow_pos_mob"><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/arrow.png'); ?>"></span>
                    </div>
                    <div class="col-md-4">
                        <div class="step-indicator">
                            <div class="step-number fn-17">STEP </div>
                            <div class="step-text"><span class="number-big fn-47">5</span> <span class="number_text_alt fn-20">車両を選択 </span></div>
                        </div>

                        <div class="text-center mn-ht"><span class="arrow_pos  web_arrow"><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/arrow.png'); ?>"></span> <img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/ic-5.png'); ?>" class="w-75"></div>
                        <div class="mt-3">ワンランク上のプラグインアウトドアを体験</div>


                    </div>

                    <div class="d-flex justify-content-center mob_arrow">
                        <span class="arrow_pos_mob"><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/arrow.png'); ?>"></span>
                    </div>
                    <div class="col-md-4">
                        <div class="step-indicator">
                            <div class="step-number fn-17">STEP </div>
                            <div class="step-text"><span class="number-big fn-47">6</span> <span class="number_text_alt fn-20">車両を選択 </span></div>
                        </div>

                        <div class="text-center mn-ht"><span class="arrow_pos web_arrow"><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/arrow.png'); ?>"></span><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/ic-6.png'); ?>" class="w-75"></div>
                        <div class="mt-3">アウトドアグッズは使用した状態のまま車と同時に返却！</div>


                    </div>






                </div>


                <div class="row justify-content-center mt-5">
                    <div class="col-md-6 text-center mb-4"> <button type="button" class="btn btn-outline-secondary m_btm_btn_line_landing shadow w-100 " style="border-radius: 24px;">よくある質問</button></div>
                    <div class="col-md-6 text-center mb-4"> <button type="button" class="btn btn-outline-secondary m_btm_btn_line_landing shadow  w-100 " style="border-radius: 24px;">キャンセルポリシー</button></div>

                </div>


            </div>
        </div>
    </div>
</body>

<?php

require_once MY_WC_PLUGIN_PATH . 'templates/footer-template.php';

?>