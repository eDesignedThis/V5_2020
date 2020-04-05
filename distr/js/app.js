console.log("app js is running");

$(window).scroll(function() {
  $(".header--default").addClass("shadow");
});

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
