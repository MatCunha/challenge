$(".hide-show-products").click(function () {
    $(".hide").toggle();
});


$(".menu-button").click(function(){
    $(".navbar-icons").toggleClass("flex");
   
})

$.ajax({
    type: "get",
    url: "products.json",
    dataType: "json",
    success: function (data) {
        $(data.cart.item).each(function (index, product) {
            let newProduct = createProduct(product);
            $('.hide-scroller').html(newProduct);
            console.log(product);
        })
    }
});

function createProduct(product) {
    const prodPrincipal = $("<div>");
    prodPrincipal.addClass("hide-product");

    const hideImg = $("<img/>");
    hideImg.addClass("hide-img");
    hideImg.attr("src", product.image);
    $(prodPrincipal).append(hideImg);

    const divColum = $("<div/>");
    divColum.addClass("colum-product");
    $(prodPrincipal).append(divColum);

    const pName = $("<p/>");
    pName.addClass("product-name");
    pName.html(product.name);
    $(divColum).append(pName);

    const pQuant = $("<p/>");
    pQuant.addClass("product-quant");
    pQuant.html("Qtd.: " + product.quantity);
    $(divColum).append(pQuant);

    const pPrice = $("<span/>");
    pPrice.addClass("product-price");
    pPrice.html("&nbsp &nbsp &nbsp" + product.bestPriceFormated);
    $(pQuant).append(pPrice);

    return prodPrincipal;
}