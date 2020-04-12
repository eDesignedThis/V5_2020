console.log("search-results running");
$.ajax({
  url:
    "https://api.bestbuy.com/v1/products?apiKey=wV0fRPELYjjeNtQRT7LmdGE4&sort=bestSellingRank.asc&show=accessories.sku,addToCartUrl,bestSellingRank,categoryPath.id,categoryPath.name,color,customerReviewAverage,customerReviewCount,description,details.name,details.value,dollarSavings,features.feature,freeShipping,frequentlyPurchasedWith.sku,image,includedItemList.includedItem,inStoreAvailability,inStoreAvailabilityText,longDescription,manufacturer,modelNumber,name,onlineAvailability,onlineAvailabilityText,onSale,percentSavings,regularPrice,relatedProducts.sku,salePrice,shipping,shippingCost,shortDescription,sku,thumbnailImage,type,upc,url&format=json",
  success: function (products) {
    console.log(products);
  },
});
