$(".promo__more-details, .more-order-info").hide();

$(".promo__more-details-link").click(function () {
  $(this).parent().parent().parent().next(".promo__more-details").slideToggle();
});

$(".expand-info").click(function () {
  $(this).parent().next().next().next(".more-order-info").slideToggle();
});
