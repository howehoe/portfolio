// loading
$(function() {
  let h = $(window).height();
  // $('#contents').css('display','none');
  $('.c-loading ,.c-animation').height(h).css('display','block');
});
$(window).on('load', function () {
  $('.c-loading').delay(900).fadeOut(800);
  $('.c-animation').delay(600).fadeOut(300);
  // $('#contents').css('display', 'block');
});
$(function(){
  setTimeout('stopload()',2500);
});
function stopload(){
  $('#contents').css('display','block');
  $('.c-loading').delay(900).fadeOut(800);
  $('.c-animation').delay(600).fadeOut(300);
}
// loading
//hamburger
$(function(){
  $('.p-menu').on('click', function() {
    $('.p-menu').toggleClass('active');
    $('.c-navSP__wrap').toggleClass('open');
    $('body, html').toggleClass('noscroll');
    return false;
  });
});
//hamburger
let $section = $('.scrollify');
let $pager = $('#js-pager');
// scrollify
let option ={
  section:".scrollify",
  easing: 'swing',
  scrollSpeed: 600,
  updateHash: false,
  interstitialSection : ".l-footer",
  before:function(index) {
    pagerCurrent(index);
  },
  afterRender:function() {
    createPager();
  }
};
$(function() {
  $.scrollify(option);
});
function pagerCurrent(index = 0) {
  let $li = $pager.find('li');
  $li.removeClass('is__current');
  $li.eq(index).addClass('is__current');
}
// scrollify
// ページネーションJS
function createPager() {
  $section.each(function(i, e){
    let sectionName = $(e).attr('data-section-name');
    let addClass = '';
      if (i === 0) {
        addClass = 'is__current';
    }
    let html = '';
      html += '<li class="' + addClass + '">';
      html += '<a href="#' + sectionName + '"></a>';
      html += '</li>';
      $pager.append(html);
  });
  pagerLink();
}
function pagerLink () {
  $pager.find('a').on('click', function() {
    $.scrollify.move($(this).attr("href"));
  });
}
// ページネーションJS
//ロケットJS
$(".rocket").click(function() {
  $('.p-lineUP__container').attr("rocket-center", this.id);
  if (this.id == "rocket1") centerrocket1();
  if (this.id == "rocket2") centerrocket2();
  if (this.id == "rocket3") centerrocket3();
});
function centerrocket1() { 
  var tl = new TimelineMax()
  .to('#rocket1', 1, {xPercent: 0, z: 1,opacity: '1'}, 0)
  .to('#rocket2', 1, {xPercent: 140, z:-800 , opacity: '0.6'}, 0)
  .to('#rocket3', 1, {xPercent: -140, z: -800 , opacity: '0.6'}, 0)
}

function centerrocket2() {
  var tl = new TimelineMax()
  .to('#rocket1', 1, {xPercent: -140, z: -800 , opacity: '0.6'}, 0)
  .to('#rocket2', 1, {xPercent: 0, z: 1 , opacity: '1'}, 0)
  .to('#rocket3', 1, {xPercent: 140, z: -800 , opacity: '0.6'}, 0);
}
function centerrocket3() {
  var tl = new TimelineMax()
  .to('#rocket1', 1, {xPercent: 140, z: -800 , opacity: '0.6'}, 0)
  .to('#rocket2', 1, {xPercent: -140, z: -800 , opacity: '0.6'}, 0)
  .to('#rocket3', 1, {xPercent: 0, z: 1 , opacity: '1'}, 0);
}

$(function() {
  centerrocket2();
})
