$(document).on("mouseover", ".nav-list__item", function() {
  var numberIndex = $(this).index();

  if (!$(this).is("nav-list__item--active")) {
    $(".nav-list__item").removeClass("nav-list__item--active");
    $(".lower-menu__list").removeClass("lower-menu__list--active");

    $(this).addClass("nav-list__item--active");
    $(".lower-menu").find("ul:eq(" + numberIndex + ")").addClass("lower-menu__list--active");

    var listItemHeight = $(".lower-menu")
      .find("ul:eq(" + numberIndex + ")")
      .innerHeight();
    $(".lower-menu").height(listItemHeight + "px");
  }
});

$(document).on("click", ".faq-list__item", function() {
  var numberIndex = $(this).index();

  if (!$(this).is("faq-list__item--active")) {
    $(".faq-list__item").removeClass("faq-list__item--active");
    $(".faq-answer__tab").removeClass("faq-answer__tab--active");

    $(this).addClass("faq-list__item--active");
    $(".faq-answer").find("li:eq(" + numberIndex + ")").addClass("faq-answer__tab--active");

    var listItemHeight = $(".faq-answer")
      .find("li:eq(" + numberIndex + ")")
      .innerHeight();
    $(".faq-answer").height(listItemHeight + "px");
  }
});

$(document).on("click", ".pattern-list__item", function() {
  var numberIndex = $(this).index();

  if (!$(this).is("pattern-list__item--active")) {
    $(".pattern-list__item").removeClass("pattern-list__item--active");
    $(".pattern-links__list").removeClass("pattern-links__list--active");

    $(this).addClass("pattern-list__item--active");
    $(".pattern-links").find("ul:eq(" + numberIndex + ")").addClass("pattern-links__list--active");

    var listItemHeight = $(".pattern-links")
      .find("ul:eq(" + numberIndex + ")")
      .innerHeight();
    $(".pattern-links").height(listItemHeight + "px");
  }
});
