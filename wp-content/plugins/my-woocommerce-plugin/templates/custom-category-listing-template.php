<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

require_once MY_WC_PLUGIN_PATH . 'includes/class-custom-category-listing.php';
require_once MY_WC_PLUGIN_PATH . 'includes/class-custom-available-products.php';

$categories = Custom_Category_Listing::get_categories();
$link = "http://localhost/wordpress/index.php/demo/";
?>

<div class="container">
    <div class="container-form">
        <h4>Select the departure store and date</h4>
        <form action="<?php echo esc_url($link); ?>" method="post">
            <div class="form-group">
                <select id="main-category" name="main_category">
                    <option value="">Select Location</option>
                    <?php foreach ($categories as $category) : ?>
                        <option value="<?php echo $category->term_id; ?>"><?php echo $category->name; ?></option>
                    <?php endforeach; ?>
                </select>
                <select id="sub-category" name="sub_category">
                    <option value="">Select Area</option>
                </select>
            </div>
            <div class="form-group">
                <input type="date" name="rent_from" placeholder="choose the start date">
            </div>
            <h4>Select the return date</h4>
            <div class="form-group">
                <input type="date" name="rent_to" placeholder="choose the end date">
            </div>
            <button>choose a car</button>
        </form>
    </div>
</div>
<?php
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

    Custom_Available_Product_Listing::availabe_Cars($data);
}

?>