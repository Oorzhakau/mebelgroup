$(function () {
  // icon search
  $("#search").click(function () {
    $(".menu-item").addClass("hide-item");
    $(".header__search-form").addClass("active");
    $(".close").addClass("active");
    $("#search").hide();
  });
  $(".close").click(function () {
    $(".menu-item").removeClass("hide-item");
    $(".header__search-form").removeClass("active");
    $(".close").removeClass("active");
    $("#search").show();
  });

  // Sticky scroll header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header__top-inner");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  // Slider
  $(".slider__inner").slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true
  });

  // Load more
  $("#loadMore").click(function () {
    $("#boxs .box:hidden").slice(0, 4).slideDown();
    if ($("#boxs .box:hidden").length == 0) {
      $("#loadMore").fadeOut("slow");
    }
  });

  $("#newItemsLoadMore").click(function () {
    $("#newBoxs .newBox:hidden").slice(0, 4).slideDown();
    if ($("#newBoxs .newBox:hidden").length == 0) {
      $("#newItemsLoadMore").fadeOut("slow");
    }
  });

  // Collections Slider
  $(".collections__inner").slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  });
});
