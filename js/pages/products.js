$(document).ready(function () {
  function bindProducts(productList) {
    for (let i = 0; i < productList.length; i++) {
      $("#productTable").append(
        "<tr><td>" +
          (i + 1) +
          "</td><td>" +
          productList[i].Category +
          "</td><td>" +
          productList[i].Product +
          "</td></tr>"
      );
    }
  }
  bindProducts(api);

  function bindProductIntermediate(productList) {
    for (let i = 0; i < productList.length; i++) {
      $("#intermediateTable").append(
        "<tr><td>" +
          (i + 1) +
          "</td><td>" +
          productList[i].API +
          "</td><td>" +
          productList[i].APICASNo +
          "</td><td>" +
          productList[i].NAME +
          "</td><td>" +
          productList[i].CASNo +
          "</td></tr>"
      );
    }
  }
  bindProductIntermediate(intermediate);

  $("#txtSearchInput").on("change keydown paste input", (e) => {
    let inputText = e.target.value.trim();
    $("#productTable").html("");
    $("#intermediateTable").html("");
    if (inputText === "") {
      bindProducts(api);
      bindProductIntermediate(intermediate);
    } else {
      let filterProductList = api.filter((data) =>
        data.Product.toLowerCase().includes(inputText.toLowerCase())
      );
      if (filterProductList.length === 0) {
        $("#productTable").html('<tr><td colspan="3">No data found!</td></tr>');
      } else {
        bindProducts(filterProductList);
      }
      let filterIntermediate = intermediate.filter((data) =>
        data.NAME?.toLowerCase().includes(inputText.toLowerCase())
      );
      if (filterIntermediate.length === 0) {
        $("#intermediateTable").html(
          '<tr><td colspan="5">No data found!</td></tr>'
        );
      } else {
        bindProductIntermediate(filterIntermediate);
      }
    }
  });

  $("#ddProductCategory").on("change", (e) => {
    let ddValue = e.target.value;
    switch (ddValue) {
      case "API":
        $("#panelIntermediate").hide();
        $("#panelAPI").show();
        break;
      case "Intermediate":
        $("#panelIntermediate").show();
        $("#panelAPI").hide();
        break;
      default:
        $("#panelIntermediate").show();
        $("#panelAPI").show();
        break;
    }
  });
});
