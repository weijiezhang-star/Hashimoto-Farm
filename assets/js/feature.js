$(function(){
	var winVh = window.innerHeight;
	var itemHeight = $('.feature-slide-nav li:nth-child(1)').height();
	var showCount = Math.floor( winVh / itemHeight );
	/*$('.feature-slide-nav').slick({
		arrows: false,
		dots: false,
		vertical: true,
		verticalSwiping: true,
		centerMode: true,
		slidesToShow: 7,
		slidesToScroll: 1,
		asNavFor: '.feature-slide',
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 700,
				settings: {
					vertical: false,
					slidesToShow: 1,
				},
			},
		]
	});
	$('.feature-slide').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay : false,
		pauseOnHover :  false,
		fade: true,
		asNavFor: '.feature-slide-nav'
	});*/
});

$(window).load(function(){
  var breakpoint = 750; // PC/SPの切り替わりpx数

  //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//

  /**
   * ユーザーエージェントを取得
   */

  var ua = navigator.userAgent;
  var is_iPad = /iPad|Macintosh/i.test(navigator.userAgent) && 'ontouchend' in document;

  if (ua.indexOf('iPhone') > 0) {
    var iphone_flg = true;
  } else if (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
    // スマートフォン向けの記述
    var sp_flg = true;
  } else if (is_iPad) {
    // iPad向けの記述
    var iPad_flg = true;
  } else if (ua.indexOf('Android') > 0) {
    // タブレット向けの記述
    var tablet_flg = true;
  } else {
    // PC向けの記述
    var is_pc = true;
  }


  /**
   * プロジェクトストーリー　スクロール固定
   */

  vh = window.innerHeight; // 画面高さを取得

  function pjStoryScroll() {

    if (!iphone_flg) {
      vh = window.innerHeight; // 画面高さを取得
    }

    scrollPos = $(window).scrollTop(); // 画面上端のスクロール位置を取得
    scrollPosBtm = scrollPos + vh; // 画面下端のスクロール位置を取得
    wrapPos = $('#js-top-slide-body-wrap').offset().top; // スライダーの位置を取得
    slideCounts = $('.js-feature-slide').length; // スライド枚数を取得
    sliderFromPos = scrollPos - wrapPos;
    wrapPosBtm = wrapPos + $('#js-top-slide-body-wrap').height();

    var pjStoryWrapH = vh * (slideCounts + 1);
    $('#js-top-slide-body-wrap').height(pjStoryWrapH)


    if (scrollPos > wrapPos) {
      $('#js-top-slide-body-wrap').addClass('is-fixed');
    } else {
      $('#js-top-slide-body-wrap').removeClass('is-fixed');
    }

    if (sliderFromPos > vh * 4) { // プロジェクトストーリー終了後
		slideChangeEnd()
    } else if (sliderFromPos > vh * 3) { // スライダー4枚目の表示
		slideChange04()
    } else if (sliderFromPos > vh * 2) { // スライダー3枚目の表示
		slideChange03()
    } else if (sliderFromPos > vh) { // スライダー2枚目の表示
		slideChange02()
    } else if (sliderFromPos < vh) { // スライダー1枚目の表示
		slideChange01()
    }


    if (scrollPosBtm > wrapPosBtm) {
      $('#js-top-slide-body-wrap').addClass('is-end');
      $('#js-top-slide-body-wrap').removeClass('is-fixed');
    } else {
      $('#js-top-slide-body-wrap').removeClass('is-end');
    }

  }

  $(window).on('scroll resize', function () {
    pjStoryScroll();
  });

  pjStoryScroll()
  
  var secTop01 = wrapPos;
  var secTop02 = wrapPos + 80 + vh;
  var secTop03 = wrapPos + 80 + vh * 2;
  var secTop04 = wrapPos + 80 + vh * 3;
  
  $('#js-slide01').click(function(){ slideChange01();  $(window).scrollTop( secTop01 ); });
  $('#js-slide02').click(function(){ slideChange02();  $(window).scrollTop( secTop02 ); });
  $('#js-slide03').click(function(){ slideChange02();  $(window).scrollTop( secTop03 ); });
  $('#js-slide04').click(function(){ slideChange02();  $(window).scrollTop( secTop04 ); });

  

  //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//

  /**
   * プロジェクトストーリー　スクロール固定
   */

  function pjBg() {
    vh = window.innerHeight;
    var scrollPos = $(window).scrollTop();
    var scrollPosBtm = scrollPos + vh;
    var pjStoryPos = $("#js-slide-section").offset().top;

    if (pjStoryPos - vh < scrollPosBtm) {
      $("#js-slide-section").addClass("is-show")
    } else {
      $("#js-slide-section").removeClass("is-show")
    }
  }


  $(window).on('scroll resize', function () {
    pjBg()
  });

  pjBg()

  //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
});

