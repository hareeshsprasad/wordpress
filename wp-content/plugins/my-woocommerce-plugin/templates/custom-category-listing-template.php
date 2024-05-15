<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

require_once MY_WC_PLUGIN_PATH . 'includes/class-custom-category-listing.php';

$categories = Custom_Category_Listing::get_categories();
?>

<div class="container">
    <div class="container-form">
        <h2>Select the depature store and date</h2>
        <div class="form-group">
            <select id="main-category">
                <option value="">Select Location</option>
                <?php foreach ($categories as $category): ?>
                <option value="<?php echo $category->term_id; ?>"><?php echo $category->name; ?></option>
                <?php endforeach; ?>
            </select>
            <select id="sub-category">
                <option value="">Select Area</option>
            </select>
        </div>
        <div class="form-group">
            <select>
                <option>2024/05/02</option>
            </select>
        </div>
        <h2>Select the return date</h2>
        <div class="form-group">
            <select>
                <option>2024/05/03</option>
            </select>
        </div>
        <button>choose a car</button>
    </div>
</div>
