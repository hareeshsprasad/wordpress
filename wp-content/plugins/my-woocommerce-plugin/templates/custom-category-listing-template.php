<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

require_once MY_WC_PLUGIN_PATH . 'includes/class-custom-category-listing.php';
require_once MY_WC_PLUGIN_PATH . 'includes/class-custom-available-products.php';

$categories = Custom_Category_Listing::get_categories();
$response = [];
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $main_category = isset($_POST['main_category']) ? sanitize_text_field($_POST['main_category']) : '';
    $sub_category = isset($_POST['sub_category']) ? sanitize_text_field($_POST['sub_category']) : '';
    echo $sub_category;
    $rent_from = isset($_POST['rent_from']) ? sanitize_text_field($_POST['rent_from']) : '';
    $rent_to = isset($_POST['rent_to']) ? sanitize_text_field($_POST['rent_to']) : '';

    $data = [
        'main_category' => $main_category,
        'sub_category' => $sub_category,
        'rent_from' => $rent_from,
        'rent_to' => $rent_to,
    ];
    $response = Custom_Available_Product_Listing::availabe_Cars($data);
}
?>
<div class="container">
    <div class="container-form">
        <div class="navigation">
            <a href="#" class="navigation-link">
                < Back</a>
                    <div class="active">1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
        </div>
        <div class="title">
            <h4>出発する店舗と日時を選ぶ</h4>
            <span class="vertical-line"></span>
        </div>
        <hr style="margin-top:-10px;">
        <form action="" method="post" id="car-select-form">
            <div class="select-group">
                <select id="main-category" name="main_category" required>
                    <option value="">Select Location</option>
                    <?php foreach ($categories as $category) : ?>
                        <?php if ($category->name !== 'Uncategorized' && $category->name !== 'Add-Ons' &&  $category->name !== 'camping-goods') : ?>
                            <option value="<?php echo $category->term_id; ?>" <?php echo (isset($_POST['main_category']) && $_POST['main_category'] == $category->term_id) ? 'selected' : ''; ?>>
                                <?php echo $category->name; ?>
                            </option>
                        <?php endif; ?>
                    <?php endforeach; ?>
                </select>
                <select id="sub-category" name="sub_category" required>
                    <option value="">Select Store</option>
                    <?php
                    if (isset($_POST['main_category']) && isset($_POST['sub_category'])) {
                        $subcategories = Custom_Category_Listing::get_subcategories(intval($_POST['main_category']));
                        foreach ($subcategories as $subcategory) {
                            echo '<option value="' . $subcategory->term_id . '" ' . ($_POST['sub_category'] == $subcategory->term_id ? 'selected' : '') . '>' . $subcategory->name . '</option>';
                        }
                    }
                    ?>
                </select>
            </div>
            <div class="form-group">
                <input type="date" id="rent_from" name="rent_from" placeholder="choose the start date" value="<?php echo $rent_from; ?>" required>
            </div>
            <div class="title">
                <h4 class="return-date">返却する日時を選ぶ</h4>
                <span class="vertical-line-2"></span>
            </div>
            <hr style="margin-top:-15px;">
            <div class="form-group">
                <input type="date" id="rent_to" name="rent_to" placeholder="choose the end date" value="<?php echo $rent_to; ?>" required>
                <div id="error-message" style="color: red; float:left; display: none">
                    The end date cannot be earlier than the start date.
                </div>
            </div>
            <div style="margin-top:30px;">
                <button id="select-car" type="submit">choose a car</button>
            </div>
        </form>
        <?php if (!empty($response)) : ?>
            <?php foreach ($response as $product_id) : ?>

                <?php
                $product = wc_get_product($product_id);
                $product_data = [
                    'name' => $product->get_name(),
                    'image' => get_the_post_thumbnail_url($product_id),
                    'price' => $product->get_price()
                ];
                $product_permalink = get_permalink($product_id);
                ?>
                <div class="title">
                    <h4 class="return-date">Car selection</h4>
                    <span class="vertical-line-2"></span>
                </div>
                <hr style="margin-top:-15px;">
                <div class="car-container">
                    <div class="car-card">
                        <h3><?php echo $product->get_name(); ?></h3>
                        <div class="car-content">
                            <img src="<?php echo get_the_post_thumbnail_url($product_id); ?>" alt="Car Image">
                            <div class="car-details">
                                <p>
                                    PHEV model
                                    <span class="vertical-line"></span>
                                    Price : <?php echo $product->get_price(); ?>
                                </p>
                                <p>Number of passengers: 5 people</p>
                                <div class="car-features">
                                    <span class="feature">禁煙車</span>
                                    <span class="feature">カーナビ</span>
                                    <span class="feature">ETC車載器</span>
                                </div>
                                <hr>
                                <?php $link = "http://localhost/wordpress/index.php/product/$product_permalink?rent_from=$rent_from&rent_to=2024-05-31"; ?>
                                <div class="car-actions">
                                    <button class="details-button" data-product='<?php echo json_encode($product_data); ?>'>Details</button>
                                    <button class="select-button" data-link="<?php echo esc_url($link); ?>">Select</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        <?php else :  ?>
        <?php endif; ?>
        <!-- Modal Structure -->
        <div id="myModal" class="modal">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="modal-header">
                        <h2 id="modalProductName">Eclipse Cross</h2>
                    </div>
                    <img id="modalProductImage" src="" alt="Car Image" />
                    <div class="info">
                        <div class="car-model">
                            <p><strong>PHEV Model</strong> <span class="vertical-line"></span> Price: <span id="modalProductPrice"></span></p>
                            <p>
                                <span style="padding: 2px 5px">Non-smoking vehicle</span>
                                <span style="background-color: #ccc; padding: 2px 5px">Car navigation</span>
                                <span style="background-color: #ccc; padding: 2px 5px">ETC on-board unit</span>
                            </p>
                        </div>
                    </div>
                    <div class="car-spec">
                        <span class="spec-item" style="padding: 2px 5px; font-size: 14px;">駆動方式: 4WD</span>
                        <span class="spec-item" style="padding: 2px 17px; font-size: 14px;">ハイブリッド燃料消費率 WLTCモード<br>16.4km/L(4WD)</span>
                        <span class="spec-item" style="padding: 2px 5px; font-size: 14px;">EV走行換算距離 WLTCモード<br>57km</span>
                    </div>
                    <hr style="margin-top:-10px;max-width:90%;margin-left:25px;">
                    <div class="details">
                        <p>
                            A form sharpened by a depth that enhances the ordinary. A rugged
                            and sporty outfit. And it supported the functionality and spirit
                            of an SUV. A sharp and three-dimensional interior redesign. It has
                            reached a new path by enhancing smaller equipment
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="back-btn">Cancel</button>
                        <button class="select-btn">Select</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>