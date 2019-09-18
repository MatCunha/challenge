
$( ".hide-show-products" ).click(function() {
    $(".hide").toggle();
  });

$.getJSON("products.json",
    function (data) {
        console.log(data)
    }
);