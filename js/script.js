var menuMobile = document.querySelector(".upper-menu");
var openButton = document.querySelectorAll(".header__opener");
var closeButton = document.querySelector(".upper-menu__closer")

var popupMobile = document.querySelector(".popup-recall");
var openPopup = document.querySelectorAll(".info-wrapper__count");
var closePopup = document.querySelector(".popup-recall__closer");


if (menuMobile) {
  for (var i = 0; i < openButton.length; i++) openButton[i].addEventListener("click", function(event) {
    event.preventDefault();
    menuMobile.classList.add("upper-menu--active");
  });

  menuMobile.addEventListener("click", function() {
    menuMobile.classList.remove("upper-menu--active");
  });

  menuMobile.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  closeButton.addEventListener("click", function() {
    menuMobile.classList.remove("upper-menu--active");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      menuMobile.classList.remove("upper-menu--active");
    }
  });
}

if (popupMobile) {
  for (var i = 0; i < openPopup.length; i++) openPopup[i].addEventListener("click", function(event) {
    event.preventDefault();
    popupMobile.classList.add("popup-recall--active");
  });

  popupMobile.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  closePopup.addEventListener("click", function() {
    popupMobile.classList.remove("popup-recall--active");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      popupMobile.classList.remove("popup-recall--active");
    }
  });
}

//СКРИПТ ЗАПУСКА СЛАЙДЕРА ПРИМЕРОВ
$(window).on('resize', function(e){
  // Переменная, по которой узнаем запущен слайдер или нет.
  // Храним её в data
  var init = $(".sample-list").data('init-slider');
  // Если мобильный
  if(window.innerWidth < 1152){
    // Если слайдер не запущен
    if(init != 1){
      // Запускаем слайдер и записываем в data init-slider = 1
      $('.sample-list').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
      }).data({'init-slider': 1});
    }
  }
  // Если десктоп
  else {
    // Если слайдер запущен
    if(init == 1){
      // Разрушаем слайдер и записываем в data init-slider = 0
      $('.sample-list').slick('unslick').data({'init-slider': 0});
    }
  }
}).trigger('resize');

//СКРИПТ ЗАПУСКА СЛАЙДЕРА ПОСЛЕДНИХ КЕЙСОВ
// Подпишемся на ресайз и продиспатчим его для запуска
$(window).on('resize', function(e){
  // Переменная, по которой узнаем запущен слайдер или нет.
  // Храним её в data
  var init1 = $(".recent-list").data('init-slider');
  // Если мобильный
  if(window.innerWidth < 1152){
    // Если слайдер не запущен
    if(init1 != 1){
      // Запускаем слайдер и записываем в data init-slider = 1
      $('.recent-list').slick({
        dots: true,
        fade: true,
        infinite: false,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
      }).data({'init-slider': 1});
    }
  }
  // Если десктоп
  else {
    // Если слайдер запущен
    if(init1 == 1){
      // Разрушаем слайдер и записываем в data init-slider = 0
      $('.recent-list').slick('unslick').data({'init-slider': 0});
    }
  }
}).trigger('resize');

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

$(".faq-answer__tab").hide();
$(".faq-answer__tab:first").show();
/* в режиме вкладок */
$(".faq-list__item").click(function () {
    $(".faq-answer__tab").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();
    $(".faq-list__item").removeClass("faq-list__item--active");
    $(this).addClass("faq-list__item--active");
    $(".faq-answer__title").removeClass("faq-answer__title--active");
    $(".faq-answer__title[rel^='" + activeTab + "']").addClass("faq-answer__title--active");
});
/* в режиме аккордеона */
$(".faq-answer__title").click(function () {
    $(".faq-answer__tab").hide();
    var d_activeTab = $(this).attr("rel");
    $("#" + d_activeTab).fadeIn();
    $(".faq-answer__title").removeClass("faq-answer__title--active");
    $(this).addClass("faq-answer__title--active");
    $(".faq-list__item").removeClass("faq-list__item--active");
    $(".faq-list__item[rel^='" + d_activeTab + "']").addClass("faq-list__item--active");
});

/*
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
*/
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
