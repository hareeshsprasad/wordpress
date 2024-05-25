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
          $subCategorySelect.append(
            '<option selected disabled value="">店舗</option>'
          );
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