$(function () {




});

function slideChange01(){
    $('.js-feature-slide').eq(0).removeClass('is-prev');
    $('.js-feature-slide').eq(2).removeClass('is-prev');
    $('.js-feature-slide').eq(3).removeClass('is-prev');

    if ($('.js-feature-slide').eq(1).hasClass('is-show')) {
      $('.js-feature-slide').eq(1).addClass('is-prev');
    }

    $('.js-feature-slide').each(function () { $(this).removeClass('is-show') }) // すべてのスライダーを非表示にする
    $('.js-feature-slide').eq(0).addClass('is-show');
    $('.feature-slide-nav li a').removeClass('active');
    $('.feature-slide-nav li:nth-child(1) a').addClass('active');
	$('.feature-slide-nav li:nth-child(1) a').addClass('visited');
	
	$('.feature-slide-nav li:nth-child(2) a').removeClass('visited');
	$('.feature-slide-nav li:nth-child(3) a').removeClass('visited');
	$('.feature-slide-nav li:nth-child(4) a').removeClass('visited');
}

function slideChange02(){
    $('.js-feature-slide').eq(1).removeClass('is-prev');
    $('.js-feature-slide').eq(3).removeClass('is-prev');

    // 前後のスライダーを判定
    if ($('.js-feature-slide').eq(0).hasClass('is-show')) {
      $('.js-feature-slide').eq(0).addClass('is-prev');
    } else if ($('.js-feature-slide').eq(2).hasClass('is-show')) {
      $('.js-feature-slide').eq(2).addClass('is-prev');
    }

    $('.js-feature-slide').each(function () { $(this).removeClass('is-show') }) // すべてのスライダーを非表示にする
    $('.js-feature-slide').eq(1).addClass('is-show');  // スライダーを表示
    $('.feature-slide-nav li a').removeClass('active');
    $('.feature-slide-nav li:nth-child(2) a').addClass('active');
	$('.feature-slide-nav li:nth-child(1) a').addClass('visited');
	$('.feature-slide-nav li:nth-child(2) a').addClass('visited');
	
	$('.feature-slide-nav li:nth-child(3) a').removeClass('visited');
	$('.feature-slide-nav li:nth-child(4) a').removeClass('visited');
}

function slideChange03(){
    $('.js-feature-slide').eq(0).removeClass('is-prev');
    $('.js-feature-slide').eq(2).removeClass('is-prev');

    // 前後のスライダーを判定
    if ($('.js-feature-slide').eq(1).hasClass('is-show')) {
      $('.js-feature-slide').eq(1).addClass('is-prev');
    } else if ($('.js-feature-slide').eq(3).hasClass('is-show')) {
      $('.js-feature-slide').eq(3).addClass('is-prev');
    }

    $('.js-feature-slide').each(function () { $(this).removeClass('is-show') }) // すべてのスライダーを非表示にする
    $('.js-feature-slide').eq(2).addClass('is-show'); // スライダーを表示
    $('.feature-slide-nav li a').removeClass('active');
    $('.feature-slide-nav li:nth-child(3) a').addClass('active');
	$('.feature-slide-nav li:nth-child(1) a').addClass('visited');
	$('.feature-slide-nav li:nth-child(2) a').addClass('visited');
	$('.feature-slide-nav li:nth-child(3) a').addClass('visited');
	
	$('.feature-slide-nav li:nth-child(4) a').removeClass('visited');
}

function slideChange04(){
    $('.js-feature-slide').eq(0).removeClass('is-prev');
    $('.js-feature-slide').eq(1).removeClass('is-prev');
    $('.js-feature-slide').eq(3).removeClass('is-prev');

    // 前のスライダーを設定
    if ($('.js-feature-slide').eq(2).hasClass('is-show')) {
      $('.js-feature-slide').eq(2).addClass('is-prev');
    }

    $('.js-feature-slide').each(function () { $(this).removeClass('is-show') }) // すべてのスライダーを非表示にする
    $('.js-feature-slide').eq(3).addClass('is-show');
    $('.feature-slide-nav li a').removeClass('active');
    $('.feature-slide-nav li:nth-child(4) a').addClass('active');
	$('.feature-slide-nav li:nth-child(1) a').addClass('visited');
	$('.feature-slide-nav li:nth-child(2) a').addClass('visited');
	$('.feature-slide-nav li:nth-child(3) a').addClass('visited');
	$('.feature-slide-nav li:nth-child(4) a').addClass('visited');
}

function slideChangeEnd(){
    $('.js-feature-slide').each(function () { $(this).removeClass('is-prev') }) // すべてのスライダーからis-prevを外す
    $('.js-feature-slide').each(function () { $(this).removeClass('is-show') }) // すべてのスライダーを非表示にする
    $('.js-feature-slide').eq(3).addClass('is-show');
}