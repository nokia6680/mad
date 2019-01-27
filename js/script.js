var serviceList = document.getElementById('service-list');
serviceList.style.display = "none";
$('.nav-list__item--service').mouseover(function() {
    serviceList.style.display = "flex";
  })
  .mouseout(function() {
    $(serviceList).mouseover(function() {
        serviceList.style.display = "flex";
      })
      .mouseout(function() {
        serviceList.style.display = "none";
      });
  });


var goodsList = document.getElementById('goods-list');
goodsList.style.display = "none";
$('.nav-list__item--goods').mouseover(function() {
    goodsList.style.display = "flex";
  })
  .mouseout(function() {
    $(goodsList).mouseover(function() {
        goodsList.style.display = "flex";
      })
      .mouseout(function() {
        goodsList.style.display = "none";
      });
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
