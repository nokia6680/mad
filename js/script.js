$(function() {
  $( "#js-slider" ).slider({
    value:400,
    min: 0,
    max: 800,
    step: 5
  });
});


(function() {
  var d = document,
      c = d.getElementsByClassName('about-form__tech')[0],
      t = d.getElementsByClassName('about-form__textarea')[0],
      f = d.createTextNode('');

  c.appendChild(f);

  function updateSize() {
     f.nodeValue = t.value + '\n';
  }

  t.onkeypress = t.onkeyup = t.onchange = updateSize;

  updateSize();
})();
