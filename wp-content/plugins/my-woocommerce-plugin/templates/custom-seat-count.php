<?php

const CHILD_SEAT_ID = 331;

// Call the function to add or update the cart item
$cart_response = add_or_update_cart_item();

// // Function to add or update the cart item
function add_or_update_cart_item()
{
    // Set product ID and quantity
    $product_id = CHILD_SEAT_ID;

    $product_quantity = isset($_REQUEST['child_count']) ? $_REQUEST['child_count'] : 0;

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

    return $response;
}

?>


<body style="font-family: Arial, sans-serif;">
    <div class="back back_hide"><a href="<?php echo home_url("index.php/custom-cart-details"); ?>"><img src="<?php echo plugin_dir_url(__FILE__) . '../assets/images/back.png'; ?>">Back</a></div>
    <div class="stepper mt-3">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li class="active">5</li>
        </ul>
    </div>
    <div class="br-add">
        <div class="child-seat">
            <div style="display: flex; align-items: center; margin-bottom: 30px;">
                <div class="col-md-3 d-flex align-items-center">
                    <span style="background-color: red;color: white;padding: 5px;width: 25%;text-align: center;">必須</span>
                    <span style="margin-left: 10px; font-size: 20px;">大人</span>
                </div>
                <div class="col-md-3 ">
                    <select name="adult_count" id="adult_count" style="margin-left: 10px;padding: 5px;width: 40%;height: 40px;">
                        <option value="1">1人</option>
                        <option value="2">2人</option>
                        <option value="3">3人</option>
                        <option value="4">4人</option>
                        <option value="5">5人</option>
                    </select>
                </div>
            </div>

            <div style="display: flex; align-items: center; margin-bottom: 30px;">
                <div class="col-md-3 d-flex align-items-center">
                    <span style="background-color: red;color: white;padding: 5px;width: 25%;text-align: center;">必須</span>
                    <span style="margin-left: 10px; font-size: 20px;">子供（6歳以下）</span>
                </div>
                <div class="col-md-3">
                    <select name="child_count" id="child_count" style="margin-left: 10px;padding: 5px;width: 40%;height: 40px;">
                        <option value="0">0人</option>
                        <option value="1">1人</option>
                        <option value="2">2人</option>
                        <option value="3">3人</option>
                        <option value="4">4人</option>
                        <option value="5">5人</option>
                    </select>
                </div>
            </div>
            <ul style="list-style-type: disc; margin-left: 20px;">
                <li>6歳未満の幼児を同乗させる場合、チャイルドシートの使用が義務付けられています。</li>
                <li>オプション料金1台当たり1,100円（税込）</li>
            </ul>
        </div>
    </div>
</body>

<script>
    let seat_count = localStorage.getItem("child_count");

    if (seat_count != null) {
        document.getElementById("child_count").value = seat_count;
    }

    document.getElementById('child_count').addEventListener('change', function() {
        var selectedValue = this.value;
        localStorage.setItem("child_count", selectedValue);
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