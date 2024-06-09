document.addEventListener("DOMContentLoaded", function () {
  // displaying car pop-up //
  var modal = document.getElementById("exampleModal");
  var backBtn = document.getElementsByClassName("back-btn")[0];

  document.querySelectorAll(".details-button").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const productData = JSON.parse(this.getAttribute("data-product"));
      // console.log(productData, "productData");
      let test = `wcrp-rental-products-cart-item-validation-${productData.rental_form_id}`;
      let ttt = document.getElementById(test).value;
      if (productData.name) {
        document.getElementById("modalProductName").innerText =
          productData.name;
      }
      if (productData.image) {
        document.getElementById("modalProductImage").src = productData.image;
      }
      if (productData.price) {
        document.getElementById("modalProductPrice").innerText =
          productData.price;
      }
      if (productData.model) {
        document.getElementById("productModel").innerText = productData.model;
      }
      if (productData.number_of_passengers) {
        document.getElementById(
          "number-of-passengers"
        ).innerText = `乗車人数：${productData.number_of_passengers}人`;
      }
      const carFeaturesList = document.getElementById("carFeaturesList");
      const carFeatures = productData.car_features;
      carFeaturesList.innerHTML = "";
      carFeatures.forEach((feature) => {
        const listItem = document.createElement("li");
        listItem.textContent = feature.name;
        carFeaturesList.appendChild(listItem);
      });
      if (productData.drive_type) {
        document.getElementById(
          "drive-type"
        ).innerText = ` 駆動式：${productData.drive_type}`;
      }
      if (productData.ev_mileage) {
        document.getElementById(
          "ev"
        ).innerText = ` EV走行換算距離 ${productData.ev_mileage}`;
      }
      if (productData.hybrid_fule_type) {
        document.getElementById(
          "hybrid"
        ).innerText = ` ハイブリッド燃料消費率 ${productData.hybrid_fule_type} (${productData.drive_type})`;
      }
      document.getElementById(
        "description"
      ).innerText = ` ${productData.product_description}`;
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
function notification(message, type = "success") {
  var snackbar = document.getElementById("snackbar");
  snackbar.className = "show";
  snackbar.innerHTML = message;

  if (type === "error") {
    snackbar.style.backgroundColor = "#ff4d4d"; // Red background for error
  } else {
    snackbar.style.backgroundColor = "#4CAF50"; // Green background for success
  }

  switch (type) {
    case "success":
      snackbar.style.backgroundColor = "#4CAF50";
      break;
    case "error":
      snackbar.style.backgroundColor = "#ff4d4d";
      break;
    case "warning":
      snackbar.style.backgroundColor = "#ffc107";
  }

  setTimeout(function () {
    snackbar.className = snackbar.className.replace("show", "");
  }, 3000);
}
