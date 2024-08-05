(function (d) {
  var config = {
      kitId: "sbd3gjo",
      scriptTimeout: 3000,
      async: true,
    },
    h = d.documentElement,
    t = setTimeout(function () {
      h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
    }, config.scriptTimeout),
    tk = d.createElement("script"),
    f = false,
    s = d.getElementsByTagName("script")[0],
    a;
  h.className += " wf-loading";
  tk.src = "https://use.typekit.net/" + config.kitId + ".js";
  tk.async = true;
  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState;
    if (f || (a && a != "complete" && a != "loaded")) return;
    f = true;
    clearTimeout(t);
    try {
      Typekit.load(config);
    } catch (e) {}
  };
  s.parentNode.insertBefore(tk, s);
})(document);
$(function () {
  $(document).on("click", ".menu-open", open_global);
  //$(document).on('click',".menu-close",close_global);
  $("a.go-pagetop , a.scroll").smoothScroll({
    offset: 0,
    speed: 1000,
    easing: "easeInOutQuint",
  });
  if (!navigator.userAgent.match(/(iPhone|iPad|Android)/)) {
    $(".tel-link").each(function () {
      $(this).replaceWith(
        "<span class='tel-link'>" + $(this).html() + "</span>"
      );
    });
  }
});
$(window).scroll(function () {
  var winHeight = $(window).height();
  var pageHeight = $("body").height();
  if ($(this).scrollTop() > 200) {
    $(".header").addClass("header-floating");
    $(".btn-pagetop").show();
  } else {
    $(".header").removeClass("header-floating");
    $(".btn-pagetop").hide();
  }
});
function open_global() {
  /*$(".global-nav").addClass('active');
	var height = $(window).height();
	winPosition = $(window).scrollTop();
	$(window).scrollTop(0);
	$('.dispbody , .footer').hide();*/

  $(".menu-open").toggleClass("active");
  $(".global-nav").toggleClass("active");
  $("body").toggleClass("no-scroll");

  return false;
}
/*function close_global(){
	$('.dispbody , .footer').show();
	$("body").height('auto');
	$(".global-nav").removeClass('active');
	$(window).scrollTop(winPosition);
	return false;
}*/
$(function () {
  $(window).on("load scroll", function () {
    $(".animation").each(function () {
      //ターゲットの位置を取得
      var target = $(this).offset().top;
      //スクロール量を取得
      var scroll = $(window).scrollTop();
      //ウィンドウの高さを取得
      var height = $(window).height();
      //ターゲットまでスクロールするとフェードインする
      if (scroll > target - height) {
        //クラスを付与
        $(this).addClass("active");
      }
    });
  });
});

$(function () {
  $(window).on("load scroll resize", function () {
    var st = $(window).scrollTop();
    var wh = $(window).height();

    $(".scroll-point").each(function (i) {
      var tg = $(this).offset().top;
      var id = $(this).attr("id");

      if (st > tg - wh + wh / 2) {
        $(".primal-nav-item").removeClass("is-active");
        var link = $(".primal-nav-item[href *= " + id + "]");
        $(link).addClass("is-active");
      }
    });
  });
});

$(document).ready(function () {
  $(".ham-btn").click(function () {
    $(".menu-list").toggleClass("shown");
    $(".ham-btn").toggleClass("change");
  });
  $(".to-top").click(function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

$(document).on("scroll", function () {
  if (window.pageYOffset > window.innerHeight) {
    $("header").addClass("header-shown");
    $(".to-top").addClass("display-shown");
  } else {
    $("header").removeClass("header-shown");
    $(".to-top").removeClass("display-shown");
  }
});
