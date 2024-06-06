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
                        <h2 class="sub_heading">レンタルパッケージ<span style="font-weight: 200;font-size:51px">|</span></h2>
                        <div class="w-100 hr_blck"></div>
                    </div>
                </div>


                <div class="row">
                    <div class="col-md-12">
                        <div class="d-flex clmn mt-4 mb-4">
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
                        <div style="background: #d9d9d9; padding: 15px;">
                            <div class="row">
                                <div class="col-md-2" style="border-right: 1px solid #000000; color:#FF3C00; font-size: 25px;">PHEVとは</div>
                                <div class="col-md-8 fnt16">「Plug-in Hybrid Electric Vehicle」の略で、普段の使用は電気だけ、<br>
                                    遠出の際はガソリン+電気で走れるなど経済的。ガソリン車よりも地球にやさしいクルマです</div>


                            </div>


                        </div>




                    </div>


                </div>

                <div class="row mt-4">
                    <div class="col-md-12">
                        <h2 class="sub_heading">電化製品を活用した新たなプラグインアウトドア体験例<span  style="font-weight: 200;font-size:51px">|</span></h2>
                        <div class="w-100 hr_blck"></div>


                        <div class="mt-4">PHEV自動車の給電機能により、電化製品をフル活用し、プラグインアウトドア体験を楽しむことができる。</div>
                    </div>
                </div>


                <div class="row mt-3">
                    <div class="col-md-4 ">
                        <div><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/img2.png'); ?>" class="w-100"></div>
                        <div style="border-left: 2px solid #ff3c00; margin-top: 15px; padding-left: 10px ">
                            <h3>アウトドアシアター</h3>
                        </div>
                        <div>夜空の下で映像が楽しめる！</div>
                    </div>

                    <div class="col-md-4 mb-4 ">
                        <div><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/img4.png'); ?>" class="w-100"></div>
                        <div style="border-left: 2px solid #ff3c00; margin-top: 15px;">
                            <h3>アウトドアシアター</h3>
                        </div>
                        <div>夜空の下で映像が楽しめる！</div>
                    </div>

                    <div class="col-md-4 mb-4">
                        <div><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/img6.png'); ?>" class="w-100"></div>
                        <div style="border-left: 2px solid #ff3c00; margin-top: 15px;">
                            <h3>アウトドアシアター</h3>
                        </div>
                        <div>夜空の下で映像が楽しめる！</div>
                    </div>

                </div>

                <div class="row mt-3">
                    <div class="col-md-4 ">
                        <div><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/img1.png'); ?>" class="w-100"></div>
                        <div style="border-left: 2px solid #ff3c00; margin-top: 15px;">
                            <h3>アウトドアシアター</h3>
                        </div>
                        <div>夜空の下で映像が楽しめる！</div>
                    </div>

                    <div class="col-md-4 ">
                        <div><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/img3.png'); ?>" class="w-100"></div>
                        <div style="border-left: 2px solid #ff3c00; margin-top: 15px;">
                            <h3>アウトドアシアター</h3>
                        </div>
                        <div>夜空の下で映像が楽しめる！</div>
                    </div>

                    <div class="col-md-4 ">
                        <div><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/img5.png'); ?>" class="w-100"></div>
                        <div style="border-left: 2px solid #ff3c00; margin-top: 15px;">
                            <h3>アウトドアシアター</h3>
                        </div>
                        <div>夜空の下で映像が楽しめる！</div>
                    </div>

                </div>


                <div class="row mt-5">
                    <div class="col-md-12">
                        <h2 class="sub_heading">ご利用の流れ<span style="font-weight: 200;font-size:51px">|</span></h2>
                        <div class="w-100 hr_blck"></div>


                        <div class="mt-4">サイト上で、PHEV自動車とアウトドアグッズ／電化製品を同時に手配できるため、手軽に利用できます。</div>
                    </div>
                </div>


                <div class="row mt-5">
                    <div class="col-md-4 mb-4">
                        <div class="step-indicator">
                            <div class="step-number ">STEP </div>
                            <div class="step-text"><span class="number-big">1</span> <span class="number_text_alt">予約日時を選択</span></div>
                        </div>

                        <div class="text-center mn-ht"><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/ic-1.png'); ?>"></div>
                        <div class="mt-3">オンラインサイトでお申し込み！</div>


                    </div>


                    <div class="col-md-4 mb-4">
                        <div class="step-indicator">
                            <div class="step-number ">STEP </div>
                            <div class="step-text"><span class="number-big">2</span> <span class="number_text_alt">車両を選択 </span></div>
                        </div>

                        <div class="text-center mn-ht"><span class="arrow_pos"><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/arrow.png'); ?>"></span><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/ic2.png'); ?>" class="w-75"></div>
                        <div class="mt-3">お好きなPHEV車をレンタル！</div>


                    </div>


                    <div class="col-md-4 mb-4">
                        <div class="step-indicator">
                            <div class="step-number ">STEP </div>
                            <div class="step-text"><span class="number-big">2</span> <span class="number_text_alt">車両を選択 </span></div>
                        </div>

                        <div class="text-center mn-ht"><span class="arrow_pos"><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/arrow.png'); ?>"></span> <img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/ic3.png'); ?>" class="w-75"><span class="arrow_pos4"><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/arrow.png'); ?>"></span> </div>

                        <div class="mt-3">体験したいプラグインアウトドアを選択！</div>


                    </div>






                </div>

                <div class="row mt-4">
                    <div class="col-md-4">
                        <div class="step-indicator">
                            <div class="step-number ">STEP </div>
                            <div class="step-text"><span class="number-big">4</span> <span class="number_text_alt">予約日時を選択</span></div>
                        </div>

                        <div class="text-center mn-ht"><span class="arrow_pos3"><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/arrow.png'); ?>"></span><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/ic-4.png'); ?>" class="w-75"></div>
                        <div class="mt-3">お近くの店舗で車とアウトドアグッズ／電化製品を同時にピックアップ！</div>


                    </div>


                    <div class="col-md-4">
                        <div class="step-indicator">
                            <div class="step-number ">STEP </div>
                            <div class="step-text"><span class="number-big">5</span> <span class="number_text_alt">車両を選択 </span></div>
                        </div>

                        <div class="text-center mn-ht"><span class="arrow_pos"><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/arrow.png'); ?>"></span> <img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/ic-5.png'); ?>" class="w-75"></div>
                        <div class="mt-3">ワンランク上のプラグインアウトドアを体験</div>


                    </div>


                    <div class="col-md-4">
                        <div class="step-indicator">
                            <div class="step-number ">STEP </div>
                            <div class="step-text"><span class="number-big">6</span> <span class="number_text_alt">車両を選択 </span></div>
                        </div>

                        <div class="text-center mn-ht"><span class="arrow_pos"><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/arrow.png'); ?>"></span><img src="<?php echo esc_url(MY_WC_PLUGIN_URL . 'assets/images/ic-6.png'); ?>" class="w-75"></div>
                        <div class="mt-3">アウトドアグッズは使用した状態のまま車と同時に返却！</div>


                    </div>






                </div>


                <div class="row justify-content-center mt-5">
                    <div class="col-md-4 text-center mb-4"> <button type="button" class="btn btn-outline-secondary m_btm_btn_line shadow w-100 " style="border-radius: 24px;">よくある質問</button></div>
                    <div class="col-md-4 text-center mb-4"> <button type="button" class="btn btn-outline-secondary m_btm_btn_line shadow  w-100 " style="border-radius: 24px;">キャンセルポリシー</button></div>

                </div>


            </div>
        </div>
    </div>
</body>

<?php

require_once MY_WC_PLUGIN_PATH . 'templates/footer-template.php';

?>