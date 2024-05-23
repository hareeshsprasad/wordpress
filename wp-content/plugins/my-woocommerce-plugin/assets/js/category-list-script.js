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

      document.getElementById("modalProductName").innerText = productData.name;
      document.getElementById("modalProductImage").src = productData.image;
      document.getElementById("modalProductPrice").innerText =
        productData.price;

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
  document.querySelectorAll(".select-button").forEach((button) => {
    button.addEventListener("click", function (event) {
      // event.preventDefault();

      window.location.href = this.getAttribute("data-link");
    });
  });
});
