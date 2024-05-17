jQuery(document).ready(function ($) {
  $("#main-category").change(function () {
    var category_id = $(this).val();
    $.ajax({
      url: my_wc_plugin.ajax_url,
      type: "POST",
      data: {
        action: "get_subcategories",
        category_id: category_id,
      },
      success: function (response) {
        if (response.success) {
          var subcategories = response.data;
          var $subCategorySelect = $("#sub-category");
          $subCategorySelect.empty();
          $subCategorySelect.append('<option value="">Select Area</option>');
          $.each(subcategories, function (index, subcategory) {
            $subCategorySelect.append(
              '<option value="' +
                subcategory.term_id +
                '">' +
                subcategory.name +
                "</option>"
            );
          });
        } else {
          console.log(response.data);
        }
      },
      error: function (xhr, status, error) {
        console.log(error);
      },
    });
  });
});
// Handle Details button click
function myFunction() {
  alert("clicked");
}
// var detailsButtons = document.querySelectorAll(".details-button");
// var modal = document.getElementById("details-modal");
// var closeButton = document.querySelector(".close-button");
// var modalContentPlaceholder = document.getElementById("modal-details-content");

// detailsButtons.forEach(function (button) {
//   button.addEventListener("click", function (event) {
//     event.preventDefault();
//     alert("clicked");
//     var productId = this.getAttribute("data-product-id");
//     console.log(productId);
//     // Fetch and display product details in the modal
//     fetchProductDetails(productId);
//     modal.style.display = "block";
//   });
// });

// closeButton.addEventListener("click", function () {
//   modal.style.display = "none";
// });

// window.addEventListener("click", function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// });

// function fetchProductDetails(productId) {
//   modalContentPlaceholder.innerHTML = "Details for product ID " + productId;
// }
