$( function () {

	var $page = $('body');

	var TOGGLE = {
		element: '.js-menu-toggle',
		target: '',
		stateclass: {
			toggle_open: "toggle-menu-btn--opened"
		},
		getTarget: function(){ var target = $(this.element).data('target'); return (target)? target : false; }
	}

	var MENU = {
		isInited: false,
		element: '',
		stateclass: {
			menu_open: '_open'
		},
		Init: function(){
			if(this.isInited) return;
			this.element = TOGGLE.getTarget();
			this.isInited = true;
		},
		menuClose: function(){
			console.log('close');
			this.Init();
			$(this.element).removeClass(this.stateclass.menu_open);
			$page.removeClass('_menu_opened');
		},
		menuOpen: function(){
			this.Init();
			$(this.element).addClass(this.stateclass.menu_open);
			$page.addClass('_menu_opened');
		}
	}

	$('.js-menu-toggle').on('click', function(e){
		e.stopPropagation();
		var $this = $(this);

		if( $this.hasClass(TOGGLE.stateclass.toggle_open) ) {
			$this.removeClass(TOGGLE.stateclass.toggle_open);
			MENU.menuClose();
		}
		else {
			$this.addClass(TOGGLE.stateclass.toggle_open);
			MENU.menuOpen();

			/*$(document).on('click.mainmenu', function(e){
				$this.removeClass(TOGGLE.stateclass.toggle_open);
				MENU.menuClose();
			});*/
		}
	});


	var Search = {
		$el: '.js-search',
		$btn: '.js-search-btn',

		classes: {
			activated: '_active',
		},

		Init: function(){
			var _this = this;

			$(_this.$el).on('click', function(e){
				/*e.preventDefault();
				e.stopPropagation();*/
			});

			$(this.$btn).on('click', function(e){
				e.preventDefault();

				$(_this.$el).addClass(_this.classes.activated);

				/*$(document).one('click', function(e){
					$(_this.$el).removeClass(_this.classes.activated);
				});*/

			});
		}
	};
	Search.Init();


	var MobileNav = {
		$el: '.js-mobile-nav',
		$menu: '.js-mobile-menu',
		$menu_item: '.js-mobile-menu-item',
		$submenu: '.js-mobile-submenu',
		$back: '.js-mobile-nav-back',

		classes: {
			has_children: '_has_childs',
			not_root: '_lvl_n',
		},

		currentLvl: 1,
		pageWidth: 1,

		Init: function(){
			var _this = this;

			_this.pageWidth = $(window).width();

			$(_this.$el).find(_this.$menu_item).each(function(idx, el){
				if( $(el).siblings(_this.$submenu).length ){
					$(el).addClass(_this.classes.has_children);
					$(el).append('<svg class="icon" width="10" height="10"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#angle-right"></use></svg>');
				}
			});

			$(_this.$submenu).hide();

			$(_this.$menu_item).filter('.' + _this.classes.has_children).on('click', function(e){
				e.preventDefault();

				$(_this.$submenu).hide();

				console.log('m click');


				$(this).siblings(_this.$submenu).show();

				_this.currentLvl++;

				_this.AnimateStep(_this.currentLvl);

				$(_this.$el).addClass(_this.classes.not_root);
			});


			$(_this.$back).on('click', function(e){
				e.preventDefault();

				_this.currentLvl--;

				_this.AnimateStep(_this.currentLvl);

				if(_this.currentLvl == 1){
					$(_this.$el).removeClass(_this.classes.not_root);
				}
			});

		},

		AnimateStep: function(lvl){
			$(this.$menu).animate({
				left: (100 * (this.currentLvl-1) * -1) + 'vw'
			}, 200);
		},

	};

	MobileNav.Init();


	$(window).on('scroll', function(e){

		if( $(window).scrollTop() > 100 ){
			$('.js-header').addClass('_scroll');
		}
		else{
			$('.js-header').removeClass('_scroll');
		}

	});

	$(window).scroll();
});

var menuMobile = document.querySelector(".upper-menu");
var openButton = document.querySelectorAll(".header__opener");
var closeButton = document.querySelector(".upper-menu__closer");

var popupMobile = document.querySelector(".popup-recall");
var mainopenPopup = document.querySelectorAll('.intro-wrapper__count');
var openPopup = document.querySelectorAll(".info-wrapper__count");
var closePopup = document.querySelector(".popup-recall__closer");

var menuText = document.querySelector(".text__description");
var menuOpen = document.querySelector(".text__btn--open");
var menuClose = document.querySelector(".text__btn--close");

var filterText = document.querySelector(".filter__wrap");
var filterOpen = document.querySelector(".filter__open");
var filterClose = document.querySelector(".filter__close");

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

	for (var i = 0; i < mainopenPopup.length; i++) mainopenPopup[i].addEventListener("click", function(event) {
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

if (menuText) {
  menuOpen.addEventListener("click", function(event) {
    event.preventDefault();
    menuText.classList.add("text__description--active");
    menuOpen.classList.add("hidden");
    menuClose.classList.remove("hidden");
  });

  menuText.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  menuClose.addEventListener("click", function() {
    menuText.classList.remove("text__description--active");
    menuOpen.classList.remove("hidden");
    menuClose.classList.add("hidden");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      menuText.classList.remove("text__description--active");
      menuOpen.classList.remove("hidden");
      menuClose.classList.add("hidden");
    }
  });
}

if (filterText) {
  filterOpen.addEventListener("click", function(event) {
    event.preventDefault();
    filterText.classList.add("filter__wrap--active");
  });

  filterText.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  filterClose.addEventListener("click", function() {
    filterText.classList.remove("filter__wrap--active");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      filterText.classList.remove("filter__wrap--active");
    }
  });
}

var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
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
