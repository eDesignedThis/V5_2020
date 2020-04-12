function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

$.ajax({
  url: "/distr/js/data/promotions.json",
  dataType: "json",
  success: function (promos) {},
});

// Generate progress bar
// $(function () {
//   $(".promo-progress-bar").dxLinearGauge({
//     scale: {
//       startValue: 0,
//       endValue: 100,
//       tickInterval: 10,
//     },

//     value: 50,
//   });
// });

// Generate Claim Grid
