document.addEventListener("DOMContentLoaded", function () {
  // For disabling previous dates //
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("rent_from").setAttribute("min", today);
  document.getElementById("rent_to").setAttribute("min", today);
  // For showing calender //
  document
    .getElementById("rent_from")
    .addEventListener("click", function (event) {
      this.showPicker();
    });
  document
    .getElementById("rent_to")
    .addEventListener("click", function (event) {
      this.showPicker();
    });
  // For validating rent to date is grater than or equal to rent from date //
  function validateDates() {
    const rentFrom = document.getElementById("rent_from").value;
    const rentTo = document.getElementById("rent_to").value;
    const errorMessage = document.getElementById("error-message");
    if (rentFrom && rentTo && rentTo < rentFrom) {
      errorMessage.style.display = "block";
      return false;
    } else {
      errorMessage.style.display = "none";
      return true;
    }
  }
  document
    .getElementById("rent_from")
    .addEventListener("change", validateDates);
  document.getElementById("rent_to").addEventListener("change", validateDates);
  document
    .getElementById("car-select-form")
    .addEventListener("submit", function (event) {
      if (!validateDates()) {
        event.preventDefault();
      }
    });
  // displaying car pop-up //
  var modal = document.getElementById("myModal");
  var backBtn = document.getElementsByClassName("back-btn")[0];

  document.querySelectorAll(".details-button").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const productData = JSON.parse(this.getAttribute("data-product"));
      let test = `wcrp-rental-products-cart-item-validation-${productData.rental_form_id}`;

      let ttt = document.getElementById(test).value;

      console.log(ttt);
      document.getElementById("modalProductName").innerText = productData.name;
      document.getElementById("modalProductImage").src = productData.image;
      document.getElementById("modalProductPrice").innerText =
        productData.price;
      document.getElementById(
        "wcrp-rental-products-cart-item-validation"
      ).value = ttt;
      document.getElementById(
        "wcrp-rental-products-cart-item-timestamp"
      ).value = productData.timestamp;
      document.getElementById(`wcrp-rental-products-cart-item-price`).value =
        productData.total_price;
      document.getElementById(`wcrp-rental-products-rent-from`).value =
        productData.rent_from;
      document.getElementById(`wcrp-rental-products-rent-to`).value =
        productData.rent_to;
      document.getElementById(
        `wcrp-rental-products-start-days-threshold`
      ).value = productData.start_days_threshold;
      document.getElementById(
        `wcrp-rental-products-return-days-threshold`
      ).value = productData.return_days_threshold;
      document.getElementById(`wcrp-rental-products-advanced-pricing`).value =
        productData.products_advanced_pricing;
      document.getElementById(`product-id`).value = productData.product_id;
      modal.style.display = "block";
    });
  });

  backBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
