<?php
// class-custom-add.php

// Check if ABSPATH is defined to prevent direct access
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

// Include the required class file


// Check if form is submitted
if (isset($_POST['submit'])) {
    // Retrieve form data
    $reserved_date = $_POST['reserved_date'];
    $order_id = $_POST['order_id'];
    $order_item_id = $_POST['order_item_id'];
    $product_id = $_POST['product_id'];
    $quantity = $_POST['quantity'];

    // Process the form data, for example:
    // Create an instance of Custom_add class and call a method to handle form submission
    $custom_add_instance = new Custom_add();
    $custom_add_instance->handle_form_submission($reserved_date, $order_id, $order_item_id, $product_id, $quantity);
} else {
    // Redirect back to the form page if the form wasn't submitted
    header("Location: your-form-page.php");
    exit; // Ensure script execution stops after redirection
}

// Custom_add class definition
class Custom_add {
    public function handle_form_submission($reserved_date, $order_id, $order_item_id, $product_id, $quantity) {
        // Perform actions with form data here
        // For demonstration purposes, let's just print the data
        echo "Reserved Date: $reserved_date <br>";
        echo "Order ID: $order_id <br>";
        echo "Order Item ID: $order_item_id <br>";
        echo "Product ID: $product_id <br>";
        echo "Quantity: $quantity <br>";
    }
}
?>
