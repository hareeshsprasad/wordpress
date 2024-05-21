<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
?>
<div class="container-form-add-ons">
    <nav>
        <button class="back-btn">
            < Back</button>
                <div class="steps">
                    <div class="step">1</div>
                    <div class="step active">2</div>
                    <div class="step">3</div>
                    <div class="step">4</div>
                    <div class="step">5</div>
                </div>
    </nav>
    <form class="options-form">
        <h2>オプション選択</h2>
        <span class="vertical-line-add-on"></span>
        <hr />
        <div class="option">
            <label for="etc" style="font-size: 28px;line-height:1.5">ETCカード<br />料金: 330円/1枚</label>
            <div class="radio-group">
                <label class="radio-btn-label">
                    希望する
                    <input type="radio" id="etc-yes" name="etc" value="yes" />
                </label>
                <label class="radio-btn-label">
                    希望しない
                    <input type="radio" id="etc-no" name="etc" value="no" checked />
                </label>
            </div>
        </div>
        <div class="option">
            <label for="insurance" style="font-size: 28px;line-height:1.5">免責補償制度<br />料金: 2,100円/1日</label>
            <div class="radio-group">
                <label class="radio-btn-label">
                    加入する
                    <input type="radio" id="insurance-yes" name="insurance" value="yes" />
                </label>
                <label class="radio-btn-label">
                    加入しない
                    <input type="radio" id="insurance-no" name="insurance" value="no" checked />
                </label>
            </div>
        </div>
        <div class="buttons">
            <button type="button" class="camp-goods-btn">
                キャンプグッズ選択へ
            </button>
        </div>
        <div class="buttons">
            <button type="submit" class="proceed-btn">このまま決済へ進む</button>
        </div>
    </form>
</div>