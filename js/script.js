var serviceList = document.getElementById('service-list');
  serviceList.style.display="none";
   $('.nav-list__item--service').mouseover(function() {
     serviceList.style.display="flex";
  })
  .mouseout(function() {
    $(serviceList).mouseover(function() {
    serviceList.style.display="flex";
    })
    .mouseout(function() {
     serviceList.style.display="none";
    });
  });


  var goodsList = document.getElementById('goods-list');
    goodsList.style.display="none";
     $('.nav-list__item--goods').mouseover(function() {
       goodsList.style.display="flex";
    })
    .mouseout(function() {
      $(goodsList).mouseover(function() {
      goodsList.style.display="flex";
      })
      .mouseout(function() {
       goodsList.style.display="none";
      });
    });
