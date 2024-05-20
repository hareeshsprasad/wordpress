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
    // print_r($response);
    // echo "<pre> $response";
    // exit;
}
?>

<div class="container">
    <div class="container-form">
        <div class="title">
            <h4>Select the departure store and date</h4>
            <span class="vertical-line"></span>
        </div>
        <hr style="margin-top:-10px;">
        <form action="" method="post">
            <div class="select-group">
                <select id="main-category" name="main_category">
                    <option value="">Select Location</option>
                    <?php foreach ($categories as $category) : ?>
                        <?php if ($category->name !== 'Uncategorized') : ?>
                            <option value="<?php echo $category->term_id; ?>"><?php echo $category->name; ?></option>
                        <?php endif; ?>
                    <?php endforeach; ?>
                </select>
                <select id="sub-category" name="sub_category">
                    <option value="">Select Store</option>
                </select>
            </div>
            <div class="form-group">
                <input type="date" id="rent_from" name="rent_from" placeholder="choose the start date" min="">
            </div>
            <div class="title">
                <h4 class="return-date">Select the return date</h4>
                <span class="vertical-line-2"></span>
            </div>
            <hr style="margin-top:-15px;">
            <div class="form-group">
                <input type="date" id="rent_to" name="rent_to" placeholder="choose the end date" min="">
            </div>
            <?php if (!empty($response)) : ?>
                <?php foreach ($response as $product_id) : ?>

                    <?php
                    $product = wc_get_product($product_id);
                    $product_data = [
                        'name' => $product->get_name(),
                        'image' => get_the_post_thumbnail_url($product_id),
                        'price' => $product->get_price()
                    ];
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
                                    <div class="car-actions">
                                        <button class="details-button" data-product='<?php echo json_encode($product_data); ?>'>Details</button>
                                        <button class="select-button">Select</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            <?php endif; ?>
            <button id="select-car">choose a car</button>
        </form>
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
                        <p>
                            <span style="padding: 2px 5px;font-size:14px;">Drive type: 4WD</span>
                            <span style="background-color: #ccc; padding: 2px 5px;font-size:14px;">Hybrid fuel consumption WLTC model <br>16.4km/L(4WD)</span>
                            <span style="background-color: #ccc; padding: 2px 5px;font-size:14px;">EV mileage conversion distance</span>
                        </p>
                    </div>

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
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                const today = new Date().toISOString().split('T')[0];
                document.getElementById('rent_from').setAttribute('min', today);
                document.getElementById('rent_to').setAttribute('min', today);

                var modal = document.getElementById("myModal");
                var backBtn = document.getElementsByClassName("back-btn")[0];

                document.querySelectorAll('.details-button').forEach(button => {
                    button.addEventListener('click', function(event) {
                        event.preventDefault();
                        const productData = JSON.parse(this.getAttribute('data-product'));

                        document.getElementById('modalProductName').innerText = productData.name;
                        document.getElementById('modalProductImage').src = productData.image;
                        document.getElementById('modalProductPrice').innerText = productData.price;

                        modal.style.display = "block";
                    });
                });

                backBtn.onclick = function() {
                    modal.style.display = "none";
                };

                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                };
            });
        </script>
    </div>
</div>