<?php

// Function definition 
function function_alert($message)
{
    // Display the alert box  
    echo "<script>alert('$message');</script>";
}

const CHILD_SEAT_ID = 139;

// Call the function to add or update the cart item
$cart_response = add_or_update_cart_item();

// Function to add or update the cart item
function add_or_update_cart_item()
{
    // Set product ID and quantity
    $product_id = CHILD_SEAT_ID;

    $product_quantity = isset($_REQUEST['child_count']) ? $_REQUEST['child_count'] : 0;

    if ($product_quantity) {

        // Get the cart items
        $cart = WC()->cart->get_cart();

        // Initialize a variable to track if the product is found in the cart
        $found = false;

        // Loop through the cart items
        foreach ($cart as $cart_item_key => $cart_item) {
            // Check if the product is already in the cart
            if ($cart_item['product_id'] === $product_id) {
                // If the product is found, update its quantity
                $response = WC()->cart->set_quantity($cart_item_key, $product_quantity);
                $found = true;
                break;
            }
        }

        // If the product is not found in the cart, add it to the cart
        if (!$found) {
            $response = WC()->cart->add_to_cart($product_id, $product_quantity);
        }
    }

    return $response;
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Example</title>
</head>

<body style="font-family: Arial, sans-serif;">

    <div style="display: flex; align-items: center; margin-bottom: 10px;">
        <span style="background-color: red; color: white; padding: 5px;">必須</span>
        <span style="margin-left: 10px; font-size: 20px;">大人</span>
        <select name="adult_count" id="adult_count" style="margin-left: 10px; padding: 5px; width: 80px;">
            <option value="1">1人</option>
            <option value="2">2人</option>
            <option value="3">3人</option>
            <option value="4">4人</option>
            <option value="5">5人</option>
        </select>
    </div>

    <div style="display: flex; align-items: center; margin-bottom: 10px;">
        <span style="background-color: red; color: white; padding: 5px;">必須</span>
        <span style="margin-left: 10px; font-size: 20px;">子供（6歳以下）</span>
        <select name="child_count" id="child_count" style="margin-left: 10px; padding: 5px; width: 80px;">
            <option value="0">0人</option>
            <option value="1">1人</option>
            <option value="2">2人</option>
            <option value="3">3人</option>
            <option value="4">4人</option>
            <option value="5">5人</option>
        </select>
    </div>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>6歳未満の幼児を同乗させる場合、チャイルドシートの使用が義務付けられています。</li>
        <li>オプション料金1台当たり1,100円（税込）</li>
    </ul>

</body>

</html>

<script>
    document.getElementById('child_count').addEventListener('change', function() {
        var selectedValue = this.value;

        // Make a fetch request to the same page
        fetch(window.location.pathname + "?child_count=" + selectedValue)
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .then(data => {
                // Reload the page after fetch
                location.reload();
            })
            .catch(error => {
                // Handle errors
                console.error('There was a problem with the fetch operation:', error);
            });
    });
</script>