(function () {
  if ($('#counter2').length == 0) {
    var lang = $.cookie('lang') || (navigator.language || navigator.systemLanguage).toLowerCase().substr(0, 2);
    if (lang == "ru") {
      $('#menu').load('index_ru.html #menu');
    } else {
      $('#menu').load('index_en.html #menu');
    }
  }

  $('div#menu div ul li a').each(function () {
    var u1 = $(this).attr('href');
    var u2 = window.location.pathname;
    if (u1 == u2) {
      $(this).addClass('active');
    }
  });
})();
