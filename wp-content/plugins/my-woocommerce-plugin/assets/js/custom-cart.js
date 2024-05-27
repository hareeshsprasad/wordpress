jQuery(document).ready(function ($) {
  $(".update-cart-button").click(function () {
    var cart_item_key = $(this).data("cart-item-key");
    var quantity = $("#quantity-" + cart_item_key).val();
    var base_price = $("#item-base-price-" + cart_item_key).val();
    var item_price = base_price * quantity;

    $.ajax({
      url: my_wc_plugin.ajax_url,
      type: "POST",
      data: {
        action: "update_cart_quantity",
        cart_item_key: cart_item_key,
        quantity: quantity,
      },
      success: function (response) {
        if (response.success) {
          // Update the price for the specific item in the selected goods section
          //   $("#selected-item-price-" + cart_item_key).text(
          //     "Price: ¥" + item_price.toFixed(2) + " (tax included)"
          //   );

          // Update the price for the specific item in the cart display section
          $("#cart-item-price-" + cart_item_key).html(response.data.item_price);

          // Optionally update the cart total
          var cartTotalText = $(response.data.cart_total).text();
          var cartTotalNumeric = parseFloat(
            cartTotalText.replace(/[^0-9.]/g, "")
          ).toFixed(2);
          var formattedCartTotal =
            "¥" +
            parseFloat(cartTotalNumeric).toLocaleString(undefined, {
              minimumFractionDigits: 2,
            });
          $(".cart-subtotal-amount").text(formattedCartTotal);
        } else {
          console.error("Error updating cart: " + response.data.message);
        }
      },
      error: function (xhr, status, error) {
        console.error("AJAX error: " + error);
      },
    });
  });
});
