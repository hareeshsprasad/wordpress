<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

require_once MY_WC_PLUGIN_PATH . 'includes/class-custom-category-listing.php';
require_once MY_WC_PLUGIN_PATH . 'includes/class-custom-available-products.php';

$categories = Custom_Category_Listing::get_categories();
$link = "http://localhost/wordpress/index.php/demo/";
$response = [];
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $main_category = isset($_POST['main_category']) ? sanitize_text_field($_POST['main_category']) : '';
    $sub_category = isset($_POST['sub_category']) ? sanitize_text_field($_POST['sub_category']) : '';
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
        <div class="title">
            <h4>Select the departure store and date</h4>
            <span class="vertical-line"></span>
        </div>
        <form action="" method="post">
            <div class="form-group">
                <select id="main-category" name="main_category">
                    <option value="">Select Location</option>
                    <?php foreach ($categories as $category) : ?>
                        <?php if ($category->name !== 'Uncategorized') : ?>
                            <option value="<?php echo $category->term_id; ?>"><?php echo $category->name; ?></option>
                        <?php endif; ?>
                    <?php endforeach; ?>
                </select>
            </div>
            <div class="form-group">
                <select id="sub-category" name="sub_category">
                    <option value="">Select Store</option>
                </select>
            </div>
            <div class="form-group">
                <input type="date" name="rent_from" placeholder="choose the start date">
            </div>
            <div class="title">
                <h4 class="return-date">Select the return date</h4>
                <span class="vertical-line-2"></span>
            </div>
            <div class="form-group">
                <input type="date" name="rent_to" placeholder="choose the end date">
            </div>
            <?php if (!empty($response)) : ?>
                <?php foreach ($response as $product_id) : ?>
                    <?php $product = wc_get_product($product_id); ?>
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
                                    <!-- <p>料金: 12,100円 (税込)</p> -->
                                    <p>Number of passengers: 5 people</p>
                                    <div class="car-features">
                                        <span class="feature">禁煙車</span>
                                        <span class="feature">カーナビ</span>
                                        <span class="feature">ETC車載器</span>
                                    </div>
                                    <hr>
                                    <div class="car-actions">
                                        <button class="details-button" onclick="showDetails(event)" data-product-id="<?php echo $product_id; ?>">Details</button>
                                        <button class=" select-button">Select</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            <?php endif; ?>
            <!-- Modal Structure -->
            <div id="details-modal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <p>Some text in the Modal..</p>
                </div>
            </div>
            <script>
                document.addEventListener('DOMContentLoaded', function() {
                    var selectButton = document.getElementById('select-car');
                    selectButton.addEventListener('click', function() {
                        if (!<?php echo json_encode(empty($response)); ?>) {
                            alert('No available cars in the selected date range in the selected location.');
                        }
                    });
                });

                function showDetails(event) {
                    event.preventDefault(); // Prevent the default action
                    var modal = document.getElementById("details-modal");
                    alert("clicked");
                    modal.style.display = 'flex';
                }
            </script>

            <button id="select-car">choose a car</button>
        </form>

    </div>
</div>