<?php
if (!defined('ABSPATH')) {
    exit; 

}
global $product;
?>
<form action="http://localhost/wordpress/index.php/product/eclipse-cross/" method="post" enctype="multipart/form-data">
    <?php do_action( 'woocommerce_before_add_to_cart_button' ); ?>

		<?php
		do_action( 'woocommerce_before_add_to_cart_quantity' );

		woocommerce_quantity_input(
			array(
				'min_value'   => apply_filters( 'woocommerce_quantity_input_min','1', $product ),
				'max_value'   => apply_filters( 'woocommerce_quantity_input_max','1', $product ),
				'input_value' => isset( $_POST['quantity'] ) ? wc_stock_amount( wp_unslash( $_POST['quantity'] ) ) : '1', // WPCS: CSRF ok, input var ok.
			)
		);

		do_action( 'woocommerce_after_add_to_cart_quantity' );
		?>
    <input type="hidden" id="wcrp_rental_products_rental_dates" name="wcrp_rental_products_rental_dates" value="16 May 2024 - 17 May 2024">
    <input type="hidden" id="wcrp-rental-products-cart-item-validation-664481229c36c" name="wcrp_rental_products_cart_item_validation" value="MTcxNTc2NTUzOTU3MDIwMjQtMDUtMjQyMDI0LTA1LTI2MDBvZmY=">
    <input type="hidden" id="wcrp-rental-products-cart-item-timestamp-664481229c36c" name="wcrp_rental_products_cart_item_timestamp" value="1715765539">
    <input type="hidden" id="wcrp-rental-products-cart-item-price-664481229c36c" name="wcrp_rental_products_cart_item_price" value="570">
    <input type="hidden" id="wcrp-rental-products-rent-from-664481229c36c" name="wcrp_rental_products_rent_from" value="2024-05-24">
    <input type="hidden" id="wcrp-rental-products-rent-to-664481229c36c" name="wcrp_rental_products_rent_to" value="2024-05-26">
    <input type="hidden" id="wcrp-rental-products-start-days-threshold-664481229c36c" name="wcrp_rental_products_start_days_threshold" value="0">
    <input type="hidden" id="wcrp-rental-products-return-days-threshold-664481229c36c" name="wcrp_rental_products_return_days_threshold" value="0">
    <input type="hidden" id="wcrp-rental-products-advanced-pricing-664481229c36c" name="wcrp_rental_products_advanced_pricing" value="off">
    <input type="hidden" id="wcrp_rental_products_rental_form_nonce" name="wcrp_rental_products_rental_form_nonce" value="fb6523a2ac"><input type="hidden" name="_wp_http_referer" value="/wordpress/index.php/product/colt/">
    <button type="submit" name="add-to-cart" value="59" class="single_add_to_cart_button button alt" style="opacity: 1;">Add to cart</button>
</form>