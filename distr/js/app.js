console.log("app js is running");

// Maybe this isn't necessary

// $(window).scroll(function() {

//   if ($(document).scrollTop() > 100) {
//     $(".header--default").addClass("shadow fixed-top");
//   } else {
//     $(".header--default").removeClass("shadow fixed-top");
//   }
// });

$.ajax({
  url: "../distr/js/main-nav.json",
  success: function(links) {
    for (i = 0; i < links.length; i++) {
      $("ul.navbar-nav").append(
        `<li class='nav-item'><a class='nav-link' href='/distr${links[i].url}'>${links[i].name}</a></li>`
      );
      $("li.active").removeClass("active");
      $('a[href="' + location.pathname + '"]')
        .closest("li")
        .addClass("active");

      let str = links[i].url;
      if (window.location.href.indexOf(str) > 0) {
        document.title = links[i].name + " | V5_2020";
        $(".screen-title").append(links[i].name);
      }
    }
  }
});

// Item Details
$(".item-detail__add-to-cart").click(function() {
  $("#exampleModal").modal("show");
});

// Program Announcements

$(".dismiss-program-announcement").click(function() {
  $("#program-announcement").slideUp();
});

// Performance Tracking

$(".enter-sale-button").click(function() {
  $(this)
    .parent()
    .next()
    .slideToggle();

  $(".product-lookup-btn").click(function() {
    $("#productLookup").modal("show");
  });
});
